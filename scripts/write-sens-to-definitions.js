

// NEXT:
//   hold on trigger words
//   handle long-loops (more indeterminism)
let sens = {
  '刺探': { simp: 'spy, spying', trad: 'spy, spying' },
  '榮光': { simp: '', trad: 'glory (as in Hong Kong anthem)' },
  '荣光': { simp: 'glory', trad: '' },
  '警暴': { simp: 'police violence', trad: 'police violence' },
  '示威': { simp: 'protest, demonstration', trad: 'protest, demonstration' },
  '白紙': { simp: '', trad: 'blank paper, seen as subversive in Hong Kong' },
  '白纸': { simp: 'blank paper, seen as subversive in Hong Kong', trad: '' },
  '武肺': { simp: 'Wuhan pneumonia (Covid)', trad: 'Wuhan pneumonia (Covid)' },
  '文亮': { simp: '(Li) Wenliang, deceased Wuhan doctor', trad: '(Li) Wenliang, deceased Wuhan doctor' },
  '自決': { simp: 'self-determination', trad: 'self-determination' },
  '勾結': { simp: '', trad: 'collusion' },
  '勾结': { simp: 'collusion', trad: '' },
  '之鋒': { simp: '', trad: '(Joshua Wong) Chi-fung, Hong Kong activist' },
  '之锋': { simp: '(Joshua Wong) Chi-fung, Hong Kong activist', trad: '' },
  '書記': { simp: '', trad: 'Secretary (Communist Party)' },
  '笔会': { simp: 'PEN (Independent Chinese PEN Center)', trad: '' },
  '孟浪': { simp: 'hasty, Meng Lang (modern Chinese poet)', trad: 'hasty, Meng Lang (modern Chinese poet)' },
  '热点': { simp: 'hot spot, headlines', trad: '' },
  '臉書': { simp: '', trad: 'Facebook' },
  '經濟': { simp: '', trad: 'economy' },
  '对抗': { simp: 'to oppose, to withstand', trad: '' },
  '政治': { simp: 'politics, political', trad: 'politics, political' },
  '教会': { simp: 'church', trad: '' },
  '天主': { simp: 'Catholic God', trad: 'Catholic God' },
  '教徒': { simp: 'religious disciple', trad: 'religious disciple' },
  '信徒': { simp: 'religious follower', trad: 'religious follower' },
  '宗教': { simp: 'religion', trad: 'religion' },
  '文化': { simp: 'culture', trad: 'culture' },
  '和諧': { simp: '', trad: 'harmony, harmonious' },
  '河蟹': { simp: 'river crab (harmony)', trad: 'river crab (harmony)' },
  '和谐': { simp: 'harmony, harmonious,', trad: '' },
  '專政': { simp: '', trad: 'dictatorship, authoritarianism' },
  '伦理': { simp: 'ethics', trad: '' },
  '倫理': { simp: '', trad: 'ethics' },
  '诚实': { simp: 'honest, honesty', trad: '' },
  '誠實': { simp: '', trad: 'honest, honesty' },
  '公正': { simp: 'just', trad: 'just' },
  '正義': { simp: '', trad: 'justice' },
  '野蛮': { simp: 'barbarous', trad: '' },
  '野蠻': { simp: '', trad: 'barbarous' },
  '皇帝': { simp: 'emperor', trad: 'emperor' },
  '傳教': { simp: '', trad: 'to preach (religion)' },
  '传教': { simp: 'to preach (religion)', trad: '' },
  '挑撥': { simp: '', trad: 'to incite disharmony' },
  '挑拨': { simp: 'to incite disharmony', trad: '' },
  '杯葛': { simp: 'to boycott', trad: 'to boycott' },
  '領土': { simp: '', trad: 'territory' },
  '领土': { simp: 'territory', trad: '' },
  '敏感': { simp: 'sensitive', trad: 'sensitive' },
  '市場': { simp: '', trad: 'marketplace, markets' },
  '占领': { simp: 'to occupy', trad: '' },
  '佔領': { simp: '', trad: 'to occupy' },
  '利润': { simp: 'profits', trad: '' },
  '盈利': { simp: 'profit, profits', trad: 'profit, profits' },
  '領域': { simp: '', trad: 'domain, territory' },
  '领域': { simp: 'domain, territory', trad: '' },
  '极限': { simp: 'limit', trad: '' },
  '極限': { simp: '', trad: 'limit' },
  '穩定': { simp: '', trad: 'steady, stable, stability' },
  '稳定': { simp: 'steady, stable, stability', trad: '' },
  '文明': { simp: 'civilized, civilization', trad: 'civilized, civilization' },
  '干預': { simp: '', trad: 'to meddle, to interfere' },
  '干预': { simp: 'to meddle, to interfere', trad: '' },
  '罢工': { simp: 'workers\' strike', trad: '' },
  '罷工': { simp: '', trad: 'workers\' strike' },
  '階級': { simp: '', trad: 'class' },
  '统治': { simp: 'to rule', trad: '' },
  '統治': { simp: '', trad: 'to rule' },
  '隱私': { simp: '', trad: 'secrets' },
  '隐私': { simp: 'privacy', trad: '' },
  '取締': { simp: '', trad: 'to suppress, to ban' },
  '取缔': { simp: 'to suppress, to ban', trad: '' },
  '操纵': { simp: 'to operate, to manipulate', trad: '' },
  '操縱': { simp: '', trad: 'to operate, to manipulate' },
  '系统': { simp: 'system', trad: '' },
  '體系': { simp: '', trad: 'system' },
  '体系': { simp: 'system', trad: '' },
  '操控': { simp: 'to control', trad: 'to control' },
  '欺負': { simp: '', trad: 'to bully' },
  '欺凌': { simp: 'to bully and humiliate', trad: 'to bully and humiliate' },
  '欺负': { simp: 'to bully', trad: '' },
  '領導': { simp: '', trad: 'to lead, leader' },
  '领导': { simp: 'to lead, leader', trad: '' },
  '主導': { simp: '', trad: 'leading' },
  '主导': { simp: 'leading', trad: '' },
  '领袖': { simp: 'leader', trad: '' },
  '領袖': { simp: '', trad: 'leader' },
  '馴化': { simp: '', trad: 'to tame' },
  '驯化': { simp: 'to tame', trad: '' },
  '血统': { simp: 'lineage', trad: '' },
  '血統': { simp: '', trad: 'lineage' },
  '憤慨': { simp: '', trad: 'to resent, anger' },
  '忠诚': { simp: 'devoted', trad: '' },
  '忠誠': { simp: '', trad: 'devoted' },
  '忠贞': { simp: 'loyal and dependable', trad: '' },
  '忠貞': { simp: '', trad: 'loyal and dependable' },
  '贡献': { simp: 'to contribute', trad: '' },
  '貢獻': { simp: '', trad: 'to contribute' },
  '效忠': { simp: 'to vow loyalty and devotion to', trad: 'to vow loyalty and devotion to' },
  '投票': { simp: 'to vote', trad: 'to vote' },
  '表决': { simp: 'to decide by vote', trad: '' },
  '公投': { simp: 'referendum', trad: 'referendum' },
  '宣誓': { simp: 'to swear an oath', trad: 'to swear an oath' },
  '崩潰': { simp: '', trad: 'to collapse, collapse' },
  '崩溃': { simp: 'to collapse, collapse', trad: '' },
  '打倒': { simp: 'to overthrow', trad: 'to overthrow' },
  '治安': { simp: 'law and order', trad: 'law and order' },
  '公安': { simp: 'Public Security (office)', trad: 'Public Security (office)' },
  '禮儀': { simp: '', trad: 'etiquette' },
  '礼仪': { simp: 'etiquette', trad: '' },
  '否決': { simp: '', trad: 'to veto' },
  '否决': { simp: 'to veto', trad: '' },
  '惡搞': { simp: '', trad: 'prank, spoof' },
  '獻花': { simp: '', trad: 'to offer flowers' },
  '暗访': { simp: 'secret inquiry, unannounced visit', trad: '' },
  '暗杀': { simp: 'to assassinate', trad: '' },
  '罢教': { simp: 'teachers\' strike', trad: '' },
  '罢课': { simp: 'students\' strike', trad: '' },
  '罢市': { simp: 'business strike', trad: '' },
  '百姓': { simp: 'common people', trad: 'common people' },
  '败类': { simp: 'scum, degenerate', trad: '' },
  '绑架': { simp: 'to kidnap', trad: '' },
  '爆炸': { simp: 'explosion', trad: 'explosion' },
  '被捕': { simp: 'arrested', trad: 'arrested' },
  '变态': { simp: 'to undergo metamorphosis, pervert', trad: '' },
  '标语': { simp: 'a written slogan', trad: '' },
  '兵变': { simp: 'mutiny', trad: '' },
  '冰毒': { simp: 'methamphetamine', trad: 'methamphetamine' },
  '部队': { simp: 'army, force', trad: '' },
  '部委': { simp: 'ministries and commissions', trad: 'ministries and commissions' },
  '采访': { simp: 'to interview, an interview', trad: '' },
  '惨案': { simp: 'massacre', trad: '' },
  '藏獨': { simp: '', trad: 'Tibetan separatist' },
  '藏独': { simp: 'Tibetan separatist', trad: '' },
  '藏文': { simp: 'Tibetan script', trad: 'Tibetan script' },
  '藏语': { simp: 'Tibetan language', trad: '' },
  '草根': { simp: 'grassroots', trad: 'grassroots' },
  '铲除': { simp: 'to root out, eradicate', trad: '' },
  '常委': { simp: 'standing committee member', trad: 'standing committee member' },
  '倡议': { simp: 'to suggest, a proposal', trad: '' },
  '城管': { simp: 'municipal bylaw enforcement officer', trad: 'municipal bylaw enforcement officer' },
  '澄清': { simp: 'to settle, to clarify', trad: 'to settle, to clarify' },
  '冲突': { simp: 'a conflict', trad: '' },
  '抽插': { simp: 'to slide in and out (sexual)', trad: 'to slide in and out (sexual)' },
  '出卖': { simp: 'betray', trad: '' },
  '出台': { simp: 'to officially launch, introduction', trad: '' },
  '出租': { simp: 'to rent', trad: 'to rent' },
  '传销': { simp: 'multi-level marketing', trad: '' },
  '打炮': { simp: 'to open fire, \'to fuck\'', trad: 'to open fire, \'to fuck\'' },
  '打砸': { simp: 'to smash up, thwarted', trad: 'to smash up, thwarted' },
  '代理': { simp: 'agent, proxy', trad: '' },
  '弹劾': { simp: 'to censure or impeach', trad: '' },
  '荡妇': { simp: 'slut', trad: '' },
  '倒台': { simp: 'to overthrow', trad: '' },
  '祷告': { simp: 'to pray, prayer', trad: '' },
  '悼念': { simp: 'to mourn', trad: 'to mourn' },
  '登基': { simp: 'to ascend the throne', trad: 'to ascend the throne' },
  '地震': { simp: 'earthquake', trad: 'earthquake' },
  '颠覆': { simp: 'to topple, subversion', trad: '' },
  '调查': { simp: 'investigation, survey', trad: '' },
  '调教': { simp: 'to instruct, to tune', trad: '' },
  '定性': { simp: 'to determine the nature', trad: 'to determine the nature' },
  '动乱': { simp: 'turmoil', trad: '' },
  '动态': { simp: 'movement', trad: '' },
  '毒杀': { simp: 'to kill by poisoning', trad: '' },
  '对付': { simp: 'to deal with', trad: '' },
  '对峙': { simp: 'to stand opposite, confrontation', trad: '' },
  '多維': { simp: '', trad: 'multi-dimensional' },
  '多维': { simp: 'multi-dimensional', trad: '' },
  '多黨': { simp: '', trad: 'multi-party' },
  '夺权': { simp: 'to seize power', trad: '' },
  '恶搞': { simp: 'spoof, prank', trad: '' },
  '二奶': { simp: 'mistress (lit. 2nd milk)', trad: 'mistress (lit. 2nd milk)' },
  '法会': { simp: 'religious assembly', trad: '' },
  '法轮': { simp: 'Falun (Gong), Wheel of Dharma', trad: '' },
  '法輪': { simp: '', trad: 'Falun (Gong), Wheel of Dharma' },
  '法治': { simp: 'rule of law', trad: 'rule of law' },
  '翻牆': { simp: '', trad: 'to climb over the (Great Fire)wall' },
  '翻墙': { simp: 'to climb over the (Great Fire)wall', trad: '' },
  '放纵': { simp: 'to indulge, indulgence', trad: '' },
  '分裂': { simp: 'to split up', trad: 'to split up' },
  '愤青': { simp: 'angry youth', trad: '' },
  '封杀': { simp: 'to shut out, ban', trad: '' },
  '富婆': { simp: 'wealthy woman', trad: 'wealthy woman' },
  '讣告': { simp: 'obituary', trad: '' },
  '妇联': { simp: 'women\'s league', trad: '' },
  '改朝': { simp: 'change of dynasties', trad: 'change of dynasties' },
  '肛交': { simp: 'anal intercourse', trad: 'anal intercourse' },
  '蛤蟆': { simp: 'toad, nickname of Jiang Zemin', trad: 'toad, nickname of Jiang Zemin' },
  '公诉': { simp: 'public charges', trad: '' },
  '广场': { simp: 'public square, plaza', trad: '' },
  '龟公': { simp: 'pimp', trad: '' },
  '海外': { simp: 'overseas', trad: 'overseas' },
  '汉奸': { simp: 'Chinese traitor', trad: '' },
  '号召': { simp: 'to rally, to mobilize', trad: '' },
  '合法': { simp: 'lawful, legal', trad: 'lawful, legal' },
  '护法': { simp: 'to protect the law', trad: '' },
  '怀念': { simp: 'to reminisce, to miss', trad: '' },
  '皇储': { simp: 'crown prince', trad: '' },
  '基督': { simp: '(Jesus) Christ', trad: '(Jesus) Christ' },
  '激情': { simp: 'passion, enthusiasm', trad: 'passion, enthusiasm' },
  '鸡奸': { simp: 'sodomy, anal rape (lit. chicken rape)', trad: '' },
  '集合': { simp: 'to gather', trad: 'to gather' },
  '集会': { simp: 'gathering, assembly', trad: '' },
  '集结': { simp: 'to assemble, to gather', trad: '' },
  '集体': { simp: 'collective, together, everyone', trad: '' },
  '计划': { simp: 'a plan, to plan', trad: '' },
  '纪念': { simp: 'to commemorate', trad: '' },
  '纪委': { simp: 'Discipline Inspection Commission', trad: '' },
  '加油': { simp: 'to add oil, refuel', trad: 'to add oil, refuel' },
  '驾崩': { simp: 'death of a king or emperor', trad: '' },
  '奸污': { simp: 'to rape', trad: '' },
  '贱货': { simp: 'bitch', trad: '' },
  '交警': { simp: 'traffic police', trad: 'traffic police' },
  '揭秘': { simp: 'to unmask secrets', trad: 'to unmask secrets' },
  '禁食': { simp: 'to fast, banned from eating', trad: 'to fast, banned from eating' },
  '精液': { simp: 'semen', trad: 'semen' },
  '决策': { simp: 'strategic decision, decision-making', trad: '' },
  '绝食': { simp: 'to go on a hunger strike', trad: '' },
  '军妓': { simp: 'military prostitute', trad: '' },
  '开苞': { simp: 'to deflower', trad: '' },
  '开枪': { simp: 'to open fire', trad: '' },
  '开斋': { simp: 'to resume a meat diet (Islam)', trad: '' },
  '抗议': { simp: 'to protest', trad: '' },
  '空难': { simp: 'air disaster', trad: '' },
  '空難': { simp: '', trad: 'air disaster' },
  '口号': { simp: '(chanted) slogan', trad: '' },
  '口交': { simp: 'oral sex', trad: 'oral sex' },
  '口號': { simp: '', trad: '(chanted) slogan' },
  '酷刑': { simp: 'cruelty, torture', trad: 'cruelty, torture' },
  '垮台': { simp: 'to fall from power, collapse', trad: '' },
  '蜡烛': { simp: 'candle', trad: '' },
  '雷管': { simp: 'detonator', trad: 'detonator' },
  '冷战': { simp: 'cold war', trad: '' },
  '联署': { simp: 'joint signatures', trad: '' },
  '领馆': { simp: 'consulate', trad: '' },
  '流氓': { simp: 'rogue', trad: 'rogue' },
  '聲援': { simp: '', trad: 'to show or voice support' },
  '露点': { simp: 'dew point, to show nipple', trad: '' },
  '律师': { simp: 'lawyer', trad: '' },
  '乱伦': { simp: 'incest', trad: '' },
  '轮奸': { simp: 'gang rape', trad: '' },
  '沦陷': { simp: 'to fall into enemy hands', trad: '' },
  '论功': { simp: 'to evaluate the merit of something', trad: '' },
  '论坛': { simp: 'forum', trad: '' },
  '裸露': { simp: 'naked, nudity', trad: 'naked, nudity' },
  '裸照': { simp: 'nude photograph', trad: 'nude photograph' },
  '吗啡': { simp: 'morphine', trad: '' },
  '缅怀': { simp: 'to commemorate, to fondly remember', trad: '' },
  '呐喊': { simp: 'shout, scream', trad: '' },
  '纳粹': { simp: 'Nazi', trad: '' },
  '奴役': { simp: 'to enslave', trad: 'to enslave' },
  '陪酒': { simp: 'to drink along, paid female drinking companions', trad: 'to drink along, paid female drinking companions' },
  '彭博': { simp: 'Bloomberg', trad: 'Bloomberg' },
  '评论': { simp: 'to comment on', trad: '' },
  '破鞋': { simp: 'broken shoes, slut', trad: 'broken shoes, slut' },
  '曝光': { simp: 'to expose', trad: 'to expose' },
  '谴责': { simp: 'to denounce, to condemn', trad: '' },
  '强奸': { simp: 'to rape', trad: '' },
  '清朝': { simp: 'Qing dynasty', trad: 'Qing dynasty' },
  '情妇': { simp: 'mistress', trad: '' },
  '情色': { simp: 'erotic', trad: 'erotic' },
  '群交': { simp: 'group sex', trad: 'group sex' },
  '热血': { simp: 'hot-blooded, passionate', trad: '' },
  '儒教': { simp: 'Confucianism', trad: 'Confucianism' },
  '乳交': { simp: 'mammary intercourse, \'tit-fuck\'', trad: 'mammary intercourse, \'tit-fuck\'' },
  '瑞典': { simp: 'Sweden', trad: 'Sweden' },
  '骚货': { simp: 'loose woman', trad: '' },
  '骚乱': { simp: 'disturbance, riot', trad: '' },
  '色狼': { simp: 'lecher', trad: 'lecher' },
  '色情': { simp: 'erotic, pornographic', trad: 'erotic, pornographic' },
  '色欲': { simp: 'sexual desire', trad: 'sexual desire' },
  '煽动': { simp: 'to incite', trad: '' },
  '上台': { simp: 'to rise to power, to go onstage', trad: 'to rise to power, to go onstage' },
  '少妇': { simp: 'a young married woman', trad: '' },
  '射精': { simp: 'ejaculation', trad: 'ejaculation' },
  '社论': { simp: 'editorial, social commentary', trad: '' },
  '呻吟': { simp: 'to moan', trad: 'to moan' },
  '审查': { simp: 'to examine, to censor', trad: '' },
  '审核': { simp: 'to audit', trad: '' },
  '审理': { simp: 'trial', trad: '' },
  '审判': { simp: 'a trial', trad: '' },
  '蕩婦': { simp: '', trad: 'slut' },
  '圣战': { simp: 'holy war or crusade', trad: '' },
  '使馆': { simp: 'consulate, embassy', trad: '' },
  '收盘': { simp: 'market close', trad: '' },
  '吮吸': { simp: 'to suck', trad: 'to suck' },
  '號召': { simp: '', trad: 'to rally, to mobilize' },
  '台獨': { simp: '', trad: 'Taiwan independence' },
  '台独': { simp: 'Taiwan independence', trad: '' },
  '台湾': { simp: 'Taiwan', trad: '' },
  '贪官': { simp: 'corrupt official', trad: '' },
  '谈判': { simp: 'to negotiate', trad: '' },
  '坦克': { simp: 'tank', trad: 'tank' },
  '讨伐': { simp: 'to suppress by armed force, crusade', trad: '' },
  '特警': { simp: 'special police, SWAT', trad: 'special police, SWAT' },
  '特务': { simp: 'special mission, spy', trad: '' },
  '统独': { simp: 'unification and independence', trad: '' },
  '统战': { simp: 'united front', trad: '' },
  '推翻': { simp: 'to overthrow', trad: 'to overthrow' },
  '推特': { simp: 'Twitter', trad: 'Twitter' },
  '吞精': { simp: 'to swallow semen', trad: 'to swallow semen' },
  '脱光': { simp: 'to strip naked', trad: '' },
  '外挂': { simp: 'to attach externally, cheating program', trad: '' },
  '外泄': { simp: 'to leak', trad: 'to leak' },
  '晚会': { simp: 'an evening party, a gala', trad: '' },
  '汪洋': { simp: 'vast ocean, PRC ex-vice premier Wang Yang', trad: 'vast ocean, PRC ex-vice premier Wang Yang' },
  '维权': { simp: 'to defend rights', trad: '' },
  '维稳': { simp: 'to maintain social stability', trad: '' },
  '味精': { simp: 'monosodium glutamate (MSG)', trad: 'monosodium glutamate (MSG)' },
  '文凭': { simp: 'diploma', trad: '' },
  '喜讯': { simp: 'good news', trad: '' },
  '洗牌': { simp: 'to shuffle cards, cabinet change', trad: 'to shuffle cards, cabinet change' },
  '下台': { simp: 'to go off stage, step down', trad: 'to go off stage, step down' },
  '下体': { simp: 'lower body, genitals', trad: '' },
  '下體': { simp: '', trad: 'lower body, genitals' },
  '献花': { simp: 'to offer flowers', trad: '' },
  '宪法': { simp: 'constitution, constitutional law', trad: '' },
  '宪章': { simp: 'charter', trad: '' },
  '宪政': { simp: 'constitutional government', trad: '' },
  '香港': { simp: 'Hong Kong', trad: 'Hong Kong' },
  '消魂': { simp: 'overwhelmed, ecstasy', trad: 'overwhelmed, ecstasy' },
  '邪恶': { simp: 'sinister', trad: '' },
  '邪教': { simp: 'evil cult', trad: 'evil cult' },
  '邪灵': { simp: 'evil spirits', trad: '' },
  '泄密': { simp: 'to leak secrets', trad: '' },
  '信访': { simp: 'suggestion or complaint letter, petition', trad: '' },
  '行动': { simp: 'operation, action', trad: '' },
  '性交': { simp: 'sexual intercourse', trad: 'sexual intercourse' },
  '性欲': { simp: 'sexual desire', trad: 'sexual desire' },
  '胸推': { simp: 'chest press, massage using breasts', trad: 'chest press, massage using breasts' },
  '胸罩': { simp: 'brassiere', trad: 'brassiere' },
  '血案': { simp: 'murder case', trad: 'murder case' },
  '血战': { simp: 'bloody battle', trad: '' },
  '讯息': { simp: 'information, message', trad: '' },
  '颜射': { simp: 'to ejaculate onto someone\'s face', trad: '' },
  '艳舞': { simp: 'erotic dance', trad: '' },
  '异议': { simp: 'objection', trad: '' },
  '阴部': { simp: 'genitalia', trad: '' },
  '阴蒂': { simp: 'clitoris', trad: '' },
  '阴户': { simp: 'vulva', trad: '' },
  '阴精': { simp: 'sex fluids', trad: '' },
  '阴谋': { simp: 'plot, conspiracy', trad: '' },
  '游行': { simp: 'march, parade, rally', trad: '' },
  '诱惑': { simp: 'to entice, temptation', trad: '' },
  '冤案': { simp: 'miscarriage of justice, injustice', trad: 'miscarriage of justice, injustice' },
  '杂种': { simp: 'hybrid', trad: '' },
  '早泄': { simp: 'premature ejaculation', trad: '' },
  '論功': { simp: '', trad: 'to evaluate the merit of something' },
  '炸弹': { simp: 'bomb', trad: '' },
  '炸藥': { simp: '', trad: 'explosives, dynamite' },
  '炸药': { simp: 'explosives, dynamite', trad: '' },
  '真相': { simp: 'the truth', trad: 'the truth' },
  '震撼': { simp: 'to shake, shocking', trad: 'to shake, shocking' },
  '挣扎': { simp: 'to struggle', trad: '' },
  '正念': { simp: 'correct mindfulness', trad: 'correct mindfulness' },
  '政权': { simp: 'regime', trad: '' },
  '证词': { simp: 'testimony', trad: '' },
  '支持': { simp: 'to support', trad: 'to support' },
  '珠江': { simp: 'Pearl River', trad: 'Pearl River' },
  '烛光': { simp: 'candle light', trad: '' },
  '變態': { simp: '', trad: 'to metamorphose, pervert' },
  '抓捕': { simp: 'to seize, to arrest', trad: 'to seize, to arrest' },
  '转化': { simp: 'to change', trad: '' },
  '走光': { simp: 'to accidentally expose oneself', trad: 'to accidentally expose oneself' },
  '走私': { simp: 'to smuggle', trad: 'to smuggle' },
  '作秀': { simp: 'to show off, to perform, to be a fake', trad: 'to show off, to perform, to be a fake' },
  '茉莉': { simp: 'jasmine', trad: 'jasmine' },
  '鎮壓': { simp: '', trad: 'suppression, repression, to crush' },
  '陰蒂': { simp: '', trad: 'clitoris' },
  '陰莖': { simp: '', trad: 'penis' },
  '收费': { simp: 'to charge a fee, toll', trad: '' },
  '阳萎': { simp: 'impotence', trad: '' },
  '脫光': { simp: 'to strip naked', trad: 'to strip naked' },
  '鸡婆': { simp: 'prostitute, busybody', trad: '' },
  '无码': { simp: 'uncensored, unpixelated', trad: '' },
  '吸毒': { simp: 'to take drugs', trad: 'to take drugs' },
  '赌博': { simp: 'to gamble, gambling', trad: '' },
  '艳照': { simp: 'nude picture', trad: '' },
  '全活': { simp: 'to save life, to rescue, full life, full service', trad: 'to save life, to rescue, full life, full service' },
  '正法': { simp: 'to execute (criminals), sad-dharma', trad: 'to execute (criminals), sad-dharma' },
  '性伴': { simp: 'sexual partner', trad: 'sexual partner' },
  '煽情': { simp: 'to stir emotions, sensational', trad: 'to stir emotions, sensational' },
  '偷情': { simp: 'an affair (sexual)', trad: 'an affair (sexual)' },
  '猎枪': { simp: 'hunting gun', trad: '' },
  '零售': { simp: 'retail', trad: 'retail' },
  '治愈': { simp: 'to cure, cure', trad: 'to cure, cure' },
  '精准': { simp: 'to be accurate, precision', trad: '' },
  '口爆': { simp: 'to ejaculate in someone\'s mouth', trad: 'to ejaculate in someone\'s mouth' },
  '咕噜': { simp: 'to softly grumble, rumbling (sound), Gollum', trad: '' },
  '聚会': { simp: 'party, get together', trad: '' },
  '宇宙': { simp: 'universe', trad: 'universe' },
  '駐港': { simp: '', trad: 'stationed in Hong Kong' },
  '罷教': { simp: '', trad: 'teachers\' strike' },
  '罷課': { simp: '', trad: 'students\' strike' },
  '罷市': { simp: '', trad: 'business strike' },
  '导弹': { simp: 'guided missile', trad: '' },
  '炮弹': { simp: 'artillery shell', trad: '' },
  '蔡锷': { simp: 'Cai E, 1910s revolutionary figure', trad: '' },
  '李鹏': { simp: 'Li Peng, PM during Tiananmen massacre', trad: '' },
  '纽时': { simp: 'New York Times', trad: '' },
  '双开': { simp: 'expelled from job and party membership', trad: '' },
  '双规': { simp: 'extralegal CCP member disciplinary process', trad: '' },
  '上证': { simp: 'Shanghai Stock Exchange', trad: '' },
  '政变': { simp: 'coup d\'état', trad: '' },
  '叶城': { simp: 'Kargilik County in west Xinjiang', trad: '' },
  '阿坝': { simp: 'Aba autonomous prefecture in NW Sichuan', trad: '' },
  '博讯': { simp: 'Boxun, US-based dissident news network', trad: '' },
  '韩正': { simp: 'Han Zheng, PRC Senior Vice Premier', trad: '' },
  '喀什': { simp: 'Kashgar prefecture in west Xinjiang', trad: '' },
  '军委': { simp: 'Central Military Commission', trad: '' },
  '胡佳': { simp: 'Hu Jia, PRC dissident rights activist', trad: '' },
  '江青': { simp: 'Jiang Qing, Mao\'s wife, Gang of 4 leader', trad: '' },
  '吴仪': { simp: 'Wu Yi, PRC vice-premier 2003-08', trad: '' },
  '郭泉': { simp: 'Guo Quan, PRC New People\'s Party founder', trad: '' },
  '紫阳': { simp: '(Zhao) Ziyang, of Tiananmen fame', trad: '' },
  '上访': { simp: 'to seek audience with officials, petition', trad: '' },
  '喇嘛': { simp: 'lama, Tibetan spiritual teacher', trad: 'lama, Tibetan spiritual teacher' },
  '光復': { simp: '', trad: 'to reclaim, to recover' },
  '港獨': { simp: '', trad: 'Hong Kong independence' },
  '林鄭': { simp: '', trad: '(Carrie) Lam Cheng, CE of HKSAR' },
  '元朗': { simp: '', trad: 'Yuen Long district in Hong Kong' },
  '蘋果': { simp: '', trad: 'apple, name of pro-democracy newspaper' },
  '智英': { simp: '', trad: '(Jimmy Lai) Chi-ying, Apple Daily founder' },
  '柱銘': { simp: '', trad: '(Martin Lee) Chu-ming, HK politician' },
  '恐襲': { simp: '', trad: 'terror attack' },
  '維護': { simp: '', trad: 'to defend' },
  '安全': { simp: 'safety, security', trad: 'safety, security' },
  '顛覆': { simp: '', trad: 'to topple' },
  '政權': { simp: '', trad: 'regime' },
  '恐怖': { simp: 'terrifying, terrorism', trad: 'terrifying, terrorism' },
  '境外': { simp: 'outside borders, foreign', trad: 'outside borders, foreign' },
  '規定': { simp: 'provisions, regulations', trad: 'provisions, regulations' },
  '管轄': { simp: '', trad: 'to administer' },
  '懲治': { simp: '', trad: 'to punish' },
  '組織': { simp: '', trad: 'to organize, organization' },
  '犯罪': { simp: 'to commit a crime', trad: 'to commit a crime' },
  '保障': { simp: 'to ensure', trad: 'to ensure' },
  '權益': { simp: '', trad: '(human) rights' },
  '依法': { simp: 'according to the law, law-abiding', trad: 'according to the law, law-abiding' },
  '保護': { simp: '', trad: 'to protect' },
  '定罪': { simp: 'to convict', trad: 'to convict' },
  '被告': { simp: 'defendant', trad: 'defendant' },
  '擁護': { simp: '', trad: 'to endorse, to protect' },
  '媒體': { simp: '', trad: 'media, esp. news media' },
  '宣傳': { simp: '', trad: 'to disseminate, propaganda' },
  '意識': { simp: '', trad: 'consciousness, an understanding' },
  '負責': { simp: '', trad: 'to be in charge of, responsibility' },
  '保安': { simp: 'to ensure public security', trad: 'to ensure public security' },
  '研判': { simp: 'to study and come to a conclusion', trad: 'to study and come to a conclusion' },
  '規劃': { simp: '', trad: 'to plan, a plan' },
  '協調': { simp: '', trad: 'to coordinate' },
  '干涉': { simp: 'to interfere', trad: 'to interfere' },
  '秘密': { simp: 'secret, a secret', trad: 'secret, a secret' },
  '任務': { simp: '', trad: 'a mission' },
  '審查': { simp: '', trad: 'to examine, to censor' },
  '核准': { simp: 'to authorize', trad: 'to authorize' },
  '策劃': { simp: '', trad: 'to plot, a strategy' },
  '破壞': { simp: '', trad: 'destruction' },
  '分離': { simp: '', trad: 'to separate' },
  '徒刑': { simp: 'prison sentence', trad: 'prison sentence' },
  '拘役': { simp: 'detention', trad: 'detention' },
  '煽動': { simp: '', trad: 'to incite' },
  '教唆': { simp: 'to instigate', trad: 'to instigate' },
  '干擾': { simp: '', trad: 'to disturb' },
  '阻撓': { simp: '', trad: 'to thwart, to obstruct' },
  '攻擊': { simp: '', trad: 'to attack' },
  '實現': { simp: '', trad: 'to achieve, to realize' },
  '主張': { simp: '', trad: 'to advocate' },
  '放毒': { simp: 'to poison', trad: 'to poison' },
  '放射': { simp: 'to radiate, radiating', trad: 'to radiate, radiating' },
  '傳染': { simp: '', trad: 'to infect' },
  '公私': { simp: 'public and private', trad: 'public and private' },
  '宣揚': { simp: '', trad: 'to proclaim' },
  '主義': { simp: '', trad: 'ideology, -isms' },
  '影響': { simp: '', trad: 'influence' },
  '指使': { simp: 'to incite, incitement', trad: 'to incite, incitement' },
  '支援': { simp: 'to provide assistance', trad: 'to provide assistance' },
  '憎恨': { simp: 'to detest, to hate, hatred', trad: 'to detest, to hate, hatred' },
  '投案': { simp: 'to surrender to authorities', trad: 'to surrender to authorities' },
  '如實': { simp: '', trad: 'according to the truth' },
  '查證': { simp: '', trad: 'to investigate' },
  '偵破': { simp: '', trad: 'to uncover in an investigation' },
  '出境': { simp: 'to leave a country or region', trad: 'to leave a country or region' },
  '偵查': { simp: '', trad: 'to detect, to investigate' },
  '保釋': { simp: '', trad: 'to release on bail, bail' },
  '公訴': { simp: '', trad: 'public charges, prosecution' },
  '相信': { simp: 'to be convinced, to believe', trad: 'to be convinced, to believe' },
  '搜查': { simp: 'to search (a person or place)', trad: 'to search (a person or place)' },
  '細則': { simp: '', trad: 'detailed rules and regulations' },
  '上訴': { simp: '', trad: 'to appeal' },
  '外交': { simp: 'foreign diplomacy', trad: 'foreign diplomacy' },
  '檢察': { simp: '', trad: 'to inspect, prosecutor' },
  '作證': { simp: '', trad: 'to bear witness' },
  '妨礙': { simp: '', trad: 'to hinder, to obstruct' },
  '保密': { simp: 'to keep confidential', trad: 'to keep confidential' },
  '請願': { simp: '', trad: 'to protest or petition' },
  '催淚': { simp: '', trad: 'tear-inducing (as in teargas)' },
  '謀劃': { simp: '', trad: 'to scheme' },
  '謠傳': { simp: '', trad: 'rumor' },
  '說謊': { simp: '', trad: 'to lie' },
  '撒謊': { simp: '', trad: 'to tell lies' }
};
function preload() {

  bell = new Tone.Player("res/chime.wav").toMaster();
  strk = new Tone.Player("res/strk.wav").toMaster();
  chars = loadJSON('chardata.json');
  defs = loadJSON('definitions.json');
  $('#about').modal({
    escapeClose: false,
    clickClose: false,
    showClose: false
  }); // disable auto close
}

