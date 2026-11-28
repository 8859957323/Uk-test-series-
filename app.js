const tests = [
  {id:"ssc",name:"SSC Foundation Mock Test",exam:"SSC",questions:20,price:99,level:"Beginner"},
  {id:"rail",name:"Railway Group D Test Pack",exam:"Railway",questions:25,price:149,level:"Practice"},
  {id:"police",name:"Police Constable Mock Test",exam:"Police",questions:20,price:99,level:"Practice"},
  {id:"bank",name:"Banking Foundation Test",exam:"Banking",questions:20,price:99,level:"Beginner"},
  {id:"teaching",name:"Teaching Exam Mock Test",exam:"Teaching",questions:20,price:99,level:"Practice"},
  {id:"all",name:"All Exams Practice Pack",exam:"All Exams",questions:50,price:199,level:"Advanced"}
];

// फिलहाल अभ्यास के लिए 20 सामान्य ज्ञान के डेमो प्रश्न।
const questions = [
  {q:"भारत की राजधानी क्या है?",options:["मुंबई","नई दिल्ली","कोलकाता","चेन्नई"],answer:1},
  {q:"भारत का राष्ट्रीय पशु कौन है?",options:["शेर","हाथी","बाघ","घोड़ा"],answer:2},
  {q:"भारत का राष्ट्रीय पक्षी कौन है?",options:["तोता","मोर","कबूतर","हंस"],answer:1},
  {q:"भारत का संविधान कब लागू हुआ?",options:["15 अगस्त 1947","26 जनवरी 1950","2 अक्टूबर 1950","26 नवंबर 1949"],answer:1},
  {q:"एक सप्ताह में कितने दिन होते हैं?",options:["5","6","7","8"],answer:2},
  {q:"सूर्य किस दिशा से निकलता है?",options:["पश्चिम","उत्तर","दक्षिण","पूर्व"],answer:3},
  {q:"भारत के प्रथम प्रधानमंत्री कौन थे?",options:["महात्मा गांधी","जवाहरलाल नेहरू","सरदार पटेल","डॉ. राजेंद्र प्रसाद"],answer:1},
  {q:"15 + 10 कितना होता है?",options:["20","25","30","35"],answer:1},
  {q:"पानी का रासायनिक सूत्र क्या है?",options:["CO2","O2","H2O","NaCl"],answer:2},
  {q:"भारत का राष्ट्रीय फूल कौन सा है?",options:["गुलाब","कमल","गेंदा","चमेली"],answer:1},
  {q:"कंप्यूटर का मस्तिष्क किसे कहा जाता है?",options:["मॉनिटर","की-बोर्ड","CPU","माउस"],answer:2},
  {q:"एक घंटे में कितने मिनट होते हैं?",options:[" पैंतालीस","50","60","100"],answer:2},
  {q:"ताजमहल किस शहर में है?",options:["दिल्ली","जयपुर","आगरा","लखनऊ"],answer:2},
  {q:"भारत का राष्ट्रीय गान किसने लिखा?",options:["प्रेमचंद","रवींद्रनाथ टैगोर","बंकिमचंद्र चट्टोपाध्याय","सुभाष चंद्र बोस"],answer:1},
  {q:"लाल किला कहाँ स्थित है?",options:["आगरा","दिल्ली","भोपाल","पटना"],answer:1},
  {q:"पृथ्वी का प्राकृतिक उपग्रह कौन है?",options:["सूर्य","मंगल","चंद्रमा","शुक्र"],answer:2},
  {q:"2 × 8 कितना होता है?",options:["12","14","16","18"],answer:2},
  {q:"भारत में स्वतंत्रता दिवस कब मनाया जाता है?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","14 नवंबर"],answer:1},
  {q:"मानव शरीर में रक्त पंप करने वाला अंग कौन सा है?",options:["फेफड़ा","गुर्दा","हृदय","यकृत"],answer:2},
  {q:"भारत का राष्ट्रीय जलीय जीव कौन है?",options:["मगरमच्छ","गंगा डॉल्फिन","कछुआ","शार्क"],answer:1}
];

let current = [];
let answers = [];
let currentQuestion = 0;
let timeLeft = 20 * 60;
let timerId = null;
let testFinished = false;

const closeButton = `<button onclick="closeTest()">Close</button>`;

function render() {
  const cards = document.getElementById("testCards");
  if (!cards) return;
  cards.innerHTML = tests.map(t => `
    <article class="test">
      <h3>${t.name}</h3>
      <p>Exam: ${t.exam}</p>
      <p>Questions: ${t.questions} (Demo में 20)</p>
      <p>Level: ${t.level}</p>
      <p>Price: ₹${t.price}</p>
      <button class="btn" onclick="startTest('${t.id}')">Demo Test</button>
      <button class="btn light" onclick="buyTest('${t.id}')">Buy Test</button>
    </article>
  `).join("");
}

function updateTimer() {
  const el = document.getElementById("testTimer");
  if (!el) return;
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  el.textContent = "समय शेष: " + String(mins).padStart(2,"0") + ":" + String(secs).padStart(2,"0");
  if (timeLeft <= 60) el.style.color = "#c62828";
}

