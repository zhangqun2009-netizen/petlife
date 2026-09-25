const supportedLanguages = ['en', 'zh-Hans', 'ja', 'ko'];
const languageStorageKey = 'petlife-site-language';
const policyPageMetadata = {
  en: { title: 'PetLife — Privacy & Terms', description: 'PetLife Privacy Policy and Terms of Use.' },
  'zh-Hans': { title: 'PetLife — 隐私政策与使用条款', description: 'PetLife 隐私政策与使用条款。' },
  ja: { title: 'PetLife — プライバシーポリシーと利用規約', description: 'PetLife のプライバシーポリシーと利用規約。' },
  ko: { title: 'PetLife — 개인정보 처리방침 및 이용약관', description: 'PetLife 개인정보 처리방침 및 이용약관입니다.' }
};

const marketingCopy = {
  'zh-Hans': {
    pageTitle: 'PetLife — 记住那些小小日常',
    description: 'PetLife 将宠物的日常照护、观察、回忆、家庭协作和就诊资料放在一起。',
    menu: '菜单', navProduct: '产品', navStories: '故事', navSupport: '支持', navCta: '了解 PetLife <span aria-hidden="true">→</span>',
    heroEyebrow: '用心记录每一天的陪伴', heroTitle: '记住那些<em>小小日常。</em>',
    heroBody: 'PetLife 把你和宠物共度的日子，变成一份持续生长的生活记录：发生过什么、接下来要留意什么，以及那些不想忘记的时刻。',
    heroWorks: '看看如何使用 <span aria-hidden="true">→</span>', heroSupport: '支持与 App Store', productAreas: 'PetLife 产品内容', dailyCare: '日常照护', records: '记录', lifeBook: '生命书', vetVisits: '就诊准备',
    handNote: '同一份爱。<br />多一些好日子。♡', productCollage: 'PetLife 产品图片拼贴', petPortrait: 'PetLife 中的比熊犬照片', photoCaption: '好狗狗，让每一天更明亮。♡',
    homeScreenAlt: 'PetLife 真实首页，展示日常照护任务', phoneChip: '把照护好好记住', heroNote: '此刻真实。<br />永远珍藏。♡', heroStamp: '更从容地<br />照顾它',
    featureEyebrow: '一处记录完整的陪伴', featureTitle: '从下一项照护任务，到<em>一起走过的日子。</em>',
    featureIntro: 'PetLife 为日常点滴留出位置。让照护计划持续进行，趁变化还清晰时记录下来，也让一起照顾宠物的人更容易了解完整情况。',
    featureCareTitle: '日常照护', featureCareBody: '查看今天的任务、医疗计划、临时照护安排，以及宠物接下来需要的照料。', featureCareLink: '了解照护功能 <span aria-hidden="true">↗</span>', careScreenAlt: 'PetLife 真实照护页面，展示今日照护任务',
    featureLifeTitle: '生命书', featureLifeBody: '把照片、成长节点、日常习惯和特别回忆，整理成属于你们的故事。', featureLifeLink: '留下共同故事 <span aria-hidden="true">↗</span>', lifeScreenAlt: 'PetLife 真实生命书页面',
    featureVetTitle: '更清楚地就诊', featureVetBody: '就诊前整理症状、近期观察、医疗历史和想咨询的问题。', featureVetLink: '准备一次就诊 <span aria-hidden="true">↗</span>', doctorScreenAlt: 'PetLife 真实就诊摘要页面',
    capabilityEyebrow: '让日常照护更从容', capabilityTitle: '小小行动，汇成<em>可靠的日常节奏。</em>',
    capabilityIntro: 'PetLife 关注忙碌生活中容易错过的细节：用药时间、食欲变化、值得保存的照片，或下次就诊想问的问题。',
    today: '今日', todayTitle: '知道现在该做什么。', todayBody: '把临时照护任务、医疗计划、家庭交接和近期安排放在一处查看。',
    todayBullet1: '今日、7 天、30 天和年度照护视图', todayBullet2: '显示来源与确认状态的医疗提醒', todayBullet3: '家庭成员与临时照护者任务', todayScreenAlt: 'PetLife 真实今日页面',
    recordTitle: '趁变化清晰时记录。', recordBody: '记录每日观察、饮食饮水、精神状态、睡眠、如厕、照片和备注，让照护不必变成繁琐文书。', recordScreenAlt: 'PetLife 真实日常记录页面',
    timeline: '时间轴', timelineTitle: '留住那些让你微笑的时刻。', timelineBody: '经确认的回忆、重要日子、照片和成长节点汇成时间轴，让你在日子过去很久后仍能回来看看。', timelineScreenAlt: 'PetLife 真实生命时间轴页面',
    together: '一起照护', familyTitle: '让身边的人共享同一份陪伴记录。', familyBody: '家庭成员可以分担照护，同时让记录始终对应同一只宠物和同一份事实。', familyTag1: '家庭角色', familyTag2: '共同照护', familyTag3: '统一宠物档案', petProfileAlt: 'PetLife 记录中使用的宠物头像',
    storyEyebrow: '留下来的回忆', storyTitle: '为日常里的<br /><em>小小奇迹留个位置。</em>', storyBody: '生日、到家纪念日、康复、旅行、手术、告别的回忆，以及不想遗忘的日常，都可以收进一本属于你们的生命书。内容由你编辑，并以真实记录为基础。',
    storyPoint1: '带日期的照片', storyPoint2: '成长节点', storyPoint3: '共同回忆', storyCta: '了解 PetLife <span aria-hidden="true">→</span>', lifeBookScreenAlt: 'PetLife 真实生命书页面，记录宠物故事',
    vetEyebrow: '重要的就诊时刻', vetTitle: '带上真实记录。<br /><em>让沟通更清楚。</em>', vetBody: 'PetLife 可根据已保存的资料，帮助你准备就诊摘要：近期变化、重要异常、用药、医疗历史，以及你想询问的问题。',
    boundaryTitle: '清楚说明功能边界。', boundaryBody: 'PetLife 整理事实并辅助沟通，不提供诊断、处方或剂量计算。', vetScreenAlt: 'PetLife 真实兽医就诊摘要页面', vetScreenCaption: 'PetLife 真实页面 · 帮助你更清楚地就诊',
    principlesEyebrow: '为真实生活而设计', principlesTitle: '需要时给予帮助。<br /><em>不需要时保持安静。</em>', principlesIntro: 'PetLife 的每一部分都围绕一个简单的愿望：让宠物的故事更容易照顾、更容易理解，也更容易珍藏。',
    principle1Title: '每条事实都有来处。', principle1Body: '保存的观察和医疗资料会保留上下文、来源与确认状态。',
    principle2Title: '始终围绕你的宠物。', principle2Body: '同一宠物档案贯穿照护、记录、回忆、小组件和就诊准备。',
    principle3Title: '照护可以一起完成。', principle3Body: '家庭成员和临时照护者可以协作，同时保留共同记录。',
    principle4Title: '故事由你做主。', principle4Body: '编辑、确认或不收录某段回忆，PetLife 会清楚呈现你的选择。',
    closingEyebrow: '从一个小小瞬间开始', closingTitle: '因为有它，生活更明亮。', closingBody: '用 PetLife，平静地记录你们共同度过的日子。', closingCta: '支持与 App Store <span aria-hidden="true">→</span>',
    footerTagline: '让陪伴的每一天更明亮。', footerFaq: '常见问题', footerAppStore: 'App Store', footerPrivacy: '隐私政策', footerTerms: '使用条款', footerNavigation: '页脚导航', mainNavigation: '主导航', languageSwitcher: '选择语言'
  },
  ja: {
    pageTitle: 'PetLife — 小さな日々を忘れない',
    description: 'PetLife は、日々のケア、気づき、思い出、家族との連携、通院の記録をひとつにまとめます。',
    menu: 'メニュー', navProduct: '製品', navStories: 'ストーリー', navSupport: 'サポート', navCta: 'PetLife を見る <span aria-hidden="true">→</span>',
    heroEyebrow: '愛情を込めて、毎日のケアを記録', heroTitle: '小さな日々を<em>忘れない。</em>',
    heroBody: 'PetLife は、ペットと過ごす日々を育ち続ける記録にします。何があったか、何に気を配るか、そして忘れたくない瞬間を残せます。',
    heroWorks: '使い方を見る <span aria-hidden="true">→</span>', heroSupport: 'サポート・App Store', productAreas: 'PetLife の機能', dailyCare: '毎日のケア', records: '記録', lifeBook: 'ライフブック', vetVisits: '通院の準備',
    handNote: '変わらない愛。<br />うれしい日々をもっと。♡', productCollage: 'PetLife の製品イメージ', petPortrait: 'PetLife に登録されたビション・フリーゼの写真', photoCaption: '愛犬と過ごす日々を、もっと明るく。♡',
    homeScreenAlt: '今日のケアタスクを表示する PetLife の実際のホーム画面', phoneChip: '忘れずにケアを記録', heroNote: '今日の思い出を。<br />ずっと大切に。♡', heroStamp: 'もっと穏やかに<br />お世話を',
    featureEyebrow: 'ペットとの毎日をひとつに', featureTitle: '次のケアタスクから、<em>一緒に歩む日々まで。</em>',
    featureIntro: 'PetLife は日々の出来事を残す場所です。いつものケアを続け、変化がはっきりしているうちに記録し、家族やお世話を手伝う人にも状況を伝えやすくします。',
    featureCareTitle: '毎日のケア', featureCareBody: '今日のタスク、医療プラン、一時的なお世話、次に必要なケアを確認できます。', featureCareLink: 'ケア機能を見る <span aria-hidden="true">↗</span>', careScreenAlt: '今日のケアタスクを表示する PetLife の実際のケア画面',
    featureLifeTitle: 'ライフブック', featureLifeBody: '写真、成長の節目、日課、一度きりの思い出を、あなたらしい物語にまとめます。', featureLifeLink: '一緒の物語を残す <span aria-hidden="true">↗</span>', lifeScreenAlt: 'PetLife の実際のライフブック画面',
    featureVetTitle: '通院をもっとスムーズに', featureVetBody: '受診前に症状、最近の様子、医療履歴、質問したいことを整理できます。', featureVetLink: '受診の準備をする <span aria-hidden="true">↗</span>', doctorScreenAlt: 'PetLife の実際の受診サマリー画面',
    capabilityEyebrow: '毎日を少し穏やかに', capabilityTitle: '小さな行動が、<em>頼れる習慣になる。</em>',
    capabilityIntro: '忙しい日々の中で見落としやすいことがあります。薬の時間、食欲の変化、残しておきたい写真、次の受診で聞きたいこと。PetLife はそんな瞬間を記録します。',
    today: '今日', todayTitle: '今することがひと目でわかる。', todayBody: '一時的なお世話、医療プラン、家族間の引き継ぎ、これからの予定をひとつの画面にまとめます。',
    todayBullet1: '今日・7日間・30日間・年間のケア表示', todayBullet2: '情報源と確認状況がわかる医療リマインダー', todayBullet3: '家族や一時的なケア担当者のタスク', todayScreenAlt: 'PetLife の実際の今日の画面',
    recordTitle: '変化が新しいうちに記録。', recordBody: '日々の様子、食事と水分、元気、睡眠、排泄、写真、メモを残せます。ケアを事務作業のようにしません。', recordScreenAlt: 'PetLife の実際の日々の記録画面',
    timeline: 'タイムライン', timelineTitle: '笑顔になった瞬間を残す。', timelineBody: '確認済みの思い出、大切な日、写真、成長の節目がタイムラインになり、何年後でも振り返れます。', timelineScreenAlt: 'PetLife の実際のライフタイムライン画面',
    together: '一緒に', familyTitle: 'みんなで同じ記録を見守る。', familyBody: '家族でケアを分担しながら、記録は同じペットと同じ事実に結び付けて保てます。', familyTag1: '家族の役割', familyTag2: 'ケアの共有', familyTag3: 'ひとつのペットプロフィール', petProfileAlt: 'PetLife の記録で使われるペットのプロフィール画像',
    storyEyebrow: '心に残る思い出', storyTitle: '何気ない毎日の<br /><em>小さな魔法を残そう。</em>', storyBody: '誕生日、お迎え記念日、回復、旅行、手術、お別れの思い出、そして忘れたくない日常。あなたらしく編集でき、実際の記録に基づくライフブックにまとめられます。',
    storyPoint1: '日付入りの写真', storyPoint2: '成長の節目', storyPoint3: '家族との思い出', storyCta: 'PetLife を見る <span aria-hidden="true">→</span>', lifeBookScreenAlt: 'ペットの物語を記録する PetLife の実際のライフブック画面',
    vetEyebrow: '大切な受診の前に', vetTitle: '事実を持って行こう。<br /><em>伝えたいことを、わかりやすく。</em>', vetBody: '保存した記録をもとに、最近の変化、気になる症状、服薬、医療履歴、獣医師への質問をまとめた受診サマリーを準備できます。',
    boundaryTitle: 'できることを明確に。', boundaryBody: 'PetLife は情報整理とコミュニケーションを支援します。診断、処方、投薬量の計算は行いません。', vetScreenAlt: 'PetLife の実際の獣医師向け受診サマリー画面', vetScreenCaption: 'PetLife の実際の画面 · 受診時の説明をもっとわかりやすく',
    principlesEyebrow: '日々の暮らしのために', principlesTitle: '必要なときに役立ち、<br /><em>そうでないときは静かに。</em>', principlesIntro: 'PetLife は、ペットとの物語をもっとケアしやすく、理解しやすく、残しやすくすることを大切にしています。',
    principle1Title: '記録の出どころがわかる。', principle1Body: '観察や医療情報に、その背景、情報源、確認状況を残します。',
    principle2Title: 'いつもペットが中心。', principle2Body: '同じペットプロフィールを、ケア、記録、思い出、ウィジェット、受診準備で共有します。',
    principle3Title: 'ケアを分担できる。', principle3Body: '家族や一時的なケア担当者と協力しながら、記録を共有できます。',
    principle4Title: '物語を決めるのはあなた。', principle4Body: '思い出を編集、確認、または記録しない選択ができます。あなたの判断を見える形で残します。',
    closingEyebrow: '小さな瞬間から始めよう', closingTitle: 'ペットと暮らす毎日を、もっと明るく。', closingBody: 'PetLife で一緒に過ごす日々を落ち着いて記録しませんか。', closingCta: 'サポート・App Store <span aria-hidden="true">→</span>',
    footerTagline: '一緒に過ごす毎日を、もっと明るく。', footerFaq: 'よくある質問', footerAppStore: 'App Store', footerPrivacy: 'プライバシー', footerTerms: '利用規約', footerNavigation: 'フッターナビゲーション', mainNavigation: 'メインナビゲーション', languageSwitcher: '言語を選択'
  },
  ko: {
    pageTitle: 'PetLife — 작은 순간을 기억해요',
    description: 'PetLife는 일상 돌봄, 관찰, 추억, 가족 간 협력 및 병원 방문 기록을 한곳에 모읍니다.',
    menu: '메뉴', navProduct: '제품', navStories: '이야기', navSupport: '지원', navCta: 'PetLife 알아보기 <span aria-hidden="true">→</span>',
    heroEyebrow: '사랑을 담아 매일의 돌봄을 기록해요', heroTitle: '작은 순간을 <em>기억해요.</em>',
    heroBody: 'PetLife는 반려동물과 함께한 날들을 계속 자라나는 기록으로 만들어 줍니다. 어떤 일이 있었는지, 무엇을 살펴야 하는지, 잊고 싶지 않은 순간을 남겨 보세요.',
    heroWorks: '사용 방법 보기 <span aria-hidden="true">→</span>', heroSupport: '지원 및 App Store', productAreas: 'PetLife 기능', dailyCare: '일상 돌봄', records: '기록', lifeBook: '라이프북', vetVisits: '병원 방문 준비',
    handNote: '변함없는 사랑.<br />좋은 날을 더 많이. ♡', productCollage: 'PetLife 제품 이미지 모음', petPortrait: 'PetLife에 등록된 비숑 프리제 사진', photoCaption: '사랑스러운 반려견과 더 밝은 하루를. ♡',
    homeScreenAlt: '일상 돌봄 할 일을 보여 주는 PetLife 실제 홈 화면', phoneChip: '돌봄을 잊지 않도록', heroNote: '오늘의 순간을.<br />오래도록 소중히. ♡', heroStamp: '더 차분하게<br />돌볼 수 있게',
    featureEyebrow: '함께한 이야기를 한곳에', featureTitle: '다음 돌봄 할 일부터 <em>함께 쌓아 온 날들까지.</em>',
    featureIntro: 'PetLife는 매일의 순간을 담아 둡니다. 돌봄 루틴을 이어 가고, 변화가 생생할 때 기록하며, 함께 돌보는 가족에게 상황을 더 잘 전할 수 있어요.',
    featureCareTitle: '일상 돌봄', featureCareBody: '오늘의 할 일, 의료 계획, 임시 돌봄, 다음에 필요한 일을 확인하세요.', featureCareLink: '돌봄 기능 살펴보기 <span aria-hidden="true">↗</span>', careScreenAlt: '오늘의 돌봄 할 일을 보여 주는 PetLife 실제 돌봄 화면',
    featureLifeTitle: '라이프북', featureLifeBody: '사진, 성장 순간, 루틴과 특별한 추억을 우리다운 이야기로 만들어 보세요.', featureLifeLink: '함께한 이야기 남기기 <span aria-hidden="true">↗</span>', lifeScreenAlt: 'PetLife 실제 라이프북 화면',
    featureVetTitle: '더 알찬 병원 방문', featureVetBody: '진료 전에 증상, 최근 관찰, 의료 기록과 질문을 정리하세요.', featureVetLink: '진료 준비하기 <span aria-hidden="true">↗</span>', doctorScreenAlt: 'PetLife 실제 진료 요약 화면',
    capabilityEyebrow: '한결 편안한 매일', capabilityTitle: '작은 행동이 <em>믿음직한 돌봄 루틴이 돼요.</em>',
    capabilityIntro: '바쁜 일상에서 놓치기 쉬운 순간이 있어요. 약 먹는 시간, 식욕 변화, 간직하고 싶은 사진, 다음 진료 때 묻고 싶은 것까지 PetLife에 기록해 보세요.',
    today: '오늘', todayTitle: '지금 할 일을 한눈에.', todayBody: '임시 돌봄, 의료 계획, 가족 간 인계와 다가오는 일정을 한 화면에서 살펴보세요.',
    todayBullet1: '오늘·7일·30일·연간 돌봄 보기', todayBullet2: '출처와 확인 상태가 표시되는 의료 알림', todayBullet3: '가족 및 임시 돌봄 담당자의 할 일', todayScreenAlt: 'PetLife 실제 오늘 화면',
    recordTitle: '변화가 생생할 때 기록해요.', recordBody: '일상 관찰, 음식과 물, 활력, 수면, 배변, 사진과 메모를 남기세요. 돌봄이 번거로운 서류 작업이 되지 않도록 도와요.', recordScreenAlt: 'PetLife 실제 일상 기록 화면',
    timeline: '타임라인', timelineTitle: '미소 짓게 한 순간을 간직해요.', timelineBody: '확인한 추억, 소중한 날, 사진과 성장 순간을 타임라인에 모아 시간이 흘러도 다시 볼 수 있어요.', timelineScreenAlt: 'PetLife 실제 생애 타임라인 화면',
    together: '함께 돌봐요', familyTitle: '가족이 같은 이야기를 함께 살펴봐요.', familyBody: '가족이 돌봄을 나누면서도 모든 기록은 같은 반려동물과 동일한 사실에 연결돼요.', familyTag1: '가족 역할', familyTag2: '함께하는 돌봄', familyTag3: '하나의 반려동물 프로필', petProfileAlt: 'PetLife 기록에서 사용하는 반려동물 프로필 사진',
    storyEyebrow: '오래 남는 추억', storyTitle: '평범한 하루의<br /><em>작은 마법을 담아 보세요.</em>', storyBody: '생일, 가족이 된 날, 회복, 여행, 수술, 이별의 기억과 잊고 싶지 않은 일상을 나만의 라이프북에 모을 수 있어요. 직접 편집할 수 있고 실제 기록을 바탕으로 합니다.',
    storyPoint1: '날짜가 있는 사진', storyPoint2: '성장 순간', storyPoint3: '함께한 추억', storyCta: 'PetLife 알아보기 <span aria-hidden="true">→</span>', lifeBookScreenAlt: '반려동물 이야기를 담은 PetLife 실제 라이프북 화면',
    vetEyebrow: '중요한 진료를 앞두고', vetTitle: '기록을 챙겨 가세요.<br /><em>더 명확하게 상담할 수 있어요.</em>', vetBody: '저장된 기록으로 최근 변화, 주요 이상 징후, 복용약, 의료 이력과 수의사에게 물어볼 내용을 담은 진료 요약을 준비할 수 있어요.',
    boundaryTitle: '기능의 한계를 분명히 해요.', boundaryBody: 'PetLife는 사실을 정리하고 소통을 돕습니다. 진단, 처방 또는 투약량 계산을 제공하지 않습니다.', vetScreenAlt: 'PetLife 실제 수의사 진료 요약 화면', vetScreenCaption: 'PetLife 실제 화면 · 진료 때 더 명확하게 설명하도록 도와요',
    principlesEyebrow: '실제 생활을 위한 설계', principlesTitle: '필요할 때 도움이 되고,<br /><em>필요 없을 땐 조용하게.</em>', principlesIntro: 'PetLife의 모든 기능은 반려동물의 이야기를 더 잘 돌보고, 이해하고, 간직할 수 있도록 만들어졌어요.',
    principle1Title: '기록의 출처가 남아요.', principle1Body: '관찰과 의료 정보에 맥락, 출처 및 확인 상태를 함께 보관합니다.',
    principle2Title: '반려동물이 중심이에요.', principle2Body: '돌봄, 기록, 추억, 위젯과 진료 준비에 같은 반려동물 프로필을 사용합니다.',
    principle3Title: '돌봄을 함께 나눠요.', principle3Body: '가족과 임시 돌봄 담당자가 공동 기록을 유지하며 협력할 수 있어요.',
    principle4Title: '이야기는 내가 정해요.', principle4Body: '추억을 수정하거나 확인하고, 남기지 않을 수도 있어요. 선택을 투명하게 보여 줍니다.',
    closingEyebrow: '작은 순간 하나부터', closingTitle: '반려동물과의 삶을 더 밝게.', closingBody: 'PetLife로 함께한 날들을 차분히 기록해 보세요.', closingCta: '지원 및 App Store <span aria-hidden="true">→</span>',
    footerTagline: '함께하는 매일을 더 밝게.', footerFaq: '자주 묻는 질문', footerAppStore: 'App Store', footerPrivacy: '개인정보 처리방침', footerTerms: '이용약관', footerNavigation: '푸터 내비게이션', mainNavigation: '주요 내비게이션', languageSwitcher: '언어 선택'
  }
};

