let question = {
  title: "고양이",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

let app = {
  start: function () {
    let alts = document.querySelectorAll(".alternative"); // get the alternatives

    alts.forEach(
      function (element, index) {
        element.addEventListener(
          "click",
          function () {
            this.checkAnswer(index);
          }.bind(this)
        );
      }.bind(this)
    );

    this.showQuestion(question); // show first question
  },
  //////
  showQuestion: function (q) {
    this.currentQuestion = q; // the question currently shown is stored in this variable

    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });
  },
  //////
  checkAnswer: function (userSelected) {
    if (this.currentQuestion.correctAnswer == userSelected) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  },
};

app.start();
