// Demo data entry. Replace this file first when adding real schools, majors, scores, websites, and images.
// Current data is sample-only. Paid production launch requires verified and legally usable data sources.

const batchRules = {
  "普通本科提前批": {
    category: "普通类",
    maxVolunteers: 64,
    unit: "专业+院校",
    inner: "1个专业+1所院校为1个志愿",
    adjustment: "不设专业调剂",
    strategy: "按专业和院校逐个排序，重点核对类别、体检、政审、面试等资格要求。",
    note: "军事、公安、公费师范等类别不可兼报；军队招飞另设志愿，限合格考生。",
    source: "以河南省教育考试院最终公告为准。"
  },
  "普通本科批": {
    category: "普通类",
    maxVolunteers: 48,
    unit: "院校专业组",
    inner: "每个院校专业组内最多填6个专业",
    adjustment: "可选择是否同意专业调剂",
    strategy: "先排院校专业组梯度，再在组内按专业意愿排序。",
    note: "含国家专项、高校专项、地方专项、预科班等限资格考生；高水平运动队单设专业组志愿，限资格考生。",
    source: "以河南省教育考试院最终公告为准。"
  },
  "普通高职（专科）提前批": {
    category: "普通类",
    maxVolunteers: 64,
    unit: "专业+院校",
    inner: "1个专业+1所院校为1个志愿",
    adjustment: "不设专业调剂",
    strategy: "按专业和院校逐个排序，定向军士、医学、航海等类别要先确认资格和限制。",
    note: "各类别不可兼报。",
    source: "以河南省教育考试院最终公告为准。"
  },
  "普通高职（专科）批": {
    category: "普通类",
    maxVolunteers: 48,
    unit: "院校专业组",
    inner: "每个院校专业组内最多填6个专业",
    adjustment: "可选择是否同意专业调剂",
    strategy: "按院校专业组做冲稳保梯度，组内专业顺序同样会影响录取结果。",
    note: "专科批也不能只看学校名，要核对专业组、学费、办学地点和就业路径。",
    source: "以河南省教育考试院最终公告为准。"
  },
  "艺术本科提前批": {
    category: "艺术类",
    maxVolunteers: 1,
    unit: "院校志愿",
    inner: "1个院校志愿内设4个专业志愿",
    adjustment: "可选择是否同意专业调剂",
    strategy: "先确认艺术类别、专业成绩和院校规则，再决定院校与专业顺序。",
    note: "该批次不是64个专业+院校，需单独提醒。",
    source: "以河南省教育考试院最终公告为准。"
  },
  "艺术本科批": {
    category: "艺术类",
    maxVolunteers: 64,
    unit: "专业+院校",
    inner: "1个专业+1所院校为1个志愿",
    adjustment: "不设专业调剂",
    strategy: "按专业方向、综合成绩规则和院校层次逐个排序。",
    note: "艺术类不同专业类别规则差异较大，需核对当年招生章程。",
    source: "以河南省教育考试院最终公告为准。"
  },
  "艺术高职（专科）批": {
    category: "艺术类",
    maxVolunteers: 64,
    unit: "专业+院校",
    inner: "1个专业+1所院校为1个志愿",
    adjustment: "不设专业调剂",
    strategy: "按专业方向、院校位置、学费和就业实训条件排序。",
    note: "艺术类不同专业类别规则差异较大，需核对当年招生章程。",
    source: "以河南省教育考试院最终公告为准。"
  },
  "体育本科批": {
    category: "体育类",
    maxVolunteers: 64,
    unit: "专业+院校",
    inner: "1个专业+1所院校为1个志愿",
    adjustment: "不设专业调剂",
    strategy: "按文化成绩、专业成绩、院校层次和专业方向逐个排序。",
    note: "体育类按对应批次和投档规则填报，需核对当年官方公告。",
    source: "以河南省教育考试院最终公告为准。"
  },
  "体育高职（专科）批": {
    category: "体育类",
    maxVolunteers: 64,
    unit: "专业+院校",
    inner: "1个专业+1所院校为1个志愿",
    adjustment: "不设专业调剂",
    strategy: "按文化成绩、专业成绩、院校位置和专业方向逐个排序。",
    note: "体育类按对应批次和投档规则填报，需核对当年官方公告。",
    source: "以河南省教育考试院最终公告为准。"
  }
};

const batchAliases = {
  "本科批": "普通本科批",
  "提前批": "普通本科提前批",
  "专科批": "普通高职（专科）批"
};

