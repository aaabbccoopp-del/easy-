/* ========================================
   المساعد الشخصي الذكي — tools2.js
   100 أداة إضافية — ملف منفصل لتوزيع الضغط
   ======================================== */

var TOOLS2 = [

  /* ======== 🧮 حاسبات إضافية ======== */
  { id:'c26', cat:'calc', icon:'🔢', ar:'حاسبة القوة والأس',       en:'Power & Exponent',      dar:'احسب قوة أي رقم بأس معيّن',          den:'Calculate power of any number', type:'form', fn:'power2', color:'#2563eb' },
  { id:'c27', cat:'calc', icon:'📐', ar:'حاسبة المثلثات',          en:'Triangle Calculator',   dar:'احسب زوايا وأضلاع المثلثات',         den:'Solve triangle angles & sides', type:'form', fn:'triangle', color:'#7c3aed' },
  { id:'c28', cat:'calc', icon:'💡', ar:'حاسبة الطاقة الكهربية',   en:'Electric Power Calc',   dar:'احسب الطاقة والتيار والجهد',          den:'Calculate voltage, current, power', type:'form', fn:'electric2', color:'#d97706' },
  { id:'c29', cat:'calc', icon:'🌡️', ar:'تحويل درجات الحرارة',     en:'Temperature Converter', dar:'حوّل بين سيلسيوس وفهرنهايت وكلفن',   den:'Celsius, Fahrenheit & Kelvin', type:'conv', fn:'tempconv', color:'#dc2626' },
  { id:'c30', cat:'calc', icon:'📊', ar:'حاسبة الانحراف المعياري', en:'Std Deviation',         dar:'احسب الانحراف المعياري لبيانات',      den:'Calculate standard deviation', type:'form', fn:'stddev', color:'#0891b2' },
  { id:'c31', cat:'calc', icon:'🔭', ar:'حاسبة المسافة',           en:'Distance Calculator',   dar:'احسب المسافة بين نقطتين',             den:'Distance between two points', type:'form', fn:'distance2', color:'#9333ea' },
  { id:'c32', cat:'calc', icon:'⚡', ar:'حاسبة الكفاءة',           en:'Efficiency Calc',       dar:'احسب كفاءة أي عملية أو جهاز',        den:'Calculate process efficiency %', type:'form', fn:'efficiency', color:'#16a34a' },
  { id:'c33', cat:'calc', icon:'🔄', ar:'تحويل الضغط',             en:'Pressure Converter',    dar:'حوّل بين وحدات الضغط المختلفة',       den:'Convert pressure units', type:'conv', fn:'pressure', color:'#0f766e' },
  { id:'c34', cat:'calc', icon:'💨', ar:'حاسبة السرعة',            en:'Speed Calculator',      dar:'احسب السرعة والزمن والمسافة',         den:'Speed, time and distance calc', type:'form', fn:'speed2', color:'#2563eb' },
  { id:'c35', cat:'calc', icon:'🧲', ar:'حاسبة الكثافة',           en:'Density Calculator',    dar:'احسب كثافة المادة',                  den:'Calculate material density', type:'form', fn:'density', color:'#7c3aed' },

  /* ======== ❤️ صحة إضافية ======== */
  { id:'h26', cat:'health', icon:'🩻', ar:'دليل صحة العظام',       en:'Bone Health Guide',     dar:'نصائح للحفاظ على صحة العظام',        den:'Tips for strong healthy bones', type:'info', fn:'bones', color:'#0891b2' },
  { id:'h27', cat:'health', icon:'👁️', ar:'دليل صحة العيون',       en:'Eye Health Guide',      dar:'نصائح لحماية وتقوية البصر',          den:'Eye care & vision protection', type:'info', fn:'eyes', color:'#0f766e' },
  { id:'h28', cat:'health', icon:'🦷', ar:'دليل صحة الأسنان',      en:'Dental Health Guide',   dar:'نصائح للعناية بالأسنان واللثة',      den:'Teeth & gum care guide', type:'info', fn:'dental', color:'#be185d' },
  { id:'h29', cat:'health', icon:'🧴', ar:'روتين العناية بالبشرة', en:'Skin Care Routine',     dar:'روتين عناية شامل لكل أنواع البشرة',  den:'Complete skincare for all types', type:'info', fn:'skin', color:'#ea580c' },
  { id:'h30', cat:'health', icon:'💪', ar:'برنامج تمرين منزلي',    en:'Home Workout Plan',     dar:'برنامج تمرين كامل بدون أدوات',       den:'Full workout plan without equipment', type:'info', fn:'homeworkout', color:'#dc2626' },
  { id:'h31', cat:'health', icon:'🥕', ar:'دليل الفيتامينات',      en:'Vitamins Guide',        dar:'مصادر وفوائد الفيتامينات الأساسية',  den:'Essential vitamins sources & benefits', type:'info', fn:'vitamins', color:'#d97706' },
  { id:'h32', cat:'health', icon:'🍵', ar:'فوائد الأعشاب',         en:'Herbal Benefits',       dar:'فوائد الأعشاب الطبية الطبيعية',      den:'Natural medicinal herbs benefits', type:'info', fn:'herbs', color:'#16a34a' },
  { id:'h33', cat:'health', icon:'😮‍💨', ar:'تمرين التنفس العميق',   en:'Deep Breathing',        dar:'تمرين التنفس العميق للاسترخاء',      den:'Deep breathing relaxation exercise', type:'timer', fn:'deepbreath', color:'#7c3aed' },
  { id:'h34', cat:'health', icon:'🏊', ar:'حاسبة السباحة',         en:'Swimming Calc',         dar:'احسب سعرات السباحة وتقدّمك',         den:'Swimming calories & progress', type:'form', fn:'swimming', color:'#0891b2' },
  { id:'h35', cat:'health', icon:'🫁', ar:'دليل صحة الرئة',        en:'Lung Health Guide',     dar:'نصائح للحفاظ على صحة الجهاز التنفسي', den:'Respiratory & lung health tips', type:'info', fn:'lung', color:'#0891b2' },

  /* ======== ⏰ وقت إضافي ======== */
  { id:'t21', cat:'time', icon:'🌙', ar:'روتين المساء',            en:'Evening Routine',       dar:'بنِ روتين مسائي للراحة والتأمل',     den:'Build a relaxing evening routine', type:'info', fn:'evening', color:'#7c3aed' },
  { id:'t22', cat:'time', icon:'📋', ar:'قائمة لا تفعل',           en:"Don't Do List",         dar:'حدّد ما يجب تجنّبه لتوفير وقتك',    den:'Define what to avoid & save time', type:'todo', fn:'dontdo', color:'#dc2626' },
  { id:'t23', cat:'time', icon:'🔁', ar:'مؤقت الدورات',            en:'Cycle Timer',           dar:'مؤقت للدورات المتكررة',              den:'Repeating interval cycle timer', type:'timer', fn:'cycle2', color:'#0891b2' },
  { id:'t24', cat:'time', icon:'🗒️', ar:'يوميات المهام',           en:'Task Diary',            dar:'يوميات لتسجيل مهامك اليومية',        den:'Daily task diary journal', type:'notes', fn:'taskdiary', color:'#d97706' },
  { id:'t25', cat:'time', icon:'🏆', ar:'مكافآت الإنجاز',          en:'Achievement Rewards',   dar:'سجّل إنجازاتك ومكافآتك',             den:'Log achievements & rewards', type:'track', fn:'achievements', color:'#ea580c' },
  { id:'t26', cat:'time', icon:'⚖️', ar:'حاسبة التوازن',           en:'Life Balance Calc',     dar:'قيّم توازن حياتك العملية والشخصية',  den:'Rate your work-life balance', type:'form', fn:'lifebalance', color:'#16a34a' },
  { id:'t27', cat:'time', icon:'🔔', ar:'قائمة التذكيرات',         en:'Reminder Notes',        dar:'اكتب تذكيراتك المهمة',               den:'Write your important reminders', type:'todo', fn:'reminders', color:'#9333ea' },
  { id:'t28', cat:'time', icon:'📆', ar:'حاسبة الإجازة',           en:'Vacation Days Calc',    dar:'احسب أيام إجازتك المتبقية',          den:'Calculate remaining vacation days', type:'form', fn:'vacation', color:'#0891b2' },
  { id:'t29', cat:'time', icon:'🎯', ar:'تحدي 30 يوم',             en:'30-Day Challenge',      dar:'تحدي 30 يوماً لعادة جديدة',          den:'30-day new habit challenge', type:'track', fn:'challenge30', color:'#be185d' },
  { id:'t30', cat:'time', icon:'📊', ar:'مخطط السنة المئوية',      en:'Year Progress',         dar:'شاهد نسبة إنجاز السنة الحالية',      den:'See how much of the year is done', type:'info', fn:'yearprog', color:'#2563eb' },

  /* ======== 💰 مال إضافي ======== */
  { id:'f21', cat:'finance', icon:'🎰', ar:'حاسبة المخاطر',        en:'Risk Calculator',       dar:'قيّم مخاطر قراراتك المالية',         den:'Assess financial decision risks', type:'form', fn:'risk', color:'#dc2626' },
  { id:'f22', cat:'finance', icon:'🌍', ar:'حاسبة تحويل الأموال',  en:'Money Transfer Calc',   dar:'احسب تكاليف تحويل الأموال الدولي',   den:'International money transfer cost', type:'form', fn:'moneytransfer', color:'#0891b2' },
  { id:'f23', cat:'finance', icon:'🏪', ar:'دليل بدء المشروع',     en:'Startup Guide',         dar:'خطوات بدء مشروع ناجح',               den:'Steps to start a successful business', type:'info', fn:'startup', color:'#16a34a' },
  { id:'f24', cat:'finance', icon:'📱', ar:'تقييم قيمة الجوال',    en:'Phone Value Estimator', dar:'قدّر قيمة هاتفك عند البيع',          den:'Estimate your phone resale value', type:'form', fn:'phonevalue', color:'#7c3aed' },
  { id:'f25', cat:'finance', icon:'🌱', ar:'حاسبة التضامن',        en:'Crowdfund Calc',        dar:'احسب هدف تمويل جماعي',               den:'Calculate crowdfunding goal', type:'form', fn:'crowdfund', color:'#16a34a' },
  { id:'f26', cat:'finance', icon:'📜', ar:'مولّد خطة العمل',      en:'Business Plan Gen',     dar:'أنشئ هيكل خطة عمل بسيطة',           den:'Generate a simple business plan outline', type:'gen', fn:'bizplan', color:'#9333ea' },
  { id:'f27', cat:'finance', icon:'🔄', ar:'حاسبة العائد على الاستثمار', en:'ROI Calculator',  dar:'احسب عائد الاستثمار ROI',            den:'Calculate return on investment ROI', type:'form', fn:'roi', color:'#2563eb' },
  { id:'f28', cat:'finance', icon:'💡', ar:'نصائح توفير الكهرباء', en:'Energy Saving Tips',    dar:'طرق لتوفير فاتورة الكهرباء',         den:'Ways to reduce electricity bills', type:'info', fn:'energysave', color:'#d97706' },
  { id:'f29', cat:'finance', icon:'🎁', ar:'حاسبة الهدايا',        en:'Gift Budget Calc',      dar:'نظّم ميزانية الهدايا للمناسبات',     den:'Plan your gift-giving budget', type:'form', fn:'giftbudget', color:'#be185d' },
  { id:'f30', cat:'finance', icon:'💳', ar:'حاسبة الفائدة التراكمية', en:'Compound Interest',  dar:'احسب الفائدة المركبة بدقة',          den:'Precise compound interest calc', type:'form', fn:'compound', color:'#0891b2' },

  /* ======== 📚 تعليم إضافي ======== */
  { id:'e21', cat:'edu', icon:'🗣️', ar:'محادثات يومية بالإنجليزية', en:'Daily English Dialogues', dar:'جمل محادثة يومية بالإنجليزية',  den:'Everyday English conversation phrases', type:'info', fn:'dialogues', color:'#2563eb' },
  { id:'e22', cat:'edu', icon:'✏️', ar:'قواعد الخط العربي',        en:'Arabic Calligraphy',    dar:'أسس ومبادئ الخط العربي الجميل',      den:'Principles of Arabic calligraphy', type:'info', fn:'calligraphy', color:'#d97706' },
  { id:'e23', cat:'edu', icon:'🧩', ar:'مسائل المنطق',             en:'Logic Puzzles',         dar:'مسائل منطقية تحدّي العقل',           den:'Brain-challenging logic problems', type:'game', fn:'logic', color:'#9333ea' },
  { id:'e24', cat:'edu', icon:'🌐', ar:'دليل الإنترنت الآمن',      en:'Safe Internet Guide',   dar:'كيف تستخدم الإنترنت بأمان',          den:'How to browse the internet safely', type:'info', fn:'safeinternet', color:'#0f766e' },
  { id:'e25', cat:'edu', icon:'🔬', ar:'قوانين الحركة لنيوتن',     en:"Newton's Laws",         dar:'شرح قوانين الحركة الثلاثة',          den:"Newton's three laws of motion explained", type:'info', fn:'newton', color:'#2563eb' },
  { id:'e26', cat:'edu', icon:'📖', ar:'مصطلحات قانونية',          en:'Legal Terms',           dar:'شرح أهم المصطلحات القانونية',        den:'Common legal terms explained', type:'info', fn:'legalterms', color:'#7c3aed' },
  { id:'e27', cat:'edu', icon:'🎵', ar:'نظرية الموسيقى',           en:'Music Theory Basics',   dar:'أساسيات نظرية الموسيقى',             den:'Basic music theory concepts', type:'info', fn:'music2', color:'#be185d' },
  { id:'e28', cat:'edu', icon:'🌍', ar:'لغات العالم',              en:'World Languages',       dar:'حقائق عن أشهر لغات العالم',          den:'Facts about world major languages', type:'info', fn:'languages', color:'#0891b2' },
  { id:'e29', cat:'edu', icon:'🔎', ar:'مهارات البحث العلمي',      en:'Research Skills',       dar:'كيف تبحث وتوثّق مصادرك',            den:'How to research & cite sources', type:'info', fn:'research', color:'#d97706' },
  { id:'e30', cat:'edu', icon:'🎓', ar:'دليل القبول الجامعي',      en:'University Admission',  dar:'نصائح القبول في الجامعات',           den:'University admission tips & tricks', type:'info', fn:'university', color:'#9333ea' },

  /* ======== 🏠 منزل إضافي ======== */
  { id:'ho21', cat:'home', icon:'🌸', ar:'دليل الزهور والنباتات',  en:'Flowers & Plants Guide', dar:'أنواع النباتات وكيفية رعايتها',     den:'Plant types & care instructions', type:'info', fn:'plants', color:'#16a34a' },
  { id:'ho22', cat:'home', icon:'🍰', ar:'دليل الحلويات',          en:'Desserts Guide',        dar:'وصفات حلويات شرقية وغربية',          den:'Eastern & western dessert recipes', type:'info', fn:'desserts', color:'#be185d' },
  { id:'ho23', cat:'home', icon:'🛁', ar:'روتين نظافة الحمام',     en:'Bathroom Cleaning Routine', dar:'روتين تنظيف الحمام أسبوعياً',   den:'Weekly bathroom cleaning routine', type:'info', fn:'bathroom', color:'#0891b2' },
  { id:'ho24', cat:'home', icon:'🎒', ar:'قائمة حقيبة السفر',      en:'Packing Checklist',     dar:'تحقق من تجهيزات حقيبتك قبل السفر',  den:'Complete travel bag packing list', type:'todo', fn:'packing', color:'#d97706' },
  { id:'ho25', cat:'home', icon:'🔌', ar:'دليل توفير الطاقة',      en:'Energy Saving Guide',   dar:'نصائح لتوفير الطاقة في المنزل',      den:'Home energy saving tips', type:'info', fn:'energyhome', color:'#ea580c' },
  { id:'ho26', cat:'home', icon:'🏡', ar:'نصائح شراء العقار',      en:'Property Buying Tips',  dar:'دليل شراء العقار بذكاء',             den:'Smart property buying guide', type:'info', fn:'property', color:'#7c3aed' },
  { id:'ho27', cat:'home', icon:'🍽️', ar:'دليل الوصفات الصحية',    en:'Healthy Recipes Guide', dar:'وصفات صحية سهلة وسريعة',            den:'Easy & quick healthy recipes', type:'info', fn:'healthyrecipes', color:'#16a34a' },
  { id:'ho28', cat:'home', icon:'🧰', ar:'قائمة أدوات المنزل',     en:'Home Tools Checklist',  dar:'أهم الأدوات اللازمة في كل منزل',     den:'Essential tools for every home', type:'info', fn:'tools2home', color:'#ea580c' },
  { id:'ho29', cat:'home', icon:'💡', ar:'نصائح توفير الإضاءة',    en:'Lighting Tips',         dar:'كيف تختار وتوفّر في إضاءة منزلك',    den:'How to choose & save on home lighting', type:'info', fn:'lighting', color:'#d97706' },
  { id:'ho30', cat:'home', icon:'🚿', ar:'حاسبة استهلاك الماء',    en:'Water Usage Tracker',   dar:'تتبع استهلاكك اليومي من الماء',      den:'Track your daily water consumption', type:'track', fn:'watertrack', color:'#0891b2' },

  /* ======== ✍️ كتابة إضافية ======== */
  { id:'w21', cat:'writing', icon:'📰', ar:'مولّد عناوين المقالات', en:'Article Title Generator', dar:'ولّد عناوين جذابة لمقالاتك',      den:'Generate catchy article titles', type:'gen', fn:'titles', color:'#2563eb' },
  { id:'w22', cat:'writing', icon:'🔖', ar:'مولّد الهاشتاقات',      en:'Hashtag Generator',     dar:'ولّد هاشتاقات لمنشوراتك',            den:'Generate hashtags for your posts', type:'gen', fn:'hashtags', color:'#be185d' },
  { id:'w23', cat:'writing', icon:'✒️', ar:'أدوات تحسين الكتابة',   en:'Writing Enhancer',      dar:'نصائح وأدوات لتحسين أسلوب الكتابة', den:'Tips & tools to enhance writing style', type:'info', fn:'enhance', color:'#7c3aed' },
  { id:'w24', cat:'writing', icon:'📊', ar:'تحليل النص',            en:'Text Analyzer',         dar:'حلّل نصّك واستخرج إحصاءاته',         den:'Analyze text & extract statistics', type:'notes', fn:'textanalyze', color:'#0f766e' },
  { id:'w25', cat:'writing', icon:'🗂️', ar:'منظّم الأفكار',          en:'Idea Organizer',        dar:'نظّم أفكارك في قوائم مرتبة',        den:'Organize ideas in structured lists', type:'todo', fn:'ideaorg', color:'#9333ea' },
  { id:'w26', cat:'writing', icon:'💬', ar:'مولّد الوصف',            en:'Description Generator', dar:'ولّد وصفاً لأي منتج أو مكان',       den:'Generate product/place descriptions', type:'gen', fn:'descgen', color:'#d97706' },
  { id:'w27', cat:'writing', icon:'🔣', ar:'محوّل الرموز والرمزيات', en:'Symbol Converter',      dar:'حوّل نصّك إلى رموز مميزة',           den:'Convert text to special symbols', type:'conv', fn:'symbols', color:'#ea580c' },
  { id:'w28', cat:'writing', icon:'📧', ar:'قوالب رسائل واتساب',    en:'WhatsApp Templates',    dar:'قوالب رسائل واتساب لكل المناسبات',  den:'WhatsApp message templates for all occasions', type:'gen', fn:'waTemplates', color:'#16a34a' },
  { id:'w29', cat:'writing', icon:'🖋️', ar:'مولّد السيرة الذاتية',   en:'CV/Resume Generator',   dar:'هيكل سيرة ذاتية احترافية',          den:'Professional CV structure template', type:'gen', fn:'cvgen', color:'#2563eb' },
  { id:'w30', cat:'writing', icon:'🧠', ar:'العصف الذهني',           en:'Brainstorming Tool',    dar:'أداة للعصف الذهني وتوليد الأفكار',   den:'Brainstorming & idea generation tool', type:'todo', fn:'brainstorm', color:'#9333ea' },

  /* ======== 💻 رقمية إضافية ======== */
  { id:'d21', cat:'digital', icon:'🖼️', ar:'محوّل أبعاد الصور',     en:'Image Size Converter',  dar:'احسب أبعاد الصور وحجمها',            den:'Calculate image dimensions & size', type:'form', fn:'imgsize', color:'#9333ea' },
  { id:'d22', cat:'digital', icon:'📝', ar:'محرّر Markdown',         en:'Markdown Preview',      dar:'اكتب وعاين نصّ Markdown',            den:'Write & preview Markdown text', type:'notes', fn:'markdown', color:'#2563eb' },
  { id:'d23', cat:'digital', icon:'🔗', ar:'مختصر الروابط',          en:'URL Shortener Sim',     dar:'محاكاة اختصار الروابط الطويلة',      den:'Simulate shortening long URLs', type:'conv', fn:'urlshort', color:'#0891b2' },
  { id:'d24', cat:'digital', icon:'🛡️', ar:'فاحص قوة كلمة المرور',   en:'Password Strength',     dar:'قيّم قوة كلمة مرورك الحالية',        den:'Evaluate your current password strength', type:'form', fn:'passcheck', color:'#dc2626' },
  { id:'d25', cat:'digital', icon:'📶', ar:'حاسبة سرعة الإنترنت',    en:'Internet Speed Calc',   dar:'احسب سرعة الإنترنت المطلوبة',        den:'Calculate required internet speed', type:'form', fn:'netspeed', color:'#0f766e' },
  { id:'d26', cat:'digital', icon:'🔤', ar:'محوّل حالة الكود',        en:'Code Case Converter',   dar:'حوّل بين camelCase وsnake_case',     den:'Convert between camelCase & snake_case', type:'conv', fn:'codecase', color:'#7c3aed' },
  { id:'d27', cat:'digital', icon:'🖥️', ar:'دليل اختصارات VS Code',   en:'VS Code Shortcuts',     dar:'أهم اختصارات VS Code',               den:'Essential VS Code keyboard shortcuts', type:'info', fn:'vscode', color:'#0891b2' },
  { id:'d28', cat:'digital', icon:'🐛', ar:'دليل قراءة الأخطاء',     en:'Error Reading Guide',   dar:'كيف تفهم رسائل الأخطاء البرمجية',    den:'How to understand programming error messages', type:'info', fn:'errors', color:'#dc2626' },
  { id:'d29', cat:'digital', icon:'💻', ar:'أوامر Git الأساسية',      en:'Git Commands',          dar:'أهم أوامر Git للمبتدئين',            den:'Essential Git commands for beginners', type:'info', fn:'git', color:'#ea580c' },
  { id:'d30', cat:'digital', icon:'🔐', ar:'مولّد مفتاح سري',         en:'Secret Key Generator',  dar:'ولّد مفتاحاً عشوائياً آمناً',         den:'Generate random secure secret key', type:'gen', fn:'secretkey', color:'#7c3aed' },

  /* ======== 🎮 ترفيه إضافي ======== */
  { id:'g16', cat:'fun', icon:'🎲', ar:'رامي النرد',               en:'Dice Roller',           dar:'ارمِ النرد مع أصوات',                den:'Roll dice with visual results', type:'game', fn:'dice', color:'#9333ea' },
  { id:'g17', cat:'fun', icon:'🃏', ar:'قارئ التاروت',             en:'Tarot Card Reader',     dar:'اقرأ بطاقة التاروت اليومية',         den:'Draw your daily tarot card', type:'gen', fn:'tarot', color:'#7c3aed' },
  { id:'g18', cat:'fun', icon:'🌌', ar:'حظك اليومي بالبرج',        en:'Daily Horoscope',       dar:'رسالة يومية حسب برجك',               den:'Daily message by zodiac sign', type:'gen', fn:'horoscope', color:'#9333ea' },
  { id:'g19', cat:'fun', icon:'🧩', ar:'لعبة السودوكو',            en:'Mini Sudoku',           dar:'سودوكو سريع 4x4',                    den:'Quick 4x4 mini Sudoku', type:'game', fn:'sudoku', color:'#2563eb' },
  { id:'g20', cat:'fun', icon:'🎯', ar:'لعبة أين في العالم',       en:'Where in the World',    dar:'خمّن الدولة من تلميحات',             den:'Guess the country from clues', type:'game', fn:'geogame', color:'#16a34a' },
  { id:'g21', cat:'fun', icon:'🎨', ar:'مزج الألوان',              en:'Color Mixer',           dar:'امزج ألوانك وشاهد النتيجة',          den:'Mix colors and see the result', type:'gen', fn:'colormix', color:'#be185d' },
  { id:'g22', cat:'fun', icon:'🤖', ar:'محاكي الذكاء الاصطناعي',  en:'AI Personality Quiz',   dar:'اكتشف شخصيتك من خلال أسئلة',        den:'Discover your AI personality type', type:'game', fn:'aiperson', color:'#7c3aed' },
  { id:'g23', cat:'fun', icon:'📝', ar:'لعبة الكلمة المتقاطعة',    en:'Mini Crossword',        dar:'كلمة متقاطعة مصغّرة بالعربية',       den:'Mini Arabic crossword puzzle', type:'game', fn:'crossword', color:'#d97706' },
  { id:'g24', cat:'fun', icon:'🎭', ar:'مولد الشخصية الخيالية',    en:'Character Creator',     dar:'ابتكر شخصية خيالية مثيرة',           den:'Create a fictional character', type:'gen', fn:'character', color:'#ea580c' },
  { id:'g25', cat:'fun', icon:'⚡', ar:'لعبة رد الفعل',            en:'Reaction Time Test',    dar:'اختبر سرعة رد فعلك',                 den:'Test your reaction speed', type:'game', fn:'reaction', color:'#dc2626' },

  /* ======== 🌟 يومية إضافية ======== */
  { id:'dy16', cat:'daily', icon:'🌿', ar:'نصائح الاستدامة',       en:'Sustainability Tips',   dar:'نصائح للعيش الصديق للبيئة',          den:'Eco-friendly living tips', type:'info', fn:'sustain', color:'#16a34a' },
  { id:'dy17', cat:'daily', icon:'🛂', ar:'دليل التأشيرات',         en:'Visa Guide',            dar:'كيف تحصل على تأشيرة دولية',          den:'How to get an international visa', type:'info', fn:'visa', color:'#0891b2' },
  { id:'dy18', cat:'daily', icon:'💼', ar:'دليل البحث عن عمل',     en:'Job Search Guide',      dar:'استراتيجيات فعّالة للبحث عن وظيفة',  den:'Effective job hunting strategies', type:'info', fn:'jobsearch', color:'#2563eb' },
  { id:'dy19', cat:'daily', icon:'🤝', ar:'مهارات التواصل',         en:'Communication Skills',  dar:'نصائح لتحسين مهارات التواصل',        den:'Tips to improve communication skills', type:'info', fn:'communication', color:'#9333ea' },
  { id:'dy20', cat:'daily', icon:'📸', ar:'نصائح التصوير بالموبايل',en:'Mobile Photography',    dar:'احترف التصوير بهاتفك الذكي',         den:'Master phone photography skills', type:'info', fn:'photography', color:'#ea580c' },
  { id:'dy21', cat:'daily', icon:'🎤', ar:'نصائح التحدث أمام الجمهور', en:'Public Speaking',   dar:'كيف تتحدث بثقة أمام الناس',          den:'How to speak confidently in public', type:'info', fn:'publicspeaking', color:'#d97706' },
  { id:'dy22', cat:'daily', icon:'🧹', ar:'التنظيم الرقمي',         en:'Digital Declutter',     dar:'نصائح لتنظيم ملفاتك الرقمية',       den:'Tips for digital file organization', type:'info', fn:'declutter', color:'#0f766e' },
  { id:'dy23', cat:'daily', icon:'🌺', ar:'عادات الصحة الإيجابية',  en:'Positive Health Habits', dar:'عادات يومية للحياة الصحية السعيدة', den:'Daily habits for a healthy happy life', type:'info', fn:'poshealth', color:'#be185d' },
  { id:'dy24', cat:'daily', icon:'🌊', ar:'التفكير الإيجابي',       en:'Positive Thinking',     dar:'تمارين وأفكار للتفكير الإيجابي',     den:'Exercises & tips for positive thinking', type:'info', fn:'positive', color:'#7c3aed' },
  { id:'dy25', cat:'daily', icon:'📱', ar:'دليل استخدام السوشيال ميديا', en:'Social Media Guide', dar:'نصائح الاستخدام الذكي والآمن',    den:'Smart & safe social media usage guide', type:'info', fn:'socialmedia', color:'#ea580c' },

];

/* دمج الأدوات الإضافية مع المصفوفة الرئيسية */
if (typeof TOOLS !== 'undefined') {
  TOOLS.push(...TOOLS2);
}
