const tests=[
 {id:"ssc",name:"SSC Foundation Mock Test",exam:"SSC",questions:20,price:99,level:"Beginner"},
 {id:"rail",name:"Railway Group D Test Pack",exam:"Railway",questions:25,price:149,level:"Practice"},
 {id:"police",name:"Police Constable Mock Test",exam:"Police",questions:20,price:99,level:"Practice"},
 {id:"bank",name:"Banking Prelims Practice",exam:"Banking",questions:20,price:199,level:"Practice"},
 {id:"teach",name:"Teaching Eligibility Test",exam:"Teaching",questions:20,price:149,level:"Practice"},
 {id:"all",name:"All Exams Mega Pack",exam:"All Exams",questions:50,price:499,level:"Combo"}
];
const sample=[
 {q:"भारत की राजधानी क्या है?",o:["मुंबई","नई दिल्ली","जयपुर","लखनऊ"],a:1},
 {q:"15 × 4 कितना होगा?",o:["45","50","60","65"],a:2},
 {q:"भारतीय संविधान कब लागू हुआ?",o:["15 अगस्त 1947","26 जनवरी 1950","2 अक्टूबर 1950","26 नवंबर 1949"],a:1},
 {q:"सौरमंडल का सबसे बड़ा ग्रह कौन-सा है?",o:["पृथ्वी","मंगल","बृहस्पति","शुक्र"],a:2},
 {q:"एक किलोमीटर में कितने मीटर होते हैं?",o:["100","500","1000","1500"],a:2}
];
let current=[],answers={},testName="";
function render(){document.getElementById("testCards").innerHTML=tests.map(t=>`<article class="test"><span class="pill">${t.exam}</span><h3>${t.name}</h3><p>${t.questions} Questions • ${t.level}</p><b>₹${t.price}</b><br><button class="btn" onclick="buyTest('${t.id}')">Buy Test</button> <button class="btn light" onclick="startTest('${t.id}')">Demo</button></article>`).join("");}
function startTest(id){testName=id==="free"?"Free Sample Test":(tests.find(t=>t.id===id)?.name||"Sample Test");current=sample;answers={};let html=`<h2>${testName}</h2><p class="muted">यह एक छोटा demo test है। वास्तविक टेस्ट के प्रश्न Admin द्वारा जोड़े जाएंगे।</p><form id="quiz">`;current.forEach((q,i)=>{html+=`<div><h3>${i+1}. ${q.q}</h3>${q.o.map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}</div>`});html+=`<button class="btn" type="submit">Submit Test</button></form><div id="score"></div>`;document.getElementById("testArea").innerHTML=html;document.getElementById("quiz").onsubmit=e=>{e.preventDefault();let score=0;current.forEach((q,i)=>{let v=document.querySelector(`input[name=q${i}]:checked`);if(v&&Number(v.value)===q.a)score++});document.getElementById("score").innerHTML=`<div class="result"><h3>आपका स्कोर: ${score}/${current.length}</h3><p>यह demo result है।</p></div>`};document.getElementById("modal").classList.add("open");}
function closeTest(){document.getElementById("modal").classList.remove("open")}
function buyTest(id){const t=tests.find(x=>x.id===id);buy(t.name,t.price)}
function buyPass(){buy("All Exams Pass (3 months)",499)}
function buy(name,price){
 const c=window.UKTS_CONFIG||{};
 const msg=`नमस्ते, मैंने ${name} के लिए ₹${price} भुगतान किया है। कृपया मेरा भुगतान verify करके test access दें।`;
 const wa=(c.whatsappNumber||"").replace(/\\D/g,"");
 const upi=c.upiId||"अभी सेट नहीं है";
 document.getElementById("testArea").innerHTML=`<h2>Payment Instructions</h2>
 <p><b>${name}</b></p><p>राशि: <b>₹${price}</b></p>
 <div class="result"><p>UPI ID</p><h3>${upi}</h3>
 <button class="btn light" onclick="navigator.clipboard?.writeText('${upi}').then(()=>alert('UPI ID copied'))">Copy UPI ID</button></div>
 <p class="notice">भुगतान करने के बाद WhatsApp पर transaction reference / screenshot भेजें। Admin द्वारा भुगतान verify करने के बाद ही test access दिया जाएगा। इस demo में automatic payment verification या automatic test unlock उपलब्ध नहीं है।</p>
 ${wa.length>=10?`<a class="btn" target="_blank" rel="noopener" href="https://wa.me/${wa}?text=${encodeURIComponent(msg)}">WhatsApp पर भुगतान की जानकारी भेजें</a>`:""}
 `;
 document.getElementById("modal").classList.add("open");
}
document.getElementById("year").textContent=new Date().getFullYear();
const cfg = window.UKTS_CONFIG || {};
let n = (cfg.whatsappNumber || "").replace(/\D/g, "");

if (n.length >= 10) {
  document.getElementById("contactLink").href = https://wa.me/${n};
}

render();

const availableTests = [
  {
    name: "UK General Knowledge Test",
    questions: 10,
    duration: "10 मिनट"
  },
  {
    name: "Math Practice Test",
    questions: 10,
    duration: "10 मिनट"
  },
  {
    name: "Reasoning Practice Test",
    questions: 10,
    duration: "10 मिनट"
  }
];

const testButton = document.querySelector("#studentDashboard button");

if (testButton) {
  testButton.onclick = function () {
    let html = "<h2>Available Tests</h2>";

    availableTests.forEach((test) => {
      html += 
        <div style="background:white;padding:12px;margin:10px;border-radius:8px">
          <h3>${test.name}</h3>
          <p>प्रश्न: ${test.questions}</p>
          <p>समय: ${test.duration}</p>
   html += `
          <button onclick="startDemoTest()">Start Test</button>
        </div>;
    });

    document.getElementById("studentDashboard").insertAdjacentHTML("beforeend", html);
  };
}

window.startDemoTest = function () {
  document.getElementById("studentDashboard").innerHTML = 
    <h2>UK General Knowledge Test</h2>
    <p>भारत की राजधानी क्या है?</p>
    <label><input type="radio" name="q1" value="a"> मुंबई</label><br>
    <label><input type="radio" name="q1" value="b"> नई दिल्ली</label><br>
    <label><input type="radio" name="q1" value="c"> जयपुर</label><br><br>
    <button onclick="submitDemoTest()">Submit Test</button>
    <p id="testResult"></p>
  ;
};

window.submitDemoTest = function () {
  const answer = document.querySelector('input[name="q1"]:checked');

  document.getElementById("testResult").innerText =
    answer && answer.value === "b"
      ? "सही जवाब! 1 अंक।"
      : "गलत जवाब! सही उत्तर: नई दिल्ली।";
};
window.showAvailableTests = function () {
  let html = "<h2>Available Tests</h2>";

  availableTests.forEach((test, index) => {
    html += 
      <div style="background:white;padding:12px;margin:10px;border-radius:8px">
        <h3>${test.name}</h3>
        <p>प्रश्न: ${test.questions}</p>
        <p>समय: ${test.duration}</p>
        <button onclick="startDemoTest()">Start Test</button>
      </div>;
  });

  document.getElementById("studentDashboard").innerHTML = html;
};
