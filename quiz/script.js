const quizData = [
  {
    question: 'Which exoplanet was the first ever discovered around a Sun-like star?',
    options: ['51 Pegasi b', 'HD 189733 b', 'Trappist-1e', 'WASP-12b'],
    answer: '51 Pegasi b',
  },
  {
    question: 'Which exoplanet is located in the Luyten’s Star system?',
    options: ['Kepler_186f', 'Proxima Centauri b', 'LHS-1140', 'GJ 3470 b'],
    answer: 'LHS-1140',
  },
  {
    question: 'Which of these is a gas giant exoplanet orbiting a red dwarf star?',
    options: ['GJ 3470 b', 'HD 209458 b', 'WASP-17b', 'Trappist-1e'],
    answer: 'GJ 3470 b',
  },
  {
    question: 'What is the main atmospheric composition of HD 189733 b?',
    options: ['Methane', 'Oxygen', 'Water vapor', 'Hydrogen'],
    answer: 'Methane',
  },
  {
    question: 'Which of these exoplanets is located in the Proxima Centauri system?',
    options: ['LHS-1140', 'Proxima Centauri b', 'HD 209458 b', 'WASP-12b'],
    answer: 'Proxima Centauri b',
  },
  {
    question: 'Which exoplanet orbits within the habitable zone of its star?',
    options: ['Trappist-1e', 'WASP-17b', 'GJ 3470 b', 'HD 189733 b'],
    answer: 'Trappist-1e',
  },
  {
    question: 'Which of these planets has a “super-Earth” classification?',
    options: ['K2-18 b', 'WASP-12b', 'HD 209458 b', 'Kepler_186f'],
    answer: 'K2-18 b',
  },
  {
    question: 'Which exoplanet is known for its extremely close proximity to its host star?',
    options: ['WASP-12b', '51 Pegasi b', 'Trappist-1e', 'GJ 3470 b'],
    answer: 'WASP-12b',
  },
  {
    question: 'What characteristic makes WASP-17b unique among exoplanets?',
    options: ['It orbits a red dwarf', 'It has a retrograde orbit', 'It is rocky and small', 'It has a blue atmosphere'],
    answer: 'It has a retrograde orbit',
  },
  {
    question: 'Which exoplanet orbits the M dwarf star Trappist-1?',
    options: ['Kepler_186f', 'HD 189733 b', 'WASP-12b', 'Trappist-1e'],
    answer: 'Trappist-1e',
  },
  {
    question: "Which telescope is used to discover the most exoplanets?",
    options: ["Hubble", "Kepler", "Spitzer", "James Webb"],
    answer: "Kepler"
  },
  {
    question: "What method is used to detect the slight dimming of a star's light when an exoplanet passes in front of it?",
    options: ["Doppler Shift", "Transit", "Direct Imaging", "Gravitational Microlensing"],
    answer: "Transit"
  },
  {
    question: "What type of star is most commonly associated with exoplanets discovered to date?",
    options: ["Red Dwarf", "White Dwarf", "Blue Giant", "Yellow Dwarf"],
    answer: "Red Dwarf"
  },
  {
    question: "Which space telescope has discovered over 2,600 exoplanets?",
    options: ["Kepler", "Hubble", "Spitzer", "James Webb"],
    answer: "Kepler"
  },
  {
    question: "What is the habitable zone also referred to as?",
    options: ["Goldilocks Zone", "Frozen Zone", "Lava Zone", "Radiation Zone"],
    answer: "Goldilocks Zone"
  },
  {
    question: "Which exoplanet is considered the most Earth-like?",
    options: ["Kepler-452b", "Proxima Centauri b", "TRAPPIST-1e", "WASP-12b"],
    answer: "Proxima Centauri b"
  },
  {
    question: "Which technique measures the wobble of a star caused by the gravitational pull of an orbiting planet?",
    options: ["Doppler Spectroscopy", "Transit Method", "Astrometry", "Direct Imaging"],
    answer: "Doppler Spectroscopy"
  },
  {
    question: "Which exoplanet detection method relies on the bending of light by gravity?",
    options: ["Microlensing", "Transit", "Doppler Spectroscopy", "Direct Imaging"],
    answer: "Microlensing"
  },
  {
    question: "What is the primary component of Jupiter-like exoplanets?",
    options: ["Hydrogen and Helium", "Carbon Dioxide", "Oxygen", "Methane"],
    answer: "Hydrogen and Helium"
  },
  {
    question: "Which exoplanet system has seven Earth-sized planets?",
    options: ["TRAPPIST-1", "Alpha Centauri", "Kepler-62", "Proxima Centauri"],
    answer: "TRAPPIST-1"
  },
  {
    question: "What is the smallest type of exoplanet discovered so far?",
    options: ["Mars-sized", "Super-Earth", "Gas Giant", "Neptune-like"],
    answer: "Mars-sized"
  },
  {
    question: "Which method is often used to confirm the existence of an exoplanet after its discovery?",
    options: ["Radial Velocity", "Direct Imaging", "Transit", "Astrometry"],
    answer: "Radial Velocity"
  },
  {
    question: "Which of the following is NOT a potential sign of life on an exoplanet?",
    options: ["Methane", "Oxygen", "Carbon Dioxide", "Ammonia"],
    answer: "Ammonia"
  },
  {
    question: "What is a rogue planet?",
    options: ["A planet with no star", "A planet with two stars", "A planet made entirely of ice", "A planet in the habitable zone"],
    answer: "A planet with no star"
  },
  {
    question: "What is the first exoplanet ever discovered called?",
    options: ["51 Pegasi b", "Kepler-22b", "HD 209458 b", "Proxima Centauri b"],
    answer: "51 Pegasi b"
  },
  {
    question: "Which planet has the fastest wind speeds?",
    options: ["HD 189733b", "Jupiter", "WASP-12b", "Neptune"],
    answer: "HD 189733b"
  },
  {
    question: "Which exoplanet is known as a 'Hot Jupiter'?",
    options: ["51 Pegasi b", "Proxima Centauri b", "Kepler-62f", "GJ 1214b"],
    answer: "51 Pegasi b"
  },
  {
    question: "Which star is closest to the Sun?",
    options: ["Proxima Centauri", "Sirius", "Betelgeuse", "Alpha Centauri A"],
    answer: "Proxima Centauri"
  },
  {
    question: "Which exoplanet has a year shorter than Earth’s?",
    options: ["WASP-12b", "Kepler-22b", "Proxima Centauri b", "TRAPPIST-1e"],
    answer: "WASP-12b"
  },
  {
    question: "Which of these is an icy exoplanet?",
    options: ["GJ 1214b", "Kepler-452b", "WASP-17b", "HD 189733 b"],
    answer: "GJ 1214b"
  },
  {
    question: "Which exoplanet has the shortest orbital period around its star?",
    options: ["WASP-12b", "HD 209458 b", "Kepler-62e", "51 Pegasi b"],
    answer: "WASP-12b"
  },
  {
    question: "Which telescope is expected to find exoplanets by directly imaging them?",
    options: ["James Webb", "Kepler", "Hubble", "Spitzer"],
    answer: "James Webb"
  },
  {
    question: "What type of exoplanet is commonly referred to as a 'Super-Earth'?",
    options: ["A rocky planet larger than Earth", "A gas giant", "A planet with rings", "An ice giant"],
    answer: "A rocky planet larger than Earth"
  },
  {
    question: "What is the name of the zone where conditions may be just right for liquid water?",
    options: ["Habitable Zone", "Frozen Zone", "Radiation Zone", "Lava Zone"],
    answer: "Habitable Zone"
  },
  {
    question: "Which exoplanet has a highly eccentric orbit?",
    options: ["HD 80606 b", "Kepler-22b", "TRAPPIST-1d", "WASP-12b"],
    answer: "HD 80606 b"
  },
  {
    question: "What element is commonly found in the atmospheres of gas giants?",
    options: ["Hydrogen", "Oxygen", "Carbon Dioxide", "Methane"],
    answer: "Hydrogen"
  },
  {
    question: "Which of the following planets is closest in size to Earth?",
    options: ["Kepler-452b", "WASP-12b", "Proxima Centauri b", "GJ 1214b"],
    answer: "Kepler-452b"
  },
  {
    question: "Which of these exoplanets is located in the Alpha Centauri system?",
    options: ["Proxima Centauri b", "WASP-17b", "HD 209458 b", "Kepler-62e"],
    answer: "Proxima Centauri b"
  },
  {
    question: "Which of these exoplanets is a gas giant?",
    options: ["WASP-12b", "Kepler-22b", "Proxima Centauri b", "GJ 1214b"],
    answer: "WASP-12b"
  },
  {
    question: "Which exoplanet has a thick atmosphere with a lot of methane?",
    options: ["GJ 1214b", "Kepler-62f", "WASP-17b", "Proxima Centauri b"],
    answer: "GJ 1214b"
  },
];