function setup() {

  frameRate(30);
  textFont('Georgia');
  cnv = createCanvas(800, 600)
  noLoop();  // don't start yet
  console.log(Object.keys(defs));
  Object.keys(sens).forEach(chr => {
    let word = sens[chr];
    if (word.simp.length) {
      if (defs.simp.hasOwnProperty(chr) && defs.simp[chr] !== word.simp) {
        //console.log("overwrite[simp] " + defs.simp[chr] + " -> " + word.simp);
      }
      defs.simp[chr] = word.simp;
    }
    if (word.trad.length) {
      if (defs.trad.hasOwnProperty(chr) && defs.trad[chr] !== word.trad) {
        //console.log("overwrite[trad] " + defs.trad[chr] + " -> " + word.trad);
      }
      defs.trad[chr] = word.trad;
    }
  });
  let name = 'defs.json';
  console.log('writing ' + Object.keys(defs).length + ' defs to \'' + name + '\'');
  var dataStr = "data:text/json;charset=utf-8," + eefncodeURIComponent(JSON.stringify(defs));
  var dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download",name);
  dlAnchorElem.click();
  //fs.writeFileSync(name, JSON.stringify(defs));
}

function drawX() {

  if (!initalResize) {
    initalResize = true;
    updateSize();
    repairCanvas();
    window.onresize = updateSize;
    util = new CharUtils(chars, defs, Levenshtein);
    typer = new Autochar(util, onAction, onNewTarget);
    word = typer.word.literal;
    host = window.location.hostname;
    Autochar.WORD_TRIGGERS.forEach(t => {
      let sw = util.wordCache['simp'][t];
      let tw = util.wordCache['trad'][t];
      let sd = sw ? "'" + sw.definition + "'" : "";
      let td = tw ? "'" + tw.definition + "'" : "";
      console.log(t, "simp=" + sd + ' trad=' + td);
    });
    //return next();
  }

  if (paused) {
    console.log("paused");
    return;
  }

  if (triggered) {
    fill(255, 0, 0);
    rect(0, 0, width, height);
    txtcol = [255, 255, 255];
    drawWord(typer.word, true);
    triggered = false;
    paused = true;
    if (tid) {
      clearTimeout(tid);
      tid = 0;
    }
    setTimeout(() => {
      paused = false;
      next();
    }, 5000);
    return;
  }

  adjustColor();
  background(rgb[0], rgb[1], rgb[2]);
  drawWord(typer.word);
  showDefs && drawDefs();
  doPerf && logPerf();
  showNav && drawNav();
}

