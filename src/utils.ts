export function playChineseAudio(text: string) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.9; // slightly slower for beginners
    utterance.volume = 1;
    
    // Try to find a Chinese voice for better quality
    const setVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const zhVoices = voices.filter(v => v.lang.includes('zh') || v.lang.includes('ZH') || v.lang.includes('cmn'));
      
      if (zhVoices.length > 0) {
        let selectedVoice = zhVoices[0];
        
        utterance.voice = selectedVoice;
      }
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
      setTimeout(setVoiceAndSpeak, 250); // fallback
    } else {
      setVoiceAndSpeak();
    }
  }
}

// Simple beep sounds using Web Audio API
export function playCorrectSound() {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
  oscillator.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.1); // C6
  
  gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.3);
}

export function playWrongSound() {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.type = 'sawtooth';
  oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.3);
  
  gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.3);
}

export function playSuccessSound() {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
  oscillator.frequency.setValueAtTime(554.37, audioCtx.currentTime + 0.1); // C#5
  oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.2); // E5
  oscillator.frequency.setValueAtTime(880, audioCtx.currentTime + 0.3); // A5
  
  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.6);
}

export function playPassSound() {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
  oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime + 0.2); // C5
  
  gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.4);
}

export const HAN_VIET_MAP: Record<string, string> = {
  // Chào hỏi xã giao
  '你好': 'NHỈ HẢO',
  '叫': 'KHIẾU',
  '名字': 'DANH TỰ',
  '今年': 'KIM NIÊN',
  '岁': 'TUẾ',
  '哪': 'NÃ',
  '国': 'QUỐC',
  '人': 'NHÂN',
  '现在': 'HIỆN TẠI',
  '工作': 'CÔNG TÁC',
  '旅行社': 'LỮ HÀNH XÃ',
  '导游': 'ĐẠO DU',
  '软件': 'NHUYỄN KIỆN',
  '工程师': 'CÔNG TRÌNH SƯ',
  '科技': 'KHOA KỸ',
  '喜欢': 'HỈ HOAN',
  '爱好': 'ÁI HẢO',
  '音乐': 'ÂM NHẠC',
  '旅行': 'LỮ HÀNH',
  '电影': 'ĐIỆN ẢNH',
  '口': 'KHẨU',
  '爸爸': 'BẠ BẠ',
  '妈妈': 'MA MA',
  '姐姐': 'TỈ TỈ',
  '退休': 'THOÁI HƯU',
  '老师': 'LÃO SƯ',
  '兄弟姐妹': 'HUYNH ĐỆ TỈ MUỘI',
  '独生子': 'ĐỘC SINH TỬ',
  '明天': 'MINH THIÊN',
  '长城': 'TRƯỜNG THÀNH',
  '出发': 'XUẤT PHÁT',
  '地铁': 'ĐỊA THIẾT',
  '方便': 'PHƯƠNG TIỆN',
  '午饭': 'NGỌ PHẠN',
  '中国菜': 'TRUNG QUỐC THÁI',
  '饺子': 'GIẢO TỬ',
  '越南河粉': 'VIỆT NAM HÀ PHẤN',
  '做饭': 'TÁC PHẠN',
  '红烧肉': 'HỒNG THIÊU NHỤC',
  '咖啡': 'CA PHÊ',

  // Âm nhạc
  '流行': 'LƯU HÀNH',
  '说唱': 'THUYẾT XƯỚNG',
  '歌手': 'CA THỦ',
  '认识': 'NHẬN THỨC',
  '香港': 'HƯƠNG CẢNG',
  '出名': 'XUẤT DANH',
  '红': 'HỒNG',
  '公司': 'CÔNG TY',
  '结婚': 'KẾT HÔN',
  '孩子': 'HÀI TỬ',
  '女儿': 'NỮ NHI',
  '帅': 'SOÁI',
  '演戏': 'DIỄN HÍ',
  '妻子': 'THÊ TỬ',
  '绯闻': 'PHI VĂN',
  '钱': 'TIỀN',
  '老歌': 'LÃO CA',
  '马上': 'MÃ THƯỢNG',
  '歌': 'CA',
  '听': 'THÍNH',
  '谁': 'THÙY',
  '唱歌': 'XƯỚNG CA',
  '好听': 'HẢO THÍNH',
  '拍': 'PHÁCH',
  '张': 'TRƯƠNG',
  '买': 'MÃI',
  '更': 'CANH',
  '都': 'ĐÔ',
  '要': 'YẾU',
  '几': 'KỶ',
  '张学友': 'TRƯƠNG HỌC HỮU',
  '刘德华': 'LƯU ĐỨC HOA',
  '吻别': 'VẪN BIỆT',
  '忘情水': 'VONG TÌNH THỦY',
  '很少': 'HẤN THIỂU',
  '哪个': 'NÃ CÁ',
  '宝丽金': 'BẢO LỆ KIM',
  '朱丽倩': 'CHU LỆ THIÊN',
  'CD': 'CD',
  '这': 'GIÁ',
  '首': 'THỦ',

  // Đi nhà hàng
  '菜单': 'THÁI ĐƠN',
  '烤鸭': 'KHẢO ÁP',
  '宫保鸡丁': 'CUNG BẢO KÊ ĐINH',
  '麻婆豆腐': 'MA BÀ ĐẬU HỦ',
  '水煮鱼': 'THỦY CHỦ NGƯ',
  '蒸饺': 'CHƯNG GIẢO',
  '红酒': 'HỒNG T TửU',
  '白酒': 'BẠCH TỬU',
  '香槟': 'HƯƠNG TÂN',
  '莫吉托': 'MẠC CÁT THÁC',
  '马天尼': 'MÃ THIÊN NI',
  '鸡尾酒': 'KÊ VĨ TỬU',
  '特色菜': 'ĐẶC SẮC THÁI',
  '酒水': 'TỬU THỦY',
  '付款': 'PHÓ KHOẢN',
  '折扣': 'TRIẾT KHẤU',
  '发票': 'PHÁT PHIẾU',
  '小费': 'TIỂU PHÍ',
  '信用卡': 'TÍN DỤNG TẠP',
};