const programs = [
  {
    "id": "zzdx-cs",
    "school": "郑州大学",
    "group": "计算机类专业组",
    "city": "郑州",
    "province": "河南",
    "level": "211",
    "batch": "本科批",
    "website": "https://www.zzu.edu.cn/",
    "schoolCode": "10459",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "郑州大学 省内头部综合院校，计算机方向热度高，建议搭配稳妥和保底专业组。",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "majors": [
      "计算机科学与技术",
      "软件工程",
      "人工智能"
    ],
    "ranks": [
      21400,
      23600,
      25800
    ],
    "scores": [
      626,
      619,
      614
    ],
    "plan": 186,
    "planChange": "+8%",
    "tuition": "5700元/年",
    "heat": "高",
    "admissionSummary": "计算机类专业组 / 本科批 / 21400 / 23600 / 25800",
    "environment": "公开评价摘要：较多学生提到校园规模较大、学习氛围较浓，郑州主城区通勤和实习机会相对方便；也有评价提到不同校区生活体验差异较大。",
    "reviewHighlights": [
      "公开评价摘要：较多学生提到校园规模较大、学习氛围较浓，郑州主城区通勤和实习机会相对方便；也有评价提到不同校区生活体验差异较大。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "省内头部综合院校，计算机方向热度高，建议搭配稳妥和保底专业组。"
  },
  {
    "id": "zzdx-med",
    "school": "郑州大学",
    "group": "临床医学专业组",
    "city": "郑州",
    "province": "河南",
    "level": "211",
    "batch": "本科批",
    "website": "https://www.zzu.edu.cn/",
    "schoolCode": "10459",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "郑州大学 医学类培养周期长，通常要求物理、化学、生物组合，位次竞争更激烈。",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "majors": [
      "临床医学",
      "口腔医学",
      "麻醉学"
    ],
    "ranks": [
      14600,
      15800,
      17100
    ],
    "scores": [
      642,
      637,
      632
    ],
    "plan": 124,
    "planChange": "-3%",
    "tuition": "6300元/年",
    "heat": "极高",
    "admissionSummary": "临床医学专业组 / 本科批 / 14600 / 15800 / 17100",
    "environment": "公开评价摘要：较多评价关注医学培养资源和附属医院实践机会；也有评价提醒医学课程压力较大、学习周期较长。",
    "reviewHighlights": [
      "公开评价摘要：较多评价关注医学培养资源和附属医院实践机会；也有评价提醒医学课程压力较大、学习周期较长。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "医学类培养周期长，通常要求物理、化学、生物组合，位次竞争更激烈。"
  },
  {
    "id": "hndx-auto",
    "school": "河南大学",
    "group": "自动化与电子信息组",
    "city": "开封",
    "province": "河南",
    "level": "双一流",
    "batch": "本科批",
    "website": "https://www.henu.edu.cn/",
    "schoolCode": "10475",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "河南大学 工科方向计划较多，适合作为河南物理方向稳妥选择。",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "majors": [
      "电子信息科学与技术",
      "自动化",
      "通信工程"
    ],
    "ranks": [
      33600,
      36200,
      38800
    ],
    "scores": [
      603,
      596,
      590
    ],
    "plan": 210,
    "planChange": "+12%",
    "tuition": "5000元/年",
    "heat": "中高",
    "admissionSummary": "自动化与电子信息组 / 本科批 / 33600 / 36200 / 38800",
    "environment": "公开评价摘要：较多学生提到校园文化氛围较浓、生活成本相对可控；也有评价提到部分设施新旧差异明显。",
    "reviewHighlights": [
      "公开评价摘要：较多学生提到校园文化氛围较浓、生活成本相对可控；也有评价提到部分设施新旧差异明显。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "工科方向计划较多，适合作为河南物理方向稳妥选择。"
  },
  {
    "id": "hndx-law",
    "school": "河南大学",
    "group": "法学与新闻传播组",
    "city": "开封",
    "province": "河南",
    "level": "双一流",
    "batch": "本科批",
    "website": "https://www.henu.edu.cn/",
    "schoolCode": "10475",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "河南大学 适合历史方向考生，法学和汉语言文学报考热度较高。",
    "primary": "历史",
    "secondary": [
      "不限"
    ],
    "majors": [
      "法学",
      "新闻传播学类",
      "汉语言文学"
    ],
    "ranks": [
      8800,
      9600,
      10400
    ],
    "scores": [
      603,
      598,
      592
    ],
    "plan": 132,
    "planChange": "+4%",
    "tuition": "4400元/年",
    "heat": "高",
    "admissionSummary": "法学与新闻传播组 / 本科批 / 8800 / 9600 / 10400",
    "environment": "公开评价摘要：较多学生提到人文氛围较好、老校区历史感强；也有评价提到住宿条件因楼栋而异。",
    "reviewHighlights": [
      "公开评价摘要：较多学生提到人文氛围较好、老校区历史感强；也有评价提到住宿条件因楼栋而异。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "适合历史方向考生，法学和汉语言文学报考热度较高。"
  },
  {
    "id": "hnsd-teacher",
    "school": "河南师范大学",
    "group": "师范教育组",
    "city": "新乡",
    "province": "河南",
    "level": "省重点",
    "batch": "本科批",
    "website": "https://www.htu.edu.cn/",
    "schoolCode": "10476",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "河南师范大学 师范类稳定性较强，思想政治教育通常更偏好政治选科。",
    "primary": "历史",
    "secondary": [
      "思想政治"
    ],
    "majors": [
      "思想政治教育",
      "历史学",
      "教育学"
    ],
    "ranks": [
      14800,
      16300,
      17900
    ],
    "scores": [
      585,
      579,
      572
    ],
    "plan": 165,
    "planChange": "+6%",
    "tuition": "4400元/年",
    "heat": "中高",
    "admissionSummary": "师范教育组 / 本科批 / 14800 / 16300 / 17900",
    "environment": "公开评价摘要：较多评价提到师范氛围较明显、校园生活节奏稳定；也有评价关注城市资源与一线城市相比有限。",
    "reviewHighlights": [
      "公开评价摘要：较多评价提到师范氛围较明显、校园生活节奏稳定；也有评价关注城市资源与一线城市相比有限。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "师范类稳定性较强，思想政治教育通常更偏好政治选科。"
  },
  {
    "id": "hnsd-bio",
    "school": "河南师范大学",
    "group": "生命科学组",
    "city": "新乡",
    "province": "河南",
    "level": "省重点",
    "batch": "本科批",
    "website": "https://www.htu.edu.cn/",
    "schoolCode": "10476",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "河南师范大学 适合化学、生物组合考生，就业路径更依赖深造和教师资格。",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "majors": [
      "生物科学",
      "生物技术",
      "生态学"
    ],
    "ranks": [
      46200,
      49500,
      52800
    ],
    "scores": [
      574,
      567,
      561
    ],
    "plan": 148,
    "planChange": "+2%",
    "tuition": "5000元/年",
    "heat": "中",
    "admissionSummary": "生命科学组 / 本科批 / 46200 / 49500 / 52800",
    "environment": "公开评价摘要：较多学生提到学习氛围和师范传统较稳定；也有评价提醒实验课程安排较密集。",
    "reviewHighlights": [
      "公开评价摘要：较多学生提到学习氛围和师范传统较稳定；也有评价提醒实验课程安排较密集。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "适合化学、生物组合考生，就业路径更依赖深造和教师资格。"
  },
  {
    "id": "hngy-electric",
    "school": "河南工业大学",
    "group": "电气与智能制造组",
    "city": "郑州",
    "province": "河南",
    "level": "省重点",
    "batch": "本科批",
    "website": "https://www.haut.edu.cn/",
    "schoolCode": "10463",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "河南工业大学 招生计划较多，适合物理方向做稳妥或保底配置。",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "majors": [
      "电气工程及其自动化",
      "机械设计制造及其自动化",
      "机器人工程"
    ],
    "ranks": [
      52600,
      56200,
      60400
    ],
    "scores": [
      563,
      557,
      550
    ],
    "plan": 310,
    "planChange": "+15%",
    "tuition": "5500元/年",
    "heat": "中高",
    "admissionSummary": "电气与智能制造组 / 本科批 / 52600 / 56200 / 60400",
    "environment": "公开评价摘要：较多学生提到学校位置便利、工科实践氛围较强；也有评价提到热门专业课程压力较高。",
    "reviewHighlights": [
      "公开评价摘要：较多学生提到学校位置便利、工科实践氛围较强；也有评价提到热门专业课程压力较高。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "招生计划较多，适合物理方向做稳妥或保底配置。"
  },
  {
    "id": "hnyd-finance",
    "school": "河南财经政法大学",
    "group": "财经管理组",
    "city": "郑州",
    "province": "河南",
    "level": "省重点",
    "batch": "本科批",
    "website": "https://www.huel.edu.cn/",
    "schoolCode": "10484",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "河南财经政法大学 财经类专业冷热差异明显，需关注城市资源和实习机会。",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "majors": [
      "会计学",
      "金融学",
      "财务管理"
    ],
    "ranks": [
      38600,
      42100,
      45600
    ],
    "scores": [
      592,
      585,
      579
    ],
    "plan": 260,
    "planChange": "-5%",
    "tuition": "4400元/年",
    "heat": "高",
    "admissionSummary": "财经管理组 / 本科批 / 38600 / 42100 / 45600",
    "environment": "公开评价摘要：较多学生提到财经政法类氛围鲜明，郑州实习和就业信息较集中；也有评价提醒专业之间资源热度不同。",
    "reviewHighlights": [
      "公开评价摘要：较多学生提到财经政法类氛围鲜明，郑州实习和就业信息较集中；也有评价提醒专业之间资源热度不同。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "财经类专业冷热差异明显，需关注城市资源和实习机会。"
  },
  {
    "id": "lylg-material",
    "school": "洛阳理工学院",
    "group": "材料与机械组",
    "city": "洛阳",
    "province": "河南",
    "level": "普通本科",
    "batch": "本科批",
    "website": "https://www.lit.edu.cn/",
    "schoolCode": "11070",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "洛阳理工学院 适合作为保底选择，材料类需关注行业方向和转专业政策。",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "majors": [
      "材料成型及控制工程",
      "机械电子工程",
      "无机非金属材料工程"
    ],
    "ranks": [
      82000,
      88200,
      94600
    ],
    "scores": [
      532,
      523,
      516
    ],
    "plan": 420,
    "planChange": "+10%",
    "tuition": "5000元/年",
    "heat": "中",
    "admissionSummary": "材料与机械组 / 本科批 / 82000 / 88200 / 94600",
    "environment": "公开评价摘要：较多学生提到生活成本较友好、校园日常比较便利；也有评价提到部分宿舍和设施年代较久。",
    "reviewHighlights": [
      "公开评价摘要：较多学生提到生活成本较友好、校园日常比较便利；也有评价提到部分宿舍和设施年代较久。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "适合作为保底选择，材料类需关注行业方向和转专业政策。"
  },
  {
    "id": "bjut-ai",
    "school": "北京工业大学",
    "group": "人工智能实验组",
    "city": "北京",
    "province": "北京",
    "level": "211",
    "batch": "本科批",
    "website": "https://www.bjut.edu.cn/",
    "schoolCode": "10005",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "北京工业大学 省外211计划少、城市热度高，适合作为冲刺项。",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "majors": [
      "人工智能",
      "信息安全",
      "数据科学与大数据技术"
    ],
    "ranks": [
      19800,
      22400,
      24700
    ],
    "scores": [
      631,
      624,
      619
    ],
    "plan": 34,
    "planChange": "-8%",
    "tuition": "5000元/年",
    "heat": "极高",
    "admissionSummary": "人工智能实验组 / 本科批 / 19800 / 22400 / 24700",
    "environment": "公开评价摘要：较多评价提到北京区位和实习机会优势明显；也有评价提醒生活成本较高、热门专业竞争强。",
    "reviewHighlights": [
      "公开评价摘要：较多评价提到北京区位和实习机会优势明显；也有评价提醒生活成本较高、热门专业竞争强。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "省外211计划少、城市热度高，适合作为冲刺项。"
  },
  {
    "id": "shdx-econ",
    "school": "上海大学",
    "group": "经济与社会科学组",
    "city": "上海",
    "province": "上海",
    "level": "211",
    "batch": "本科批",
    "website": "https://www.shu.edu.cn/",
    "schoolCode": "10280",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "上海大学 城市溢价明显，历史或物理方向均可关注，但冲刺风险较高。",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "majors": [
      "经济学类",
      "社会学",
      "工商管理"
    ],
    "ranks": [
      12200,
      14100,
      16400
    ],
    "scores": [
      636,
      628,
      621
    ],
    "plan": 42,
    "planChange": "-2%",
    "tuition": "6500元/年",
    "heat": "极高",
    "admissionSummary": "经济与社会科学组 / 本科批 / 12200 / 14100 / 16400",
    "environment": "公开评价摘要：较多学生提到城市资源丰富、校园配套较完整；也有评价提醒上海生活成本和竞争压力较高。",
    "reviewHighlights": [
      "公开评价摘要：较多学生提到城市资源丰富、校园配套较完整；也有评价提醒上海生活成本和竞争压力较高。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "城市溢价明显，历史或物理方向均可关注，但冲刺风险较高。"
  },
  {
    "id": "scu-med",
    "school": "四川大学",
    "group": "口腔医学组",
    "city": "成都",
    "province": "四川",
    "level": "985",
    "batch": "本科批",
    "website": "https://www.scu.edu.cn/",
    "schoolCode": "10610",
    "photos": [
      "outputs/campus-placeholder-1.jpg",
      "outputs/campus-placeholder-2.jpg",
      "outputs/campus-placeholder-3.jpg"
    ],
    "schoolIntro": "四川大学 医学顶尖方向，计划少且位次要求高，不适合做稳妥项。",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "majors": [
      "口腔医学",
      "临床医学"
    ],
    "ranks": [
      6200,
      7600,
      9100
    ],
    "scores": [
      662,
      655,
      648
    ],
    "plan": 18,
    "planChange": "-6%",
    "tuition": "7250元/年",
    "heat": "极高",
    "admissionSummary": "口腔医学组 / 本科批 / 6200 / 7600 / 9100",
    "environment": "公开评价摘要：较多评价关注医学学科实力和城市生活便利度；也有评价提醒医学培养周期长、学习强度高。",
    "reviewHighlights": [
      "公开评价摘要：较多评价关注医学学科实力和城市生活便利度；也有评价提醒医学培养周期长、学习强度高。",
      "来源：公开网络评价整理 / 访问日期：2026-06-01"
    ],
    "source": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "officialNote": "来源：公开网络评价整理 / 访问日期：2026-06-01",
    "note": "医学顶尖方向，计划少且位次要求高，不适合做稳妥项。"
  }
];

const majorProfiles = [
  {
    "discipline": "哲学",
    "name": "哲学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "哲学",
      "逻辑学",
      "宗教学",
      "伦理学"
    ],
    "direction": "理论研究、教育、公务员、文化出版",
    "risk": "就业路径偏长期积累，建议关注院校层次、读研规划和表达能力。"
  },
  {
    "discipline": "经济学",
    "name": "经济学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "经济学",
      "经济统计学",
      "国民经济管理"
    ],
    "direction": "经济研究、数据分析、金融机构、政府部门",
    "risk": "数学和数据能力影响较大，城市资源和院校平台很重要。"
  },
  {
    "discipline": "经济学",
    "name": "财政学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "财政学",
      "税收学",
      "国际税收"
    ],
    "direction": "财政税务、审计、公共部门、企业税务",
    "risk": "适合稳健型家庭，需关注考公、证书和地区岗位数量。"
  },
  {
    "discipline": "经济学",
    "name": "金融学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "金融学",
      "金融工程",
      "保险学",
      "投资学",
      "金融科技"
    ],
    "direction": "银行、证券、保险、风控、量化和金融科技",
    "risk": "就业分化明显，一线城市和实习资源影响很大。"
  },
  {
    "discipline": "经济学",
    "name": "经济与贸易类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "国际经济与贸易",
      "贸易经济"
    ],
    "direction": "外贸、跨境电商、供应链、企业商务",
    "risk": "受城市、外语能力和产业环境影响较大。"
  },
  {
    "discipline": "法学",
    "name": "法学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "法学",
      "知识产权",
      "信用风险管理与法律防控"
    ],
    "direction": "公务员、律所、企业法务、合规",
    "risk": "法考、院校层次和实习资源影响很大，不宜只看专业热度。"
  },
  {
    "discipline": "法学",
    "name": "政治学类",
    "primary": "历史",
    "secondary": [
      "思想政治"
    ],
    "examples": [
      "政治学与行政学",
      "国际政治",
      "外交学"
    ],
    "direction": "公共管理、政策研究、外事、考公",
    "risk": "更适合政治选科和表达能力较强的学生。"
  },
  {
    "discipline": "法学",
    "name": "社会学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "社会学",
      "社会工作",
      "人类学"
    ],
    "direction": "社会服务、公益组织、调研咨询、公共治理",
    "risk": "就业岗位较分散，建议关注实践项目和城市机会。"
  },
  {
    "discipline": "法学",
    "name": "民族学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "民族学"
    ],
    "direction": "民族事务、文化研究、公共部门",
    "risk": "开设院校少，就业方向较专门。"
  },
  {
    "discipline": "法学",
    "name": "马克思主义理论类",
    "primary": "历史",
    "secondary": [
      "思想政治"
    ],
    "examples": [
      "科学社会主义",
      "思想政治教育",
      "马克思主义理论"
    ],
    "direction": "中学政治教师、教研、党政机关、理论研究",
    "risk": "更适合政治选科考生，需关注教师资格和编制竞争。"
  },
  {
    "discipline": "法学",
    "name": "公安学类",
    "primary": "历史",
    "secondary": [
      "思想政治"
    ],
    "examples": [
      "治安学",
      "侦查学",
      "公安管理学",
      "涉外警务"
    ],
    "direction": "公安、政法、公共安全管理",
    "risk": "常伴随体检、政审、体测等特殊要求，需单独核对招生章程。"
  },
  {
    "discipline": "教育学",
    "name": "教育学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "教育学",
      "学前教育",
      "小学教育",
      "特殊教育"
    ],
    "direction": "教师、教研、教育产品、培训管理",
    "risk": "地区编制和教师资格要求影响较大。"
  },
  {
    "discipline": "教育学",
    "name": "体育学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "体育教育",
      "运动训练",
      "社会体育指导与管理"
    ],
    "direction": "体育教师、训练、赛事运营、健康管理",
    "risk": "常有体测或专项要求，需关注身体条件和招生类型。"
  },
  {
    "discipline": "文学",
    "name": "中国语言文学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "汉语言文学",
      "汉语言",
      "秘书学",
      "古典文献学"
    ],
    "direction": "教师、公务员、编辑、文案、出版",
    "risk": "就业面广但竞争也广，写作能力和证书很关键。"
  },
  {
    "discipline": "文学",
    "name": "外国语言文学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "英语",
      "日语",
      "翻译",
      "商务英语",
      "俄语"
    ],
    "direction": "翻译、外贸、教育、跨境业务、国际传播",
    "risk": "单一语言优势下降，建议叠加行业能力。"
  },
  {
    "discipline": "文学",
    "name": "新闻传播学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "新闻学",
      "广播电视学",
      "广告学",
      "网络与新媒体"
    ],
    "direction": "媒体、内容运营、品牌传播、新媒体",
    "risk": "行业变化快，作品集和实习经验影响较大。"
  },
  {
    "discipline": "历史学",
    "name": "历史学类",
    "primary": "历史",
    "secondary": [
      "不限"
    ],
    "examples": [
      "历史学",
      "世界史",
      "考古学",
      "文物与博物馆学"
    ],
    "direction": "教师、博物馆、文旅、研究、出版",
    "risk": "读研和教师资格常影响职业选择。"
  },
  {
    "discipline": "理学",
    "name": "数学类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "数学与应用数学",
      "信息与计算科学",
      "数据计算及应用"
    ],
    "direction": "教师、算法、数据分析、金融量化",
    "risk": "基础课难度高，适合逻辑和数学能力强的学生。"
  },
  {
    "discipline": "理学",
    "name": "物理学类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "物理学",
      "应用物理学",
      "核物理"
    ],
    "direction": "科研、教师、半导体、光电和工程技术",
    "risk": "深造依赖度较高，本科就业更看复合技能。"
  },
  {
    "discipline": "理学",
    "name": "化学类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "化学",
      "应用化学",
      "化学生物学"
    ],
    "direction": "化工、材料、检测、医药研发、教师",
    "risk": "实验课程多，需关注化学选科和行业环境。"
  },
  {
    "discipline": "理学",
    "name": "天文学类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "天文学"
    ],
    "direction": "科研、科普、数据处理、空间科学",
    "risk": "开设院校少，深造需求强。"
  },
  {
    "discipline": "理学",
    "name": "地理科学类",
    "primary": "不限",
    "secondary": [
      "地理"
    ],
    "examples": [
      "地理科学",
      "自然地理与资源环境",
      "人文地理与城乡规划",
      "地理信息科学"
    ],
    "direction": "教师、规划、GIS、自然资源、测绘",
    "risk": "地理信息方向更偏技术，需关注数学和软件能力。"
  },
  {
    "discipline": "理学",
    "name": "大气科学类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "大气科学",
      "应用气象学"
    ],
    "direction": "气象、环保、航空、农业气象、科研",
    "risk": "岗位专业性强，院校资源影响较大。"
  },
  {
    "discipline": "理学",
    "name": "海洋科学类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "海洋科学",
      "海洋技术",
      "海洋资源与环境"
    ],
    "direction": "海洋调查、环保、资源开发、科研",
    "risk": "地域和行业集中度较高。"
  },
  {
    "discipline": "理学",
    "name": "地球物理学类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "地球物理学",
      "空间科学与技术"
    ],
    "direction": "地震、资源勘探、空间环境、科研",
    "risk": "专业性强，需关注就业地区和深造。"
  },
  {
    "discipline": "理学",
    "name": "地质学类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "地质学",
      "地球化学",
      "古生物学"
    ],
    "direction": "资源勘查、地质调查、科研、自然博物馆",
    "risk": "行业周期和野外工作属性需要提前了解。"
  },
  {
    "discipline": "理学",
    "name": "生物科学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "生物科学",
      "生物技术",
      "生态学"
    ],
    "direction": "教师、科研、生物医药、检测",
    "risk": "深造依赖度较高，不建议只看名称报考。"
  },
  {
    "discipline": "理学",
    "name": "心理学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "心理学",
      "应用心理学"
    ],
    "direction": "教育、咨询、人力资源、用户研究",
    "risk": "临床咨询路径需要长期训练和资质积累。"
  },
  {
    "discipline": "理学",
    "name": "统计学类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "统计学",
      "应用统计学"
    ],
    "direction": "数据分析、金融风控、互联网、政府统计",
    "risk": "数学和编程能力很重要，适合数据敏感型学生。"
  },
  {
    "discipline": "工学",
    "name": "力学类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "理论与应用力学",
      "工程力学"
    ],
    "direction": "航空航天、土木、机械、仿真分析",
    "risk": "基础理论强，常与读研和工程方向绑定。"
  },
  {
    "discipline": "工学",
    "name": "机械类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "机械工程",
      "机械设计制造及其自动化",
      "车辆工程",
      "智能制造工程"
    ],
    "direction": "制造业、汽车、装备、机器人、工艺工程",
    "risk": "就业稳定但课程硬，需关注院校产业资源。"
  },
  {
    "discipline": "工学",
    "name": "仪器类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "测控技术与仪器",
      "智能感知工程"
    ],
    "direction": "检测、传感器、自动化、精密仪器",
    "risk": "专业名称不热但应用面广，需看学校实验平台。"
  },
  {
    "discipline": "工学",
    "name": "材料类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "材料科学与工程",
      "高分子材料与工程",
      "新能源材料与器件"
    ],
    "direction": "新能源、半导体、化工材料、检测",
    "risk": "常见化学要求，部分方向深造更有优势。"
  },
  {
    "discipline": "工学",
    "name": "能源动力类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "能源与动力工程",
      "新能源科学与工程",
      "储能科学与工程"
    ],
    "direction": "电力、能源、汽车热管理、新能源设备",
    "risk": "行业方向差异大，需区分传统能源和新能源。"
  },
  {
    "discipline": "工学",
    "name": "电气类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "电气工程及其自动化",
      "智能电网信息工程",
      "电机电器智能化"
    ],
    "direction": "电网、电力设备、新能源、自动化设备",
    "risk": "就业稳定性强，但工科基础要求较高。"
  },
  {
    "discipline": "工学",
    "name": "电子信息类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "电子信息工程",
      "通信工程",
      "电子科学与技术",
      "集成电路设计与集成系统"
    ],
    "direction": "通信、芯片、硬件、信号处理、嵌入式",
    "risk": "热门度高，数学、物理和编程能力都重要。"
  },
  {
    "discipline": "工学",
    "name": "自动化类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "自动化",
      "机器人工程",
      "智能装备与系统"
    ],
    "direction": "控制系统、工业自动化、机器人、智能制造",
    "risk": "跨机械、电气、计算机，课程综合难度较高。"
  },
  {
    "discipline": "工学",
    "name": "计算机类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "计算机科学与技术",
      "软件工程",
      "网络工程",
      "人工智能",
      "数据科学与大数据技术"
    ],
    "direction": "软件开发、人工智能、数据平台、网络安全",
    "risk": "热门专业分数抬升明显，建议搭配同类替代专业。"
  },
  {
    "discipline": "工学",
    "name": "土木类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "土木工程",
      "建筑环境与能源应用工程",
      "城市地下空间工程"
    ],
    "direction": "建筑工程、结构设计、市政、工程管理",
    "risk": "行业周期明显，需关注城市建设和转型方向。"
  },
  {
    "discipline": "工学",
    "name": "水利类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "水利水电工程",
      "水文与水资源工程",
      "港口航道与海岸工程"
    ],
    "direction": "水利工程、规划设计、防灾、水资源管理",
    "risk": "岗位专业性强，地域和单位性质影响大。"
  },
  {
    "discipline": "工学",
    "name": "测绘类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "测绘工程",
      "遥感科学与技术",
      "导航工程"
    ],
    "direction": "测绘、遥感、导航、地理信息",
    "risk": "外业和技术岗位并存，需了解工作环境。"
  },
  {
    "discipline": "工学",
    "name": "化工与制药类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "化学工程与工艺",
      "制药工程",
      "能源化学工程"
    ],
    "direction": "化工、医药、材料、生产工艺、研发",
    "risk": "常见化学要求，需关注行业安全和地区产业。"
  },
  {
    "discipline": "工学",
    "name": "地质类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "地质工程",
      "勘查技术与工程",
      "资源勘查工程"
    ],
    "direction": "资源勘查、工程地质、地灾防治",
    "risk": "野外工作可能较多，行业周期性需了解。"
  },
  {
    "discipline": "工学",
    "name": "矿业类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "采矿工程",
      "石油工程",
      "矿物加工工程"
    ],
    "direction": "矿业、石油、能源资源、工程管理",
    "risk": "工作地点和行业周期影响较大，需谨慎匹配家庭预期。"
  },
  {
    "discipline": "工学",
    "name": "纺织类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "纺织工程",
      "服装设计与工程",
      "非织造材料与工程"
    ],
    "direction": "纺织材料、服装工程、供应链、质检",
    "risk": "传统产业与新材料方向差异大。"
  },
  {
    "discipline": "工学",
    "name": "轻工类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "轻化工程",
      "包装工程",
      "印刷工程"
    ],
    "direction": "包装、印刷、日化、材料工艺",
    "risk": "行业较细分，需关注院校所在地产业。"
  },
  {
    "discipline": "工学",
    "name": "交通运输类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "交通运输",
      "交通工程",
      "航海技术",
      "飞行技术"
    ],
    "direction": "轨道、物流、交通规划、航运航空",
    "risk": "部分专业有身体条件、行业资格或就业地点要求。"
  },
  {
    "discipline": "工学",
    "name": "海洋工程类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "船舶与海洋工程",
      "海洋工程与技术"
    ],
    "direction": "船舶、海工装备、港口、海洋能源",
    "risk": "地域集中度高，沿海院校资源更关键。"
  },
  {
    "discipline": "工学",
    "name": "航空航天类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "航空航天工程",
      "飞行器设计与工程",
      "飞行器动力工程"
    ],
    "direction": "航空航天、国防科技、飞行器研发",
    "risk": "课程难度高，院校平台和深造机会影响大。"
  },
  {
    "discipline": "工学",
    "name": "兵器类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "武器系统与工程",
      "弹药工程与爆炸技术"
    ],
    "direction": "国防工业、装备研发、安全测试",
    "risk": "专业性强，单位性质和地域限制需了解。"
  },
  {
    "discipline": "工学",
    "name": "核工程类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "核工程与核技术",
      "辐射防护与核安全"
    ],
    "direction": "核电、核安全、能源、检测",
    "risk": "行业门槛高，需关注安全要求和就业区域。"
  },
  {
    "discipline": "工学",
    "name": "农业工程类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "农业工程",
      "农业机械化及其自动化",
      "农业智能装备工程"
    ],
    "direction": "农业装备、智慧农业、机械自动化",
    "risk": "专业交叉明显，需关注现代农业产业机会。"
  },
  {
    "discipline": "工学",
    "name": "林业工程类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "森林工程",
      "木材科学与工程",
      "林产化工"
    ],
    "direction": "林产加工、材料、生态工程",
    "risk": "行业较细分，适合明确接受林业相关方向的学生。"
  },
  {
    "discipline": "工学",
    "name": "环境科学与工程类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "环境工程",
      "环境科学",
      "环境生态工程"
    ],
    "direction": "环保、监测、治理工程、环评",
    "risk": "岗位稳定但薪资差异大，需关注城市和行业资源。"
  },
  {
    "discipline": "工学",
    "name": "生物医学工程类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "生物医学工程",
      "假肢矫形工程",
      "临床工程技术"
    ],
    "direction": "医疗器械、医学影像、医院设备、研发",
    "risk": "医学和工程交叉，课程综合性较强。"
  },
  {
    "discipline": "工学",
    "name": "食品科学与工程类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "食品科学与工程",
      "食品质量与安全",
      "粮食工程"
    ],
    "direction": "食品研发、质检、营养、粮油加工",
    "risk": "常见化学/生物要求，需关注产业区域和岗位类型。"
  },
  {
    "discipline": "工学",
    "name": "建筑类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "建筑学",
      "城乡规划",
      "风景园林"
    ],
    "direction": "建筑设计、规划、景观、城市更新",
    "risk": "部分专业学制较长，作品能力和行业周期影响大。"
  },
  {
    "discipline": "工学",
    "name": "安全科学与工程类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "安全工程",
      "应急技术与管理",
      "职业卫生工程"
    ],
    "direction": "安全生产、应急管理、工程风险控制",
    "risk": "岗位专业性强，行业和单位性质差异大。"
  },
  {
    "discipline": "工学",
    "name": "生物工程类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "生物工程",
      "生物制药",
      "合成生物学"
    ],
    "direction": "生物制药、发酵工程、研发检测",
    "risk": "深造和实验能力影响较大，需谨慎评估就业预期。"
  },
  {
    "discipline": "工学",
    "name": "公安技术类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "刑事科学技术",
      "消防工程",
      "网络安全与执法"
    ],
    "direction": "公安技术、消防、安全执法、取证",
    "risk": "常有体检、政审、体测等要求，必须核对招生章程。"
  },
  {
    "discipline": "工学",
    "name": "交叉工程类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "智能交互设计",
      "工程软件",
      "智能建造与智慧交通"
    ],
    "direction": "工程软件、智能系统、跨学科设计",
    "risk": "新专业变化快，需重点看学校培养方案和就业出口。"
  },
  {
    "discipline": "农学",
    "name": "植物生产类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "农学",
      "园艺",
      "植物保护",
      "种子科学与工程"
    ],
    "direction": "农业技术、育种、植保、现代农业",
    "risk": "行业发展稳定但地域属性明显。"
  },
  {
    "discipline": "农学",
    "name": "自然保护与环境生态类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "农业资源与环境",
      "野生动物与自然保护区管理",
      "水土保持与荒漠化防治"
    ],
    "direction": "生态保护、自然资源、环保、农业环境",
    "risk": "岗位专业性强，适合接受生态和基层工作属性的学生。"
  },
  {
    "discipline": "农学",
    "name": "动物生产类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "动物科学",
      "蚕学",
      "蜂学"
    ],
    "direction": "畜牧、养殖、饲料、动物营养",
    "risk": "行业属性明显，需提前了解工作环境。"
  },
  {
    "discipline": "农学",
    "name": "动物医学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "动物医学",
      "动物药学",
      "动植物检疫"
    ],
    "direction": "兽医、检疫、宠物医疗、畜牧防疫",
    "risk": "学习周期和实践要求较高，需关注执业路径。"
  },
  {
    "discipline": "农学",
    "name": "林学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "林学",
      "园林",
      "森林保护"
    ],
    "direction": "林业、园林、生态修复、自然保护",
    "risk": "就业地域和单位性质影响较大。"
  },
  {
    "discipline": "农学",
    "name": "水产类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "水产养殖学",
      "海洋渔业科学与技术",
      "水族科学与技术"
    ],
    "direction": "水产养殖、渔业资源、海洋牧场",
    "risk": "沿海和水产资源地区机会更多。"
  },
  {
    "discipline": "农学",
    "name": "草学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "草业科学"
    ],
    "direction": "草地生态、畜牧、生态修复",
    "risk": "开设院校和岗位相对少，需明确兴趣。"
  },
  {
    "discipline": "医学",
    "name": "基础医学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "基础医学",
      "生物医学",
      "生物医学科学"
    ],
    "direction": "医学科研、实验平台、基础医学教育",
    "risk": "偏科研和深造，和临床医生路径不同。"
  },
  {
    "discipline": "医学",
    "name": "临床医学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "临床医学",
      "麻醉学",
      "医学影像学",
      "精神医学"
    ],
    "direction": "临床医生、医学科研、公共卫生",
    "risk": "培养周期长，通常要求化学和生物，身体条件也需核对。"
  },
  {
    "discipline": "医学",
    "name": "口腔医学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "口腔医学"
    ],
    "direction": "口腔医生、专科医院、科研",
    "risk": "热度极高，招生计划少，冲刺风险需要单独提示。"
  },
  {
    "discipline": "医学",
    "name": "公共卫生与预防医学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "预防医学",
      "食品卫生与营养学",
      "全球健康学"
    ],
    "direction": "疾控、公卫、营养、健康管理",
    "risk": "岗位稳定但发展路径和临床医学不同。"
  },
  {
    "discipline": "医学",
    "name": "中医学类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "中医学",
      "针灸推拿学",
      "中医康复学"
    ],
    "direction": "中医临床、康复、养生健康、医院",
    "risk": "不同院校选科要求差异较大，需核对专业组要求。"
  },
  {
    "discipline": "医学",
    "name": "中西医结合类",
    "primary": "物理",
    "secondary": [
      "化学",
      "生物"
    ],
    "examples": [
      "中西医临床医学"
    ],
    "direction": "中西医临床、医院、康复",
    "risk": "培养周期长，执业路径和院校平台要重点看。"
  },
  {
    "discipline": "医学",
    "name": "药学类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "药学",
      "药物制剂",
      "临床药学"
    ],
    "direction": "药企、医院药房、研发、质检",
    "risk": "化学基础要求高，研发岗常看学历。"
  },
  {
    "discipline": "医学",
    "name": "中药学类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "中药学",
      "中药资源与开发",
      "中药制药"
    ],
    "direction": "中药研发、生产、质检、药企",
    "risk": "产业方向较专门，需关注地区资源。"
  },
  {
    "discipline": "医学",
    "name": "法医学类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "法医学"
    ],
    "direction": "司法鉴定、公安司法、医学检验",
    "risk": "专业特殊，需关注身体条件、心理适应和单位要求。"
  },
  {
    "discipline": "医学",
    "name": "医学技术类",
    "primary": "物理",
    "secondary": [
      "化学"
    ],
    "examples": [
      "医学检验技术",
      "医学影像技术",
      "康复治疗学",
      "眼视光学"
    ],
    "direction": "医院技术岗、检验、影像、康复",
    "risk": "和临床医生不同，需区分执业资格和岗位性质。"
  },
  {
    "discipline": "医学",
    "name": "护理学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "护理学",
      "助产学"
    ],
    "direction": "护理、医院、社区健康、养老护理",
    "risk": "工作强度和班次需要提前了解，部分院校有身体要求。"
  },
  {
    "discipline": "管理学",
    "name": "管理科学与工程类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "管理科学",
      "信息管理与信息系统",
      "工程管理",
      "大数据管理与应用"
    ],
    "direction": "数据管理、项目管理、信息系统、工程管理",
    "risk": "偏技术管理，数学和信息系统能力影响大。"
  },
  {
    "discipline": "管理学",
    "name": "工商管理类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "工商管理",
      "市场营销",
      "会计学",
      "财务管理",
      "人力资源管理"
    ],
    "direction": "企业管理、财务、审计、营销、人力资源",
    "risk": "就业面广但同质化明显，证书和实习很重要。"
  },
  {
    "discipline": "管理学",
    "name": "农业经济管理类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "农林经济管理",
      "农村区域发展"
    ],
    "direction": "农业产业、乡村振兴、项目管理、公共部门",
    "risk": "专业方向较细，适合关注农业产业和政策的学生。"
  },
  {
    "discipline": "管理学",
    "name": "公共管理类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "行政管理",
      "公共事业管理",
      "劳动与社会保障",
      "城市管理"
    ],
    "direction": "公共部门、事业单位、社会保障、城市治理",
    "risk": "考公和公共部门岗位影响较大。"
  },
  {
    "discipline": "管理学",
    "name": "图书情报与档案管理类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "图书馆学",
      "档案学",
      "信息资源管理"
    ],
    "direction": "档案、图书馆、信息管理、数据治理",
    "risk": "岗位较专门，适合细致稳定型学生。"
  },
  {
    "discipline": "管理学",
    "name": "物流管理与工程类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "物流管理",
      "物流工程",
      "供应链管理"
    ],
    "direction": "供应链、仓储、运输、电商物流",
    "risk": "行业实践性强，城市和产业资源影响大。"
  },
  {
    "discipline": "管理学",
    "name": "工业工程类",
    "primary": "物理",
    "secondary": [
      "不限"
    ],
    "examples": [
      "工业工程",
      "质量管理工程"
    ],
    "direction": "生产优化、质量管理、流程改善、智能制造",
    "risk": "偏工程管理，适合逻辑和现场改善能力强的学生。"
  },
  {
    "discipline": "管理学",
    "name": "电子商务类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "电子商务",
      "电子商务及法律",
      "跨境电子商务"
    ],
    "direction": "电商运营、平台业务、跨境贸易、数据运营",
    "risk": "行业变化快，实习和项目经验很重要。"
  },
  {
    "discipline": "管理学",
    "name": "旅游管理类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "旅游管理",
      "酒店管理",
      "会展经济与管理"
    ],
    "direction": "文旅、酒店、会展、目的地运营",
    "risk": "受行业周期和城市资源影响较大。"
  },
  {
    "discipline": "艺术学",
    "name": "艺术学理论类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "艺术史论",
      "艺术管理"
    ],
    "direction": "艺术研究、策展、艺术管理、文化产业",
    "risk": "通常需艺术兴趣和长期积累，岗位较细分。"
  },
  {
    "discipline": "艺术学",
    "name": "音乐与舞蹈学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "音乐表演",
      "音乐学",
      "舞蹈学",
      "舞蹈编导"
    ],
    "direction": "表演、教学、文艺团体、艺术培训",
    "risk": "多需艺考和专业训练，普通类考生需区分招生方式。"
  },
  {
    "discipline": "艺术学",
    "name": "戏剧与影视学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "表演",
      "戏剧影视文学",
      "广播电视编导",
      "动画"
    ],
    "direction": "影视制作、编导、表演、动画、新媒体",
    "risk": "作品能力和行业资源影响大，多数方向需关注招生类型。"
  },
  {
    "discipline": "艺术学",
    "name": "美术学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "美术学",
      "绘画",
      "雕塑",
      "摄影"
    ],
    "direction": "美术教育、创作、展陈、视觉内容",
    "risk": "多需艺考或作品基础，就业受作品集影响明显。"
  },
  {
    "discipline": "艺术学",
    "name": "设计学类",
    "primary": "不限",
    "secondary": [
      "不限"
    ],
    "examples": [
      "视觉传达设计",
      "环境设计",
      "产品设计",
      "数字媒体艺术"
    ],
    "direction": "品牌设计、交互、空间、产品、数字内容",
    "risk": "作品集、软件能力和审美积累很重要。"
  }
];

