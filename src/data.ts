export type Vocabulary = {
  id: number;
  pinyin: string;
  hanzi: string;
  vietnamese: string;
  hanViet?: string;
  example: {
    pinyin: string;
    hanzi: string;
    vietnamese: string;
    english?: string;
  };
};

export type ConversationLine = {
  id: number;
  speaker: string;
  pinyin: string;
  hanzi: string;
  vietnamese: string;
  english?: string;
};

export type GrammarRule = {
  id: number;
  title: string;
  description: string;
  examples: {
    pinyin: string;
    hanzi: string;
    vietnamese: string;
    english?: string;
  }[];
};

export type Grammar = GrammarRule;

export type TopicData = {
  id: string;
  title: string;
  conversationData: ConversationLine[];
  vocabularyData: Vocabulary[];
  grammarData: GrammarRule[];
};

export const topics: TopicData[] = [
  {
    id: 'chao-hoi',
    title: 'Chào hỏi xã giao',
    conversationData: [
      { id: 1, speaker: 'A', pinyin: 'Nǐ hǎo! Wǒ jiào Zhèng Xián. Nǐ jiào shénme míngzi?', hanzi: '你好！我叫郑贤。你叫什么名字？', vietnamese: 'Xin chào! Tôi tên là Trịnh Hiền. Bạn tên là gì?', english: 'Hello! My name is Zheng Xian. What is your name?' },
      { id: 2, speaker: 'B', pinyin: 'Nǐ hǎo! Wǒ jiào Kelvin. Wǒ jīnián èrshíbā suì, nǐ jīnián duō dà le?', hanzi: '你好！我叫Kelvin。我今年二十八岁，你今年多大了？', vietnamese: 'Xin chào! Tôi tên là Kelvin. Tôi năm nay 28 tuổi, năm nay bạn bao nhiêu tuổi rồi?', english: 'Hello! My name is Kelvin. I am 28 years old this year, how old are you this year?' },
      { id: 3, speaker: 'A', pinyin: 'Wǒ jīnián èrshíwǔ suì le. Wǒ shì Zhōngguórén, nǐ shì nǎ guó rén?', hanzi: '我今年二十五岁了。我是中国人，你是哪国人？', vietnamese: 'Tôi năm nay 25 tuổi rồi. Tôi là người Trung Quốc, bạn là người nước nào?', english: 'I am 25 years old this year. I am Chinese, what country are you from?' },
      { id: 4, speaker: 'B', pinyin: 'Wǒ shì Yuènánrén. Wǒ xiànzài zài Běijīng gōngzuò, nǐ ne?', hanzi: '我是越南人。我现在在北京工作，你呢？', vietnamese: 'Tôi là người Việt Nam. Hiện tại tôi đang làm việc tại Bắc Kinh, còn bạn?', english: 'I am Vietnamese. I am currently working in Beijing, and you?' },
      { id: 5, speaker: 'A', pinyin: 'Wǒ yě zài Běijīng gōngzuò. Wǒ shì lǚxíngshè de dǎoyóu, nǐ zuò shénme gōngzuò?', hanzi: '我也在北京工作。我是旅行社的导游，你做什么工作？', vietnamese: 'Tôi cũng làm việc ở Bắc Kinh. Tôi là hướng dẫn viên của một công ty du lịch, bạn làm công việc gì?', english: 'I also work in Beijing. I am a tour guide at a travel agency, what do you do?' },
      { id: 6, speaker: 'B', pinyin: 'Wǒ shì ruǎnjiàn gōngchéngshī, zài kējì gōngsī gōngzuò. Nǐ xǐhuan nǐ de gōngzuò ma?', hanzi: '我是软件工程师，在科技公司工作。你喜欢你的工作吗？', vietnamese: 'Tôi là kỹ sư phần mềm, làm việc tại công ty công nghệ. Bạn có thích công việc của mình không?', english: 'I am a software engineer, working at a tech company. Do you like your job?' },
      { id: 7, speaker: 'A', pinyin: 'Wǒ fēicháng xǐhuan, yīnwèi kěyǐ qù hěnduō dìfang. Nǐ píngshí yǒu shénme àihào?', hanzi: '我非常喜欢，因为可以去很多地方。你平时有什么爱好？', vietnamese: 'Tôi cực kỳ thích, bởi vì có thể đi đến nhiều nơi. Bình thường bạn có sở thích gì?', english: 'I like it very much because I can go to many places. What are your hobbies usually?' },
      { id: 8, speaker: 'B', pinyin: 'Wǒ xǐhuan tīng yīnyuè hé lǚxíng. Nǐ xǐhuan kàn diànyǐng ma?', hanzi: '我喜欢听音乐和旅行。你喜欢看电影吗？', vietnamese: 'Tôi thích nghe nhạc và đi du lịch. Bạn có thích xem phim không?', english: 'I like listening to music and traveling. Do you like watching movies?' },
      { id: 9, speaker: 'A', pinyin: 'Wǒ yě hěn xǐhuan kàn diànyǐng, hái xǐhuan chànggē. Nǐ jiā yǒu jǐ kǒu rén?', hanzi: '我也很喜欢看电影，还喜欢唱歌。你家有几口人？', vietnamese: 'Tôi cũng rất thích xem phim, còn thích hát nữa. Nhà bạn có mấy người?', english: 'I also like watching movies very much, and I also like singing. How many people are in your family?' },
      { id: 10, speaker: 'B', pinyin: 'Wǒ jiã yǒu sān kǒu rén. Nǐ jiā dōu yǒu shénme rén?', hanzi: '我家有三口人。你家都有什么人？', vietnamese: 'Nhà tôi có ba người. Nhà bạn gồm những ai?', english: 'My family has three people. Who is in your family?' },
      { id: 11, speaker: 'A', pinyin: 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. Nǐ bàba māma gōngzuò ma?', hanzi: '我家有四口人：爸爸、妈妈、姐姐和我。你爸爸妈妈工作吗？', vietnamese: 'Nhà tôi có bốn người: bố, mẹ, chị gái và tôi. Bố mẹ bạn có đi làm không?', english: 'My family has four people: dad, mom, older sister and me. Do your parents work?' },
      { id: 12, speaker: 'B', pinyin: 'Tāmen dōu tuìxiū le. Nǐ jiějie zuò shénme gōngzuò?', hanzi: '他们都退休了。你姐姐做什么工作？', vietnamese: 'Họ đều nghỉ hưu rồi. Chị gái bạn làm công việc gì?', english: 'They are both retired. What does your older sister do?' },
      { id: 13, speaker: 'A', pinyin: 'Tā shì lǎoshī, zài xuéxiào gōngzuò. Nǐ yǒu xiōngdì jiěmèi ma?', hanzi: '她是老师，在学校工作。你有兄弟姐妹吗？', vietnamese: 'Chị ấy là giáo viên, làm việc ở trường học. Bạn có anh chị em gì không?', english: 'She is a teacher, working at a school. Do you have siblings?' },
      { id: 14, speaker: 'B', pinyin: 'Wǒ shì dúshēngzǐ. Nǐ míngtiān yào qù nǎr lǚxíng?', hanzi: '我是独生子。你明天要去哪儿旅行？', vietnamese: 'Tôi là con một. Ngày mai bạn định đi du lịch ở đâu?', english: 'I am an only child. Where are you going to travel tomorrow?' },
      { id: 15, speaker: 'A', pinyin: 'Wǒ míngtiān qù Chángchéng. Nǐ xiǎng yīqǐ qù ma?', hanzi: '我明天去长城。你想一起去吗？', vietnamese: 'Ngày mai tôi đi Trường Thành. Bạn có muốn đi cùng không?', english: 'I am going to the Great Wall tomorrow. Would you like to go together?' },
      { id: 16, speaker: 'B', pinyin: 'Wǒ fēicháng xiǎng qù! Wǒmen míngtiān jǐ diǎn chūfā?', hanzi: '我非常想去！我们明天几点出发？', vietnamese: 'Tôi cực kỳ muốn đi! Ngày mai chúng ta mấy giờ xuất phát?', english: 'I would love to go! What time do we set off tomorrow?' },
      { id: 17, speaker: 'A', pinyin: 'Wǒmen zǎoshang bā diǎn chūfā. Wǒmen zuò dìtiě qù, hǎo ma?', hanzi: '我们早上八点出发。我们坐地铁去，好吗？', vietnamese: 'Chúng ta xuất phát lúc 8 giờ sáng. Chúng ta đi tàu điện ngầm nhé, được không?', english: 'We set off at 8:00 AM. We go by subway, okay?' },
      { id: 18, speaker: 'B', pinyin: 'Hǎo de, dìtiě hěn fāngbiàn. Wǒmen zài nǎr chī wǔfàn?', hanzi: '好的，地铁很方便。我们在哪儿吃午饭？', vietnamese: 'Được thôi, tàu điện ngầm rất tiện lợi. Chúng ta ăn trưa ở đâu?', english: 'Okay, the subway is very convenient. Where do we eat lunch?' },
      { id: 19, speaker: 'A', pinyin: 'Wǒmen zài Chángchéng fùjìn chī. Nǐ xǐhuan chī Zhōngguó cài ma?', hanzi: '我们在长城附近吃。你喜欢吃中国菜吗？', vietnamese: 'Chúng ta ăn ở gần Trường Thành. Bạn có thích ăn món ăn Trung Quốc không?', english: 'We will eat near the Great Wall. Do you like Chinese food?' },
      { id: 20, speaker: 'B', pinyin: 'Wǒ fēicháng xǐhuan, tèbié shì jiǎozi. Nǐ chī guò Yuènán cài ma?', hanzi: '我非常喜欢，特别是饺子。你吃过越南菜吗？', vietnamese: 'Tôi cực kỳ thích, đặc biệt là sủi cảo. Bạn từng ăn món ăn Việt Nam chưa?', english: 'I like it very much, especially dumplings. Have you eaten Vietnamese food?' },
      { id: 21, speaker: 'A', pinyin: 'Wǒ chī guò, Yuènán héfěn hěn hǎo chī! Nǐ huì zuò fàn ma?', hanzi: '我吃过，越南河粉很好吃！你会做饭吗？', vietnamese: 'Tôi ăn rồi, phở Việt Nam ngon lắm! Bạn biết nấu ăn không?', english: 'I have, Vietnamese pho is very delicious! Can you cook?' },
      { id: 22, speaker: 'B', pinyin: 'Wǒ huì zuò yìdiǎnr. Nǐ zuì náshǒu de cài shì shénme?', hanzi: '我会做一点儿。你最拿手的菜是什么？', vietnamese: 'Tôi biết nấu một chút. Món ăn sở trường nhất của bạn là gì?', english: 'I can cook a little bit. What is your specialty dish?' },
      { id: 23, speaker: 'A', pinyin: 'Wǒ huì zuò hóngshāoròu. Nǐ hē chá hái shì hē kāfēi?', hanzi: '我会做红烧肉。你喝茶还是喝咖啡？', vietnamese: 'Tôi biết làm thịt kho tàu. Bạn uống trà hay uống cà phê?', english: 'I can make braised pork. Do you drink tea or coffee?' },
      { id: 24, speaker: 'B', pinyin: 'Wǒ xǐhuan hē chá. Zhōngguó chá hěn chūmíng, nǐ xǐhuan shénme chá?', hanzi: '我喜欢喝茶。中国茶很出名，你喜欢什么茶？', vietnamese: 'Tôi thích uống trà. Trà Trung Quốc rất nổi tiếng, bạn thích trà gì?', english: 'I like drinking tea. Chinese tea is very famous, what tea do you like?' },
      { id: 25, speaker: 'A', pinyin: 'Wǒ xǐhuan lùchá. Míngtiān wǒmen kěyǐ qù mǎi chá, hǎo ma?', hanzi: '我喜欢绿茶。明天我们可以去买茶，好吗？', vietnamese: 'Tôi thích trà xanh. Ngày mai chúng ta có thể đi mua trà, được không?', english: 'I like green tea. Tomorrow we can go buy tea, okay?' },
      { id: 26, speaker: 'B', pinyin: 'Tài hǎo le! Kěyǐ yòng shǒujī zhīfù ma?', hanzi: '太好了！可以用手机支付吗？', vietnamese: 'Tuyệt quá! Có thể dùng điện thoại di động để thanh toán không?', english: 'Great! Can I pay with a mobile phone?' },
      { id: 27, speaker: 'A', pinyin: 'Kěyǐ, Zhōngguó dōu yòng Wēixìn huò Zhīfùbǎo. Nǐ bǎngdìng yínhángkǎ le ma?', hanzi: '可以，中国都用微信或支付宝。你绑定银行卡了吗？', vietnamese: 'Được chứ, Trung Quốc toàn dùng WeChat hoặc Alipay. Bạn đã liên kết thẻ ngân hàng chưa?', english: 'Yes, everyone in China uses WeChat or Alipay. Have you linked your bank card?' },
      { id: 28, speaker: 'B', pinyin: 'Wǒ bǎngdìng le, hěn fāngbiàn. Zhèlǐ de wǎngshù kuài ma?', hanzi: '我绑定了，很方便。这里的网速快吗？', vietnamese: 'Tôi liên kết rồi, rất tiện lợi. Tốc độ mạng ở đây nhanh không?', english: 'I have linked it, it is very convenient. Is the internet speed here fast?' },
      { id: 29, speaker: 'A', pinyin: 'Fēicháng kuài, dōu shì 5G. Nǐ mǎi le Zhōngguó diànhuàkǎ ma?', hanzi: '非常快，都是5G。你买了中国电话卡吗？', vietnamese: 'Cực kỳ nhanh, đều là 5G cả. Bạn đã mua sim điện thoại Trung Quốc chưa?', english: 'Very fast, all 5G. Did you buy a Chinese SIM card?' },
      { id: 30, speaker: 'B', pinyin: 'Wǒ mǎi le, zài jīchǎng mǎi de. Míngtiān tiānqì zěnmeyàng?', hanzi: '我买了，在机场买的。明天天气怎么样？', vietnamese: 'Tôi mua rồi, mua ở sân bay. Thời tiết ngày mai thế nào?', english: 'I bought one at the airport. How is the weather tomorrow?' },
      { id: 31, speaker: 'A', pinyin: 'Míngtiān tiānqì hěn rè. Nǐ chuān kùzi hái shì duǎnkù?', hanzi: '明天天气很热。你穿裤子还是短裤？', vietnamese: 'Thời tiết ngày mai rất nóng. Bạn mặc quần dài hay quần ngắn (quần đùi)?', english: 'Tomorrow weather is very hot. Are you wearing pants or shorts?' },
      { id: 32, speaker: 'B', pinyin: 'Wǒ chuān duǎnkù. Wǒmen xūyào dài fángshàishuāng ma?', hanzi: '我穿短裤。我们需要带防晒霜吗？', vietnamese: 'Tôi mặc quần ngắn. Chúng ta có cần mang kem chống nắng không?', english: 'I wear shorts. Do we need to bring sunscreen?' },
      { id: 33, speaker: 'A', pinyin: 'Xūyào, tàiyáng fēicháng dà. Nǐ dài yǔsǎn le ma?', hanzi: '需要，太阳非常大。你带雨伞了吗？', vietnamese: 'Cần chứ, mặt trời rất to. Bạn đã mang ô/dù theo chưa?', english: 'Yes, the sun is very strong. Did you bring an umbrella?' },
      { id: 34, speaker: 'B', pinyin: 'Wǒ dài le. Míngtiān nǐ kěyǐ bāng wǒ pāizhào ma?', hanzi: '我带了。明天你可以帮我拍照吗？', vietnamese: 'Tôi mang rồi. Ngày mai bạn có thể giúp tôi chụp ảnh được không?', english: 'I brought one. Can you help me take photos tomorrow?' },
      { id: 35, speaker: 'A', pinyin: 'Dāngrán kěyǐ, wǒ pāizhào hěn hǎo de. Nǐ xǐhuan pāizhào ma?', hanzi: '当然可以，我拍照很好的。你喜欢拍照吗？', vietnamese: 'Đương nhiên là được, tôi chụp ảnh đẹp lắm. Bạn có thích chụp ảnh không?', english: 'Of course, I take photos very well. Do you like taking photos?' },
      { id: 36, speaker: 'B', pinyin: 'Wǒ fēicháng xǐhuan, hái dài le xiàngjī. Míngtiān wǎnshang wǒmen qù nǎr?', hanzi: '我非常喜欢，还带了相机。明天晚上我们去哪儿？', vietnamese: 'Tôi cực kỳ thích, còn mang cả máy ảnh nữa. Tối mai chúng ta đi đâu?', english: 'I like it very much, and I also brought a camera. Where are we going tomorrow night?' },
      { id: 37, speaker: 'A', pinyin: 'Wǎnshang qù chī Běijīng kǎoyā. Nǐ tīngshuō guò ma?', hanzi: '晚上去吃北京烤鸭。你听说过吗？', vietnamese: 'Tối mai đi ăn vịt quay Bắc Kinh. Bạn từng nghe qua chưa?', english: 'Tomorrow night we go eat Peking duck. Have you heard of it?' },
      { id: 38, speaker: 'B', pinyin: 'Wǒ tīngshuō guò, fēicháng chūmíng! Guì bu guì?', hanzi: '我听说过，非常出名！贵不贵？', vietnamese: 'Tôi từng nghe nói qua, vô cùng nổi tiếng! Có đắt không?', english: 'I have heard of it, very famous! Is it expensive?' },
      { id: 39, speaker: 'A', pinyin: 'Bù guì, wǒ qǐngkè. Jīntiān hěn wǎn le, nǐ lèi ma, yào zǎodiǎn xiūxi ma?', hanzi: '不贵，我请客。今天很晚了，你累吗，要早点休息吗？', vietnamese: 'Không đắt đâu, tôi khao. Hôm nay rất muộn rồi, bạn mệt không, muốn nghỉ ngơi sớm không?', english: 'Not expensive, my treat. It is late today, are you tired, do you want to rest early?' },
      { id: 40, speaker: 'B', pinyin: 'Wǒ yǒudiǎnr lèi le. Míngtiān jiàn, wǎn\'ān!', hanzi: '我有点儿累了。明天见，晚安！', vietnamese: 'Tôi hơi mệt rồi. Hẹn gặp lại ngày mai, chúc ngủ ngon!', english: 'I am a bit tired. See you tomorrow, good night!' }
    ],
    vocabularyData: [
      { id: 1, pinyin: 'Nǐ hǎo', hanzi: '你好', vietnamese: 'Xin chào', example: { pinyin: 'Nǐ hǎo! Wǒ jiào Zhèng Xián.', hanzi: '你好！我叫郑贤。', vietnamese: 'Xin chào! Tôi tên là Trịnh Hiền.' } },
      { id: 2, pinyin: 'jiào', hanzi: '叫', vietnamese: 'Tên là, gọi là', example: { pinyin: 'Nǐ jiào shénme míngzi?', hanzi: '你叫什么名字？', vietnamese: 'Bạn tên là gì?' } },
      { id: 3, pinyin: 'míngzi', hanzi: '名字', vietnamese: 'Tên, danh tính', example: { pinyin: 'Nǐ jiào shénme míngzi?', hanzi: '你叫什么名字？', vietnamese: 'Bạn tên là gì?' } },
      { id: 4, pinyin: 'jīnián', hanzi: '今年', vietnamese: 'Năm nay', example: { pinyin: 'Wǒ jīnián èrshíbā suì.', hanzi: '我今年二十八岁。', vietnamese: 'Tôi năm nay 28 tuổi.' } },
      { id: 5, pinyin: 'suì', hanzi: '岁', vietnamese: 'Tuổi', example: { pinyin: 'Wǒ jīnián èrshíwǔ suì le.', hanzi: '我今年二十五岁了。', vietnamese: 'Tôi năm nay 25 tuổi rồi.' } },
      { id: 6, pinyin: 'nǎ', hanzi: '哪', vietnamese: 'Nào, cái nào', example: { pinyin: 'Nǐ shì nǎ guó rén?', hanzi: '你是哪国人？', vietnamese: 'Bạn là người nước nào?' } },
      { id: 7, pinyin: 'guó', hanzi: '国', vietnamese: 'Nước, quốc gia', example: { pinyin: 'Nǐ shì nǎ guó rén?', hanzi: '你是哪国人？', vietnamese: 'Bạn là người nước nào?' } },
      { id: 8, pinyin: 'rén', hanzi: '人', vietnamese: 'Người', example: { pinyin: 'Wǒ shì Yuènánrén.', hanzi: '我是越南人。', vietnamese: 'Tôi là người Việt Nam.' } },
      { id: 9, pinyin: 'xiànzài', hanzi: '现在', vietnamese: 'Hiện tại', example: { pinyin: 'Wǒ xiànzài zài Běijīng.', hanzi: '我现在在北京。', vietnamese: 'Tôi bây giờ ở Bắc Kinh.' } },
      { id: 10, pinyin: 'gōngzuò', hanzi: '工作', vietnamese: 'Công việc, làm việc', example: { pinyin: 'Nǐ zuò shénme gōngzuò?', hanzi: '你做什么工作？', vietnamese: 'Bạn làm công việc gì?' } },
      { id: 11, pinyin: 'lǚxíngshè', hanzi: '旅行社', vietnamese: 'Công ty du lịch', example: { pinyin: 'Wǒ shì lǚxíngshè de dǎoyóu.', hanzi: '我是旅行社的导游。', vietnamese: 'Tôi là hướng dẫn viên của công ty du lịch.' } },
      { id: 12, pinyin: 'dǎoyóu', hanzi: '导游', vietnamese: 'Hướng dẫn viên du lịch', example: { pinyin: 'Wǒ shì lǚxíngshè de dǎoyóu.', hanzi: '我是旅行社的导游。', vietnamese: 'Tôi là hướng dẫn viên của công ty du lịch.' } },
      { id: 13, pinyin: 'ruǎnjiàn', hanzi: '软件', vietnamese: 'Phần mềm', example: { pinyin: 'Wǒ shì ruǎnjiàn gōngchéngshī.', hanzi: '我是软件工程师。', vietnamese: 'Tôi là kỹ sư phần mềm.' } },
      { id: 14, pinyin: 'gōngchéngshī', hanzi: '工程师', vietnamese: 'Kỹ sư', example: { pinyin: 'Wǒ shì ruǎnjiàn gōngchéngshī.', hanzi: '我是软件工程师。', vietnamese: 'Tôi là kỹ sư phần mềm.' } },
      { id: 15, pinyin: 'kējì', hanzi: '科技', vietnamese: 'Công nghệ', example: { pinyin: 'Wǒ zài kējì gōngsī gōngzuò.', hanzi: '我在科技公司工作。', vietnamese: 'Tôi làm việc tại công ty công nghệ.' } },
      { id: 16, pinyin: 'xǐhuan', hanzi: '喜欢', vietnamese: 'Thích', example: { pinyin: 'Nǐ xǐhuan nǐ de gōngzuò ma?', hanzi: '你喜欢你的工作吗？', vietnamese: 'Bạn có thích công việc của mình không?' } },
      { id: 17, pinyin: 'àihào', hanzi: '爱好', vietnamese: 'Sở thích', example: { pinyin: 'Nǐ píngshí yǒu shénme àihào?', hanzi: '你平时有什么爱好？', vietnamese: 'Bình thường bạn có sở thích gì?' } },
      { id: 18, pinyin: 'yīnyuè', hanzi: '音乐', vietnamese: 'Âm nhạc', example: { pinyin: 'Wǒ xǐhuan tīng yīnyuè.', hanzi: '我喜欢听音乐。', vietnamese: 'Tôi thích nghe nhạc.' } },
      { id: 19, pinyin: 'lǚxíng', hanzi: '旅行', vietnamese: 'Du lịch', example: { pinyin: 'Wǒ xǐhuan tīng yīnyuè hé lǚxíng.', hanzi: '我喜欢听音乐和旅行。', vietnamese: 'Tôi thích nghe nhạc và đi du lịch.' } },
      { id: 20, pinyin: 'diànyǐng', hanzi: '电影', vietnamese: 'Phim điện ảnh', example: { pinyin: 'Nǐ xǐhuan kàn diànyǐng ma?', hanzi: '你喜欢看电影吗？', vietnamese: 'Bạn có thích xem phim không?' } },
      { id: 21, pinyin: 'kǒu', hanzi: '口', vietnamese: 'Lượng từ (thành viên gia đình)', example: { pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', hanzi: '你家有几口人？', vietnamese: 'Nhà bạn có mấy người?' } },
      { id: 22, pinyin: 'bàba', hanzi: '爸爸', vietnamese: 'Bố, ba', example: { pinyin: 'Wǒ bàba māma gōngzuò.', hanzi: '我爸爸妈妈工作。', vietnamese: 'Bố mẹ tôi đi làm.' } },
      { id: 23, pinyin: 'māma', hanzi: '妈妈', vietnamese: 'Mẹ', example: { pinyin: 'Wǒ bàba māma gōngzuò.', hanzi: '我爸爸妈妈工作。', vietnamese: 'Bố mẹ tôi đi làm.' } },
      { id: 24, pinyin: 'jiějie', hanzi: '姐姐', vietnamese: 'Chị gái', example: { pinyin: 'Nǐ jiějie zuò shénme gōngzuò?', hanzi: '你姐姐做什么工作？', vietnamese: 'Chị gái bạn làm công việc gì?' } },
      { id: 25, pinyin: 'tuìxiū', hanzi: '退休', vietnamese: 'Nghỉ hưu', example: { pinyin: 'Tāmen dōu tuìxiū le.', hanzi: '他们都退休了。', vietnamese: 'Họ đều nghỉ hưu rồi.' } },
      { id: 26, pinyin: 'lǎoshī', hanzi: '老师', vietnamese: 'Giáo viên, thầy cô', example: { pinyin: 'Tā shì lǎoshī, zài xuéxiào gōngzuò.', hanzi: '她是老师，在学校工作。', vietnamese: 'Chị ấy là giáo viên, làm việc ở trường học.' } },
      { id: 27, pinyin: 'xiōngdì jiěmèi', hanzi: '兄弟姐妹', vietnamese: 'Anh chị em', example: { pinyin: 'Nǐ yǒu xiōngdì jiěmèi ma?', hanzi: '你有兄弟姐妹吗？', vietnamese: 'Bạn có anh chị em gì không?' } },
      { id: 28, pinyin: 'dúshēngzǐ', hanzi: '独生子', vietnamese: 'Con một (nam)', example: { pinyin: 'Wǒ shì dúshēngzǐ.', hanzi: '我是独生子。', vietnamese: 'Tôi là con một.' } },
      { id: 29, pinyin: 'míngtiān', hanzi: '明天', vietnamese: 'Ngày mai', example: { pinyin: 'Nǐ míngtiān yào qù nǎr lǚxíng?', hanzi: '你明天要去哪儿旅行？', vietnamese: 'Ngày mai bạn định đi du lịch ở đâu?' } },
      { id: 30, pinyin: 'Chángchéng', hanzi: '长城', vietnamese: 'Vạn Lý Trường Thành', example: { pinyin: 'Wǒ míngtiān qù Chángchéng.', hanzi: '我明天去长城。', vietnamese: 'Ngày mai tôi đi Trường Thành.' } },
      { id: 31, pinyin: 'chūfā', hanzi: '出发', vietnamese: 'Xuất phát, khởi hành', example: { pinyin: 'Wǒmen míngtiān jǐ diǎn chūfā?', hanzi: '我们明天几点出发？', vietnamese: 'Ngày mai chúng ta mấy giờ xuất phát?' } },
      { id: 32, pinyin: 'dìtiě', hanzi: '地铁', vietnamese: 'Tàu điện ngầm', example: { pinyin: 'Wǒmen zuò dìtiě qù, hǎo ma?', hanzi: '我们坐地铁去，好吗？', vietnamese: 'Chúng ta đi tàu điện ngầm nhé, được không?' } },
      { id: 33, pinyin: 'fāngbiàn', hanzi: '方便', vietnamese: 'Tiện lợi, thuận tiện', example: { pinyin: 'Dìtiě hěn fāngbiàn.', hanzi: '地铁很方便。', vietnamese: 'Tàu điện ngầm rất tiện lợi.' } },
      { id: 34, pinyin: 'wǔfàn', hanzi: '午饭', vietnamese: 'Cơm trưa, bữa trưa', example: { pinyin: 'Wǒmen zài nǎr chī wǔfàn?', hanzi: '我们在哪儿吃午饭？', vietnamese: 'Chúng ta ăn trưa ở đâu?' } },
      { id: 35, pinyin: 'Zhōngguó cài', hanzi: '中国菜', vietnamese: 'Món ăn Trung Quốc', example: { pinyin: 'Nǐ xǐhuan chī Zhōngguó cài ma?', hanzi: '你喜欢吃中国菜吗？', vietnamese: 'Bạn có thích ăn món ăn Trung Quốc không?' } },
      { id: 36, pinyin: 'jiǎozi', hanzi: '饺子', vietnamese: 'Sủi cảo, bánh chẻo', example: { pinyin: 'Wǒ fēicháng xǐhuan jiǎozi.', hanzi: '我非常喜欢饺子。', vietnamese: 'Tôi cực kỳ thích sủi cảo.' } },
      { id: 37, pinyin: 'Yuènán héfěn', hanzi: '越南河粉', vietnamese: 'Phở Việt Nam', example: { pinyin: 'Yuènán héfěn hěn hǎo chī!', hanzi: '越南河粉很好吃！', vietnamese: 'Phở Việt Nam ngon lắm!' } },
      { id: 38, pinyin: 'zuò fàn', hanzi: '做饭', vietnamese: 'Nấu ăn', example: { pinyin: 'Nǐ huì zuò fàn ma?', hanzi: '你会做饭吗？', vietnamese: 'Bạn biết nấu ăn không?' } },
      { id: 39, pinyin: 'hóngshāoròu', hanzi: '红烧肉', vietnamese: 'Thịt kho tàu kiểu Trung', example: { pinyin: 'Wǒ huì zuò hóngshāoròu.', hanzi: '我会做红烧肉。', vietnamese: 'Tôi biết làm thịt kho tàu.' } },
      { id: 40, pinyin: 'kāfēi', hanzi: '咖啡', vietnamese: 'Cà phê', example: { pinyin: 'Nǐ hē chá hái shì hē kāfēi?', hanzi: '你喝茶还是喝咖啡？', vietnamese: 'Bạn uống trà hay uống cà phê?' } }
    ],
    grammarData: [
      {
        id: 1,
        title: '1. Hỏi tên với "shénme" (什么)',
        description: 'Dùng để hỏi về tên của một vật hoặc một người (Cái gì, tên gì).',
        examples: [
          { pinyin: 'Nǐ jiào shénme míngzi?', hanzi: '你叫什么名字？', vietnamese: 'Bạn tên là gì?' },
          { pinyin: 'Zhè shì shénme?', hanzi: '这是什么？', vietnamese: 'Đây là cái gì?' }
        ]
      },
      {
        id: 2,
        title: '2. Cách hỏi tuổi với "duō dà" (多大)',
        description: 'Dùng để hỏi tuổi của người ở độ tuổi bằng hoặc lớn hơn mình.',
        examples: [
          { pinyin: 'Nǐ jīnián duō dà le?', hanzi: '你今年多大了？', vietnamese: 'Năm nay bạn bao nhiêu tuổi rồi?' },
          { pinyin: 'Tā jīnián duō dà?', hanzi: '他今年多大？', vietnamese: 'Năm nay anh ấy bao nhiêu tuổi?' }
        ]
      },
      {
        id: 3,
        title: '3. Cách hỏi quốc tịch với "nǎ guó" (哪国)',
        description: 'Sử dụng cấu trúc: Chủ ngữ + 是 + 哪国人？ để hỏi quốc tịch của ai đó.',
        examples: [
          { pinyin: 'Nǐ shì nǎ guó rén?', hanzi: '你是哪国人？', vietnamese: 'Bạn là người nước nào?' },
          { pinyin: 'Wǒ shì Zhōngguórén.', hanzi: '我是中国人。', vietnamese: 'Tôi là người Trung Quốc.' }
        ]
      },
      {
        id: 4,
        title: '4. Cách dùng phó từ chỉ mức độ "fēicháng" (非常)',
        description: 'Phó từ đứng trước tính từ hoặc động từ tâm lý để biểu thị mức độ cực kỳ, vô cùng.',
        examples: [
          { pinyin: 'Wǒ fēicháng xǐhuan.', hanzi: '我非常喜欢。', vietnamese: 'Tôi cực kỳ thích.' },
          { pinyin: 'Tā fēicháng shuài.', hanzi: '他非常帅。', vietnamese: 'Anh ấy vô cùng đẹp trai.' }
        ]
      },
      {
        id: 5,
        title: '5. Lượng từ "kǒu" (口) trong gia đình',
        description: 'Lượng từ chuyên dùng để đếm số lượng thành viên trong gia đình. Cấu trúc: số lượng + 口 + 人.',
        examples: [
          { pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', hanzi: '你家有几口人？', vietnamese: 'Nhà bạn có mấy người?' },
          { pinyin: 'Wǒ jiā yǒu sān kǒu rén.', hanzi: '我家有三口人。', vietnamese: 'Nhà tôi có ba người.' }
        ]
      },
      {
        id: 6,
        title: '6. Câu hỏi lựa chọn với "hái shì" (还是)',
        description: 'Dùng để liên kết hai lựa chọn trong câu hỏi (Hoặc, hay là).',
        examples: [
          { pinyin: 'Nǐ hē chá hái shì hē kāfēi?', hanzi: '你喝茶还是喝咖啡？', vietnamese: 'Bạn uống trà hay là uống cà phê?' },
          { pinyin: 'Nǐ chuān kùzi hái shì duǎnkù?', hanzi: '你穿裤子还是短裤？', vietnamese: 'Bạn mặc quần dài hay quần đùi?' }
        ]
      }
    ]
  },
  {
    id: 'am-nhac',
    title: 'Âm nhạc',
    conversationData: [
      { id: 1, speaker: 'A', pinyin: 'Nǐ xǐhuan yīnyuè ma?', hanzi: '你喜欢音乐吗？', vietnamese: 'Bạn thích âm nhạc không?', english: 'Do you like music?' },
      { id: 2, speaker: 'B', pinyin: 'Wǒ hěn xǐhuan. Nǐ ne?', hanzi: '我很喜欢。你呢？', vietnamese: 'Tôi rất thích. Còn bạn?', english: 'I like it very much. What about you?' },
      { id: 3, speaker: 'A', pinyin: 'Wǒ yě xǐhuan. Nǐ tīng shénme?', hanzi: '我也喜欢。你听什么？', vietnamese: 'Tôi cũng thích. Bạn nghe gì?', english: 'I like it too. What do you listen to?' },
      { id: 4, speaker: 'B', pinyin: 'Wǒ tīng liúxíng gē. Nǐ tīng R&B ma?', hanzi: '我听流行歌。你听R&B吗？', vietnamese: 'Tôi nghe nhạc pop. Bạn nghe R&B không?', english: 'I listen to pop music. Do you listen to R&B?' },
      { id: 5, speaker: 'A', pinyin: 'Wǒ tīng R&B. Nǐ shuōchàng ma?', hanzi: '我听R&B。你说唱吗？', vietnamese: 'Tôi nghe R&B. Bạn rap không?', english: 'I listen to R&B. Do you rap?' },
      { id: 6, speaker: 'B', pinyin: 'Wǒ bù shuōchàng. Nǐ xǐhuan shuí?', hanzi: '我不说唱。你喜欢谁？', vietnamese: 'Tôi không rap. Bạn thích ai?', english: 'I don\'t rap. Who do you like?' },
      { id: 7, speaker: 'A', pinyin: 'Wǒ xǐhuan Zhāng Xuéyǒu. Nǐ rènshi tā ma?', hanzi: '我喜欢张学友。你认识他吗？', vietnamese: 'Tôi thích Trương Học Hữu. Bạn biết anh ấy không?', english: 'I like Jacky Cheung. Do you know him?' },
      { id: 8, speaker: 'B', pinyin: 'Wǒ rènshi tā. Tā shì Xiānggǎng rén ma?', hanzi: '我认识他。他是香港人吗？', vietnamese: 'Tôi biết anh ấy. Anh ấy là người Hồng Kông à?', english: 'I know him. Is he from Hong Kong?' },
      { id: 9, speaker: 'A', pinyin: 'Shì de. Tā hěn chūmíng ma?', hanzi: '是的。他很出名吗？', vietnamese: 'Đúng vậy. Anh ấy rất nổi tiếng không?', english: 'Yes. Is he very famous?' },
      { id: 10, speaker: 'B', pinyin: 'Tā fēicháng chūmíng. Tā chànggē hǎo ma?', hanzi: '他非常出名。他唱歌好吗？', vietnamese: 'Anh ấy vô cùng nổi tiếng. Anh ấy hát hay không?', english: 'He is extremely famous. Does he sing well?' },
      { id: 11, speaker: 'A', pinyin: 'Tā chànggē hěn hǎo. Tā yǒu shénme gē?', hanzi: '他唱歌很好。他有什么歌？', vietnamese: 'Anh ấy hát rất hay. Anh ấy có bài hát gì?', english: 'He sings very well. What songs does he have?' },
      { id: 12, speaker: 'B', pinyin: 'Tā yǒu Wěnbié. Nǐ tīng guò ma?', hanzi: '他有《吻别》。你听过吗？', vietnamese: 'Anh ấy có Nụ Hôn Biệt Ly. Bạn từng nghe chưa?', english: 'He has "Kiss Goodbye". Have you heard it?' },
      { id: 13, speaker: 'A', pinyin: 'Wǒ tīng guò. Zhè shǒu gē hěn hóng ma?', hanzi: '我听过。这首歌很红吗？', vietnamese: 'Tôi từng nghe. Bài hát này rất hot không?', english: 'I have heard it. Is this song very popular?' },
      { id: 14, speaker: 'B', pinyin: 'Fēicháng hóng. Tā zài nǎge gōngsī?', hanzi: '非常红。他在哪个公司？', vietnamese: 'Vô cùng hot. Anh ấy ở công ty nào?', english: 'Extremely popular. What company is he in?' },
      { id: 15, speaker: 'A', pinyin: 'Bǎolìjīn gōngsī. Tā jiéhūn le ma?', hanzi: '宝丽金公司。他结婚了吗？', vietnamese: 'Công ty PolyGram. Anh ấy kết hôn chưa?', english: 'PolyGram. Is he married?' },
      { id: 16, speaker: 'B', pinyin: 'Tā jiéhūn le. Tā yǒu háizi ma?', hanzi: '他结婚了。他有孩子吗？', vietnamese: 'Anh ấy kết hôn rồi. Anh ấy có con không?', english: 'He is married. Does he have children?' },
      { id: 17, speaker: 'A', pinyin: 'Tā yǒu nǚ\'ér. Tā pāi diànyǐng ma?', hanzi: '他有女儿。他拍电影吗？', vietnamese: 'Anh ấy có con gái. Anh ấy đóng phim không?', english: 'He has a daughter. Does he act in movies?' },
      { id: 18, speaker: 'B', pinyin: 'Tā pāi diànyǐng. Nǐ xǐhuan Liú Déhuá ma?', hanzi: '他拍电影。你喜欢刘德华吗？', vietnamese: 'Anh ấy đóng phim. Bạn thích Lưu Đức Hoa không?', english: 'He acts in movies. Do you like Andy Lau?' },
      { id: 19, speaker: 'A', pinyin: 'Wǒ yě xǐhuan. Tā yě shì gēshǒu ma?', hanzi: '我也喜欢。他也是歌手吗？', vietnamese: 'Tôi cũng thích. Anh ấy cũng là ca sĩ à?', english: 'I like him too. Is he also a singer?' },
      { id: 20, speaker: 'B', pinyin: 'Tā shì gēshǒu. Tā shuài bu shuài?', hanzi: '他是歌手。他帅不帅？', vietnamese: 'Anh ấy là ca sĩ. Anh ấy đẹp trai không?', english: 'He is a singer. Is he handsome?' },
      { id: 21, speaker: 'A', pinyin: 'Tā fēicháng shuài. Tā yǒu shénme gē?', hanzi: '他非常帅。他有什么歌？', vietnamese: 'Anh ấy vô cùng đẹp trai. Anh ấy có bài hát gì?', english: 'He is extremely handsome. What songs does he have?' },
      { id: 22, speaker: 'B', pinyin: 'Tā yǒu Wàngqíngshuǐ. Hǎo tīng ma?', hanzi: '他有《忘情水》。好听吗？', vietnamese: 'Anh ấy có Vong Tình Thủy. Hay không?', english: 'He has "Water of Forgetfulness". Is it good?' },
      { id: 23, speaker: 'A', pinyin: 'Hěn hǎo tīng. Tā yǎnxì ma?', hanzi: '很好听。他演戏吗？', vietnamese: 'Rất hay. Anh ấy đóng phim không?', english: 'Very good. Does he act?' },
      { id: 24, speaker: 'B', pinyin: 'Tā yǎn hěnduō xì. Nǐ yǎnxì ma?', hanzi: '他演很多戏。你演戏吗？', vietnamese: 'Anh ấy đóng rất nhiều phim. Bạn đóng phim không?', english: 'He acts in many movies. Do you act?' },
      { id: 25, speaker: 'A', pinyin: 'Wǒ bù yǎnxì. Tā jiéhūn le ma?', hanzi: '我不演戏。他结婚了吗？', vietnamese: 'Tôi không đóng phim. Anh ấy kết hôn chưa?', english: 'I don\'t act. Is he married?' },
      { id: 26, speaker: 'B', pinyin: 'Tā yě jiéhūn le. Tā qīzi shì shuí?', hanzi: '他也结婚了。他妻子是谁？', vietnamese: 'Anh ấy cũng kết hôn rồi. Vợ anh ấy là ai?', english: 'He is also married. Who is his wife?' },
      { id: 27, speaker: 'A', pinyin: 'Shì Zhū Lìqiàn. Tāmen yǒu fēiwén ma?', hanzi: '是朱丽倩。他们有绯闻吗？', vietnamese: 'Là Chu Lệ Thiên. Họ có scandal không?', english: 'Carol Chu. Do they have scandals?' },
      { id: 28, speaker: 'B', pinyin: 'Tāmen hěn shǎo fēiwén. Tāmen yǒu qián ma?', hanzi: '他们很少绯闻。他们有钱吗？', vietnamese: 'Họ rất ít scandal. Họ có tiền không?', english: 'They have very few scandals. Are they rich?' },
      { id: 29, speaker: 'A', pinyin: 'Tāmen hěn yǒu qián. Nǐ xǐhuan lǎogē ma?', hanzi: '他们很有钱。你喜欢老歌吗？', vietnamese: 'Họ rất có tiền. Bạn thích nhạc cũ không?', english: 'They are very rich. Do you like old songs?' },
      { id: 30, speaker: 'B', pinyin: 'Wǒ xǐhuan lǎogē. Nǐ yǒu CD ma?', hanzi: '我喜欢老歌。你有CD吗？', vietnamese: 'Tôi thích nhạc cũ. Bạn có CD không?', english: 'I like old songs. Do you have CDs?' },
      { id: 31, speaker: 'A', pinyin: 'Wǒ yǒu CD. Nǐ yào tīng ma?', hanzi: '我有CD。你要听吗？', vietnamese: 'Tôi có CD. Bạn muốn nghe không?', english: 'I have CDs. Do you want to listen?' },
      { id: 32, speaker: 'B', pinyin: 'Wǒ yào tīng. Wǒmen xiànzài tīng ma?', hanzi: '我要听。我们现在听吗？', vietnamese: 'Tôi muốn nghe. Chúng ta bây giờ nghe không?', english: 'I want to listen. Shall we listen now?' },
      { id: 33, speaker: 'A', pinyin: 'Xiànzài tīng. Tīng Zhāng Xuéyǒu ma?', hanzi: '现在听。听张学友吗？', vietnamese: 'Bây giờ nghe. Nghe Trương Học Hữu không?', english: 'Listen now. Listen to Jacky Cheung?' },
      { id: 34, speaker: 'B', pinyin: 'Hǎo de. Tā yǒu jǐ zhāng CD?', hanzi: '好的。他有几张CD？', vietnamese: 'Được. Anh ấy có mấy cái CD?', english: 'Okay. How many CDs does he have?' },
      { id: 35, speaker: 'A', pinyin: 'Tā yǒu hěnduō CD. Nǐ mǎi guò ma?', hanzi: '他有很多CD。你买过吗？', vietnamese: 'Anh ấy có rất nhiều CD. Bạn từng mua chưa?', english: 'He has many CDs. Have you bought any?' },
      { id: 36, speaker: 'B', pinyin: 'Wǒ mǎi guò. Liú Déhuá yǒu CD ma?', hanzi: '我买过。刘德华有CD吗？', vietnamese: 'Tôi từng mua. Lưu Đức Hoa có CD không?', english: 'I have bought some. Does Andy Lau have CDs?' },
      { id: 37, speaker: 'A', pinyin: 'Tā yě yǒu. Nǐ gèng xǐhuan shuí?', hanzi: '他也有。你更喜欢谁？', vietnamese: 'Anh ấy cũng có. Bạn thích ai hơn?', english: 'He has too. Who do you prefer?' },
      { id: 38, speaker: 'B', pinyin: 'Wǒ dōu xǐhuan. Nǐ yě shì ma?', hanzi: '我都喜欢。你也是吗？', vietnamese: 'Tôi đều thích. Bạn cũng vậy à?', english: 'I like both. You too?' },
      { id: 39, speaker: 'A', pinyin: 'Shì de. Wǒmen tīng gē ba?', hanzi: '是的。我们听歌吧？', vietnamese: 'Đúng vậy. Chúng ta nghe nhạc nhé?', english: 'Yes. Shall we listen to music?' },
      { id: 40, speaker: 'B', pinyin: 'Hǎo de! Mǎshàng tīng.', hanzi: '好的！马上听。', vietnamese: 'Được thôi! Nghe ngay.', english: 'Okay! Listen right now.' }
    ],
    vocabularyData: [
      { id: 1, pinyin: 'Liúxíng', hanzi: '流行', vietnamese: 'Thịnh hành, Pop', example: { pinyin: 'Liúxíng gē.', hanzi: '流行歌。', vietnamese: 'Nhạc pop.' } },
      { id: 2, pinyin: 'Shuōchàng', hanzi: '说唱', vietnamese: 'Rap', example: { pinyin: 'Wǒ bù shuōchàng.', hanzi: '我不说唱。', vietnamese: 'Tôi không rap.' } },
      { id: 3, pinyin: 'Gēshǒu', hanzi: '歌手', vietnamese: 'Ca sĩ', example: { pinyin: 'Tā shì gēshǒu.', hanzi: '他是歌手。', vietnamese: 'Anh ấy là ca sĩ.' } },
      { id: 4, pinyin: 'Rènshi', hanzi: '认识', vietnamese: 'Biết, quen biết', example: { pinyin: 'Wǒ rènshi tā.', hanzi: '我认识他。', vietnamese: 'Tôi quen anh ấy.' } },
      { id: 5, pinyin: 'Xiānggǎng', hanzi: '香港', vietnamese: 'Hồng Kông', example: { pinyin: 'Xiānggǎng rén.', hanzi: '香港人。', vietnamese: 'Người Hồng Kông.' } },
      { id: 6, pinyin: 'Chūmíng', hanzi: '出名', vietnamese: 'Nổi tiếng', example: { pinyin: 'Tā hěn chūmíng.', hanzi: '他很出名。', vietnamese: 'Anh ấy rất nổi tiếng.' } },
      { id: 7, pinyin: 'Hóng', hanzi: '红', vietnamese: 'Đỏ, hot, nổi tiếng', example: { pinyin: 'Zhè shǒu gē hěn hóng.', hanzi: '这首歌很红。', vietnamese: 'Bài hát này rất hot.' } },
      { id: 8, pinyin: 'Gōngsī', hanzi: '公司', vietnamese: 'Công ty', example: { pinyin: 'Nǎge gōngsī?', hanzi: '哪个公司？', vietnamese: 'Công ty nào?' } },
      { id: 9, pinyin: 'Jiéhūn', hanzi: '结婚', vietnamese: 'Kết hôn', example: { pinyin: 'Tā jiéhūn le.', hanzi: '他结婚了。', vietnamese: 'Anh ấy kết hôn rồi.' } },
      { id: 10, pinyin: 'Háizi', hanzi: '孩子', vietnamese: 'Con cái, đứa trẻ', example: { pinyin: 'Yǒu háizi ma?', hanzi: '有孩子吗？', vietnamese: 'Có con không?' } },
      { id: 11, pinyin: 'Nǚ\'ér', hanzi: '女儿', vietnamese: 'Con gái', example: { pinyin: 'Tā yǒu nǚ\'ér.', hanzi: '他有女儿。', vietnamese: 'Anh ấy có con gái.' } },
      { id: 12, pinyin: 'Diànyǐng', hanzi: '电影', vietnamese: 'Phim điện ảnh', example: { pinyin: 'Pāi diànyǐng.', hanzi: '拍电影。', vietnamese: 'Đóng phim điện ảnh.' } },
      { id: 13, pinyin: 'Shuài', hanzi: '帅', vietnamese: 'Đẹp trai', example: { pinyin: 'Tā fēicháng shuài.', hanzi: '他非常帅。', vietnamese: 'Anh ấy vô cùng đẹp trai.' } },
      { id: 14, pinyin: 'Yǎnxì', hanzi: '演戏', vietnamese: 'Đóng phim, diễn kịch', example: { pinyin: 'Wǒ bù yǎnxì.', hanzi: '我不演戏。', vietnamese: 'Tôi không đóng phim.' } },
      { id: 15, pinyin: 'Qīzi', hanzi: '妻子', vietnamese: 'Vợ', example: { pinyin: 'Tā qīzi shì shuí?', hanzi: '他妻子是谁？', vietnamese: 'Vợ anh ấy là ai?' } },
      { id: 16, pinyin: 'Fēiwén', hanzi: '绯闻', vietnamese: 'Scandal, tin đồn', example: { pinyin: 'Tāmen hěn shǎo fēiwén.', hanzi: '他们很少绯闻。', vietnamese: 'Họ rất ít scandal.' } },
      { id: 17, pinyin: 'Qián', hanzi: '钱', vietnamese: 'Tiền', example: { pinyin: 'Tāmen hěn yǒu qián.', hanzi: '他们很有钱。', vietnamese: 'Họ rất có tiền.' } },
      { id: 18, pinyin: 'Lǎogē', hanzi: '老歌', vietnamese: 'Bài hát cũ', example: { pinyin: 'Wǒ xǐhuan lǎogē.', hanzi: '我喜欢老歌。', vietnamese: 'Tôi thích bài hát cũ.' } },
      { id: 19, pinyin: 'Xiànzài', hanzi: '现在', vietnamese: 'Bây giờ', example: { pinyin: 'Xiànzài tīng.', hanzi: '现在听。', vietnamese: 'Bây giờ nghe.' } },
      { id: 20, pinyin: 'Mǎshàng', hanzi: '马上', vietnamese: 'Ngay lập tức', example: { pinyin: 'Mǎshàng tīng.', hanzi: '马上听。', vietnamese: 'Nghe ngay lập tức.' } },
      { id: 21, pinyin: 'Yīnyuè', hanzi: '音乐', vietnamese: 'Âm nhạc', example: { pinyin: 'Xǐhuan yīnyuè.', hanzi: '喜欢音乐。', vietnamese: 'Thích âm nhạc.' } },
      { id: 22, pinyin: 'Gē', hanzi: '歌', vietnamese: 'Bài hát', example: { pinyin: 'Hǎo tīng de gē.', hanzi: '好听的歌。', vietnamese: 'Bài hát hay.' } },
      { id: 23, pinyin: 'Tīng', hanzi: '听', vietnamese: 'Nghe', example: { pinyin: 'Tīng gē.', hanzi: '听歌。', vietnamese: 'Nghe nhạc.' } },
      { id: 24, pinyin: 'Shuí (shéi)', hanzi: '谁', vietnamese: 'Ai', example: { pinyin: 'Tā shì shuí?', hanzi: '他是谁？', vietnamese: 'Anh ấy là ai?' } },
      { id: 25, pinyin: 'Chànggē', hanzi: '唱歌', vietnamese: 'Hát', example: { pinyin: 'Xǐhuan chànggē.', hanzi: '喜欢唱歌。', vietnamese: 'Thích hát.' } },
      { id: 26, pinyin: 'Hǎo tīng', hanzi: '好听', vietnamese: 'Hay (nghe hay)', example: { pinyin: 'Fēicháng hǎo tīng.', hanzi: '非常好听。', vietnamese: 'Vô cùng hay.' } },
      { id: 27, pinyin: 'Pāi', hanzi: '拍', vietnamese: 'Quay, chụp', example: { pinyin: 'Pāi zhàopiàn.', hanzi: '拍照片。', vietnamese: 'Chụp ảnh.' } },
      { id: 28, pinyin: 'Zhāng', hanzi: '张', vietnamese: 'Lượng từ (cho CD, giấy...)', example: { pinyin: 'Yì zhāng CD.', hanzi: '一张CD。', vietnamese: 'Một cái CD.' } },
      { id: 29, pinyin: 'Mǎi', hanzi: '买', vietnamese: 'Mua', example: { pinyin: 'Mǎi CD.', hanzi: '买CD。', vietnamese: 'Mua CD.' } },
      { id: 30, pinyin: 'Gèng', hanzi: '更', vietnamese: 'Càng, hơn', example: { pinyin: 'Gèng xǐhuan.', hanzi: '更喜欢。', vietnamese: 'Càng thích.' } },
      { id: 31, pinyin: 'Dōu', hanzi: '都', vietnamese: 'Đều', example: { pinyin: 'Wǒmen dōu shì.', hanzi: '我们都是。', vietnamese: 'Chúng ta đều là...' } },
      { id: 32, pinyin: 'Yào', hanzi: '要', vietnamese: 'Muốn, cần', example: { pinyin: 'Wǒ yào tīng.', hanzi: '我要听。', vietnamese: 'Tôi muốn nghe.' } },
      { id: 33, pinyin: 'Jǐ', hanzi: '几', vietnamese: 'Mấy, vài', example: { pinyin: 'Jǐ zhāng CD?', hanzi: '几张CD？', vietnamese: 'Mấy cái CD?' } },
      { id: 34, pinyin: 'Zhāng Xuéyǒu', hanzi: '张学友', vietnamese: 'Trương Học Hữu', example: { pinyin: 'Tīng Zhāng Xuéyǒu.', hanzi: '听张学友。', vietnamese: 'Nghe Trương Học Hữu.' } },
      { id: 35, pinyin: 'Liú Déhuá', hanzi: '刘德华', vietnamese: 'Lưu Đức Hoa', example: { pinyin: 'Xǐhuan Liú Déhuá.', hanzi: '喜欢刘德华。', vietnamese: 'Thích Lưu Đức Hoa.' } },
      { id: 36, pinyin: 'Wěnbié', hanzi: '吻别', vietnamese: 'Nụ hôn biệt ly', example: { pinyin: 'Tīng Wěnbié.', hanzi: '听《吻别》。', vietnamese: 'Nghe Nụ hôn biệt ly.' } },
      { id: 37, pinyin: 'Wàngqíngshuǐ', hanzi: '忘情水', vietnamese: 'Vong tình thủy', example: { pinyin: 'Tīng Wàngqíngshuǐ.', hanzi: '听《忘情水》。', vietnamese: 'Nghe Vong tình thủy.' } },
      { id: 38, pinyin: 'Hěn shǎo', hanzi: '很少', vietnamese: 'Rất ít', example: { pinyin: 'Hěn shǎo tīng.', hanzi: '很少听。', vietnamese: 'Rất ít nghe.' } },
      { id: 39, pinyin: 'Nǎge', hanzi: '哪个', vietnamese: 'Nào, cái nào', example: { pinyin: 'Nǎge gōngsī?', hanzi: '哪个公司？', vietnamese: 'Công ty nào?' } },
      { id: 40, pinyin: 'R&B', hanzi: 'R&B', vietnamese: 'Nhạc R&B', example: { pinyin: 'Tīng R&B.', hanzi: '听R&B。', vietnamese: 'Nghe nhạc R&B.' } },
      { id: 41, pinyin: 'Bǎolìjīn', hanzi: '宝丽金', vietnamese: 'PolyGram', example: { pinyin: 'Bǎolìjīn gōngsī.', hanzi: '宝丽金公司。', vietnamese: 'Công ty PolyGram.' } },
      { id: 42, pinyin: 'Zhū Lìqiàn', hanzi: '朱丽倩', vietnamese: 'Chu Lệ Thiên', example: { pinyin: 'Shì Zhū Lìqiàn.', hanzi: '是朱丽倩。', vietnamese: 'Là Chu Lệ Thiên.' } },
      { id: 43, pinyin: 'CD', hanzi: 'CD', vietnamese: 'Đĩa CD', example: { pinyin: 'Wǒ hái CD.', hanzi: '我有CD。', vietnamese: 'Tôi có CD.' } },
      { id: 44, pinyin: 'Zhè', hanzi: '这', vietnamese: 'Này, đây', example: { pinyin: 'Zhè shǒu gē.', hanzi: '这首歌。', vietnamese: 'Bài hát này.' } },
      { id: 45, pinyin: 'Shǒu', hanzi: '首', vietnamese: 'Lượng từ (cho bài hát, thơ...)', example: { pinyin: 'Yì shǒu gē.', hanzi: '一首歌。', vietnamese: 'Một bài hát.' } }
    ],
    grammarData: [
      {
        id: 1,
        title: '1. Trợ từ nghi vấn "ne" (呢)',
        description: 'Dùng ở cuối câu để hỏi ngược lại hoặc hỏi về tình huống của đối tượng vừa được nhắc đến. (Còn... thì sao?).',
        examples: [
          { pinyin: 'Wǒ hěn xǐhuan. Nǐ ne?', hanzi: '我很喜欢。你呢？', vietnamese: 'Tôi rất thích. Còn bạn?' },
          { pinyin: 'Wǒ zài zhèr. Tā ne?', hanzi: '我在这儿。他呢？', vietnamese: 'Tôi ở đây. Anh ấy đâu?' }
        ]
      },
      {
        id: 2,
        title: '2. Phó từ "yě" (也)',
        description: 'Biểu thị sự giống nhau, lặp lại của một hành động, trạng thái. (Cũng).',
        examples: [
          { pinyin: 'Wǒ yě xǐhuan.', hanzi: '我也喜欢。', vietnamese: 'Tôi cũng thích.' },
          { pinyin: 'Tā yě shì gēshǒu.', hanzi: '他也是歌手。', vietnamese: 'Anh ấy cũng là ca sĩ.' }
        ]
      },
      {
        id: 3,
        title: '3. Trợ từ động thái "guò" (过)',
        description: 'Đứng sau động từ, diễn tả một hành động đã từng xảy ra trong quá khứ. (Đã từng).',
        examples: [
          { pinyin: 'Nǐ tīng guò ma?', hanzi: '你听过吗？', vietnamese: 'Bạn từng nghe chưa?' },
          { pinyin: 'Wǒ mǎi guò.', hanzi: '我买过。', vietnamese: 'Tôi từng mua.' }
        ]
      },
      {
        id: 4,
        title: '4. Trợ từ "le" (了)',
        description: 'Dùng ở cuối câu để biểu thị sự thay đổi hoặc một sự việc đã xảy ra, hoàn thành.',
        examples: [
          { pinyin: 'Tā jiéhūn le.', hanzi: '他结婚了。', vietnamese: 'Anh ấy đã kết hôn.' },
          { pinyin: 'Tài hǎo le!', hanzi: '太好了！', vietnamese: 'Tuyệt quá!' }
        ]
      },
      {
        id: 5,
        title: '5. Phó từ "gèng" (更)',
        description: 'Đứng trước tính từ hoặc động từ tâm lý để biểu thị mức độ cao hơn. (Càng, hơn).',
        examples: [
          { pinyin: 'Nǐ gèng xǐhuan shuí?', hanzi: '...nǐ gèng xǐhuan shuí？', vietnamese: 'Bạn thích ai hơn?' },
          { pinyin: 'Zhè shǒu gē gèng hǎo tīng.', hanzi: '这首歌更好听。', vietnamese: 'Bài hát này hay hơn.' }
        ]
      }
    ]
  },
  {
    id: 'di-nha-hang',
    title: 'Đi nhà hàng',
    conversationData: [
      { id: 1, speaker: 'A', pinyin: 'Nǐ hǎo! Qǐngwèn jǐ wèi?', hanzi: '你好！请问几位？', vietnamese: 'Xin chào! Cho hỏi đi mấy vị?', english: 'Hello! How many guests, please?' },
      { id: 2, speaker: 'B', pinyin: 'Wǒ yī gè rén. Yǒu kòngwèi ma?', hanzi: '我一个人。有空位吗？', vietnamese: 'Tôi đi một mình. Có chỗ trống không?', english: 'Just one person. Is there any available seat?' },
      { id: 3, speaker: 'A', pinyin: 'Yǒu. Qǐng zhèbiān zuò. Nǐ kàn càidān ma?', hanzi: '有。请这边坐。你看菜单吗？', vietnamese: 'Có ạ. Mời ngồi bên này. Bạn xem thực đơn không?', english: 'Yes. Please sit here. Would you like to see the menu?' },
      { id: 4, speaker: 'B', pinyin: 'Hǎo de. Yǒu tèsècài ma?', hanzi: '好的。有特色菜吗？', vietnamese: 'Vâng. Có món đặc sản không?', english: 'Okay. Are there any special dishes?' },
      { id: 5, speaker: 'A', pinyin: 'Yǒu Kǎoyā. Nǐ chī Kǎoyā ma?', hanzi: '有烤鸭。你吃烤鸭吗？', vietnamese: 'Có vịt quay. Bạn ăn vịt quay không?', english: 'We have roast duck. Do you eat roast duck?' },
      { id: 6, speaker: 'B', pinyin: 'Chī. Lái yī fèn Kǎoyā. Hái yǒu shénme tuījiàn?', hanzi: '吃。来一份烤鸭。还有什么推荐？', vietnamese: 'Có ăn. Cho một phần vịt quay. Còn giới thiệu món gì nữa?', english: 'Yes. Bring one serving of roast duck. Any other recommendations?' },
      { id: 7, speaker: 'A', pinyin: 'Gōngbǎo jīdīng hěn hǎochī. Nǐ chī jīdīng ma?', hanzi: '宫保鸡丁很好吃。你吃鸡丁吗？', vietnamese: 'Gà Cung Bảo rất ngon. Bạn ăn thịt gà không?', english: 'Kung Pao chicken is delicious. Do you eat chicken?' },
      { id: 8, speaker: 'B', pinyin: 'Chī. Gěi wǒ yī fèn. Yǒu Mápó dòufu ma?', hanzi: '吃。给我一份。有麻婆豆腐吗？', vietnamese: 'Có. Cho tôi một phần. Có đậu phụ Ma Bà không?', english: 'Yes. Give me one serving. Do you have Mapo tofu?' },
      { id: 9, speaker: 'A', pinyin: 'Yǒu. Mápó dòufu hěn là. Nǐ néng chī là ma?', hanzi: '有。麻婆豆腐很辣。你能吃辣吗？', vietnamese: 'Có. Đậu phụ Ma Bà rất cay. Bạn ăn cay được không?', english: 'Yes. Mapo tofu is very spicy. Can you eat spicy food?' },
      { id: 10, speaker: 'B', pinyin: 'Wǒ néng chī là. Lái yī fèn. Yǒu Shuǐzhǔ yú ma?', hanzi: '我能吃辣。来一份。有水煮鱼吗？', vietnamese: 'Tôi ăn cay được. Lấy một phần. Có cá thủy xú không?', english: 'I can eat spicy. Bring one serving. Do you have poached fish?' },
      { id: 11, speaker: 'A', pinyin: 'Yǒu. Shuǐzhǔ yú fēicháng hǎochī. Nǐ yào Shuǐzhǔ yú ma?', hanzi: '有。水煮鱼非常好吃。你要水煮鱼吗？', vietnamese: 'Có. Cá thủy xú rất ngon. Bạn muốn dùng cá thủy xú không?', english: 'Yes. Poached fish is very delicious. Would you like poached fish?' },
      { id: 12, speaker: 'B', pinyin: 'Yào, lái yī fèn. Yǒu Zhēngjiǎo ma?', hanzi: '要，来一份。有蒸饺吗？', vietnamese: 'Có, lấy một phần. Có há cảo hấp không?', english: 'Yes, bring one serving. Do you have steamed dumplings?' },
      { id: 13, speaker: 'A', pinyin: 'Yǒu. Zhēngjiǎo shì rè de. Nǐ yào jǐ fèn?', hanzi: '有。蒸饺是热的。你要几份？', vietnamese: 'Có. Há cảo hấp đang nóng hổi. Bạn lấy mấy phần?', english: 'Yes. Steamed dumplings are hot. How many servings do you want?' },
      { id: 14, speaker: 'B', pinyin: 'Lái yī fèn Zhēngjiǎo. Cài duōshao qián?', hanzi: '来一份蒸饺。菜多少钱？', vietnamese: 'Cho một phần há cảo hấp. Các món ăn tổng cộng bao nhiêu tiền?', english: 'Bring one serving of steamed dumplings. How much is the food?' },
      { id: 15, speaker: 'A', pinyin: 'Sānbǎi yuán. Nǐ yào yǐnliào ma?', hanzi: '三百元。你要饮料吗？', vietnamese: '300 tệ. Bạn muốn dùng đồ uống không?', english: '300 yuan. Would you like drinks?' },
      { id: 16, speaker: 'B', pinyin: 'Yào. Zhèr yǒu jiǔ ma?', hanzi: '要。这儿有酒吗？', vietnamese: 'Có. Ở đây có rượu không?', english: 'Yes. Is there alcohol here?' },
      { id: 17, speaker: 'A', pinyin: 'Yǒu Hóngjiǔ, Báijiǔ, Xiāngbīn. Nǐ hē Hóngjiǔ ma?', hanzi: '有红酒、白酒、香槟。你喝红酒吗？', vietnamese: 'Có rượu vang đỏ, rượu trắng, sâm panh. Bạn uống rượu vang đỏ không?', english: 'We have red wine, white liquor, champagne. Do you drink red wine?' },
      { id: 18, speaker: 'B', pinyin: 'Hē. Hóngjiǔ duōshao qián?', hanzi: '喝。红酒多少钱？', vietnamese: 'Uống. Rượu vang đỏ bao nhiêu tiền?', english: 'Yes. How much is the red wine?' },
      { id: 19, speaker: 'A', pinyin: 'Yībǎi wǔshí yuán. Nǐ hē Báijiǔ ma?', hanzi: '一百五十元。你喝白酒吗？', vietnamese: '150 tệ. Bạn có uống rượu trắng không?', english: '150 yuan. Do you drink white liquor?' },
      { id: 20, speaker: 'B', pinyin: 'Lái yī píng Báijiǔ. Xiāngbīn guì ma?', hanzi: '来一瓶白酒。香槟贵吗？', vietnamese: 'Lấy một chai rượu trắng. Rượu sâm panh có đắt không?', english: 'Bring a bottle of white liquor. Is champagne expensive?' },
      { id: 21, speaker: 'A', pinyin: 'Xiāngbīn liǎngbǎi yuán. Nǐ yào Xiāngbīn ma?', hanzi: '香槟二百元。你要香槟吗？', vietnamese: 'Sâm panh 200 tệ. Bạn lấy sâm panh không?', english: 'Champagne is 200 yuan. Do you want champagne?' },
      { id: 22, speaker: 'B', pinyin: 'Lái yī píng Xiāngbīn. Yǒu Jīwěijiǔ ma?', hanzi: '来一瓶香槟。有鸡尾酒吗？', vietnamese: 'Lấy một chai sâm panh. Có cocktail không?', english: 'Bring a bottle of champagne. Do you have cocktails?' },
      { id: 23, speaker: 'A', pinyin: 'Yǒu Mòjítuō hé Mǎtiānní. Nǐ yào Mòjítuō ma?', hanzi: '有莫吉托和马天尼。你要莫吉托吗？', vietnamese: 'Có Mojito và Martini. Bạn muốn lấy Mojito không?', english: 'We have Mojito and Martini. Do you want Mojito?' },
      { id: 24, speaker: 'B', pinyin: 'Lái yī bēi Mòjítuō. Mǎtiānní hěn tián ma?', hanzi: '来一杯莫吉托。马天尼很甜吗？', vietnamese: 'Cho một ly Mojito. Martini có ngọt không?', english: 'Bring a glass of Mojito. Is Martini very sweet?' },
      { id: 25, speaker: 'A', pinyin: 'Mǎtiānní bù tián. Nǐ yào Mǎtiānní ma?', hanzi: '马天尼不甜。你要马天尼吗？', vietnamese: 'Martini không ngọt. Bạn có lấy Martini không?', english: 'Martini is not sweet. Do you want Martini?' },
      { id: 26, speaker: 'B', pinyin: 'Lái yī bēi Mǎtiānní. Jiǔ shuǐ duōshao qián?', hanzi: '来一杯马天尼。酒水多少钱？', vietnamese: 'Cho một ly Martini. Đồ uống tổng cộng bao nhiêu tiền?', english: 'Bring a glass of Martini. How much are the drinks?' },
      { id: 27, speaker: 'A', pinyin: 'Jiǔ shuǐ wǔbǎi yuán. Xiànzài shàngcài ma?', hanzi: '酒水五百元。现在上菜吗？', vietnamese: 'Đồ uống 500 tệ. Bây giờ lên món nhé?', english: 'Drinks are 500 yuan. Shall we serve the food now?' },
      { id: 28, speaker: 'B', pinyin: 'Hǎo, qǐng shàngcài. Yǒu cānjīnzhǐ ma?', hanzi: '好，请上菜。有餐巾纸吗？', vietnamese: 'Được, mời lên món. Có khăn giấy không?', english: 'Okay, please serve the food. Do you have napkins?' },
      { id: 29, speaker: 'A', pinyin: 'Yǒu. Cài hǎochī ma?', hanzi: '有。菜好吃吗？', vietnamese: 'Có ạ. Món ăn ngon không?', english: 'Yes. Is the food delicious?' },
      { id: 30, speaker: 'B', pinyin: 'Fēicháng hǎochī. Zǒnggòng duōshao qián?', hanzi: '非常好吃。总共多少钱？', vietnamese: 'Rất ngon. Tổng cộng bao nhiêu tiền?', english: 'Very delicious. How much in total?' },
      { id: 31, speaker: 'A', pinyin: 'Zǒnggòng bābǎi yuán. Nǐ zěnme fùkuǎn?', hanzi: '总共八百元。你怎么付款？', vietnamese: 'Tổng cộng 800 tệ. Bạn thanh toán thế nào?', english: 'Total is 800 yuan. How do you pay?' },
      { id: 32, speaker: 'B', pinyin: 'Wǒ yòng xìnyòngkǎ. Yǒu zhékòu ma?', hanzi: '我用信用卡。有折扣吗？', vietnamese: 'Tôi dùng thẻ tín dụng. Có giảm giá không?', english: 'I use a credit card. Is there any discount?' },
      { id: 33, speaker: 'A', pinyin: 'Dǎ jiǔ zhé, qībǎi èrshí yuán. Nǐ yào fāpiào ma?', hanzi: '打九折，七百二十元。你要发票吗？', vietnamese: 'Giảm 10%, còn 720 tệ. Bạn cần hóa đơn không?', english: '10% off, 720 yuan. Do you need an invoice?' },
      { id: 34, speaker: 'B', pinyin: 'Yào. Xiǎofèi bāohán le ma?', hanzi: '要。小费包含了吗？', vietnamese: 'Cần. Tiền tip đã bao gồm chưa?', english: 'Yes. Is tip included?' },
      { id: 35, speaker: 'A', pinyin: 'Bù bāohán. Nǐ mǎnyì ma?', hanzi: '不包含。你满意吗？', vietnamese: 'Chưa bao gồm. Bạn có hài lòng không?', english: 'Not included. Are you satisfied?' },
      { id: 36, speaker: 'B', pinyin: 'Hěn mǎnyì! Zhè shì xiǎofèi. Nǐ shōuxià ma?', hanzi: '很满意！这是小费。你收下吗？', vietnamese: 'Rất hài lòng! Đây là tiền tip. Bạn nhận giúp nhé?', english: 'Very satisfied! Here is the tip. Will you accept it?' },
      { id: 37, speaker: 'A', pinyin: 'Fēicháng xièxie! Zhè shì fāpiào. Hái yào shénme ma?', hanzi: '非常感谢！这是发票。还要什么吗？', vietnamese: 'Rất cảm ơn! Đây là hóa đơn. Còn cần gì nữa không?', english: 'Thank you very much! Here is the invoice. Anything else?' },
      { id: 38, speaker: 'B', pinyin: 'Bù yào le. Jǐ diǎn guānmén?', hanzi: '不要了。几点关门？', vietnamese: 'Không cần nữa. Mấy giờ đóng cửa?', english: 'No more. What time do you close?' },
      { id: 39, speaker: 'A', pinyin: 'Wǎnshang shí diǎn. Huānyíng zàilái! Fúwù hǎo ma?', hanzi: '晚上十点。欢迎再来！服务好吗？', vietnamese: '10 giờ tối. Chào mừng quay lại! Dịch vụ tốt không?', english: '10:00 PM. Welcome again! Was the service good?' },
      { id: 40, speaker: 'B', pinyin: 'Fēicháng hǎo! Zàijiàn!', hanzi: '非常好！再见！', vietnamese: 'Rất tốt! Tạm biệt!', english: 'Very good! Goodbye!' }
    ],
    vocabularyData: [
      { id: 1, pinyin: 'càidān', hanzi: '菜单', vietnamese: 'Thực đơn', example: { pinyin: 'Nǐ kàn càidān ma?', hanzi: '你看菜单吗？', vietnamese: 'Bạn xem thực đơn không?' } },
      { id: 2, pinyin: 'Kǎoyā', hanzi: '烤鸭', vietnamese: 'Vịt quay', example: { pinyin: 'Lái yī fèn Kǎoyā.', hanzi: '来一份烤鸭。', vietnamese: 'Cho một phần vịt quay.' } },
      { id: 3, pinyin: 'Gōngbǎo jīdīng', hanzi: '宫保鸡丁', vietnamese: 'Gà Cung Bảo', example: { pinyin: 'Gōngbǎo jīdīng hěn hǎochī.', hanzi: '宫保鸡丁很好吃。', vietnamese: 'Gà Cung Bảo rất ngon.' } },
      { id: 4, pinyin: 'Mápó dòufu', hanzi: '麻婆豆腐', vietnamese: 'Đậu phụ Ma Bà', example: { pinyin: 'Mápó dòufu hěn là.', hanzi: '麻婆豆腐很辣。', vietnamese: 'Đậu phụ Ma Bà rất cay.' } },
      { id: 5, pinyin: 'Shuǐzhǔ yú', hanzi: '水煮鱼', vietnamese: 'Cá thủy xú / cá nhúng ớt', example: { pinyin: 'Shuǐzhǔ yú fēicháng hǎochī.', hanzi: '水煮鱼非常好吃。', vietnamese: 'Cá thủy xú rất ngon.' } },
      { id: 6, pinyin: 'Zhēngjiǎo', hanzi: '蒸饺', vietnamese: 'Há cảo hấp', example: { pinyin: 'Lái yī fèn Zhēngjiǎo.', hanzi: '来一份蒸饺。', vietnamese: 'Cho một phần há cảo hấp.' } },
      { id: 7, pinyin: 'Hóngjiǔ', hanzi: '红酒', vietnamese: 'Rượu vang đỏ', example: { pinyin: 'Nǐ hē Hóngjiǔ ma?', hanzi: '你喝红酒吗？', vietnamese: 'Bạn uống rượu vang đỏ không?' } },
      { id: 8, pinyin: 'Báijiǔ', hanzi: '白酒', vietnamese: 'Rượu trắng', example: { pinyin: 'Lái yī píng Báijiǔ.', hanzi: '来一瓶白酒。', vietnamese: 'Lấy một chai rượu trắng.' } },
      { id: 9, pinyin: 'Xiāngbīn', hanzi: '香槟', vietnamese: 'Rượu sâm panh', example: { pinyin: 'Xiāngbīn liǎngbǎi yuán.', hanzi: '香槟二百元。', vietnamese: 'Sâm panh 200 tệ.' } },
      { id: 10, pinyin: 'Mòjítuō', hanzi: '莫吉托', vietnamese: 'Cocktail Mojito', example: { pinyin: 'Lái yī bēi Mòjítuō.', hanzi: '来一杯莫吉托。', vietnamese: 'Cho một ly Mojito.' } },
      { id: 11, pinyin: 'Mǎtiānní', hanzi: '马天尼', vietnamese: 'Cocktail Martini', example: { pinyin: 'Mǎtiānní bù tián.', hanzi: '马天尼不甜。', vietnamese: 'Martini không ngọt.' } },
      { id: 12, pinyin: 'Jīwěijiǔ', hanzi: '鸡尾酒', vietnamese: 'Rượu cocktail nói chung', example: { pinyin: 'Yǒu Jīwěijiǔ ma?', hanzi: '有鸡尾酒吗？', vietnamese: 'Có cocktail không?' } },
      { id: 13, pinyin: 'tèsècài', hanzi: '特色菜', vietnamese: 'Món ăn đặc sản', example: { pinyin: 'Yǒu tèsècài ma?', hanzi: '有特色菜吗？', vietnamese: 'Có món đặc sản không?' } },
      { id: 14, pinyin: 'jiǔshuǐ', hanzi: '酒水', vietnamese: 'Đồ uống (rượu & nước)', example: { pinyin: 'Jiǔ shuǐ wǔbǎi yuán.', hanzi: '酒水五百元。', vietnamese: 'Đồ uống 500 tệ.' } },
      { id: 15, pinyin: 'fùkuǎn', hanzi: '付款', vietnamese: 'Thanh toán', example: { pinyin: 'Nǐ zěnme fùkuǎn?', hanzi: '你怎么付款？', vietnamese: 'Bạn thanh toán thế nào?' } },
      { id: 16, pinyin: 'zhékòu', hanzi: '折扣', vietnamese: 'Giảm giá, chiết khấu', example: { pinyin: 'Yǒu zhékòu ma?', hanzi: '有折扣吗？', vietnamese: 'Có giảm giá không?' } },
      { id: 17, pinyin: 'fāpiào', hanzi: '发票', vietnamese: 'Hóa đơn', example: { pinyin: 'Nǐ yào fāpiào ma?', hanzi: '你要发票吗？', vietnamese: 'Bạn cần hóa đơn không?' } },
      { id: 18, pinyin: 'xiǎofèi', hanzi: '小费', vietnamese: 'Tiền tip / tiền thưởng', example: { pinyin: 'Xiǎofèi bāohán le ma?', hanzi: '小费包含了吗？', vietnamese: 'Tiền tip đã bao gồm chưa?' } },
      { id: 19, pinyin: 'xìnyòngkǎ', hanzi: '信用卡', vietnamese: 'Thẻ tín dụng', example: { pinyin: 'Wǒ yòng xìnyòngkǎ.', hanzi: '我用信用卡。', vietnamese: 'Tôi dùng thẻ tín dụng.' } },
      { id: 20, pinyin: 'cānjīnzhǐ', hanzi: '餐巾纸', vietnamese: 'Khăn giấy ăn', example: { pinyin: 'Yǒu cānjīnzhǐ ma?', hanzi: '有餐巾纸吗？', vietnamese: 'Có khăn giấy không?' } },
      { id: 21, pinyin: 'kòngwèi', hanzi: '空位', vietnamese: 'Chỗ trống', example: { pinyin: 'Yǒu kòngwèi ma?', hanzi: '有空位吗？', vietnamese: 'Có chỗ trống không?' } },
      { id: 22, pinyin: 'tuījiàn', hanzi: '推荐', vietnamese: 'Giới thiệu, tiến cử', example: { pinyin: 'Hái yǒu shénme tuījiàn?', hanzi: '还有什么推荐？', vietnamese: 'Còn giới thiệu món gì nữa?' } },
      { id: 23, pinyin: 'hǎochī', hanzi: '好吃', vietnamese: 'Ngon (thức ăn)', example: { pinyin: 'Cài hǎochī ma?', hanzi: '菜好吃吗？', vietnamese: 'Món ăn ngon không?' } },
      { id: 24, pinyin: 'là', hanzi: '辣', vietnamese: 'Cay', example: { pinyin: 'Nǐ néng chī là ma?', hanzi: '你能吃辣吗？', vietnamese: 'Bạn ăn cay được không?' } },
      { id: 25, pinyin: 'tián', hanzi: '甜', vietnamese: 'Ngọt', example: { pinyin: 'Mǎtiānní bù tián.', hanzi: '马天尼不甜。', vietnamese: 'Martini không ngọt.' } },
      { id: 26, pinyin: 'guì', hanzi: '贵', vietnamese: 'Đắt', example: { pinyin: 'Xiāngbīn guì ma?', hanzi: '香槟贵吗？', vietnamese: 'Rượu sâm panh có đắt không?' } },
      { id: 27, pinyin: 'yǐnliào', hanzi: '饮料', vietnamese: 'Đồ uống, nước giải khát', example: { pinyin: 'Nǐ yào yǐnliào ma?', hanzi: '你要饮料吗？', vietnamese: 'Bạn muốn dùng đồ uống không?' } },
      { id: 28, pinyin: 'shàngcài', hanzi: '上菜', vietnamese: 'Lên món / dọn món', example: { pinyin: 'Xiànzài shàngcài ma?', hanzi: '现在上菜吗？', vietnamese: 'Bây giờ lên món nhé?' } },
      { id: 29, pinyin: 'zǒnggòng', hanzi: '总共', vietnamese: 'Tổng cộng', example: { pinyin: 'Zǒnggòng duōshao qián?', hanzi: '总共多少钱？', vietnamese: 'Tổng cộng bao nhiêu tiền?' } },
      { id: 30, pinyin: 'bāohán', hanzi: '包含', vietnamese: 'Bao gồm', example: { pinyin: 'Xiǎofèi bāohán le ma?', hanzi: '小费包含了吗？', vietnamese: 'Tiền tip đã bao gồm chưa?' } },
      { id: 31, pinyin: 'mǎnyì', hanzi: '满意', vietnamese: 'Hài lòng', example: { pinyin: 'Nǐ mǎnyì ma?', hanzi: '你满意吗？', vietnamese: 'Bạn có hài lòng không?' } },
      { id: 32, pinyin: 'fúwù', hanzi: '服务', vietnamese: 'Phục vụ / dịch vụ', example: { pinyin: 'Fúwù hǎo ma?', hanzi: '服务好吗？', vietnamese: 'Dịch vụ tốt không?' } },
      { id: 33, pinyin: 'guānmén', hanzi: '关门', vietnamese: 'Đóng cửa', example: { pinyin: 'Jǐ diǎn guānmén?', hanzi: '几点关门？', vietnamese: 'Mấy giờ đóng cửa?' } },
      { id: 34, pinyin: 'píng', hanzi: '瓶', vietnamese: 'Chai (lượng từ)', example: { pinyin: 'Lái yī píng Báijiǔ.', hanzi: '来一瓶白酒。', vietnamese: 'Lấy một chai rượu trắng.' } },
      { id: 35, pinyin: 'bēi', hanzi: '杯', vietnamese: 'Ly / cốc (lượng từ)', example: { pinyin: 'Lái yī bēi Mòjítuō.', hanzi: '来一杯莫吉托。', vietnamese: 'Cho một ly Mojito.' } }
    ],
    grammarData: [
      {
        id: 1,
        title: '1. Động từ "Lái" (来) khi gọi món',
        description: 'Khi gọi món ăn hay thức uống ở nhà hàng, người Trung Quốc thường dùng động từ "来" (lái) + số lượng + tên món để gọi/yêu cầu món đó.',
        examples: [
          { pinyin: 'Lái yī fèn Kǎoyā.', hanzi: '来一份烤鸭。', vietnamese: 'Cho một phần vịt quay.' },
          { pinyin: 'Lái yī bēi Mòjítuō.', hanzi: '来一杯莫吉托。', vietnamese: 'Cho một ly Mojito.' }
        ]
      },
      {
        id: 2,
        title: '2. Cấu trúc hỏi giá "Duōshao qián" (多少钱)',
        description: 'Được dùng để hỏi giá tiền của sản phẩm, món ăn hay dịch vụ.',
        examples: [
          { pinyin: 'Cài duōshao qián?', hanzi: '菜多少钱？', vietnamese: 'Món ăn bao nhiêu tiền?' },
          { pinyin: 'Zǒnggòng duōshao qián?', hanzi: '总共多少钱？', vietnamese: 'Tổng cộng bao nhiêu tiền?' }
        ]
      },
      {
        id: 3,
        title: '3. Cách nói giảm giá "Dǎ zhé" (打折)',
        description: 'Trong tiếng Trung, "打九折" (dǎ jiǔ zhé) có nghĩa là tính 90% giá (tương đương giảm giá 10%).',
        examples: [
          { pinyin: 'Dǎ jiǔ zhé.', hanzi: '打九折。', vietnamese: 'Giảm giá 10% (Tính 90%).' },
          { pinyin: 'Yǒu zhékòu ma?', hanzi: '有折扣吗？', vietnamese: 'Có giảm giá không?' }
        ]
      },
      {
        id: 4,
        title: '4. Động từ "Bāohán" (包含)',
        description: 'Biểu thị bao gồm hoặc chứa đựng một khoản phí/thành phần nào đó.',
        examples: [
          { pinyin: 'Xiǎofèi bāohán le ma?', hanzi: '小费包含了吗？', vietnamese: 'Tiền tip đã bao gồm chưa?' },
          { pinyin: 'Bù bāohán xiǎofèi.', hanzi: '不包含小费。', vietnamese: 'Chưa bao gồm tiền tip.' }
        ]
      }
    ]
  }
];