// Shuffle function for random question selection
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
const totalQuestions = 10; 
let randomQuestions = [];

function selectRandomQuestions() {
  shuffleArray(quizData);
  randomQuestions = quizData.slice(0, totalQuestions); 
}

function displayQuestion() {
  const questionData = randomQuestions[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);

    option.addEventListener('click', function () {
      const allOptions = document.querySelectorAll('.option');
      allOptions.forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
    });
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === randomQuestions[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: randomQuestions[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: randomQuestions[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < randomQuestions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';

  const scorePercentage = (score / randomQuestions.length) * 100;
  resultContainer.innerHTML = `You scored ${score} out of ${randomQuestions.length} (${scorePercentage.toFixed(2)}%)!`;

  // Progress bar for correct and incorrect answers
  const progressBar = document.createElement('div');
  progressBar.className = 'progress';
  const progress = document.createElement('div');
  progress.className = 'progress-bar';
  progress.style.width = `${scorePercentage}%`;
  progress.innerHTML = `${scorePercentage.toFixed(2)}% Correct`;
  progressBar.appendChild(progress);
  resultContainer.appendChild(progressBar);

  if (scorePercentage >= 65) {
    showConfetti();
    resultContainer.innerHTML += '<p>Congratulations! You did great!</p>';
  }
  else{
    resultContainer.innerHTML += '<p>Good try! Can do better!</p>';
  }
}

function showConfetti() {
  const duration = 2 * 1000; 
  const end = Date.now() + duration;

  const colors = ['#bb0000', '#ffffff', '#ffbb00', '#00bb00', '#0000bb'];

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      startVelocity: 30,
      decay: 0.9,
      scalar: 1.2,
      colors: colors,
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      startVelocity: 30,
      decay: 0.9,
      scalar: 1.2,
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
    
  })();
}


function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  selectRandomQuestions(); 
  displayQuestion();
}

function showAnswers() {
  resultContainer.innerHTML = '<h3>Review Incorrect Answers</h3>';
  incorrectAnswers.forEach((item, index) => {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review'; 
    reviewElement.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; 
    reviewElement.innerHTML = `<p><strong>Question:</strong> ${item.question}</p>
                               <p><strong>Your answer:</strong> ${item.incorrectAnswer}</p>
                               <p><strong>Correct answer:</strong> ${item.correctAnswer}</p>`;
    resultContainer.appendChild(reviewElement);
  });
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswers);


selectRandomQuestions();
displayQuestion();