const programDeepInfoTemplates = {
  computer: {
    employmentOutlook: "软件开发、人工智能、数据平台、信息安全、互联网和企业数字化岗位，实习项目和城市资源影响较大。",
    postgraduatePath: "读研可走计算机、软件工程、人工智能、网络安全等方向；本科就业也可行，但项目能力很关键。",
    fitProfile: "适合数学逻辑较好、愿意长期写代码、能接受持续自学和项目迭代的学生。",
    studyPlan: "大一打好高数、线代和编程基础，大二开始做项目、刷算法、参加竞赛或实习，大三明确就业或考研路线。",
    difficulty: "较高",
    difficultyReason: "课程更新快，数学、编程和项目实践都要跟上。",
    transferDifficulty: "偏难",
    transferPolicy: "计算机和人工智能方向通常热度高，转入名额有限，往往看绩点、基础课成绩和学院名额。",
    campusPath: "建议关注实验班、创新创业项目、算法竞赛、校企实习和保研/考研通道。"
  },
  medicine: {
    employmentOutlook: "医院、基层医疗、医学科研、公共卫生和医药相关岗位，职业稳定性强但培养周期长。",
    postgraduatePath: "临床和口腔方向通常与考研、规培、专培强相关，升学和执业路径需要提前规划。",
    fitProfile: "适合自律强、抗压能力好、能接受长期学习和临床训练的学生。",
    studyPlan: "重视基础医学、临床课程和实践轮转，尽早了解考研、规培、执业资格和医院招聘要求。",
    difficulty: "很高",
    difficultyReason: "学习周期长、课程密集，职业路径对学历和资格要求高。",
    transferDifficulty: "偏难",
    transferPolicy: "医学类专业通常转入限制更严格，常受专业容量、选科、体检和培养体系约束。",
    campusPath: "建议重点看附属医院资源、临床实践机会、考研去向和规培基地。"
  },
  engineering: {
    employmentOutlook: "电网、制造业、自动化设备、机器人、通信、工程技术和智能制造岗位。",
    postgraduatePath: "读研可走电气、控制、通信、机械、电子信息等方向；部分岗位本科就业也较稳定。",
    fitProfile: "适合物理和数学基础较好、喜欢动手实践、能接受实验和工程项目的学生。",
    studyPlan: "重点学好电路、控制、信号、机械基础和编程，争取实验项目、竞赛和企业实习。",
    difficulty: "较高",
    difficultyReason: "工科基础课多，理论和实践都不能偏废。",
    transferDifficulty: "中等",
    transferPolicy: "工科内部转专业相对有路径，但热门方向仍看绩点、名额和先修课程。",
    campusPath: "建议关注实验室、工程训练中心、校企合作、电赛/机器人大赛和实习基地。"
  },
  teacher: {
    employmentOutlook: "中小学教师、教研、教育管理、培训产品和公共部门岗位，地区编制影响较大。",
    postgraduatePath: "可走教育学、学科教学、心理学、课程与教学论等方向，考编和教师资格需要同步准备。",
    fitProfile: "适合表达清楚、有耐心、愿意长期面对学生和课堂管理的学生。",
    studyPlan: "尽早准备普通话、教师资格、试讲和教育实习，关注目标地区教师招聘要求。",
    difficulty: "中等",
    difficultyReason: "专业课难度适中，但资格证、实习和编制竞争需要长期准备。",
    transferDifficulty: "中等",
    transferPolicy: "师范类转入转出通常要看学院名额和培养要求，公费师范等特殊类型需单独核对。",
    campusPath: "建议关注师范认证、教育实习基地、教师资格通过率和本地教师招聘资源。"
  },
  law: {
    employmentOutlook: "公务员、律所、企业法务、合规、媒体传播和公共管理岗位，院校层次和实习影响大。",
    postgraduatePath: "法学可考虑法硕、学硕、法律职业资格考试；新闻传播和中文方向可走考公、教师或新媒体。",
    fitProfile: "适合阅读量大、表达能力强、逻辑清楚、愿意背诵和写作的学生。",
    studyPlan: "法学重视法考和案例训练，新闻中文重视写作作品、实习和公共表达。",
    difficulty: "中等",
    difficultyReason: "入门不算难，但高质量就业依赖证书、写作、实习和长期积累。",
    transferDifficulty: "中等",
    transferPolicy: "人文社科类转专业通常比热门工科宽松一些，但法学等热门方向仍看绩点和名额。",
    campusPath: "建议关注模拟法庭、法考辅导、媒体实习、社团写作和考公资源。"
  },
  finance: {
    employmentOutlook: "银行、证券、会计、审计、企业财务、税务、风控和数据分析岗位。",
    postgraduatePath: "可走金融、会计、审计、应用经济、管理类研究生，也可准备 CPA、ACCA、初级会计等证书。",
    fitProfile: "适合数字敏感、沟通能力较好、愿意考证和实习的学生。",
    studyPlan: "大一大二打好数学、统计和会计基础，大二后准备证书、数据工具和金融财会实习。",
    difficulty: "中等",
    difficultyReason: "课程难度中等，但就业竞争和证书压力明显。",
    transferDifficulty: "中等",
    transferPolicy: "财经管理类转入通常看绩点和名额，会计、金融等热门专业竞争更强。",
    campusPath: "建议关注实习渠道、校友资源、财经竞赛、证书支持和郑州本地金融财税岗位。"
  },
  material: {
    employmentOutlook: "制造业、材料加工、机械电子、检测、工艺工程和新能源相关岗位。",
    postgraduatePath: "材料、机械、控制、化工、新能源等方向读研可提升岗位选择空间。",
    fitProfile: "适合愿意接触实验、工厂工艺和工程现场，不排斥传统制造行业的学生。",
    studyPlan: "重视工程制图、材料基础、机械电子、实验技能和企业实习，提前了解行业方向。",
    difficulty: "中等",
    difficultyReason: "理论不算最难，但专业方向和行业选择需要提前判断。",
    transferDifficulty: "中等",
    transferPolicy: "普通工科转专业一般有机会，但转向计算机、电气等热门方向会更难。",
    campusPath: "建议关注工程训练、企业实习、专升本/考研路径和校内转专业窗口。"
  },
  biology: {
    employmentOutlook: "生物教育、检测、医药研发辅助、生态环保、科研助理和公共机构岗位。",
    postgraduatePath: "升学依赖度较高，可走生物学、生态学、学科教学、生物技术、药学相关方向。",
    fitProfile: "适合喜欢实验、记忆和理解并重、愿意读研或考教师资格的学生。",
    studyPlan: "重视实验课、科研训练、教师资格或考研规划，尽早判断走教育、科研还是产业方向。",
    difficulty: "较高",
    difficultyReason: "实验和理论并重，本科直接就业空间相对有限，深造规划重要。",
    transferDifficulty: "中等",
    transferPolicy: "生命科学类内部转动通常有路径，转向医学或热门工科需重点核对限制。",
    campusPath: "建议关注实验室开放、师范认证、考研去向、教师资格和生物竞赛/科研训练。"
  },
  social: {
    employmentOutlook: "公共服务、调研咨询、企业管理、城市治理、公益组织和综合管理岗位。",
    postgraduatePath: "可走社会学、公共管理、经济管理、法律硕士等方向，城市资源和实习积累重要。",
    fitProfile: "适合表达沟通好、愿意做调研、能接受岗位方向较分散的学生。",
    studyPlan: "多做调研项目、数据分析、实习和公文写作训练，提前准备考公或就业方向。",
    difficulty: "中等",
    difficultyReason: "课程压力不算最高，但就业路径需要主动规划和实习积累。",
    transferDifficulty: "中等",
    transferPolicy: "社科经管类转专业通常看绩点和学院名额，跨到热门工科难度更大。",
    campusPath: "建议关注城市实习、公共管理项目、校友资源、考公辅导和交换实践。"
  }
};

