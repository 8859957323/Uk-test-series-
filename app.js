const tests = [
  {id:"ssc",name:"SSC Foundation Mock Test",exam:"SSC",questions:20,price:99,level:"Beginner"},
  {id:"rail",name:"Railway Group D Test Pack",exam:"Railway",questions:25,price:149,level:"Practice"},
  {id:"police",name:"Police Constable Mock Test",exam:"Police",questions:20,price:99,level:"Practice"},
  {id:"bank",name:"Banking Prelims Practice",exam:"Banking",questions:20,price:199,level:"Practice"},
  {id:"teach",name:"Teaching Eligibility Test",exam:"Teaching",questions:20,price:149,level:"Practice"},
  {id:"all",name:"All Exams Mega Pack",exam:"All Exams",questions:50,price:499,level:"Combo"}
];

const sample = [
  {q:"भारत की राजधानी क्या है?",o:["मुंबई","नई दिल्ली","जयपुर","लखनऊ"],a:1},
  {q:"15 × 4 कितना होगा?",o:["45","50","60","65"],a:2},
  {q:"भारतीय संविधान कब लागू हुआ?",o:["15 अगस्त 1947","26 जनवरी 1950","2 अक्टूबर 1950","26 नवंबर 1949"],a:1},
  {q:"सौरमंडल का सबसे बड़ा ग्रह कौन-सा है?",o:["पृथ्वी","मंगल","बृहस्पति","शुक्र"],a:2},
  {q:"एक किलोमीटर में कितने मीटर होते हैं?",o:["100","500","1000","1500"],a:2}
];

let current = [];
let testName = "";

function render() {
  const cards = document.getElementById("testCards");
  if (!cards) return;

  cards.innerHTML = tests.map(t => 
    <article class="test">
      <span class="pill">${t.exam}</span>
      <h3>${t.name}</h3>
      <p>${t.questions} Questions • ${t.level}</p>
      <b>₹${t.price}</b><br>
      <button class="btn" onclick="buyTest('${t.id}')">Buy Test</button>
      <button class="btn light" onclick="startTest('${t.id}')">Demo</button>
    </article>
  ).join("");
}

function startTest(id) {
  const test = tests.find(t => t.id === id);
  testName = test ? test.name : "Free Sample Test";
  current = sample;

  let html = 
    <h2>${testName}</h2>
    <p class="muted">यह एक छोटा demo test है।</p>
    <form id="quiz">
  ;

  current.forEach((q, i) => {
    html += <div>
      <h3>${i+1}. ${q.q}</h3>;

    q.o.forEach((option, j) => {
      html += 
        <label class="option">
          <input type="radio" name="q${i}" value="${j}">
          ${option}
        </label>;
    });

    html += </div>;
  });

  html += 
    <button class="btn" type="submit">Submit Test</button>
    </form>
    <div id="score"></div>
  ;

  document.getElementById("testArea").innerHTML = html;

  document.getElementById("quiz").onsubmit = function(e) {
    e.preventDefault();

    let score = 0;

    current.forEach((q, i) => {
      const answer = document.querySelector(
        input[name="q${i}"]:checked
      );

      if (answer && Number(answer.value) === q.a) {
        score++;
      }
    });

    document.getElementById("score").innerHTML =
      <div class="result">
        <h3>आपका स्कोर: ${score}/${current.length}</h3>
        <p>यह demo result है।</p>
      </div>;
  };

  document.getElementById("modal").classList.add("open");
}

window.startDemoTest = function() {
  startTest("free");
};

function closeTest() {
  document.getElementById("modal").classList.remove("open");
}

function buyTest(id) {
  const t = tests.find(x => x.id === id);
  if (t) buy(t.name, t.price);
}

function buyPass() {
  buy("All Exams Pass (3 months)", 499);
}

function buy(name, price) {
  const c = window.UKTS_CONFIG || {};
  const msg = नमस्ते, मैंने ${name} के लिए ₹${price} भुगतान किया है। कृपया मेरा भुगतान verify करें।;
  const wa = (c.whatsappNumber || "").replace(/\D/g, "");
  const upi = c.upiId || "अभी सेट नहीं है";

  document.getElementById("testArea").innerHTML = 
    <h2>Payment Instructions</h2>
    <p><b>${name}</b></p>
    <p>राशि: <b>₹${price}</b></p>
    <div class="result">
      <p>UPI ID</p>
      <h3>${upi}</h3>
    </div>
    <p class="notice">
      भुगतान के बाद WhatsApp पर transaction reference भेजें।
      Admin verify करने के बाद ही access देगा।
    </p>
    ${wa.length >= 10
      ? <a class="btn" target="_blank" rel="noopener"
          href="https://wa.me/${wa}?text=${encodeURIComponent(msg)}">
          WhatsApp पर भुगतान की जानकारी भेजें
        </a>
      : ""}
  ;
 document.getElementById("modal").classList.add("open");
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const cfg = window.UKTS_CONFIG || {};
const n = (cfg.whatsappNumber || "").replace(/\D/g, "");
const contact = document.getElementById("contactLink");

if (contact && n.length >= 10) {
  contact.href = https://wa.me/${n};
}

render();
