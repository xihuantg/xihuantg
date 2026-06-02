const programs = [
  {
    id: "zzdx-cs",
    school: "郑州大学",
    group: "计算机类专业组",
    city: "郑州",
    province: "河南",
    level: "211",
    batch: "本科批",
    primary: "物理",
    secondary: ["不限"],
    majors: ["计算机科学与技术", "软件工程", "人工智能"],
    ranks: [21400, 23600, 25800],
    scores: [626, 619, 614],
    plan: 186,
    planChange: "+8%",
    tuition: "5700元/年",
    heat: "高",
    environment: "公开评价摘要：较多学生提到校园规模较大、学习氛围较浓，郑州主城区通勤和实习机会相对方便；也有评价提到不同校区生活体验差异较大。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "省内头部综合院校，计算机方向热度高，建议搭配稳妥和保底专业组。"
  },
  {
    id: "zzdx-med",
    school: "郑州大学",
    group: "临床医学专业组",
    city: "郑州",
    province: "河南",
    level: "211",
    batch: "本科批",
    primary: "物理",
    secondary: ["化学", "生物"],
    majors: ["临床医学", "口腔医学", "麻醉学"],
    ranks: [14600, 15800, 17100],
    scores: [642, 637, 632],
    plan: 124,
    planChange: "-3%",
    tuition: "6300元/年",
    heat: "极高",
    environment: "公开评价摘要：较多评价关注医学培养资源和附属医院实践机会；也有评价提醒医学课程压力较大、学习周期较长。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "医学类培养周期长，通常要求物理、化学、生物组合，位次竞争更激烈。"
  },
  {
    id: "hndx-auto",
    school: "河南大学",
    group: "自动化与电子信息组",
    city: "开封",
    province: "河南",
    level: "双一流",
    batch: "本科批",
    primary: "物理",
    secondary: ["不限"],
    majors: ["电子信息科学与技术", "自动化", "通信工程"],
    ranks: [33600, 36200, 38800],
    scores: [603, 596, 590],
    plan: 210,
    planChange: "+12%",
    tuition: "5000元/年",
    heat: "中高",
    environment: "公开评价摘要：较多学生提到校园文化氛围较浓、生活成本相对可控；也有评价提到部分设施新旧差异明显。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "工科方向计划较多，适合作为河南物理方向稳妥选择。"
  },
  {
    id: "hndx-law",
    school: "河南大学",
    group: "法学与新闻传播组",
    city: "开封",
    province: "河南",
    level: "双一流",
    batch: "本科批",
    primary: "历史",
    secondary: ["不限"],
    majors: ["法学", "新闻传播学类", "汉语言文学"],
    ranks: [8800, 9600, 10400],
    scores: [603, 598, 592],
    plan: 132,
    planChange: "+4%",
    tuition: "4400元/年",
    heat: "高",
    environment: "公开评价摘要：较多学生提到人文氛围较好、老校区历史感强；也有评价提到住宿条件因楼栋而异。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "适合历史方向考生，法学和汉语言文学报考热度较高。"
  },
  {
    id: "hnsd-teacher",
    school: "河南师范大学",
    group: "师范教育组",
    city: "新乡",
    province: "河南",
    level: "省重点",
    batch: "本科批",
    primary: "历史",
    secondary: ["思想政治"],
    majors: ["思想政治教育", "历史学", "教育学"],
    ranks: [14800, 16300, 17900],
    scores: [585, 579, 572],
    plan: 165,
    planChange: "+6%",
    tuition: "4400元/年",
    heat: "中高",
    environment: "公开评价摘要：较多评价提到师范氛围较明显、校园生活节奏稳定；也有评价关注城市资源与一线城市相比有限。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "师范类稳定性较强，思想政治教育通常更偏好政治选科。"
  },
  {
    id: "hnsd-bio",
    school: "河南师范大学",
    group: "生命科学组",
    city: "新乡",
    province: "河南",
    level: "省重点",
    batch: "本科批",
    primary: "物理",
    secondary: ["化学", "生物"],
    majors: ["生物科学", "生物技术", "生态学"],
    ranks: [46200, 49500, 52800],
    scores: [574, 567, 561],
    plan: 148,
    planChange: "+2%",
    tuition: "5000元/年",
    heat: "中",
    environment: "公开评价摘要：较多学生提到学习氛围和师范传统较稳定；也有评价提醒实验课程安排较密集。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "适合化学、生物组合考生，就业路径更依赖深造和教师资格。"
  },
  {
    id: "hngy-electric",
    school: "河南工业大学",
    group: "电气与智能制造组",
    city: "郑州",
    province: "河南",
    level: "省重点",
    batch: "本科批",
    primary: "物理",
    secondary: ["不限"],
    majors: ["电气工程及其自动化", "机械设计制造及其自动化", "机器人工程"],
    ranks: [52600, 56200, 60400],
    scores: [563, 557, 550],
    plan: 310,
    planChange: "+15%",
    tuition: "5500元/年",
    heat: "中高",
    environment: "公开评价摘要：较多学生提到学校位置便利、工科实践氛围较强；也有评价提到热门专业课程压力较高。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "招生计划较多，适合物理方向做稳妥或保底配置。"
  },
  {
    id: "hnyd-finance",
    school: "河南财经政法大学",
    group: "财经管理组",
    city: "郑州",
    province: "河南",
    level: "省重点",
    batch: "本科批",
    primary: "不限",
    secondary: ["不限"],
    majors: ["会计学", "金融学", "财务管理"],
    ranks: [38600, 42100, 45600],
    scores: [592, 585, 579],
    plan: 260,
    planChange: "-5%",
    tuition: "4400元/年",
    heat: "高",
    environment: "公开评价摘要：较多学生提到财经政法类氛围鲜明，郑州实习和就业信息较集中；也有评价提醒专业之间资源热度不同。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "财经类专业冷热差异明显，需关注城市资源和实习机会。"
  },
  {
    id: "lylg-material",
    school: "洛阳理工学院",
    group: "材料与机械组",
    city: "洛阳",
    province: "河南",
    level: "普通本科",
    batch: "本科批",
    primary: "物理",
    secondary: ["化学"],
    majors: ["材料成型及控制工程", "机械电子工程", "无机非金属材料工程"],
    ranks: [82000, 88200, 94600],
    scores: [532, 523, 516],
    plan: 420,
    planChange: "+10%",
    tuition: "5000元/年",
    heat: "中",
    environment: "公开评价摘要：较多学生提到生活成本较友好、校园日常比较便利；也有评价提到部分宿舍和设施年代较久。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "适合作为保底选择，材料类需关注行业方向和转专业政策。"
  },
  {
    id: "bjut-ai",
    school: "北京工业大学",
    group: "人工智能实验组",
    city: "北京",
    province: "北京",
    level: "211",
    batch: "本科批",
    primary: "物理",
    secondary: ["不限"],
    majors: ["人工智能", "信息安全", "数据科学与大数据技术"],
    ranks: [19800, 22400, 24700],
    scores: [631, 624, 619],
    plan: 34,
    planChange: "-8%",
    tuition: "5000元/年",
    heat: "极高",
    environment: "公开评价摘要：较多评价提到北京区位和实习机会优势明显；也有评价提醒生活成本较高、热门专业竞争强。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "省外211计划少、城市热度高，适合作为冲刺项。"
  },
  {
    id: "shdx-econ",
    school: "上海大学",
    group: "经济与社会科学组",
    city: "上海",
    province: "上海",
    level: "211",
    batch: "本科批",
    primary: "不限",
    secondary: ["不限"],
    majors: ["经济学类", "社会学", "工商管理"],
    ranks: [12200, 14100, 16400],
    scores: [636, 628, 621],
    plan: 42,
    planChange: "-2%",
    tuition: "6500元/年",
    heat: "极高",
    environment: "公开评价摘要：较多学生提到城市资源丰富、校园配套较完整；也有评价提醒上海生活成本和竞争压力较高。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "城市溢价明显，历史或物理方向均可关注，但冲刺风险较高。"
  },
  {
    id: "scu-med",
    school: "四川大学",
    group: "口腔医学组",
    city: "成都",
    province: "四川",
    level: "985",
    batch: "本科批",
    primary: "物理",
    secondary: ["化学", "生物"],
    majors: ["口腔医学", "临床医学"],
    ranks: [6200, 7600, 9100],
    scores: [662, 655, 648],
    plan: 18,
    planChange: "-6%",
    tuition: "7250元/年",
    heat: "极高",
    environment: "公开评价摘要：较多评价关注医学学科实力和城市生活便利度；也有评价提醒医学培养周期长、学习强度高。",
    source: "来源：公开网络评价整理 / 访问日期：2026-06-01",
    note: "医学顶尖方向，计划少且位次要求高，不适合做稳妥项。"
  }
];

