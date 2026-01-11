let currentSubject = localStorage.getItem("currentSubject");
let questions = questionBank[currentSubject];
let wrongQuestions = JSON.parse(localStorage.getItem(`wrongQuestions_${currentSubject}`)) || [];

let savedIndex = localStorage.getItem(`currentIndex_${currentSubject}`);
let currentIndex = savedIndex ? parseInt(savedIndex) : 0;

document.getElementById("subjectTitle").innerText =
  "科目：" + currentSubject.toUpperCase();

// 转义 HTML 特殊字符
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;");
}

// 渲染题目
function renderQuestion() {
  const q = questions[currentIndex];
  const container = document.getElementById("questionContainer");
  const result = document.getElementById("result");
  result.innerText = "";

  // 更新进度条
  const progress = ((currentIndex + 1) / questions.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressText").innerText =
    `题目 ${currentIndex + 1} / ${questions.length}`;

  // 转义题干并保留换行
  let html = `<p><b>题目 ${currentIndex + 1}：</b><br>${escapeHtml(q.question).replace(/\n/g,"<br>")}</p>`;

  if (q.type === "mcq") {
    q.options.forEach(opt => {
      html += `<label><input type="radio" name="answer" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}</label><br>`;
    });
  } else if (q.type === "tf") {
    html += `
      <label><input type="radio" name="answer" value="true"> 正确</label><br>
      <label><input type="radio" name="answer" value="false"> 错误</label><br>
    `;
  } else if (q.type === "fib") {
    html += `<input type="text" id="fibAnswer" placeholder="Fill in the blank...">`;
  } else if (q.type === "short") {
    html += `
      <textarea id="shortAnswer" rows="5"
        placeholder="Write your answer here..."
        style="width:100%; padding:10px; font-size:16px;
        border-radius:8px; border:1px solid #ccc;"></textarea>
    `;
  }

  html += `<br><button onclick="checkAnswer()">提交答案</button>`;
  container.innerHTML = html;
}

// 检查答案
function checkAnswer() {
  const q = questions[currentIndex];
  let userAnswer = "";
  const result = document.getElementById("result");

  if (q.type === "mcq" || q.type === "tf") {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return alert("请选择一个答案！");
    userAnswer = q.type === "tf" ? selected.value === "true" : selected.value;
  } else if (q.type === "fib") {
    userAnswer = document.getElementById("fibAnswer").value.trim().toLowerCase();
  } else if (q.type === "short") {
    userAnswer = document.getElementById("shortAnswer").value.trim().toLowerCase();
  }

  let isCorrect = false;

  if (Array.isArray(q.answer)) {
    isCorrect = q.answer.some(a => userAnswer.includes(a.toLowerCase()));
  } else {
    isCorrect = String(userAnswer).toLowerCase() === String(q.answer).toLowerCase();
  }

  if (q.type === "short") {
    if (isCorrect) {
      result.innerText = `✅ 提交完成！参考答案：${Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer}`;
    } else {
      result.innerText = `❌ 错误，参考答案：${Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer}`;
      if (!wrongQuestions.some(w => w.question === q.question)) {
        wrongQuestions.push(q);
        localStorage.setItem(`wrongQuestions_${currentSubject}`, JSON.stringify(wrongQuestions));
      }
    }
  } else {
    // 其他题型原逻辑
    if (isCorrect) {
      result.innerText = "✅ 正确！";
    } else {
      result.innerText = `❌ 错误，参考答案：${Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer}`;
      if (!wrongQuestions.some(w => w.question === q.question)) {
        wrongQuestions.push(q);
        localStorage.setItem(`wrongQuestions_${currentSubject}`, JSON.stringify(wrongQuestions));
      }
    }
  }
}

// 下一题
function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    localStorage.setItem(`currentIndex_${currentSubject}`, currentIndex);
    renderQuestion();
  } else {
    alert("已经是最后一题了");
  }
}

// 上一题
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    localStorage.setItem(`currentIndex_${currentSubject}`, currentIndex);
    renderQuestion();
  } else {
    alert("已经是第一题了");
  }
}

// 重做错题
function redoWrong() {
  const stored = JSON.parse(localStorage.getItem(`wrongQuestions_${currentSubject}`));
  if (!stored || stored.length === 0) return alert("暂无错题");
  questions = stored;
  currentIndex = 0;
  renderQuestion();
}

// 清除错题
function clearWrong() {
  if (confirm("确定清除错题吗？")) {
    localStorage.removeItem(`wrongQuestions_${currentSubject}`);
    wrongQuestions = [];
    alert("错题已清空");
  }
}

// 返回首页
function backHome() {
  window.location.href = "index.html";
}

// 初始化
renderQuestion();