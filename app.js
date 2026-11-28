const tests = [
  {id:"ssc",name:"SSC Foundation Mock Test",exam:"SSC",questions:20,price:99,level:"Beginner"},
  {id:"rail",name:"Railway Group D Test Pack",exam:"Railway",questions:25,price:149,level:"Practice"},
  {id:"police",name:"Police Constable Mock Test",exam:"Police",questions:20,price:99,level:"Practice"},
  {id:"bank",name:"Banking Foundation Test",exam:"Banking",questions:20,price:99,level:"Beginner"},
  {id:"teaching",name:"Teaching Exam Mock Test",exam:"Teaching",questions:20,price:99,level:"Practice"},
  {id:"all",name:"All Exams Practice Pack",exam:"All Exams",questions:50,price:199,level:"Advanced"}
];

// फिलहाल अभ्यास के लिए 20 सामान्य ज्ञान के डेमो प्रश्न।
const examQuestions = {
  ssc: [
    ["संविधान में मौलिक अधिकार किस भाग में हैं?",["भाग I","भाग II","भाग III","भाग IV"],2],
    ["'जय जवान जय किसान' नारा किसने दिया?",["नेहरू","लाल बहादुर शास्त्री","पटेल","गांधी"],1],
    ["RBI की स्थापना कब हुई?",["1935","1947","1950","1955"],0],
    ["विटामिन C की कमी से कौन सा रोग होता है?",["रिकेट्स","स्कर्वी","बेरी-बेरी","रतौंधी"],1],
    ["पंचायती राज को संवैधानिक दर्जा किस संशोधन से मिला?",["42वां","44वां","73वां","86वां"],2],
    ["सौरमंडल का सबसे बड़ा ग्रह कौन है?",["पृथ्वी","शनि","बृहस्पति","मंगल"],2],
    ["भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ?",["1930","1942","1946","1919"],1],
    ["मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",["अग्न्याशय","थायरॉइड","यकृत","पीयूष"],2],
    ["'गीतांजलि' के लेखक कौन हैं?",["प्रेमचंद","रवींद्रनाथ टैगोर","महादेवी वर्मा","बच्चन"],1],
    ["हरित क्रांति का संबंध मुख्यतः किससे है?",["दूध","खाद्यान्न","मछली","तेल"],1],
    ["12 का 25% कितना है?",["2","3","4","6"],1],
    ["श्रृंखला: 2, 4, 8, 16, ?",["20","24","30","32"],3],
    ["500 का 10% कितना है?",["5","25","50","100"],2],
    ["₹100 की वस्तु ₹120 में बेचने पर लाभ प्रतिशत?",["10%","15%","20%","25%"],2],
    ["A=1, B=2 तो D का मान?",["3","4","5","6"],1],
    ["'सुंदर' का विलोम क्या है?",["मनोहर","कुरूप","आकर्षक","सुशील"],1],
    ["'जल' का पर्यायवाची कौन सा है?",["अनल","नीर","पवन","गगन"],1],
    ["शुद्ध वर्तनी चुनें।",["आर्शीवाद","आशीर्वाद","आर्शिवाद","आशिरवाद"],1],
    ["CAG का उल्लेख किस अनुच्छेद में है?",["148","280","324","356"],0],
    ["लोकसभा का सामान्य कार्यकाल कितना है?",["4 वर्ष","5 वर्ष","6 वर्ष","7 वर्ष"],1]
  ],
  rail: [
    ["भारतीय रेल का मुख्यालय कहाँ है?",["मुंबई","नई दिल्ली","कोलकाता","चेन्नई"],1],
    ["भारत में पहली यात्री ट्रेन कब चली?",["1853","1869","1885","1901"],0],
    ["पहली यात्री ट्रेन किन स्थानों के बीच चली?",["दिल्ली-आगरा","मुंबई-ठाणे","हावड़ा-पटना","चेन्नई-बेंगलुरु"],1],
    ["रेलवे बोर्ड की स्थापना किस वर्ष हुई?",["1901","1905","1925","1947"],1],
    ["रेल की पटरियों के बीच की दूरी क्या कहलाती है?",["गेज","सिग्नल","प्लेटफॉर्म","स्लीपर"],0],
    ["भारत में मेट्रो सेवा सबसे पहले कहाँ शुरू हुई?",["दिल्ली","मुंबई","कोलकाता","चेन्नई"],2],
    ["रेलवे में लाल सिग्नल का अर्थ?",["आगे बढ़ें","धीरे चलें","रुकें","सीटी दें"],2],
    ["लोको पायलट का मुख्य कार्य?",["ट्रेन चलाना","टिकट जाँचना","पटरियाँ बनाना","सफाई"],0],
    ["भारत की पहली विद्युत ट्रेन किस वर्ष चली?",["1925","1935","1947","1951"],0],
    ["PNR का पूरा नाम क्या है?",["Passenger Name Record","Public Number Register","Passenger Number Route","Personal Name Receipt"],0],
    ["बल की SI इकाई क्या है?",["जूल","न्यूटन","वाट","पास्कल"],1],
    ["विद्युत धारा की SI इकाई?",["वोल्ट","ओम","एम्पियर","वाट"],2],
    ["ध्वनि किसमें यात्रा नहीं कर सकती?",["जल","वायु","निर्वात","इस्पात"],2],
    ["मानव शरीर का सामान्य तापमान लगभग?",["27°C","37°C","47°C","57°C"],1],
    ["लोहे में जंग लगने के लिए क्या चाहिए?",["केवल धूप","ऑक्सीजन और नमी","केवल नाइट्रोजन","केवल गर्मी"],1],
    ["1 किलोमीटर में कितने मीटर?",["100","500","1000","1500"],2],
    ["24 और 36 का HCF क्या है?",["6","8","12","18"],2],
    ["60 किमी/घंटा से 2 घंटे में दूरी?",["60 किमी","100 किमी","120 किमी","150 किमी"],2],
    ["भारत का राष्ट्रीय जलीय जीव?",["मगरमच्छ","गंगा डॉल्फिन","कछुआ","शार्क"],1],
    ["सौर ऊर्जा का मुख्य स्रोत?",["चंद्रमा","सूर्य","पृथ्वी","मंगल"],1]
  ],
  police: [
    ["भारत में पुलिस किस सूची का विषय है?",["संघ सूची","राज्य सूची","समवर्ती सूची","कोई नहीं"],1],
    ["FIR का पूरा नाम क्या है?",["First Information Report","Final Investigation Record","First Inquiry Register","Formal Incident Report"],0],
    ["भारत का एकीकृत आपातकालीन नंबर?",["100","101","108","112"],3],
    ["अनुच्छेद 21 किससे संबंधित है?",["समानता","जीवन और व्यक्तिगत स्वतंत्रता","धर्म","शिक्षा"],1],
    ["राष्ट्रीय मानवाधिकार आयोग की स्थापना कब हुई?",["1990","1993","2001","2005"],1],
    ["पीली ट्रैफिक बत्ती का अर्थ?",["सावधान/रुकने की तैयारी","तेज चलें","पार्क करें","हॉर्न बजाएँ"],0],
    ["भारतीय दंड संहिता किस वर्ष लागू हुई?",["1857","1860","1861","1872"],1],
    ["पुलिस स्मृति दिवस कब मनाया जाता है?",["15 अगस्त","21 अक्टूबर","26 जनवरी","2 अक्टूबर"],1],
    ["NCRB का पूरा नाम?",["National Crime Records Bureau","National Criminal Rules Board","National Court Records Branch","National Crime Research Board"],0],
    ["साइबर वित्तीय धोखाधड़ी हेल्पलाइन नंबर?",["112","181","1930","1098"],2],
    ["रक्त को छानने का मुख्य कार्य कौन करता है?",["हृदय","गुर्दे","फेफड़े","आमाशय"],1],
    ["वयस्क मनुष्य के सामान्यतः कितने दाँत होते हैं?",["28","30","32","34"],2],
    ["विटामिन D का प्रमुख प्राकृतिक स्रोत?",["सूर्य का प्रकाश","चीनी","नमक","चावल"],0],
    ["भारत का राष्ट्रीय पशु?",["एशियाई शेर","बंगाल टाइगर","हाथी","तेंदुआ"],1],
    ["भारतीय संविधान कब लागू हुआ?",["15 अगस्त 1947","26 जनवरी 1950","26 नवंबर 1949","2 अक्टूबर 1950"],1],
    ["15 + 27 कितना है?",["32","40","42","44"],2],
    ["200 का 15% कितना है?",["15","20","30","35"],2],
    ["श्रृंखला: 5, 10, 15, 20, ?",["22","24","25","30"],2],
    ["'साहस' का समानार्थी शब्द?",["भय","वीरता","आलस्य","क्रोध"],1],
    ["भारत के राष्ट्रपति का कार्यकाल कितने वर्ष?",["4","5","6","7"],1]
  ]
};
const examQuestionSets = Object.fromEntries(Object.entries(examQuestions).map(([id, rows]) => [id, rows.map(([q, options, answer]) => ({q, options, answer}))]));

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
let activeExamName = "General";

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
      <strong>UK Test Series - ${activeExamName} Demo Test</strong>
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
  current = examQuestionSets[id] || questions;
  activeExamName = (tests.find(t => t.id === id) || {}).exam || "General";
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