function drawDefs() {

  let def = typer.word.definition || '';
  let textSz = defSz * (util.lang === "trad" ? 1 : .8);
  let defAlpha = (timer / changeMs < .8) ?
    map(timer / changeMs, .8, 0, 0, 255) : 0;

  textSize(textSz);
  textAlign(CENTER);
  fill(txtcol[0], txtcol[1], txtcol[2], defAlpha);

  // uppercase if simplified Chinese
  text(util.lang === "trad" ? def :
    def.toUpperCase(), width / 2, 2.4 * defSz);

  if (charDefs) {
    let def0 = typer.word.characters[0].definition;
    let def1 = typer.word.characters[1].definition;
    textSize(textSz * .5);
    fill(txtcol[0], txtcol[1], txtcol[2]);
    text(util.lang === "trad" ? def0 : def0.toUpperCase(), width * .25, height - 2 * defSz);
    text(util.lang === "trad" ? def1 : def1.toUpperCase(), width * .75, height - 2 * defSz);
  }

  timer = changeMs - (millis() - changeTs);
}

function drawWord(word, complete) {

  // draw each character
  let ctx = this._renderer.drawingContext;
  for (let k = 0; k < word.characters.length; k++) {
    let chr = word.characters[k];

    // strange constants
    let xoff = k ? 20 * scayl + width : 140 * scayl;
    let yoff = -1220 * scayl;

    // draw each path of the character
    push();
    fill(txtcol);
    for (let j = 0; j < chr.paths.length; j++) {
      for (let i = 0; i < chr.paths[j].length; i++) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(.5, -.5); // mirror-vertically
        ctx.translate(xoff, yoff);
        if (complete || chr.parts[j] >= i) {
          ctx.scale(scayl, scayl);
          ctx.lineWidth = 5;
          ctx.fill(chr.paths[j][i]);
          ctx.stroke(chr.paths[j][i]);
        }
      }
    }
    pop();
  }
}