const majorProfiles = [
  { discipline: "哲学", name: "哲学类", primary: "不限", secondary: ["不限"], examples: ["哲学", "逻辑学", "宗教学", "伦理学"], direction: "理论研究、教育、公务员、文化出版", risk: "就业路径偏长期积累，建议关注院校层次、读研规划和表达能力。" },
  { discipline: "经济学", name: "经济学类", primary: "不限", secondary: ["不限"], examples: ["经济学", "经济统计学", "国民经济管理"], direction: "经济研究、数据分析、金融机构、政府部门", risk: "数学和数据能力影响较大，城市资源和院校平台很重要。" },
  { discipline: "经济学", name: "财政学类", primary: "不限", secondary: ["不限"], examples: ["财政学", "税收学", "国际税收"], direction: "财政税务、审计、公共部门、企业税务", risk: "适合稳健型家庭，需关注考公、证书和地区岗位数量。" },
  { discipline: "经济学", name: "金融学类", primary: "不限", secondary: ["不限"], examples: ["金融学", "金融工程", "保险学", "投资学", "金融科技"], direction: "银行、证券、保险、风控、量化和金融科技", risk: "就业分化明显，一线城市和实习资源影响很大。" },
  { discipline: "经济学", name: "经济与贸易类", primary: "不限", secondary: ["不限"], examples: ["国际经济与贸易", "贸易经济"], direction: "外贸、跨境电商、供应链、企业商务", risk: "受城市、外语能力和产业环境影响较大。" },
  { discipline: "法学", name: "法学类", primary: "不限", secondary: ["不限"], examples: ["法学", "知识产权", "信用风险管理与法律防控"], direction: "公务员、律所、企业法务、合规", risk: "法考、院校层次和实习资源影响很大，不宜只看专业热度。" },
  { discipline: "法学", name: "政治学类", primary: "历史", secondary: ["思想政治"], examples: ["政治学与行政学", "国际政治", "外交学"], direction: "公共管理、政策研究、外事、考公", risk: "更适合政治选科和表达能力较强的学生。" },
  { discipline: "法学", name: "社会学类", primary: "不限", secondary: ["不限"], examples: ["社会学", "社会工作", "人类学"], direction: "社会服务、公益组织、调研咨询、公共治理", risk: "就业岗位较分散，建议关注实践项目和城市机会。" },
  { discipline: "法学", name: "民族学类", primary: "不限", secondary: ["不限"], examples: ["民族学"], direction: "民族事务、文化研究、公共部门", risk: "开设院校少，就业方向较专门。" },
  { discipline: "法学", name: "马克思主义理论类", primary: "历史", secondary: ["思想政治"], examples: ["科学社会主义", "思想政治教育", "马克思主义理论"], direction: "中学政治教师、教研、党政机关、理论研究", risk: "更适合政治选科考生，需关注教师资格和编制竞争。" },
  { discipline: "法学", name: "公安学类", primary: "历史", secondary: ["思想政治"], examples: ["治安学", "侦查学", "公安管理学", "涉外警务"], direction: "公安、政法、公共安全管理", risk: "常伴随体检、政审、体测等特殊要求，需单独核对招生章程。" },
  { discipline: "教育学", name: "教育学类", primary: "不限", secondary: ["不限"], examples: ["教育学", "学前教育", "小学教育", "特殊教育"], direction: "教师、教研、教育产品、培训管理", risk: "地区编制和教师资格要求影响较大。" },
  { discipline: "教育学", name: "体育学类", primary: "不限", secondary: ["不限"], examples: ["体育教育", "运动训练", "社会体育指导与管理"], direction: "体育教师、训练、赛事运营、健康管理", risk: "常有体测或专项要求，需关注身体条件和招生类型。" },
  { discipline: "文学", name: "中国语言文学类", primary: "不限", secondary: ["不限"], examples: ["汉语言文学", "汉语言", "秘书学", "古典文献学"], direction: "教师、公务员、编辑、文案、出版", risk: "就业面广但竞争也广，写作能力和证书很关键。" },
  { discipline: "文学", name: "外国语言文学类", primary: "不限", secondary: ["不限"], examples: ["英语", "日语", "翻译", "商务英语", "俄语"], direction: "翻译、外贸、教育、跨境业务、国际传播", risk: "单一语言优势下降，建议叠加行业能力。" },
  { discipline: "文学", name: "新闻传播学类", primary: "不限", secondary: ["不限"], examples: ["新闻学", "广播电视学", "广告学", "网络与新媒体"], direction: "媒体、内容运营、品牌传播、新媒体", risk: "行业变化快，作品集和实习经验影响较大。" },
  { discipline: "历史学", name: "历史学类", primary: "历史", secondary: ["不限"], examples: ["历史学", "世界史", "考古学", "文物与博物馆学"], direction: "教师、博物馆、文旅、研究、出版", risk: "读研和教师资格常影响职业选择。" },
  { discipline: "理学", name: "数学类", primary: "物理", secondary: ["不限"], examples: ["数学与应用数学", "信息与计算科学", "数据计算及应用"], direction: "教师、算法、数据分析、金融量化", risk: "基础课难度高，适合逻辑和数学能力强的学生。" },
  { discipline: "理学", name: "物理学类", primary: "物理", secondary: ["不限"], examples: ["物理学", "应用物理学", "核物理"], direction: "科研、教师、半导体、光电和工程技术", risk: "深造依赖度较高，本科就业更看复合技能。" },
  { discipline: "理学", name: "化学类", primary: "物理", secondary: ["化学"], examples: ["化学", "应用化学", "化学生物学"], direction: "化工、材料、检测、医药研发、教师", risk: "实验课程多，需关注化学选科和行业环境。" },
  { discipline: "理学", name: "天文学类", primary: "物理", secondary: ["不限"], examples: ["天文学"], direction: "科研、科普、数据处理、空间科学", risk: "开设院校少，深造需求强。" },
  { discipline: "理学", name: "地理科学类", primary: "不限", secondary: ["地理"], examples: ["地理科学", "自然地理与资源环境", "人文地理与城乡规划", "地理信息科学"], direction: "教师、规划、GIS、自然资源、测绘", risk: "地理信息方向更偏技术，需关注数学和软件能力。" },
  { discipline: "理学", name: "大气科学类", primary: "物理", secondary: ["不限"], examples: ["大气科学", "应用气象学"], direction: "气象、环保、航空、农业气象、科研", risk: "岗位专业性强，院校资源影响较大。" },
  { discipline: "理学", name: "海洋科学类", primary: "物理", secondary: ["化学"], examples: ["海洋科学", "海洋技术", "海洋资源与环境"], direction: "海洋调查、环保、资源开发、科研", risk: "地域和行业集中度较高。" },
  { discipline: "理学", name: "地球物理学类", primary: "物理", secondary: ["不限"], examples: ["地球物理学", "空间科学与技术"], direction: "地震、资源勘探、空间环境、科研", risk: "专业性强，需关注就业地区和深造。" },
  { discipline: "理学", name: "地质学类", primary: "物理", secondary: ["化学"], examples: ["地质学", "地球化学", "古生物学"], direction: "资源勘查、地质调查、科研、自然博物馆", risk: "行业周期和野外工作属性需要提前了解。" },
  { discipline: "理学", name: "生物科学类", primary: "物理", secondary: ["化学", "生物"], examples: ["生物科学", "生物技术", "生态学"], direction: "教师、科研、生物医药、检测", risk: "深造依赖度较高，不建议只看名称报考。" },
  { discipline: "理学", name: "心理学类", primary: "不限", secondary: ["不限"], examples: ["心理学", "应用心理学"], direction: "教育、咨询、人力资源、用户研究", risk: "临床咨询路径需要长期训练和资质积累。" },
  { discipline: "理学", name: "统计学类", primary: "物理", secondary: ["不限"], examples: ["统计学", "应用统计学"], direction: "数据分析、金融风控、互联网、政府统计", risk: "数学和编程能力很重要，适合数据敏感型学生。" },
  { discipline: "工学", name: "力学类", primary: "物理", secondary: ["不限"], examples: ["理论与应用力学", "工程力学"], direction: "航空航天、土木、机械、仿真分析", risk: "基础理论强，常与读研和工程方向绑定。" },
  { discipline: "工学", name: "机械类", primary: "物理", secondary: ["不限"], examples: ["机械工程", "机械设计制造及其自动化", "车辆工程", "智能制造工程"], direction: "制造业、汽车、装备、机器人、工艺工程", risk: "就业稳定但课程硬，需关注院校产业资源。" },
  { discipline: "工学", name: "仪器类", primary: "物理", secondary: ["不限"], examples: ["测控技术与仪器", "智能感知工程"], direction: "检测、传感器、自动化、精密仪器", risk: "专业名称不热但应用面广，需看学校实验平台。" },
  { discipline: "工学", name: "材料类", primary: "物理", secondary: ["化学"], examples: ["材料科学与工程", "高分子材料与工程", "新能源材料与器件"], direction: "新能源、半导体、化工材料、检测", risk: "常见化学要求，部分方向深造更有优势。" },
  { discipline: "工学", name: "能源动力类", primary: "物理", secondary: ["不限"], examples: ["能源与动力工程", "新能源科学与工程", "储能科学与工程"], direction: "电力、能源、汽车热管理、新能源设备", risk: "行业方向差异大，需区分传统能源和新能源。" },
  { discipline: "工学", name: "电气类", primary: "物理", secondary: ["不限"], examples: ["电气工程及其自动化", "智能电网信息工程", "电机电器智能化"], direction: "电网、电力设备、新能源、自动化设备", risk: "就业稳定性强，但工科基础要求较高。" },
  { discipline: "工学", name: "电子信息类", primary: "物理", secondary: ["不限"], examples: ["电子信息工程", "通信工程", "电子科学与技术", "集成电路设计与集成系统"], direction: "通信、芯片、硬件、信号处理、嵌入式", risk: "热门度高，数学、物理和编程能力都重要。" },
  { discipline: "工学", name: "自动化类", primary: "物理", secondary: ["不限"], examples: ["自动化", "机器人工程", "智能装备与系统"], direction: "控制系统、工业自动化、机器人、智能制造", risk: "跨机械、电气、计算机，课程综合难度较高。" },
  { discipline: "工学", name: "计算机类", primary: "物理", secondary: ["不限"], examples: ["计算机科学与技术", "软件工程", "网络工程", "人工智能", "数据科学与大数据技术"], direction: "软件开发、人工智能、数据平台、网络安全", risk: "热门专业分数抬升明显，建议搭配同类替代专业。" },
  { discipline: "工学", name: "土木类", primary: "物理", secondary: ["不限"], examples: ["土木工程", "建筑环境与能源应用工程", "城市地下空间工程"], direction: "建筑工程、结构设计、市政、工程管理", risk: "行业周期明显，需关注城市建设和转型方向。" },
  { discipline: "工学", name: "水利类", primary: "物理", secondary: ["不限"], examples: ["水利水电工程", "水文与水资源工程", "港口航道与海岸工程"], direction: "水利工程、规划设计、防灾、水资源管理", risk: "岗位专业性强，地域和单位性质影响大。" },
  { discipline: "工学", name: "测绘类", primary: "物理", secondary: ["不限"], examples: ["测绘工程", "遥感科学与技术", "导航工程"], direction: "测绘、遥感、导航、地理信息", risk: "外业和技术岗位并存，需了解工作环境。" },
  { discipline: "工学", name: "化工与制药类", primary: "物理", secondary: ["化学"], examples: ["化学工程与工艺", "制药工程", "能源化学工程"], direction: "化工、医药、材料、生产工艺、研发", risk: "常见化学要求，需关注行业安全和地区产业。" },
  { discipline: "工学", name: "地质类", primary: "物理", secondary: ["不限"], examples: ["地质工程", "勘查技术与工程", "资源勘查工程"], direction: "资源勘查、工程地质、地灾防治", risk: "野外工作可能较多，行业周期性需了解。" },
  { discipline: "工学", name: "矿业类", primary: "物理", secondary: ["不限"], examples: ["采矿工程", "石油工程", "矿物加工工程"], direction: "矿业、石油、能源资源、工程管理", risk: "工作地点和行业周期影响较大，需谨慎匹配家庭预期。" },
  { discipline: "工学", name: "纺织类", primary: "物理", secondary: ["化学"], examples: ["纺织工程", "服装设计与工程", "非织造材料与工程"], direction: "纺织材料、服装工程、供应链、质检", risk: "传统产业与新材料方向差异大。" },
  { discipline: "工学", name: "轻工类", primary: "物理", secondary: ["化学"], examples: ["轻化工程", "包装工程", "印刷工程"], direction: "包装、印刷、日化、材料工艺", risk: "行业较细分，需关注院校所在地产业。" },
  { discipline: "工学", name: "交通运输类", primary: "物理", secondary: ["不限"], examples: ["交通运输", "交通工程", "航海技术", "飞行技术"], direction: "轨道、物流、交通规划、航运航空", risk: "部分专业有身体条件、行业资格或就业地点要求。" },
  { discipline: "工学", name: "海洋工程类", primary: "物理", secondary: ["不限"], examples: ["船舶与海洋工程", "海洋工程与技术"], direction: "船舶、海工装备、港口、海洋能源", risk: "地域集中度高，沿海院校资源更关键。" },
  { discipline: "工学", name: "航空航天类", primary: "物理", secondary: ["不限"], examples: ["航空航天工程", "飞行器设计与工程", "飞行器动力工程"], direction: "航空航天、国防科技、飞行器研发", risk: "课程难度高，院校平台和深造机会影响大。" },
  { discipline: "工学", name: "兵器类", primary: "物理", secondary: ["不限"], examples: ["武器系统与工程", "弹药工程与爆炸技术"], direction: "国防工业、装备研发、安全测试", risk: "专业性强，单位性质和地域限制需了解。" },
  { discipline: "工学", name: "核工程类", primary: "物理", secondary: ["不限"], examples: ["核工程与核技术", "辐射防护与核安全"], direction: "核电、核安全、能源、检测", risk: "行业门槛高，需关注安全要求和就业区域。" },
  { discipline: "工学", name: "农业工程类", primary: "物理", secondary: ["不限"], examples: ["农业工程", "农业机械化及其自动化", "农业智能装备工程"], direction: "农业装备、智慧农业、机械自动化", risk: "专业交叉明显，需关注现代农业产业机会。" },
  { discipline: "工学", name: "林业工程类", primary: "物理", secondary: ["化学"], examples: ["森林工程", "木材科学与工程", "林产化工"], direction: "林产加工、材料、生态工程", risk: "行业较细分，适合明确接受林业相关方向的学生。" },
  { discipline: "工学", name: "环境科学与工程类", primary: "物理", secondary: ["化学"], examples: ["环境工程", "环境科学", "环境生态工程"], direction: "环保、监测、治理工程、环评", risk: "岗位稳定但薪资差异大，需关注城市和行业资源。" },
  { discipline: "工学", name: "生物医学工程类", primary: "物理", secondary: ["化学", "生物"], examples: ["生物医学工程", "假肢矫形工程", "临床工程技术"], direction: "医疗器械、医学影像、医院设备、研发", risk: "医学和工程交叉，课程综合性较强。" },
  { discipline: "工学", name: "食品科学与工程类", primary: "物理", secondary: ["化学", "生物"], examples: ["食品科学与工程", "食品质量与安全", "粮食工程"], direction: "食品研发、质检、营养、粮油加工", risk: "常见化学/生物要求，需关注产业区域和岗位类型。" },
  { discipline: "工学", name: "建筑类", primary: "物理", secondary: ["不限"], examples: ["建筑学", "城乡规划", "风景园林"], direction: "建筑设计、规划、景观、城市更新", risk: "部分专业学制较长，作品能力和行业周期影响大。" },
  { discipline: "工学", name: "安全科学与工程类", primary: "物理", secondary: ["不限"], examples: ["安全工程", "应急技术与管理", "职业卫生工程"], direction: "安全生产、应急管理、工程风险控制", risk: "岗位专业性强，行业和单位性质差异大。" },
  { discipline: "工学", name: "生物工程类", primary: "物理", secondary: ["化学", "生物"], examples: ["生物工程", "生物制药", "合成生物学"], direction: "生物制药、发酵工程、研发检测", risk: "深造和实验能力影响较大，需谨慎评估就业预期。" },
  { discipline: "工学", name: "公安技术类", primary: "物理", secondary: ["化学"], examples: ["刑事科学技术", "消防工程", "网络安全与执法"], direction: "公安技术、消防、安全执法、取证", risk: "常有体检、政审、体测等要求，必须核对招生章程。" },
  { discipline: "工学", name: "交叉工程类", primary: "物理", secondary: ["不限"], examples: ["智能交互设计", "工程软件", "智能建造与智慧交通"], direction: "工程软件、智能系统、跨学科设计", risk: "新专业变化快，需重点看学校培养方案和就业出口。" },
  { discipline: "农学", name: "植物生产类", primary: "物理", secondary: ["化学", "生物"], examples: ["农学", "园艺", "植物保护", "种子科学与工程"], direction: "农业技术、育种、植保、现代农业", risk: "行业发展稳定但地域属性明显。" },
  { discipline: "农学", name: "自然保护与环境生态类", primary: "物理", secondary: ["化学", "生物"], examples: ["农业资源与环境", "野生动物与自然保护区管理", "水土保持与荒漠化防治"], direction: "生态保护、自然资源、环保、农业环境", risk: "岗位专业性强，适合接受生态和基层工作属性的学生。" },
  { discipline: "农学", name: "动物生产类", primary: "物理", secondary: ["化学", "生物"], examples: ["动物科学", "蚕学", "蜂学"], direction: "畜牧、养殖、饲料、动物营养", risk: "行业属性明显，需提前了解工作环境。" },
  { discipline: "农学", name: "动物医学类", primary: "物理", secondary: ["化学", "生物"], examples: ["动物医学", "动物药学", "动植物检疫"], direction: "兽医、检疫、宠物医疗、畜牧防疫", risk: "学习周期和实践要求较高，需关注执业路径。" },
  { discipline: "农学", name: "林学类", primary: "物理", secondary: ["化学", "生物"], examples: ["林学", "园林", "森林保护"], direction: "林业、园林、生态修复、自然保护", risk: "就业地域和单位性质影响较大。" },
  { discipline: "农学", name: "水产类", primary: "物理", secondary: ["化学", "生物"], examples: ["水产养殖学", "海洋渔业科学与技术", "水族科学与技术"], direction: "水产养殖、渔业资源、海洋牧场", risk: "沿海和水产资源地区机会更多。" },
  { discipline: "农学", name: "草学类", primary: "物理", secondary: ["化学", "生物"], examples: ["草业科学"], direction: "草地生态、畜牧、生态修复", risk: "开设院校和岗位相对少，需明确兴趣。" },
  { discipline: "医学", name: "基础医学类", primary: "物理", secondary: ["化学", "生物"], examples: ["基础医学", "生物医学", "生物医学科学"], direction: "医学科研、实验平台、基础医学教育", risk: "偏科研和深造，和临床医生路径不同。" },
  { discipline: "医学", name: "临床医学类", primary: "物理", secondary: ["化学", "生物"], examples: ["临床医学", "麻醉学", "医学影像学", "精神医学"], direction: "临床医生、医学科研、公共卫生", risk: "培养周期长，通常要求化学和生物，身体条件也需核对。" },
  { discipline: "医学", name: "口腔医学类", primary: "物理", secondary: ["化学", "生物"], examples: ["口腔医学"], direction: "口腔医生、专科医院、科研", risk: "热度极高，招生计划少，冲刺风险需要单独提示。" },
  { discipline: "医学", name: "公共卫生与预防医学类", primary: "物理", secondary: ["化学", "生物"], examples: ["预防医学", "食品卫生与营养学", "全球健康学"], direction: "疾控、公卫、营养、健康管理", risk: "岗位稳定但发展路径和临床医学不同。" },
  { discipline: "医学", name: "中医学类", primary: "物理", secondary: ["化学", "生物"], examples: ["中医学", "针灸推拿学", "中医康复学"], direction: "中医临床、康复、养生健康、医院", risk: "不同院校选科要求差异较大，需核对专业组要求。" },
  { discipline: "医学", name: "中西医结合类", primary: "物理", secondary: ["化学", "生物"], examples: ["中西医临床医学"], direction: "中西医临床、医院、康复", risk: "培养周期长，执业路径和院校平台要重点看。" },
  { discipline: "医学", name: "药学类", primary: "物理", secondary: ["化学"], examples: ["药学", "药物制剂", "临床药学"], direction: "药企、医院药房、研发、质检", risk: "化学基础要求高，研发岗常看学历。" },
  { discipline: "医学", name: "中药学类", primary: "物理", secondary: ["化学"], examples: ["中药学", "中药资源与开发", "中药制药"], direction: "中药研发、生产、质检、药企", risk: "产业方向较专门，需关注地区资源。" },
  { discipline: "医学", name: "法医学类", primary: "物理", secondary: ["化学"], examples: ["法医学"], direction: "司法鉴定、公安司法、医学检验", risk: "专业特殊，需关注身体条件、心理适应和单位要求。" },
  { discipline: "医学", name: "医学技术类", primary: "物理", secondary: ["化学"], examples: ["医学检验技术", "医学影像技术", "康复治疗学", "眼视光学"], direction: "医院技术岗、检验、影像、康复", risk: "和临床医生不同，需区分执业资格和岗位性质。" },
  { discipline: "医学", name: "护理学类", primary: "不限", secondary: ["不限"], examples: ["护理学", "助产学"], direction: "护理、医院、社区健康、养老护理", risk: "工作强度和班次需要提前了解，部分院校有身体要求。" },
  { discipline: "管理学", name: "管理科学与工程类", primary: "物理", secondary: ["不限"], examples: ["管理科学", "信息管理与信息系统", "工程管理", "大数据管理与应用"], direction: "数据管理、项目管理、信息系统、工程管理", risk: "偏技术管理，数学和信息系统能力影响大。" },
  { discipline: "管理学", name: "工商管理类", primary: "不限", secondary: ["不限"], examples: ["工商管理", "市场营销", "会计学", "财务管理", "人力资源管理"], direction: "企业管理、财务、审计、营销、人力资源", risk: "就业面广但同质化明显，证书和实习很重要。" },
  { discipline: "管理学", name: "农业经济管理类", primary: "不限", secondary: ["不限"], examples: ["农林经济管理", "农村区域发展"], direction: "农业产业、乡村振兴、项目管理、公共部门", risk: "专业方向较细，适合关注农业产业和政策的学生。" },
  { discipline: "管理学", name: "公共管理类", primary: "不限", secondary: ["不限"], examples: ["行政管理", "公共事业管理", "劳动与社会保障", "城市管理"], direction: "公共部门、事业单位、社会保障、城市治理", risk: "考公和公共部门岗位影响较大。" },
  { discipline: "管理学", name: "图书情报与档案管理类", primary: "不限", secondary: ["不限"], examples: ["图书馆学", "档案学", "信息资源管理"], direction: "档案、图书馆、信息管理、数据治理", risk: "岗位较专门，适合细致稳定型学生。" },
  { discipline: "管理学", name: "物流管理与工程类", primary: "不限", secondary: ["不限"], examples: ["物流管理", "物流工程", "供应链管理"], direction: "供应链、仓储、运输、电商物流", risk: "行业实践性强，城市和产业资源影响大。" },
  { discipline: "管理学", name: "工业工程类", primary: "物理", secondary: ["不限"], examples: ["工业工程", "质量管理工程"], direction: "生产优化、质量管理、流程改善、智能制造", risk: "偏工程管理，适合逻辑和现场改善能力强的学生。" },
  { discipline: "管理学", name: "电子商务类", primary: "不限", secondary: ["不限"], examples: ["电子商务", "电子商务及法律", "跨境电子商务"], direction: "电商运营、平台业务、跨境贸易、数据运营", risk: "行业变化快，实习和项目经验很重要。" },
  { discipline: "管理学", name: "旅游管理类", primary: "不限", secondary: ["不限"], examples: ["旅游管理", "酒店管理", "会展经济与管理"], direction: "文旅、酒店、会展、目的地运营", risk: "受行业周期和城市资源影响较大。" },
  { discipline: "艺术学", name: "艺术学理论类", primary: "不限", secondary: ["不限"], examples: ["艺术史论", "艺术管理"], direction: "艺术研究、策展、艺术管理、文化产业", risk: "通常需艺术兴趣和长期积累，岗位较细分。" },
  { discipline: "艺术学", name: "音乐与舞蹈学类", primary: "不限", secondary: ["不限"], examples: ["音乐表演", "音乐学", "舞蹈学", "舞蹈编导"], direction: "表演、教学、文艺团体、艺术培训", risk: "多需艺考和专业训练，普通类考生需区分招生方式。" },
  { discipline: "艺术学", name: "戏剧与影视学类", primary: "不限", secondary: ["不限"], examples: ["表演", "戏剧影视文学", "广播电视编导", "动画"], direction: "影视制作、编导、表演、动画、新媒体", risk: "作品能力和行业资源影响大，多数方向需关注招生类型。" },
  { discipline: "艺术学", name: "美术学类", primary: "不限", secondary: ["不限"], examples: ["美术学", "绘画", "雕塑", "摄影"], direction: "美术教育、创作、展陈、视觉内容", risk: "多需艺考或作品基础，就业受作品集影响明显。" },
  { discipline: "艺术学", name: "设计学类", primary: "不限", secondary: ["不限"], examples: ["视觉传达设计", "环境设计", "产品设计", "数字媒体艺术"], direction: "品牌设计、交互、空间、产品、数字内容", risk: "作品集、软件能力和审美积累很重要。" }
];

