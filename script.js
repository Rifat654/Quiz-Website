// ================ Quiz Data ====================//
const quizData = [
  {
    question: "What does HTML stand for?",

    Options: [
      "Hypertext Markup Language",
      "Hyper transfer Mack Language",
      "Hypertext mac Language",
      "Hypertext Markup land",
    ],
    correct: 0,
  },

  {
    question: "Which CSS property used for change Font Style",

    Options: ["Margin", "Display", "Font Family", "Padding"],
    correct: 2,
  },

  {
    question: "What is JavaScript DOM full form?",
    Options: [
      "Document Object Model",
      "Document Organize Machine",
      "Doctype Oriented Mark ",
      "Document Object Mouse",
    ],

    correct: 0,
  },

  {
    question: "What is the full from of WWW?",
    Options: [
      "Work Run Work",
      "World Wild Water",
      "Wild woks mark",
      "World Wide Web",
    ],

    correct: 3,
  },

  {
    question: "What is the icon to select css class",
    Options: [".", "#", "+", "%"],
    correct: 0,
  },
];

//============ JavaScript Initialization ==============//

const answerElement = document.querySelectorAll(".answer");

const [questionEl, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4  "
  );

const submit = document.querySelector("#submit");

const current_quiz = 0;
const score = 0;

//============= load quiz function ================//

const load = () => {
  const { question, Options } = quizData[current_quiz];
  console.log(Options);

  questionEl.innerText = question;

  Options.forEach(
    (curoptions, index) =>
      (window[`option_${index + 1}`].innerText = curoptions)
  );
};

load();

//============= select answers and clicked button ================//
