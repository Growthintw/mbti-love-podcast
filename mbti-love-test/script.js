const modes = {
  simple: {
    label: "Simple test",
    title: "4 題簡單版",
    questions: [
      {
        stage: "吸引",
        axis: "EI",
        prompt: "剛開始被一個人吸引時，你比較常怎麼靠近？",
        left: { letter: "E", label: "主動丟球，創造互動感" },
        right: { letter: "I", label: "先觀察，等有安全感再靠近" }
      },
      {
        stage: "曖昧",
        axis: "SN",
        prompt: "曖昧時，你比較在意哪一種訊號？",
        left: { letter: "S", label: "具體行動與回覆穩定度" },
        right: { letter: "N", label: "想像空間與心理共鳴" }
      },
      {
        stage: "交往",
        axis: "TF",
        prompt: "要不要正式交往時，你比較依靠什麼判斷？",
        left: { letter: "T", label: "條件、節奏、現實合適度" },
        right: { letter: "F", label: "感受、溫度、情緒連結" }
      },
      {
        stage: "磨合",
        axis: "JP",
        prompt: "關係進入磨合時，你比較需要什麼？",
        left: { letter: "J", label: "清楚規則與穩定承諾" },
        right: { letter: "P", label: "彈性空間與自然調整" }
      }
    ]
  },
  deep: {
    label: "Deep test",
    title: "8 題複雜版",
    questions: [
      {
        stage: "吸引",
        axis: "EI",
        prompt: "你會先用互動創造火花，還是先觀察對方是否值得靠近？",
        left: { letter: "E", label: "互動越多越有感" },
        right: { letter: "I", label: "觀察越久越安心" }
      },
      {
        stage: "吸引",
        axis: "SN",
        prompt: "吸引你的，通常是明確條件，還是某種說不出的氣質？",
        left: { letter: "S", label: "具體條件與生活質感" },
        right: { letter: "N", label: "氣場、潛力與故事感" }
      },
      {
        stage: "曖昧",
        axis: "EI",
        prompt: "曖昧時，你偏向把感覺講出來，還是讓對方慢慢感覺？",
        left: { letter: "E", label: "會丟話題與暗示" },
        right: { letter: "I", label: "比較含蓄，等對方靠近" }
      },
      {
        stage: "曖昧",
        axis: "TF",
        prompt: "你在曖昧中比較怕不合適，還是怕對方不夠喜歡？",
        left: { letter: "T", label: "怕浪費時間與錯配" },
        right: { letter: "F", label: "怕感受沒有被接住" }
      },
      {
        stage: "交往",
        axis: "SN",
        prompt: "交往後，你比較重視日常落地，還是一起想像未來？",
        left: { letter: "S", label: "日常照顧與實際行動" },
        right: { letter: "N", label: "共同願景與成長想像" }
      },
      {
        stage: "交往",
        axis: "JP",
        prompt: "進入關係後，你希望節奏更明確，還是保持自然流動？",
        left: { letter: "J", label: "關係要有方向與安排" },
        right: { letter: "P", label: "保留空間才不窒息" }
      },
      {
        stage: "磨合",
        axis: "TF",
        prompt: "吵架或卡住時，你比較想先釐清問題，還是先修復情緒？",
        left: { letter: "T", label: "先把問題講清楚" },
        right: { letter: "F", label: "先讓彼此感覺被理解" }
      },
      {
        stage: "磨合",
        axis: "JP",
        prompt: "磨合成功對你來說，比較像建立規則，還是找到彈性？",
        left: { letter: "J", label: "形成共識與界線" },
        right: { letter: "P", label: "找到彼此可接受的彈性" }
      }
    ]
  }
};

const axisNames = {
  EI: ["外放互動", "內斂觀察"],
  SN: ["現實訊號", "直覺想像"],
  TF: ["理性判斷", "情感連結"],
  JP: ["穩定結構", "彈性探索"]
};

const typeNames = {
  E: "主動創造互動",
  I: "慢熱觀察靠近",
  S: "看重具體行動",
  N: "看重想像共鳴",
  T: "先判斷合不合適",
  F: "先感受有沒有被接住",
  J: "需要明確節奏",
  P: "需要彈性空間"
};