const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(languageStorageKey);
    if (supportedLanguages.includes(stored)) return stored;
  } catch {
    // Storage can be unavailable in private browsing contexts.
  }
  const browserLanguage = (navigator.language || 'en').toLowerCase();
  if (browserLanguage.startsWith('zh')) return 'zh-Hans';
  if (browserLanguage.startsWith('ja')) return 'ja';
  if (browserLanguage.startsWith('ko')) return 'ko';
  return 'en';
}

function rememberLanguage(language) {
  try { localStorage.setItem(languageStorageKey, language); } catch { /* Optional preference only. */ }
}

const policyLanguageButtons = document.querySelectorAll('[data-policy-language]');
const policyLanguageCopies = document.querySelectorAll('[data-policy-language-content]');
if (policyLanguageButtons.length && policyLanguageCopies.length) {
  const setPolicyLanguage = (language) => {
    if (!supportedLanguages.includes(language)) return;
    document.documentElement.lang = language;
    policyLanguageButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.policyLanguage === language));
    });
    policyLanguageCopies.forEach((copy) => {
      copy.hidden = copy.dataset.policyLanguageContent !== language;
    });
    const pageMetadata = policyPageMetadata[language];
    document.title = pageMetadata.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = pageMetadata.description;
    const switcher = document.querySelector('[data-policy-language-switcher]');
    if (switcher) switcher.setAttribute('aria-label', ({ en: 'Policy language', 'zh-Hans': '政策语言', ja: '表示言語', ko: '표시 언어' })[language]);
    const documentsNav = document.querySelector('[data-policy-documents-nav]');
    if (documentsNav) documentsNav.setAttribute('aria-label', ({ en: 'Policy documents', 'zh-Hans': '政策目录', ja: 'ポリシー項目', ko: '정책 목차' })[language]);
    rememberLanguage(language);
  };

  policyLanguageButtons.forEach((button) => {
    button.addEventListener('click', () => setPolicyLanguage(button.dataset.policyLanguage));
  });
  setPolicyLanguage(getInitialLanguage());
}

