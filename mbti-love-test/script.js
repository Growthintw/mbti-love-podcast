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
    label: "Practice test",
    title: "24 題磨合實戰版",
    questions: [
      {
        stage: "吸引",
        axis: "EI",
        prompt: "回想你上一次對人有好感時，你比較常主動製造互動，還是先觀察對方的反應？",
        left: { letter: "E", label: "主動開話題、約見面、丟球" },
        right: { letter: "I", label: "先觀察細節，確認安全再靠近" }
      },
      {
        stage: "吸引",
        axis: "SN",
        prompt: "過去真正吸引你的對象，通常是有具體條件打中你，還是相處時有一種說不出的感覺？",
        left: { letter: "S", label: "外型、能力、生活方式很明確" },
        right: { letter: "N", label: "氣場、故事感、聊天延伸性很強" }
      },
      {
        stage: "吸引",
        axis: "TF",
        prompt: "你曾經被吸引後，會先確認對方現實上適不適合，還是先順著喜歡的感覺往前走？",
        left: { letter: "T", label: "先看條件、狀態、可行性" },
        right: { letter: "F", label: "先看心動、溫度、被理解感" }
      },
      {
        stage: "吸引",
        axis: "JP",
        prompt: "有好感時，你比較常把下一步安排清楚，還是讓互動自然發展？",
        left: { letter: "J", label: "會想安排下一次見面或確認節奏" },
        right: { letter: "P", label: "先不要太定義，讓感覺流動" }
      },
      {
        stage: "吸引",
        axis: "EI",
        prompt: "如果對方讓你有興趣，你過去比較常直接表現熱度，還是用比較不明顯的方式測試？",
        left: { letter: "E", label: "熱度會被看見，互動會變多" },
        right: { letter: "I", label: "會暗中觀察，不想太快暴露" }
      },
      {
        stage: "吸引",
        axis: "SN",
        prompt: "你實際喜歡過的人，讓你留下印象的是穩定可見的行動，還是你們之間有很多想像空間？",
        left: { letter: "S", label: "做了什麼、是否穩定最有感" },
        right: { letter: "N", label: "聊出可能性與未來感最有感" }
      },
      {
        stage: "曖昧",
        axis: "EI",
        prompt: "曖昧時如果你想推進關係，過去你比較常主動丟訊號，還是等對方先跨一步？",
        left: { letter: "E", label: "會主動丟訊號，看對方接不接" },
        right: { letter: "I", label: "會等對方明確一點才回應" }
      },
      {
        stage: "曖昧",
        axis: "SN",
        prompt: "曖昧中讓你安心的，通常是對方有具體行動，還是你感覺到彼此有默契？",
        left: { letter: "S", label: "固定聯絡、約見面、說到做到" },
        right: { letter: "N", label: "默契、共鳴、懂你的暗示" }
      },
      {
        stage: "曖昧",
        axis: "TF",
        prompt: "曖昧拖久時，你過去比較常開始評估值不值得，還是先在意對方到底喜不喜歡你？",
        left: { letter: "T", label: "評估時間成本與關係可行性" },
        right: { letter: "F", label: "在意自己有沒有被選擇" }
      },
      {
        stage: "曖昧",
        axis: "JP",
        prompt: "曖昧沒有明確進展時，你過去比較想把關係講清楚，還是再給一點時間觀察？",
        left: { letter: "J", label: "想確認關係，不想一直模糊" },
        right: { letter: "P", label: "可以再觀察，不急著定義" }
      },
      {
        stage: "曖昧",
        axis: "TF",
        prompt: "當對方忽冷忽熱時，你比較常拿事實核對對方行為，還是先被情緒影響？",
        left: { letter: "T", label: "看頻率、行動、前後一致性" },
        right: { letter: "F", label: "先感到不安、委屈或失落" }
      },
      {
        stage: "曖昧",
        axis: "JP",
        prompt: "你有曖昧失敗的經驗時，原因比較常是節奏沒有被確認，還是太快被框住後失去自然感？",
        left: { letter: "J", label: "卡在沒有承諾與下一步" },
        right: { letter: "P", label: "卡在壓力太快、太像被規定" }
      },
      {
        stage: "交往",
        axis: "EI",
        prompt: "正式交往後，你過去比較常把問題拿出來聊，還是先自己消化一段時間？",
        left: { letter: "E", label: "會講出來，希望一起面對" },
        right: { letter: "I", label: "會先整理，不想立刻碰撞" }
      },
      {
        stage: "交往",
        axis: "SN",
        prompt: "交往後最讓你覺得被愛的經驗，是對方把小事做好，還是對方懂你的深層想法？",
        left: { letter: "S", label: "照顧日常、記得細節、說到做到" },
        right: { letter: "N", label: "懂你的脈絡、願景與內在世界" }
      },
      {
        stage: "交往",
        axis: "TF",
        prompt: "你曾經決定要不要繼續一段關係時，比較依據相處是否合理，還是自己是否還有愛？",
        left: { letter: "T", label: "看問題能不能解、合不合適" },
        right: { letter: "F", label: "看感情還在不在、心有沒有靠近" }
      },
      {
        stage: "交往",
        axis: "JP",
        prompt: "關係穩定後，你比較容易因為沒有共同規劃而焦慮，還是因為規劃太滿而想逃？",
        left: { letter: "J", label: "沒有方向會不安" },
        right: { letter: "P", label: "太固定會窒息" }
      },
      {
        stage: "交往",
        axis: "SN",
        prompt: "你過去最常因為哪種落差失望：對方沒有做到說過的事，還是你們想像的未來不一致？",
        left: { letter: "S", label: "承諾沒有落實到行動" },
        right: { letter: "N", label: "未來想像與成長方向不同" }
      },
      {
        stage: "交往",
        axis: "TF",
        prompt: "發現彼此不合時，你比較常先找解法與分工，還是先確認彼此還願不願意靠近？",
        left: { letter: "T", label: "先拆問題、談方法、看能不能修" },
        right: { letter: "F", label: "先確認心意、情緒與被在乎感" }
      },
      {
        stage: "磨合",
        axis: "EI",
        prompt: "吵架後你過去比較常主動開口修復，還是需要先安靜一段時間才回來談？",
        left: { letter: "E", label: "會主動破冰，希望快點修復" },
        right: { letter: "I", label: "需要冷靜，整理完才有力氣談" }
      },
      {
        stage: "磨合",
        axis: "SN",
        prompt: "你們磨合生活習慣時，真正有用的是具體做法改變，還是重新理解彼此為什麼這樣做？",
        left: { letter: "S", label: "訂做法、分工、流程最有效" },
        right: { letter: "N", label: "理解背後需求與脈絡最有效" }
      },
      {
        stage: "磨合",
        axis: "TF",
        prompt: "遇到重複吵的問題時，你比較常要求對方改行為，還是希望對方先理解你的感受？",
        left: { letter: "T", label: "行為要改，不然問題會重演" },
        right: { letter: "F", label: "感受要被懂，才有力氣調整" }
      },
      {
        stage: "磨合",
        axis: "JP",
        prompt: "最費力的一次磨合裡，最後比較像靠明確規則成功，還是靠彼此放寬標準成功？",
        left: { letter: "J", label: "靠規則、界線、固定做法撐過去" },
        right: { letter: "P", label: "靠彈性、退一步、重新協調撐過去" }
      },
      {
        stage: "磨合",
        axis: "JP",
        prompt: "如果磨合沒有成功，你回頭看比較常是因為一直沒有定下共識，還是因為共識太硬、沒辦法生活？",
        left: { letter: "J", label: "沒有共識，問題一直重複" },
        right: { letter: "P", label: "共識太硬，彼此都不像自己" }
      },
      {
        stage: "磨合",
        axis: "EI",
        prompt: "關係低潮時，你過去比較常用更多互動把溫度拉回來，還是先保留距離讓彼此恢復？",
        left: { letter: "E", label: "增加互動、約會、把話聊開" },
        right: { letter: "I", label: "保留空間、降低刺激、慢慢回來" }
      }
    ]
  },
  lifestyle: {
    label: "Lifestyle test",
    title: "24 題原始人格版｜生活方式面",
    summary: "這個版本不從感情事件出發，而是用日常生活方式觀察你的原始人格傾向：你怎麼補能量、怎麼接收資訊、怎麼做決定，以及怎麼安排生活。",
    questions: [
      {
        stage: "能量",
        axis: "EI",
        prompt: "休假一整天後，你通常是因為見到人而恢復精神，還是因為獨處而恢復精神？",
        left: { letter: "E", label: "跟人互動後比較有電" },
        right: { letter: "I", label: "獨處安靜後比較有電" }
      },
      {
        stage: "能量",
        axis: "EI",
        prompt: "到一個新場合時，你比較常自然找人聊天，還是先觀察現場氣氛？",
        left: { letter: "E", label: "先開口、先建立互動" },
        right: { letter: "I", label: "先觀察、熟了再加入" }
      },
      {
        stage: "能量",
        axis: "EI",
        prompt: "工作或生活卡住時，你比較常邊講邊想清楚，還是自己想完再說？",
        left: { letter: "E", label: "講出來才會慢慢清楚" },
        right: { letter: "I", label: "先在腦中整理比較安心" }
      },
      {
        stage: "能量",
        axis: "EI",
        prompt: "連續社交幾天後，你比較像越來越活，還是需要把自己收回來？",
        left: { letter: "E", label: "越互動越容易進入狀態" },
        right: { letter: "I", label: "需要空白時間恢復自己" }
      },
      {
        stage: "能量",
        axis: "EI",
        prompt: "朋友臨時約你出門，你比較容易被氣氛帶動答應，還是先衡量自己有沒有餘裕？",
        left: { letter: "E", label: "有局就容易被點燃" },
        right: { letter: "I", label: "先看自己還有沒有能量" }
      },
      {
        stage: "能量",
        axis: "EI",
        prompt: "你分享生活近況時，比較常直接講很多細節，還是只講給少數熟的人聽？",
        left: { letter: "E", label: "分享會讓我更有連結感" },
        right: { letter: "I", label: "只想對信任的人慢慢說" }
      },
      {
        stage: "資訊",
        axis: "SN",
        prompt: "學一個新東西時，你比較需要明確步驟範例，還是先理解大方向與原理？",
        left: { letter: "S", label: "先有範例和步驟才好上手" },
        right: { letter: "N", label: "先懂概念和可能性才有感" }
      },
      {
        stage: "資訊",
        axis: "SN",
        prompt: "你回想一段經驗時，腦中比較常浮現具體畫面細節，還是那件事帶給你的意義？",
        left: { letter: "S", label: "時間、場景、動作、細節" },
        right: { letter: "N", label: "脈絡、象徵、背後意義" }
      },
      {
        stage: "資訊",
        axis: "SN",
        prompt: "逛街或選東西時，你比較常看實用性與規格，還是想像它會帶來什麼生活感？",
        left: { letter: "S", label: "規格、價格、用途要清楚" },
        right: { letter: "N", label: "風格、感覺、想像空間更重要" }
      },
      {
        stage: "資訊",
        axis: "SN",
        prompt: "聽別人講故事時，你比較容易注意事情有沒有講清楚，還是注意背後可能代表什麼？",
        left: { letter: "S", label: "事實順序和細節要對" },
        right: { letter: "N", label: "會聯想到更大的模式" }
      },
      {
        stage: "資訊",
        axis: "SN",
        prompt: "做計畫前，你比較常先查資料和可用資源，還是先想一個可能的方向？",
        left: { letter: "S", label: "先看現有條件與資料" },
        right: { letter: "N", label: "先抓方向與可能路徑" }
      },
      {
        stage: "資訊",
        axis: "SN",
        prompt: "你對一個地方留下印象，通常是它的服務、動線、食物等細節，還是它整體給你的氛圍？",
        left: { letter: "S", label: "具體體驗決定印象" },
        right: { letter: "N", label: "整體氛圍和故事感決定印象" }
      },
      {
        stage: "判斷",
        axis: "TF",
        prompt: "朋友找你討論問題時，你比較常先幫他分析解法，還是先接住他的感受？",
        left: { letter: "T", label: "先拆問題，看怎麼解" },
        right: { letter: "F", label: "先理解他為什麼難受" }
      },
      {
        stage: "判斷",
        axis: "TF",
        prompt: "要拒絕別人時，你比較在意理由是否合理，還是對方會不會受傷？",
        left: { letter: "T", label: "理由清楚就比較能拒絕" },
        right: { letter: "F", label: "會顧慮對方感受和關係" }
      },
      {
        stage: "判斷",
        axis: "TF",
        prompt: "團隊意見不同時，你比較常回到標準與效率，還是回到大家能不能接受？",
        left: { letter: "T", label: "標準、效率、結果要先清楚" },
        right: { letter: "F", label: "感受、氣氛、共識也很重要" }
      },
      {
        stage: "判斷",
        axis: "TF",
        prompt: "買一個重要東西前，你比較常用優缺點比較表決定，還是看自己真正喜不喜歡？",
        left: { letter: "T", label: "用條件比較後比較安心" },
        right: { letter: "F", label: "心裡有沒有喜歡很關鍵" }
      },
      {
        stage: "判斷",
        axis: "TF",
        prompt: "別人做錯事時，你比較快看到問題責任，還是先想他是不是有難處？",
        left: { letter: "T", label: "先看問題在哪、誰該負責" },
        right: { letter: "F", label: "先想情境、動機和難處" }
      },
      {
        stage: "判斷",
        axis: "TF",
        prompt: "你做人生選擇時，比較常問自己哪個選項最合理，還是哪個選項讓你更像自己？",
        left: { letter: "T", label: "合理、穩定、可執行" },
        right: { letter: "F", label: "有感、真實、符合自己" }
      },
      {
        stage: "節奏",
        axis: "JP",
        prompt: "旅行前你比較常把行程安排清楚，還是只抓幾個點到時候再看？",
        left: { letter: "J", label: "先訂好時間、路線、備案" },
        right: { letter: "P", label: "保留彈性，現場看心情" }
      },
      {
        stage: "節奏",
        axis: "JP",
        prompt: "房間或桌面變亂時，你比較常定期整理，還是等真的受不了再一次處理？",
        left: { letter: "J", label: "定期整理比較舒服" },
        right: { letter: "P", label: "累積到一定程度再整理" }
      },
      {
        stage: "節奏",
        axis: "JP",
        prompt: "面對截止日期，你比較常提早分段完成，還是靠最後一段壓力衝刺？",
        left: { letter: "J", label: "提早排進度，分段完成" },
        right: { letter: "P", label: "接近 deadline 反而更有火力" }
      },
      {
        stage: "節奏",
        axis: "JP",
        prompt: "生活中突然出現變動時，你比較容易想先重排計畫，還是順著變化看看？",
        left: { letter: "J", label: "先重排，恢復掌控感" },
        right: { letter: "P", label: "先順一下，看會發生什麼" }
      },
      {
        stage: "節奏",
        axis: "JP",
        prompt: "一週開始前，你比較常先列出要完成的事，還是每天依狀態決定優先順序？",
        left: { letter: "J", label: "先列清單與優先順序" },
        right: { letter: "P", label: "每天看狀態動態調整" }
      },
      {
        stage: "節奏",
        axis: "JP",
        prompt: "和別人合作時，你比較需要明確規則與分工，還是只要方向對就可以彈性協作？",
        left: { letter: "J", label: "分工、規則、時間要清楚" },
        right: { letter: "P", label: "方向對即可，過程可彈性調整" }
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
const attachmentResult = document.querySelector("#attachmentResult");
const scoreGrid = document.querySelector("#scoreGrid");
const stageResult = document.querySelector("#stageResult");
const resetButton = document.querySelector("#resetButton");
const tabs = document.querySelectorAll(".mode-tab");

let currentMode = "simple";
let answers = [];

const midpoint = 5.5;

const getAttachmentInsight = (letters) => {
  const averageDistance = answers.reduce((sum, value) => sum + Math.abs(value - midpoint), 0) / answers.length;
  const [energy, signal, decision, rhythm] = letters;

  if (averageDistance <= 1.15) {
    return {
      name: "安全型互動傾向",
      text: "你的答案多半落在中間區間，代表你在關係裡比較能同時保留自己，也能靠近對方。你不一定急著確認，也不會一有壓力就完全抽離。",
      reminder: "提醒：安全不是沒有焦慮，而是焦慮出現時，仍然能溝通、修復、回到關係裡。"
    };
  }

  if (energy === "I" && decision === "F") {
    return {
      name: "焦慮逃避混合傾向",
      text: "你可能很想靠近，但又會先保護自己。當對方靠太近時你會緊張，對方太遠時你又容易不安，所以關係裡可能出現忽冷忽熱的拉扯。",
      reminder: "提醒：你真正需要的不是立刻確定答案，而是讓對方知道你的靠近速度與安全感來源。"
    };
  }

  if ((decision === "F" && energy === "E") || (decision === "F" && rhythm === "J")) {
    return {
      name: "焦慮型依附傾向",
      text: "你在感情裡很在意回應、承諾與被選擇的感覺。對方訊息變少、態度不明確，容易讓你開始腦補或想更快確認關係。",
      reminder: "提醒：你的敏感是關係雷達，但需要搭配事實核對，才不會把不確定全部解讀成不被愛。"
    };
  }

  if ((energy === "I" && decision === "T") || (energy === "I" && rhythm === "P")) {
    return {
      name: "逃避型依附傾向",
      text: "你不一定是不需要關係，而是壓力一大時會想退回自己的空間。當對方要求解釋、確認或承諾太快，你可能會先冷下來或拉開距離。",
      reminder: "提醒：空間可以保護你，但若沒有說明，對方容易把你的退開理解成拒絕。"
    };
  }

  if (signal === "N" && rhythm === "P") {
    return {
      name: "探索型依附傾向",
      text: "你容易被可能性、想像與互動新鮮感吸引。關係裡你需要自由與成長感，如果太快被固定，可能會覺得熱度下降。",
      reminder: "提醒：探索感很迷人，但穩定關係也需要把喜歡落實成可被對方感受到的行動。"
    };
  }

  return {
    name: "穩定自主型傾向",
    text: "你在關係裡比較重視現實判斷、互相尊重與穩定推進。你不太喜歡被情緒推著走，也希望關係能有成熟的節奏。",
    reminder: "提醒：理性可以降低錯配，但也要讓對方感覺到你不是只在評估，而是真的有投入。"
  };
};

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
  const attachment = getAttachmentInsight(letters);
  typeCode.textContent = code;
  typeName.textContent = letters.map((letter) => typeNames[letter]).join("、");
  typeSummary.textContent = mode.summary || `你的感情互動傾向比較像「${code}」。這不是正式 MBTI 診斷，而是一個用來觀察感情互動的快速版本：你怎麼被吸引、怎麼曖昧、怎麼確認關係，以及怎麼磨合。`;
  attachmentResult.innerHTML = `
    <b>依附風格提示｜${attachment.name}</b>
    <p>${attachment.text}</p>
    <small>${attachment.reminder}</small>
  `;

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