const stageCopy = {
  E: {
    attraction: "你容易靠互動、玩笑、主動丟球製造吸引。",
    ambiguous: "曖昧時你會想推進節奏，讓關係有更多來回。"
  },
  I: {
    attraction: "你會先觀察對方是否安全、穩定、值得靠近。",
    ambiguous: "曖昧時你比較慢熱，但一旦信任會變得很深。"
  },
  S: {
    dating: "交往後你會看對方有沒有把喜歡落實在日常行動。",
    ambiguous: "你不太吃空泛曖昧，具體回覆與見面安排更能讓你安心。"
  },
  N: {
    dating: "你會在關係裡尋找共同想像、成長感與精神連結。",
    ambiguous: "你容易被對方的故事感、潛力與聊天延伸性吸引。"
  },
  T: {
    dating: "你會想確認價值觀、生活節奏與現實條件是否真的合適。",
    adjustment: "磨合時你傾向先釐清問題，不喜歡只有情緒沒有解法。"
  },
  F: {
    dating: "你很在意相處後是不是更像自己，以及情緒是否被接住。",
    adjustment: "磨合時你需要先感覺被理解，才比較能討論問題。"
  },
  J: {
    adjustment: "你會希望關係慢慢建立承諾、規則與可預期的節奏。"
  },
  P: {
    adjustment: "你需要關係保有彈性，磨合最好像一起調整，而不是被規定。"
  }
};

const questionsEl = document.querySelector("#questions");
const modeLabel = document.querySelector("#modeLabel");
const quizTitle = document.querySelector("#quizTitle");
const typeCode = document.querySelector("#typeCode");
const typeName = document.querySelector("#typeName");
const typeSummary = document.querySelector("#typeSummary");
const scoreGrid = document.querySelector("#scoreGrid");
const stageResult = document.querySelector("#stageResult");
const resetButton = document.querySelector("#resetButton");
const tabs = document.querySelectorAll(".mode-tab");

let currentMode = "simple";
let answers = [];

const midpoint = 5.5;

const renderQuestions = () => {
  const mode = modes[currentMode];
  answers = mode.questions.map(() => 5);
  modeLabel.textContent = mode.label;
  quizTitle.textContent = mode.title;
  questionsEl.innerHTML = mode.questions.map((question, index) => `
    <article class="question">
      <div class="question-top">
        <div>
          <small>${question.stage}｜${question.axis}</small>
          <strong>${index + 1}. ${question.prompt}</strong>
        </div>
        <span class="score-pill" id="score-${index}">5</span>
      </div>
      <div class="scale-labels">
        <span><b>1</b> ${question.left.label}</span>
        <input type="range" min="1" max="10" step="1" value="5" data-index="${index}" aria-label="${question.prompt}">
        <span><b>10</b> ${question.right.label}</span>
      </div>
    </article>
  `).join("");

  questionsEl.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);
      answers[index] = Number(event.target.value);
      document.querySelector(`#score-${index}`).textContent = event.target.value;
      calculateResult();
    });
  });

  calculateResult();
};

const calculateResult = () => {
  const mode = modes[currentMode];
  const totals = {
    EI: { left: 0, right: 0, count: 0 },
    SN: { left: 0, right: 0, count: 0 },
    TF: { left: 0, right: 0, count: 0 },
    JP: { left: 0, right: 0, count: 0 }
  };

  mode.questions.forEach((question, index) => {
    const value = answers[index];
    const leftStrength = Math.max(0, midpoint - value);
    const rightStrength = Math.max(0, value - midpoint);
    totals[question.axis].left += leftStrength;
    totals[question.axis].right += rightStrength;
    totals[question.axis].count += 1;
  });

  const letters = Object.entries(totals).map(([axis, total]) => {
    const question = mode.questions.find((item) => item.axis === axis);
    return total.right > total.left ? question.right.letter : question.left.letter;
  });

  const code = letters.join("");
  typeCode.textContent = code;
  typeName.textContent = letters.map((letter) => typeNames[letter]).join("、");
  typeSummary.textContent = `你的感情互動傾向比較像「${code}」。這不是正式 MBTI 診斷，而是一個用來觀察感情互動的快速版本：你怎麼被吸引、怎麼曖昧、怎麼確認關係，以及怎麼磨合。`;

  scoreGrid.innerHTML = Object.entries(totals).map(([axis, total]) => {
    const percent = Math.round((Math.max(total.left, total.right) / (total.count * 4.5 || 1)) * 100);
    const side = total.right > total.left ? axisNames[axis][1] : axisNames[axis][0];
    return `
      <div class="score-item">
        <b>${axis}｜${side}</b>
        <span>傾向強度 ${Math.max(1, percent)}%</span>
      </div>
    `;
  }).join("");

  stageResult.innerHTML = `
    <article><b>吸引</b><p>${stageCopy[letters[0]].attraction}</p></article>
    <article><b>曖昧</b><p>${stageCopy[letters[1]].ambiguous || stageCopy[letters[0]].ambiguous}</p></article>
    <article><b>交往</b><p>${stageCopy[letters[2]].dating || stageCopy[letters[1]].dating}</p></article>
    <article><b>磨合</b><p>${stageCopy[letters[3]].adjustment || stageCopy[letters[2]].adjustment}</p></article>
  `;
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    currentMode = tab.dataset.mode;
    renderQuestions();
  });
});

resetButton.addEventListener("click", renderQuestions);

renderQuestions();