const pricing = [
  {
    name: "完整方案版",
    price: "¥129",
    desc: "适合先把完整名单和风险看清楚",
    perks: ["全部冲稳保清单", "选科可报检查", "专业组风险", "志愿排序建议"],
    featured: true
  },
  {
    name: "家庭报告版",
    price: "¥329",
    desc: "适合家长和考生认真讨论方案",
    perks: ["完整方案全部权益", "家长版解释报告", "院校专业对比", "导出/打印", "多次模拟"]
  }
];

let state = {
  member: false,
  activeFilter: "all",
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
        <p><strong>学校环境公开评价摘要：</strong>${state.member ? item.environment.replace("公开评价摘要：", "") : "解锁完整方案后查看校园环境、宿舍、食堂、交通等公开评价摘要。"}</p>
        <p>${state.member || !locked ? item.reason : "解锁后查看完整排序理由、风险解释和替代方案。"}</p>
        <div class="action-row">
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
        <td>${state.member ? `${item.environment}<br><span class="muted">${item.source}</span>` : "解锁后查看摘要与来源"}</td>
        <td><span class="status-tag ${stillEligible ? "yes" : "no"}">${stillEligible ? "可报" : "不可报"}</span></td>
        <td><button class="secondary-btn" data-school-add="${item.id}" type="button">加入</button></td>
      </tr>
    `;
  }).join("");
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
    const haystack = `${major.discipline}${major.name}${major.examples.join("")}${major.direction}${major.risk}`;
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
      <p>${major.direction}</p>
      <p>${major.risk}</p>
    </article>
  `;
}