function isRetina() {
  let mq = window.matchMedia(RETINA_CHECK);
  return mq && mq.matches || window.devicePixelRatio > 1;
}

// computes size and position of canvas after resize (xo, yo, sw, sh)
// and size of en-translation font (defSz) and scaling of characters (scayl)
function updateSize() {

  w = window.innerWidth;
  h = window.innerHeight;
  if (w * aspectH > h * aspectW) { // wider
    sh = Math.round(h - border * 2);
    sw = Math.round(sh * (aspectW / aspectH));
  } else {                        // taller
    sw = Math.round(w - border * 2);
    sh = Math.round(sw * (aspectH / aspectW));
  }

  xo = (w - sw) / 2;
  yo = (h - sh) / 2;

  // retina/ high dpi
  if (isRetina()) {
    sw = sw * window.devicePixelRatio;
    sh = sh * window.devicePixelRatio;
  }

  // strange constants
  defSz = sh / 18;
  scayl = sw / 1150;

  // resize/position canvas
  resizeCanvas(sw, sh, true);

  cnv.position(xo, yo);
  //console.log(w + 'x' + h + ' -> ' + sw + 'x' + sh + ' scale=' + scayl);
}

function onNewTarget(nextWord, med, numStrokes, trigger) {

  //console.log('onTarget', millis(), util.lang, trigger, this.memory);
  triggered = trigger;
  strokeCount = numStrokes;
  strokeIdx = 0;
  let nSpeed = min(1, numStrokes / 12);
  strokeDelay = map(nSpeed, 0, 1, strokeDelayMax, strokeDelayMin);
  changeMs = strokeDelay * (strokeCount - 1);
  changeTs = millis();
  timer = changeMs;
  let chars = nextWord.characters;
  console.log((steps++) + ') ' + word + " -> " + nextWord.literal,
    med + util.lang.substring(0, 1), "'" + nextWord.definition
    + "' (" + chars[0].definition + ' :: ' + chars[1].definition + ')');
}