function pickProgramTemplate(program) {
  const text = `${program.group}${program.majors.join("")}${program.note || ""}`;
  if (/临床|口腔|医学|麻醉/.test(text)) return programDeepInfoTemplates.medicine;
  if (/计算机|软件|人工智能|数据|信息安全/.test(text)) return programDeepInfoTemplates.computer;
  if (/电气|自动化|电子|通信|机械|机器人/.test(text)) return programDeepInfoTemplates.engineering;
  if (/师范|教育|思想政治|历史学/.test(text)) return programDeepInfoTemplates.teacher;
  if (/法学|新闻|传播|汉语言|中文/.test(text)) return programDeepInfoTemplates.law;
  if (/会计|金融|财务|财经|经济|工商管理/.test(text)) return programDeepInfoTemplates.finance;
  if (/材料|机械/.test(text)) return programDeepInfoTemplates.material;
  if (/生物|生命|生态/.test(text)) return programDeepInfoTemplates.biology;
  return programDeepInfoTemplates.social;
}

programs.forEach((program) => {
  Object.assign(program, pickProgramTemplate(program), program);
});

const majorDeepInfoTemplates = {
  philosophy: {
    employment: "教育、研究、出版、公共部门和文化机构。",
    postgraduate: "读研依赖度较高，适合继续走哲学、宗教学、伦理学和人文社科方向。",
    fitFor: "适合阅读耐心强、喜欢思辨和写作、不急于快速就业的学生。",
    studyAdvice: "重点训练阅读、写作、逻辑表达和外语能力，尽早规划读研或公职路线。",
    difficulty: "中等",
    difficultyReason: "课程理解门槛不低，就业更看长期积累。"
  },
  economy: {
    employment: "银行、证券、财税、审计、企业经营、数据分析和政府经济部门。",
    postgraduate: "可走金融、应用经济、会计审计、统计和管理类研究生。",
    fitFor: "适合数字敏感、愿意考证、沟通能力较好的学生。",
    studyAdvice: "学好数学统计、会计金融基础，尽早准备证书、实习和数据工具。",
    difficulty: "中等",
    difficultyReason: "课程难度适中，但就业竞争和城市资源影响明显。"
  },
  law: {
    employment: "公务员、律所、企业法务、合规、社会服务、公共管理和教育。",
    postgraduate: "法学可准备法考和法硕，社科类可走公共管理、社会学、教育等方向。",
    fitFor: "适合阅读量大、表达清楚、逻辑强、愿意背诵和写作的学生。",
    studyAdvice: "重视案例、写作、演讲、实习和资格考试，提前判断考公、法考或教师路线。",
    difficulty: "中等",
    difficultyReason: "入门不算难，但高质量出口依赖证书和长期训练。"
  },
  education: {
    employment: "教师、教研、教育产品、培训管理和公共部门。",
    postgraduate: "可走教育学、学科教学、心理学、课程与教学论等方向。",
    fitFor: "适合表达稳定、有耐心、愿意长期面对课堂和学生的学生。",
    studyAdvice: "准备普通话、教师资格、试讲、实习和目标地区教师招聘要求。",
    difficulty: "中等",
    difficultyReason: "专业课程压力适中，但编制和资格准备需要持续投入。"
  },
  literature: {
    employment: "教师、编辑、媒体、新媒体运营、品牌传播、翻译和公共部门。",
    postgraduate: "可走汉语言文学、新闻传播、翻译、教育和公共管理等方向。",
    fitFor: "适合阅读写作强、表达欲强、愿意积累作品和实习的学生。",
    studyAdvice: "多写作品、做实习、练表达，外语类建议叠加行业技能。",
    difficulty: "中等",
    difficultyReason: "课程压力不算最高，但就业分化取决于作品和实习。"
  },
  science: {
    employment: "科研、教师、数据分析、检测、环保、半导体、光电和工程技术。",
    postgraduate: "升学依赖度较高，可走数学、物理、化学、生物、地理等细分方向。",
    fitFor: "适合理科基础扎实、能接受抽象理论和实验训练的学生。",
    studyAdvice: "重视数学、实验、科研训练和编程工具，尽早判断读研方向。",
    difficulty: "较高",
    difficultyReason: "基础课和抽象理论较多，本科出口常依赖深造或复合技能。"
  },
  engineering: {
    employment: "制造业、软件、通信、电网、自动化、新能源、土木建筑和工程技术岗位。",
    postgraduate: "可走电子信息、控制、机械、材料、计算机、土木等工程硕士方向。",
    fitFor: "适合数学物理基础好、愿意动手实践和做项目的学生。",
    studyAdvice: "打好工程基础，尽早做项目、竞赛、实习和软件工具训练。",
    difficulty: "较高",
    difficultyReason: "课程硬、实验项目多，理论和实践都要跟上。"
  },
  medicine: {
    employment: "医院、药企、护理、公共卫生、医学检验、康复和医学技术岗位。",
    postgraduate: "临床、口腔、中医等方向升学和规培强相关，药学护理也可通过深造拓宽选择。",
    fitFor: "适合自律强、抗压好、能接受长期学习和职业资格要求的学生。",
    studyAdvice: "重视基础医学、临床实践、资格考试、考研和规培路线。",
    difficulty: "很高",
    difficultyReason: "培养周期长、课程密集，职业准入要求高。"
  },
  agriculture: {
    employment: "农业技术、食品、园林、生态环保、科研推广和公共机构。",
    postgraduate: "可走农学、食品、园艺、兽医、生态和生物相关方向。",
    fitFor: "适合喜欢生命科学、实验和应用技术，能接受行业周期的学生。",
    studyAdvice: "重视实验、实习基地、科研训练和行业证书，关注地域产业资源。",
    difficulty: "中等",
    difficultyReason: "课程难度适中，发展空间更依赖方向选择和实践。"
  },
  management: {
    employment: "企业管理、人力、市场、会计、物流、旅游、公共管理和信息管理岗位。",
    postgraduate: "可走管理学、会计审计、公共管理、工商管理、图情等方向。",
    fitFor: "适合沟通协调好、愿意实习、能接受岗位竞争的学生。",
    studyAdvice: "尽早做实习、证书、数据工具和项目管理训练，避免只停留在课堂理论。",
    difficulty: "中等",
    difficultyReason: "课程门槛不算高，但就业质量取决于实习、证书和城市资源。"
  },
  art: {
    employment: "设计、媒体、影视、音乐、美术教育、展陈、产品和数字内容。",
    postgraduate: "可走艺术设计、戏剧影视、美术、音乐、艺术管理和教育方向。",
    fitFor: "适合有作品积累、审美表达强、能接受项目制训练的学生。",
    studyAdvice: "持续打磨作品集、软件能力、实习项目和行业人脉，关注招生类型要求。",
    difficulty: "中等",
    difficultyReason: "文化课之外更看作品、审美、软件和项目经验。"
  }
};