const marketingLanguageButtons = document.querySelectorAll('[data-marketing-language]');
if (marketingLanguageButtons.length) {
  const marketingDefaults = new WeakMap();
  const defaultPageTitle = document.title;
  const defaultDescription = document.querySelector('[data-marketing-description]')?.content || '';
  const defaultEyebrow = document.querySelector('[data-marketing-eyebrow]')?.textContent || '';
  document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-alt], [data-i18n-aria]').forEach((element) => {
    marketingDefaults.set(element, {
      text: element.textContent,
      html: element.innerHTML,
      alt: element.alt,
      aria: element.getAttribute('aria-label')
    });
  });
  const setMarketingLanguage = (language) => {
    if (!supportedLanguages.includes(language)) return;
    const translations = marketingCopy[language] || {};
    document.documentElement.lang = language;
    document.body.classList.toggle('reference-mode', language === 'en');
    const poster = document.querySelector('.reference-banner');
    if (poster) poster.hidden = language !== 'en';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = translations[element.dataset.i18n] ?? marketingDefaults.get(element)?.text;
      if (value !== undefined && value !== null) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = translations[element.dataset.i18nHtml] ?? marketingDefaults.get(element)?.html;
      if (value !== undefined && value !== null) element.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = translations[element.dataset.i18nAlt] ?? marketingDefaults.get(element)?.alt;
      if (value !== undefined && value !== null) element.alt = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = translations[element.dataset.i18nAria] ?? marketingDefaults.get(element)?.aria;
      if (value !== undefined && value !== null) element.setAttribute('aria-label', value);
    });
    const eyebrow = document.querySelector('[data-marketing-eyebrow]');
    if (eyebrow) eyebrow.textContent = translations.heroEyebrow || defaultEyebrow;
    document.title = translations.pageTitle || defaultPageTitle;
    const description = document.querySelector('[data-marketing-description]');
    if (description) description.content = translations.description || defaultDescription;
    marketingLanguageButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.marketingLanguage === language));
    });
    const languageSwitcher = document.querySelector('[data-marketing-language-switcher]');
    if (languageSwitcher) languageSwitcher.setAttribute('aria-label', translations.languageSwitcher || 'Marketing language');
    rememberLanguage(language);
  };

  marketingLanguageButtons.forEach((button) => {
    button.addEventListener('click', () => setMarketingLanguage(button.dataset.marketingLanguage));
  });
  setMarketingLanguage(getInitialLanguage());
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      const original = button.textContent;
      button.textContent = 'Copied';
      window.setTimeout(() => { button.textContent = original; }, 1400);
    } catch {
      window.prompt('Copy this URL', value);
    }
  });
});