function onAction(nextWord) {

  if (nextWord) { // word complete
    defAlpha = 0;
    flashColors();
    playStroke(true);
    playBell();
    word = nextWord.literal;
    //triggered = false;
    //console.log('onAction: '+nextWord.literal);
  }
  else {
    playStroke();
  }
  strokeIdx++;
  /*   console.log('onAction: stroke' + (nextWord ? 0 : (strokeCount
       - strokeIdx)), Math.round((timer / changeMs) * 100) / 100); */
}

function next() {
  if (typer.step()) {
    tid = setTimeout(next, strokeDelay); // drawing
  }
  else {
    next(); // erasing
  }
}

function mouseClicked() {
  if ($('#p5_loading').length > 0) return;

  if ($('#about').is(':visible')) {
    $.modal.close();
  } else if (showNav && mouseX < 40 && mouseY < 40) {
    $('#about').modal();
  }
  if (firstRun) {
    loop(); // run sketch
    doSound = true;
    firstRun = false;
    $('#about').removeClass("beforeLoaded");
    $('#startButton').hide();
    $.modal.close();
  }
}

function toggleMute(event) {
  if (typeof event === 'boolean') {
    doSound = event ? 0 : 1;
  }
  else {
    doSound = doSound == 0 ? 1 : 0;
  }
  document.getElementById("mute").innerText =
    doSound == 0 ? 'unmute' : ' mute ';
}