function pickMajorTemplate(major) {
  const text = `${major.discipline}${major.name}${major.examples.join("")}`;
  if (/哲学/.test(text)) return majorDeepInfoTemplates.philosophy;
  if (/经济|财政|金融|贸易/.test(text)) return majorDeepInfoTemplates.economy;
  if (/法学|政治|社会|民族|公安|马克思/.test(text)) return majorDeepInfoTemplates.law;
  if (/教育|体育/.test(text)) return majorDeepInfoTemplates.education;
  if (/文学|语言|新闻|传播|外语|中国语言/.test(text)) return majorDeepInfoTemplates.literature;
  if (/数学|物理|化学|天文|地理|大气|海洋|地球|生物|心理|统计/.test(text)) return majorDeepInfoTemplates.science;
  if (/工学|力学|机械|电气|电子|计算机|土木|水利|测绘|化工|地质|矿业|交通|海洋工程|航空|兵器|核工程|农业工程|林业工程|环境|生物医学|食品|建筑|安全|材料|能源|自动化/.test(text)) return majorDeepInfoTemplates.engineering;
  if (/农学|植物|动物|林学|水产|草学/.test(text)) return majorDeepInfoTemplates.agriculture;
  if (/医学|临床|口腔|中医|药学|护理|公共卫生|医学技术/.test(text)) return majorDeepInfoTemplates.medicine;
  if (/管理|工商|会计|物流|旅游|公共管理|图书|电子商务|工业工程/.test(text)) return majorDeepInfoTemplates.management;
  if (/艺术|设计|音乐|美术|戏剧|影视|舞蹈/.test(text)) return majorDeepInfoTemplates.art;
  return majorDeepInfoTemplates.management;
}

