const scenarios=[
 {level:'小吵',sub:'日常摩擦',title:'等了四十分鐘',text:'你們約好晚上七點吃飯，對方遲到四十分鐘，只傳了一句「快到了」。見面時，他像平常一樣問你想吃什麼。'},
 {level:'小吵',sub:'日常摩擦',title:'約會裡的另一個世界',text:'難得一起吃飯，對方卻頻繁回工作訊息。你停下話題幾次，他都說「我有在聽，你繼續」。'},
 {level:'小吵',sub:'日常摩擦',title:'被忘記的小約定',text:'對方答應替你處理一件不大的事，卻完全忘了。你提醒後，他笑著說：「這又沒多嚴重。」'},
 {level:'中吵',sub:'重複模式',title:'工作總是先被選擇',text:'一個月內，對方第三次因為工作取消約會。他很疲憊地說：「我這麼努力也是為了未來，你不能體諒嗎？」'},
 {level:'中吵',sub:'重複模式',title:'自由與安全感',text:'對方經常和一位認識多年的異性朋友單獨吃飯。你表達不安後，他說：「如果你信任我，就不該限制我。」'},
 {level:'中吵',sub:'重複模式',title:'看不見的生活責任',text:'你們都在工作，但家務常由同一個人收尾。談過幾次後，另一方仍說：「你比較在意整潔，你做不是比較快嗎？」'},
 {level:'大吵',sub:'信任底線',title:'一句後悔選擇你',text:'爭執最激烈時，對方說：「跟你在一起真的很累，我甚至後悔當初選你。」說完便離開現場。'},
 {level:'大吵',sub:'信任底線',title:'消失的一整天',text:'吵架後，對方沒有說需要多久冷靜，整整一天不接電話也不回訊息，隔天才像沒事一樣出現。'},
 {level:'大吵',sub:'信任底線',title:'重要事情被隱瞞',text:'你偶然發現，對方對一件會影響你們共同未來的財務決定隱瞞了幾個月。他說是不想讓你擔心。'}
];
const choices={
 relation:['我曾經被這樣對待','我曾經做過類似的事','原生家庭有相似畫面','沒遇過，但我能想像','目前沒有明顯聯想'],
 story:['我不重要','他不尊重我','他想控制我','她根本不理解我的壓力','我做什麼都不夠','這段關係可能沒有未來','我只對這件事生氣，不會否定關係'],
 reaction:['立刻說清楚','講道理、證明自己的立場','先忍耐觀察','故意冷淡或減少主動','反覆確認對方還愛不愛','情緒爆發','暫時離開，但說明回來時間'],
 repair:['先聽我說完','先抱抱或安撫我','清楚道歉，不加「但是」','解釋完整經過','承認造成的影響','提出可驗證的改變','給我空間，並約定回來時間','不用多說，先用行動做到']
};
const severity=['沒事','小吵','中吵','大吵','底線'];
let state={names:['玩家一','玩家二'],player:0,index:0,answers:[[],[]],current:{}};
const $=s=>document.querySelector(s);
function show(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');scrollTo(0,0)}
function handoff(player,finish=false){state.player=player;$('#handoffStep').textContent=`PLAYER ${player+1}`;$('#handoffName').textContent=state.names[player];$('#handoffText').textContent=finish?'另一位已完成作答，答案已經鎖起來。現在輪到你了。':'接下來是你的秘密作答時間，另一位請先不要偷看。';show('handoff')}
function optionButtons(container,items,key){container.innerHTML=items.map((x,i)=>`<button type="button" data-i="${i}">${x}</button>`).join('');container.querySelectorAll('button').forEach(b=>b.onclick=()=>{container.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');state.current[key]=+b.dataset.i;validate()})}
function render(){const s=scenarios[state.index];state.current={};$('#playerLabel').textContent=`${state.names[state.player]}作答中`;$('#progressText').textContent=`${state.index+1} / ${scenarios.length}`;$('#progressBar').style.width=`${(state.index+1)/scenarios.length*100}%`;$('#levelTag').textContent=`${s.level} · ${s.sub}`;$('#scenarioNo').textContent=String(state.index+1).padStart(2,'0');$('#scenarioTitle').textContent=s.title;$('#scenarioText').textContent=s.text;optionButtons($('#relationOptions'),choices.relation,'relation');optionButtons($('#storyOptions'),choices.story,'story');optionButtons($('#reactionOptions'),choices.reaction,'reaction');optionButtons($('#repairOptions'),choices.repair,'repair');optionButtons($('#severityOptions'),severity.map((x,i)=>`<span>${i}</span>${x}`),'severity');$('#nextBtn').disabled=true;show('quiz')}
function validate(){const done=['relation','story','reaction','repair','severity'].every(k=>k in state.current);$('#nextBtn').disabled=!done}
function dominant(arr,key,labels){const c={};arr.forEach(a=>c[a[key]]=(c[a[key]]||0)+1);const idx=+Object.keys(c).sort((a,b)=>c[b]-c[a])[0];return labels[idx]}
function reactionType(value){if(value==='立刻說清楚')return '直球溝通型';if(value.includes('道理'))return '理性辯論型';if(value.includes('忍耐'))return '忍耐累積型';if(value.includes('冷淡')||value.includes('離開'))return '退後保護型';if(value.includes('確認'))return '追問確認型';return '情緒外放型'}
function results(){const a=state.answers[0],b=state.answers[1];const gaps=a.map((x,i)=>Math.abs(x.severity-b[i].severity));const avg=(gaps.reduce((x,y)=>x+y,0)/gaps.length).toFixed(1);$('#gapScore').textContent=avg;$('#gapText').textContent=avg<.7?'你們對事件嚴重度的感受很接近，較容易理解彼此為何在意。':avg<1.5?'你們偶爾像在吵不同等級的架。先確認「這對你有多嚴重」，會比急著解釋更有效。':'你們的衝突溫度差明顯。一方可能覺得反應過度，另一方卻感到被輕忽，修復前要先對齊嚴重度。';
 $('#scenarioResults').innerHTML=scenarios.map((s,i)=>`<div class="result-row"><b>${s.title}</b><span class="${a[i].severity>b[i].severity?'hot':''}">${state.names[0]} ${a[i].severity}</span><span class="${b[i].severity>a[i].severity?'hot':''}">${state.names[1]} ${b[i].severity}</span></div>`).join('');
 const profiles=[a,b].map((ans,i)=>{const react=dominant(ans,'reaction',choices.reaction),story=dominant(ans,'story',choices.story),repair=dominant(ans,'repair',choices.repair);return {react,story,repair,type:reactionType(react),name:state.names[i]}});
 $('#profileResults').innerHTML=profiles.map(p=>`<article class="profile"><span>${p.name}</span><h3>${p.type}</h3><p>衝突時，你最常透過「${p.react}」保護自己。</p><ul><li>核心小劇場：${p.story}</li><li>修復需求：${p.repair}</li></ul></article>`).join('');
 $('#cycleResult').innerHTML=`當 <b>${profiles[0].name}</b> 選擇「${profiles[0].react}」<span class="arrow">→</span> ${profiles[1].name} 可能更相信「${profiles[1].story}」<span class="arrow">→</span> 於是用「${profiles[1].react}」自我保護<span class="arrow">→</span> 又觸發 ${profiles[0].name} 的「${profiles[0].story}」。<p>先說出害怕，比讓對方猜你的反應更有機會中止循環。</p>`;
 $('#covenant').innerHTML=`<ol><li>暫停可以，但要說明：<b>我需要多久、何時回來。</b></li><li>${profiles[0].name}需要「${profiles[0].repair}」；${profiles[1].name}需要「${profiles[1].repair}」。</li><li>先復述對方在意什麼，確認理解後再解釋。</li><li>修復不只和好，還要說出下一次可驗證的改變。</li></ol>`;state.summary=`《我們正在吵同一場架嗎？》\n${state.names[0]} × ${state.names[1]}\n衝突溫度差：${avg}/3\n${profiles[0].name}：${profiles[0].type}，需要「${profiles[0].repair}」\n${profiles[1].name}：${profiles[1].type}，需要「${profiles[1].repair}」\n我們的約定：暫停可以，但要說明何時回來；先理解，再解釋；用具體行動完成修復。`;show('results')}
$('#startBtn').onclick=()=>{state.names=[$('#p1Name').value.trim()||'玩家一',$('#p2Name').value.trim()||'玩家二'];state.answers=[[],[]];state.index=0;handoff(0)};
$('#readyBtn').onclick=render;
$('#nextBtn').onclick=()=>{state.answers[state.player].push({...state.current});if(state.index<scenarios.length-1){state.index++;render()}else if(state.player===0){state.index=0;handoff(1,true)}else results()};
$('#restartBtn').onclick=()=>{state={names:state.names,player:0,index:0,answers:[[],[]]};show('welcome')};
$('#quitBtn').onclick=()=>{if(confirm('確定要離開？目前答案不會保留。'))show('welcome')};
$('#copyBtn').onclick=async()=>{try{await navigator.clipboard.writeText(state.summary);const t=document.createElement('div');t.className='toast';t.textContent='結果摘要已複製';document.body.appendChild(t);setTimeout(()=>t.remove(),1800)}catch(e){alert(state.summary)}};
