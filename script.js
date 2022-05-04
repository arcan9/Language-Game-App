let question = {
  title: "고양이",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

function start() {
  // get the alternatives
  let alts = document.querySelectorAll(".alternative");

  // event listeners should be initialized at the start of the app
  // and only happen within this function
  alts.forEach(function (element, index) {
    element.addEventListener("click", function () {
      // log as placeholder
      console.log("check correct answer");
    });
  });
  // show first question
  showQuestion(question);
}

// showQuestion simply shows the question and alternatives
function showQuestion(q) {
  // select dom element
  // modify dom
  let titleDiv = document.getElementById("title");
  titleDiv.textContent = q.title;

  let alts = document.querySelectorAll(".alternative");

  alts.forEach(function (element, index) {
    element.textContent = q.alternatives[index];
  });
}

// call the start function
start();
