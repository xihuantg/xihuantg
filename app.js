// Page interaction and recommendation logic. Demo data lives in data.js.

let state = {
  member: false,
  activeFilter: "all",
  mobileTab: "home",
  detailReturnTab: "recommend",
  activeDetailId: null,
  assessment: {
    answers: {},
    result: null
  },
  recommendations: [],
  volunteers: []
};

const $ = (selector) => document.querySelector(selector);

function getProfile() {
  const a = $("#secondSubjectA").value;
  const b = $("#secondSubjectB").value;
  return {
    province: "河南",
    primary: $("#primarySubject").value,
    secondary: Array.from(new Set([a, b])),
    score: Number($("#score").value || 0),
    rank: Number($("#rank").value || 0),
    batch: $("#batch").value,
    majorPreference: $("#majorPreference").value,
    cityPreference: $("#cityPreference").value
  };
}

function average(values) {
  return Math.round(values.reduce((sum, item) => sum + item, 0) / values.length);
}

function subjectText(item) {
  return `${item.primary} + ${item.secondary.join("+")}`;
}

function difficultyClass(level = "") {
  if (level.includes("很高")) return "hard";
  if (level.includes("较高")) return "medium-hard";
  if (level.includes("较低")) return "easy";
  return "medium";
}

function learningDifficultyLabel(level) {
  return `学习难度：${level || "待补充"}`;
}

function programDeepSummary(item) {
  return `
    <div class="deep-summary">
      <span class="difficulty-pill ${difficultyClass(item.difficulty)}">${learningDifficultyLabel(item.difficulty)}</span>
      <span>${item.employmentOutlook || "就业方向待补充"}</span>
    </div>
  `;
}

function paidProgramDetail(item) {
  return state.member
    ? `
      <p><strong>考研/升学：</strong>${item.postgraduatePath}</p>
      <p><strong>适合谁学：</strong>${item.fitProfile}</p>
      <p><strong>怎么学：</strong>${item.studyPlan}</p>
    `
    : `<p class="locked-line">进阶版解锁考研升学、适合人群、大学四年学习建议和替代院校说明。</p>`;
}

function majorSearchText(major) {
  return [
    major.discipline,
    major.name,
    major.examples.join(""),
    major.direction,
    major.risk,
    major.employment,
    major.postgraduate,
    major.fitFor,
    major.studyAdvice,
    major.difficulty,
    major.difficultyReason
  ].join("");
}

function assessmentKeywordScore(text, profileKeys = []) {
  return profileKeys.reduce((score, keyword) => score + (text.includes(keyword) ? 1 : 0), 0);
}

function getAssessmentResult() {
  return state.assessment.result;
}