majorProfiles.forEach((major) => {
  Object.assign(major, pickMajorTemplate(major), major);
});

const assessmentQuestions = [
  {
    id: "learn",
    title: "你平时更喜欢哪种学习方式？",
    options: [
      { text: "自己查资料、推公式、把逻辑想明白", tags: ["research"] },
      { text: "做实验、搭东西、边做边改", tags: ["practice"] },
      { text: "听别人讲、讨论之后再总结", tags: ["service"] }
    ]
  },
  {
    id: "pressure",
    title: "遇到压力大的任务，你通常怎么处理？",
    options: [
      { text: "拆成步骤，按计划一点点推进", tags: ["stable"] },
      { text: "先抓关键问题，快速试错", tags: ["practice"] },
      { text: "找资料和案例，把依据补足", tags: ["research"] }
    ]
  },
  {
    id: "expression",
    title: "你更愿意做哪类任务？",
    options: [
      { text: "写作、演讲、沟通、组织活动", tags: ["service"] },
      { text: "数据分析、模型推理、做判断", tags: ["research"] },
      { text: "工具操作、项目执行、技术实现", tags: ["practice"] }
    ]
  },
  {
    id: "math",
    title: "你对数学、物理、逻辑类课程的感觉是？",
    options: [
      { text: "比较有优势，愿意继续学难一点", tags: ["research", "practice"] },
      { text: "能学，但希望和应用结合", tags: ["practice", "stable"] },
      { text: "不想把它作为大学主战场", tags: ["service", "stable"] }
    ]
  },
  {
    id: "hands",
    title: "你对动手实践、实验、项目的接受度？",
    options: [
      { text: "喜欢，有成果感", tags: ["practice"] },
      { text: "可以接受，但要有清晰指导", tags: ["stable"] },
      { text: "更喜欢文字、沟通或分析类任务", tags: ["service", "research"] }
    ]
  },
  {
    id: "future",
    title: "你更想要哪种未来职业状态？",
    options: [
      { text: "技术路线，靠能力和项目吃饭", tags: ["practice", "research"] },
      { text: "稳定路线，证书、编制、规则清楚", tags: ["stable"] },
      { text: "沟通服务路线，和人打交道更多", tags: ["service"] }
    ]
  },
  {
    id: "longStudy",
    title: "如果一个方向需要长期学习或读研，你能接受吗？",
    options: [
      { text: "能接受，愿意用深造换更高平台", tags: ["research"] },
      { text: "看专业值不值得，最好就业读研都能走", tags: ["practice", "stable"] },
      { text: "更希望本科阶段就有清晰出口", tags: ["stable", "service"] }
    ]
  },
  {
    id: "city",
    title: "你对城市和实习资源怎么看？",
    options: [
      { text: "很重要，想去机会多的城市", tags: ["practice", "service"] },
      { text: "可以兼顾，学校和专业更重要", tags: ["research"] },
      { text: "离家近、生活稳定也很重要", tags: ["stable"] }
    ]
  },
  {
    id: "risk",
    title: "面对热门专业竞争，你更倾向？",
    options: [
      { text: "愿意冲，但要知道风险", tags: ["practice"] },
      { text: "稳一点，把保底和专业质量排好", tags: ["stable"] },
      { text: "先看是否适合自己，再决定冲不冲", tags: ["research", "service"] }
    ]
  },
  {
    id: "family",
    title: "你希望志愿方案怎么和家里沟通？",
    options: [
      { text: "用数据和理由说清楚", tags: ["research"] },
      { text: "把就业、稳定性和成本讲清楚", tags: ["stable"] },
      { text: "把兴趣、性格和未来生活讲清楚", tags: ["service"] }
    ]
  }
];

