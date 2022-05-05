let question = {
  title: "고양이",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

let app = {
  start: function () {
    // get the alternatives
    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function (element, index) {
      element.addEventListener("click", function () {
        // log as placeholder
        console.log("check correct answer");
      });
    });
    // show first question
    this.showQuestion(question);
  },
  showQuestion: function (q) {
    // select dom element
    // modify dom
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });
  },
};

// call the start function
app.start();
