const quizData = [
  { question: "Quantitative data is typically:", options: ["Textual", "Numerical", "Visual", "Symbolic"], answer: 1 },
  { question: "Which of the following is qualitative?", options: ["Revenue", "Age", "Opinions", "Sales figures"], answer: 2 },
  { question: "Ordinal data is a type of:", options: ["Quantitative Data", "Qualitative Data", "Random Data", "Continuous Data"], answer: 1 },
  { question: "Which tool is typically used to analyse qualitative data?", options: ["Excel", "SQL", "Tableau", "NVivo"], answer: 3 },
  { question: "Which of the following is discrete data?", options: ["Height", "Age", "Temperature", "Number of employees"], answer: 3 },
  { question: "Qualitative data is best represented using:", options: ["Scatter plots", "Word clouds", "Histograms", "Bar charts"], answer: 1 },
  { question: "Continuous data can:", options: ["Only be whole numbers", "Take any value within a range", "Be text-based", "Be unordered"], answer: 1 },
  { question: "What does qualitative data help us understand?", options: ["Trends", "Statistics", "Behavior and context", "Percentages"], answer: 2 },
  { question: "Which file format is often used for quantitative data?", options: [".jpg", ".csv", ".txt", ".json"], answer: 1 },
  { question: "Which is a characteristic of nominal data?", options: ["Ranked order", "Numeric scale", "Unordered categories", "Decimal points"], answer: 2 }
];

let current = 0;
let score = 0;

const qEl = document.getElementById('qz-module-question');
const aEl = document.getElementById('qz-module-answers');
const sBtn = document.getElementById('qz-module-submit');
const fbEl = document.getElementById('qz-module-feedback');
const rEl = document.getElementById('qz-module-result');
const pbFill = document.getElementById('qz-module-progress');
const pcEl = document.getElementById('qz-module-progress-count');

function loadQuestion() {
  const q = quizData[current];
  qEl.textContent = q.question;
  aEl.innerHTML = '';
  fbEl.textContent = '';
  sBtn.textContent = 'Check Answer';
  sBtn.disabled = true;

  q.options.forEach((option, i) => {
    const btn = document.createElement('div');
    btn.className = 'qz-module-option';
    btn.textContent = option;
    btn.onclick = () => {
      document.querySelectorAll('.qz-module-option').forEach(el => el.classList.remove('selected'));
      btn.classList.add('selected');
      sBtn.disabled = false;
    };
    aEl.appendChild(btn);
  });

  pbFill.style.width = `${(current / quizData.length) * 100}%`;
  pcEl.textContent = `${current + 1} of ${quizData.length}`;
}

sBtn.addEventListener('click', handleCheck);

function handleCheck() {
  const selected = document.querySelector('.qz-module-option.selected');
  if (!selected) return;

  const selectedIndex = Array.from(aEl.children).indexOf(selected);
  const isCorrect = selectedIndex === quizData[current].answer;

  fbEl.textContent = isCorrect ? 'Correct!' : `Incorrect. Correct answer: ${quizData[current].options[quizData[current].answer]}`;
  fbEl.style.color = isCorrect ? 'green' : 'red';
  score += isCorrect ? 1 : 0;

  sBtn.textContent = current + 1 < quizData.length ? 'Next Question' : 'Finish';

  sBtn.removeEventListener('click', handleCheck);
  sBtn.addEventListener('click', handleNext);
}

function handleNext() {
  current++;
  if (current < quizData.length) {
    sBtn.removeEventListener('click', handleNext);
    sBtn.addEventListener('click', handleCheck);
    loadQuestion();
  } else {
    qEl.style.display = 'none';
    aEl.style.display = 'none';
    sBtn.style.display = 'none';
    fbEl.style.display = 'none';
    pcEl.style.display = 'none';
    rEl.textContent = `Quiz complete! Your score: ${((score / quizData.length) * 100).toFixed(0)}%`;
    pbFill.style.width = '100%';
  }
}

loadQuestion();