function renderQuestion() {
  const area = document.getElementById("testArea");
  if (!area || testFinished) return;
  const q = current[currentQuestion];
  const chosen = answers[currentQuestion];
  area.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
      <strong>UK Test Series - Demo Test</strong>
      <strong id="testTimer">20:00</strong>
    </div>
    <p>प्रश्न ${currentQuestion + 1} / ${current.length}</p>
    <div style="height:7px;background:#e8edf3;border-radius:9px;overflow:hidden"><div style="height:7px;width:${((currentQuestion+1)/current.length)*100}%;background:#18a477"></div></div>
    <div class="question" style="margin-top:18px">
      <h3>Q${currentQuestion + 1}. ${q.q}</h3>
      ${q.options.map((op,j) => `
        <label class="option" style="${chosen === j ? "border:2px solid #18a477;background:#effaf5" : ""}">
          <input type="radio" name="currentAnswer" value="${j}" ${chosen === j ? "checked" : ""} onchange="saveAnswer(${j})">
          ${op}
        </label>
      `).join("")}
    </div>
    <div style="display:flex;gap:10px;justify-content:space-between;flex-wrap:wrap;margin-top:18px">
      <button class="btn light" onclick="previousQuestion()" ${currentQuestion === 0 ? "disabled" : ""}>पिछला</button>
      ${currentQuestion < current.length - 1
        ? '<button class="btn" onclick="nextQuestion()">अगला प्रश्न</button>'
        : '<button class="btn" onclick="submitTest()">टेस्ट जमा करें</button>'}
    </div>
    <p style="font-size:13px;color:#64748b">उत्तर चुने बिना भी अगले प्रश्न पर जा सकते हैं।</p>
  `;
  updateTimer();
}

window.saveAnswer = function(value) { answers[currentQuestion] = Number(value); };
window.nextQuestion = function() { if (currentQuestion < current.length - 1) { currentQuestion++; renderQuestion(); } };
window.previousQuestion = function() { if (currentQuestion > 0) { currentQuestion--; renderQuestion(); } };

window.startTest = function(id) {
  current = questions;
  answers = new Array(current.length).fill(null);
  currentQuestion = 0;
  timeLeft = 20 * 60;
  testFinished = false;
  const modal = document.getElementById("modal");
  if (!modal || !document.getElementById("testArea")) {
    alert("Test area नहीं मिला।");
    return;
  }
  modal.classList.add("open");
  renderQuestion();
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (testFinished) return;
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) window.submitTest(true);
  }, 1000);
};

window.submitTest = function(autoSubmit = false) {
  if (testFinished) return;
  if (!autoSubmit && !confirm("क्या आप टेस्ट जमा करना चाहते हैं?")) return;
  testFinished = true;
  clearInterval(timerId);
  const score = current.reduce((total,q,i) => total + (answers[i] === q.answer ? 1 : 0), 0);
  const attempted = answers.filter(a => a !== null).length;
  const percent = Math.round((score / current.length) * 100);
  const area = document.getElementById("testArea");
  if (!area) return;
  area.innerHTML = `
    <h2>आपका रिजल्ट</h2>
    <div class="result">
      <h3>स्कोर: ${score} / ${current.length}</h3>
      <p>प्रतिशत: ${percent}%</p>
      <p>प्रयास किए गए प्रश्न: ${attempted} / ${current.length}</p>
      <p>सही उत्तर: ${score} | गलत / छोड़े गए: ${current.length-score}</p>
      ${autoSubmit ? "<p>समय पूरा होने पर टेस्ट अपने आप जमा हुआ।</p>" : ""}
    </div>
    <h3>उत्तर जाँचें</h3>
    ${current.map((q,i) => `
      <div class="question" style="border:1px solid #e1e7ee;border-radius:10px;padding:12px;margin:10px 0">
        <b>Q${i+1}. ${q.q}</b>
        <p>आपका उत्तर: ${answers[i] === null ? "नहीं दिया" : q.options[answers[i]]}</p>
        <p style="color:#16835d">सही उत्तर: ${q.options[q.answer]}</p>
      </div>
    `).join("")}
    <button class="btn" onclick="closeTest()">बंद करें</button>
  `;
};

window.closeTest = function() {
  clearInterval(timerId);
  const modal = document.getElementById("modal");
  if (modal) modal.classList.remove("open");
};

window.buyTest = function(id) {
  const test = tests.find(t => t.id === id);
  if (test) window.buy(test.name, test.price);
};

window.buyPass = function() { window.buy("All Exams Pass", 199); };

window.buy = function(name, price) {
  const area = document.getElementById("testArea");
  const modal = document.getElementById("modal");
  if (!area || !modal) {
    alert("Payment area नहीं मिला।");
    return;
  }
  const cfg = window.UKTS_CONFIG || {};
  const upi = cfg.upiId || "shubham1875@ptyes";
  const phone = String(cfg.whatsappNumber || "918449291875").replace(/\D/g,"");
  area.innerHTML = `
    ${closeButton}
    <h2>Payment Instructions</h2>
    <p>Test: ${name}</p>
    <h3>Amount: ₹${price}</h3>
    <p>UPI ID: ${upi}</p>
    <button class="btn" onclick="window.location.href='upi://pay?pa=${encodeURIComponent(upi)}&pn=UK%20Test%20Series&am=${price}&cu=INR'">Pay with UPI</button>
    <p>Payment के बाद WhatsApp पर screenshot भेजें।</p>
    <a href="https://wa.me/${phone}" target="_blank" rel="noopener">WhatsApp पर संपर्क करें</a>
  `;
  modal.classList.add("open");
};

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const cfg = window.UKTS_CONFIG || {};
const n = String(cfg.whatsappNumber || "918449291875").replace(/\D/g, "");
const contact = document.getElementById("contactLink");
if (contact && n.length >= 10) contact.href = `https://wa.me/${n}`;

render();