function flashColors() {
  for (let i = 0; i < rgb.length; i++) {
    rgb[i] = triggered ? trgcol[i] : hitcol[i];
    txtcol[i] = whiteOnColor ? 0 : 255;
  }
}

function playBell() {

  if (doSound) {
    bell.playbackRate = random(.6, .9);
    bell.volume.value = random(.7, 1);
    bell.restart();
    if (triggered) {
      bell.playbackRate = random(.5, .7);
      bell.volume.value = 5;
      bell.start(200, 0, .1);
    }
  }
}

function playStroke(quiet) {

  if (doSound) {
    strk.playbackRate = random(.5, .7);
    strk.volume.value = quiet ? -24 : -12;
    strk.restart(undefined, 0, random(.05, .1));
  }
}

function keyReleased() {

  // no key commands on live site
  //if (host === 'rednoise.org') return;

  if (key == ' ') {
    if (tid) {
      clearTimeout(tid);
      tid = 0;
    }
    else {
      next();
    }
  }
  if (key == 'D') {
    showDefs = !showDefs;
    charDefs = !charDefs;
  }

  if (key == 'T') {
    console.log('Manual trigger');
    util.toggleLang();
    triggered = true;
    flashColors();
    playStroke(true);
    playBell();
    //triggered = false;
  }
}

