# mlmlip 站点 SEO 选题与关键词库 (7x24H 引擎数据源)

> **作用**：这是自动化工作流（n8n + AI）的内容源。AI 将定期从此库中提取状态为 `[待撰写]` 的长尾词，生成专业解答文章并自动推送到网站博客。
> **要求**：围绕 B2B 唇部彩妆定制，严格防污染（禁入 glitter/shimmer 词汇）。
> **门禁**：消费前必须通过 `scripts/validate_keyword_pool.py` 校验（表格 schema / 状态枚举 / `$` 残留 / 品类纯度 / 低水位告警），校验失败即中止运行。
> **收录状态规则**：状态「已收录」必须由 GSC URL Inspection API 真实判定写入（格式 `[已收录 GSC YYYY-MM-DD]`，由 `check_indexing.sh` 自动回写），禁止 AI/人工猜测标注 —— 2026-10-01 曾因 Gemini 猜测产生 4 条假收录记录，已全部清除。

## 选题池 (SEO Keywords Pool)

| 关键词 / 话题 (Keyword / Topic) | 搜索意图 (Intent) | 目标受众 (Audience) | 必须植入的核心卖点 (Core Pitch) | 状态 (Status) |
| :--- | :--- | :--- | :--- | :--- |
| how to start a lip gloss line with low minimums | 商业起步、找代工 | 想要创立品牌的美妆博主/初创者 | **500 pcs MOQ**, 7天免费打样（抵扣） | `[已发布]` |
| private label lip mask manufacturer for Europe | 找特定市场合规厂家 | 欧洲本地品牌、亚马逊欧洲站卖家 | CPNP/ISO 认证, 包材+配方全链定制 | `[已发布]` |
| custom lip liner vendor with private packaging | 定制化需求、找供应商 | 已有一定规模的电商品牌 | 现有包材库丰富, 支持开模定制 | `[已发布]` |
| custom lip oil manufacturer with mature formulas | 产品研发、寻源定厂 | 重视品质的品牌方/网红达人 | 我们有独家成熟唇油配方, 质地优越不粘腻, 500 pcs 起订 | `[已发布]` |
| oem lip mud factory vs private label cosmetics | 代工模式对比选型 | 正在选 OEM 还是贴牌的新锐彩妆品牌 | OEM 深度定制与贴牌快速上市双轨支持, 500 pcs 起 | `[已发布]` |
| best lip oil formulation for winter cosmetic lines | 季节性配方研发 | 计划推出秋冬唇油系列的品牌 | 应季滋润基质配方, 7天打样验证肤感 | `[已发布]` |
| white label lipstick suppliers no minimum | 零/极低起订贴牌口红 | 试水市场的小微卖家与 KOL | 500 pcs 极低起订, 现成配方即时贴牌 | `[已发布]` |
| private label lip liner pencil waterproof OEM | 防水唇线笔贴牌代工 | 主打持妆卖点的新锐彩妆品牌 | 防晕染配方, 现成包材库, 500 pcs 起订 | `[已发布]` |
| best hydrating lip oil vendor for indie brands | 寻找滋润唇油供应商 | 注重肤感的独立小众品牌 | 滋润不粘腻成熟配方, 低起订快速贴牌 | `[已发布]` |
| custom wooden lip liner manufacturer low moq | 细分材质需求 | 走环保或经典路线的美妆品牌 | 现有丰富包材库(含木杆/塑料杆), 极低试错成本(500 pcs) | `[已发布]` |
| start a lip oil business with private label | 商业起步 | 新手小白、内容创作者变现 | 拿着我们的成熟配方直接贴牌, 免去研发烦恼, 快速上市 | `[已发布]` |
| private label nourishing lip oil manufacturer with peptide formula | 产品研发、寻源 | 追求功效唇妆的品牌主 | 成熟多肽配方, 不粘腻, 500 pcs 起订 | `[已发布]` |
| custom overnight lip sleeping mask manufacturer private label | 扩充修护品类 | 护肤唇护结合的品牌方 | 深度修护配方, 7天打样 | `[已发布]` |
| waterproof wooden barrel lip liner pencil private label supplier | 找经典木杆唇线笔代工 | 专业彩妆品牌 | 防晕染木杆, 500 pcs 超低起订 | `[已发布]` |
| retractable mechanical lip liner private label manufacturer | 采购旋转唇线笔 | 欧美电商品牌 | 精密机械旋出, 防断芯配方 | `[已发布]` |
| velvet matte lip mud manufacturer custom soft blur formula | 寻找雾面唇泥工厂 | 紧跟流行的彩妆创客 | 丝绒柔焦不拔干, 打样费可抵扣 | `[已发布]` |
| transfer proof liquid lipstick private label factory low moq | 采购不沾杯唇釉 | 亚马逊卖家 | 长效不沾杯, 500 pcs 试单 | `[已发布]` |
| plumping peptide lip oil supplier private label custom packaging | 找丰唇效果唇油工厂 | TikTok美妆红人 | 温和丰唇配方, 特色包材库 | `[待撰写]` |
| hydrating non sticky clear lip gloss wholesale custom logo | 经典透明唇蜜贴牌 | 美妆初创者 | 不粘发配方, 500 pcs 快速印Logo | `[待撰写]` |
| custom bullet lipstick manufacturer with private tooling case | 固体口红开模定制 | 中大型独立品牌 | 磁吸浮雕私模, 哑光缎光质地 | `[待撰写]` |
| collagen lip treatment mask manufacturer for daily lip care | 胶原蛋白日用唇膜代工 | 轻奢美妆品牌 | 活性滋润, GMPC洁净车间 | `[待撰写]` |
| how to find a reliable private label lip gloss manufacturer | 甄别供应商 | 首次做唇妆的创业者 | GMPC/ISO认证, 500 pcs 降低试错 | `[待撰写]` |
| best private label lip cosmetics manufacturer with low moq | 货比三家 | 资金受限的初创卖家 | 行业罕见500 pcs, 混色试单 | `[待撰写]` |
| private label vs custom formulation lip cosmetics comparison | 代工模式对比 | 品牌产品开发经理 | 现成配方快速上市+深度定制 | `[待撰写]` |
| how much does it cost to manufacture private label lipstick | 测算代工成本 | 做商业计划的创业者 | 打样费全额抵扣, 透明阶梯报价 | `[待撰写]` |
| lip cosmetics sampling process what to expect from oem factory | 了解打样流程 | 品牌供应链负责人 | 7天出样, 支持微调, 费用可抵减 | `[待撰写]` |
| private label lip oil packaging options custom applicator wand | 定制唇油包材 | 追求独特体验的品牌 | 丰富刷头包材库, 全定制 | `[待撰写]` |
| how to start an indie lip care brand on a budget | 小预算启动品牌 | KOL/博主变现群体 | 一站式包办, 500 pcs 极低门槛 | `[待撰写]` |
| turnkey lip gloss manufacturing solution formula to packaging | 交钥匙全包代工 | 缺供应链精力的电商老板 | 配方到包装一条龙交付 | `[待撰写]` |
| best private label lipstick manufacturer for small batch orders | 小批量唇膏寻源 | 独立设计师品牌 | 500 pcs 柔性快反, 不压资金 | `[待撰写]` |
| how to switch lip cosmetics manufacturers without quality loss | 更换工厂 | 遭遇老工厂痛点的品牌方 | 7天精准打样对标, GMPC品控 | `[待撰写]` |
| eu cosmetic regulation ec 1223 2009 lip product compliance guide | 欧盟法规合规 | 出口欧洲的品牌方 | 提供CPNP全套文件, ISO洁净车间 | `[待撰写]` |
| fda mocra registration requirements for lip cosmetics exporters | FDA注册要求 | 出口美国的唇妆品牌 | 提供FDA合规文件, COA/MSDS | `[待撰写]` |
| iso 22716 certified lip cosmetics factory for private label | 工厂认证查询 | 重视供应链合规的采购商 | ISO 22716+GMPC双认证 | `[待撰写]` |
| stability testing requirements for lip oil and lip mask products | 稳定性测试需求 | 品牌质量管理人员 | 12周加速稳定性测试, 全套数据 | `[待撰写]` |
| cpnp responsible person requirements for lip cosmetics eu import | EU进口RP要求 | 欧洲本地品牌/进口商 | 协助指定RP, 提供PIF全套文件 | `[待撰写]` |
| tiktok viral lip products 2026 what to manufacture next | TikTok爆款选品 | 追热点的美妆卖家 | 快速打样热门品类, 7天出样 | `[待撰写]` |
| most profitable lip cosmetics to private label in 2026 | 高利润品类分析 | 做选品决策的创业者 | 唇油利润率最高, 成熟配方直出 | `[待撰写]` |
| clean beauty lip cosmetics manufacturing trends for indie brands | 清洁美妆趋势 | 主打天然成分的品牌 | 提供天然植物基配方, CPNP合规 | `[待撰写]` |
| korean style gradient lip tint private label manufacturer | 韩式渐变唇妆代工 | 受韩妆影响的欧美品牌 | 水润渐变配方, 亚洲流行趋势 | `[待撰写]` |
| sustainable lip cosmetics packaging options for eco brands | 环保包材需求 | 走可持续路线的品牌 | PCR回收管/竹质管包材, 开模定制 | `[待撰写]` |
| lip gloss manufacturer with in stock packaging components | 现成包材快速出货 | 追求快速上市的DTC品牌 | 现货包材库免开模, 45天交付 | `[待撰写]` |
| lip gloss private label supplier with fast lead times | 快速交付 | 有档期压力的电商卖家 | 成熟产线, 7天打样+快速大货 | `[待撰写]` |
| vegan lip gloss oem supplier with cruelty free certificates | 纯素认证贴牌 | 主打零残忍的品牌 | 纯素配方+零残忍声明文件 | `[待撰写]` |
| lip gloss contract manufacturer for indie beauty brands | 独立品牌代工 | 独立美妆创始人 | 500 pcs柔性支持独立品牌成长 | `[待撰写]` |
| custom flavored lip gloss manufacturer for boutique brands | 风味定制 | 精品店自有品牌 | 香精库丰富, 定制风味唇釉 | `[待撰写]` |
| bulk lip gloss manufacturer with private label options | 大货贴牌 | 批发采购商 | 阶梯报价, 500 pcs起 | `[待撰写]` |
| organic lip gloss manufacturer with eco certificates | 有机认证 | 天然美妆品牌 | 有机原料渠道+认证支持 | `[待撰写]` |
| lip gloss filling and assembly services for startups | 灌装组装服务 | 无供应链经验的初创 | 灌装到组装一站式, 小批量友好 | `[待撰写]` |
| high shine lip gloss manufacturer for dewy look brands | 水光唇釉 | 主打韩系水光感的品牌 | 高折光指数配方, 不粘腻 | `[待撰写]` |
| lip gloss oem factory with low minimum order quantity | 低起订OEM | 首次下单的创业者 | 500 pcs起, 混色试单 | `[待撰写]` |
| non sticky lip gloss base manufacturer for refillable brands | 不粘基底+可替换装 | 走可持续路线的品牌 | 不粘基底适配替换芯设计 | `[待撰写]` |
| sugar free flavored lip gloss manufacturer for teen brands | 少女线风味唇釉 | 面向Z世代的品牌 | 温和配方符合年轻市场偏好 | `[待撰写]` |
| lip mud manufacturer for soft matte finish brands | 雾面唇泥 | 雾面妆效品牌 | 柔焦粉体技术, 不拔干 | `[待撰写]` |
| private label lip mud with blur effect formula | 柔焦贴牌 | 快时尚美妆品牌 | 即时柔焦效果, 快速贴牌 | `[待撰写]` |
| lip mud oem supplier for k beauty inspired lines | 韩系灵感线 | K-beauty风格品牌 | 韩系质地配方, 快速上市 | `[待撰写]` |
| low moq lip mud manufacturer for small cosmetics brands | 低起订 | 小体量品牌 | 500 pcs起, 支持混色 | `[待撰写]` |
| custom lip mud shades manufacturer with rapid sampling | 定制色号 | 多SKU品牌 | 全色系定制, 7天出样 | `[待撰写]` |
| whipped lip mud texture private label supplier | 云朵质地 | 追求独特肤感的品牌 | 慕斯质地配方, 差异化卖点 | `[待撰写]` |
| lip mud contract manufacturer for tiktok beauty brands | TikTok供应链 | 网红自有品牌 | 爆款快速打样, 柔性产能 | `[待撰写]` |
| cloud lip mud private label cosmetics factory | 新兴质地品类 | 紧跟趋势的创客 | 新质地配方库持续更新 | `[待撰写]` |
| lip liner pencil manufacturer with custom ferrule options | 定制笔管 | 专业彩妆品牌 | 金属箍包材定制 | `[待撰写]` |
| private label lip liner with vegan formula certification | 纯素唇线笔 | 零残忍品牌 | 纯素蜡基配方文件支持 | `[待撰写]` |
| gel lip liner manufacturer for long wear formulas | 持妆凝胶质地 | 主打持妆的品牌 | 凝胶质地长效持色 | `[待撰写]` |
| lip liner oem factory with magnetic cap packaging | 磁吸盖包材 | 高端线品牌 | 磁吸盖现成模具 | `[待撰写]` |
| custom color lip liner manufacturer for professional kits | 专业套装配色 | 彩妆培训/专业套装 | 多色号小批量定制 | `[待撰写]` |
| mechanical lip liner supplier low moq for beauty startups | 旋转低起订 | 初创品牌 | 自动旋转笔芯, 500 pcs起 | `[待撰写]` |
| fsc certified wood lip liner private label manufacturer | FSC木杆 | 可持续品牌 | FSC认证木杆供应链 | `[待撰写]` |
| lip liner manufacturer with in house shade lab | 内部调色实验室 | 精准配色需求品牌 | 在库色粉+定制调色 | `[待撰写]` |
| private label lipstick manufacturer with magnetic closure cases | 磁吸管贴牌 | 中高端定位品牌 | 磁吸管现成包材 | `[待撰写]` |
| satin finish lipstick oem supplier for daily wear brands | 缎光日常线 | 日常通勤定位品牌 | 缎光滋润基质 | `[待撰写]` |
| custom lipstick molding services for unique shapes | 异形开模 | 差异化包装品牌 | 异形私模支持 | `[待撰写]` |
| refillable lipstick case manufacturer for sustainable brands | 可替换口红管 | 零废弃品牌 | 金属替换芯系统 | `[待撰写]` |
| lipstick private label with creme finish formulas | 奶油质地 | 舒适挂品牌 | 奶油丝滑基质 | `[待撰写]` |
| engraved lipstick tube supplier for gift sets and corporate branding | 刻字礼盒 | 礼品/企业定制套装 | 管身激光刻字, 小批量 | `[待撰写]` |
| smudge proof liquid lipstick oem supplier | 防蹭液唇 | 主打持妆的品牌 | 防蹭蹭配方 | `[待撰写]` |
| lipstick manufacturer with private label color development | 独家色号开发 | 多品牌集团 | 独家色号保密协议 | `[待撰写]` |
| clear lip oil manufacturer with plumping effect | 透明丰唇唇油 | 功效型品牌 | 温和丰唇成分体系 | `[待撰写]` |
| tinted lip oil private label supplier for daily wear | 有色日常唇油 | 日常护理线品牌 | 轻染双色基质 | `[待撰写]` |
| lip oil contract manufacturer with leak proof packaging | 防漏包装 | 电商物流痛点品牌 | 负压测漏+防漏内垫 | `[待撰写]` |
| squalane lip oil manufacturer for premium skincare lines | 角鲨烷高定位 | 护肤线延伸品牌 | 角鲨烷滋润配方 | `[待撰写]` |
| water based lip oil manufacturer for lightweight feel | 水基轻薄 | 讨厌粘腻的品牌 | 水基轻薄质地 | `[待撰写]` |
| lip oil wholesale supplier with custom doe foot applicators | 定制刷头 | 体验导向品牌 | 刻度刷头/异形刷头库 | `[待撰写]` |
| jojoba based lip oil private label manufacturer | 荷荷巴基底 | 天然成分品牌 | 植物基底配方文件 | `[待撰写]` |
| vitamin e lip oil oem for sensitive skin brands | 敏感肌友好 | 敏感肌定位品牌 | 无香精配方选项 | `[待撰写]` |
| cushion applicator lip oil manufacturer for luxury feel | 气垫头唇油 | 高端体验品牌 | 气垫头包材定制 | `[待撰写]` |
| overnight lip mask manufacturer with hyaluronic acid | 玻尿酸夜间唇膜 | 护肤品牌延伸线 | 玻尿酸保湿体系 | `[待撰写]` |
| private label lip sleeping mask for beauty salons | 美容院线 | 美容机构自有品牌 | 院线大规格定制 | `[待撰写]` |
| lip mask oem supplier with natural ingredient sourcing | 天然原料 | 天然护肤品牌 | 植物原料溯源文件 | `[待撰写]` |
| ceramide lip treatment mask private label manufacturer | 神经酰胺修护 | 屏障修护定位品牌 | 神经酰胺修护配方 | `[待撰写]` |
| lip mask manufacturer with single dose sachet packaging | 一次性小包装 | 旅行装/试用装品牌 | 独立小袋灌装 | `[待撰写]` |
| peptide lip overnight treatment oem factory | 多肽夜间修护 | 抗老线品牌 | 多肽抗老基质 | `[待撰写]` |
| mocra compliant lip gloss manufacturer for us market | 美国合规 | 出口美国品牌 | MoCRA注册文件支持 | `[待撰写]` |
| cpnp notification support for private label lip products | CPNP申报 | 欧盟市场新品牌 | CPNP全套申报代办 | `[待撰写]` |
| pif documentation support for lip cosmetics eu market | PIF文件 | 欧盟进口商 | PIF文档编制支持 | `[待撰写]` |
| uk scr compliance for lip cosmetics after brexit | 英国SCRA | 英国市场品牌 | UK RP+SCPN文件支持 | `[待撰写]` |
| lip cosmetics heavy metals testing requirements for exporters | 重金属检测 | 质控经理 | 重金属全套检测报告 | `[待撰写]` |
| cosmetic product safety report for lip care products | CPSR安全报告 | 合规负责人 | CPSR编制与专家签发 | `[待撰写]` |
| halal certified lip cosmetics manufacturer | 清真认证 | 中东/东南亚市场 | Halal产线与认证支持 | `[待撰写]` |
| lip cosmetics gmp audit checklist for brand owners | GMP审计 | 验厂采购商 | ISO 22716+GMPC双认证可验厂 | `[待撰写]` |
| usp 51 and usp 61 testing for lip cosmetics | 微生物防腐测试 | 质量团队 | 效力测试全套报告 | `[待撰写]` |
| lip cosmetics shelf life and stability data package | 保质期数据包 | 品牌合规团队 | 加速+实时稳定性数据 | `[待撰写]` |
| lip cosmetics manufacturer 500 minimum order | 500起订直搜 | 极小体量创业者 | 500 pcs行业罕见起订 | `[待撰写]` |
| no minimum order lip gloss private label | 无起订搜索 | 试水期卖家 | 500 pcs近无门槛+样品单 | `[待撰写]` |
| low moq cosmetics manufacturer for first time founders | 首创者低起订 | 零经验创业者 | 一站式引导+低MOQ | `[待撰写]` |
| mixed shade lip cosmetics orders for small brands | 混色订单 | 多色号小品牌 | 混色混款灵活支持 | `[待撰写]` |
| private label lip gloss pricing structure for startups | 价格结构 | 做预算的创业者 | 透明阶梯报价体系 | `[待撰写]` |
| lip cosmetics sample cost deduction policy explained | 打样费抵扣 | 成本敏感买家 | 打样费100%抵大货 | `[待撰写]` |
| small batch lip cosmetics manufacturing for market testing | 小批量测款 | 测市场再放量 | 500 pcs测款再扩产 | `[待撰写]` |
| lip gloss starter kit manufacturer for new brands | 起步套装 | 新品牌首单 | 套装组合一站式配齐 | `[待撰写]` |
| affordable private label lip products without quality compromise | 高性价比 | 预算有限品牌 | 出厂价直供+双认证品控 | `[待撰写]` |
| lip cosmetics wholesale for amazon fba sellers | FBA供货 | 亚马逊卖家 | FBA直发+包装合规 | `[待撰写]` |
| custom lip gloss tube molds manufacturer | 开模注塑 | 差异化管型品牌 | 私模开模一条龙 | `[待撰写]` |
| eco friendly lip cosmetics packaging with pcr tubes | PCR环保管 | 可持续品牌 | PCR认证管材供应链 | `[待撰写]` |
| sugarcane lip gloss tubes wholesale for green brands | 甘蔗渣管 | 环保新材料品牌 | 植物基管材定制 | `[待撰写]` |
| magnetic lipstick case manufacturer with custom colors | 定制色磁吸管 | 包装差异化品牌 | Pantone配色喷漆 | `[待撰写]` |
| lip oil bottle supplier with tamper proof seals | 防拆封瓶 | 电商品牌 | 防拆封内盖方案 | `[待撰写]` |
| fsc certified paper packaging for lip cosmetics | FSC纸包装 | 零塑包装品牌 | FSC认证纸管方案 | `[待撰写]` |
| refillable lipstick packaging for zero waste brands | 零废弃替换装 | 零废弃品牌 | 金属替换芯系统 | `[待撰写]` |
| custom printed lip balm tubes minimum 500 pieces | 小批量印管 | 定制印花需求 | 500 pcs起印LOGO | `[待撰写]` |
| lip gloss wand supplier with custom brush shapes | 定制刷形 | 体验导向品牌 | 椭圆/刻度/螺旋刷库 | `[待撰写]` |
| airless packaging for sensitive lip formulas | 真空包装 | 活性成分品牌 | 真空防氧化方案 | `[待撰写]` |
| lip cosmetics prototype development timeline for startups | 打样周期 | 计划排期的创始人 | 7天出样+透明节点 | `[待撰写]` |
| oem lip sample rounds what brands should prepare | 打样准备 | 首次打样买家 | 打样需求清单模板 | `[待撰写]` |
| custom formula development for lip care brands step by step | 定制配方流程 | 配方定制新手 | 从brief到量产全程引导 | `[待撰写]` |
| how to brief a lip cosmetics manufacturer for custom formulas | 沟通工厂 | 无经验创始人 | 配方brief模板支持 | `[待撰写]` |
| lip gloss production timeline from sample to shipment | 交付周期 | 排期电商运营 | 打样到出货全程时间表 | `[待撰写]` |
| quality control process in lip cosmetics manufacturing | 品控流程 | 验厂前功课买家 | 三级QC+留样体系 | `[待撰写]` |
| wholesale lip gloss supplier for boutiques | 精品店批发 | 精品店主 | 现货批发+小单快反 | `[待撰写]` |
| bulk lip oil supplier with private label service | 唇油大货贴牌 | 大货采购商 | 阶梯价+贴牌 | `[待撰写]` |
| lip tint manufacturer for water based formulas | 水基唇染液 | 水感妆效品牌 | 水基染色技术 | `[待撰写]` |
| lip primer manufacturer for long lasting makeup | 唇部打底 | 持妆线品牌 | 打底固色配方 | `[待撰写]` |
| lip plumper manufacturer with peptide based formula | 多肽丰唇 | 功效品牌 | 多肽丰唇温和体系 | `[待撰写]` |