function calculateAssessment() {
  const answers = state.assessment.answers;
  if (Object.keys(answers).length < assessmentQuestions.length) return null;
  const scores = { research: 0, practice: 0, service: 0, stable: 0 };
  assessmentQuestions.forEach((question) => {
    const option = question.options[answers[question.id]];
    if (!option) return;
    option.tags.forEach((tag) => {
      scores[tag] = (scores[tag] || 0) + 1;
    });
  });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primaryKey = sorted[0][0];
  const secondaryKey = sorted[1][0];
  const primary = assessmentProfiles[primaryKey];
  const secondary = assessmentProfiles[secondaryKey];
  const keywords = Array.from(new Set([...primary.keywords, ...secondary.keywords]));
  const majorMatchesList = majorProfiles
    .map((major) => ({
      major,
      score: assessmentKeywordScore(`${major.name}${major.examples.join("")}${major.employment}${major.fitFor}`, keywords)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.major);
  const programMatches = state.recommendations
    .filter((program) => program.eligible)
    .map((program) => ({
      program,
      score: assessmentKeywordScore(`${program.group}${program.majors.join("")}${program.employmentOutlook}${program.fitProfile}`, keywords) + Math.round(program.chance / 20)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.program.chance - a.program.chance)
    .slice(0, state.member ? 6 : 3)
    .map((item) => item.program);
  return { scores, primaryKey, secondaryKey, primary, secondary, keywords, majorMatches: majorMatchesList, programMatches };
}

function renderAssessmentQuestions() {
  const target = $("#assessmentQuestions");
  if (!target) return;
  target.innerHTML = assessmentQuestions.map((question, index) => `
    <article class="assessment-question">
      <div class="assessment-question-head">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${question.title}</strong>
      </div>
      <div class="assessment-options">
        ${question.options.map((option, optionIndex) => `
          <button class="${state.assessment.answers[question.id] === optionIndex ? "active" : ""}" type="button" data-assessment-question="${question.id}" data-assessment-option="${optionIndex}">
            ${option.text}
          </button>
        `).join("")}
      </div>
    </article>
  `).join("");
  renderAssessmentProgress();
}

function renderAssessmentProgress() {
  const target = $("#assessmentProgress");
  if (!target) return;
  const done = Object.keys(state.assessment.answers).length;
  target.textContent = done >= assessmentQuestions.length ? "已完成，可生成报告" : `已选择 ${done}/${assessmentQuestions.length} 题`;
}

function renderAssessmentResult() {
  const target = $("#assessmentResult");
  if (!target) return;
  const result = getAssessmentResult();
  if (!result) {
    target.innerHTML = `
      <div class="assessment-empty">
        <strong>完成选择后，这里会生成你的AI测评画像</strong>
        <p>测评会结合当前选科、位次和可报专业组，给出适合方向、学习建议和院校专业组推荐。</p>
      </div>
    `;
    renderReportAssessment();
    return;
  }
  const majorItems = result.majorMatches.slice(0, state.member ? 6 : 3).map((major) => `
    <li><strong>${major.name}</strong><span>${major.examples.slice(0, 3).join("、")}</span></li>
  `).join("");
  const programItems = result.programMatches.map((program) => `
    <article class="assessment-match-card">
      <strong>${program.school}</strong>
      <span>${program.group} · ${program.risk} · ${program.chance}%</span>
      <p>${program.fitProfile}</p>
      <button class="secondary-btn" type="button" data-detail="${program.id}">查看详情</button>
    </article>
  `).join("");
  target.innerHTML = `
    <div class="assessment-profile-card">
      <span class="badge">AI生成画像</span>
      <h3>${result.primary.name} + ${result.secondary.name}</h3>
      <p>${result.primary.summary}</p>
      <p><strong>适合环境：</strong>${result.primary.fit}</p>
      <p><strong>需要避开的坑：</strong>${state.member ? result.primary.avoid : "进阶版解锁不适合方向和完整风险解释。"}</p>
      <p><strong>大学怎么学：</strong>${state.member ? result.primary.studyAdvice : "进阶版解锁大学四年学习建议。"}</p>
    </div>
    <div class="assessment-result-grid">
      <article>
        <h4>适合专业方向</h4>
        <ul>${majorItems}</ul>
        ${state.member ? "" : `<p class="locked-line">基础版/进阶版可查看更多适合方向、难度和就业摘要。</p>`}
      </article>
      <article>
        <h4>匹配院校专业组</h4>
        <div class="assessment-match-grid">${programItems || "<p class='muted'>当前选科和位次下暂未匹配到明显适合项，可调整选科或专业偏好后再看。</p>"}</div>
      </article>
    </div>
  `;
  renderReportAssessment();
}

function renderReportAssessment() {
  const title = $("#reportAssessmentTitle");
  const text = $("#reportAssessmentText");
  if (!title || !text) return;
  const result = getAssessmentResult();
  if (!result) {
    title.textContent = "尚未测评";
    text.textContent = "完成性格测评后，报告会补充适合专业、学习建议和院校专业组匹配提示。";
    return;
  }
  title.textContent = `${result.primary.name} + ${result.secondary.name}`;
  const majors = result.majorMatches.slice(0, 3).map((major) => major.name).join("、");
  text.textContent = `更适合关注 ${majors || result.primary.directions.slice(0, 3).join("、")} 等方向；${state.member ? result.primary.studyAdvice : "进阶版可查看完整学习建议和院校专业组匹配理由。"}`;
}

function assessmentMatchLine(item) {
  const result = getAssessmentResult();
  if (!result) return "";
  const score = assessmentKeywordScore(`${item.group}${item.majors.join("")}${item.fitProfile || ""}${item.employmentOutlook || ""}`, result.keywords);
  if (!score) return "";
  return `<p class="assessment-match-line"><strong>测评匹配：</strong>${result.primary.name}画像与你的 ${item.majors.slice(0, 2).join("、")} 方向有匹配点。</p>`;
}

function matchesSubjects(item, profile) {
  const primaryOk = item.primary === "不限" || item.primary === profile.primary;
  const secondaryOk = item.secondary.includes("不限") || item.secondary.every((subject) => profile.secondary.includes(subject));
  return primaryOk && secondaryOk;
}

function classifyByRank(rank, item) {
  const avgRank = average(item.ranks);
  const diff = rank - avgRank;
  if (diff < -7000) return { risk: "保", chance: 86, reason: "你的位次明显优于近三年录取区间，可作为保底或专业优先项。" };
  if (diff <= 5000) return { risk: "稳", chance: 68, reason: "你的位次与近三年录取区间接近，适合作为稳妥配置。" };
  if (diff <= 16000) return { risk: "冲", chance: 38, reason: "你的位次略弱于历史录取区间，适合作为冲刺项。" };
  return { risk: "冲", chance: 18, reason: "当前位次距离历史录取区间较远，冲刺风险较高。" };
}

function preferenceBoost(item, profile) {
  const text = `${item.group}${item.majors.join("")}`;
  const pref = profile.majorPreference;
  let boost = 0;
  if (pref.includes("计算机") && /计算机|软件|人工智能|数据/.test(text)) boost += 6;
  if (pref.includes("电子信息") && /电子|通信|信息|集成电路|人工智能|数据/.test(text)) boost += 6;
  if (pref.includes("电气") && /电气|自动化|新能源|机器人/.test(text)) boost += 6;
  if (pref.includes("临床") && /医学|临床|口腔|药学|生物/.test(text)) boost += 6;
  if (pref.includes("师范") && /师范|教育|心理|汉语言|政治/.test(text)) boost += 6;
  if (pref.includes("法学") && /法学|政治|公共管理|社会/.test(text)) boost += 6;
  if (pref.includes("财经") && /财经|金融|会计|经济|管理/.test(text)) boost += 6;
  if (pref.includes("机械") && /机械|车辆|制造|自动化|机器/.test(text)) boost += 6;
  if (pref.includes("建筑") && /建筑|土木|交通/.test(text)) boost += 6;
  if (pref.includes("农学") && /农学|食品|环境|生态|生物/.test(text)) boost += 6;
  if (pref.includes("汉语言") && /汉语言|新闻|外语|传播|文学/.test(text)) boost += 6;
  if (profile.cityPreference.includes(item.city)) boost += 4;
  if (profile.cityPreference === "省会城市" && ["郑州", "北京", "上海", "广州", "成都"].includes(item.city)) boost += 3;
  if (profile.cityPreference === "离家较近" && item.province === "河南") boost += 3;
  if (item.planChange.startsWith("+")) boost += 2;
  if (item.planChange.startsWith("-")) boost -= 2;
  return boost;
}

function createRecommendations() {
  const profile = getProfile();
  if (profile.secondary.length < 2) {
    showToast("再选科目需要选择两门不同科目");
  }
  state.recommendations = programs.map((item) => {
    const eligible = matchesSubjects(item, profile);
    const base = classifyByRank(profile.rank, item);
    const boost = eligible ? preferenceBoost(item, profile) : 0;
    return {
      ...item,
      eligible,
      risk: eligible ? base.risk : "不可报",
      chance: eligible ? Math.max(8, Math.min(95, base.chance + boost)) : 0,
      reason: eligible ? base.reason : `你的选科为${profile.primary}+${profile.secondary.join("+")}，不满足该专业组 ${subjectText(item)} 的要求。`
    };
  }).sort((a, b) => {
    if (a.eligible !== b.eligible) return a.eligible ? -1 : 1;
    return b.chance - a.chance;
  });
}

function syncVolunteers() {
  state.volunteers = state.volunteers
    .map((item) => state.recommendations.find((program) => program.id === item.id))
    .filter(Boolean);
}

function renderRecommendations() {
  const grid = $("#recommendGrid");
  const source = state.activeFilter === "all" ? state.recommendations : state.recommendations.filter((item) => item.risk === state.activeFilter);
  const visible = state.member ? source : source.slice(0, 6);
  grid.innerHTML = visible.map((item, index) => {
    const locked = !state.member && index > 2;
    return `
      <article class="rec-card ${locked ? "locked" : ""}">
        <div class="card-top">
          <div>
            <h3>${item.school}</h3>
            <p class="muted">${item.group} · ${item.city} · ${item.level}</p>
          </div>
          <span class="risk-tag ${item.risk}">${item.risk}</span>
        </div>
        <div class="action-row">
          <span class="subject-tag">${subjectText(item)}</span>
          <span class="status-tag ${item.eligible ? "yes" : "no"}">${item.eligible ? "选科可报" : "选科不匹配"}</span>
        </div>
        <div class="stats">
          <span><strong>${locked ? "--" : item.chance + "%"}</strong>录取概率</span>
          <span><strong>${item.scores.join(" / ")}</strong>近三年分数</span>
          <span><strong>${item.ranks.join(" / ")}</strong>河南近三年位次</span>
          <span><strong>${item.plan}人 ${item.planChange}</strong>招生计划</span>
        </div>
        <p class="muted">${item.majors.join("、")} · ${item.tuition} · 热度${item.heat}</p>
        ${programDeepSummary(item)}
        <p><strong>适合画像：</strong>${item.fitProfile || "适合人群待补充"}；<strong>学习强度：</strong>${item.difficultyReason || "难度说明待补充"}</p>
        <p><strong>学校环境公开评价摘要：</strong>${state.member ? item.environment.replace("公开评价摘要：", "") : "进阶版解锁后查看校园环境、宿舍、食堂、交通等公开评价摘要。"}</p>
        <p>${state.member || !locked ? item.reason : "进阶版查看排序理由、风险解释和替代方案。"}</p>
        ${assessmentMatchLine(item)}
        ${locked ? "" : paidProgramDetail(item)}
        <div class="action-row">
          <button type="button" data-detail="${item.id}">&#26597;&#30475;&#35814;&#24773;</button>

          <button type="button" data-add="${item.id}">加入志愿表</button>
          <button type="button" data-fav="${item.id}">收藏</button>
        </div>
      </article>
    `;
  }).join("");
  if (!visible.length) {
    grid.innerHTML = `<p class="muted">当前筛选条件下暂无结果，请调整位次或选科。</p>`;
  }
  renderInsights();
}

function renderInsights() {
  const eligible = state.recommendations.filter((item) => item.eligible);
  const blocked = state.recommendations.length - eligible.length;
  const counts = countRisks(eligible);
  $("#matchInsight").innerHTML = `
    <div><strong>${eligible.length}</strong><span>选科可报专业组</span></div>
    <div><strong>${blocked}</strong><span>选科不匹配</span></div>
    <div><strong>${counts["稳"] || 0}</strong><span>稳妥候选</span></div>
    <div><strong>${counts["保"] || 0}</strong><span>保底候选</span></div>
  `;
  renderPreviewMetrics(eligible, counts);
}

function renderPreviewMetrics(eligible, counts) {
  const target = $("#previewMetrics");
  if (!target) return;
  target.innerHTML = `
    <div>
      <strong>${eligible.length}</strong>
      <span>可报专业组</span>
    </div>
    <div>
      <strong>${counts["稳"] || 0}</strong>
      <span>稳妥候选</span>
    </div>
    <div>
      <strong>${counts["保"] || 0}</strong>
      <span>保底候选</span>
    </div>
    <div>
      <strong>${state.member ? "完整" : "基础"}</strong>
      <span>报告状态</span>
    </div>
  `;
}

function renderMobileHomeSummary() {
  const target = $("#mobileProfileCard");
  if (!target) return;
  const profile = getProfile();
  const eligible = state.recommendations.filter((item) => item.eligible);
  const counts = countRisks(eligible);
  target.innerHTML = `
    <div>
      <span>当前考生档案</span>
      <strong>河南 · ${profile.primary} + ${profile.secondary.join(" + ")}</strong>
      <p>${profile.score}分 · ${profile.rank}位 · ${profile.batch}</p>
    </div>
    <div class="mobile-profile-stats">
      <span><strong>${eligible.length}</strong>可报</span>
      <span><strong>${counts["稳"] || 0}</strong>稳妥</span>
      <span><strong>${counts["保"] || 0}</strong>保底</span>
    </div>
  `;
}

function countRisks(items) {
  return items.reduce((acc, item) => {
    acc[item.risk] = (acc[item.risk] || 0) + 1;
    return acc;
  }, {});
}

function renderVolunteers() {
  const list = $("#volunteerList");
  if (!state.volunteers.length) {
    list.innerHTML = `<p class="muted">还没有添加志愿。可在推荐结果或院校专业组库中选择“加入志愿表”。</p>`;
  } else {
    list.innerHTML = state.volunteers.map((item, index) => `
      <div class="vol-item">
        <strong>A${index + 1}</strong>
        <div>
          <strong>${item.school}</strong>
          <p class="muted">${item.group} · ${item.risk} · ${subjectText(item)} · ${item.majors.slice(0, 2).join("、")}</p>
        </div>
        <div class="order-actions">
          <button class="icon-btn" title="上移" data-up="${index}" type="button">↑</button>
          <button class="icon-btn" title="下移" data-down="${index}" type="button">↓</button>
          <button class="icon-btn" title="移除" data-remove="${index}" type="button">×</button>
        </div>
      </div>
    `).join("");
  }
  renderRisks();
  renderReport();
}

function renderRisks() {
  const risks = [];
  const profile = getProfile();
  const tags = state.volunteers.map((item) => item.risk);
  const ineligible = state.volunteers.filter((item) => !matchesSubjects(item, profile));
  if (ineligible.length) risks.push(`有${ineligible.length}个志愿选科不匹配，正式填报前必须移除或替换。`);
  if (state.volunteers.length < 6) risks.push("志愿数量偏少，建议至少准备6个候选专业组。");
  if (!tags.includes("保")) risks.push("当前缺少保底专业组，建议加入位次优势更明显的院校。");
  if ((tags.filter((tag) => tag === "冲").length || 0) > state.volunteers.length / 2) risks.push("冲刺项占比偏高，滑档风险会增加。");
  if (state.volunteers.filter((item) => item.heat === "极高").length >= 2) risks.push("热门专业组较集中，建议搭配中热度专业降低不确定性。");
  if (profile.primary === "物理" && !profile.secondary.includes("化学") && state.volunteers.some((item) => /医学|材料|生物/.test(item.group))) risks.push("医学、材料、生物方向常见化学要求，请重点核对再选科。");
  const assessment = getAssessmentResult();
  if (assessment && profile.majorPreference !== "不限专业") {
    const prefText = profile.majorPreference;
    const matched = assessment.keywords.some((keyword) => prefText.includes(keyword)) || assessment.primary.directions.some((keyword) => prefText.includes(keyword));
    if (!matched) risks.push(`你的专业偏好与${assessment.primary.name}测评画像匹配度不高，建议家长和考生再讨论兴趣、学习强度和就业路径。`);
  }
  if (!risks.length) risks.push("当前志愿梯度较均衡，仍需以考试院和高校招生章程为准。");
  $("#riskList").innerHTML = risks.map((risk) => `<li>${risk}</li>`).join("");
}

function renderSchools() {
  const level = $("#schoolLevelFilter").value;
  const eligibility = $("#eligibilityFilter").value;
  const profile = getProfile();
  const rows = state.recommendations.filter((item) => {
    const levelOk = level === "all" || item.level === level;
    const eligibleOk = eligibility === "all" || (eligibility === "eligible" ? item.eligible : !item.eligible);
    return levelOk && eligibleOk;
  });
  $("#schoolTable").innerHTML = rows.map((item) => {
    const stillEligible = matchesSubjects(item, profile);
    return `
      <tr>
        <td><strong>${item.school}</strong><br><span class="muted">${item.group} · ${item.batch}</span></td>
        <td>${item.city}</td>
        <td>${item.level}</td>
        <td>${subjectText(item)}</td>
        <td>${item.ranks.join(" / ")}</td>
        <td>${item.employmentOutlook}<br><span class="muted">难度：${item.difficulty} · ${item.transferDifficulty}转专业</span></td>
        <td><span class="status-tag ${stillEligible ? "yes" : "no"}">${stillEligible ? "可报" : "不可报"}</span></td>
        <td><button class="secondary-btn" data-school-detail="${item.id}" type="button">&#35814;&#24773;</button> <button class="secondary-btn" data-school-add="${item.id}" type="button">加入</button></td>
      </tr>
    `;
  }).join("");
  const summary = $("#schoolListSummary");
  if (summary) {
    summary.innerHTML = `<strong>当前筛出 ${rows.length} 个专业组</strong><span>按你的选科和筛选条件展示，可点详情看官网、环境和录取趋势。</span>`;
  }
  const mobileList = $("#schoolMobileList");
  if (mobileList) {
    mobileList.innerHTML = rows.map((item) => renderSchoolMobileCard(item, matchesSubjects(item, profile))).join("");
    if (!rows.length) {
      mobileList.innerHTML = `<p class="muted">当前筛选条件下没有院校专业组，换个层次或状态试试。</p>`;
    }
  }
}

function renderSchoolMobileCard(item, stillEligible) {
  return `
    <article class="school-mobile-card">
      <div class="school-mobile-top">
        <div>
          <strong>${item.school}</strong>
          <span>${item.group} · ${item.city} · ${item.level}</span>
        </div>
        <span class="risk-tag ${item.risk}">${item.risk}</span>
      </div>
      <div class="school-mobile-tags">
        <span class="subject-tag">${subjectText(item)}</span>
        <span class="status-tag ${stillEligible ? "yes" : "no"}">${stillEligible ? "可报" : "不可报"}</span>
      </div>
      <div class="school-mobile-ranks">
        <div><span>近三年分数</span><strong>${item.scores.join(" / ")}</strong></div>
        <div><span>近三年位次</span><strong>${item.ranks.join(" / ")}</strong></div>
        <div><span>计划变化</span><strong>${item.plan}人 ${item.planChange}</strong></div>
      </div>
      <p>${item.majors.slice(0, 3).join("、")} · ${item.tuition} · 热度${item.heat}</p>
      ${programDeepSummary(item)}
      <div class="school-mobile-deep">
        <p><strong>考研升学：</strong>${item.postgraduatePath}</p>
        <p><strong>转专业：</strong>${item.transferDifficulty} · ${state.member ? item.transferPolicy : "进阶版查看具体限制和校内路径"}</p>
      </div>
      <p class="muted">${stillEligible ? item.note : `你的选科不满足 ${subjectText(item)}，正式填报前应排除。`}</p>
      <div class="school-mobile-actions">
        <button class="secondary-btn" data-school-detail="${item.id}" type="button">查看详情</button>
        <button class="primary-btn" data-school-add="${item.id}" type="button">加入志愿表</button>
      </div>
    </article>
  `;
}

function majorMatches(profile, major) {
  const primaryOk = major.primary === "不限" || major.primary === profile.primary;
  const secondaryOk = major.secondary.includes("不限") || major.secondary.every((subject) => profile.secondary.includes(subject));
  return primaryOk && secondaryOk;
}

function renderMajors() {
  const profile = getProfile();
  const keyword = $("#majorSearch").value.trim();
  const filtered = majorProfiles.filter((major) => {
    const haystack = majorSearchText(major);
    return !keyword || haystack.includes(keyword);
  });
  const visible = keyword ? filtered.slice(0, 9) : majorProfiles.slice(0, 9);
  $("#majorGrid").innerHTML = visible.map((major) => {
    const ok = majorMatches(profile, major);
    return renderMajorCard(major, ok);
  }).join("");
  if (!filtered.length) {
    $("#majorGrid").innerHTML = `<p class="muted">没有找到相关专业类。可以换一个专业名称试试，例如“软件工程”“会计学”“土木工程”。</p>`;
  }
}

function renderMajorCard(major, ok) {
  return `
    <article class="major-card">
      <div class="card-top">
        <div>
          <span class="mini-label">${major.discipline}</span>
          <h3>${major.name}</h3>
        </div>
        <span class="status-tag ${ok ? "yes" : "no"}">${ok ? "适配" : "不适配"}</span>
      </div>
      <p><strong>常见要求：</strong>${major.primary} + ${major.secondary.join("+")}</p>
      <p><strong>代表专业：</strong>${major.examples.join("、")}</p>
      <div class="major-deep-grid">
        <span class="difficulty-pill ${difficultyClass(major.difficulty)}">${learningDifficultyLabel(major.difficulty)}</span>
        <span>${major.employment}</span>
      </div>
      <p><strong>适合谁：</strong>${major.fitFor}</p>
      <p><strong>考研/升学：</strong>${state.member ? major.postgraduate : "进阶版查看升学依赖度和常见方向。"}</p>
      <p><strong>怎么学：</strong>${state.member ? major.studyAdvice : "进阶版查看大学四年学习建议。"}</p>
      <p>${major.risk}</p>
    </article>
  `;
}

function renderMajorDirectory() {
  const profile = getProfile();
  const keyword = $("#majorDirectorySearch").value.trim();
  const discipline = $("#disciplineFilter").value;
  const filtered = majorProfiles.filter((major) => {
    const haystack = majorSearchText(major);
    const keywordOk = !keyword || haystack.includes(keyword);
    const disciplineOk = discipline === "all" || major.discipline === discipline;
    return keywordOk && disciplineOk;
  });
  $("#majorDirectoryCount").textContent = `共 ${filtered.length} 个专业类`;
  $("#majorDirectoryGrid").innerHTML = filtered.map((major) => renderMajorCard(major, majorMatches(profile, major))).join("");
  if (!filtered.length) {
    $("#majorDirectoryGrid").innerHTML = `<p class="muted">没有找到相关专业类。可以换一个关键词或门类。</p>`;
  }
}

function openMajorDirectory() {
  document.body.classList.add("directory-mode");
  renderMajorDirectory();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeMajorDirectory() {
  document.body.classList.remove("directory-mode");
  window.location.hash = "majors";
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 720px)").matches;
}

function normalizeMobileTab(pageId) {
  if (pageId === "volunteer") return "diagnosis";
  if (["schools", "majors", "environment"].includes(pageId)) return "schools";
  if (["pricing", "report", "why-pay", "data"].includes(pageId)) return "account";
  if (pageId === "recommend") return "recommend";
  return "home";
}

function openMobileTab(tabId, shouldScroll = true) {
  if (!isMobileViewport()) {
    if (tabId === "home") {
      window.location.hash = "home";
    } else {
      window.location.hash = tabId;
    }
    return;
  }
  state.mobileTab = tabId;
  document.body.dataset.mobileTab = tabId;
  document.body.classList.add("mobile-tab-active");
  document.body.classList.remove("mobile-page-active", "school-detail-active");
  document.querySelectorAll("[data-mobile-tab]").forEach((section) => {
    section.classList.toggle("mobile-current", section.dataset.mobileTab === tabId);
  });
  document.querySelectorAll("[data-mobile-tab-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mobileTabTarget === tabId);
  });
  if (shouldScroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMobilePage(pageId) {
  openMobileTab(normalizeMobileTab(pageId));
}

function closeMobilePage() {
  openMobileTab("home");
}

function openSchoolDetail(id, returnTab = state.mobileTab || "recommend") {
  const item = state.recommendations.find((program) => program.id === id) || programs.find((program) => program.id === id);
  if (!item) return;
  state.activeDetailId = id;
  state.detailReturnTab = returnTab;
  const avgRank = average(item.ranks);
  const rankDiff = getProfile().rank - avgRank;
  const rankMessage = item.eligible
    ? rankDiff <= -8000
      ? "你的位次明显优于近三年均值，可作为保底或偏稳选择，但仍需看专业热度。"
      : rankDiff <= 5000
        ? "你的位次与近三年区间接近，适合作为稳妥或轻冲选择。"
        : "你的位次弱于近三年均值，属于冲刺项，需要搭配足够保底。"
    : "当前选科不满足该专业组要求，正式填报前应排除或换组。";
  const trendRows = item.scores.map((score, index) => `
    <div>
      <strong>${2023 + index}</strong>
      <span>${score}分</span>
      <span>${item.ranks[index]}位</span>
    </div>
  `).join("");
  $("#schoolDetailRisk").textContent = item.risk || "详情";
  $("#schoolDetailName").textContent = item.school;
  $("#schoolDetailMeta").textContent = `${item.group} · ${item.city} · ${item.level} · ${item.batch}`;
  $("#schoolWebsiteLink").href = item.website || "#";
  $("#schoolWebsiteLink").textContent = item.website ? "进入学校官网" : "官网待补充";
  $("#schoolIntroText").innerHTML = `
    <strong>${item.school}</strong> 当前样板展示的是面向河南考生的专业组档案。${item.schoolIntro || item.note || "学校简介待补充，正式上线前请替换为真实可核验信息。"}
    <br><br>
    <span>城市：${item.city} · 层次：${item.level} · 批次：${item.batch}</span>
  `;
  $("#schoolAdmissionTitle").textContent = `${item.scores.join(" / ")} 分`;
  $("#schoolAdmissionText").innerHTML = `
    <div class="admission-trend">${trendRows}</div>
    <p>${item.admissionSummary || ""}</p>
    <p>近三年平均位次约 ${avgRank}；招生计划 ${item.plan} 人，计划变化 ${item.planChange}。</p>
    <p><strong>当前判断：</strong>${rankMessage}</p>
  `;
  $("#schoolSubjectText").textContent = subjectText(item);
  $("#schoolMajorText").innerHTML = `
    <p><strong>包含专业：</strong>${item.majors.join("、")}</p>
    <p><strong>学费与热度：</strong>${item.tuition} · 热度${item.heat}</p>
    <p><strong>选科匹配：</strong>${item.eligible ? "当前选科可报。" : "当前选科不可报，需要更换专业组或核对招生章程。"}</p>
    <p><strong>专业提醒：</strong>${item.note}</p>
  `;
  $("#schoolCareerText").innerHTML = `
    <p><strong>就业方向：</strong>${item.employmentOutlook}</p>
    <p><strong>考研/升学：</strong>${state.member ? item.postgraduatePath : "进阶版解锁考研方向、升学依赖度和职业路径解释。"}</p>
  `;
  $("#schoolFitText").innerHTML = `
    <p><strong>适合谁学：</strong>${item.fitProfile}</p>
    <p><strong>学习强度：</strong><span class="difficulty-pill ${difficultyClass(item.difficulty)}">${item.difficulty}</span> ${item.difficultyReason}</p>
    <p><strong>怎么学：</strong>${state.member ? item.studyPlan : "进阶版解锁大学四年学习建议。"}</p>
  `;
  $("#schoolTransferText").innerHTML = `
    <p><strong>转专业难度：</strong><span class="difficulty-pill ${difficultyClass(item.transferDifficulty)}">${item.transferDifficulty}</span></p>
    <p><strong>转专业说明：</strong>${state.member ? item.transferPolicy : "进阶版查看转专业限制、名额和绩点要求样板说明。"}</p>
    <p><strong>校内提升路径：</strong>${state.member ? item.campusPath : "进阶版查看辅修、双学位、竞赛、实习和考研路径。"}</p>
    <p class="muted">正式上线前需以学校当年本科生手册、教务处政策和招生章程为准。</p>
  `;
  $("#schoolEnvironmentText").innerHTML = state.member
    ? `<p>${item.environment}</p><ul>${(item.reviewHighlights || []).map((text) => `<li>${text}</li>`).join("")}</ul>`
    : `<p>免费版展示基础信息；解锁后查看完整校园环境、宿舍、食堂、交通等公开评价摘要。</p><ul><li>校园氛围、宿舍食堂、交通通勤会影响四年体验。</li><li>同一学校不同校区差异较大，正式填报前需要核验校区。</li></ul>`;
  $("#schoolSourceText").innerHTML = state.member
    ? `${item.source}<br>${item.officialNote || "最终以考试院和高校官方信息为准。"}`
    : "完整来源和风险说明为会员报告权益；正式上线前所有摘要需替换为真实可核验来源。";
  $("#schoolPhotoGrid").innerHTML = (item.photos || []).slice(0, 3).map((photo, index) => `
    <div class="school-photo-card">
      <span>${["校门/主楼", "宿舍/生活区", "食堂/校园路"][index] || "校园环境"}</span>
      <small>正式版替换真实照片 · ${photo}</small>
    </div>
  `).join("");
  document.body.classList.add("school-detail-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSchoolDetail() {
  document.body.classList.remove("school-detail-active");
  openMobileTab(state.detailReturnTab || "recommend", true);
}

function renderPricing() {
  $("#pricingGrid").innerHTML = pricing.map((plan) => `
    <article class="price-card ${plan.featured ? "featured" : ""}">
      <span class="badge">${plan.featured ? "推荐" : "权益"}</span>
      <h3>${plan.name}</h3>
      <div class="price">${plan.price}<small> / ${plan.period || "本届高考季"}</small></div>
      <p>${plan.desc}</p>
      <p>${plan.perks.join(" · ")}</p>
      <button class="${plan.featured ? "primary-btn" : "secondary-btn"}" data-plan="${plan.name}" type="button">${plan.button || "开通" + plan.name}</button>
    </article>
  `).join("");
}

function renderReport() {
  const profile = getProfile();
  const eligible = state.recommendations.filter((item) => item.eligible);
  const counts = countRisks(state.volunteers);
  $("#reportProfile").textContent = `${profile.primary} + ${profile.secondary.join(" + ")} / ${profile.rank}位`;
  $("#reportScope").textContent = state.member ? `${eligible.length}个可报专业组，${state.recommendations.length - eligible.length}个不可报提醒` : "开通基础版后查看全部可报范围";
  $("#reportGradient").textContent = `冲 ${counts["冲"] || 0} · 稳 ${counts["稳"] || 0} · 保 ${counts["保"] || 0}`;
  $("#reportStatus").textContent = state.member ? "已解锁" : "部分锁定";
  $("#gradientChart").innerHTML = `
    <div class="rush"><strong>冲刺</strong><p>${counts["冲"] || 0} 个志愿</p></div>
    <div class="steady"><strong>稳妥</strong><p>${counts["稳"] || 0} 个志愿</p></div>
    <div class="safe"><strong>保底</strong><p>${counts["保"] || 0} 个志愿</p></div>
  `;
  renderReportAssessment();
}

function updateProfileSummary() {
  const profile = getProfile();
  $("#profileSummary").textContent = `河南 · ${profile.primary} + ${profile.secondary.join(" + ")} · ${profile.score}分 · ${profile.rank}位`;
  $("#memberBadge").textContent = state.member ? "高级会员" : "免费预览";
  $("#meterBar").style.width = state.member ? "92%" : "46%";
}

function addVolunteer(id) {
  const item = state.recommendations.find((program) => program.id === id);
  if (!item) return;
  if (state.volunteers.some((program) => program.id === id)) {
    showToast("该专业组已经在志愿表中");
    return;
  }
  if (!state.member && state.volunteers.length >= 3) {
    showToast("免费版最多添加3个志愿，开通会员可生成完整志愿表");
    return;
  }
  state.volunteers.push(item);
  renderVolunteers();
  showToast(`${item.school} ${item.group} 已加入志愿表`);
}

function moveVolunteer(from, to) {
  if (to < 0 || to >= state.volunteers.length) return;
  const [item] = state.volunteers.splice(from, 1);
  state.volunteers.splice(to, 0, item);
  renderVolunteers();
}

function removeVolunteer(index) {
  state.volunteers.splice(index, 1);
  renderVolunteers();
}

function exportCsv() {
  if (!state.member) {
    showToast("导出志愿表是进阶版权益，请先解锁");
    return;
  }
  const rows = [["顺序", "院校", "专业组", "城市", "梯度", "选科要求", "专业", "近三年位次"]];
  state.volunteers.forEach((item, index) => rows.push([`A${index + 1}`, item.school, item.group, item.city, item.risk, subjectText(item), item.majors.join("/"), item.ranks.join("/")]));
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "henan-312-volunteer-report.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function syncMobileFormFromMain() {
  const pairs = [
    ["primarySubject", "mobilePrimarySubject"],
    ["secondSubjectA", "mobileSecondSubjectA"],
    ["secondSubjectB", "mobileSecondSubjectB"],
    ["score", "mobileScore"],
    ["rank", "mobileRank"],
    ["batch", "mobileBatch"]
  ];
  pairs.forEach(([mainId, mobileId]) => {
    const main = $(`#${mainId}`);
    const mobile = $(`#${mobileId}`);
    if (main && mobile) mobile.value = main.value;
  });
}

function syncMainFormFromMobile() {
  const pairs = [
    ["mobilePrimarySubject", "primarySubject"],
    ["mobileSecondSubjectA", "secondSubjectA"],
    ["mobileSecondSubjectB", "secondSubjectB"],
    ["mobileScore", "score"],
    ["mobileRank", "rank"],
    ["mobileBatch", "batch"]
  ];
  pairs.forEach(([mobileId, mainId]) => {
    const mobile = $(`#${mobileId}`);
    const main = $(`#${mainId}`);
    if (main && mobile) main.value = mobile.value;
  });
}

function refreshAll() {
  updateProfileSummary();
  createRecommendations();
  syncVolunteers();
  renderRecommendations();
  renderSchools();
  renderMajors();
  renderVolunteers();
  renderMobileHomeSummary();
  if (state.assessment.result) state.assessment.result = calculateAssessment();
  renderAssessmentResult();
  syncMobileFormFromMain();
  $("#schoolCount").textContent = programs.length;
}

function initEvents() {
  $("#plannerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if ($("#secondSubjectA").value === $("#secondSubjectB").value) {
      showToast("两门再选科目不能相同，请重新选择");
      return;
    }
    refreshAll();
    showToast("已按河南3+1+2选科和位次重新生成方案");
    if (isMobileViewport()) openMobileTab("recommend");
  });

  $("#mobileQuickForm").addEventListener("submit", (event) => {
    event.preventDefault();
    syncMainFormFromMobile();
    if ($("#secondSubjectA").value === $("#secondSubjectB").value) {
      showToast("两门再选科目不能相同，请重新选择");
      return;
    }
    refreshAll();
    showToast("已生成智能推荐");
    openMobileTab("recommend");
  });

  ["primarySubject", "secondSubjectA", "secondSubjectB", "score", "rank", "batch", "majorPreference", "cityPreference"].forEach((id) => {
    $(`#${id}`).addEventListener("change", refreshAll);
  });

  document.querySelectorAll(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeFilter = button.dataset.filter;
      renderRecommendations();
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.detail) openSchoolDetail(target.dataset.detail, "recommend");
    if (target.dataset.schoolDetail) openSchoolDetail(target.dataset.schoolDetail, "schools");
    if (target.dataset.add) addVolunteer(target.dataset.add);
    if (target.dataset.schoolAdd) addVolunteer(target.dataset.schoolAdd);
    if (target.dataset.fav) showToast("已收藏，可在真实版本接入账号收藏夹");
    if (target.dataset.assessmentQuestion) {
      state.assessment.answers[target.dataset.assessmentQuestion] = Number(target.dataset.assessmentOption);
      renderAssessmentQuestions();
    }
    if (Object.prototype.hasOwnProperty.call(target.dataset, "up")) moveVolunteer(Number(target.dataset.up), Number(target.dataset.up) - 1);
    if (Object.prototype.hasOwnProperty.call(target.dataset, "down")) moveVolunteer(Number(target.dataset.down), Number(target.dataset.down) + 1);
    if (Object.prototype.hasOwnProperty.call(target.dataset, "remove")) removeVolunteer(Number(target.dataset.remove));
    if (target.dataset.plan) {
      if (target.dataset.plan !== "免费体验") state.member = true;
      updateProfileSummary();
      renderRecommendations();
      renderReport();
    showToast(`已模拟开通${target.dataset.plan}`);
    }
  });

  $("#upgradeBtn").addEventListener("click", () => {
    state.member = true;
    updateProfileSummary();
    renderRecommendations();
    renderReport();
    showToast("已模拟解锁进阶版");
  });
  $("#loginBtn").addEventListener("click", () => showToast("登录可接入手机号验证码和会员订单"));
  $("#mobileLoginBtn").addEventListener("click", () => showToast("登录可接入手机号验证码和会员订单"));
  $("#mobileUnlockBtn").addEventListener("click", () => {
    state.member = true;
    updateProfileSummary();
    renderRecommendations();
    renderReport();
    renderMobileHomeSummary();
    showToast("已模拟解锁进阶版");
  });
  $("#exportBtn").addEventListener("click", exportCsv);
  $("#reportBtn").addEventListener("click", () => {
    if (!state.member) {
      showToast("打印/导出完整报告是会员权益");
      return;
    }
    window.print();
  });
  $("#clearBtn").addEventListener("click", () => {
    state.volunteers = [];
    renderVolunteers();
    showToast("已清空志愿表");
  });
  $("#generateAssessmentBtn").addEventListener("click", () => {
    const result = calculateAssessment();
    if (!result) {
      showToast("请先完成全部10道测评题");
      renderAssessmentProgress();
      return;
    }
    state.assessment.result = result;
    renderAssessmentResult();
    renderRecommendations();
    renderReport();
    showToast("已生成AI性格与专业适配报告");
  });
  $("#resetAssessmentBtn").addEventListener("click", () => {
    state.assessment.answers = {};
    state.assessment.result = null;
    renderAssessmentQuestions();
    renderAssessmentResult();
    renderRecommendations();
    renderReport();
    showToast("已重置测评");
  });
  $("#schoolLevelFilter").addEventListener("change", renderSchools);
  $("#eligibilityFilter").addEventListener("change", renderSchools);
  $("#majorSearch").addEventListener("input", renderMajors);
  $("#openMajorDirectoryBtn").addEventListener("click", openMajorDirectory);
  $("#backToPlannerBtn").addEventListener("click", closeMajorDirectory);
  $("#majorDirectorySearch").addEventListener("input", renderMajorDirectory);
  $("#disciplineFilter").addEventListener("change", renderMajorDirectory);
  $("#mobileBackBtn").addEventListener("click", closeMobilePage);
  $("#backFromSchoolDetailBtn").addEventListener("click", closeSchoolDetail);
  $("#schoolDetailBackBtn").addEventListener("click", closeSchoolDetail);
  $("#schoolDetailAddBtn").addEventListener("click", () => {
    if (state.activeDetailId) addVolunteer(state.activeDetailId);
  });
  document.querySelectorAll("[data-mobile-tab-target]").forEach((button) => {
    button.addEventListener("click", () => openMobileTab(button.dataset.mobileTabTarget));
  });
  document.querySelectorAll("[data-mobile-open]").forEach((button) => {
    button.addEventListener("click", () => openMobilePage(button.dataset.mobileOpen, button.dataset.title));
  });
  document.querySelectorAll("[data-mobile-directory]").forEach((button) => {
    button.addEventListener("click", openMajorDirectory);
  });
  document.querySelectorAll(".nav a, .brand").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("directory-mode");
      if (isMobileViewport()) closeMobilePage();
    });
  });
}

function init() {
  createRecommendations();
  state.volunteers = state.recommendations.filter((item) => item.eligible).slice(0, 3);
  renderPricing();
  renderAssessmentQuestions();
  renderAssessmentResult();
  refreshAll();
  initEvents();
  openMobileTab(isMobileViewport() ? "home" : "home", false);
}

init();
