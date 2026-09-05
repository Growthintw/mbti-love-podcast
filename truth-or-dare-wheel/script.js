const topics=[{name:"人生",color:"#2457ff"},{name:"感情",color:"#ff6475"},{name:"事業",color:"#111b48"}];
const emotions=[
  {name:"開心",family:"喜",color:"#ffb629"},{name:"期待",family:"喜",color:"#ffc94d"},{name:"驕傲",family:"喜",color:"#ffda73"},{name:"感激",family:"喜",color:"#ffe69a"},
  {name:"生氣",family:"怒",color:"#f04452"},{name:"委屈",family:"怒",color:"#f35d69"},{name:"嫉妒",family:"怒",color:"#f47b85"},{name:"厭煩",family:"怒",color:"#f69aa2"},
  {name:"難過",family:"哀",color:"#5169bd"},{name:"失望",family:"哀",color:"#697fc9"},{name:"孤單",family:"哀",color:"#8496d5"},{name:"愧疚",family:"哀",color:"#a3afe0"},
  {name:"放鬆",family:"樂",color:"#20aa86"},{name:"興奮",family:"樂",color:"#39bb99"},{name:"感動",family:"樂",color:"#63cbb0"},{name:"好奇",family:"樂",color:"#8edcc7"}
];

const questions={
  "人生":{
    "開心":["回想最近半年，有沒有一個很普通的瞬間，你卻突然覺得『活著好像滿不錯的』？當時在哪裡、和誰一起、正在做什麼？","用 30 秒重演那個快樂瞬間，包含當時的表情、動作，以及你心裡沒有說出口的話。"],
    "期待":["如果明天醒來，你最期待的人生改變已經開始發生，你會先從哪三個生活細節發現？","用『一年後的你』錄一段 30 秒語音，告訴現在的自己最近的生活變成什麼樣子。"],
    "驕傲":["說一件沒有人替你鼓掌，但你知道自己真的撐過來的事。最難的是哪一天？你做了什麼沒有放棄？","像頒獎典禮一樣替自己頒一個獎，說出獎項名稱、得獎原因與得獎感言。"],
    "感激":["最近一年，誰曾在你狀態不好時做了一件看似很小、但你一直記得的事？","選一位你感謝的人，用 20 秒說出具體事件；可以只在現場念，不必真的傳送。"],
    "生氣":["最近一次你明明很生氣，卻因為不想破壞關係而裝作沒事，是誰做了什麼？你真正想守住什麼界線？","用不攻擊人的方式說：『當你＿＿時，我會＿＿，下次我希望＿＿。』"],
    "委屈":["有沒有一次你替別人做了很多，最後卻被當成理所當然？你原本期待對方怎麼回應？","模擬當時的場景，重新說出一句你當時不敢說的話。"],
    "嫉妒":["最近看到誰擁有某種生活時，你曾羨慕甚至嫉妒？這反映你其實很想得到什麼？","不說對方是誰，用三個線索讓大家猜：你羨慕的是他的能力、關係還是生活方式。"],
    "厭煩":["生活中哪一件反覆出現的小事已經消耗你很久？你為什麼一直沒有改變它？","提出一個明天就能執行的微小改變，並替這個行動取一個名字。"],
    "難過":["最近一次你獨處時突然難過，是被哪個畫面、訊息、地方或一句話勾起來的？","選一首最接近那段心情的歌，哼一小段旋律，再說明你想到的畫面。"],
    "失望":["有沒有一件你曾非常努力，結果卻沒有得到預期回報的事？你失望的是結果，還是自己沒被看見？","對當時的自己說三句話：一句安慰、一次肯定，以及一個現在才明白的提醒。"],
    "孤單":["哪一種時刻最容易讓你孤單：回家沒人說話、身邊的人不理解你，還是遇到事情不知道找誰？","用肢體表演你的『孤單模式』，讓大家猜你在孤單時會做什麼。"],
    "愧疚":["有沒有一個人，你現在回頭看覺得當時可以對他更好？當時發生了什麼？","完成一句遲來的道歉：『那時候我＿＿，現在回頭看，我想告訴你＿＿。』"],
    "放鬆":["沒有工作、訊息與他人期待時，你最理想的一天會怎麼過？從起床一路說到睡前。","閉眼 20 秒，用聲音和動作演出你最放鬆的狀態。"],
    "興奮":["你上一次因為想做一件事而興奮到睡不著，是什麼時候？後來真的去做了嗎？","用活動主持人的語氣，向大家推銷一件最近讓你很興奮的事。"],
    "感動":["最近一次讓你眼眶發熱的真實事件是什麼？是哪個細節讓你突然撐不住？","用 30 秒把那段事件說成電影預告，最後加上一句電影標語。"],
    "好奇":["如果可以看到人生其中一個問題的真實答案，你最想知道什麼？為什麼？","指定現場一人，問一個你一直好奇、但平常不太敢問的非隱私問題。"]
  },
  "感情":{
    "開心":["回想一段關係或曖昧，哪個普通的小互動最讓你開心？例如等你下班、記得你說過的話，或自然牽起你的手。","演出你被喜歡的人逗開心時，嘴上裝鎮定、心裡其實很開心的樣子。"],
    "期待":["曖昧時你最期待對方主動做什麼，才會讓你確認『他真的對我有意思』？","模擬傳一則不過度直接、但能讓對方感受到好感的邀約訊息。"],
    "驕傲":["你曾為喜歡的人做過哪件事，現在回頭看仍覺得自己很勇敢或很有心？","用頒獎感言的方式，說出自己在感情裡最值得肯定的一項能力。"],
    "感激":["哪一位對象曾用一個行動，改變你後來看待愛情的方式？","對那位對象說一句感謝，必須講出具體事件，不能只說謝謝陪伴。"],
    "生氣":["最近一段關係中，對方做什麼最容易讓你生氣？當時你怎麼反應？","模擬一次成熟的衝突溝通，用『事件＋感受＋需求』說出不滿。"],
    "委屈":["有沒有一次你已經退讓很多，對方卻只看到你最後的情緒？你曾忍下哪些事？","重演當時的對話，這次不忍耐，說清楚你真正希望被理解的地方。"],
    "嫉妒":["什麼情境最容易讓你吃醋：前任、異性好友、沒有公開你，還是對方總把時間留給別人？","演出你吃醋卻假裝沒事的樣子，再演一次你直接承認吃醋的版本。"],
    "厭煩":["一段關係進入穩定期後，什麼重複行為最容易讓你失去耐心或吸引力？","幽默模仿一個你在感情裡最受不了的習慣，但不能透露對方身分。"],
    "難過":["你曾在哪個瞬間明白『這段關係可能回不去了』？對方說了什麼，或沒有做什麼？","對那時候的自己說一段安慰，內容必須包含『這不是全部都是你的錯』。"],
    "失望":["你曾對誰抱有很高期待，後來發現他給不了你想要的關係？缺少的是能力、意願，還是彼此不適合？","說出一項你不再勉強別人提供，也不再欺騙自己不需要的感情需求。"],
    "孤單":["你曾在一段關係裡，明明有人陪卻感到孤單嗎？當時最希望對方理解哪件事？","用一個姿勢呈現『兩個人在一起卻很孤單』，讓其他人猜情境。"],
    "愧疚":["你有沒有傷害過一個真心喜歡你的人？當時是因為不成熟、不夠喜歡，還是不敢面對感受？","完成一句負責任的道歉：『我不應該＿＿，那可能讓你覺得＿＿。』"],
    "放鬆":["和什麼樣的人相處，你可以不用一直找話題、證明自己或照顧對方情緒？","模擬一場最舒服的約會，但不能使用吃飯或看電影作為答案。"],
    "興奮":["吸引或曖昧時，什麼最讓你心跳加快：眼神、靠近、深夜聊天、暗示，還是對方記得你的細節？","用一句不露骨的話，營造讓人心跳加速的曖昧感。"],
    "感動":["對方曾做過哪件事，讓你突然感覺自己被偏愛或放在心上？","說出一句你最想從伴侶口中聽見的話，並解釋它對你代表什麼。"],
    "好奇":["如果能知道一位過去或現在對象心中的真實答案，你最想問他哪個問題？","假裝對方坐在面前，直接問出問題，再猜他可能會怎麼回答。"]
  },
  "事業":{
    "開心":["最近一次工作到很累，卻仍覺得『這件事做得很值得』是什麼時候？誰因此受到幫助？","用 30 秒向完全不懂你工作的人介紹：你的工作到底有什麼好玩的地方。"],
    "期待":["如果未來一年事業發展順利，你最期待看到哪個具體畫面：收入、團隊、客戶、作品還是自由時間？","模擬一年後接受採訪，用 30 秒說明你完成了什麼里程碑。"],
    "驕傲":["哪一項工作成果最能代表你的能力，但外界可能不知道你背後投入了多少？","用自信而不謙虛的方式，說出三個選擇和你合作的理由。"],
    "感激":["職涯中誰曾在你能力還沒被證明以前，就願意給你機會或相信你？","對那位貴人發表 20 秒感謝詞，說明那次機會如何影響你。"],
    "生氣":["最近一次工作上真正讓你生氣的是什麼：不尊重專業、搶功、拖延、反覆改需求，還是不合理要求？","扮演一次堅定但專業的拒絕，不能使用『沒辦法』或『不行』。"],
    "委屈":["有沒有一次你承擔最多責任，最後功勞卻屬於別人，出錯又由你負責？","重演當時的會議，清楚說出你的貢獻、責任範圍與希望被如何對待。"],
    "嫉妒":["看到同業、同事或朋友取得什麼成果時，你最容易嫉妒？它揭露你尚未滿足的哪個企圖？","正面說出：『我羨慕他＿＿，所以接下來我要＿＿。』"],
    "厭煩":["工作中哪類事情最消耗你：重複行政、無效會議、催進度、情緒勞動，還是收拾別人的錯誤？","用購物台方式推銷一個能消滅你最討厭工作的虛構工具。"],
    "難過":["職涯中有沒有一次否定或失敗，讓你開始懷疑自己的能力？具體是哪句話或哪個結果？","對當時否定你的人，用冷靜而有力量的方式回應一句話。"],
    "失望":["你曾對哪份工作、合作或創業計畫抱有很大期待，最後卻發現與想像不同？","用三句話替那次經驗下結論：我原本以為、後來發現、現在我會。"],
    "孤單":["工作上做重大決定時，你是否有過『沒有人真的理解我承擔什麼』的感覺？那次是什麼決定？","模擬打給最理解你的顧問，用 30 秒說清楚困境和你需要的幫助。"],
    "愧疚":["你曾因工作壓力，對同事、合作夥伴或家人表現得不耐煩嗎？當時壓力來自哪裡？","完成一句修復關係的表達：『那時我的壓力是＿＿，但我不該＿＿。』"],
    "放鬆":["如果收入不變，你最想刪除目前工作中的哪三件事？空下來的時間想怎麼使用？","現場設計一個理想工作日：幾點開始、做哪些事、幾點結束。"],
    "興奮":["最近哪個新點子、客戶、職缺或專案，讓你光想到就想立刻開始？","用創業募資簡報的語氣，在 30 秒內讓大家也對這個點子產生興趣。"],
    "感動":["有沒有客戶、主管、同事或團隊成員說過一句話，讓你覺得努力真的有價值？","重現對方說那句話的場景，再說出你當時表面與內心的不同反應。"],
    "好奇":["如果能免費體驗另一種職業一年，而且隨時能回來，你最想選什麼？想驗證自己的哪個可能性？","請一位玩家指定職業，你即興進行一段 30 秒的上班第一天自我介紹。"]
  }
};

