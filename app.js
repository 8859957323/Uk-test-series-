const tests = [
  {id:"ssc",name:"SSC Foundation Mock Test",exam:"SSC",questions:20,price:99,level:"Beginner"},
  {id:"rail",name:"Railway Group D Test Pack",exam:"Railway",questions:25,price:149,level:"Practice"},
  {id:"police",name:"Police Constable Mock Test",exam:"Police",questions:20,price:99,level:"Practice"},
  {id:"bank",name:"Banking Foundation Test",exam:"Banking",questions:20,price:99,level:"Beginner"},
  {id:"teaching",name:"Teaching Exam Mock Test",exam:"Teaching",questions:20,price:99,level:"Practice"},
  {id:"all",name:"All Exams Practice Pack",exam:"All Exams",questions:50,price:199,level:"Advanced"}
];

const sample = [
  {q:"भारत की राजधानी क्या है?",options:["मुंबई","नई दिल्ली","कोलकाता","चेन्नई"],answer:1},
  {q:"भारत का राष्ट्रीय पशु कौन है?",options:["शेर","हाथी","बाघ","घोड़ा"],answer:2},
  {q:"15 + 10 कितना होता है?",options:["20","25","30","35"],answer:1},
  {q:"भारत का राष्ट्रीय पक्षी कौन है?",options:["तोता","मोर","कबूतर","हंस"],answer:1},
  {q:"एक सप्ताह में कितने दिन होते हैं?",options:["5","6","7","8"],answer:2}
];

let current = [];

const closeButton = `<button onclick="closeTest()">Close</button>`;

function render() {
  const cards = document.getElementById("testCards");
  if (!cards) return;

  cards.innerHTML = tests.map(t => `
    <article class="test">
      <h3>${t.name}</h3>
      <p>Exam: ${t.exam}</p>
      <p>Questions: ${t.questions}</p>
      <p>Level: ${t.level}</p>
      <p>Price: ₹${t.price}</p>
      <button onclick="startTest('${t.id}')">Demo Test</button>
      <button onclick="buyTest('${t.id}')">Buy Test</button>
    </article>
  `).join("");
}

window.startTest = function(id) {
  current = sample;
  const modal = document.getElementById("modal");
  const area = document.getElementById("testArea");

  if (!modal || !area) {
    alert("Test area नहीं मिला।");
    return;
  }

  let html = `${closeButton}<h2>UK Test Series - Mock Test</h2>`;

  current.forEach((q, i) => {
    html += `
      <div class="question">
        <h3>Q${i + 1}. ${q.q}</h3>
        ${q.options.map((op, j) => `
          <label class="option">
            <input type="radio" name="q${i}" value="${j}">
            ${op}
          </label>
        `).join("")}
      </div>
    `;
  });

  html += `
    <button onclick="submitTest()">Submit Test</button>
    <div id="score"></div>
  `;

  area.innerHTML = html;
  modal.classList.add("open");
};

window.submitTest = function() {
  let score = 0;

  current.forEach((q, i) => {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);

    if (answer && Number(answer.value) === q.answer) {
      score++;
    }
  });

  const result = document.getElementById("score");
  if (result) {
    result.innerHTML = `
      <h2>आपका रिजल्ट</h2>
      <p>सही उत्तर: ${score} / ${current.length}</p>
    `;
  }
};

window.closeTest = function() {
  const modal = document.getElementById("modal");
  if (modal) modal.classList.remove("open");
};

window.buyTest = function(id) {
  const test = tests.find(t => t.id === id);
  if (test) window.buy(test.name, test.price);
};

window.buyPass = function() {
  window.buy("All Exams Pass", 199);
};

window.buy = function(name, price) {
  const area = document.getElementById("testArea");
  const modal = document.getElementById("modal");

  if (!area || !modal) {
    alert("Payment area नहीं मिला।");
    return;
  }

  area.innerHTML = `
    ${closeButton}
    <h2>Payment Instructions</h2>
    <p>Test: ${name}</p>
    <h3>Amount: ₹${price}</h3>
    <p>UPI ID: shubham1875@ptyes</p>
    <button onclick="window.location.href='upi://pay?pa=shubham1875@ptyes&pn=UK%20Test%20Series&am=${price}&cu=INR'">
      Pay with UPI
    </button>
    <p>Payment के बाद WhatsApp पर screenshot भेजें।</p>
    <a href="https://wa.me/918859957323" target="_blank">
      WhatsApp पर संपर्क करें
    </a>
  `;

  modal.classList.add("open");
};

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const cfg = window.UKTS_CONFIG || {};
const n = String(cfg.whatsappNumber || "8859957323").replace(/\D/g, "");
const contact = document.getElementById("contactLink");

if (contact && n.length >= 10) {
  contact.href = `https://wa.me/${n}`;
}

render();