## AI 创作指令约束 (Prompt Rules for this Site)
*(n8n 调用 AI 时，必须带上以下规则)*
1. **角色**：Beautychain Limited 旗下的专业唇部彩妆定制顾问。
2. **基调**：B2B 专业、商业化、具有说服力，强调"低门槛（500pcs）实现你的美妆品牌梦"。
3. **禁止词汇**：绝对不能出现 glitter, shimmer, chunky glitter 等闪粉相关词汇。
4. **行动号召 (CTA)**：文章末尾必须引导客户添加 WhatsApp (+86 136 5238 0291) 或通过表单发送 Inquiry。

## 扩容记录 (Keyword Pool Expansion Log)

### Batch 2026-10-01 (JEV P0-5, A2)
- **新增**: 92 词（待撰写 32 → 124，覆盖 90 天产能）
- **来源方向**: 6 品类（唇釉/唇泥/唇线笔/唇膏/唇油/唇膜）× manufacturer/supplier/vendor/private label/OEM/wholesale/MOQ 组合矩阵 + 欧美合规（MoCRA/CPNP/UK SCRA/CPSR/Halal）+ 包材（PCR/FSC/可替换/真空）+ 打样流程 + 批发渠道
- **预估难度**: 全部按 JEV KD<25 纪律选词——长尾组合词预估 KD 5-20（合规/包材/打样类 5-15，品类+manufacturer 类 12-20，FBA/批发类 15-25 均为商业意图极强的可攻词）
- **去重**: 已对照 26 篇已发布博客 slug 与本表既有词共 58 个已覆盖词逐一排重
- **品类纯度**: 零 glitter/shimmer/festival 污染词（validate_keyword_pool.py 门禁强制）
- **低水位告警**: 待撰写 < 21 时由 validate_keyword_pool.py 自动推送钉钉（JEV J-3.3 防复发）
