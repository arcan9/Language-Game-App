// let question = {
//   title: "고양이",
//   alternatives: ["dog", "cat", "bird", "fish"],
//   correctAnswer: 1,
// };

let questions = [
  {
    title: "고양이",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1,
  },
  {
    title: "집",
    alternatives: ["book", "school", "house", "playground"],
    correctAnswer: 2,
  },
  {
    title: "음악",
    alternatives: ["music", "desk", "song", "food"],
    correctAnswer: 0,
  },
  {
    title: "강아지",
    alternatives: ["shoes", "tiger", "horse", "puppy"],
    correctAnswer: 3,
  },
  {
    title: "코끼리",
    alternatives: ["nose", "elephant", "rhino", "big"],
    correctAnswer: 1,
  },
];

let app = {
  start: function () {
    this.currentPosition = 0;

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

    this.showQuestion(questions[this.currentPosition]); // show first question
  },

  showQuestion: function (q) {
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });
  },

  checkAnswer: function (userSelected) {
    currentQuestion = questions[this.currentPosition];

    if (currentQuestion.correctAnswer == userSelected) {
      console.log("correct");
      this.increasePosition();
      this.showQuestion(questions[this.currentPosition]);
    } else {
      console.log("wrong");
    }
  },

  increasePosition: function () {
    this.currentPosition++;

    if (this.currentPosition == questions.length) {
      this.currentPosition = 0;
    }
  },
};

app.start();
