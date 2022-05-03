let question = {
  title: "고양이",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

function showQuestion(q) {
  // select dom element
  // modify dom
  let titleDiv = document.getElementById("title");
  titleDiv.textContent = q.title;

  // select by query
  let alts = document.querySelectorAll(".alternative");

  alts.forEach(function (element, index) {
    element.textContent = q.alternatives[index];

    element.addEventListener("click", function () {
      if (q.correctAnswer == index) {
        alert("Correct answer!");
      } else {
        alert("Wrong answer!");
      }
    });
  });
}

showQuestion(question);

function display() {
  alert("You clicked me!");
}

let button = document.getElementById("btn");
button.addEventListener("click", display);