// fixes a bug in p5.resizeCanvas
function repairCanvas() {

  // first hide the html nav button (use the p5 one)
  let canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = sw;
  canvas.height = sh;
  pixelDensity(1);
  if (isRetina()) {
    // display at original width for retina
    $('#defaultCanvas0').css("width", sw / window.devicePixelRatio + "px");
    $('#defaultCanvas0').css("height", sh / window.devicePixelRatio + "px");
  }
}

function adjustColor() {
  for (let i = 0; i < rgb.length; i++) {
    if (rgb[i] != bgcol[i]) rgb[i] = lerp(rgb[i], bgcol[i], lerpFactor);
    //if (whiteOnColor && txtcol[i] < 255) txtcol[i] += 10;
    if (!whiteOnColor && txtcol[i] > -1) txtcol[i] -= 10;
  }
}

function drawNav() {
  fill(200);
  noStroke();
  for (let i = 0; i < 3; i++) {
    rect(12, 15 + i * 7, 20, 4);
  }
}

function logPerf() {

  if (performance && performance.memory && steps - memt >= 20) {
    console.log('Perf: ' + round(frameRate()) + ' fps, ' +
      round(performance.memory.usedJSHeapSize / 1000000) +
      '/' + round(performance.memory.jsHeapSizeLimit / 1000000) + ' MB heap');
    memt = steps;
  }
}

let paused = false;
let doSound = false, doPerf = true, showDefs = true;
let charDefs = true, showNav = true, useTriggers = true;

let cnv, sw, sh, xo, yo, defSz, w, h, chars, defs;
let bell, conf, word, tid, strk, util, typer;
let timer = 0, strokeCount = 0, firstRun = true;
let scayl = 1, aspectW = 4.3, aspectH = 3, whiteOnColor = false;

let defAlpha = 255, strokeIdx = 0, changeMs, changeTs;
let strokeDelay, strokeDelayMax = 1300, strokeDelayMin = 300;
let steps = 1, triggered = 0, navOpen = false, host;
let initalResize = false, border = 10, memt = -15;
let lerpFactor = 0.05;

let bgcol = [255, 255, 255];
let hitcol = [76, 87, 96];
let txtcol = [0, 0, 0];
let trgcol = [150, 0, 0];
let rgb = [0, 0, 0];

const RETINA_CHECK = 'only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");'