export const HAN_VIET_CHAR_MAP: Record<string, string> = {
  '你': 'NHỈ', '好': 'HẢO', '我': 'NGÃ', '叫': 'KHIẾU', '名': 'DANH', '字': 'TỰ',
  '今': 'KIM', '年': 'NIÊN', '岁': 'TUẾ', '哪': 'NÃ', '国': 'QUỐC', '人': 'NHÂN',
  '现': 'HIỆN', '在': 'TẠI', '工': 'CÔNG', '作': 'TÁC', '旅': 'LỮ', '行': 'HÀNH',
  '社': 'XÃ', '导': 'ĐẠO', '游': 'DU', '软': 'NHUYỄN', '件': 'KIỆN', '程': 'TRÌNH',
  '师': 'SƯ', '科': 'KHOA', '技': 'KỸ', '喜': 'HỶ', '欢': 'HOAN', '爱': 'ÁI',
  '音': 'ÂM', '乐': 'NHẠC', '电': 'ĐIỆN', '影': 'ẢNH', '口': 'KHẨU', '爸': 'BẠ',
  '妈': 'MA', '姐': 'TỈ', '退': 'THOÁI', '休': 'HƯU', '老': 'LÃO', '兄': 'HUYNH',
  '弟': 'ĐỆ', '妹': 'MUỘI', '独': 'ĐỘC', '生': 'SINH', '子': 'TỬ', '明': 'MINH',
  '天': 'THIÊN', '长': 'TRƯỜNG', '城': 'THÀNH', '出': 'XUẤT', '发': 'PHÁT', '铁': 'THIẾT',
  '方': 'PHƯƠNG', '便': 'TIỆN', '午': 'NGỌ', '饭': 'PHẠN', '中': 'TRUNG', '菜': 'THÁI',
  '饺': 'GIẢO', '越': 'VIỆT', '南': 'NAM', '河': 'HÀ', '粉': 'PHẤN', '做': 'TÁC',
  '红': 'HỒNG', '烧': 'THIÊU', '肉': 'NHỤC', '咖': 'CA', '啡': 'PHÊ', '流': 'LƯU',
  '说': 'THUYẾT', '唱': 'XƯỚNG', '歌': 'CA', '手': 'THỦ', '认': 'NHẬN', '识': 'THỨC',
  '香': 'HƯƠNG', '港': 'CẢNG', '司': 'TY', '结': 'KẾT', '婚': 'HÔN', '孩': 'HÀI',
  '女': 'NỮ', '儿': 'NHI', '帅': 'SOÁI', '演': 'DIỄN', '戏': 'HÍ', '妻': 'THÊ',
  '绯': 'PHI', '闻': 'VĂN', '钱': 'TIỀN', '马': 'MÃ', '上': 'THƯỢNG', '听': 'THÍNH',
  '谁': 'THÙY', '拍': 'PHÁCH', '张': 'TRƯƠNG', '学': 'HỌC', '友': 'HỮU', '刘': 'LƯU',
  '德': 'ĐỨC', '华': 'HOA', '吻': 'VẪN', '别': 'BIỆT', '忘': 'VONG', '情': 'TÌNH',
  '水': 'THỦY', '少': 'THIỂU', '个': 'CÁ', '宝': 'BẢO', '丽': 'LỆ', '金': 'KIM',
  '朱': 'CHU', '倩': 'THIÊN', '这': 'GIÁ', '首': 'THỦ', '烤': 'KHẢO', '鸭': 'ÁP',
  '宫': 'CUNG', '保': 'BẢO', '鸡': 'KÊ', '丁': 'ĐINH', '麻': 'MA', '婆': 'BÀ',
  '豆': 'ĐẬU', '腐': 'HỦ', '煮': 'CHỦ', '鱼': 'NGƯ', '蒸': 'CHƯNG', '酒': 'TỬU',
  '白': 'BẠCH', '槟': 'TÂN', '莫': 'MẠC', '吉': 'CÁT', '托': 'THÁC', '尼': 'NI',
  '尾': 'VĨ', '特': 'ĐẶC', '色': 'SẮC', '付': 'PHÓ', '款': 'KHOẢN', '折': 'TRIẾT',
  '扣': 'KHẤU', '票': 'PHIẾU', '小': 'TIỂU', '费': 'PHÍ', '信': 'TÍN', '用': 'DỤNG',
  '卡': 'TẠP'
};

