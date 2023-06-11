let arrayWithAnswers = [];
let object = {};
const getUserChoices = (e) => {
  let answer = e.target.textContent;
  let id = e.target.id;
  if (e.target.classList.contains('selected-answer')) {
    e.target.classList.remove("selected-answer");
  } else {
    e.target.classList.add("selected-answer");

  }
  if (!object.hasOwnProperty(id)) {
    object[id] = answer;
    arrayWithAnswers.push(object)
  } else {
    object[id] = answer;
  }
  console.log(arrayWithAnswers)
}
export default getUserChoices;