function renderMajorDirectory() {
  const profile = getProfile();
  const keyword = $("#majorDirectorySearch").value.trim();
  const discipline = $("#disciplineFilter").value;
  const filtered = majorProfiles.filter((major) => {
    const haystack = `${major.discipline}${major.name}${major.examples.join("")}${major.direction}${major.risk}`;
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

function renderPricing() {
  $("#pricingGrid").innerHTML = pricing.map((plan) => `
    <article class="price-card ${plan.featured ? "featured" : ""}">
      <span class="badge">${plan.featured ? "推荐" : "权益"}</span>
      <h3>${plan.name}</h3>
      <div class="price">${plan.price}<small> / 年</small></div>
      <p>${plan.desc}</p>
      <p>${plan.perks.join(" · ")}</p>
      <button class="${plan.featured ? "primary-btn" : "secondary-btn"}" data-plan="${plan.name}" type="button">${plan.featured ? "查看完整方案" : "开通" + plan.name}</button>
    </article>
  `).join("");
}

function renderReport() {
  const profile = getProfile();
  const eligible = state.recommendations.filter((item) => item.eligible);
  const counts = countRisks(state.volunteers);
  $("#reportProfile").textContent = `${profile.primary} + ${profile.secondary.join(" + ")} / ${profile.rank}位`;
  $("#reportScope").textContent = state.member ? `${eligible.length}个可报专业组，${state.recommendations.length - eligible.length}个不可报提醒` : "解锁完整方案后查看全部可报范围";
  $("#reportGradient").textContent = `冲 ${counts["冲"] || 0} · 稳 ${counts["稳"] || 0} · 保 ${counts["保"] || 0}`;
  $("#reportStatus").textContent = state.member ? "已解锁" : "部分锁定";
  $("#gradientChart").innerHTML = `
    <div class="rush"><strong>冲刺</strong><p>${counts["冲"] || 0} 个志愿</p></div>
    <div class="steady"><strong>稳妥</strong><p>${counts["稳"] || 0} 个志愿</p></div>
    <div class="safe"><strong>保底</strong><p>${counts["保"] || 0} 个志愿</p></div>
  `;
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
    showToast("导出志愿表是完整方案权益，请先解锁");
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

function refreshAll() {
  updateProfileSummary();
  createRecommendations();
  syncVolunteers();
  renderRecommendations();
  renderSchools();
  renderMajors();
  renderVolunteers();
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
    if (target.dataset.add) addVolunteer(target.dataset.add);
    if (target.dataset.schoolAdd) addVolunteer(target.dataset.schoolAdd);
    if (target.dataset.fav) showToast("已收藏，可在真实版本接入账号收藏夹");
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
    showToast("已模拟解锁完整方案");
  });
  $("#loginBtn").addEventListener("click", () => showToast("登录可接入手机号验证码和会员订单"));
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
  $("#schoolLevelFilter").addEventListener("change", renderSchools);
  $("#eligibilityFilter").addEventListener("change", renderSchools);
  $("#majorSearch").addEventListener("input", renderMajors);
  $("#openMajorDirectoryBtn").addEventListener("click", openMajorDirectory);
  $("#backToPlannerBtn").addEventListener("click", closeMajorDirectory);
  $("#majorDirectorySearch").addEventListener("input", renderMajorDirectory);
  $("#disciplineFilter").addEventListener("change", renderMajorDirectory);
  document.querySelectorAll(".nav a, .brand").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("directory-mode");
    });
  });
}

function init() {
  createRecommendations();
  state.volunteers = state.recommendations.filter((item) => item.eligible).slice(0, 3);
  renderPricing();
  refreshAll();
  initEvents();
}

init();
