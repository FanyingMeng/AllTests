let currentSubject = localStorage.getItem("currentSubject");
let questions = questionBank[currentSubject];
let originalQuestions = questions.slice(); // 保存原始题库
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

// Fisher-Yates 随机打乱数组
function shuffleArray(arr) {
  const a = arr.slice(); // 复制数组
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

  // --- 跳转题号控件放在题目标签后 ---
  const jumpHtml = `
    <span style="margin-left: 10px;">
      <input type="number" id="jumpInput" placeholder="题号" min="1" style="width:60px; height:24px; font-size:14px; text-align:center; border-radius:4px; border:1px solid #ccc;">
      <button onclick="jumpToQuestion()" style="height:28px; padding:0 8px; font-size:14px; border-radius:4px; border:none; background-color:#ccc; color:black; cursor:pointer;">跳转</button>
    </span>
  `;
  document.getElementById("progressText").innerHTML += jumpHtml;
  document.getElementById("jumpInput").value = currentIndex + 1;

  // 转义题干并保留换行
  let html = `<p><b>题目 ${currentIndex + 1}：</b><br>${escapeHtml(q.question).replace(/\n/g,"<br>")}</p>`;

  if (q.type === "mcq") {
    // 随机打乱选项一次
    if (!q._shuffledOptions) {
      q._shuffledOptions = shuffleArray(q.options);
    }
    q._shuffledOptions.forEach(opt => {
      html += `<label><input type="radio" name="answer" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}</label><br>`;
    });
  } else if (q.type === "tf") {
    html += `
      <label><input type="radio" name="answer" value="true"> 正确</label><br>
      <label><input type="radio" name="answer" value="false"> 错误</label><br>
    `;
  } else if (q.type === "fib") {
    html += `<input type="text" id="fibAnswer" placeholder="Fill in the blank..." style="width: 300px; height: 40px; font-size: 20px;">`;
  } else if (q.type === "short") {
    html += `
      <textarea id="shortAnswer" rows="5"
        placeholder="Write your answer here..."
        style="width:100%; padding:10px; font-size:20px;
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

// 跳转题号
function jumpToQuestion() {
  const input = document.getElementById("jumpInput");
  const target = parseInt(input.value, 10);

  if (isNaN(target)) {
    alert("请输入题号");
    return;
  }

  if (target < 1 || target > questions.length) {
    alert(`题号范围是 1 到 ${questions.length}`);
    return;
  }

  currentIndex = target - 1;
  localStorage.setItem(`currentIndex_${currentSubject}`, currentIndex);
  renderQuestion();
}

// 支持回车跳转
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && document.activeElement.id === "jumpInput") {
    jumpToQuestion();
  }
});

// 初始化
renderQuestion();