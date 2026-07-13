window.gameData = {
  categories: [
    {
      id: "classic_games",
      name: "經典遊戲與傳奇之作 (Classic Games & Legends)",
      icon: "🎮",
      desc: "回顧那些震撼靈魂的經典遊戲，見證你的遊戲歷程。"
    },
    {
      id: "gaming_lifestyle",
      name: "遊戲日常與平台成就 (Gaming Lifestyle & Platforms)",
      icon: "🕹️",
      desc: "日常遊玩、購買周邊與數位收藏，將遊戲信仰徹底融入生活。"
    },
    {
      id: "multiplayer_comp",
      name: "競技與多人連線 (Multiplayer & Competitive)",
      icon: "🏆",
      desc: "踏上線上競技場，在多人對戰中證明你的實力與反應。"
    },
    {
      id: "community_events",
      name: "同好社群與線下活動 (Community & Events)",
      icon: "🎪",
      desc: "參與遊戲社群、線下活動，燃燒熱情的玩家魂。"
    },
    {
      id: "hardcore_challenge",
      name: "硬核挑戰與究極玩家 (Hardcore Challenges)",
      icon: "👑",
      desc: "挑戰極限遊戲技巧，從白金獎盃到傳奇收藏，證實無悔的信仰。"
    }
  ],

  achievements: [

    // =====================================================
    // 1. 經典遊戲與傳奇之作 (30項，依難度 ★ 由低到高排列)
    // =====================================================

    // ── ★☆☆☆☆ ──
    {
      id: "classic_01",
      category: "classic_games",
      title: "入坑回憶 (Gateway Game)",
      description: "完整通關人生第一款入坑的遊戲（如《超級瑪利歐》、《寶可夢 紅/綠》、《暗黑破壞神》等）。",
      difficulty: "★☆☆☆☆",
      tips: "恭喜你！這是你打開遊戲世界大門的起點，每個人都有自己的第一款遊戲回憶。"
    },
    {
      id: "classic_06",
      category: "classic_games",
      title: "潛行狙擊傳奇 (Stealth & Sniper)",
      description: "通關《潛龍諜影》系列或《刺客教條》任一款，體驗潛行滲透的高智商快感。",
      difficulty: "★☆☆☆☆",
      tips: "用智慧與耐心取代蠻力，在陰影中完成任務的成就感無與倫比。"
    },
    {
      id: "classic_09",
      category: "classic_games",
      title: "任天堂明星大亂鬥 (Smash Bros)",
      description: "在《任天堂明星大亂鬥》系列中完成經典模式或收集過所有戰鬥員。",
      difficulty: "★☆☆☆☆",
      tips: "「Everyone is Here！」集結了遊戲史上最豪華的跨界陣容。"
    },
    {
      id: "classic_13",
      category: "classic_games",
      title: "寶可夢大師 (Pokémon Master)",
      description: "通關至少一款《寶可夢》正傳作品並打敗四大天王與冠軍。",
      difficulty: "★☆☆☆☆",
      tips: "「我決定就是你！」捕捉、戰鬥、收集——寶可夢是無數人的童年共同回憶。"
    },
    {
      id: "classic_17",
      category: "classic_games",
      title: "賽車飆速傳說 (Racing Legend)",
      description: "通關一款經典賽車遊戲（如《極速快感》、《跑車浪漫旅》、《瑪利歐賽車》）並完成一個完整的聯賽模式。",
      difficulty: "★☆☆☆☆",
      tips: "油門踩到底、過彎甩尾——賽車遊戲帶給你腎上腺素的極速狂飆。"
    },
    {
      id: "classic_20",
      category: "classic_games",
      title: "獨立遊戲鑑賞家 (Indie Gamer)",
      description: "通關至少3款知名的獨立遊戲（如《蔚藍》、《死亡細胞》、《星露谷物語》、《Hades》）。",
      difficulty: "★☆☆☆☆",
      tips: "獨立遊戲往往有著最純粹的創意與最真誠的情感，是遊戲藝術的瑰寶。"
    },
    {
      id: "classic_22",
      category: "classic_games",
      title: "光榮無雙割草 (Musou Fan)",
      description: "通關一款光榮無雙系列作品（如《真三國無雙》、《海賊無雙》），體驗一騎當千的快感。",
      difficulty: "★☆☆☆☆",
      tips: "「無雙」——一個人打一千個人的爽快割草體驗，壓力釋放的最佳選擇。"
    },
    {
      id: "classic_28",
      category: "classic_games",
      title: "視覺小說愛好者 (VN Reader)",
      description: "完整通關一款視覺小說並看完所有主線（如《命運石之門》、《逆轉裁判》、《冬戀》）。",
      difficulty: "★☆☆☆☆",
      tips: "文字與插圖編織的情感世界，視覺小說帶給你有別於一般遊戲的獨特感動。"
    },
    {
      id: "classic_30",
      category: "classic_games",
      title: "體育遊戲玩家 (Sports Gamer)",
      description: "通關或完成一整個賽季的運動遊戲（如《FIFA》、《NBA 2K》、《大聯盟棒球》）。",
      difficulty: "★☆☆☆☆",
      tips: "把現實的熱血競技搬上螢幕，體驗成為職業運動員的夢想模擬。"
    },

    // ── ★★☆☆☆ ──
    {
      id: "classic_04",
      category: "classic_games",
      title: "時空幻境：傳奇系列 (Chrono Trigger / Legend)",
      description: "通關《時空幻境》或至少一款經典JRPG（如《FF VII》、《Persona 5》）。",
      difficulty: "★★☆☆☆",
      tips: "JRPG是遊戲文化的瑰寶，回合制戰鬥與感人劇情結合的完美範例。"
    },
    {
      id: "classic_10",
      category: "classic_games",
      title: "惡魔城月下夜想曲 (Castlevania)",
      description: "通關《惡魔城：月下夜想曲》或一款類銀河戰士惡魔城遊戲（如《空洞騎士》）。",
      difficulty: "★★☆☆☆",
      tips: "地圖探索、隱藏通道與能力升級——這是類銀河城的黃金公式。"
    },
    {
      id: "classic_11",
      category: "classic_games",
      title: "經典射擊老兵 (FPS Veteran)",
      description: "通關《DOOM》或《Half-Life》或《BioShock》等經典FPS系列任一款。",
      difficulty: "★★☆☆☆",
      tips: "射擊遊戲的黃金年代，從惡魔屠殺到海底都市，每一款都是歷史。"
    },
    {
      id: "classic_14",
      category: "classic_games",
      title: "英雄無敵與策略大師 (HoMM / Strategy)",
      description: "通關一款經典策略遊戲（如《英雄無敵3》、《星海爭霸》或《魔獸爭霸3》戰役）。",
      difficulty: "★★☆☆☆",
      tips: "策略遊戲考驗你的全局觀與資源管理能力，每一步決策都可能改變戰局。"
    },
    {
      id: "classic_15",
      category: "classic_games",
      title: "動作冒險巔峰 (Action-Adventure Peak)",
      description: "通關《秘境探險》或《古墓奇兵》重啟系列任一款，感受電影級動作冒險。",
      difficulty: "★★☆☆☆",
      tips: "攀爬古蹟、解開謎題、在壯麗場景中體驗如電影般的冒險旅程。"
    },
    {
      id: "classic_16",
      category: "classic_games",
      title: "經典格鬥傳承 (Fighting Game)",
      description: "在格鬥遊戲（如《快打旋風》、《鐵拳》、《大亂鬥》）中打出一套連段或通關街機模式。",
      difficulty: "★★☆☆☆",
      tips: "「Hadouken！」格鬥遊戲是操作技巧與反應速度的終極測驗。"
    },
    {
      id: "classic_21",
      category: "classic_games",
      title: "沙盒創造者 (Sandbox Creator)",
      description: "在沙盒遊戲（如《Minecraft》、《Garry's Mod》）中創造出一個值得驕傲的作品。",
      difficulty: "★★☆☆☆",
      tips: "方塊世界裡只有想像力才是你的極限，從小屋到紅石電腦無所不能。"
    },
    {
      id: "classic_23",
      category: "classic_games",
      title: "模擬經營之樂 (Simulation)",
      description: "在模擬經營遊戲中（如《星露谷物語》、《動物森友會》、《模擬市民》）建立一個繁榮的社區。",
      difficulty: "★★☆☆☆",
      tips: "種田、釣魚、裝潢小屋——模擬遊戲帶給你遠離喧囂的寧靜滿足感。"
    },
    {
      id: "classic_24",
      category: "classic_games",
      title: "射擊爽Game狂熱 (Shooter Fanatic)",
      description: "通關一款爽快射擊遊戲（如《毀滅戰士：永恆》、《命運2》或《英雄射擊》）。",
      difficulty: "★★☆☆☆",
      tips: "不需要複雜的劇情，拿起武器轟炸敵人的純粹爽快感。"
    },
    {
      id: "classic_25",
      category: "classic_games",
      title: "RPG 百小時旅程 (100hr RPG)",
      description: "在任一款大型RPG（如《巫師3》、《上古卷軸》、《Persona 5》）中遊玩超過100小時。",
      difficulty: "★★☆☆☆",
      tips: "沉浸式的百小時冒險，代表你已經完全被這個世界所吸引。"
    },
    {
      id: "classic_27",
      category: "classic_games",
      title: "音樂節奏玩家 (Rhythm Master)",
      description: "在音樂節奏遊戲（如《太鼓達人》、《Cytus》、《Maimai》）中達到 B 評級以上並解鎖進階曲目。",
      difficulty: "★★☆☆☆",
      tips: "跟上節拍，讓手指隨著音樂飛舞——節奏遊戲是音樂與反應的完美結合。"
    },
    {
      id: "classic_29",
      category: "classic_games",
      title: "塔防戰略家 (Tower Defense)",
      description: "在塔防遊戲（如《植物大戰殭屍》、《Kingdom Rush》、《Bloons TD》）中完美通關一個高難度地圖。",
      difficulty: "★★☆☆☆",
      tips: "運用有限資源、合理規劃防線——塔防是策略思維最純粹的展現。"
    },

    // ── ★★★☆☆ ──
    {
      id: "classic_02",
      category: "classic_games",
      title: "薩爾達傳說：曠野之息 (Breath of the Wild)",
      description: "完成《薩爾達傳說：曠野之息》所有神獸任務並擊敗災厄蓋儂，體驗海拉魯大陸的究極冒險。",
      difficulty: "★★★☆☆",
      tips: "曠野之息是開放世界遊戲的標竿，細細品味每一個角落的風景與謎題。"
    },
    {
      id: "classic_03",
      category: "classic_games",
      title: "巫師3：狂獵 (The Witcher 3)",
      description: "完成《巫師3：狂獵》主線劇情並體驗至少一個DLC（石之心或血與酒）。",
      difficulty: "★★★☆☆",
      tips: "「winds howling...」體驗這個故事驅動的開放世界RPG巔峰之作。"
    },
    {
      id: "classic_07",
      category: "classic_games",
      title: "戰神之父 (God of War)",
      description: "通關《戰神》（2018）或《戰神：諸神黃昏》，體驗父子羈絆與北歐神話史詩。",
      difficulty: "★★★☆☆",
      tips: "「Boy...」奎爺從暴戾到溫柔的角色轉變，是遊戲敘事的典範。"
    },
    {
      id: "classic_08",
      category: "classic_games",
      title: "最後生還者 (The Last of Us)",
      description: "通關《最後生還者》系列任一款，感受末世生存與人性掙扎的極致敘事。",
      difficulty: "★★★☆☆",
      tips: "艾莉與喬爾的旅程是遊戲史上最動人的故事之一，準備好你的面紙。"
    },
    {
      id: "classic_12",
      category: "classic_games",
      title: "文明帝國征服者 (Civilization)",
      description: "在《文明帝國》系列中取得至少一種勝利方式（征服/科技/文化/宗教/分數）。",
      difficulty: "★★★☆☆",
      tips: "「再一回合就好...」然後天就亮了。這是策略遊戲最經典的毒藥。"
    },
    {
      id: "classic_18",
      category: "classic_games",
      title: "恐怖生存之夜 (Survival Horror)",
      description: "通關《惡靈古堡》或《沉默之丘》或《絕命精神病》系列任一款恐怖遊戲。",
      difficulty: "★★★☆☆",
      tips: "有限的彈藥、未知的恐懼——生存恐怖是考驗心理素質的極致類型。"
    },
    {
      id: "classic_19",
      category: "classic_games",
      title: "RTS 即時戰略高手 (RTS Commander)",
      description: "在即時戰略遊戲中（如《星海爭霸》、《世紀帝國》）打敗至少一個困難AI。",
      difficulty: "★★★☆☆",
      tips: "「伐伐伐伐木工」——RTS講究多工營運與微操，是智力與速度的雙重考驗。"
    },
    {
      id: "classic_26",
      category: "classic_games",
      title: "動作RPG迷宮 (Action RPG)",
      description: "通關一款動作RPG遊戲（如《暗黑破壞神》系列、《Path of Exile》、《神鬼寓言》），並解鎖角色的完整技能樹。",
      difficulty: "★★★☆☆",
      tips: "刷裝備、刷技能——動作RPG的數值成長與戰鬥系統是最純粹的遊戲快感之一。"
    },

    // ── ★★★★☆ ──
    {
      id: "classic_05",
      category: "classic_games",
      title: "黑暗靈魂洗禮 (Dark Souls)",
      description: "通關《黑暗靈魂》系列任一款作品，在無數次死亡中學習並挺過最後的Boss。",
      difficulty: "★★★★☆",
      tips: "「You Died」——這是每個玩家最熟悉的畫面。準備好死亡，然後從中學習。"
    },

    // =====================================================
    // 2. 遊戲日常與平台成就 (30項，依難度排列)
    // =====================================================

    // ── ★☆☆☆☆ ──
    {
      id: "lifestyle_01",
      category: "gaming_lifestyle",
      title: "爆肝通關夜 (Midnight Clear)",
      description: "為了急切想知道結局，熬夜一口氣通關一整款遊戲。",
      difficulty: "★☆☆☆☆",
      tips: "「再玩一小時就去睡...」然後天亮了，這是所有玩家都有過的爆肝體驗。"
    },
    {
      id: "lifestyle_11",
      category: "gaming_lifestyle",
      title: "數位版預購狂 (Pre-order Fanatic)",
      description: "預購過至少一款遊戲的數位版並在發售日當天準時開始遊玩。",
      difficulty: "★☆☆☆☆",
      tips: "倒數計時、預載、準時解鎖——發售日的儀式感是數位時代玩家的浪漫。"
    },
    {
      id: "lifestyle_14",
      category: "gaming_lifestyle",
      title: "遊戲斷捨離 (Wishlist Cleanup)",
      description: "從願望清單中刪除超過50款不再感興趣的遊戲，還願望清單一個清爽。",
      difficulty: "★☆☆☆☆",
      tips: "遊戲庫那麼大，時間那麼少，學會適時斷捨離，只把時間留給心頭好。"
    },
    {
      id: "lifestyle_15",
      category: "gaming_lifestyle",
      title: "遊戲健身環 (Ring Fitness)",
      description: "使用《健身環大冒險》或《Beat Saber》等體感遊戲進行運動，邊玩邊練。",
      difficulty: "★☆☆☆☆",
      tips: "遊戲化的運動體驗讓健身不再枯燥，邊冒險邊燃燒卡路里。"
    },
    {
      id: "lifestyle_16",
      category: "gaming_lifestyle",
      title: "遊戲梗脫口而出 (Meme Talk)",
      description: "在日常生活對話中不自覺地說出遊戲梗（例如：「Arrow to the knee」、「All your base」、「It's dangerous to go alone」）。",
      difficulty: "★☆☆☆☆",
      tips: "這說明遊戲文化已經深深烙印在你的潛意識中，成為你日常社交的一部分。"
    },
    {
      id: "lifestyle_17",
      category: "gaming_lifestyle",
      title: "遊戲主題桌面 (Gamer Setup)",
      description: "將手機或電腦桌面背景設為遊戲角色或場景，且亮出螢幕時毫不畏懼。",
      difficulty: "★☆☆☆☆",
      tips: "不畏世俗眼光，勇敢展現對遊戲的愛，這就是強大玩家自信的展現！"
    },
    {
      id: "lifestyle_19",
      category: "gaming_lifestyle",
      title: "模組愛好者 (Mod Enjoyer)",
      description: "安裝並使用過至少一款遊戲的玩家自製模組（Mod），體驗社群創作的力量。",
      difficulty: "★☆☆☆☆",
      tips: "從畫質強化到完全改版，模組讓一款遊戲的生命週期無限延長。"
    },
    {
      id: "lifestyle_23",
      category: "gaming_lifestyle",
      title: "雲端存檔依賴者 (Cloud Save)",
      description: "在Steam或主機上重度依賴雲端存檔功能，跨裝置無縫接續遊玩。",
      difficulty: "★☆☆☆☆",
      tips: "在PC玩到一半，躺床上用Steam Deck繼續——雲端存檔是現代玩家的福音。"
    },
    {
      id: "lifestyle_26",
      category: "gaming_lifestyle",
      title: "深夜獨奏 (Dark Room Gaming)",
      description: "在深夜關燈、戴上耳機，以完全沉浸式的狀態獨自體驗一款遊戲。",
      difficulty: "★☆☆☆☆",
      tips: "黑暗中的螢幕光芒、耳中的遊戲音效——這是屬於玩家最純粹的孤獨快樂。"
    },

    // ── ★★☆☆☆ ──
    {
      id: "lifestyle_02",
      category: "gaming_lifestyle",
      title: "訂閱制會員 (Subscription Gamer)",
      description: "訂閱Game Pass / PS Plus / Nintendo Switch Online等遊戲訂閱服務。",
      difficulty: "★★☆☆☆",
      tips: "付費支持正版遊戲，享受海量遊戲庫與線上服務的極致體驗。"
    },
    {
      id: "lifestyle_03",
      category: "gaming_lifestyle",
      title: "遊戲原聲帶無限循環 (OST Addict)",
      description: "手機歌單裡累積至少20首以上的遊戲BGM，且日常無限循環播放。",
      difficulty: "★★☆☆☆",
      tips: "無論是《巫師3》的湖畔民謠還是《尼爾》的悠揚歌聲，遊戲音樂是另一種感動。"
    },
    {
      id: "lifestyle_04",
      category: "gaming_lifestyle",
      title: "Steam 收藏庫富翁 (Steam Library)",
      description: "Steam或其他平台的遊戲庫中擁有超過100款以上的遊戲。",
      difficulty: "★★☆☆☆",
      tips: "「買遊戲本身就是一種遊戲。」看著數字增長的收藏庫，有種充實的幸福感。"
    },
    {
      id: "lifestyle_05",
      category: "gaming_lifestyle",
      title: "實體片收藏家 (Physical Discs)",
      description: "在家中擁有至少10片以上的實體遊戲光碟或卡匣。",
      difficulty: "★★☆☆☆",
      tips: "實體片的包裝藝術、說明書與光碟觸感是數位版無法取代的實體信仰。"
    },
    {
      id: "lifestyle_06",
      category: "gaming_lifestyle",
      title: "遊戲牆佈置 (Game Room Decor)",
      description: "房間裡掛有遊戲海報、角色掛軸或展示櫃擺滿遊戲公仔。",
      difficulty: "★★☆☆☆",
      tips: "將自己的生活空間打造成遊戲結界，一抬頭就能看見心愛的角色。"
    },
    {
      id: "lifestyle_07",
      category: "gaming_lifestyle",
      title: "限量版收藏家 (Collector's Edition)",
      description: "購買過遊戲的限量典藏版（Collector's Edition），包含公仔、畫冊或鐵盒。",
      difficulty: "★★☆☆☆",
      tips: "典藏版是對遊戲製作團隊最直接的愛意投遞，鐵盒與畫冊更是信仰的實體化。"
    },
    {
      id: "lifestyle_08",
      category: "gaming_lifestyle",
      title: "遊戲角色公仔收藏 (Figure Collector)",
      description: "購買並擁有人生第一尊遊戲角色PVC比例模型或黏土人。",
      difficulty: "★★☆☆☆",
      tips: "「手辦一面牆，北京一套房。」入坑手辦的世界，親眼欣賞精緻的塗裝與造型。"
    },
    {
      id: "lifestyle_09",
      category: "gaming_lifestyle",
      title: "電競外設信仰 (RGB Gamer)",
      description: "擁有RGB電競鍵盤、滑鼠或耳機，並為它們設定專屬遊戲主題燈效。",
      difficulty: "★★☆☆☆",
      tips: "RGB可以提升200%的遊戲實力（心理作用），炫彩燈效是電競玩家的身分象徵。"
    },
    {
      id: "lifestyle_12",
      category: "gaming_lifestyle",
      title: "跨平台遊玩者 (Cross-Platform)",
      description: "在至少兩個不同平台上遊玩過同一款遊戲（如PC+Switch、PS+PC）。",
      difficulty: "★★☆☆☆",
      tips: "真正的玩家不拘泥於平台，好遊戲在哪裡玩都一樣開心。"
    },
    {
      id: "lifestyle_13",
      category: "gaming_lifestyle",
      title: "遊戲馬拉松 (Game Marathon)",
      description: "連續遊玩同一款遊戲超過8小時以上，體驗極致的沉浸式馬拉松。",
      difficulty: "★★☆☆☆",
      tips: "從白天玩到黑夜，從精神飽滿玩到眼神呆滯——真正的硬派馬拉松。"
    },
    {
      id: "lifestyle_18",
      category: "gaming_lifestyle",
      title: "實況觀看者 (Stream Viewer)",
      description: "在Twitch或YouTube Gaming上觀看遊戲實況累計超過100小時。",
      difficulty: "★★☆☆☆",
      tips: "看別人玩遊戲也是一種樂趣，聊天室的同好互動讓觀看體驗更加有趣。"
    },
    {
      id: "lifestyle_20",
      category: "gaming_lifestyle",
      title: "成就獵人 (Achievement Hunter)",
      description: "在Steam或PlayStation上解鎖超過100個獎盃/成就（可跨多款遊戲累計）。",
      difficulty: "★★☆☆☆",
      tips: "成就系統是玩家足跡的記錄者，每一枚獎盃背後都有一段難忘的遊戲回憶。"
    },
    {
      id: "lifestyle_21",
      category: "gaming_lifestyle",
      title: "懷舊遊戲機收藏 (Retro Console)",
      description: "擁有一台懷舊遊戲主機或復刻版主機（如FC Mini、PS Classic、Mega Drive Mini）。",
      difficulty: "★★☆☆☆",
      tips: "按下卡匣、看著像素畫面——懷舊主機帶你重溫童年的純粹遊戲時光。"
    },
    {
      id: "lifestyle_22",
      category: "gaming_lifestyle",
      title: "遊戲實況初體驗 (Streaming Debut)",
      description: "開過至少一次遊戲實況，無論是直播通關還是與觀眾互動。",
      difficulty: "★★☆☆☆",
      tips: "「大家好我是...」把自己的遊戲過程分享給世界，與觀眾一起享受遊戲。"
    },
    {
      id: "lifestyle_24",
      category: "gaming_lifestyle",
      title: "遊戲慈善馬拉松 (Charity Stream Viewer)",
      description: "參與或觀看過遊戲相關的慈善活動（如Games Done Quick、慈善實況）。",
      difficulty: "★★☆☆☆",
      tips: "遊戲社群用熱愛為世界帶來正能量，每一分捐款都是玩家的溫暖。"
    },
    {
      id: "lifestyle_25",
      category: "gaming_lifestyle",
      title: "手遊課長 (Gacha Whale)",
      description: "在一款手遊中課金（付費）超過新台幣3000元以上，獲得心儀的角色或裝備。",
      difficulty: "★★☆☆☆",
      tips: "「課金一時爽，一直課金一直爽。」為心愛的角色充值，是手遊玩家的浪漫。"
    },
    {
      id: "lifestyle_27",
      category: "gaming_lifestyle",
      title: "全平台制霸 (Multi-Platform Owner)",
      description: "同時擁有PC、家用主機（PS/Xbox）、掌機（Switch）三種不同平台的遊戲裝置。",
      difficulty: "★★☆☆☆",
      tips: "不拘泥於任何一個平台，跟著遊戲走而不是跟著硬體走，這才是真正的玩家哲學。"
    },
    {
      id: "lifestyle_28",
      category: "gaming_lifestyle",
      title: "遊戲歷史研究 (Gaming Historian)",
      description: "看過遊戲發展史相關紀錄片（如Netflix《High Score》）或閱讀過遊戲史書籍。",
      difficulty: "★★☆☆☆",
      tips: "了解遊戲從《Pong》到《曠野之息》的演進史，讓你對遊戲有更深的熱愛與敬意。"
    },

    // ── ★★★☆☆ ──
    {
      id: "lifestyle_10",
      category: "gaming_lifestyle",
      title: "遊戲主題房間 (Gamer Cave)",
      description: "房間內有專用電競桌、雙螢幕、人體工學椅與環繞音響或高端耳機系統。",
      difficulty: "★★★☆☆",
      tips: "在自己的遊戲角落裡被心愛的周邊環繞，戴上耳機沉浸遊戲，是人生至高享受。"
    },
    {
      id: "lifestyle_29",
      category: "gaming_lifestyle",
      title: "電競週邊全套升級 (Battle Station Max)",
      description: "將顯示器、鍵盤、滑鼠、耳機與椅子全部升級為電競專用等級，打造夢想中的完整戰鬥配置。",
      difficulty: "★★★☆☆",
      tips: "好的設備帶來好的體驗，當你的周邊配置完整時，遊戲實力也能跟著提升！"
    },
    {
      id: "lifestyle_30",
      category: "gaming_lifestyle",
      title: "三平台訂閱全包 (Triple Subscription)",
      description: "同時訂閱 Game Pass Ultimate、PS Plus 以及 Nintendo Switch Online，享受三大平台的全方位遊戲服務。",
      difficulty: "★★★☆☆",
      tips: "三平台全訂閱，意味著你對遊戲的投入已超越一般玩家，是名副其實的硬核訂閱者。"
    },

    // =====================================================
    // 3. 競技與多人連線 (25項，依難度排列)
    // =====================================================

    // ── ★☆☆☆☆ ──
    {
      id: "multiplayer_01",
      category: "multiplayer_comp",
      title: "線上對戰初體驗 (Online First Blood)",
      description: "在一款遊戲中進行了人生第一場線上多人對戰。",
      difficulty: "★☆☆☆☆",
      tips: "從單機走向線上，面對真實的對手，才是真正的遊戲挑戰開始。"
    },
    {
      id: "multiplayer_08",
      category: "multiplayer_comp",
      title: "電競賽事觀看者 (Esports Fan)",
      description: "觀看過至少一場大型電競賽事直播（如《英雄聯盟》世界賽、《CS:GO》Major）。",
      difficulty: "★☆☆☆☆",
      tips: "在主舞台上為你支持的隊伍吶喊，感受電子競技的熱血與榮耀。"
    },
    {
      id: "multiplayer_19",
      category: "multiplayer_comp",
      title: "休閒對戰愛好者 (Casual Player)",
      description: "在休閒對戰模式中享受遊戲的樂趣，不拘泥於勝負與牌位。",
      difficulty: "★☆☆☆☆",
      tips: "不是每個人都需要當職業選手，享受遊戲過程中的快樂才是初心。"
    },

    // ── ★★☆☆☆ ──
    {
      id: "multiplayer_06",
      category: "multiplayer_comp",
      title: "FPS 爆頭專家 (Headshot King)",
      description: "在FPS遊戲（如《CS:GO》、《Valorant》、《Call of Duty》）中用狙擊槍或手槍取得爆頭擊殺。",
      difficulty: "★★☆☆☆",
      tips: "「One shot, one kill。」爆頭瞬間的滿足感是FPS遊戲最純粹的快樂。"
    },
    {
      id: "multiplayer_07",
      category: "multiplayer_comp",
      title: "合作通關夥伴 (Co-op Buddy)",
      description: "與朋友合作通關一款多人合作遊戲（如《L4D2》、《雙人成行》、《It Takes Two》）。",
      difficulty: "★★☆☆☆",
      tips: "「友情的力量！」與朋友一起過關斬將的快樂，是單機無法比擬的。"
    },
    {
      id: "multiplayer_09",
      category: "multiplayer_comp",
      title: "線下LAN Party (LAN Party)",
      description: "參加過線下LAN Party或朋友聚會的多人連線對戰。",
      difficulty: "★★☆☆☆",
      tips: "帶著你的主機或筆電，與朋友在同一空間裡連線對戰，是遊戲社交的極致體驗。"
    },
    {
      id: "multiplayer_10",
      category: "multiplayer_comp",
      title: "語音開mic溝通 (Voice Comm)",
      description: "在多人遊戲中開啟語音通話並與隊友進行有效的溝通與配合。",
      difficulty: "★★☆☆☆",
      tips: "「GG」、「隊友救我」——語音是團隊作戰不可或缺的橋樑。"
    },
    {
      id: "multiplayer_13",
      category: "multiplayer_comp",
      title: "MMO 公會活躍者 (Guild Member)",
      description: "在MMORPG中加入一個活躍的公會/戰隊，並積極參與公會活動。",
      difficulty: "★★☆☆☆",
      tips: "公會是MMO的靈魂，與一群志同道合的玩家一起冒險，才是線上遊戲的真諦。"
    },
    {
      id: "multiplayer_16",
      category: "multiplayer_comp",
      title: "競技遊戲全角色精通 (All-Rounder)",
      description: "在競技遊戲中使用過超過半數的角色並取得至少一場勝利。",
      difficulty: "★★☆☆☆",
      tips: "博通各角、不拘泥於主流——真正的全能型玩家。"
    },
    {
      id: "multiplayer_17",
      category: "multiplayer_comp",
      title: "好友組隊常客 (Squad Regular)",
      description: "擁有固定的遊戲好友組隊，每週至少一起連線遊玩一次。",
      difficulty: "★★☆☆☆",
      tips: "固定的遊戲夥伴是線上遊戲最珍貴的資產，一起歡笑一起戰鬥。"
    },
    {
      id: "multiplayer_20",
      category: "multiplayer_comp",
      title: "跨平台對戰 (Cross-Play Fighter)",
      description: "在支援跨平台對戰的遊戲中與不同平台的玩家同場競技。",
      difficulty: "★★☆☆☆",
      tips: "PC、主機、手機同場競技——跨平台讓遊戲不再有平台的圍牆。"
    },
    {
      id: "multiplayer_23",
      category: "multiplayer_comp",
      title: "公會/隊伍創立者 (Guild Founder)",
      description: "在多人遊戲中自己創立並管理一個公會、戰隊或俱樂部，持續運營至少一個月以上。",
      difficulty: "★★☆☆☆",
      tips: "領袖不只要會打，還要能凝聚人心——創立並維持一個活躍的隊伍是真正的挑戰。"
    },
    {
      id: "multiplayer_24",
      category: "multiplayer_comp",
      title: "賽季通行證制霸 (Battle Pass Maxer)",
      description: "在任一款遊戲中將一個賽季的通行證（Battle Pass）完整升至最高等級並解鎖所有獎勵。",
      difficulty: "★★☆☆☆",
      tips: "每天登入、完成每日挑戰——通行證是現代遊戲最有效的持續遊玩動力來源。"
    },
    {
      id: "multiplayer_25",
      category: "multiplayer_comp",
      title: "跨時區連線 (Global Gamer)",
      description: "與身在不同國家或時區的玩家線上組隊或對戰，突破地理限制享受全球遊戲社群。",
      difficulty: "★★☆☆☆",
      tips: "語言不同、Ping不同，但遊戲的熱情是相通的——跨越國界的連線充滿獨特的魅力。"
    },

    // ── ★★★☆☆ ──
    {
      id: "multiplayer_02",
      category: "multiplayer_comp",
      title: "大逃殺吃雞 (Battle Royale Win)",
      description: "在《PUBG》、《Fortnite》或《Apex Legends》等大逃殺遊戲中取得第一名（吃雞/冠軍）。",
      difficulty: "★★★☆☆",
      tips: "「大吉大利，今晚吃雞！」在99個對手中存活到最後，需要實力與運氣的完美結合。"
    },
    {
      id: "multiplayer_03",
      category: "multiplayer_comp",
      title: "競技牌位突破 (Ranked Climber)",
      description: "在競技遊戲（如《英雄聯盟》、《鬥陣特攻》、《Valorant》）中突破金牌/白銀段位。",
      difficulty: "★★★☆☆",
      tips: "積分是實力的證明，每一階段的突破都是技術與心智的雙重成長。"
    },
    {
      id: "multiplayer_04",
      category: "multiplayer_comp",
      title: "MMORPG副本攻略 (Raid Veteran)",
      description: "在MMORPG（如《魔獸世界》、《FF14》、《原神》）中完成一個多人副本或週王挑戰。",
      difficulty: "★★★☆☆",
      tips: "與隊友配合、熟悉機制、在滅團中學習——副本是MMO最迷人的團隊體驗。"
    },
    {
      id: "multiplayer_05",
      category: "multiplayer_comp",
      title: "格鬥遊戲連段實戰 (Combo Master)",
      description: "在格鬥遊戲中對真人對手成功打出一套完整連段，感受實戰的爽快感。",
      difficulty: "★★★☆☆",
      tips: "練習房的連段和實戰是完全不同的世界，能在對戰中打出連段才是真實力。"
    },
    {
      id: "multiplayer_11",
      category: "multiplayer_comp",
      title: "百勝俱樂部 (100 Wins Club)",
      description: "在任一競技遊戲中累計取得100場以上的線上對戰勝利。",
      difficulty: "★★★☆☆",
      tips: "百勝是實力與耐力的雙重證明，你已經在競技場上站穩了腳步。"
    },
    {
      id: "multiplayer_12",
      category: "multiplayer_comp",
      title: "社群錦標賽參與 (Tournament Participant)",
      description: "參加過社群或業餘級別的遊戲錦標賽（不論線上或線下，不論名次）。",
      difficulty: "★★★☆☆",
      tips: "站上比賽舞台、面對壓力、與最強的對手交鋒——這就是競技的意義。"
    },
    {
      id: "multiplayer_14",
      category: "multiplayer_comp",
      title: "全場最佳 (Match MVP)",
      description: "在《鬥陣特攻》、《Valorant》或《APEX》等團隊FPS中獲得單場最佳玩家（MVP）評價。",
      difficulty: "★★★☆☆",
      tips: "全場最佳的榮耀，證明你在這一場中發揮了超越平均的實力。"
    },
    {
      id: "multiplayer_21",
      category: "multiplayer_comp",
      title: "好友排行榜第一 (Friend Leaderboard #1)",
      description: "在任一遊戲的好友排行榜（成就數、遊玩時數、積分）中超越所有好友，登頂第一。",
      difficulty: "★★★☆☆",
      tips: "朋友之間的良性競爭是最好的成長動力，登頂好友榜的成就感不輸真正的排名。"
    },
    {
      id: "multiplayer_22",
      category: "multiplayer_comp",
      title: "逆風翻盤 (Comeback King)",
      description: "在幾乎必輸的劣勢局（血量極低、分數落後、人數劣勢）中完成大逆轉，取得最終勝利。",
      difficulty: "★★★☆☆",
      tips: "永不放棄才是玩家最重要的精神，逆境中的翻盤讓你體驗遊戲最熱血的瞬間。"
    },

    // ── ★★★★☆ ──
    {
      id: "multiplayer_15",
      category: "multiplayer_comp",
      title: "大逃殺連勝 (BR Streak)",
      description: "在大逃殺遊戲中連續兩場以上取得勝利，展現統治級的實力。",
      difficulty: "★★★★☆",
      tips: "連續吃雞需要極高的穩定性與抗壓能力，是高手與凡人的分野。"
    },

    // ── ★★★★★ ──
    {
      id: "multiplayer_18",
      category: "multiplayer_comp",
      title: "競技場傳奇段位 (Legend Rank)",
      description: "在任一款競技遊戲中達到最高段位/牌位（如《Apex》Predator、《英雄聯盟》大師/超凡大師）。",
      difficulty: "★★★★★",
      tips: "站在金字塔頂端的玩家！你是萬中選一的競技菁英。"
    },

    // =====================================================
    // 4. 同好社群與線下活動 (25項，依難度排列)
    // =====================================================

    // ── ★☆☆☆☆ ──
    {
      id: "community_01",
      category: "community_events",
      title: "遊戲展覽參戰 (Convention Goer)",
      description: "親自參加過遊戲展覽（如台北國際電玩展、東京電玩展、Gamescom）。",
      difficulty: "★☆☆☆☆",
      tips: "體驗萬頭攢動的熱烈氛圍，在會場試玩最新遊戲、購買限定周邊。"
    },
    {
      id: "community_03",
      category: "community_events",
      title: "遊戲同好社群加入 (Gamer Community)",
      description: "加入遊戲相關的Discord伺服器、FB社團、LINE群組或巴哈姆特公會。",
      difficulty: "★☆☆☆☆",
      tips: "找到屬於你的同好圈子，一起討論攻略、分享心得、揪團連線。"
    },
    {
      id: "community_18",
      category: "community_events",
      title: "遊戲週年慶祝 (Game Anniversary)",
      description: "特地慶祝一款心愛遊戲的發售週年紀念日，或用截圖、貼文回顧重溫感動時刻。",
      difficulty: "★☆☆☆☆",
      tips: "對玩家來說，心愛遊戲的週年和人的生日同樣值得被紀念，這就是信仰的重量。"
    },
    {
      id: "community_19",
      category: "community_events",
      title: "遊戲新聞每日追蹤 (News Follower)",
      description: "訂閱遊戲媒體（如巴哈姆特、GameXP、Fami通、IGN）並養成每天追蹤遊戲新聞的習慣。",
      difficulty: "★☆☆☆☆",
      tips: "掌握最新遊戲資訊，讓你成為朋友圈中最快說出「這個遊戲我知道」的人。"
    },

    // ── ★★☆☆☆ ──
    {
      id: "community_02",
      category: "community_events",
      title: "排隊狂熱 (Line Queuing)",
      description: "為了購買限量版遊戲或主機，在店外或展場外排隊超過3小時。",
      difficulty: "★★☆☆☆",
      tips: "帶好折疊椅與水，為了信仰在烈日或寒風中堅守，這是玩家的浪漫。"
    },
    {
      id: "community_04",
      category: "community_events",
      title: "遊戲攻略分享者 (Guide Writer)",
      description: "撰寫過遊戲攻略、心得或評測文並發表在社群媒體、巴哈姆特或PTT。",
      difficulty: "★★☆☆☆",
      tips: "把知識轉化為文字！幫助其他玩家克服難關，是社群最溫暖的貢獻。"
    },
    {
      id: "community_06",
      category: "community_events",
      title: "Cosplay 參戰 (Cosplay Gamer)",
      description: "Cosplay遊戲角色參與展覽或同人場次，或與場次上的Coser進行合照。",
      difficulty: "★★☆☆☆",
      tips: "穿上角色的服裝，讓三次元的自己成為二次元的英雄。記得先徵得同意再拍照！"
    },
    {
      id: "community_08",
      category: "community_events",
      title: "線下遊戲聚會 (Local Meetup)",
      description: "參加過線下遊戲聚會、同好交流會或老遊戲懷舊聚會。",
      difficulty: "★★☆☆☆",
      tips: "帶著你的主機與遊戲，在實體空間中與同好交流，是遊戲社交最真實的樣貌。"
    },
    {
      id: "community_10",
      category: "community_events",
      title: "遊戲創作者應援 (Creator Support)",
      description: "在Patreon、Pixiv Fanbox或Kickstarter上付費支持你喜愛的遊戲創作者。",
      difficulty: "★★☆☆☆",
      tips: "用金錢的力量守護創作者的肝與夢想，讓他們能沒有後顧之憂地開發好遊戲。"
    },
    {
      id: "community_12",
      category: "community_events",
      title: "自製遊戲周邊 (DIY Merch)",
      description: "自己動手製作過遊戲相關的飾品、鑰匙圈或痛包裝飾。",
      difficulty: "★★☆☆☆",
      tips: "獨一無二的手作周邊！發揮你的手藝，製作世上絕無僅有的專屬信仰小物。"
    },
    {
      id: "community_13",
      category: "community_events",
      title: "速通馬拉松觀看 (GDQ Viewer)",
      description: "觀看過Games Done Quick等遊戲馬拉松活動，為速通玩家的技術驚嘆。",
      difficulty: "★★☆☆☆",
      tips: "看著頂尖玩家在幾分鐘內通關你花幾十小時才能破的遊戲，震撼不已。"
    },
    {
      id: "community_14",
      category: "community_events",
      title: "遊戲配音模仿 (Voice Impersonator)",
      description: "能夠模仿遊戲角色的經典台詞或配音，並在社群中與同好玩角色扮演對話。",
      difficulty: "★★☆☆☆",
      tips: "「It's-a me, Mario！」模仿角色配音是同好之間最歡樂的互動方式。"
    },
    {
      id: "community_17",
      category: "community_events",
      title: "遊戲迷因創作 (Meme Creator)",
      description: "創作遊戲相關的迷因（Meme）或搞笑圖文，並在社群媒體上獲得超過100個讚。",
      difficulty: "★★☆☆☆",
      tips: "用幽默說出玩家的共同心聲！爆紅的遊戲迷因往往能觸動所有人的笑點。"
    },
    {
      id: "community_23",
      category: "community_events",
      title: "展場購物王 (Convention Buyer)",
      description: "在電玩展或同人場次現場購買限定周邊，單次消費超過新台幣5000元。",
      difficulty: "★★☆☆☆",
      tips: "展場限定、一旦錯過就很難再入手——為了信仰的消費從不後悔。"
    },
    {
      id: "community_25",
      category: "community_events",
      title: "異地組隊同遊 (Remote Squad)",
      description: "與在不同城市甚至不同國家的遊戲好友定期線上組隊同玩，維持跨地域的遊戲情誼。",
      difficulty: "★★☆☆☆",
      tips: "距離阻隔不了玩家的心，網路讓世界各地的同好如同在同一個房間裡遊玩。"
    },

    // ── ★★★☆☆ ──
    {
      id: "community_05",
      category: "community_events",
      title: "創作同人遊戲 (Fan Game Creator)",
      description: "創作並公開發表過遊戲相關的二創插畫、同人漫畫或粉絲自製遊戲。",
      difficulty: "★★★☆☆",
      tips: "從消費者升級為創造者，用你的才華為喜愛的角色與世界賦予新的生命。"
    },
    {
      id: "community_07",
      category: "community_events",
      title: "遊戲音樂演奏 (Game Cover)",
      description: "使用樂器（吉他、鋼琴、貝斯）彈奏或翻唱遊戲BGM，並上傳至社群平台。",
      difficulty: "★★★☆☆",
      tips: "用音樂表達對遊戲的熱愛！從《薩爾達》主題曲到《尼爾》的悠揚旋律。"
    },
    {
      id: "community_09",
      category: "community_events",
      title: "遊戲論壇精華文章 (Featured Post)",
      description: "撰寫的遊戲相關文章在巴哈姆特哈啦區或PTT獲得板主置頂或精華區收錄。",
      difficulty: "★★★☆☆",
      tips: "這代表你的分析極具深度與見地，獲得了論壇管理者與廣大同好的高度認可。"
    },
    {
      id: "community_16",
      category: "community_events",
      title: "遊戲影評創作 (Video Reviewer)",
      description: "拍攝並上傳一支遊戲評測或遊戲心得影片至YouTube，讓更多玩家看到你的觀點。",
      difficulty: "★★★☆☆",
      tips: "鏡頭前的表達與文字不同，遊戲影評需要勇氣與表達能力，但影響力也更加廣泛。"
    },
    {
      id: "community_20",
      category: "community_events",
      title: "首發評測撰寫 (Day 1 Reviewer)",
      description: "在遊戲發售當天或一周內完成主線並發表遊戲評測，提供其他玩家最即時的參考。",
      difficulty: "★★★☆☆",
      tips: "搶先評測需要快速完成遊戲的能力，也需要對遊戲有深刻的理解——這是真正的玩家素養。"
    },
    {
      id: "community_21",
      category: "community_events",
      title: "社群版主 (Community Mod)",
      description: "擔任過遊戲相關Discord伺服器、論壇或社群的版主或管理員，維護社群秩序與風氣。",
      difficulty: "★★★☆☆",
      tips: "版主不只是管理者，更是社群的靈魂人物，你的付出讓每個玩家都有更好的交流環境。"
    },
    {
      id: "community_22",
      category: "community_events",
      title: "遊戲知識問答競賽 (Trivia Champion)",
      description: "參加過遊戲知識問答活動（如展場問答、Discord活動）並取得前三名的成績。",
      difficulty: "★★★☆☆",
      tips: "腦袋裝滿遊戲知識才能脫穎而出！問答競賽是玩家見聞廣度最好的測試場。"
    },
    {
      id: "community_24",
      category: "community_events",
      title: "遊戲字幕貢獻者 (Subtitle Contributor)",
      description: "為外語遊戲實況或遊戲影片製作中文字幕並公開貢獻，幫助更多玩家欣賞精彩內容。",
      difficulty: "★★★☆☆",
      tips: "翻譯字幕是無形的貢獻，讓語言不再是玩家欣賞優質內容的障礙。"
    },

    // ── ★★★★☆ ──
    {
      id: "community_11",
      category: "community_events",
      title: "展場擺攤/志工 (Booth Staff)",
      description: "在遊戲展覽或同人場次中作為攤主、志工或工作人員參與活動運作。",
      difficulty: "★★★★☆",
      tips: "親身體驗遊戲活動的後台運作，看著玩家因為你的介紹而開心地試玩遊戲。"
    },
    {
      id: "community_15",
      category: "community_events",
      title: "24小時慈善馬拉松 (24h Charity Run)",
      description: "親身參加過24小時遊戲馬拉松慈善活動，在體力挑戰中為公益持續遊玩。",
      difficulty: "★★★★☆",
      tips: "連續24小時的遊戲挑戰體力極限，同時為慈善盡一份心力，是玩家的榮耀。"
    },

    // =====================================================
    // 5. 硬核挑戰與究極玩家 (25項，依難度排列)
    // =====================================================

    // ── ★★☆☆☆ ──
    {
      id: "hardcore_09",
      category: "hardcore_challenge",
      title: "遊戲原聲帶收藏 (OST Collector)",
      description: "購買過遊戲原聲帶CD或數位版，收藏遊戲音樂的每一個音符。",
      difficulty: "★★☆☆☆",
      tips: "遊戲音樂是另一種藝術，收藏原聲帶是對遊戲製作團隊最直接的愛意投遞。"
    },
    {
      id: "hardcore_10",
      category: "hardcore_challenge",
      title: "遊戲開發者訪談閱讀 (Dev Interview)",
      description: "深度閱讀過遊戲製作人的訪談、開發日誌或幕後紀錄片，了解遊戲誕生背後的故事。",
      difficulty: "★★☆☆☆",
      tips: "了解遊戲開發的艱辛與創意過程，讓你對每一款遊戲更加珍惜。"
    },
    {
      id: "hardcore_11",
      category: "hardcore_challenge",
      title: "遊戲設定集收藏 (Artbook Fan)",
      description: "收藏至少一本心儀遊戲的官方設定資料集或畫集，深入探索遊戲幕後的製作祕辛。",
      difficulty: "★★☆☆☆",
      tips: "翻閱厚實的設定集，研究角色的設計細節與場景概念圖，是玩家與製作者靈魂的交流。"
    },

    // ── ★★★☆☆ ──
    {
      id: "hardcore_01",
      category: "hardcore_challenge",
      title: "白金獎盃獵人 (Platinum Hunter)",
      description: "在PlayStation上取得一款遊戲的白金獎盃，或Steam上全成就解鎖一款遊戲。",
      difficulty: "★★★☆☆",
      tips: "全成就/白金是對一款遊戲最高程度的熱愛，需要極大的耐心與毅力。"
    },
    {
      id: "hardcore_06",
      category: "hardcore_challenge",
      title: "遊戲開發入門 (Game Dev Beginner)",
      description: "因為熱愛遊戲而開始自學遊戲開發（Unity/Unreal/Godot），並做出一個可操作的原型。",
      difficulty: "★★★☆☆",
      tips: "將熱愛轉化為創造！從玩家變身創作者，做出屬於你自己的遊戲。"
    },
    {
      id: "hardcore_07",
      category: "hardcore_challenge",
      title: "遊戲音樂創作 (Game Composer)",
      description: "創作過遊戲相關的音樂或音效，或使用軟體合成器重製遊戲BGM並公開分享。",
      difficulty: "★★★☆☆",
      tips: "用音符譜寫你對遊戲世界的熱愛——遊戲音樂創作是另一種表達方式。"
    },
    {
      id: "hardcore_08",
      category: "hardcore_challenge",
      title: "遊戲募資先行者 (Crowdfund Backer)",
      description: "參與過遊戲的群眾募資（如Kickstarter、集資平台），幫助獨立遊戲誕生。",
      difficulty: "★★★☆☆",
      tips: "用真金白銀幫喜愛的遊戲起死回生！看著募資名單上印著自己的名字，是極致的信仰浪漫。"
    },
    {
      id: "hardcore_12",
      category: "hardcore_challenge",
      title: "遊戲學術研究 (Game Studies)",
      description: "閱讀過遊戲設計相關書籍或學術文章（如《遊戲設計藝術》、《遊戲化實戰》）。",
      difficulty: "★★★☆☆",
      tips: "從玩家到遊戲研究者，用理論的角度重新理解你心愛的遊戲。"
    },
    {
      id: "hardcore_15",
      category: "hardcore_challenge",
      title: "遊戲台詞倒背如流 (Quote Master)",
      description: "能一字不差地背誦出某款遊戲的經典台詞（如《最後生還者》開場、《巫師3》開場白）。",
      difficulty: "★★★☆☆",
      tips: "「Kept you waiting, huh？」一開口就是老玩家了。"
    },
    {
      id: "hardcore_16",
      category: "hardcore_challenge",
      title: "十年信仰不滅 (10-Year Gamer)",
      description: "持續遊玩同一款遊戲或同一個系列超過10年以上，歷經多個版本更替仍初心不改。",
      difficulty: "★★★☆☆",
      tips: "時間是信仰最好的見證者。十年間看著這款遊戲推出續作、重製，初心依舊未改。"
    },
    {
      id: "hardcore_22",
      category: "hardcore_challenge",
      title: "遊戲語言自學 (Game Language Learner)",
      description: "為了遊玩未漢化的遊戲，自學日文或英文，並成功在無字幕的情況下理解並完成遊戲。",
      difficulty: "★★★☆☆",
      tips: "用遊戲作為學語言的動力，是最甜蜜的自學方式——你的日文/英文是被遊戲逼出來的！"
    },
    {
      id: "hardcore_23",
      category: "hardcore_challenge",
      title: "不查攻略純通關 (Blind Run)",
      description: "完全不查攻略、不看Wiki、純靠自己摸索，完整通關一款較為複雜的遊戲。",
      difficulty: "★★★☆☆",
      tips: "沒有攻略的世界更有探索的樂趣，雖然可能多走很多冤枉路，但每個發現都彌足珍貴。"
    },
    {
      id: "hardcore_24",
      category: "hardcore_challenge",
      title: "遊戲博物館訪客 (Museum Visitor)",
      description: "參觀過遊戲歷史相關的實體展覽或博物館（如任天堂Gallery、遊戲設計特展）。",
      difficulty: "★★★☆☆",
      tips: "親眼看見遊戲歷史的軌跡，讓你深刻感受到這個產業的龐大文化積累。"
    },

    // ── ★★★★☆ ──
    {
      id: "hardcore_02",
      category: "hardcore_challenge",
      title: "魂系全通 (Souls Veteran)",
      description: "通關FromSoftware旗下至少3款魂系作品（黑暗靈魂、血源詛咒、隻狼、艾爾登法環）。",
      difficulty: "★★★★☆",
      tips: "從不死人到忍者——你已經被宮崎英高徹底磨練成一個真正的硬派玩家。"
    },
    {
      id: "hardcore_03",
      category: "hardcore_challenge",
      title: "無傷通關 (No Damage Run)",
      description: "在一款遊戲中以無傷狀態通關一個完整關卡或Boss戰（不受到任何傷害）。",
      difficulty: "★★★★☆",
      tips: "完美無瑕的表現！每一個閃避與反擊都恰到好處，堪稱藝術。"
    },
    {
      id: "hardcore_04",
      category: "hardcore_challenge",
      title: "速通挑戰者 (Speedrunner)",
      description: "嘗試過一款遊戲的速通（Speedrun），並成功將通關時間縮短到自己的個人最佳紀錄。",
      difficulty: "★★★★☆",
      tips: "從休閒通關到極限壓縮時間——速通是遊戲技巧與路線規劃的終極展現。"
    },
    {
      id: "hardcore_05",
      category: "hardcore_challenge",
      title: "最高難度征服 (Hard Mode Clear)",
      description: "在一款遊戲中以最高難度（如Hell、Inferno、Ultra-Violence、夢魘）完整通關。",
      difficulty: "★★★★☆",
      tips: "真正的戰士選擇最艱難的道路——最高難度通關是實力的終極證明。"
    },
    {
      id: "hardcore_13",
      category: "hardcore_challenge",
      title: "遊戲專屬聖地 (Game Sanctuary)",
      description: "擁有專門的遊戲展示櫃與收藏區，防塵防紫外線且有漂亮燈條，打造令人讚嘆的遊戲聖地。",
      difficulty: "★★★★☆",
      tips: "「玩家的收藏一面牆，堪比一套房。」擁有自己夢想中的遊戲牆，每天看著都無比治癒。"
    },
    {
      id: "hardcore_17",
      category: "hardcore_challenge",
      title: "遊戲信仰文身 (Gamer Tattoo)",
      description: "將心儀遊戲角色的標誌或經典台詞以刺青形式印刻在自己身體上。",
      difficulty: "★★★★☆",
      tips: "把信仰刻進血肉裡！遊戲的符號與記憶將永遠與你同在。"
    },
    {
      id: "hardcore_21",
      category: "hardcore_challenge",
      title: "Roguelike 制霸 (Roguelike Master)",
      description: "在高難度Roguelike遊戲（如《Hades》、《死亡細胞》、《挺進地牢》）中達成最高挑戰難度通關。",
      difficulty: "★★★★☆",
      tips: "每次死亡都是學習，每次通關都是勝利——Roguelike是考驗適應力與技術積累的終極類型。"
    },
    {
      id: "hardcore_25",
      category: "hardcore_challenge",
      title: "全劇情圖鑑完成 (Lore Master)",
      description: "完整收集並閱讀一款有深厚世界觀遊戲的所有日記、書籍、道具說明與支線對話（如《艾爾登法環》、《空洞騎士》）。",
      difficulty: "★★★★☆",
      tips: "世界觀的深度往往藏在細節中，真正的Lore Master能從零碎資訊中拼湊出完整的世界全貌。"
    },

    // ── ★★★★★ ──
    {
      id: "hardcore_14",
      category: "hardcore_challenge",
      title: "經典遊戲全系列制霸 (Series Mastery)",
      description: "通關某一經典遊戲系列的全部主要作品（如《薩爾達》全系列、《惡靈古堡》全系列）。",
      difficulty: "★★★★★",
      tips: "對一個系列的極致熱愛！從初代到最新作，你是這個IP最忠實的守護者。"
    },
    {
      id: "hardcore_18",
      category: "hardcore_challenge",
      title: "遊戲收藏千款 (1000+ Games)",
      description: "遊戲收藏庫（實體+數位）合計超過1000款遊戲的驚人規模。",
      difficulty: "★★★★★",
      tips: "傳奇級的里程碑！你見證了無數個世界的誕生與毀滅，遊戲早已成為你生命的一部分。"
    },
    {
      id: "hardcore_19",
      category: "hardcore_challenge",
      title: "遊戲開發完成 (Game Released)",
      description: "親自開發並公開發布一款遊戲作品（不論規模大小），讓世界上其他玩家能夠玩到你創作的遊戲。",
      difficulty: "★★★★★",
      tips: "從玩家到創作者的最終進化！你不再只是消費遊戲，而是創造遊戲的人。"
    },
    {
      id: "hardcore_20",
      category: "hardcore_challenge",
      title: "傳奇玩家不滅 (True Gamer Legend)",
      description: "擁有一整間完全擺滿遊戲收藏、主機、模型與限量周邊的獨立「究極遊戲殿堂」。",
      difficulty: "★★★★★",
      tips: "恭喜你！你已經達到了遊戲玩家的最高境界，遊戲就是你此生無悔的歸宿。"
    }

  ],

  // =====================================================
  // 25 題遊戲真心話與靈魂共鳴問題
  // =====================================================
  questions: [
    "你的「入坑之作」是哪一款遊戲？是什麼契機讓你在那一刻開啟了遊戲世界的大門？",
    "到目前為止，哪一個遊戲角色的死亡最讓你痛心、甚至流下了眼淚？",
    "如果你有機會轉生到遊戲世界，你最希望轉生成為哪個遊戲中的職業或種族？",
    "有沒有哪一款遊戲，是你公認的「神作」，但你卻一直不敢或不想玩第二次？",
    "你曾經為了買遊戲周邊、典藏版或課金，花過最誇張的一筆金額是多少？你後悔嗎？",
    "如果可以擁有一種遊戲中的特殊能力（如時間暫停、傳送、讀心術），你最想要哪一個？為什麼？",
    "有沒有哪一款遊戲是你身邊的人都說好玩，你玩過卻覺得是「過譽」或「玩不下去」的？",
    "你最想與哪一位遊戲製作人在現實中見面、聊天，或者聽他分享開發幕後故事？",
    "如果可以選擇一個遊戲世界居住（如《巫師3》的陶森特、《寶可夢》的城都地區），你最想住在哪裡？",
    "你買過最感到羞恥、平時絕對不敢給家人或不熟的朋友看到的遊戲周邊是什麼？",
    "你是否幻想過跟某位遊戲角色結婚？如果有的話，他是誰？你最喜歡他哪一點？",
    "如果給你足夠的預算與時間，你此生最想去朝聖的遊戲公司或開發工作室是哪裡？",
    "你曾經在玩遊戲時，被父母、伴侶或朋友誤解過嗎？你當時是怎麼回應或化解的？",
    "有沒有哪一首遊戲BGM（OST），是只要前奏響起，你就一定會起雞皮疙瘩或熱血沸騰的？",
    "你最希望哪一款已經被遺忘的冷門遊戲，能夠推出高清重製版或續作？",
    "在你玩過的遊戲中，你覺得哪一個反派角色（Villain）的塑造最成功、甚至讓你恨不起來？",
    "你曾經嘗試過遊戲實況或創作遊戲內容嗎？如果有，是哪個契機？如果沒有，你最想做什麼？",
    "你覺得「玩家 (Gamer)」這個標籤在現代社會中是褒義還是貶義？你是如何看待自己的玩家身分？",
    "有沒有哪一款遊戲的名言或台詞，曾經在你的現實低潮期給予了你巨大的勇氣或力量？",
    "如果明天世界就要毀滅，你只能在死前玩完最後一款遊戲的最後一關，你會選擇哪一款？",
    "你曾經玩到某個遊戲橋段或劇情時，忍不住暫停遊戲，需要一點時間才能繼續——那是哪一幕？",
    "你有沒有因為遊戲而交到一個至今仍然深交的朋友？那段友情是怎麼開始的？",
    "如果你可以成為任何遊戲公司的「一日總監」，你最想改變或新增哪一個遊戲設計決策？",
    "你玩過讓你最後悔「怎麼沒有早一點玩」的遊戲是哪一款？是什麼契機讓你終於開始玩它？",
    "在你的遊戲生涯中，有沒有哪一場對戰、哪一刻通關，是你至今仍然記憶深刻、願意反覆回味的？"
  ]
};