export function getHanViet(hanzi: string, explicitHanViet?: string): string {
  if (explicitHanViet) return explicitHanViet.toUpperCase();
  if (HAN_VIET_MAP[hanzi]) return HAN_VIET_MAP[hanzi].toUpperCase();
  
  const converted = hanzi.split('').map(ch => HAN_VIET_CHAR_MAP[ch] || ch).join(' ');
  return converted.toUpperCase();
}

export const EXAMPLE_ENGLISH_MAP: Record<string, string> = {
  // Chào hỏi xã giao
  '你好！我叫郑贤。': 'Hello! My name is Zheng Xian.',
  '你叫什么名字？': 'What is your name?',
  '我今年二十八岁。': 'I am 28 years old this year.',
  '我今年二十五岁了。': 'I am 25 years old this year.',
  '你是哪国人？': 'What country are you from?',
  '我是越南人。': 'I am Vietnamese.',
  '我现在在北京。': 'I am currently in Beijing.',
  '你做什么工作？': 'What work do you do?',
  '我是旅行社的导游。': 'I am a tour guide at a travel agency.',
  '我是软件工程师。': 'I am a software engineer.',
  '我在科技公司工作。': 'I work at a technology company.',
  '你喜欢你的工作吗？': 'Do you like your job?',
  '你平时有什么爱好？': 'What are your hobbies usually?',
  '我喜欢听音乐。': 'I like listening to music.',
  '我喜欢听音乐和旅行。': 'I like listening to music and traveling.',
  '你喜欢看电影吗？': 'Do you like watching movies?',
  '你家有几口人？': 'How many people are in your family?',
  '我爸爸妈妈工作。': 'My parents work.',
  '你姐姐做什么工作？': 'What does your older sister do?',
  '他们都退休了。': 'They are both retired.',
  '她是老师，在学校工作。': 'She is a teacher, working at a school.',
  '你有兄弟姐妹吗？': 'Do you have siblings?',
  '我是独生子。': 'I am an only child.',
  '你明天要去哪儿旅行？': 'Where are you going to travel tomorrow?',
  '我明天去长城。': 'I am going to the Great Wall tomorrow.',
  '我们明天几点出发？': 'What time do we set off tomorrow?',
  '我们坐地铁去，好吗？': 'Shall we go by subway?',
  '地铁很方便。': 'The subway is very convenient.',
  '我们在哪儿吃午饭？': 'Where shall we eat lunch?',
  '你喜欢吃中国菜吗？': 'Do you like Chinese food?',
  '我非常喜欢饺子。': 'I like dumplings very much.',
  '越南河粉很好吃！': 'Vietnamese pho is delicious!',
  '你会做饭吗？': 'Can you cook?',
  '我会做红烧肉。': 'I can make braised pork.',
  '你喝茶还是喝咖啡？': 'Do you drink tea or coffee?',

  // Âm nhạc
  '流行歌。': 'Pop song.',
  '我不说唱。': 'I don\'t rap.',
  '他是歌手。': 'He is a singer.',
  '我是歌手。': 'I am a singer.',
  '我认识他。': 'I know him.',
  '香港人。': 'Hong Konger.',
  '他很出名。': 'He is very famous.',
  '这首歌很红。': 'This song is very popular.',
  '哪个公司？': 'Which company?',
  '他结婚了。': 'He is married.',
  '有孩子吗？': 'Do you have children?',
  '他有女儿。': 'He has a daughter.',
  '拍电影。': 'Act in movies.',
  '他非常帅。': 'He is extremely handsome.',
  '我不演戏。': 'I don\'t act.',
  '他妻子是谁？': 'Who is his wife?',
  ' bride: 他们很少绯闻。': 'They have very few scandals.',
  ' sacred: 他们很有钱。': 'They are very rich.',
  '他们很少绯闻。': 'They have very few scandals.',
  'they很有钱。': 'They are very rich.',
  '他们很有钱。': 'They are very rich.',
  '我喜欢老歌。': 'I like old songs.',
  '现在听。': 'Listen now.',
  '马上听。': 'Listen right now.',
  '喜欢音乐。': 'Like music.',
  '好听的歌。': 'Pleasant song.',
  '听歌。': 'Listen to songs.',
  ' father: 他是谁？': 'Who is he?',
  '他是谁？': 'Who is he?',
  '喜欢唱歌。': 'Like singing.',
  '非常好听。': 'Very pleasant to listen to.',
  '拍照片。': 'Take photos.',
  '一张CD。': 'One CD.',
  '买CD。': 'Buy CDs.',
  '更喜欢。': 'Prefer / like more.',
  '我们 headquarters: 我们 headquarters': 'We all are.',
  '我们 headquarters': 'We all are.',
  '我们 headquarters: 都': 'We all are.',
  '我们 headquarters are': 'We all are.',
  '我们 headquarters are...': 'We all are.',
  '我们 headquarters are ': 'We all are.',
  '我们 headquarters are:': 'We all are.',
  '我们 headquarters:': 'We all are.',
  '我们都是。': 'We all are.',
  '我要听。': 'I want to listen.',
  '几张CD？': 'How many CDs?',
  '听张学友。': 'Listen to Jacky Cheung.',
  '喜欢刘德华。': 'Like Andy Lau.',
  '听《吻别》。': 'Listen to "Kiss Goodbye".',
  '听《忘情水》。': 'Listen to "Water of Forgetfulness".',
  '很少听。': 'Rarely listen.',
  '一个公司？': 'Which company?',
  '听R&B。': 'Listen to R&B.',
  '宝丽金公司。': 'PolyGram Company.',
  '是朱丽倩。': 'It\'s Carol Chu.',
  '我有CD。': 'I have CDs.',
  '这首歌。': 'This song.',
  '一首歌。': 'A song.',

  // Grammar examples
  '这是什么？': 'What is this?',
  '你今年多大了？': 'How old are you this year?',
  '他今年多大？': 'How old is he this year?',
  '我是中国人。': 'I am Chinese.',
  '我非常喜欢。': 'I like it very much.',
  '我家有三口人。': 'My family has three people.',
  '你穿裤子还是短裤？': 'Are you wearing pants or shorts?',
  '我很喜欢。你呢？': 'I like it very much. How about you?',
  '我在这儿。他呢？': 'I am here. Where is he?',
  '我也喜欢。': 'I like it too.',
  '他也是歌手。': 'He is also a singer.',
  '你听过吗？': 'Have you heard it?',
  '我买过。': 'I have bought it.',
  '太好了！': 'Great!',
  '...nǐ gèng xǐhuan shuí？': 'Who do you like more?',
  '你更喜欢谁？': 'Who do you like more?',
  '这首歌更好听。': 'This song sounds better.',
  '菜多少钱？': 'How much is the food?',
  '总共多少钱？': 'How much in total?',
  '打九折。': '10% off (Pay 90%).',
  '不包含小费。': 'Tip not included.',

  // Đi nhà hàng
  '你看菜单吗？': 'Would you like to see the menu?',
  '来一份烤鸭。': 'Bring one serving of roast duck.',
  '宫保鸡丁很好吃。': 'Kung Pao chicken is delicious.',
  '麻婆豆腐很辣。': 'Mapo tofu is very spicy.',
  '水煮鱼非常好吃。': 'Poached fish is very delicious.',
  '来一份蒸饺。': 'Bring one serving of steamed dumplings.',
  '你喝红酒吗？': 'Do you drink red wine?',
  '来一瓶白酒。': 'Bring a bottle of white liquor.',
  '香槟二百元。': 'Champagne is 200 yuan.',
  '来一杯莫吉托。': 'Bring a glass of Mojito.',
  '马天尼不甜。': 'Martini is not sweet.',
  '有鸡尾酒吗？': 'Do you have cocktails?',
  '有特色菜吗？': 'Are there special dishes?',
  '酒水五百元。': 'Drinks are 500 yuan.',
  '你怎么付款？': 'How do you pay?',
  '有折扣吗？': 'Is there any discount?',
  '你要发票吗？': 'Do you need an invoice?',
  '小费包含了吗？': 'Is tip included?',
  ' speech: 我用信用卡。': 'I use a credit card.',
  '我用信用卡。': 'I use a credit card.'
};

