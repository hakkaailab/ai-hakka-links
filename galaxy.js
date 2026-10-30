(() => {
  const mount = document.querySelector('#ecosystem');
  if (!mount) return;
  const items = [
    {id:'core',kind:'core',title:'HakkaGPT',sub:'客家主權 AI',label:'第一圈 · AI 主權',desc:'以客家語言與文化為核心，向外串起 AI 技術、生活情境與數位應用。',url:'https://gohakka.org/hakkagpt',x:500,y:360},
    {id:'mt',kind:'tech',title:'機器翻譯',sub:'MT',label:'第二圈 · AI 技術',desc:'在不同語言之間轉換文字，讓客語內容能被理解，也讓更多人能使用客語表達。',x:390,y:250},
    {id:'tts',kind:'tech',title:'語音合成',sub:'TTS',label:'第二圈 · AI 技術',desc:'將文字轉換為語音，讓客語內容透過聲音被聽見。',x:610,y:250},
    {id:'asr',kind:'tech',title:'語音辨識',sub:'ASR',label:'第二圈 · AI 技術',desc:'將說出的語音轉換成文字，支援客語聲音的記錄與後續應用。',x:610,y:470},
    {id:'rag',kind:'tech',title:'檢索增強生成',sub:'RAG',label:'第二圈 · AI 技術',desc:'結合資料檢索與文字生成，讓 AI 回應能參考相關知識內容。',x:390,y:470},
    {id:'communicate',kind:'scene',title:'互動溝通',sub:'CONNECT',label:'第三圈 · AI 應用情境',desc:'讓客語進入對話與互動，在日常溝通中持續被使用。',x:260,y:210},
    {id:'education',kind:'scene',title:'教育應用',sub:'LEARN',label:'第三圈 · AI 應用情境',desc:'透過數位工具練習聆聽、表達與朗讀，探索更多客語學習方式。',x:740,y:210},
    {id:'culture',kind:'scene',title:'文化傳承',sub:'PRESERVE',label:'第三圈 · AI 應用情境',desc:'運用文字與聲音保存語言，讓文化記憶有更多被接觸與分享的機會。',x:230,y:360},
    {id:'games',kind:'scene',title:'遊戲闖關',sub:'PLAY',label:'第三圈 · AI 應用情境',desc:'將客語學習帶入遊戲情境，透過探索與挑戰增加參與感。',x:770,y:360},
    {id:'writing',kind:'scene',title:'創意寫作',sub:'CREATE',label:'第三圈 · AI 應用情境',desc:'以客語進行內容構思與創作，延伸語言在數位內容中的可能。',x:260,y:510},
    {id:'social',kind:'scene',title:'社會臨場',sub:'ENGAGE',label:'第三圈 · AI 應用情境',desc:'透過數位互動與聲音內容，探索讓客語更貼近生活的方式。',x:740,y:510},
    {id:'robot',kind:'app',title:'阿知牯',sub:'客語實體機器人',label:'應用成果',desc:'實驗室的客語機器人角色，也是這個入口網站向你打招呼的小夥伴。',x:110,y:120},
    {id:'cool',kind:'app',title:'Cool Hakka',sub:'酷客',label:'應用成果',desc:'選擇文章並錄下朗讀，透過 AI 發音分析與同儕回饋練習客語。',url:'https://coolhakka.gohakka.org/',x:890,y:120},
    {id:'captions',kind:'app',title:'即時字幕',sub:'客語聲音與文字',label:'應用成果',desc:'將語音與文字連結，讓客語內容有更多閱讀與理解的方式。',x:80,y:360},
    {id:'tai',kind:'app',title:'TaiHakka',sub:'桃園大客家',label:'應用成果',desc:'跟著 AI 輕鬆學客語，開啟桃園大客家的學習旅程。',url:'https://taihakka.tycg.gov.tw/home',x:920,y:360},
    {id:'go',kind:'app',title:'Gohakka',sub:'平台 V2',label:'應用成果',desc:'透過客華雙向翻譯與語音服務，讓客語更自然地走進日常。',url:'https://gohakka.org/',x:110,y:600},
    {id:'podcast',kind:'app',title:'客家國大細事',sub:'Podcast',label:'應用成果',desc:'探索客語與聲音的相遇，製作屬於自己的廣播節目。',url:'https://podcast.gohakka.org/',x:890,y:600}
  ];
  mount.innerHTML = `<div class="eco-heading"><div><span class="eco-kicker">THE HAKKA AI UNIVERSE</span><h2>一個持續擴展的<br><em>臺灣客家 AI 生態系。</em></h2></div></div><div class="eco-shell"><div class="eco-toolbar"><div class="eco-legend"><span>AI 主權</span><span>AI 技術</span><span>應用情境</span><span>應用成果</span></div></div><div class="galaxy" role="group" aria-label="客家 AI 星系圖"></div></div>`;
  const graph = mount.querySelector('.galaxy');
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns,'svg'); svg.setAttribute('viewBox','0 0 1000 720'); svg.setAttribute('aria-hidden','true');
  svg.innerHTML = `<circle class="eco-core-glow" cx="500" cy="360" r="180"/><circle class="eco-orbit" cx="500" cy="360" r="158"/><ellipse class="eco-orbit dashed" cx="500" cy="360" rx="270" ry="235"/><ellipse class="eco-orbit" cx="500" cy="360" rx="420" ry="310"/><g class="eco-spin"><circle class="eco-comet" cx="500" cy="202" r="4"/><circle fill="#8db6c7" cx="500" cy="518" r="2.5"/></g><g class="eco-spin reverse"><circle class="eco-comet" cx="770" cy="360" r="3"/></g>`;
  svg.innerHTML += '<g class="eco-flow"><circle class="eco-ripple" cx="500" cy="360" r="125"/><circle class="eco-ripple later" cx="500" cy="360" r="125"/><circle r="6" fill="#d54c15"><animateMotion dur="12s" repeatCount="indefinite" path="M920 360 A420 310 0 1 0 80 360 A420 310 0 1 0 920 360"/></circle><circle r="4" fill="#663924"><animateMotion dur="12s" begin="-6s" repeatCount="indefinite" path="M920 360 A420 310 0 1 0 80 360 A420 310 0 1 0 920 360"/></circle><circle r="5" fill="#8db6c7"><animateMotion dur="9s" repeatCount="indefinite" path="M770 360 A270 235 0 1 1 230 360 A270 235 0 1 1 770 360"/></circle></g>';
  for (const tech of items.filter(i=>i.kind==='tech')) {
    const flow=document.createElementNS(ns,'g');flow.setAttribute('class','eco-flow');flow.innerHTML='<circle r="3.5" fill="#d54c15"><animateMotion dur="2.8s" begin="-'+(items.indexOf(tech)*0.45)+'s" repeatCount="indefinite" path="M500 360 L'+tech.x+' '+tech.y+'"/></circle>';svg.append(flow);
  }
  graph.append(svg);
  const rays = [];
  for (const item of items.filter(i=>i.kind==='tech')) {
    const line=document.createElementNS(ns,'line');line.setAttribute('x1','500');line.setAttribute('y1','360');line.setAttribute('x2',String(item.x));line.setAttribute('y2',String(item.y));line.setAttribute('class','eco-ray');line.dataset.id=item.id;svg.append(line);rays.push(line);
  }
  let previous='';
  for(const item of items) {
    if(item.kind!==previous&&item.kind!=='core') {const label=document.createElement('div');label.className='eco-group-label';label.textContent={tech:'02 / AI 技術',scene:'03 / 應用情境',app:'04 / 應用成果'}[item.kind];graph.append(label);}previous=item.kind;
    const b=document.createElement('button');b.type='button';b.className='eco-node '+item.kind;b.dataset.id=item.id;b.style.setProperty('--delay',-(items.indexOf(item)*0.37)+'s');b.style.setProperty('--x',item.x/10+'%');b.style.setProperty('--y',item.y/7.2+'%');b.setAttribute('aria-pressed','false');b.setAttribute('aria-label',item.kind==='scene'?item.title:item.title+'，'+item.sub);b.innerHTML=item.kind==='tech'?`<b>${item.sub}</b><span>${item.title}</span>`:(item.kind==='scene'?`<b>${item.title}</b>`:`<b>${item.title}</b><small>${item.id==='robot'?'<span class="robot-caption-line">客語實體</span><span class="robot-caption-line">機器人</span>':item.sub}</small>`);b.addEventListener('click',()=>select(item));graph.append(b);
  }
  function select(item) {
    graph.querySelectorAll('.eco-node').forEach(b=>{const n=items.find(i=>i.id===b.dataset.id);const related=item.kind==='core'||n.id==='core'||n.id===item.id||(item.kind==='tech'&&n.kind==='tech');b.setAttribute('aria-pressed',String(n.id===item.id));b.classList.toggle('is-dim',!related);b.classList.toggle('is-related',related&&item.kind==='tech');});
    rays.forEach(l=>l.classList.toggle('is-active',item.kind==='core'||l.dataset.id===item.id));
  }
  select(items[0]);
})();