const topicCanvas=document.querySelector("#topicWheel");
const emotionCanvas=document.querySelector("#emotionWheel");
const spinTopic=document.querySelector("#spinTopic");
const spinEmotion=document.querySelector("#spinEmotion");
let chosenTopic=null,chosenEmotion=null,lastMode=0,topicRotation=0,emotionRotation=0,spinning=false;

function drawWheel(canvas,items){
  const ctx=canvas.getContext("2d"),size=canvas.width,center=size/2,radius=center-18,slice=Math.PI*2/items.length;
  ctx.clearRect(0,0,size,size);
  items.forEach((item,i)=>{
    const start=-Math.PI/2+i*slice,end=start+slice;
    ctx.beginPath();ctx.moveTo(center,center);ctx.arc(center,center,radius,start,end);ctx.closePath();ctx.fillStyle=item.color;ctx.fill();ctx.strokeStyle="#fff";ctx.lineWidth=items.length>8?3:7;ctx.stroke();
    ctx.save();ctx.translate(center,center);ctx.rotate(start+slice/2);ctx.textAlign="right";ctx.textBaseline="middle";ctx.fillStyle="#fff";ctx.font=`900 ${items.length>8?22:42}px sans-serif`;ctx.fillText(item.name,radius-(items.length>8?34:58),0);ctx.restore();
  });
  ctx.beginPath();ctx.arc(center,center,items.length>8?45:58,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();ctx.strokeStyle="#10183d18";ctx.lineWidth=4;ctx.stroke();
}

function randomIndex(length){return Math.floor(Math.random()*length)}
function spin(canvas,items,rotation,setRotation,done){
  if(spinning)return;spinning=true;
  const index=randomIndex(items.length),slice=360/items.length,centerAngle=index*slice+slice/2;
  const next=rotation+1440+(360-(centerAngle+rotation%360))%360;
  canvas.style.transform=`rotate(${next}deg)`;setRotation(next);
  window.setTimeout(()=>{spinning=false;done(items[index]);},4900);
}

function setStep(id){document.querySelectorAll(".steps li").forEach(el=>el.classList.toggle("active",el.id===id));}
function showQuestion(forceDifferent=false){
  if(!chosenTopic||!chosenEmotion)return;
  if(forceDifferent)lastMode=lastMode===0?1:0;else lastMode=randomIndex(2);
  const mode=lastMode===0?"真心話":"大冒險";
  document.querySelector("#resultTopic").textContent=chosenTopic;
  document.querySelector("#resultEmotion").textContent=`${chosenEmotion.family}・${chosenEmotion.name}`;
  document.querySelector("#resultMode").textContent=mode;
  document.querySelector("#question").textContent=questions[chosenTopic][chosenEmotion.name][lastMode];
  document.querySelector("#clue").textContent=lastMode===0?"不要只回答看法。試著交代：什麼時候、和誰、發生什麼、你當時怎麼反應，以及現在回頭看有什麼不同。":"可以演出、口述或角色扮演；不必聯絡任何人，也不必做讓自己或別人不舒服的事。";
  const result=document.querySelector("#result");result.hidden=false;setStep("stepAnswer");result.scrollIntoView({behavior:"smooth",block:"center"});
}

spinTopic.addEventListener("click",()=>spin(topicCanvas,topics,topicRotation,v=>topicRotation=v,item=>{
  chosenTopic=item.name;document.querySelector("#topicSelection").textContent=`選中：${item.name}`;
  const card=document.querySelector("#emotionCard");card.classList.remove("locked");card.classList.add("unlocked","active");
  spinEmotion.disabled=false;spinEmotion.textContent="轉動情緒輪盤";document.querySelector("#emotionSelection").textContent="輪到第二輪";setStep("stepEmotion");
  if(window.innerWidth<=780)card.scrollIntoView({behavior:"smooth",block:"start"});
}));

spinEmotion.addEventListener("click",()=>spin(emotionCanvas,emotions,emotionRotation,v=>emotionRotation=v,item=>{
  chosenEmotion=item;document.querySelector("#emotionSelection").textContent=`選中：${item.family}・${item.name}`;showQuestion();
}));

document.querySelector("#anotherQuestion").addEventListener("click",()=>showQuestion(true));
document.querySelector("#restart").addEventListener("click",()=>{
  chosenTopic=null;chosenEmotion=null;document.querySelector("#result").hidden=true;document.querySelector("#topicSelection").textContent="尚未選出主題";document.querySelector("#emotionSelection").textContent="等待主題結果";
  const card=document.querySelector("#emotionCard");card.classList.add("locked");card.classList.remove("unlocked","active");spinEmotion.disabled=true;spinEmotion.textContent="先完成第一輪";setStep("stepTopic");window.scrollTo({top:0,behavior:"smooth"});
});

drawWheel(topicCanvas,topics);drawWheel(emotionCanvas,emotions);