export function getExampleEnglish(example: { hanzi: string; vietnamese: string; english?: string }): string {
  if (example.english) return example.english;
  if (EXAMPLE_ENGLISH_MAP[example.hanzi]) return EXAMPLE_ENGLISH_MAP[example.hanzi];
  return '';
}

export const PRIMARY_VIETNAMESE_MAP: Record<string, string> = {
  '现在': 'Hiện tại',
  '流行': 'Thịnh hành',
  '叫': 'Tên là',
  '名字': 'Tên',
  '哪': 'Nào',
  '国': 'Nước',
  '工作': 'Công việc',
  '口': 'Lượng từ',
  '爸爸': 'Bố',
  '老师': 'Giáo viên',
  '独生子': 'Con một',
  '出发': 'Xuất phát',
  '方便': 'Tiện lợi',
  '午饭': 'Bữa trưa',
  '饺子': 'Sủi cảo',
  '红烧肉': 'Thịt kho tàu',
  '认识': 'Quen biết',
  '红': 'Nổi tiếng',
  '孩子': 'Con cái',
  '演戏': 'Đóng phim',
  '绯闻': 'Tin đồn',
  '马上': 'Ngay lập tức',
  '好听': 'Nghe hay',
  '拍': 'Chụp',
  '张': 'Lượng từ',
  '更': 'Càng',
  '要': 'Muốn',
  '几': 'Mấy',
  '首': 'Lượng từ',
  '水煮鱼': 'Cá thủy xú',
  '鸡尾酒': 'Cocktail',
  '酒水': 'Đồ uống',
  '折扣': 'Giảm giá',
  '小费': 'Tiền tip',
  '餐巾纸': 'Khăn giấy',
  '推荐': 'Giới thiệu',
  '好吃': 'Ngon',
  '饮料': 'Đồ uống',
  '上菜': 'Lên món',
  '服务': 'Phục vụ',
  '瓶': 'Chai',
  '杯': 'Ly',
};