const assessmentProfiles = {
  research: {
    name: "研究分析型",
    summary: "适合用数据、逻辑和长期积累做选择，专业上更看重平台、深造和技术壁垒。",
    fit: "适合科研、算法、数据、医学、法学、经济分析等需要持续学习的方向。",
    avoid: "不太适合只靠短期兴趣、缺少长期训练路径的选择。",
    studyAdvice: "大学阶段要重点做阅读、数学/统计、科研训练、论文或项目沉淀。",
    directions: ["计算机", "人工智能", "医学", "法学", "经济", "数学", "数据"],
    keywords: ["计算机", "软件", "人工智能", "数据", "医学", "法学", "经济", "数学", "统计"]
  },
  practice: {
    name: "工程实践型",
    summary: "适合边做边学、用项目证明能力，专业上更适合工程、技术和产业落地类方向。",
    fit: "适合计算机、电气、自动化、机械、电子信息、智能制造等项目型专业。",
    avoid: "不太适合长期只有理论阅读、实践反馈较少的方向。",
    studyAdvice: "大学阶段要尽早做项目、竞赛、实习，形成可展示的作品和技术能力。",
    directions: ["计算机", "电气", "自动化", "电子信息", "机械", "智能制造"],
    keywords: ["计算机", "软件", "人工智能", "电气", "自动化", "电子", "通信", "机械", "机器人"]
  },
  service: {
    name: "表达服务型",
    summary: "适合通过沟通、表达、组织和服务创造价值，专业上更看重人文理解和表达能力。",
    fit: "适合师范、法学、新闻传播、汉语言、公共管理、教育和社会服务类方向。",
    avoid: "不太适合长期封闭刷题、很少与人协作沟通的方向。",
    studyAdvice: "大学阶段要重视写作、演讲、实习、资格证和真实沟通场景训练。",
    directions: ["师范", "法学", "新闻传播", "汉语言", "教育", "公共管理"],
    keywords: ["师范", "教育", "法学", "新闻", "传播", "汉语言", "公共管理", "社会"]
  },
  stable: {
    name: "稳定规划型",
    summary: "适合规则清楚、路径稳定、能通过证书和长期准备获得确定性的方向。",
    fit: "适合师范、财经、会计、医学技术、电气、公共管理和本地就业资源较清楚的专业。",
    avoid: "不太适合波动很大、完全依赖个人资源和短期机会的方向。",
    studyAdvice: "大学阶段要提前规划证书、考公考编、考研和实习节点，把路径拆成时间表。",
    directions: ["师范", "财经", "会计", "电气", "医学技术", "公共管理"],
    keywords: ["师范", "会计", "金融", "财务", "电气", "医学", "公共管理", "管理"]
  }
};

const pricing = [
  {
    "name": "基础版",
    "price": "¥29",
    "period": "本届高考季",
    "desc": "适合先把当前批次能报候选看完整",
    "perks": [
      "按当前批次规则整理候选清单",
      "选科可报检查",
      "基础风险等级",
      "就业方向和学习难度摘要",
      "收藏并加入候选志愿表",
      "院校专业组基础详情"
    ],
    "button": "开通基础版",
    "featured": true
  },
  {
    "name": "进阶版",
    "price": "¥59",
    "period": "本届高考季",
    "desc": "适合认真做一份可讨论、可打印、可复盘的家庭候选方案",
    "perks": [
      "基础版全部权益",
      "推荐理由和排序说明",
      "替代院校建议",
      "专业组深度风险",
      "考研升学、适合人群和大学四年学习建议",
      "转专业可行性与校内提升路径",
      "家长版批次规则解释报告",
      "导出/打印与多次模拟"
    ],
    "button": "开通进阶版"
  }
];
