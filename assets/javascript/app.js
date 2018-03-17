var panel = $("#quiz-area");

var questions = [{
  question: "What was the Emperor Dalek's first sentence ?",
  answers: ["I am the god of all Daleks!", "Patience my breathren!", "They survived through me!", "Purify the Earth with fire!"],
  correctAnswer: "Patience my breathren!"
}, {
  question: "Citizens will get a free upgrade!",
  answers: ["Cyberman in 'Age of Steel'", "Cyberman in 'Doomsday'", "Clockwork Robot in 'Girl in the Fireplace'", "A Dalek in 'Bad Wolf'"],
  correctAnswer: "Cyberman in 'Age of Steel'"
}, {
  question: "... You will be EXTERMINATED!",
  answers: ["Dalek Jast", "Dalek Thay", "Emperor Dalek", "Dalek Khan"],
  correctAnswer: "Emperor Dalek"
}, {
  question: "How did you fit the outside around the inside ?",
  answers: ["Blon Fel Fotch Pasameer-Day Slitheen in 'Boom Town'", "Mickey Smith in 'Rose'", "Jackie Tyler in 'Aliens of London'", "Captain Jack Harkness in 'The Doctor Dances'"],
  correctAnswer: "Blon Fel Fotch Pasameer-Day Slitheen in 'Boom Town'"
}, {
  question: "Will you stop following me ?!",
  answers: ["An Ood in 'The Impossible Planet'", "The Doctor in 'Girl in the Fireplace'", "Rose in 'World War Three'", "Clive in 'Rose'"],
  correctAnswer: "The Doctor in 'Girl in the Fireplace'"
}, {
  question: "When does Brother Lassar say 'Become a God! ' ?",
  answers: ["Tooth and Claw", "School Reunion", "Girl in the Fireplace", "New Earth"],
  correctAnswer: "School Reunion"
}, {
  question: "But it is possible that the world might implode if you switch to ITV tonight!",
  answers: ["The Doctor", "Brother Lassar", "Jocrassa Fel Fotch Pasameer-Day Slitheen", "Queen Victoria"],
  correctAnswer: "The Doctor"
}, {
  question: "See you in hell!",
  answers: ["Sip Fel Fotch Pasameer-Day Slitheen in 'Aliens of London'", "Jackie Tyler in 'Rose'", "Pete Tyler in 'Father's Day'", "Captain Jack Harkness in 'Boom Town'"],
  correctAnswer: "Captain Jack Harkness in 'Boom Town'"
}];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
