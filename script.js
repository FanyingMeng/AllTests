let currentSubject = localStorage.getItem("currentSubject");
let questions = questionBank[currentSubject];
let wrongQuestions = JSON.parse(localStorage.getItem(`wrongQuestions_${currentSubject}`)) || [];

// 读取保存的做题进度
let savedIndex = localStorage.getItem(`currentIndex_${currentSubject}`);
let currentIndex = savedIndex ? parseInt(savedIndex) : 0;

document.getElementById("subjectTitle").innerText = "科目：" + currentSubject.toUpperCase();

// 转义 HTML 特殊字符
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
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
  document.getElementById("progressText").innerText = `题目 ${currentIndex + 1} / ${questions.length}`;

  // 转义题干并保留换行
  let html = `<p><b>题目 ${currentIndex + 1}：</b><br>${escapeHtml(q.question).replace(/\n/g, "<br>")}</p>`;

  if (q.type === "mcq") {
    q.options.forEach(opt => {
      html += `<label><input type="radio" name="answer" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}</label><br>`;
    });
  } else if (q.type === "tf") {
    html += `
      <label><input type="radio" name="answer" value="true"> 正确</label><br>
      <label><input type="radio" name="answer" value="false"> 错误</label><br>`;
  } else if (q.type === "code") {
    html += `<input type="text" id="codeAnswer" placeholder="填写代码...">`;
  }

  html += `<br><button onclick="checkAnswer()">提交答案</button>`;
  container.innerHTML = html;
}

// 检查答案
function checkAnswer() {
  const q = questions[currentIndex];
  let userAnswer;

  if (q.type === "mcq" || q.type === "tf") {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return alert("请选择一个答案！");
    userAnswer = selected.value;
    if (q.type === "tf") userAnswer = userAnswer === "true";
  } else if (q.type === "code") {
    userAnswer = document.getElementById("codeAnswer").value.trim();
  }

  const result = document.getElementById("result");
  if (String(userAnswer).toLowerCase() === String(q.answer).toLowerCase()) {
    result.innerText = "✅ 正确！";
  } else {
    result.innerText = `❌ 错误，正确答案是：${q.answer}`;
    if (!wrongQuestions.some(w => w.question === q.question)) {
      wrongQuestions.push(q);
      localStorage.setItem(`wrongQuestions_${currentSubject}`, JSON.stringify(wrongQuestions));
    }
  }
}

// 下一题
function nextQuestion() {
  currentIndex = (currentIndex + 1) % questions.length;
  localStorage.setItem(`currentIndex_${currentSubject}`, currentIndex);
  renderQuestion();
}

// 随机题
function randomQuestion() {
  currentIndex = Math.floor(Math.random() * questions.length);
  localStorage.setItem(`currentIndex_${currentSubject}`, currentIndex);
  renderQuestion();
}

// 重做错题
function redoWrong() {
  const stored = JSON.parse(localStorage.getItem(`wrongQuestions_${currentSubject}`));
  if (!stored || stored.length === 0) return alert("暂无错题记录！");
  questions = stored;
  currentIndex = 0;
  localStorage.setItem(`currentIndex_${currentSubject}`, currentIndex);
  renderQuestion();
}

// 清除错题
function clearWrong() {
  if (confirm("确定要清除错题记录吗？")) {
    localStorage.removeItem(`wrongQuestions_${currentSubject}`);
    wrongQuestions = [];
    alert("错题已清空。");
  }
}

// 返回首页
function backHome() {
  window.location.href = "index.html";
}

// 初始化
renderQuestion();