export function getPrimaryVietnamese(vietnamese: string, hanzi?: string): string {
  if (hanzi && PRIMARY_VIETNAMESE_MAP[hanzi]) {
    return PRIMARY_VIETNAMESE_MAP[hanzi];
  }
  // Strip parenthetical descriptors e.g. "Con một (nam)" -> "Con một"
  let clean = vietnamese.replace(/\s*\([^)]*\)/g, '').trim();
  // Split by comma or slash if multiple meanings exist and take the first clean item
  if (clean.includes(',')) {
    const parts = clean.split(',').map(p => p.trim());
    return parts[0];
  }
  if (clean.includes('/')) {
    const parts = clean.split('/').map(p => p.trim());
    return parts[0];
  }
  return clean;
}

export const VOCAB_ENGLISH_MAP: Record<string, string> = {
  // Chào hỏi xã giao
  '你好': 'Hello',
  '叫': 'To be called',
  '名字': 'Name',
  '今年': 'This year',
  '岁': 'Years old',
  '哪': 'Which',
  '国': 'Country',
  '人': 'Person / People',
  '现在': 'Now / Currently',
  '工作': 'Work / Job',
  '旅行社': 'Travel agency',
  '导游': 'Tour guide',
  '软件': 'Software',
  '工程师': 'Engineer',
  '科技': 'Technology',
  '喜欢': 'Like / Enjoy',
  '爱好': 'Hobby',
  '音乐': 'Music',
  '旅行': 'Travel',
  '电影': 'Movie',
  '口': 'Measure word for family',
  '爸爸': 'Dad / Father',
  '妈妈': 'Mom / Mother',
  '姐姐': 'Older sister',
  '退休': 'Retired',
  '老师': 'Teacher',
  '兄弟姐妹': 'Siblings',
  '独生子': 'Only son',
  '明天': 'Tomorrow',
  '长城': 'Great Wall',
  '出发': 'Set off',
  '地铁': 'Subway',
  '方便': 'Convenient',
  '午饭': 'Lunch',
  '中国菜': 'Chinese food',
  '饺子': 'Dumplings',
  '越南河粉': 'Vietnamese pho',
  '做饭': 'Cook',
  '红烧肉': 'Braised pork',
  '咖啡': 'Coffee',

  // Âm nhạc
  '流行': 'Pop music',
  '说唱': 'Rap',
  '歌手': 'Singer',
  '认识': 'Know / Recognize',
  '香港': 'Hong Kong',
  '出名': 'Famous',
  '红': 'Popular / Famous',
  '公司': 'Company',
  '结婚': 'Get married',
  '孩子': 'Child / Children',
  '女儿': 'Daughter',
  '帅': 'Handsome',
  '演戏': 'Act / Drama',
  '妻子': 'Wife',
  '绯闻': 'Scandal / Rumor',
  '钱': 'Money',
  '老歌': 'Old song',
  '马上': 'Immediately / Right now',
  '歌': 'Song',
  '听': 'Listen',
  '谁': 'Who',
  '唱歌': 'Sing',
  '好听': 'Pleasant to hear',
  '拍': 'Take (photo)',
  '张': 'Measure word for CD/paper',
  '买': 'Buy',
  '更': 'More / Even more',
  '都': 'All / Both',
  '要': 'Want / Need',
  '几': 'How many / Several',
  '张学友': 'Jacky Cheung',
  '刘德华': 'Andy Lau',
  '吻别': 'Kiss Goodbye',
  '忘情水': 'Water of Forgetfulness',
  '很少': 'Rarely / Seldom',
  '哪个': 'Which one',
  '宝丽金': 'PolyGram',
  '朱丽倩': 'Carol Chu',
  'CD': 'CD',
  '这': 'This',
  '首': 'Measure word for songs',

  // Đi nhà hàng
  '菜单': 'Menu',
  '烤鸭': 'Roast duck',
  '宫保鸡丁': 'Kung Pao chicken',
  '麻婆豆腐': 'Mapo tofu',
  '水煮鱼': 'Poached spicy fish',
  '蒸饺': 'Steamed dumplings',
  '红酒': 'Red wine',
  '白酒': 'White liquor',
  '香槟': 'Champagne',
  '莫吉托': 'Mojito',
  '马天尼': 'Martini',
  '鸡尾酒': 'Cocktail',
  '特色菜': 'Specialty dish',
  '酒水': 'Drinks / Beverages',
  '付款': 'Pay / Payment',
  '折扣': 'Discount',
  '发票': 'Invoice / Receipt',
  '小费': 'Tip',
  '信用卡': 'Credit card',
  '餐巾纸': 'Napkins',
  '推荐': 'Recommend',
  '好吃': 'Delicious',
  '饮料': 'Beverage',
  '上菜': 'Serve dishes',
  '服务': 'Service',
  '瓶': 'Bottle',
  '杯': 'Glass / Cup',
};

export function getVocabEnglish(vocab: { hanzi: string; vietnamese: string; english?: string }): string {
  if (vocab.english) return vocab.english;
  if (VOCAB_ENGLISH_MAP[vocab.hanzi]) return VOCAB_ENGLISH_MAP[vocab.hanzi];
  return '';
}


