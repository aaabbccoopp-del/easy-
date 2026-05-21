/* ========================================
   المساعد الشخصي الذكي — app.js
   +200 أداة ذكية | بدون إنترنت | Vanilla JS
   ======================================== */

'use strict';

/* ===================================
   بيانات الأدوات — 200 أداة
   كل أداة: { id, cat, icon, ar, en, dar, den, type, fn?, color? }
   =================================== */
const TOOLS = [

  /* ======== 🧮 الحاسبات ======== */
  { id:'c01', cat:'calc', icon:'🧮', ar:'حاسبة عامة',         en:'General Calculator',    dar:'احسب العمليات الأساسية والمتقدمة',  den:'Basic & advanced math', type:'calc', color:'#2563eb' },
  { id:'c02', cat:'calc', icon:'🎂', ar:'حاسبة العمر',          en:'Age Calculator',        dar:'احسب عمرك بالضبط بالأيام والشهور', den:'Exact age in days & months', type:'form', fn:'age', color:'#7c3aed' },
  { id:'c03', cat:'calc', icon:'📐', ar:'حاسبة BMI',            en:'BMI Calculator',        dar:'احسب مؤشر كتلة جسمك',              den:'Body mass index', type:'form', fn:'bmi', color:'#dc2626' },
  { id:'c04', cat:'calc', icon:'💯', ar:'حاسبة النسبة %',       en:'Percentage Calc',       dar:'احسب النسب المئوية بسهولة',         den:'Quick percentage calculator', type:'form', fn:'percent', color:'#2563eb' },
  { id:'c05', cat:'calc', icon:'🏦', ar:'حاسبة القروض',         en:'Loan Calculator',       dar:'احسب أقساط القروض والفوائد',        den:'Monthly loan installments', type:'form', fn:'loan', color:'#16a34a' },
  { id:'c06', cat:'calc', icon:'⚖️', ar:'حاسبة الزكاة',         en:'Zakat Calculator',      dar:'احسب الزكاة الواجبة على مالك',     den:'Calculate obligatory zakat', type:'form', fn:'zakat', color:'#d97706' },
  { id:'c07', cat:'calc', icon:'💱', ar:'تحويل العملات',         en:'Currency Converter',    dar:'حوّل بين عملات العالم',             den:'Convert world currencies', type:'form', fn:'currency', color:'#0891b2' },
  { id:'c08', cat:'calc', icon:'⛽', ar:'حاسبة الوقود',          en:'Fuel Calculator',       dar:'احسب تكلفة الوقود لرحلتك',         den:'Trip fuel cost calculator', type:'form', fn:'fuel', color:'#dc2626' },
  { id:'c09', cat:'calc', icon:'📏', ar:'حاسبة المساحة',         en:'Area Calculator',       dar:'احسب مساحة الأشكال الهندسية',      den:'Area of geometric shapes', type:'form', fn:'area', color:'#0f766e' },
  { id:'c10', cat:'calc', icon:'📦', ar:'حاسبة الحجم',           en:'Volume Calculator',     dar:'احسب حجم الأجسام الثلاثية',        den:'3D shape volumes', type:'form', fn:'volume', color:'#7c3aed' },
  { id:'c11', cat:'calc', icon:'🔄', ar:'تحويل الوحدات',          en:'Unit Converter',        dar:'حوّل بين وحدات القياس المختلفة',    den:'Convert measurement units', type:'conv', fn:'units', color:'#2563eb' },
  { id:'c12', cat:'calc', icon:'√',  ar:'حاسبة الجذر',           en:'Square Root',           dar:'احسب الجذر التربيعي والتكعيبي',    den:'Square & cube roots', type:'form', fn:'sqrt', color:'#9333ea' },
  { id:'c13', cat:'calc', icon:'🔢', ar:'مولد أرقام عشوائية',    en:'Random Number',         dar:'ولّد أرقاماً عشوائية في نطاق محدد', den:'Random numbers in a range', type:'gen', fn:'rand', color:'#ea580c' },
  { id:'c14', cat:'calc', icon:'📊', ar:'حاسبة المتوسط',          en:'Average Calculator',    dar:'احسب المتوسط والوسيط والمنوال',     den:'Mean, median & mode', type:'form', fn:'avg', color:'#0891b2' },
  { id:'c15', cat:'calc', icon:'💰', ar:'حاسبة الفائدة',          en:'Interest Calculator',   dar:'احسب الفائدة البسيطة والمركبة',     den:'Simple & compound interest', type:'form', fn:'interest', color:'#16a34a' },
  { id:'c16', cat:'calc', icon:'💼', ar:'حاسبة الراتب',           en:'Net Salary',            dar:'احسب راتبك الصافي بعد الخصومات',   den:'Net salary after deductions', type:'form', fn:'salary', color:'#2563eb' },
  { id:'c17', cat:'calc', icon:'🏷️', ar:'حاسبة الخصم',           en:'Discount Calculator',   dar:'احسب سعر المنتج بعد الخصم',        den:'Price after discount', type:'form', fn:'discount', color:'#dc2626' },
  { id:'c18', cat:'calc', icon:'🔁', ar:'محوّل الأرقام',          en:'Number Converter',      dar:'حوّل بين عشري وثنائي وست عشري',   den:'Binary, hex, decimal', type:'conv', fn:'nums', color:'#7c3aed' },
  { id:'c19', cat:'calc', icon:'💸', ar:'حاسبة الضريبة',          en:'Tax Calculator',        dar:'احسب الضريبة المضافة على المنتج',  den:'Value added tax calc', type:'form', fn:'tax', color:'#d97706' },
  { id:'c20', cat:'calc', icon:'⏳', ar:'حاسبة الفرق الزمني',    en:'Time Difference',       dar:'احسب الفرق بين تاريخين',           den:'Difference between dates', type:'form', fn:'timediff', color:'#0f766e' },
  { id:'c21', cat:'calc', icon:'🏗️', ar:'حاسبة نقطة التعادل',    en:'Break-even Calc',       dar:'احسب نقطة التعادل لمشروعك',        den:'Business break-even point', type:'form', fn:'breakeven', color:'#9333ea' },
  { id:'c22', cat:'calc', icon:'🔮', ar:'الآلة العلمية',          en:'Scientific Calc',       dar:'عمليات المثلثات والأسس واللوغاريتم', den:'Trig, powers & logs', type:'calc', fn:'scientific', color:'#2563eb' },
  { id:'c23', cat:'calc', icon:'🧩', ar:'حاسبة الكسور',           en:'Fraction Calc',         dar:'جمع وطرح وضرب وقسمة الكسور',      den:'Add, subtract, multiply fractions', type:'form', fn:'fraction', color:'#ea580c' },
  { id:'c24', cat:'calc', icon:'📈', ar:'حاسبة الأرباح',          en:'Profit Calculator',     dar:'احسب هامش الربح والخسارة',         den:'Profit margin & loss', type:'form', fn:'profit', color:'#16a34a' },
  { id:'c25', cat:'calc', icon:'🏠', ar:'حاسبة الرهن العقاري',    en:'Mortgage Calc',         dar:'احسب قسط الرهن العقاري الشهري',    den:'Monthly mortgage payment', type:'form', fn:'mortgage', color:'#0891b2' },

  /* ======== ❤️ الصحة ======== */
  { id:'h01', cat:'health', icon:'🔥', ar:'حاسبة السعرات',        en:'Calorie Calc',          dar:'احسب سعراتك الحرارية اليومية',     den:'Daily caloric needs', type:'form', fn:'calories', color:'#dc2626' },
  { id:'h02', cat:'health', icon:'💧', ar:'حاسبة الماء اليومي',   en:'Daily Water',           dar:'احسب احتياجك اليومي من الماء',     den:'Daily water intake', type:'form', fn:'water', color:'#0891b2' },
  { id:'h03', cat:'health', icon:'🏃', ar:'مؤشر كتلة الجسم',      en:'BMI Guide',             dar:'دليل شامل لمؤشر كتلة الجسم',       den:'Complete BMI guide', type:'info', fn:'bmiGuide', color:'#dc2626' },
  { id:'h04', cat:'health', icon:'💓', ar:'حاسبة النبض',           en:'Heart Rate',            dar:'احسب معدل النبض المثالي',           den:'Ideal heart rate zones', type:'form', fn:'heartrate', color:'#dc2626' },
  { id:'h05', cat:'health', icon:'💊', ar:'متتبع الأدوية',         en:'Medicine Tracker',      dar:'تتبع جدول أدويتك اليومية',         den:'Track your daily medicines', type:'todo', fn:'medicine', color:'#7c3aed' },
  { id:'h06', cat:'health', icon:'🏋️', ar:'مؤقت التمرين',          en:'Workout Timer',         dar:'مؤقت للتمارين والراحة بينها',      den:'Exercise & rest timer', type:'timer', fn:'workout', color:'#dc2626' },
  { id:'h07', cat:'health', icon:'😴', ar:'حاسبة النوم',           en:'Sleep Calculator',      dar:'احسب وقت النوم المثالي',            den:'Ideal sleep time', type:'form', fn:'sleep', color:'#7c3aed' },
  { id:'h08', cat:'health', icon:'🥗', ar:'حاسبة الكربوهيدرات',    en:'Carb Calculator',       dar:'احسب كمية الكربوهيدرات',           den:'Carbohydrate intake', type:'form', fn:'carbs', color:'#16a34a' },
  { id:'h09', cat:'health', icon:'💪', ar:'حاسبة البروتين',         en:'Protein Calculator',    dar:'احسب احتياجك اليومي من البروتين',  den:'Daily protein intake', type:'form', fn:'protein', color:'#dc2626' },
  { id:'h10', cat:'health', icon:'⚖️', ar:'متتبع الوزن',           en:'Weight Tracker',        dar:'سجّل وتابع تغيرات وزنك',           den:'Track your weight changes', type:'track', fn:'weight', color:'#d97706' },
  { id:'h11', cat:'health', icon:'🫀', ar:'دليل ضغط الدم',         en:'Blood Pressure',        dar:'دليل وتصنيفات ضغط الدم',           den:'Blood pressure guide', type:'info', fn:'bp', color:'#dc2626' },
  { id:'h12', cat:'health', icon:'🩸', ar:'دليل السكر في الدم',    en:'Blood Sugar',           dar:'مستويات السكر ودلالاتها',           den:'Blood sugar levels guide', type:'info', fn:'sugar', color:'#d97706' },
  { id:'h13', cat:'health', icon:'🌬️', ar:'تمرين التنفس 4-7-8',    en:'4-7-8 Breathing',       dar:'تمرين تنفس للاسترخاء وتخفيف القلق', den:'Relaxing breathing exercise', type:'timer', fn:'breathing', color:'#0891b2' },
  { id:'h14', cat:'health', icon:'🚶', ar:'حاسبة الخطوات',          en:'Steps Calculator',      dar:'حوّل خطواتك إلى مسافة وسعرات',     den:'Steps to distance & calories', type:'form', fn:'steps', color:'#16a34a' },
  { id:'h15', cat:'health', icon:'🧬', ar:'مؤشر السُمنة',           en:'Obesity Index',         dar:'مؤشر مخاطر السُمنة ونسبة الدهون',  den:'Obesity & fat percentage', type:'form', fn:'obesity', color:'#dc2626' },
  { id:'h16', cat:'health', icon:'🥦', ar:'دليل التغذية',           en:'Nutrition Guide',       dar:'قيم غذائية للأطعمة الشائعة',       den:'Nutritional values for foods', type:'info', fn:'nutrition', color:'#16a34a' },
  { id:'h17', cat:'health', icon:'📋', ar:'مخطط الوجبات',           en:'Meal Planner',          dar:'خطط وجباتك لطوال الأسبوع',         den:'Plan weekly meals', type:'todo', fn:'meals', color:'#d97706' },
  { id:'h18', cat:'health', icon:'🤰', ar:'حاسبة الحمل',            en:'Pregnancy Calc',        dar:'احسب أسابيع الحمل وموعد الولادة',  den:'Pregnancy weeks & due date', type:'form', fn:'pregnancy', color:'#be185d' },
  { id:'h19', cat:'health', icon:'🧘', ar:'مؤقت التأمل',            en:'Meditation Timer',      dar:'مؤقت للتأمل مع صوت الجرس',         den:'Guided meditation timer', type:'timer', fn:'meditation', color:'#7c3aed' },
  { id:'h20', cat:'health', icon:'🩺', ar:'دليل الإسعافات الأولية', en:'First Aid Guide',       dar:'خطوات الإسعافات الأولية للطوارئ',  den:'Emergency first aid steps', type:'info', fn:'firstaid', color:'#dc2626' },
  { id:'h21', cat:'health', icon:'🧪', ar:'فصائل الدم',             en:'Blood Types',           dar:'معلومات فصائل الدم والتوافق',       den:'Blood type compatibility', type:'info', fn:'blood', color:'#dc2626' },
  { id:'h22', cat:'health', icon:'🏃‍♀️', ar:'حاسبة السعرات المحروقة',en:'Calories Burned',      dar:'احسب سعرات التمرين المحروقة',      den:'Exercise calorie burn', type:'form', fn:'burned', color:'#ea580c' },
  { id:'h23', cat:'health', icon:'📅', ar:'متتبع الدورة الشهرية',   en:'Cycle Tracker',         dar:'تتبع دورتك الشهرية',               den:'Menstrual cycle tracker', type:'form', fn:'cycle', color:'#be185d' },
  { id:'h24', cat:'health', icon:'🧠', ar:'تمارين الإطالة',          en:'Stretching Guide',      dar:'تمارين الإطالة والمرونة',           den:'Stretching & flexibility guide', type:'info', fn:'stretch', color:'#7c3aed' },
  { id:'h25', cat:'health', icon:'💉', ar:'جدول التطعيمات',          en:'Vaccination Guide',     dar:'جدول التطعيمات للأطفال والبالغين',  den:'Vaccination schedule guide', type:'info', fn:'vaccine', color:'#0891b2' },

  /* ======== ⏰ إدارة الوقت ======== */
  { id:'t01', cat:'time', icon:'✅', ar:'قائمة المهام',           en:'To-Do List',            dar:'نظّم مهامك اليومية بكفاءة',         den:'Organize daily tasks', type:'todo', fn:'tasks', color:'#7c3aed' },
  { id:'t02', cat:'time', icon:'🍅', ar:'مؤقت بومودورو',          en:'Pomodoro Timer',        dar:'تقنية بومودورو للتركيز',             den:'Pomodoro productivity technique', type:'timer', fn:'pomodoro', color:'#dc2626' },
  { id:'t03', cat:'time', icon:'⏱️', ar:'كرونومتر',               en:'Stopwatch',             dar:'عدّاد الوقت للقياس والسباق',        den:'Precise time measurement', type:'timer', fn:'stopwatch', color:'#7c3aed' },
  { id:'t04', cat:'time', icon:'⏳', ar:'عداد تنازلي',             en:'Countdown Timer',       dar:'عدّاد تنازلي لأي مناسبة',           den:'Count down to any event', type:'timer', fn:'countdown', color:'#0891b2' },
  { id:'t05', cat:'time', icon:'📅', ar:'مخطط أسبوعي',            en:'Weekly Planner',        dar:'نظّم جدول أسبوعك',                  den:'Organize your weekly schedule', type:'todo', fn:'weekly', color:'#2563eb' },
  { id:'t06', cat:'time', icon:'🎯', ar:'تتبع العادات',            en:'Habit Tracker',         dar:'بنِ عادات إيجابية وتابع التزامك',   den:'Build & track positive habits', type:'track', fn:'habits', color:'#16a34a' },
  { id:'t07', cat:'time', icon:'🌐', ar:'المناطق الزمنية',         en:'Time Zones',            dar:'مقارنة الوقت في دول العالم',         den:'Compare world time zones', type:'form', fn:'timezone', color:'#0891b2' },
  { id:'t08', cat:'time', icon:'💼', ar:'أيام العمل',              en:'Work Days',             dar:'احسب أيام العمل بين تاريخين',       den:'Count working days between dates', type:'form', fn:'workdays', color:'#2563eb' },
  { id:'t09', cat:'time', icon:'🏅', ar:'جدول الأهداف',            en:'Goals Tracker',         dar:'حدّد أهدافك وتابع تقدّمك',          den:'Set & track your goals', type:'track', fn:'goals', color:'#d97706' },
  { id:'t10', cat:'time', icon:'🤝', ar:'مؤقت الاجتماع',           en:'Meeting Timer',         dar:'إدارة وقت الاجتماعات والمناقشات',  den:'Meeting & discussion timer', type:'timer', fn:'meeting', color:'#7c3aed' },
  { id:'t11', cat:'time', icon:'📝', ar:'تتبع الوقت',              en:'Time Logger',           dar:'سجّل وقت المهام والمشاريع',         den:'Log project time spent', type:'track', fn:'timelog', color:'#0f766e' },
  { id:'t12', cat:'time', icon:'🎓', ar:'حاسبة التقاعد',           en:'Retirement Calc',       dar:'احسب سنوات ومدخرات التقاعد',        den:'Years & savings to retirement', type:'form', fn:'retirement', color:'#d97706' },
  { id:'t13', cat:'time', icon:'⭐', ar:'منظّم الأولويات',          en:'Priority Matrix',       dar:'صنّف مهامك حسب الأهمية والإلحاح',  den:'Eisenhower priority matrix', type:'info', fn:'priority', color:'#7c3aed' },
  { id:'t14', cat:'time', icon:'😴', ar:'مؤقت الراحة',             en:'Break Timer',           dar:'مؤقت لفترات الراحة المنتظمة',       den:'Regular break reminder', type:'timer', fn:'breaktimer', color:'#16a34a' },
  { id:'t15', cat:'time', icon:'🕐', ar:'ساعات العمل',             en:'Work Hours Calc',       dar:'احسب ساعاتك وأجرك الأسبوعي',       den:'Weekly work hours & pay', type:'form', fn:'workhours', color:'#2563eb' },
  { id:'t16', cat:'time', icon:'🚀', ar:'مخطط المشروع',            en:'Project Planner',       dar:'خطط مراحل مشروعك',                  den:'Plan project phases & tasks', type:'todo', fn:'project', color:'#9333ea' },
  { id:'t17', cat:'time', icon:'📆', ar:'أيام حتى الحدث',          en:'Days Until Event',      dar:'احسب الأيام حتى تاريخ مهم',         den:'Days until an important date', type:'form', fn:'daysuntil', color:'#ea580c' },
  { id:'t18', cat:'time', icon:'🌅', ar:'روتين الصباح',            en:'Morning Routine',       dar:'بنِ روتين صباحي فعّال',             den:'Build a productive morning routine', type:'info', fn:'morning', color:'#d97706' },
  { id:'t19', cat:'time', icon:'📊', ar:'تقرير الإنتاجية',         en:'Productivity Report',   dar:'قيّم إنتاجيتك اليومية والأسبوعية', den:'Rate your daily productivity', type:'form', fn:'productivity', color:'#16a34a' },
  { id:'t20', cat:'time', icon:'🗓️', ar:'مخطط السنوي',            en:'Annual Planner',        dar:'خطط أهدافك وأحداثك للسنة',          den:'Plan annual goals & events', type:'info', fn:'annual', color:'#2563eb' },

  /* ======== 💰 المال والأعمال ======== */
  { id:'f01', cat:'finance', icon:'📊', ar:'الميزانية الشهرية',    en:'Monthly Budget',        dar:'نظّم دخلك ومصاريفك الشهرية',       den:'Manage monthly income & expenses', type:'form', fn:'budget', color:'#16a34a' },
  { id:'f02', cat:'finance', icon:'📉', ar:'متتبع النفقات',         en:'Expense Tracker',       dar:'سجّل وصنّف مصاريفك اليومية',       den:'Track & categorize expenses', type:'track', fn:'expenses', color:'#dc2626' },
  { id:'f03', cat:'finance', icon:'🐷', ar:'حاسبة الادخار',         en:'Savings Calculator',    dar:'احسب مدخراتك المستقبلية',           den:'Future savings projection', type:'form', fn:'savings', color:'#16a34a' },
  { id:'f04', cat:'finance', icon:'📈', ar:'حاسبة الاستثمار',       en:'Investment Return',     dar:'احسب عوائد استثماراتك',             den:'Calculate investment returns', type:'form', fn:'invest', color:'#2563eb' },
  { id:'f05', cat:'finance', icon:'🏠', ar:'إيجار أم شراء؟',       en:'Rent vs Buy',           dar:'قارن بين الإيجار والشراء',          den:'Compare renting vs buying', type:'form', fn:'rentvsbuy', color:'#7c3aed' },
  { id:'f06', cat:'finance', icon:'🧾', ar:'حاسبة الفاتورة',        en:'Invoice Calculator',    dar:'احسب فاتورة منتجات وخدمات',         den:'Calculate product invoices', type:'form', fn:'invoice', color:'#0891b2' },
  { id:'f07', cat:'finance', icon:'💲', ar:'حاسبة العمولة',         en:'Commission Calc',       dar:'احسب عمولة المبيعات',               den:'Sales commission calculator', type:'form', fn:'commission', color:'#16a34a' },
  { id:'f08', cat:'finance', icon:'📦', ar:'حاسبة التقسيط',         en:'Installment Calc',      dar:'احسب أقساط أي شراء بالتقسيط',      den:'Calculate item installments', type:'form', fn:'installment', color:'#d97706' },
  { id:'f09', cat:'finance', icon:'💡', ar:'حاسبة التضخم',          en:'Inflation Calc',        dar:'احسب قيمة المال بعد التضخم',        den:'Money value with inflation', type:'form', fn:'inflation', color:'#ea580c' },
  { id:'f10', cat:'finance', icon:'💳', ar:'متتبع الديون',           en:'Debt Tracker',          dar:'تتبع وتخطط لسداد ديونك',            den:'Track & plan debt payoff', type:'track', fn:'debts', color:'#dc2626' },
  { id:'f11', cat:'finance', icon:'📋', ar:'مولّد الفاتورة',         en:'Invoice Generator',     dar:'أنشئ فاتورة احترافية سريعة',        den:'Create a quick invoice', type:'gen', fn:'invoiceGen', color:'#0891b2' },
  { id:'f12', cat:'finance', icon:'🎯', ar:'حاسبة الهدف الادخاري',  en:'Savings Goal',          dar:'احسب المبلغ الشهري لهدفك',          den:'Monthly amount for your goal', type:'form', fn:'savingsgoal', color:'#16a34a' },
  { id:'f13', cat:'finance', icon:'💼', ar:'تحليل الأعمال',          en:'Business Analysis',     dar:'نصائح وأدوات تحليل الأعمال',        den:'Business analysis tips & tools', type:'info', fn:'bizanalysis', color:'#7c3aed' },
  { id:'f14', cat:'finance', icon:'🔑', ar:'نصائح الادخار',          en:'Saving Tips',           dar:'أفضل طرق وعادات الادخار',           den:'Best saving habits & methods', type:'info', fn:'savingtips', color:'#16a34a' },
  { id:'f15', cat:'finance', icon:'🌱', ar:'الدخل السلبي',           en:'Passive Income',        dar:'أفكار لتحقيق دخل سلبي',             den:'Passive income ideas', type:'info', fn:'passive', color:'#16a34a' },
  { id:'f16', cat:'finance', icon:'📰', ar:'نصائح التداول',          en:'Trading Tips',          dar:'مبادئ التداول والاستثمار الآمن',    den:'Safe trading & investment tips', type:'info', fn:'trading', color:'#2563eb' },
  { id:'f17', cat:'finance', icon:'🛡️', ar:'التخطيط للطوارئ',       en:'Emergency Fund',        dar:'كيف تبني صندوق طوارئ؟',             den:'How to build an emergency fund', type:'info', fn:'emergency', color:'#dc2626' },
  { id:'f18', cat:'finance', icon:'💹', ar:'حاسبة رأس المال',        en:'Capital Calc',          dar:'احسب رأس مال مشروعك',               den:'Calculate your startup capital', type:'form', fn:'capital', color:'#0f766e' },
  { id:'f19', cat:'finance', icon:'🤝', ar:'دليل التفاوض',           en:'Negotiation Guide',     dar:'مهارات التفاوض الاحترافي',          den:'Professional negotiation skills', type:'info', fn:'negotiate', color:'#7c3aed' },
  { id:'f20', cat:'finance', icon:'📱', ar:'مصاريف الاشتراكات',      en:'Subscriptions Tracker', dar:'تتبع اشتراكاتك الشهرية',            den:'Track monthly subscriptions', type:'track', fn:'subs', color:'#ea580c' },

  /* ======== 📚 التعليم والثقافة ======== */
  { id:'e01', cat:'edu', icon:'✖️', ar:'جدول الضرب',              en:'Multiplication Table',  dar:'جدول الضرب الكامل 1-12',            den:'Full multiplication table 1-12', type:'info', fn:'multtable', color:'#d97706' },
  { id:'e02', cat:'edu', icon:'🔣', ar:'معادلات الرياضيات',        en:'Math Formulas',         dar:'أهم المعادلات الرياضية',             den:'Essential math formulas', type:'info', fn:'mathFormulas', color:'#2563eb' },
  { id:'e03', cat:'edu', icon:'🔤', ar:'قواعد اللغة العربية',      en:'Arabic Grammar',        dar:'أساسيات النحو والصرف العربي',        den:'Arabic grammar basics', type:'info', fn:'arabicGrammar', color:'#d97706' },
  { id:'e04', cat:'edu', icon:'🇬🇧', ar:'تعلّم الإنجليزية',        en:'Learn English',         dar:'مفردات وجمل إنجليزية أساسية',        den:'Essential English words & phrases', type:'info', fn:'english', color:'#2563eb' },
  { id:'e05', cat:'edu', icon:'🌍', ar:'معلومات الدول',            en:'Country Info',          dar:'معلومات وعواصم وعملات الدول',        den:'Countries, capitals & currencies', type:'info', fn:'countries', color:'#0f766e' },
  { id:'e06', cat:'edu', icon:'⚗️', ar:'معادلات الكيمياء',         en:'Chemistry Formulas',    dar:'معادلات ومفاهيم كيميائية أساسية',   den:'Basic chemistry formulas', type:'info', fn:'chemistry', color:'#7c3aed' },
  { id:'e07', cat:'edu', icon:'🔭', ar:'معادلات الفيزياء',          en:'Physics Formulas',      dar:'معادلات فيزيائية أساسية',            den:'Essential physics formulas', type:'info', fn:'physics', color:'#2563eb' },
  { id:'e08', cat:'edu', icon:'🧪', ar:'الجدول الدوري',            en:'Periodic Table',        dar:'عناصر الجدول الدوري',                den:'Periodic table elements', type:'info', fn:'periodic', color:'#0f766e' },
  { id:'e09', cat:'edu', icon:'❓', ar:'أسئلة ثقافية',             en:'Cultural Quiz',         dar:'اختبر معلوماتك العامة',              den:'Test your general knowledge', type:'game', fn:'quiz', color:'#d97706' },
  { id:'e10', cat:'edu', icon:'🔢', ar:'الأرقام للكلمات',          en:'Numbers to Words',      dar:'حوّل الأرقام إلى كلمات عربية',      den:'Convert numbers to Arabic words', type:'conv', fn:'num2word', color:'#ea580c' },
  { id:'e11', cat:'edu', icon:'📜', ar:'أمثال عربية',              en:'Arabic Proverbs',       dar:'أمثال وحكم عربية مع معانيها',       den:'Arabic proverbs & meanings', type:'gen', fn:'proverbs', color:'#d97706' },
  { id:'e12', cat:'edu', icon:'🕌', ar:'أذكار وأدعية',             en:'Islamic Remembrances',  dar:'أذكار الصباح والمساء والأدعية',      den:'Morning & evening remembrances', type:'info', fn:'adhkar', color:'#16a34a' },
  { id:'e13', cat:'edu', icon:'🗺️', ar:'دليل الجغرافيا',           en:'Geography Guide',       dar:'معلومات جغرافية للعالم',             den:'World geography facts', type:'info', fn:'geography', color:'#0891b2' },
  { id:'e14', cat:'edu', icon:'📖', ar:'قواعد الإملاء',            en:'Spelling Rules',        dar:'أشهر الأخطاء الإملائية وتصحيحها',   den:'Common spelling mistakes', type:'info', fn:'spelling', color:'#d97706' },
  { id:'e15', cat:'edu', icon:'🧮', ar:'حاسبة الدرجات',            en:'Grade Calculator',      dar:'احسب معدلك الدراسي GPA',             den:'Calculate your GPA', type:'form', fn:'gpa', color:'#2563eb' },
  { id:'e16', cat:'edu', icon:'🗣️', ar:'اقتباسات ملهمة',           en:'Inspiring Quotes',      dar:'اقتباسات مشاهير ملهمة',              den:'Inspiring quotes from great people', type:'gen', fn:'quotes', color:'#7c3aed' },
  { id:'e17', cat:'edu', icon:'🌙', ar:'الهجري والميلادي',          en:'Islamic Calendar',      dar:'أساسيات التقويم الهجري والميلادي',   den:'Islamic & Gregorian calendars', type:'info', fn:'calendar', color:'#16a34a' },
  { id:'e18', cat:'edu', icon:'🎯', ar:'اختبار الذكاء السريع',     en:'Quick IQ Test',         dar:'اختبار منطق وذكاء سريع',             den:'Quick logic & IQ test', type:'game', fn:'iqtest', color:'#9333ea' },
  { id:'e19', cat:'edu', icon:'🌟', ar:'مهارات القراءة',            en:'Reading Skills',        dar:'نصائح لتحسين مهارات القراءة',        den:'Tips to improve reading skills', type:'info', fn:'reading', color:'#d97706' },
  { id:'e20', cat:'edu', icon:'🎓', ar:'أساليب الدراسة',           en:'Study Techniques',      dar:'أفضل أساليب الدراسة والحفظ',         den:'Best studying & memorization tips', type:'info', fn:'study', color:'#2563eb' },

  /* ======== 🏠 المنزل والعائلة ======== */
  { id:'ho01', cat:'home', icon:'🛒', ar:'قائمة التسوق',           en:'Shopping List',         dar:'نظّم قائمة تسوقك',                  den:'Organize your shopping list', type:'todo', fn:'shopping', color:'#16a34a' },
  { id:'ho02', cat:'home', icon:'🍳', ar:'حاسبة المقادير',          en:'Recipe Converter',      dar:'حوّل مقادير الوصفات بسهولة',         den:'Scale recipe ingredients', type:'form', fn:'recipe', color:'#d97706' },
  { id:'ho03', cat:'home', icon:'🧹', ar:'جدول التنظيف',            en:'Cleaning Schedule',     dar:'نظّم جدول نظافة منزلك',              den:'Home cleaning schedule', type:'todo', fn:'cleaning', color:'#0891b2' },
  { id:'ho04', cat:'home', icon:'⚡', ar:'حاسبة الكهرباء',          en:'Electricity Calc',      dar:'احسب فاتورة الكهرباء التقريبية',     den:'Estimate electricity bill', type:'form', fn:'electric', color:'#d97706' },
  { id:'ho05', cat:'home', icon:'💧', ar:'حاسبة فاتورة الماء',      en:'Water Bill Calc',       dar:'احسب فاتورة الماء التقريبية',        den:'Estimate water bill', type:'form', fn:'waterBill', color:'#0891b2' },
  { id:'ho06', cat:'home', icon:'👶', ar:'دليل تربية الأطفال',      en:'Parenting Guide',       dar:'نصائح تربوية للأطفال حسب السن',     den:'Parenting tips by age', type:'info', fn:'parenting', color:'#be185d' },
  { id:'ho07', cat:'home', icon:'📐', ar:'حاسبة الطلاء والسيراميك', en:'Paint & Tile Calc',     dar:'احسب كميات الطلاء والسيراميك',       den:'Calculate paint & tile quantity', type:'form', fn:'paint', color:'#7c3aed' },
  { id:'ho08', cat:'home', icon:'🌿', ar:'دليل البستنة',            en:'Gardening Guide',       dar:'نصائح زراعة وعناية بالنباتات',       den:'Plant care & gardening tips', type:'info', fn:'gardening', color:'#16a34a' },
  { id:'ho09', cat:'home', icon:'🐾', ar:'متتبع الحيوانات الأليفة', en:'Pet Tracker',           dar:'تتبع رعاية حيوانك الأليف',           den:'Track your pet care routine', type:'track', fn:'pets', color:'#d97706' },
  { id:'ho10', cat:'home', icon:'🔧', ar:'دليل الصيانة المنزلية',   en:'Home Maintenance',      dar:'دليل صيانة المنزل الدورية',          den:'Periodic home maintenance guide', type:'info', fn:'maintenance', color:'#ea580c' },
  { id:'ho11', cat:'home', icon:'🍽️', ar:'مخطط وجبات الأسرة',      en:'Family Meal Plan',      dar:'خطط وجبات أسبوعية للعائلة',         den:'Weekly family meal planning', type:'todo', fn:'familyMeals', color:'#d97706' },
  { id:'ho12', cat:'home', icon:'🎉', ar:'مخطط المناسبات',          en:'Event Planner',         dar:'خطط لمناسباتك وأفراحك',              den:'Plan your events & celebrations', type:'todo', fn:'events', color:'#be185d' },
  { id:'ho13', cat:'home', icon:'🏗️', ar:'حاسبة التجديد',           en:'Renovation Calc',       dar:'احسب تكلفة تجديد المنزل تقريبياً',  den:'Estimate home renovation cost', type:'form', fn:'renov', color:'#ea580c' },
  { id:'ho14', cat:'home', icon:'🗂️', ar:'دليل التنظيم المنزلي',   en:'Home Organization',     dar:'نصائح لتنظيم المنزل وترتيبه',       den:'Home organization & tidying tips', type:'info', fn:'organize', color:'#0891b2' },
  { id:'ho15', cat:'home', icon:'🌡️', ar:'جدول الطهي',              en:'Cooking Guide',         dar:'درجات حرارة وأوقات الطهي',           den:'Cooking temperatures & times', type:'info', fn:'cooking', color:'#dc2626' },
  { id:'ho16', cat:'home', icon:'🧺', ar:'دليل الغسيل',             en:'Laundry Guide',         dar:'رموز الغسيل وطريقة العناية بالملابس', den:'Laundry symbols & care guide', type:'info', fn:'laundry', color:'#0891b2' },
  { id:'ho17', cat:'home', icon:'🛋️', ar:'نصائح الديكور',           en:'Decor Tips',            dar:'نصائح لتصميم وتجميل منزلك',          den:'Home design & decor tips', type:'info', fn:'decor', color:'#7c3aed' },
  { id:'ho18', cat:'home', icon:'🔒', ar:'أمن المنزل',              en:'Home Security',         dar:'نصائح لتأمين منزلك',                 den:'Tips to secure your home', type:'info', fn:'homesec', color:'#dc2626' },
  { id:'ho19', cat:'home', icon:'📦', ar:'متتبع المخزون المنزلي',   en:'Household Inventory',   dar:'تتبع مخزون المواد المنزلية',          den:'Track household supplies', type:'track', fn:'inventory', color:'#d97706' },
  { id:'ho20', cat:'home', icon:'🚗', ar:'حاسبة تكاليف السيارة',    en:'Car Cost Calc',         dar:'احسب تكاليف امتلاك وتشغيل السيارة', den:'Car ownership cost calculator', type:'form', fn:'carcost', color:'#ea580c' },

  /* ======== ✍️ الكتابة والنصوص ======== */
  { id:'w01', cat:'writing', icon:'📝', ar:'الملاحظات',            en:'Notes',                 dar:'دوّن ملاحظاتك وأفكارك',              den:'Write & save your notes', type:'notes', fn:'notes', color:'#be185d' },
  { id:'w02', cat:'writing', icon:'🔢', ar:'عداد الكلمات',          en:'Word Counter',          dar:'عدّ الكلمات والأحرف والجمل',         den:'Count words, chars & sentences', type:'notes', fn:'wordcount', color:'#7c3aed' },
  { id:'w03', cat:'writing', icon:'🔐', ar:'مولّد كلمات المرور',    en:'Password Generator',    dar:'أنشئ كلمة مرور قوية وآمنة',          den:'Generate strong passwords', type:'gen', fn:'password', color:'#dc2626' },
  { id:'w04', cat:'writing', icon:'🔡', ar:'محوّل حالة النص',       en:'Text Case Converter',   dar:'حوّل النص إلى كبير أو صغير',         den:'Convert text case (upper/lower)', type:'notes', fn:'textcase', color:'#2563eb' },
  { id:'w05', cat:'writing', icon:'🧹', ar:'منظّف النصوص',          en:'Text Cleaner',          dar:'نظّف النصوص من المسافات والرموز',     den:'Remove extra spaces & symbols', type:'notes', fn:'textclean', color:'#0f766e' },
  { id:'w06', cat:'writing', icon:'🔄', ar:'مشفّر ROT13',           en:'ROT13 Encoder',         dar:'شفّر ورسائلك بطريقة ROT13',          den:'Encode messages with ROT13', type:'notes', fn:'rot13', color:'#9333ea' },
  { id:'w07', cat:'writing', icon:'📋', ar:'مولد نص عربي عشوائي',   en:'Arabic Lorem Ipsum',    dar:'ولّد نصاً عشوائياً لتصاميمك',        den:'Generate filler Arabic text', type:'gen', fn:'loremArabic', color:'#7c3aed' },
  { id:'w08', cat:'writing', icon:'🔢', ar:'الأرقام بالكلمات',       en:'Number to Arabic Words',dar:'حوّل الأرقام إلى كلمات عربية',       den:'Convert numbers to Arabic words', type:'conv', fn:'arNum', color:'#d97706' },
  { id:'w09', cat:'writing', icon:'😄', ar:'مولّد النكات',           en:'Joke Generator',        dar:'نكات عربية مسلية',                   den:'Funny Arabic jokes', type:'gen', fn:'jokes', color:'#ea580c' },
  { id:'w10', cat:'writing', icon:'💌', ar:'مولّد رسائل',            en:'Message Generator',     dar:'رسائل وعبارات لكل مناسبة',           den:'Messages for every occasion', type:'gen', fn:'messages', color:'#be185d' },
  { id:'w11', cat:'writing', icon:'📖', ar:'علامات الترقيم',         en:'Punctuation Guide',     dar:'دليل علامات الترقيم العربية',         den:'Arabic punctuation guide', type:'info', fn:'punctuation', color:'#d97706' },
  { id:'w12', cat:'writing', icon:'✉️', ar:'قوالب البريد',           en:'Email Templates',       dar:'قوالب بريد إلكتروني احترافية',       den:'Professional email templates', type:'gen', fn:'email', color:'#0891b2' },
  { id:'w13', cat:'writing', icon:'🔒', ar:'مشفّر Base64',           en:'Base64 Encoder',        dar:'شفّر وفكّ تشفير النصوص Base64',       den:'Encode & decode Base64 text', type:'conv', fn:'base64', color:'#7c3aed' },
  { id:'w14', cat:'writing', icon:'📏', ar:'عداد الأسطر',            en:'Line Counter',          dar:'عدّ أسطر النص بدقة',                 den:'Count lines in text', type:'notes', fn:'linecount', color:'#2563eb' },
  { id:'w15', cat:'writing', icon:'🌟', ar:'مولّد الاقتباسات',       en:'Quote Generator',       dar:'اقتباسات وحكم ملهمة',                den:'Inspiring quotes & wisdom', type:'gen', fn:'quotegen', color:'#9333ea' },
  { id:'w16', cat:'writing', icon:'📝', ar:'دليل الكتابة',           en:'Writing Guide',         dar:'نصائح لتحسين مهاراتك في الكتابة',   den:'Tips to improve writing skills', type:'info', fn:'writing', color:'#be185d' },
  { id:'w17', cat:'writing', icon:'🎭', ar:'مولّد القصص',            en:'Story Generator',       dar:'ولّد بداية قصة مثيرة',               den:'Generate story starters', type:'gen', fn:'story', color:'#ea580c' },
  { id:'w18', cat:'writing', icon:'🔍', ar:'بحث واستبدال النص',      en:'Find & Replace',        dar:'ابحث واستبدل كلمات في النص',         den:'Find & replace words in text', type:'notes', fn:'findreplace', color:'#0f766e' },
  { id:'w19', cat:'writing', icon:'📑', ar:'مولّد الفقرات',           en:'Paragraph Generator',   dar:'ولّد فقرات لموضوع ما',               den:'Generate paragraphs by topic', type:'gen', fn:'paragraph', color:'#7c3aed' },
  { id:'w20', cat:'writing', icon:'🧩', ar:'لعبة الكلمات',           en:'Word Game',             dar:'ألعاب الكلمات المسلية',               den:'Fun word games', type:'game', fn:'wordgame', color:'#d97706' },

  /* ======== 💻 الأدوات الرقمية ======== */
  { id:'d01', cat:'digital', icon:'🎨', ar:'محوّل الألوان',          en:'Color Converter',       dar:'حوّل بين HEX وRGB وHSL',             den:'Convert HEX, RGB & HSL colors', type:'conv', fn:'color', color:'#9333ea' },
  { id:'d02', cat:'digital', icon:'🔢', ar:'محوّل الأنظمة العددية',  en:'Number Base Converter', dar:'حوّل بين الثنائي والعشري والست عشري', den:'Binary, decimal, hex, octal', type:'conv', fn:'numbase', color:'#2563eb' },
  { id:'d03', cat:'digital', icon:'🆔', ar:'مولّد UUID',              en:'UUID Generator',        dar:'ولّد معرّفات UUID فريدة',             den:'Generate unique UUIDs', type:'gen', fn:'uuid', color:'#7c3aed' },
  { id:'d04', cat:'digital', icon:'🕐', ar:'محوّل Unix Timestamp',    en:'Unix Timestamp',        dar:'حوّل Unix Timestamp إلى تاريخ',      den:'Convert Unix timestamp to date', type:'conv', fn:'timestamp', color:'#0f766e' },
  { id:'d05', cat:'digital', icon:'🔐', ar:'مولّد كلمة مرور قوية',   en:'Strong Password',       dar:'كلمة مرور آمنة بخيارات متقدمة',      den:'Advanced secure password gen', type:'gen', fn:'strongpass', color:'#dc2626' },
  { id:'d06', cat:'digital', icon:'💾', ar:'محوّل أحجام الملفات',     en:'File Size Converter',   dar:'حوّل بين KB و MB و GB و TB',          den:'Convert KB, MB, GB, TB', type:'conv', fn:'filesize', color:'#0891b2' },
  { id:'d07', cat:'digital', icon:'📡', ar:'حاسبة عرض النطاق',        en:'Bandwidth Calc',        dar:'احسب وقت تحميل الملفات',             den:'File download time calculator', type:'form', fn:'bandwidth', color:'#2563eb' },
  { id:'d08', cat:'digital', icon:'🖥️', ar:'محوّل دقة الشاشة',       en:'Resolution Converter',  dar:'احسب نسبة العرض إلى الارتفاع',       den:'Screen aspect ratio calculator', type:'form', fn:'resolution', color:'#0f766e' },
  { id:'d09', cat:'digital', icon:'📊', ar:'محوّل JSON',               en:'JSON Formatter',        dar:'نسّق ونظّم كود JSON',                den:'Format & beautify JSON code', type:'notes', fn:'json', color:'#d97706' },
  { id:'d10', cat:'digital', icon:'🔤', ar:'محوّل ASCII',              en:'ASCII Converter',       dar:'حوّل النص إلى أكواد ASCII',           den:'Text to ASCII codes', type:'conv', fn:'ascii', color:'#9333ea' },
  { id:'d11', cat:'digital', icon:'⌨️', ar:'اختصارات الكيبورد',       en:'Keyboard Shortcuts',    dar:'اختصارات لوحة المفاتيح الشائعة',     den:'Common keyboard shortcuts', type:'info', fn:'shortcuts', color:'#2563eb' },
  { id:'d12', cat:'digital', icon:'🌐', ar:'رموز HTML',               en:'HTML Entities',         dar:'جدول رموز HTML الشائعة',              den:'Common HTML entity codes', type:'info', fn:'htmlentities', color:'#ea580c' },
  { id:'d13', cat:'digital', icon:'🛡️', ar:'الأمان الرقمي',           en:'Digital Security',      dar:'نصائح لحماية بياناتك الرقمية',       den:'Protect your digital identity', type:'info', fn:'digisec', color:'#dc2626' },
  { id:'d14', cat:'digital', icon:'📱', ar:'حاسبة استهلاك البيانات',  en:'Data Usage Calc',       dar:'احسب استهلاك بيانات إنترنت',         den:'Estimate internet data usage', type:'form', fn:'data', color:'#0891b2' },
  { id:'d15', cat:'digital', icon:'💻', ar:'دليل HTTP Status',         en:'HTTP Status Codes',     dar:'دليل رموز حالة HTTP ومعانيها',        den:'HTTP status codes reference', type:'info', fn:'httpstatus', color:'#7c3aed' },
  { id:'d16', cat:'digital', icon:'🎯', ar:'محوّل الترميزات',          en:'Encoding Converter',    dar:'URL Encode / Decode وغيرها',          den:'URL encode/decode & more', type:'conv', fn:'encoding', color:'#0f766e' },
  { id:'d17', cat:'digital', icon:'🔣', ar:'رموز Unicode',             en:'Unicode Symbols',       dar:'رموز ورموز Unicode المفيدة',          den:'Useful Unicode symbols & emojis', type:'info', fn:'unicode', color:'#9333ea' },
  { id:'d18', cat:'digital', icon:'📋', ar:'مولّد Hash',               en:'Hash Generator',        dar:'ولّد Hash للنصوص (MD5 & SHA)',        den:'Generate text hash (MD5-style)', type:'gen', fn:'hash', color:'#7c3aed' },
  { id:'d19', cat:'digital', icon:'🖱️', ar:'دليل Regex',               en:'Regex Guide',           dar:'دليل عبارات Regex الشائعة',           den:'Common regex patterns reference', type:'info', fn:'regex', color:'#d97706' },
  { id:'d20', cat:'digital', icon:'🌈', ar:'تدرّج الألوان',             en:'Color Palette',         dar:'توليد تدرج ألوان جميل',              den:'Generate beautiful color palettes', type:'gen', fn:'palette', color:'#be185d' },

  /* ======== 🎮 الترفيه والألعاب ======== */
  { id:'g01', cat:'fun', icon:'🎲', ar:'لعبة التخمين',            en:'Guessing Game',         dar:'خمّن الرقم بين 1 و100',              den:'Guess the number 1-100', type:'game', fn:'guess', color:'#9333ea' },
  { id:'g02', cat:'fun', icon:'🧠', ar:'لعبة الذاكرة',            en:'Memory Game',           dar:'اختبر ذاكرتك مع الأرقام',            den:'Test your memory with numbers', type:'game', fn:'memory', color:'#7c3aed' },
  { id:'g03', cat:'fun', icon:'❓', ar:'التريفيا العربية',         en:'Arabic Trivia',         dar:'أسئلة ثقافية وعلمية ومتنوعة',       den:'Cultural & science trivia', type:'game', fn:'trivia', color:'#d97706' },
  { id:'g04', cat:'fun', icon:'🔤', ar:'لعبة الكلمات',            en:'Word Association',      dar:'سلسلة الكلمات المترابطة',            den:'Word association chain game', type:'game', fn:'wordassoc', color:'#2563eb' },
  { id:'g05', cat:'fun', icon:'🤔', ar:'لعبة الأحجيات',           en:'Riddles',               dar:'ألغاز وأحجيات عربية ممتعة',          den:'Fun Arabic riddles & puzzles', type:'game', fn:'riddles', color:'#ea580c' },
  { id:'g06', cat:'fun', icon:'🌟', ar:'حظ اليوم',                en:"Today's Fortune",       dar:'رسالة تحفيزية خاصة بك اليوم',       den:'Your personal daily fortune', type:'gen', fn:'fortune', color:'#d97706' },
  { id:'g07', cat:'fun', icon:'😂', ar:'نكتة اليوم',              en:'Daily Joke',            dar:'نكتة مضحكة يومياً',                  den:'A funny joke each day', type:'gen', fn:'dailyjoke', color:'#ea580c' },
  { id:'g08', cat:'fun', icon:'💭', ar:'اقتباس اليوم',            en:'Daily Quote',           dar:'اقتباس ملهم يومي',                  den:'Your daily inspiring quote', type:'gen', fn:'dailyquote', color:'#9333ea' },
  { id:'g09', cat:'fun', icon:'🎯', ar:'مولّد التحديات',           en:'Challenge Generator',   dar:'تحديات يومية مثيرة للنمو الشخصي',   den:'Daily personal growth challenges', type:'gen', fn:'challenges', color:'#dc2626' },
  { id:'g10', cat:'fun', icon:'✅', ar:'صح أم خطأ',               en:'True or False',         dar:'اختبر معلوماتك بالصح والخطأ',        den:'Test knowledge with true/false', type:'game', fn:'truefalse', color:'#16a34a' },
  { id:'g11', cat:'fun', icon:'🔢', ar:'لعبة الرياضيات السريعة',  en:'Math Sprint',           dar:'احسب أسرع ما يمكن',                  den:'Solve math problems fast', type:'game', fn:'mathsprint', color:'#2563eb' },
  { id:'g12', cat:'fun', icon:'🎨', ar:'مولّد لوحة الألوان',       en:'Color Mood',            dar:'اكتشف لون مزاجك اليوم',              den:'Discover your mood color', type:'gen', fn:'colorMood', color:'#be185d' },
  { id:'g13', cat:'fun', icon:'📚', ar:'مولّد أسماء عربية',        en:'Arabic Name Generator', dar:'ولّد أسماء عربية جميلة',             den:'Generate beautiful Arabic names', type:'gen', fn:'arabicnames', color:'#d97706' },
  { id:'g14', cat:'fun', icon:'🎭', ar:'مولّد القصص القصيرة',      en:'Story Starter',         dar:'ولّد مقدمة قصة مثيرة',               den:'Generate a story opening', type:'gen', fn:'storystarter', color:'#7c3aed' },
  { id:'g15', cat:'fun', icon:'💡', ar:'مولّد الأفكار',            en:'Idea Generator',        dar:'ولّد أفكاراً إبداعية جديدة',         den:'Generate creative new ideas', type:'gen', fn:'ideas', color:'#ea580c' },

  /* ======== 🌟 الخدمات اليومية ======== */
  { id:'dy01', cat:'daily', icon:'🕌', ar:'اتجاه القبلة',           en:'Qibla Direction',       dar:'احسب اتجاه القبلة من موقعك',        den:'Calculate Qibla direction', type:'form', fn:'qibla', color:'#16a34a' },
  { id:'dy02', cat:'daily', icon:'🌙', ar:'مواقيت الصلاة',          en:'Prayer Times',          dar:'حساب أوقات الصلاة لمدينتك',         den:'Calculate prayer times by city', type:'form', fn:'prayer', color:'#16a34a' },
  { id:'dy03', cat:'daily', icon:'📿', ar:'أذكار اليوم',            en:'Daily Adhkar',          dar:'أذكار الصباح والمساء والأوراد',      den:'Morning & evening remembrances', type:'info', fn:'adhkarDaily', color:'#16a34a' },
  { id:'dy04', cat:'daily', icon:'📅', ar:'محوّل التقويم',          en:'Calendar Converter',    dar:'حوّل بين الهجري والميلادي',          den:'Hijri & Gregorian conversion', type:'conv', fn:'hijri', color:'#d97706' },
  { id:'dy05', cat:'daily', icon:'✈️', ar:'دليل السفر',             en:'Travel Guide',          dar:'نصائح وتحضيرات السفر',               den:'Travel tips & preparation', type:'info', fn:'travel', color:'#0891b2' },
  { id:'dy06', cat:'daily', icon:'🚨', ar:'دليل الطوارئ',           en:'Emergency Guide',       dar:'ماذا تفعل في حالات الطوارئ',         den:'What to do in emergencies', type:'info', fn:'emergencyGuide', color:'#dc2626' },
  { id:'dy07', cat:'daily', icon:'🌤️', ar:'نصائح الطقس',            en:'Weather Tips',          dar:'نصائح حسب حالات الطقس المختلفة',    den:'Tips for different weather conditions', type:'info', fn:'weathertips', color:'#0891b2' },
  { id:'dy08', cat:'daily', icon:'⚖️', ar:'دليل الحقوق',            en:'Rights Guide',          dar:'حقوق المواطن والمستهلك الأساسية',    den:'Citizen & consumer rights', type:'info', fn:'rights', color:'#7c3aed' },
  { id:'dy09', cat:'daily', icon:'🏛️', ar:'الخدمات الحكومية',       en:'Government Services',   dar:'دليل الخدمات الحكومية الإلكترونية',  den:'Online government services guide', type:'info', fn:'govservices', color:'#2563eb' },
  { id:'dy10', cat:'daily', icon:'📬', ar:'دليل المراسلة',          en:'Correspondence Guide',  dar:'كيفية كتابة الخطابات الرسمية',       den:'How to write formal letters', type:'info', fn:'letters', color:'#be185d' },
  { id:'dy11', cat:'daily', icon:'🚗', ar:'دليل قيادة السيارة',     en:'Driving Guide',         dar:'نصائح قيادة آمنة وذكية',             den:'Safe & smart driving tips', type:'info', fn:'driving', color:'#ea580c' },
  { id:'dy12', cat:'daily', icon:'🧘', ar:'الصحة النفسية',          en:'Mental Wellness',       dar:'نصائح للصحة النفسية والراحة',        den:'Mental health & wellbeing tips', type:'info', fn:'mental', color:'#9333ea' },
  { id:'dy13', cat:'daily', icon:'🔐', ar:'الأمان الشخصي',          en:'Personal Safety',       dar:'نصائح للأمان الشخصي',               den:'Personal safety guidelines', type:'info', fn:'safety', color:'#dc2626' },
  { id:'dy14', cat:'daily', icon:'🎯', ar:'ريادة الأعمال',          en:'Entrepreneurship',      dar:'نصائح بدء وتطوير الأعمال',           den:'Starting & growing a business', type:'info', fn:'entrepreneurship', color:'#d97706' },
  { id:'dy15', cat:'daily', icon:'🤲', ar:'آداب الإسلام اليومية',   en:'Daily Islamic Manners', dar:'آداب إسلامية يومية مع أدعيتها',      den:'Daily Islamic etiquette & prayers', type:'info', fn:'islamicManners', color:'#16a34a' },
];

/* ===================================
   حالة التطبيق
   =================================== */
const APP = {
  lang: localStorage.getItem('lang') || 'ar',
  theme: localStorage.getItem('theme') || 'light',
  currentCat: 'all',
  currentSearch: '',
  activeTool: null,
  timers: {}, /* حفظ مرجع الـ intervals للأدوات */
};

/* ===================================
   دوال مساعدة
   =================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => el.querySelectorAll(s);
const lsGet = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const n = (v) => parseFloat(v) || 0;
const fmt = (v, d = 2) => isNaN(v) ? '—' : (+v).toLocaleString('ar-SA', { maximumFractionDigits: d });
const t = (ar, en) => APP.lang === 'ar' ? ar : en;

/* ===================================
   تهيئة التطبيق
   =================================== */
function initApp() {
  /* تطبيق الثيم المحفوظ */
  if (APP.theme === 'dark') {
    document.body.classList.add('dark-mode');
    $('#themeIcon').textContent = '☀️';
  }
  /* تطبيق اللغة المحفوظة */
  applyLang(APP.lang);

  /* تصيير الأدوات */
  renderToolsGrid(TOOLS);
  updateCount(TOOLS.length);

  /* إخفاء شاشة التحميل */
  setTimeout(() => {
    const splash = $('#splashScreen');
    if (splash) splash.classList.add('hidden');
  }, 1400);

  /* ربط الأحداث */
  bindEvents();
}

/* ===================================
   تصيير شبكة الأدوات
   =================================== */
function renderToolsGrid(tools) {
  const grid = $('#toolsGrid');
  if (!tools.length) {
    grid.innerHTML = '';
    $('#emptyState').style.display = 'block';
    return;
  }
  $('#emptyState').style.display = 'none';
  const langKey = APP.lang === 'ar' ? 'ar' : 'en';
  const descKey = APP.lang === 'ar' ? 'dar' : 'den';
  grid.innerHTML = tools.map((tool, i) => `
    <div class="tool-card" data-id="${tool.id}" style="--card-color:${tool.color};animation-delay:${Math.min(i * 0.04, 1)}s" role="button" tabindex="0" aria-label="${tool[langKey]}">
      <div class="tool-icon">${tool.icon}</div>
      <div class="tool-name">${tool[langKey]}</div>
      <div class="tool-desc">${tool[descKey]}</div>
    </div>
  `).join('');

  /* إضافة أحداث النقر */
  $$('.tool-card').forEach(card => {
    card.addEventListener('click', () => openTool(card.dataset.id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openTool(card.dataset.id); });
  });
}

function updateCount(count) {
  const el = $('#toolsCount');
  if (el) el.textContent = count + ' ' + t('أداة', 'tools');
}

/* ===================================
   نظام البحث والتصفية
   =================================== */
function filterTools() {
  const search = APP.currentSearch.toLowerCase().trim();
  const cat = APP.currentCat;

  let filtered = TOOLS.filter(tool => {
    const matchCat = cat === 'all' || tool.cat === cat;
    const matchSearch = !search ||
      tool.ar.includes(search) ||
      tool.en.toLowerCase().includes(search) ||
      tool.dar.includes(search) ||
      tool.den.toLowerCase().includes(search) ||
      tool.cat.includes(search);
    return matchCat && matchSearch;
  });

  renderToolsGrid(filtered);
  updateCount(filtered.length);

  /* تحديث عنوان القسم */
  const title = $('#sectionTitle');
  if (title) {
    if (search) {
      title.textContent = t(`نتائج: "${APP.currentSearch}"`, `Results: "${APP.currentSearch}"`);
    } else if (cat === 'all') {
      title.textContent = t('جميع الأدوات', 'All Tools');
    } else {
      const btn = $(`.cat-btn[data-cat="${cat}"]`);
      title.textContent = btn ? (APP.lang === 'ar' ? btn.dataset.ar : btn.dataset.en) : '';
    }
  }
}

/* ===================================
   ربط الأحداث
   =================================== */
function bindEvents() {
  /* البحث */
  const searchInput = $('#searchInput');
  searchInput.addEventListener('input', (e) => {
    APP.currentSearch = e.target.value;
    $('#clearBtn').style.display = e.target.value ? 'flex' : 'none';
    filterTools();
  });
  $('#clearBtn').addEventListener('click', () => {
    searchInput.value = '';
    APP.currentSearch = '';
    $('#clearBtn').style.display = 'none';
    filterTools();
  });

  /* التصنيفات */
  $$('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      APP.currentCat = btn.dataset.cat;
      filterTools();
      /* تمرير التصنيف للظهور */
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  /* الثيم */
  $('#themeBtn').addEventListener('click', toggleTheme);

  /* اللغة */
  $('#langBtn').addEventListener('click', toggleLang);

  /* المودال */
  $('#modalClose').addEventListener('click', closeTool);
  $('#modalOverlay').addEventListener('click', (e) => {
    if (e.target === $('#modalOverlay')) closeTool();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTool();
  });

  /* زر التمرير للأعلى */
  window.addEventListener('scroll', () => {
    const btn = $('#scrollTop');
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
  });
  $('#scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===================================
   تبديل الثيم
   =================================== */
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  APP.theme = isDark ? 'dark' : 'light';
  $('#themeIcon').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', APP.theme);
}

/* ===================================
   تبديل اللغة
   =================================== */
function toggleLang() {
  APP.lang = APP.lang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('lang', APP.lang);
  applyLang(APP.lang);
  filterTools();
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $('#langLabel').textContent = lang === 'ar' ? 'EN' : 'عر';

  /* تحديث نصوص data-ar / data-en */
  $$('[data-ar]').forEach(el => {
    if (el.dataset[lang]) el.textContent = el.dataset[lang];
  });

  /* تحديث placeholders */
  const si = $('#searchInput');
  if (si) si.placeholder = lang === 'ar' ? 'ابحث عن أي أداة...' : 'Search any tool...';

  /* تحديث التصنيفات */
  $$('.cat-btn').forEach(btn => {
    if (btn.dataset[lang]) btn.textContent = btn.dataset[lang];
  });
}

/* ===================================
   فتح الأداة في المودال
   =================================== */
function openTool(id) {
  const tool = TOOLS.find(t => t.id === id);
  if (!tool) return;
  APP.activeTool = tool;

  /* إيقاف أي timer نشط */
  clearAllTimers();

  const langKey = APP.lang === 'ar' ? 'ar' : 'en';
  $('#modalIcon').textContent = tool.icon;
  $('#modalTitle').textContent = tool[langKey];
  $('#modalBody').innerHTML = '';

  /* تصيير الأداة */
  buildToolUI(tool, $('#modalBody'));

  /* فتح المودال */
  $('#modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  $('#modalBody').scrollTop = 0;
}

function closeTool() {
  clearAllTimers();
  $('#modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  APP.activeTool = null;
}

function clearAllTimers() {
  Object.values(APP.timers).forEach(id => clearInterval(id));
  APP.timers = {};
}

/* ===================================
   بناء واجهة الأداة حسب نوعها
   =================================== */
function buildToolUI(tool, container) {
  const renders = {
    'calc': renderCalc,
    'form': renderForm,
    'todo': renderTodo,
    'timer': renderTimer,
    'notes': renderNotes,
    'conv': renderConv,
    'info': renderInfo,
    'game': renderGame,
    'gen': renderGen,
    'track': renderTrack,
  };
  const fn = renders[tool.type];
  if (fn) fn(tool, container);
  else renderInfo(tool, container);
}

/* ===================================
   1️⃣ الحاسبة العامة
   =================================== */
function renderCalc(tool, el) {
  let expr = '';
  let result = '0';

  const isScientific = tool.fn === 'scientific';
  const btns = isScientific
    ? ['sin','cos','tan','√','(',')','^','%','C','⌫','.','+/-','7','8','9','÷','4','5','6','×','1','2','3','-','0','0','=','+']
    : ['C','⌫','%','÷','7','8','9','×','4','5','6','-','1','2','3','+','0','.','=','='];

  el.innerHTML = `
    <div class="calc-display">
      <div class="calc-expr" id="calcExpr">${expr || ''}</div>
      <div class="calc-result" id="calcResult">0</div>
    </div>
    <div class="calc-grid" id="calcGrid"></div>
  `;

  const grid = el.querySelector('#calcGrid');
  const exprEl = el.querySelector('#calcExpr');
  const resEl = el.querySelector('#calcResult');

  const btnDefs = [
    { label:'C', cls:'clr', action:'clear' },
    { label:'⌫', cls:'', action:'del' },
    { label:'%', cls:'op', action:'%' },
    { label:'÷', cls:'op', action:'/' },
    { label:'7', cls:'', action:'7' }, { label:'8', cls:'', action:'8' }, { label:'9', cls:'', action:'9' }, { label:'×', cls:'op', action:'*' },
    { label:'4', cls:'', action:'4' }, { label:'5', cls:'', action:'5' }, { label:'6', cls:'', action:'6' }, { label:'-', cls:'op', action:'-' },
    { label:'1', cls:'', action:'1' }, { label:'2', cls:'', action:'2' }, { label:'3', cls:'', action:'3' }, { label:'+', cls:'op', action:'+' },
    { label:'0', cls:'wide', action:'0' }, { label:'.', cls:'', action:'.' },
    { label:'=', cls:'eq', action:'=' },
  ];

  const sciDefs = isScientific ? [
    { label:'sin', cls:'op', action:'sin' }, { label:'cos', cls:'op', action:'cos' }, { label:'tan', cls:'op', action:'tan' }, { label:'√', cls:'op', action:'sqrt' },
    { label:'(', cls:'op', action:'(' }, { label:')', cls:'op', action:')' }, { label:'xʸ', cls:'op', action:'^' }, { label:'log', cls:'op', action:'log' },
    ...btnDefs
  ] : btnDefs;

  sciDefs.forEach(b => {
    const btn = document.createElement('button');
    btn.className = `calc-btn ${b.cls}`;
    btn.textContent = b.label;
    btn.addEventListener('click', () => {
      try {
        if (b.action === 'clear') { expr = ''; resEl.textContent = '0'; }
        else if (b.action === 'del') { expr = expr.slice(0, -1); }
        else if (b.action === '=') {
          let e = expr.replace(/÷/g, '/').replace(/×/g, '*').replace(/\^/g, '**');
          e = e.replace(/sin\(/g, 'Math.sin(').replace(/cos\(/g, 'Math.cos(').replace(/tan\(/g, 'Math.tan(');
          e = e.replace(/sqrt\(/g, 'Math.sqrt(').replace(/log\(/g, 'Math.log10(');
          const r = Function('"use strict"; return (' + e + ')')();
          result = isNaN(r) ? 'خطأ' : parseFloat(r.toFixed(10)).toString();
          resEl.textContent = result;
          expr = result === 'خطأ' ? '' : result;
        }
        else { expr += b.action; }
        exprEl.textContent = expr;
      } catch { resEl.textContent = 'خطأ'; expr = ''; }
    });
    grid.appendChild(btn);
  });
}

/* ===================================
   2️⃣ نماذج الحساب
   =================================== */
function renderForm(tool, el) {
  const formBuilders = {
    age: () => formAge(el),
    bmi: () => formBmi(el),
    percent: () => formPercent(el),
    loan: () => formLoan(el),
    zakat: () => formZakat(el),
    currency: () => formCurrency(el),
    fuel: () => formFuel(el),
    area: () => formArea(el),
    volume: () => formVolume(el),
    sqrt: () => formSqrt(el),
    avg: () => formAvg(el),
    interest: () => formInterest(el),
    salary: () => formSalary(el),
    discount: () => formDiscount(el),
    tax: () => formTax(el),
    timediff: () => formTimeDiff(el),
    breakeven: () => formBreakeven(el),
    fraction: () => formFraction(el),
    profit: () => formProfit(el),
    mortgage: () => formMortgage(el),
    calories: () => formCalories(el),
    water: () => formWater(el),
    heartrate: () => formHeartRate(el),
    sleep: () => formSleep(el),
    carbs: () => formCarbs(el),
    protein: () => formProtein(el),
    steps: () => formSteps(el),
    obesity: () => formObesity(el),
    pregnancy: () => formPregnancy(el),
    burned: () => formBurned(el),
    cycle: () => formCycle(el),
    timezone: () => formTimezone(el),
    workdays: () => formWorkdays(el),
    budget: () => formBudget(el),
    savings: () => formSavings(el),
    invest: () => formInvest(el),
    rentvsbuy: () => formRentVsBuy(el),
    invoice: () => formInvoice(el),
    commission: () => formCommission(el),
    installment: () => formInstallment(el),
    inflation: () => formInflation(el),
    capital: () => formCapital(el),
    savingsgoal: () => formSavingsGoal(el),
    gpa: () => formGpa(el),
    recipe: () => formRecipe(el),
    electric: () => formElectric(el),
    waterBill: () => formWaterBill(el),
    paint: () => formPaint(el),
    renov: () => formRenov(el),
    carcost: () => formCarCost(el),
    bandwidth: () => formBandwidth(el),
    resolution: () => formResolution(el),
    data: () => formData(el),
    qibla: () => formQibla(el),
    prayer: () => formPrayer(el),
    retirement: () => formRetirement(el),
    workhours: () => formWorkHours(el),
    daysuntil: () => formDaysUntil(el),
    productivity: () => formProductivity(el),
    renov2: () => formRenov(el),
  };
  const builder = formBuilders[tool.fn];
  if (builder) builder();
  else {
    el.innerHTML = `<p class="info-card">${t('هذه الأداة قيد التطوير', 'This tool is coming soon')}</p>`;
  }
}

/* -------- نماذج الحساب -------- */

function formField(label, id, type = 'number', placeholder = '', opts = '') {
  return `<div class="form-group">
    <label class="form-label" for="${id}">${label}</label>
    <input class="form-input" type="${type}" id="${id}" placeholder="${placeholder}" ${opts}>
  </div>`;
}
function formSelect(label, id, options) {
  return `<div class="form-group">
    <label class="form-label" for="${id}">${label}</label>
    <select class="form-select" id="${id}">${options.map(o => `<option value="${o.v}">${o.l}</option>`).join('')}</select>
  </div>`;
}
function resultBox(id) {
  return `<div class="result-box" id="${id}" style="display:none"></div>`;
}
function calcBtn(label = t('احسب','Calculate'), id = 'calcBtn') {
  return `<button class="btn-primary" id="${id}">${label}</button>`;
}
function showResult(boxId, value, label = t('النتيجة','Result'), note = '') {
  const box = document.getElementById(boxId);
  if (!box) return;
  box.style.display = 'block';
  box.innerHTML = `<div class="result-label">${label}</div><div class="result-value">${value}</div>${note ? `<div class="result-note">${note}</div>` : ''}`;
}

function formAge(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('تاريخ الميلاد','Date of Birth'), 'dob', 'date')}
    ${calcBtn(t('احسب عمري','Calculate Age'))}
    ${resultBox('ageRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const d = new Date(el.querySelector('#dob').value);
    if (!d || isNaN(d)) return;
    const now = new Date();
    let y = now.getFullYear() - d.getFullYear();
    let m = now.getMonth() - d.getMonth();
    let days = now.getDate() - d.getDate();
    if (days < 0) { m--; days += 30; }
    if (m < 0) { y--; m += 12; }
    const totalDays = Math.floor((now - d) / 86400000);
    showResult('ageRes', `${y} ${t('سنة','yr')} ${m} ${t('شهر','mo')} ${days} ${t('يوم','d')}`,
      t('عمرك الآن','Your Age'),
      t(`إجمالي: ${totalDays.toLocaleString()} يوم`, `Total: ${totalDays.toLocaleString()} days`));
  };
}

function formBmi(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الوزن (كجم)','Weight (kg)'), 'bw', 'number', '70')}
    ${formField(t('الطول (سم)','Height (cm)'), 'bh', 'number', '170')}
    ${calcBtn(t('احسب مؤشر الجسم','Calculate BMI'))}
    ${resultBox('bmiRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const w = n(el.querySelector('#bw').value);
    const h = n(el.querySelector('#bh').value) / 100;
    if (!w || !h) return;
    const bmi = (w / (h * h)).toFixed(1);
    const cat = bmi < 18.5 ? t('نحيف','Underweight') : bmi < 25 ? t('طبيعي ✅','Normal ✅') : bmi < 30 ? t('زائد الوزن','Overweight') : t('سمنة','Obese');
    showResult('bmiRes', bmi, t('مؤشر كتلة الجسم','BMI'), t(`التصنيف: ${cat}`, `Category: ${cat}`));
  };
}

function formPercent(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('النسبة المئوية','Percentage'), 'pct', 'number', '15')}
    ${formField(t('من الرقم','Of number'), 'ptotal', 'number', '200')}
    ${calcBtn(t('احسب','Calculate'))}
    ${resultBox('pRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const p = n(el.querySelector('#pct').value);
    const total = n(el.querySelector('#ptotal').value);
    showResult('pRes', fmt(total * p / 100), `${p}% ${t('من','of')} ${fmt(total)}`);
  };
}

function formLoan(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('مبلغ القرض','Loan amount'), 'lamt', 'number', '100000')}
    ${formField(t('معدل الفائدة السنوي %','Annual interest rate %'), 'lrate', 'number', '5')}
    ${formField(t('مدة القرض (سنوات)','Loan term (years)'), 'lyears', 'number', '5')}
    ${calcBtn(t('احسب القسط الشهري','Monthly Payment'))}
    ${resultBox('lRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const P = n(el.querySelector('#lamt').value);
    const r = n(el.querySelector('#lrate').value) / 100 / 12;
    const n2 = n(el.querySelector('#lyears').value) * 12;
    if (!P || !n2) return;
    const monthly = r === 0 ? P / n2 : P * (r * Math.pow(1 + r, n2)) / (Math.pow(1 + r, n2) - 1);
    const total = monthly * n2;
    showResult('lRes', `${fmt(monthly)} ${t('شهرياً','/ month')}`, t('القسط الشهري','Monthly Payment'),
      t(`إجمالي الفائدة: ${fmt(total - P)}`, `Total interest: ${fmt(total - P)}`));
  };
}

function formZakat(el) {
  el.innerHTML = `<div class="tool-form">
    <div class="tip-box">${t('النصاب = قيمة 85 جرام ذهب. الزكاة = 2.5% من المال الذي مرّ عليه حول كامل','Nisab = value of 85g gold. Zakat = 2.5% of wealth held for 1 year')}</div>
    ${formField(t('إجمالي مالك ومدخراتك','Total savings & wealth'), 'zamt', 'number', '10000')}
    ${formField(t('نصاب الزكاة (بالعملة)','Nisab value in currency'), 'znisab', 'number', '2500')}
    ${calcBtn(t('احسب الزكاة','Calculate Zakat'))}
    ${resultBox('zRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const amt = n(el.querySelector('#zamt').value);
    const nisab = n(el.querySelector('#znisab').value);
    if (amt < nisab) {
      showResult('zRes', t('لا زكاة عليك','No zakat due'), t('النتيجة','Result'), t('مالك أقل من النصاب','Wealth below nisab'));
    } else {
      showResult('zRes', fmt(amt * 0.025), t('الزكاة الواجبة','Zakat Due'), t('2.5% من مالك','2.5% of your wealth'));
    }
  };
}

function formCurrency(el) {
  const rates = { USD:1, SAR:3.75, AED:3.67, EGP:30.9, EUR:0.92, GBP:0.79, KWD:0.31, QAR:3.64, JOD:0.71, TRY:32.5, INR:83.5, MAD:10.2 };
  const opts = Object.keys(rates).map(k => ({ v: k, l: k }));
  el.innerHTML = `<div class="tool-form">
    <div class="tip-box">${t('أسعار تقريبية ثابتة للاستخدام بدون إنترنت','Approximate offline rates for reference')}</div>
    ${formField(t('المبلغ','Amount'), 'camp', 'number', '100')}
    ${formSelect(t('من عملة','From currency'), 'cfrom', opts)}
    ${formSelect(t('إلى عملة','To currency'), 'cto', opts)}
    ${calcBtn(t('حوّل','Convert'))}
    ${resultBox('cRes')}
  </div>`;
  el.querySelector('#cto').value = 'EGP';
  el.querySelector('#calcBtn').onclick = () => {
    const amt = n(el.querySelector('#camp').value);
    const from = el.querySelector('#cfrom').value;
    const to = el.querySelector('#cto').value;
    const result = (amt / rates[from]) * rates[to];
    showResult('cRes', `${fmt(result, 3)} ${to}`, t('النتيجة','Result'));
  };
}

function formFuel(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('المسافة (كم)','Distance (km)'), 'fdist', 'number', '500')}
    ${formField(t('استهلاك السيارة (لتر/100كم)','Fuel consumption (L/100km)'), 'fcons', 'number', '8')}
    ${formField(t('سعر اللتر','Fuel price/liter'), 'fprice', 'number', '2.5')}
    ${calcBtn(t('احسب','Calculate'))}
    ${resultBox('fRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const dist = n(el.querySelector('#fdist').value);
    const cons = n(el.querySelector('#fcons').value);
    const price = n(el.querySelector('#fprice').value);
    const liters = dist * cons / 100;
    showResult('fRes', `${fmt(liters * price)}`, t('تكلفة الوقود','Fuel Cost'),
      t(`الوقود اللازم: ${fmt(liters)} لتر`, `Fuel needed: ${fmt(liters)} liters`));
  };
}

function formArea(el) {
  el.innerHTML = `<div class="tool-form">
    ${formSelect(t('الشكل','Shape'), 'shape', [
      { v:'rect', l: t('مستطيل','Rectangle') }, { v:'circle', l: t('دائرة','Circle') },
      { v:'triangle', l: t('مثلث','Triangle') }, { v:'square', l: t('مربع','Square') }
    ])}
    <div id="areaInputs"></div>
    ${calcBtn(t('احسب المساحة','Calculate Area'))}
    ${resultBox('areaRes')}
  </div>`;
  const updateInputs = () => {
    const s = el.querySelector('#shape').value;
    const map = {
      rect: `${formField(t('الطول','Length'), 'a1', 'number', '10')}${formField(t('العرض','Width'), 'a2', 'number', '5')}`,
      circle: formField(t('نصف القطر','Radius'), 'a1', 'number', '7'),
      triangle: `${formField(t('القاعدة','Base'), 'a1', 'number', '10')}${formField(t('الارتفاع','Height'), 'a2', 'number', '6')}`,
      square: formField(t('الضلع','Side'), 'a1', 'number', '5'),
    };
    el.querySelector('#areaInputs').innerHTML = map[s];
  };
  updateInputs();
  el.querySelector('#shape').onchange = updateInputs;
  el.querySelector('#calcBtn').onclick = () => {
    const s = el.querySelector('#shape').value;
    const a1 = n(el.querySelector('#a1')?.value);
    const a2 = n(el.querySelector('#a2')?.value);
    const areas = { rect: a1*a2, circle: Math.PI*a1*a1, triangle: 0.5*a1*a2, square: a1*a1 };
    showResult('areaRes', `${fmt(areas[s])} ${t('وحدة مربعة','sq units')}`, t('المساحة','Area'));
  };
}

function formVolume(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الطول','Length'), 'vl', 'number', '10')}
    ${formField(t('العرض','Width'), 'vw', 'number', '5')}
    ${formField(t('الارتفاع','Height'), 'vh', 'number', '3')}
    ${calcBtn(t('احسب الحجم','Calculate Volume'))}
    ${resultBox('vRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const v = n(el.querySelector('#vl').value) * n(el.querySelector('#vw').value) * n(el.querySelector('#vh').value);
    showResult('vRes', `${fmt(v)} ${t('وحدة مكعبة','cubic units')}`, t('الحجم','Volume'));
  };
}

function formSqrt(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الرقم','Number'), 'sn', 'number', '144')}
    ${calcBtn(t('احسب','Calculate'))}
    ${resultBox('sqRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const num = n(el.querySelector('#sn').value);
    showResult('sqRes', `√${num} = ${fmt(Math.sqrt(num), 6)}`, t('الجذر التربيعي','Square Root'),
      t(`الجذر التكعيبي: ${fmt(Math.cbrt(num), 6)}`, `Cube root: ${fmt(Math.cbrt(num), 6)}`));
  };
}

function formAvg(el) {
  el.innerHTML = `<div class="tool-form">
    <div class="form-group">
      <label class="form-label">${t('أدخل الأرقام مفصولة بفواصل','Enter numbers separated by commas')}</label>
      <textarea class="form-textarea" id="avgnums" placeholder="5, 10, 15, 20, 25" rows="3"></textarea>
    </div>
    ${calcBtn(t('احسب','Calculate'))}
    ${resultBox('avgRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const nums = el.querySelector('#avgnums').value.split(/[,،\s]+/).map(Number).filter(n2 => !isNaN(n2) && n2 !== 0 || n2 === 0);
    if (!nums.length) return;
    const sorted = [...nums].sort((a, b) => a - b);
    const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
    const med = sorted.length % 2 === 0 ? (sorted[sorted.length/2-1] + sorted[sorted.length/2])/2 : sorted[Math.floor(sorted.length/2)];
    showResult('avgRes', fmt(avg), t('المتوسط الحسابي','Average'),
      t(`الوسيط: ${fmt(med)} | المجموع: ${fmt(nums.reduce((a,b)=>a+b,0))}`,
        `Median: ${fmt(med)} | Sum: ${fmt(nums.reduce((a,b)=>a+b,0))}`));
  };
}

function formInterest(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('رأس المال','Principal'), 'ip', 'number', '10000')}
    ${formField(t('معدل الفائدة السنوي %','Annual rate %'), 'ir', 'number', '5')}
    ${formField(t('المدة (سنوات)','Term (years)'), 'it', 'number', '3')}
    ${formSelect(t('نوع الفائدة','Interest type'), 'itype', [{ v:'simple', l: t('بسيطة','Simple') }, { v:'compound', l: t('مركبة','Compound') }])}
    ${calcBtn(t('احسب الفائدة','Calculate Interest'))}
    ${resultBox('iRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const P = n(el.querySelector('#ip').value);
    const r = n(el.querySelector('#ir').value) / 100;
    const t2 = n(el.querySelector('#it').value);
    const type = el.querySelector('#itype').value;
    const interest = type === 'simple' ? P*r*t2 : P*(Math.pow(1+r,t2)-1);
    const total = P + interest;
    showResult('iRes', fmt(interest), t('الفائدة الإجمالية','Total Interest'),
      t(`المبلغ الكلي: ${fmt(total)}`, `Total amount: ${fmt(total)}`));
  };
}

function formSalary(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الراتب الإجمالي','Gross salary'), 'gs', 'number', '5000')}
    ${formField(t('خصم التأمين الاجتماعي %','Social insurance %'), 'si', 'number', '11')}
    ${formField(t('خصومات أخرى','Other deductions'), 'od', 'number', '0')}
    ${calcBtn(t('احسب الراتب الصافي','Calculate Net Salary'))}
    ${resultBox('salRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const gross = n(el.querySelector('#gs').value);
    const ins = gross * n(el.querySelector('#si').value) / 100;
    const other = n(el.querySelector('#od').value);
    const net = gross - ins - other;
    showResult('salRes', fmt(net), t('الراتب الصافي','Net Salary'),
      t(`خصم التأمين: ${fmt(ins)} | الخصومات: ${fmt(other)}`, `Insurance: ${fmt(ins)} | Deductions: ${fmt(other)}`));
  };
}

function formDiscount(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('السعر الأصلي','Original price'), 'op', 'number', '200')}
    ${formField(t('نسبة الخصم %','Discount %'), 'dp', 'number', '20')}
    ${calcBtn(t('احسب السعر بعد الخصم','Price After Discount'))}
    ${resultBox('discRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const orig = n(el.querySelector('#op').value);
    const disc = n(el.querySelector('#dp').value);
    const save = orig * disc / 100;
    showResult('discRes', fmt(orig - save), t('السعر بعد الخصم','Price After Discount'),
      t(`وفرت: ${fmt(save)}`, `You saved: ${fmt(save)}`));
  };
}

function formTax(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('سعر المنتج (بدون ضريبة)','Price (without tax)'), 'tp', 'number', '100')}
    ${formField(t('نسبة الضريبة %','Tax rate %'), 'tr', 'number', '15')}
    ${calcBtn(t('احسب الضريبة','Calculate Tax'))}
    ${resultBox('taxRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const price = n(el.querySelector('#tp').value);
    const rate = n(el.querySelector('#tr').value);
    const tax = price * rate / 100;
    showResult('taxRes', fmt(price + tax), t('السعر شامل الضريبة','Price with Tax'),
      t(`قيمة الضريبة: ${fmt(tax)}`, `Tax amount: ${fmt(tax)}`));
  };
}

function formTimeDiff(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('من تاريخ','From date'), 'td1', 'date')}
    ${formField(t('إلى تاريخ','To date'), 'td2', 'date')}
    ${calcBtn(t('احسب الفرق','Calculate Difference'))}
    ${resultBox('tdRes')}
  </div>`;
  el.querySelector('#td1').value = new Date().toISOString().split('T')[0];
  el.querySelector('#td2').value = new Date(Date.now() + 30*86400000).toISOString().split('T')[0];
  el.querySelector('#calcBtn').onclick = () => {
    const d1 = new Date(el.querySelector('#td1').value);
    const d2 = new Date(el.querySelector('#td2').value);
    const diff = Math.abs(d2 - d1);
    const days = Math.floor(diff / 86400000);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    showResult('tdRes', `${days.toLocaleString()} ${t('يوم','days')}`, t('الفرق الزمني','Time Difference'),
      t(`تقريباً: ${weeks} أسبوع / ${months} شهر`, `Approx: ${weeks} weeks / ${months} months`));
  };
}

function formBreakeven(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('التكاليف الثابتة','Fixed costs'), 'bfc', 'number', '5000')}
    ${formField(t('سعر بيع الوحدة','Selling price/unit'), 'bsp', 'number', '50')}
    ${formField(t('تكلفة إنتاج الوحدة','Variable cost/unit'), 'bvc', 'number', '30')}
    ${calcBtn(t('احسب نقطة التعادل','Calculate Break-even'))}
    ${resultBox('beRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const fc = n(el.querySelector('#bfc').value);
    const sp = n(el.querySelector('#bsp').value);
    const vc = n(el.querySelector('#bvc').value);
    if (sp <= vc) return showResult('beRes', t('خطأ: سعر البيع أقل من التكلفة!','Error: price below cost!'), '');
    const units = Math.ceil(fc / (sp - vc));
    showResult('beRes', `${units.toLocaleString()} ${t('وحدة','units')}`, t('نقطة التعادل','Break-even Point'),
      t(`الإيراد عند التعادل: ${fmt(units * sp)}`, `Revenue at break-even: ${fmt(units * sp)}`));
  };
}

function formFraction(el) {
  el.innerHTML = `<div class="tool-form">
    <p class="form-label">${t('الكسر الأول','First Fraction')}</p>
    <div class="flex-row">
      <input class="form-input" id="fn1" type="number" value="1" style="text-align:center">
      <span>/</span>
      <input class="form-input" id="fd1" type="number" value="2" style="text-align:center">
    </div>
    ${formSelect(t('العملية','Operation'), 'fop', [
      { v:'+', l:'+' }, { v:'-', l:'-' }, { v:'*', l:'×' }, { v:'/', l:'÷' }
    ])}
    <p class="form-label">${t('الكسر الثاني','Second Fraction')}</p>
    <div class="flex-row">
      <input class="form-input" id="fn2" type="number" value="1" style="text-align:center">
      <span>/</span>
      <input class="form-input" id="fd2" type="number" value="3" style="text-align:center">
    </div>
    ${calcBtn(t('احسب','Calculate'))}
    ${resultBox('frRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const n1 = n(el.querySelector('#fn1').value), d1 = n(el.querySelector('#fd1').value);
    const n2 = n(el.querySelector('#fn2').value), d2 = n(el.querySelector('#fd2').value);
    const op = el.querySelector('#fop').value;
    let rn, rd;
    if (op === '+') { rn = n1*d2 + n2*d1; rd = d1*d2; }
    else if (op === '-') { rn = n1*d2 - n2*d1; rd = d1*d2; }
    else if (op === '*') { rn = n1*n2; rd = d1*d2; }
    else { rn = n1*d2; rd = d1*n2; }
    const gcd = (a, b) => b ? gcd(b, a%b) : a;
    const g = gcd(Math.abs(rn), Math.abs(rd));
    showResult('frRes', `${rn/g} / ${rd/g} = ${fmt(rn/rd, 4)}`, t('النتيجة','Result'));
  };
}

function formProfit(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('سعر البيع','Selling price'), 'psp', 'number', '150')}
    ${formField(t('تكلفة الشراء','Cost price'), 'pcp', 'number', '100')}
    ${calcBtn(t('احسب الربح','Calculate Profit'))}
    ${resultBox('prRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const sp = n(el.querySelector('#psp').value);
    const cp = n(el.querySelector('#pcp').value);
    const profit = sp - cp;
    const margin = (profit / sp * 100).toFixed(1);
    const markup = (profit / cp * 100).toFixed(1);
    showResult('prRes', `${fmt(profit)} (${profit >= 0 ? t('ربح','Profit') : t('خسارة','Loss')})`, t('الربح/الخسارة','Profit/Loss'),
      t(`هامش الربح: ${margin}% | نسبة الترقيم: ${markup}%`, `Profit margin: ${margin}% | Markup: ${markup}%`));
  };
}

function formMortgage(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('سعر العقار','Property price'), 'mp', 'number', '500000')}
    ${formField(t('الدفعة المقدمة %','Down payment %'), 'mdp', 'number', '20')}
    ${formField(t('معدل الفائدة السنوي %','Annual interest rate %'), 'mr', 'number', '4')}
    ${formField(t('مدة القرض (سنوات)','Loan term (years)'), 'mt', 'number', '20')}
    ${calcBtn(t('احسب القسط الشهري','Monthly Payment'))}
    ${resultBox('mortRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const P = n(el.querySelector('#mp').value) * (1 - n(el.querySelector('#mdp').value)/100);
    const r = n(el.querySelector('#mr').value) / 100 / 12;
    const N = n(el.querySelector('#mt').value) * 12;
    const monthly = r === 0 ? P/N : P * r * Math.pow(1+r,N) / (Math.pow(1+r,N)-1);
    showResult('mortRes', `${fmt(monthly)} ${t('شهرياً','/ month')}`, t('القسط الشهري','Monthly Payment'),
      t(`إجمالي الفائدة: ${fmt(monthly*N - P)}`, `Total interest: ${fmt(monthly*N - P)}`));
  };
}

function formCalories(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الوزن (كجم)','Weight (kg)'), 'cw', 'number', '70')}
    ${formField(t('الطول (سم)','Height (cm)'), 'ch', 'number', '170')}
    ${formField(t('العمر (سنة)','Age (years)'), 'ca', 'number', '30')}
    ${formSelect(t('الجنس','Gender'), 'cg', [{ v:'m', l: t('ذكر','Male') }, { v:'f', l: t('أنثى','Female') }])}
    ${formSelect(t('مستوى النشاط','Activity level'), 'cal', [
      { v:'1.2', l: t('جلوس (مستقر)','Sedentary') }, { v:'1.375', l: t('نشاط خفيف','Light active') },
      { v:'1.55', l: t('نشاط متوسط','Moderate') }, { v:'1.725', l: t('نشاط عالٍ','Very active') }
    ])}
    ${calcBtn(t('احسب السعرات','Calculate Calories'))}
    ${resultBox('calRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const w = n(el.querySelector('#cw').value);
    const h = n(el.querySelector('#ch').value);
    const a = n(el.querySelector('#ca').value);
    const isMale = el.querySelector('#cg').value === 'm';
    const bmr = isMale ? 10*w + 6.25*h - 5*a + 5 : 10*w + 6.25*h - 5*a - 161;
    const tdee = bmr * n(el.querySelector('#cal').value);
    showResult('calRes', `${Math.round(tdee)} ${t('سعرة/يوم','kcal/day')}`, t('احتياجك من السعرات','Daily Calorie Needs'),
      t(`للتخسيس: ${Math.round(tdee-500)} | لزيادة الوزن: ${Math.round(tdee+500)}`,
        `To lose: ${Math.round(tdee-500)} | To gain: ${Math.round(tdee+500)}`));
  };
}

function formWater(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الوزن (كجم)','Weight (kg)'), 'ww', 'number', '70')}
    ${formSelect(t('مستوى النشاط','Activity level'), 'wal', [
      { v:'30', l: t('قليل الحركة','Low activity') }, { v:'35', l: t('متوسط','Moderate') }, { v:'40', l: t('نشيط جداً','Very active') }
    ])}
    ${calcBtn(t('احسب احتياج الماء','Calculate Water Needs'))}
    ${resultBox('watRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const w = n(el.querySelector('#ww').value);
    const ml = w * n(el.querySelector('#wal').value);
    showResult('watRes', `${fmt(ml/1000, 1)} ${t('لتر يومياً','liters/day')}`, t('احتياجك من الماء','Water Needs'),
      t(`= ${Math.round(ml/250)} كوب تقريباً`, `= ~${Math.round(ml/250)} cups`));
  };
}

function formHeartRate(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('العمر (سنة)','Age (years)'), 'hra', 'number', '30')}
    ${calcBtn(t('احسب معدل النبض','Calculate Heart Rate'))}
    ${resultBox('hrRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const age = n(el.querySelector('#hra').value);
    const max = 220 - age;
    showResult('hrRes', `${Math.round(max * 0.5)}–${Math.round(max * 0.85)} ${t('نبضة/دقيقة','bpm')}`, t('نطاق النبض المثالي للتمرين','Ideal Exercise Heart Rate'),
      t(`الحد الأقصى: ${max} | الراحة: 60–100`, `Max: ${max} | Resting: 60–100`));
  };
}

function formSleep(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('وقت الاستيقاظ المطلوب','Wake-up time'), 'wt', 'time', '')}
    ${calcBtn(t('احسب أوقات النوم المثالية','Best Bedtimes'))}
    ${resultBox('sleepRes')}
  </div>`;
  el.querySelector('#wt').value = '06:30';
  el.querySelector('#calcBtn').onclick = () => {
    const [wh, wm] = el.querySelector('#wt').value.split(':').map(Number);
    const wakeMin = wh * 60 + wm;
    const cycles = [9, 7.5, 6, 4.5]; /* دورات نوم كاملة */
    const times = cycles.map(h => {
      const sleepMin = (wakeMin - h*60 - 15 + 1440) % 1440;
      return `${String(Math.floor(sleepMin/60)).padStart(2,'0')}:${String(sleepMin%60).padStart(2,'0')}`;
    });
    const box = document.getElementById('sleepRes');
    box.style.display = 'block';
    box.innerHTML = `<div class="result-label">${t('اذهب للنوم الساعة...','Go to sleep at...')}</div>
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin-top:.5rem">
        ${times.map((time, i) => `<span class="chip">${time} <small>(${cycles[i]} ${t('ساعة','hr')})</small></span>`).join('')}
      </div>
      <div class="result-note">${t('دورة النوم الواحدة = 90 دقيقة','Each sleep cycle = 90 minutes')}</div>`;
  };
}

function formCarbs(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('السعرات اليومية','Daily calories'), 'cc', 'number', '2000')}
    ${formField(t('نسبة الكربوهيدرات %','Carbs percentage %'), 'cp', 'number', '50')}
    ${calcBtn(t('احسب','Calculate'))}
    ${resultBox('carbRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const grams = n(el.querySelector('#cc').value) * n(el.querySelector('#cp').value) / 100 / 4;
    showResult('carbRes', `${Math.round(grams)} ${t('جرام يومياً','grams/day')}`, t('الكربوهيدرات اليومية','Daily Carbohydrates'));
  };
}

function formProtein(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الوزن (كجم)','Weight (kg)'), 'pw', 'number', '70')}
    ${formSelect(t('مستوى النشاط','Activity level'), 'pal', [
      { v:'0.8', l: t('خامل','Sedentary (0.8g/kg)') }, { v:'1.2', l: t('نشيط','Active (1.2g/kg)') }, { v:'1.6', l: t('رياضي','Athletic (1.6g/kg)') }, { v:'2.0', l: t('بناء عضلات','Muscle building (2g/kg)') }
    ])}
    ${calcBtn(t('احسب البروتين اليومي','Daily Protein'))}
    ${resultBox('protRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const grams = n(el.querySelector('#pw').value) * n(el.querySelector('#pal').value);
    showResult('protRes', `${Math.round(grams)} ${t('جرام يومياً','grams/day')}`, t('احتياجك من البروتين','Protein Requirement'));
  };
}

function formSteps(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('عدد الخطوات','Number of steps'), 'st', 'number', '10000')}
    ${formField(t('الوزن (كجم)','Weight (kg)'), 'stw', 'number', '70')}
    ${calcBtn(t('احسب','Calculate'))}
    ${resultBox('stRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const steps = n(el.querySelector('#st').value);
    const w = n(el.querySelector('#stw').value);
    const km = steps * 0.000762;
    const cal = steps * w * 0.00036;
    showResult('stRes', `${fmt(km, 2)} ${t('كم','km')}`, t('المسافة','Distance'),
      t(`سعرات محروقة: ~${Math.round(cal)} kcal`, `Calories burned: ~${Math.round(cal)} kcal`));
  };
}

function formObesity(el) { return formBmi(el); }

function formPregnancy(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('تاريخ آخر دورة شهرية','Last menstrual period date'), 'lmp', 'date')}
    ${calcBtn(t('احسب موعد الولادة','Calculate Due Date'))}
    ${resultBox('pregRes')}
  </div>`;
  el.querySelector('#lmp').value = new Date(Date.now() - 60*86400000).toISOString().split('T')[0];
  el.querySelector('#calcBtn').onclick = () => {
    const lmp = new Date(el.querySelector('#lmp').value);
    const due = new Date(lmp.getTime() + 280*86400000);
    const now = new Date();
    const weeks = Math.floor((now - lmp) / (7 * 86400000));
    const remaining = Math.max(0, Math.round((due - now) / 86400000));
    showResult('pregRes', due.toLocaleDateString('ar-SA', { weekday:'long', year:'numeric', month:'long', day:'numeric' }),
      t('الموعد المتوقع للولادة','Expected Due Date'),
      t(`أسبوع الحمل: ${weeks} | الأيام المتبقية: ${remaining}`, `Week: ${weeks} | Days remaining: ${remaining}`));
  };
}

function formBurned(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الوزن (كجم)','Weight (kg)'), 'bw', 'number', '70')}
    ${formField(t('مدة التمرين (دقيقة)','Exercise duration (min)'), 'bdur', 'number', '30')}
    ${formSelect(t('نوع التمرين','Exercise type'), 'btype', [
      { v:'7', l: t('جري سريع','Running (fast)') }, { v:'5', l: t('مشي سريع','Brisk walking') }, { v:'8', l: t('سباحة','Swimming') },
      { v:'6', l: t('ركوب دراجة','Cycling') }, { v:'9', l: t('حديد/مقاومة','Weight training') }, { v:'4', l: t('يوغا','Yoga') }
    ])}
    ${calcBtn(t('احسب السعرات المحروقة','Calories Burned'))}
    ${resultBox('burnRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const w = n(el.querySelector('#bw').value);
    const dur = n(el.querySelector('#bdur').value);
    const met = n(el.querySelector('#btype').value);
    const cal = met * w * dur / 60;
    showResult('burnRes', `~${Math.round(cal)} ${t('سعرة حرارية','calories')}`, t('السعرات المحروقة','Calories Burned'));
  };
}

function formCycle(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('تاريخ بداية آخر دورة','Last period start date'), 'cd', 'date')}
    ${formField(t('طول الدورة (يوم)','Cycle length (days)'), 'cl', 'number', '28')}
    ${calcBtn(t('احسب الموعد القادم','Next Period Date'))}
    ${resultBox('cycRes')}
  </div>`;
  el.querySelector('#cd').value = new Date(Date.now() - 14*86400000).toISOString().split('T')[0];
  el.querySelector('#calcBtn').onclick = () => {
    const start = new Date(el.querySelector('#cd').value);
    const len = n(el.querySelector('#cl').value);
    const next = new Date(start.getTime() + len * 86400000);
    const ovul = new Date(start.getTime() + (len - 14) * 86400000);
    showResult('cycRes', next.toLocaleDateString('ar-SA', { weekday:'long', year:'numeric', month:'long', day:'numeric' }),
      t('الدورة القادمة','Next Period'),
      t(`التبويض المتوقع: ${ovul.toLocaleDateString('ar-SA')}`, `Expected ovulation: ${ovul.toLocaleDateString()}`));
  };
}

function formTimezone(el) {
  const zones = { 'القاهرة':'Africa/Cairo', 'الرياض':'Asia/Riyadh', 'دبي':'Asia/Dubai', 'بيروت':'Asia/Beirut', 'لندن':'Europe/London', 'نيويورك':'America/New_York', 'باريس':'Europe/Paris', 'طوكيو':'Asia/Tokyo' };
  const opts = Object.keys(zones).map(k => ({ v: zones[k], l: k }));
  el.innerHTML = `<div class="tool-form">
    ${formSelect(t('المدينة','City'), 'tzc', opts)}
    ${calcBtn(t('عرض الوقت الآن','Show Current Time'))}
    ${resultBox('tzRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const tz = el.querySelector('#tzc').value;
    const time = new Intl.DateTimeFormat('ar-SA', { timeZone: tz, hour:'2-digit', minute:'2-digit', second:'2-digit', weekday:'long', year:'numeric', month:'long', day:'numeric' }).format(new Date());
    showResult('tzRes', time, t('الوقت الحالي','Current Time'));
  };
}

function formWorkdays(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('من تاريخ','From date'), 'wd1', 'date')}
    ${formField(t('إلى تاريخ','To date'), 'wd2', 'date')}
    ${calcBtn(t('احسب أيام العمل','Count Work Days'))}
    ${resultBox('wdRes')}
  </div>`;
  el.querySelector('#wd1').value = new Date().toISOString().split('T')[0];
  el.querySelector('#wd2').value = new Date(Date.now() + 30*86400000).toISOString().split('T')[0];
  el.querySelector('#calcBtn').onclick = () => {
    const d1 = new Date(el.querySelector('#wd1').value);
    const d2 = new Date(el.querySelector('#wd2').value);
    let count = 0, cur = new Date(d1);
    while (cur <= d2) { const day = cur.getDay(); if (day !== 5 && day !== 6) count++; cur.setDate(cur.getDate() + 1); }
    const total = Math.round((d2 - d1) / 86400000) + 1;
    showResult('wdRes', `${count} ${t('يوم عمل','work days')}`, t('أيام العمل','Work Days'),
      t(`من ${total} يوم إجمالي`, `Out of ${total} total days`));
  };
}

function formBudget(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الدخل الشهري','Monthly income'), 'bi', 'number', '5000')}
    ${formField(t('الإيجار والمسكن','Housing/rent'), 'bh', 'number', '1500')}
    ${formField(t('الطعام والمصاريف اليومية','Food & daily expenses'), 'bf', 'number', '800')}
    ${formField(t('المواصلات','Transportation'), 'bt', 'number', '300')}
    ${formField(t('مصاريف أخرى','Other expenses'), 'bo', 'number', '200')}
    ${calcBtn(t('احسب الميزانية','Calculate Budget'))}
    ${resultBox('budRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const income = n(el.querySelector('#bi').value);
    const expenses = n(el.querySelector('#bh').value) + n(el.querySelector('#bf').value) + n(el.querySelector('#bt').value) + n(el.querySelector('#bo').value);
    const savings = income - expenses;
    const savingsPct = ((savings / income) * 100).toFixed(1);
    showResult('budRes', `${fmt(savings)} ${savings >= 0 ? '✅' : '❌'}`, t('المتبقي للادخار','Remaining for Savings'),
      t(`المصاريف: ${fmt(expenses)} | نسبة الادخار: ${savingsPct}%`, `Expenses: ${fmt(expenses)} | Savings rate: ${savingsPct}%`));
  };
}

function formSavings(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('المبلغ الشهري للادخار','Monthly savings amount'), 'smonth', 'number', '500')}
    ${formField(t('عدد السنوات','Number of years'), 'syears', 'number', '5')}
    ${formField(t('معدل العائد السنوي %','Annual return rate %'), 'srate', 'number', '4')}
    ${calcBtn(t('احسب مدخراتي','Calculate Savings'))}
    ${resultBox('savRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const monthly = n(el.querySelector('#smonth').value);
    const years = n(el.querySelector('#syears').value);
    const rate = n(el.querySelector('#srate').value) / 100 / 12;
    const months = years * 12;
    const total = rate === 0 ? monthly * months : monthly * (Math.pow(1+rate,months) - 1) / rate * (1+rate);
    const invested = monthly * months;
    showResult('savRes', fmt(total), t('إجمالي المدخرات','Total Savings'),
      t(`ما ادخرته: ${fmt(invested)} | العائد: ${fmt(total - invested)}`, `Invested: ${fmt(invested)} | Return: ${fmt(total - invested)}`));
  };
}

function formInvest(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('رأس المال المستثمر','Investment amount'), 'invamt', 'number', '10000')}
    ${formField(t('معدل العائد السنوي %','Annual return %'), 'invrate', 'number', '8')}
    ${formField(t('مدة الاستثمار (سنوات)','Investment period (years)'), 'invyears', 'number', '10')}
    ${calcBtn(t('احسب العائد','Calculate Return'))}
    ${resultBox('invRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const P = n(el.querySelector('#invamt').value);
    const r = n(el.querySelector('#invrate').value) / 100;
    const t2 = n(el.querySelector('#invyears').value);
    const total = P * Math.pow(1 + r, t2);
    showResult('invRes', fmt(total), t('القيمة المستقبلية','Future Value'),
      t(`الربح: ${fmt(total - P)} | ضُعف المال في ~${(72/n(el.querySelector('#invrate').value)).toFixed(1)} سنة (قاعدة 72)`,
        `Gain: ${fmt(total - P)} | Money doubles in ~${(72/n(el.querySelector('#invrate').value)).toFixed(1)} yr (Rule of 72)`));
  };
}

function formRentVsBuy(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الإيجار الشهري','Monthly rent'), 'rvbr', 'number', '2000')}
    ${formField(t('سعر العقار للشراء','Purchase price'), 'rvbp', 'number', '400000')}
    ${formField(t('الدفعة المقدمة %','Down payment %'), 'rvbdp', 'number', '20')}
    ${formField(t('عدد السنوات للمقارنة','Years to compare'), 'rvby', 'number', '10')}
    ${calcBtn(t('قارن','Compare'))}
    ${resultBox('rvbRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const rent = n(el.querySelector('#rvbr').value);
    const price = n(el.querySelector('#rvbp').value);
    const dp = price * n(el.querySelector('#rvbdp').value) / 100;
    const years = n(el.querySelector('#rvby').value);
    const totalRent = rent * 12 * years;
    const loanAmt = price - dp;
    const monthly = loanAmt * (0.005 * Math.pow(1.005, years*12)) / (Math.pow(1.005, years*12) - 1);
    const totalBuy = dp + monthly * 12 * years;
    const better = totalRent < totalBuy ? t('الإيجار أفضل مالياً','Renting is financially better') : t('الشراء أفضل على المدى البعيد','Buying is better long-term');
    showResult('rvbRes', better, t('النتيجة','Verdict'),
      t(`تكلفة الإيجار: ${fmt(totalRent)} | تكلفة الشراء: ${fmt(totalBuy)}`, `Rent cost: ${fmt(totalRent)} | Buy cost: ${fmt(totalBuy)}`));
  };
}

function formInvoice(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('المبلغ قبل الضريبة','Amount before tax'), 'invb', 'number', '1000')}
    ${formField(t('نسبة الضريبة %','Tax rate %'), 'invt', 'number', '15')}
    ${formField(t('الخصم','Discount'), 'invd', 'number', '0')}
    ${calcBtn(t('احسب الفاتورة','Calculate Invoice'))}
    ${resultBox('invRes2')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const base = n(el.querySelector('#invb').value);
    const tax = base * n(el.querySelector('#invt').value) / 100;
    const disc = n(el.querySelector('#invd').value);
    const total = base + tax - disc;
    showResult('invRes2', fmt(total), t('إجمالي الفاتورة','Invoice Total'),
      t(`الضريبة: ${fmt(tax)} | الخصم: ${fmt(disc)}`, `Tax: ${fmt(tax)} | Discount: ${fmt(disc)}`));
  };
}

function formCommission(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('قيمة المبيعات','Sales value'), 'cs', 'number', '50000')}
    ${formField(t('نسبة العمولة %','Commission rate %'), 'cr', 'number', '5')}
    ${calcBtn(t('احسب العمولة','Calculate Commission'))}
    ${resultBox('commRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const sales = n(el.querySelector('#cs').value);
    const rate = n(el.querySelector('#cr').value);
    showResult('commRes', fmt(sales * rate / 100), t('العمولة المستحقة','Commission Earned'));
  };
}

function formInstallment(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('السعر الكلي','Total price'), 'instp', 'number', '12000')}
    ${formField(t('الدفعة المقدمة','Down payment'), 'instdp', 'number', '2000')}
    ${formField(t('عدد الأشهر','Number of months'), 'instm', 'number', '12')}
    ${calcBtn(t('احسب القسط','Calculate Installment'))}
    ${resultBox('instRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const total = n(el.querySelector('#instp').value);
    const dp = n(el.querySelector('#instdp').value);
    const months = n(el.querySelector('#instm').value);
    const monthly = (total - dp) / months;
    showResult('instRes', `${fmt(monthly)} ${t('شهرياً','/ month')}`, t('القسط الشهري','Monthly Installment'),
      t(`المجموع: ${fmt(total)} | المتبقي: ${fmt(total - dp)}`, `Total: ${fmt(total)} | Remaining: ${fmt(total-dp)}`));
  };
}

function formInflation(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('المبلغ الحالي','Current amount'), 'infamt', 'number', '10000')}
    ${formField(t('معدل التضخم السنوي %','Annual inflation rate %'), 'infrate', 'number', '7')}
    ${formField(t('بعد كم سنة؟','After how many years?'), 'infyears', 'number', '10')}
    ${calcBtn(t('احسب القوة الشرائية','Calculate Purchasing Power'))}
    ${resultBox('infRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const amt = n(el.querySelector('#infamt').value);
    const rate = n(el.querySelector('#infrate').value) / 100;
    const years = n(el.querySelector('#infyears').value);
    const future = amt * Math.pow(1 + rate, years);
    const power = amt / Math.pow(1 + rate, years);
    showResult('infRes', fmt(power), t('القوة الشرائية المستقبلية','Future Purchasing Power'),
      t(`لتعادل ${fmt(amt)} ستحتاج: ${fmt(future)}`, `To match ${fmt(amt)} you'd need: ${fmt(future)}`));
  };
}

function formCapital(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('التكاليف الثابتة الشهرية','Monthly fixed costs'), 'capfix', 'number', '3000')}
    ${formField(t('التكاليف المتغيرة/الوحدة','Variable cost per unit'), 'capvar', 'number', '50')}
    ${formField(t('عدد الوحدات المتوقعة شهرياً','Expected units/month'), 'capunits', 'number', '100')}
    ${formField(t('احتياطي (شهور)','Reserve (months)'), 'capreserve', 'number', '3')}
    ${calcBtn(t('احسب رأس المال اللازم','Required Capital'))}
    ${resultBox('capRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const fix = n(el.querySelector('#capfix').value);
    const varCost = n(el.querySelector('#capvar').value);
    const units = n(el.querySelector('#capunits').value);
    const res = n(el.querySelector('#capreserve').value);
    const monthly = fix + varCost * units;
    const total = monthly * res;
    showResult('capRes', fmt(total), t('رأس المال التشغيلي المقترح','Suggested Working Capital'),
      t(`التكلفة الشهرية: ${fmt(monthly)}`, `Monthly cost: ${fmt(monthly)}`));
  };
}

function formSavingsGoal(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الهدف المالي','Financial goal'), 'sggoal', 'number', '50000')}
    ${formField(t('المبلغ المدخر حالياً','Current savings'), 'sgcur', 'number', '5000')}
    ${formField(t('بعد كم شهر؟','In how many months?'), 'sgm', 'number', '24')}
    ${calcBtn(t('احسب المبلغ الشهري','Monthly Amount Needed'))}
    ${resultBox('sgRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const goal = n(el.querySelector('#sggoal').value);
    const cur = n(el.querySelector('#sgcur').value);
    const months = n(el.querySelector('#sgm').value);
    const monthly = (goal - cur) / months;
    showResult('sgRes', `${fmt(monthly)} ${t('شهرياً','/ month')}`, t('المطلوب شهرياً','Required Monthly'),
      monthly > 0 ? t(`✅ قابل للتحقيق`, '✅ Achievable') : t('✅ لقد وصلت لهدفك!','✅ You already reached your goal!'));
  };
}

function formGpa(el) {
  el.innerHTML = `<div class="tool-form">
    <div class="tip-box">${t('أدخل درجات المواد مفصولة بفواصل','Enter subject grades separated by commas')}</div>
    <div class="form-group">
      <label class="form-label">${t('الدرجات','Grades')}</label>
      <textarea class="form-textarea" id="gpagrades" placeholder="90, 85, 78, 92, 88" rows="2"></textarea>
    </div>
    ${calcBtn(t('احسب المعدل','Calculate GPA'))}
    ${resultBox('gpaRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const grades = el.querySelector('#gpagrades').value.split(/[,،\s]+/).map(Number).filter(g => g >= 0 && g <= 100);
    if (!grades.length) return;
    const avg = grades.reduce((a,b) => a+b, 0) / grades.length;
    const gpa4 = avg >= 90 ? 4.0 : avg >= 85 ? 3.7 : avg >= 80 ? 3.3 : avg >= 75 ? 3.0 : avg >= 70 ? 2.7 : avg >= 65 ? 2.3 : avg >= 60 ? 2.0 : 1.0;
    showResult('gpaRes', `${avg.toFixed(1)}% | GPA: ${gpa4}`, t('المعدل التراكمي','GPA'), '');
  };
}

function formRecipe(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('عدد الأشخاص في الوصفة الأصلية','Original servings'), 'rs1', 'number', '4')}
    ${formField(t('عدد الأشخاص المطلوب','Desired servings'), 'rs2', 'number', '6')}
    ${formField(t('الكمية الأصلية','Original quantity'), 'rq', 'number', '2')}
    ${calcBtn(t('احسب المقدار الجديد','Calculate New Quantity'))}
    ${resultBox('recRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const ratio = n(el.querySelector('#rs2').value) / n(el.querySelector('#rs1').value);
    const newQty = n(el.querySelector('#rq').value) * ratio;
    showResult('recRes', fmt(newQty, 2), t('الكمية الجديدة','New Quantity'),
      t(`نسبة التعديل: x${fmt(ratio, 2)}`, `Scale factor: x${fmt(ratio, 2)}`));
  };
}

function formElectric(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('القدرة الكهربائية (واط)','Power (watts)'), 'ew', 'number', '1500')}
    ${formField(t('ساعات الاستخدام اليومية','Daily usage hours'), 'eh', 'number', '8')}
    ${formField(t('سعر الكيلوواط/ساعة','Price per kWh'), 'ep', 'number', '0.5')}
    ${calcBtn(t('احسب تكلفة الكهرباء','Calculate Electricity Cost'))}
    ${resultBox('elRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const kwh = n(el.querySelector('#ew').value) * n(el.querySelector('#eh').value) / 1000;
    const daily = kwh * n(el.querySelector('#ep').value);
    showResult('elRes', `${fmt(daily * 30)} ${t('شهرياً','/ month')}`, t('تكلفة الكهرباء','Electricity Cost'),
      t(`يومياً: ${fmt(daily)} | سنوياً: ${fmt(daily * 365)}`, `Daily: ${fmt(daily)} | Yearly: ${fmt(daily * 365)}`));
  };
}

function formWaterBill(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الاستهلاك الشهري (متر مكعب)','Monthly consumption (m³)'), 'wb', 'number', '15')}
    ${formField(t('سعر المتر المكعب','Price per m³'), 'wbp', 'number', '2')}
    ${calcBtn(t('احسب الفاتورة','Calculate Bill'))}
    ${resultBox('wbRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const total = n(el.querySelector('#wb').value) * n(el.querySelector('#wbp').value);
    showResult('wbRes', fmt(total), t('فاتورة الماء الشهرية','Monthly Water Bill'));
  };
}

function formPaint(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('مساحة الجدار (م²)','Wall area (m²)'), 'pw', 'number', '50')}
    ${formField(t('تغطية اللتر الواحد (م²)','Coverage per liter (m²)'), 'pc', 'number', '10')}
    ${formField(t('عدد الطبقات','Number of coats'), 'pl', 'number', '2')}
    ${calcBtn(t('احسب كمية الطلاء','Calculate Paint'))}
    ${resultBox('paintRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const liters = n(el.querySelector('#pw').value) * n(el.querySelector('#pl').value) / n(el.querySelector('#pc').value);
    showResult('paintRes', `${fmt(liters, 1)} ${t('لتر','liters')}`, t('كمية الطلاء اللازمة','Paint Required'));
  };
}

function formRenov(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('المساحة (م²)','Area (m²)'), 'ra', 'number', '100')}
    ${formField(t('تكلفة م² للتجديد','Cost per m²'), 'rc', 'number', '500')}
    ${formField(t('تكلفة إضافية أخرى','Additional costs'), 'ra2', 'number', '5000')}
    ${calcBtn(t('احسب التكلفة التقريبية','Estimate Renovation Cost'))}
    ${resultBox('renovRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const total = n(el.querySelector('#ra').value) * n(el.querySelector('#rc').value) + n(el.querySelector('#ra2').value);
    showResult('renovRes', fmt(total), t('التكلفة التقريبية للتجديد','Estimated Renovation Cost'));
  };
}

function formCarCost(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('سعر السيارة','Car price'), 'cc1', 'number', '50000')}
    ${formField(t('الصيانة السنوية','Annual maintenance'), 'cc2', 'number', '3000')}
    ${formField(t('التأمين السنوي','Annual insurance'), 'cc3', 'number', '2000')}
    ${formField(t('الوقود شهرياً','Monthly fuel'), 'cc4', 'number', '500')}
    ${formField(t('عدد سنوات الامتلاك','Years of ownership'), 'cc5', 'number', '5')}
    ${calcBtn(t('احسب التكلفة الإجمالية','Calculate Total Cost'))}
    ${resultBox('ccRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const years = n(el.querySelector('#cc5').value);
    const total = n(el.querySelector('#cc1').value) + (n(el.querySelector('#cc2').value) + n(el.querySelector('#cc3').value)) * years + n(el.querySelector('#cc4').value) * 12 * years;
    showResult('ccRes', fmt(total), t('التكلفة الإجمالية للامتلاك','Total Cost of Ownership'),
      t(`التكلفة الشهرية: ${fmt(total / (years * 12))}`, `Monthly cost: ${fmt(total / (years * 12))}`));
  };
}

function formBandwidth(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('حجم الملف (MB)','File size (MB)'), 'bfsize', 'number', '1000')}
    ${formField(t('سرعة الإنترنت (Mbps)','Internet speed (Mbps)'), 'bspeed', 'number', '50')}
    ${calcBtn(t('احسب وقت التحميل','Calc Download Time'))}
    ${resultBox('bwRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const secs = n(el.querySelector('#bfsize').value) * 8 / n(el.querySelector('#bspeed').value);
    const mins = Math.floor(secs / 60);
    const rem = Math.round(secs % 60);
    showResult('bwRes', mins > 0 ? `${mins}:${String(rem).padStart(2,'0')} ${t('دقيقة','min')}` : `${Math.round(secs)} ${t('ثانية','seconds')}`, t('وقت التحميل التقريبي','Estimated Download Time'));
  };
}

function formResolution(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('العرض (بكسل)','Width (px)'), 'rw', 'number', '1920')}
    ${formField(t('الارتفاع (بكسل)','Height (px)'), 'rh', 'number', '1080')}
    ${calcBtn(t('احسب النسبة','Calculate Ratio'))}
    ${resultBox('resRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const w = n(el.querySelector('#rw').value), h = n(el.querySelector('#rh').value);
    const gcd = (a, b) => b ? gcd(b, a%b) : a;
    const g = gcd(w, h);
    const total = w * h / 1000000;
    showResult('resRes', `${w/g}:${h/g}`, t('نسبة الأبعاد','Aspect Ratio'),
      t(`${total.toFixed(2)} ميغابكسل`, `${total.toFixed(2)} Megapixels`));
  };
}

function formData(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الاستخدام اليومي (MB)','Daily usage (MB)'), 'du', 'number', '500')}
    ${calcBtn(t('احسب الاستهلاك الشهري','Monthly Usage'))}
    ${resultBox('dataRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const monthly = n(el.querySelector('#du').value) * 30;
    const gb = monthly / 1024;
    showResult('dataRes', `${fmt(gb, 2)} GB ${t('شهرياً','/ month')}`, t('الاستهلاك الشهري المتوقع','Expected Monthly Usage'));
  };
}

function formQibla(el) {
  el.innerHTML = `<div class="tool-form">
    <div class="tip-box">${t('اتجاه القبلة يُحسب بالنسبة للشمال الجغرافي من موقعك','Qibla direction is calculated from your location relative to Mecca')}</div>
    ${formSelect(t('المدينة','City'), 'qcity', [
      { v:'cairo', l:t('القاهرة','Cairo') }, { v:'riyadh', l:t('الرياض','Riyadh') }, { v:'dubai', l:t('دبي','Dubai') },
      { v:'beirut', l:t('بيروت','Beirut') }, { v:'rabat', l:t('الرباط','Rabat') }, { v:'baghdad', l:t('بغداد','Baghdad') },
      { v:'amman', l:t('عمان','Amman') }, { v:'kuwait', l:t('الكويت','Kuwait City') }, { v:'tunis', l:t('تونس','Tunis') }
    ])}
    ${calcBtn(t('احسب اتجاه القبلة','Find Qibla Direction'))}
    ${resultBox('qiblaRes')}
  </div>`;
  const cities = {
    cairo:{ lat:30.06, lng:31.24, dir:'127° شمال شرق' }, riyadh:{ lat:24.68, lng:46.72, dir:'292° شمال غرب' },
    dubai:{ lat:25.2, lng:55.27, dir:'277° غرب' }, beirut:{ lat:33.88, lng:35.5, dir:'162° جنوب' },
    rabat:{ lat:34.01, lng:-6.85, dir:'95° شرق' }, baghdad:{ lat:33.34, lng:44.4, dir:'224° جنوب غرب' },
    amman:{ lat:31.95, lng:35.93, dir:'160° جنوب' }, kuwait:{ lat:29.37, lng:47.97, dir:'247° غرب جنوب غربي' },
    tunis:{ lat:36.8, lng:10.18, dir:'104° شرق' }
  };
  el.querySelector('#calcBtn').onclick = () => {
    const city = el.querySelector('#qcity').value;
    const info = cities[city];
    showResult('qiblaRes', info.dir, t('اتجاه القبلة تقريباً','Approximate Qibla Direction'),
      t('🕌 اتجه نحو هذه الزاوية','🕌 Face this direction'));
  };
}

function formPrayer(el) {
  const times = {
    cairo:{ fajr:'4:50', dhuhr:'12:05', asr:'15:25', maghrib:'18:42', isha:'20:00' },
    riyadh:{ fajr:'4:35', dhuhr:'12:12', asr:'15:30', maghrib:'18:30', isha:'19:55' },
    dubai:{ fajr:'4:40', dhuhr:'12:20', asr:'15:45', maghrib:'18:45', isha:'20:10' },
  };
  el.innerHTML = `<div class="tool-form">
    <div class="tip-box">${t('أوقات الصلاة تقريبية لمتوسط السنة. للدقة استخدم تطبيق الأوقات المحلي','Approximate average prayer times. Use a local app for exact times')}</div>
    ${formSelect(t('المدينة','City'), 'pcity', [
      { v:'cairo', l:t('القاهرة','Cairo') }, { v:'riyadh', l:t('الرياض','Riyadh') }, { v:'dubai', l:t('دبي','Dubai') }
    ])}
    ${calcBtn(t('عرض مواقيت الصلاة','Show Prayer Times'))}
    ${resultBox('prayRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const city = el.querySelector('#pcity').value;
    const p = times[city] || times.cairo;
    const box = document.getElementById('prayRes');
    box.style.display = 'block';
    const names = [t('الفجر','Fajr'), t('الظهر','Dhuhr'), t('العصر','Asr'), t('المغرب','Maghrib'), t('العشاء','Isha')];
    const vals = [p.fajr, p.dhuhr, p.asr, p.maghrib, p.isha];
    box.innerHTML = `<table class="info-table"><tr>${names.map(n2=>`<th>${n2}</th>`).join('')}</tr><tr>${vals.map(v=>`<td>${v}</td>`).join('')}</tr></table>
      <p style="font-size:.75rem;color:var(--text2);margin-top:.5rem">${t('* توقيت تقريبي - يتغير حسب الموسم والموقع','* Approximate - changes by season & location')}</p>`;
  };
}

function formRetirement(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('عمرك الحالي','Current age'), 'retage', 'number', '30')}
    ${formField(t('سن التقاعد المستهدف','Target retirement age'), 'retretage', 'number', '60')}
    ${formField(t('المدخرات الحالية','Current savings'), 'retcur', 'number', '50000')}
    ${formField(t('الادخار الشهري','Monthly savings'), 'retmonth', 'number', '2000')}
    ${formField(t('معدل العائد السنوي %','Annual return %'), 'retrate', 'number', '7')}
    ${calcBtn(t('احسب التقاعد','Retirement Projection'))}
    ${resultBox('retRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const years = n(el.querySelector('#retretage').value) - n(el.querySelector('#retage').value);
    const monthly = n(el.querySelector('#retmonth').value);
    const cur = n(el.querySelector('#retcur').value);
    const r = n(el.querySelector('#retrate').value) / 100 / 12;
    const months = years * 12;
    const future = cur * Math.pow(1 + r, months) + (r === 0 ? monthly * months : monthly * (Math.pow(1+r,months)-1)/r*(1+r));
    showResult('retRes', fmt(future), t('ثروة التقاعد المتوقعة','Expected Retirement Wealth'),
      t(`بعد ${years} سنة`, `After ${years} years`));
  };
}

function formWorkHours(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('ساعات العمل اليومية','Daily work hours'), 'wh', 'number', '8')}
    ${formField(t('أيام العمل في الأسبوع','Work days per week'), 'wd', 'number', '5')}
    ${formField(t('الأجر بالساعة','Hourly rate'), 'wrate', 'number', '50')}
    ${calcBtn(t('احسب','Calculate'))}
    ${resultBox('whRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const daily = n(el.querySelector('#wh').value) * n(el.querySelector('#wrate').value);
    const weekly = daily * n(el.querySelector('#wd').value);
    showResult('whRes', fmt(weekly), t('الأجر الأسبوعي','Weekly Pay'),
      t(`يومياً: ${fmt(daily)} | شهرياً: ${fmt(weekly * 4.33)}`, `Daily: ${fmt(daily)} | Monthly: ${fmt(weekly * 4.33)}`));
  };
}

function formDaysUntil(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('التاريخ المستهدف','Target date'), 'duedate', 'date')}
    ${calcBtn(t('احسب الأيام','Count Days'))}
    ${resultBox('dueRes')}
  </div>`;
  const next = new Date(Date.now() + 30*86400000).toISOString().split('T')[0];
  el.querySelector('#duedate').value = next;
  el.querySelector('#calcBtn').onclick = () => {
    const target = new Date(el.querySelector('#duedate').value);
    const days = Math.ceil((target - new Date()) / 86400000);
    const emoji = days > 0 ? '⏳' : days === 0 ? '🎉' : '✅';
    showResult('dueRes', `${Math.abs(days)} ${t('يوم','days')} ${emoji}`, days > 0 ? t('الأيام المتبقية','Days Remaining') : t('مرّ من التاريخ','Days Since'));
  };
}

function formProductivity(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('عدد المهام المكتملة','Tasks completed'), 'prod1', 'number', '7')}
    ${formField(t('عدد المهام الكلية','Total tasks'), 'prod2', 'number', '10')}
    ${formField(t('ساعات العمل الفعلية','Actual work hours'), 'prod3', 'number', '6')}
    ${formField(t('ساعات العمل المخططة','Planned work hours'), 'prod4', 'number', '8')}
    ${calcBtn(t('قيّم إنتاجيتي','Rate My Productivity'))}
    ${resultBox('prodRes')}
  </div>`;
  el.querySelector('#calcBtn').onclick = () => {
    const taskRate = n(el.querySelector('#prod1').value) / n(el.querySelector('#prod2').value) * 100;
    const timeRate = n(el.querySelector('#prod3').value) / n(el.querySelector('#prod4').value) * 100;
    const score = (taskRate + timeRate) / 2;
    const level = score >= 90 ? t('ممتاز 🌟','Excellent 🌟') : score >= 70 ? t('جيد جداً ✅','Very Good ✅') : score >= 50 ? t('متوسط ⚡','Average ⚡') : t('يحتاج تحسين ⚠️','Needs improvement ⚠️');
    showResult('prodRes', `${score.toFixed(0)}% — ${level}`, t('مؤشر الإنتاجية','Productivity Score'),
      t(`إنجاز المهام: ${taskRate.toFixed(0)}% | استغلال الوقت: ${timeRate.toFixed(0)}%`, `Tasks: ${taskRate.toFixed(0)}% | Time: ${timeRate.toFixed(0)}%`));
  };
}

/* ===================================
   3️⃣ قائمة المهام
   =================================== */
function renderTodo(tool, el) {
  const key = 'todo_' + tool.fn;
  let items = lsGet(key) || [];
  const placeholder = tool.fn === 'medicine' ? t('اسم الدواء + الجرعة...','Medicine name + dose...') :
    tool.fn === 'shopping' ? t('أضف منتجاً...','Add product...') :
    tool.fn === 'meals' ? t('وجبة أو طبق...','Meal or dish...') :
    t('أضف مهمة...','Add task...');

  const rebuild = () => {
    lsSet(key, items);
    const done = items.filter(i => i.done).length;
    el.querySelector('#todoStats').textContent = `${done}/${items.length} ${t('مكتمل','done')}`;
    el.querySelector('#todoList').innerHTML = items.length ? items.map((item, i) => `
      <div class="todo-item ${item.done ? 'done' : ''}">
        <button class="todo-check ${item.done ? 'checked' : ''}" data-i="${i}">${item.done ? '✓' : ''}</button>
        <span class="todo-text">${item.text}</span>
        <button class="todo-del" data-i="${i}">🗑</button>
      </div>`).join('') : `<p style="text-align:center;color:var(--text3);font-size:.85rem;padding:1rem">${t('لا توجد عناصر بعد','No items yet')}</p>`;

    el.querySelectorAll('.todo-check').forEach(btn => {
      btn.onclick = () => { items[+btn.dataset.i].done = !items[+btn.dataset.i].done; rebuild(); };
    });
    el.querySelectorAll('.todo-del').forEach(btn => {
      btn.onclick = () => { items.splice(+btn.dataset.i, 1); rebuild(); };
    });
    el.querySelector('#clearDone').onclick = () => { items = items.filter(i => !i.done); rebuild(); };
  };

  el.innerHTML = `
    <div class="todo-add">
      <input class="form-input todo-input" id="todoInput" type="text" placeholder="${placeholder}">
      <button class="todo-add-btn" id="todoAddBtn">+</button>
    </div>
    <div class="todo-stats" id="todoStats" style="margin-bottom:.5rem"></div>
    <div class="todo-list" id="todoList"></div>
    <div class="todo-stats" style="margin-top:.5rem">
      <span></span>
      <span class="clear-done" id="clearDone">${t('حذف المكتملة','Clear done')}</span>
    </div>`;

  rebuild();
  const addBtn = el.querySelector('#todoAddBtn');
  const input = el.querySelector('#todoInput');
  const addItem = () => {
    const text = input.value.trim();
    if (!text) return;
    items.push({ text, done: false });
    input.value = '';
    rebuild();
    input.focus();
  };
  addBtn.onclick = addItem;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') addItem(); });
}

/* ===================================
   4️⃣ المؤقتات والتايمر
   =================================== */
function renderTimer(tool, el) {
  const timers = {
    stopwatch: () => timerStopwatch(el),
    countdown: () => timerCountdown(el),
    pomodoro: () => timerPomodoro(el),
    workout: () => timerWorkout(el),
    breathing: () => timerBreathing(el),
    meditation: () => timerMeditation(el),
    meeting: () => timerStopwatch(el),
    breaktimer: () => timerCountdown(el),
  };
  const fn = timers[tool.fn] || timerStopwatch;
  fn(el);
}

function timerStopwatch(el) {
  let sec = 0, running = false;
  el.innerHTML = `
    <div class="timer-display" id="swDisplay">00:00:00</div>
    <div class="timer-controls">
      <button class="btn-timer btn-start" id="swStart">${t('ابدأ','Start')}</button>
      <button class="btn-timer btn-pause" id="swPause" style="display:none">${t('إيقاف','Pause')}</button>
      <button class="btn-timer btn-reset" id="swReset">${t('إعادة','Reset')}</button>
    </div>`;
  const display = el.querySelector('#swDisplay');
  const fmt2 = s => `${String(Math.floor(s/3600)).padStart(2,'0')}:${String(Math.floor(s%3600/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
  el.querySelector('#swStart').onclick = () => {
    running = true;
    el.querySelector('#swStart').style.display = 'none';
    el.querySelector('#swPause').style.display = 'inline-block';
    APP.timers.sw = setInterval(() => { sec++; display.textContent = fmt2(sec); }, 1000);
  };
  el.querySelector('#swPause').onclick = () => {
    running = false;
    clearInterval(APP.timers.sw);
    el.querySelector('#swStart').style.display = 'inline-block';
    el.querySelector('#swPause').style.display = 'none';
  };
  el.querySelector('#swReset').onclick = () => {
    clearInterval(APP.timers.sw);
    sec = 0; running = false;
    display.textContent = '00:00:00';
    el.querySelector('#swStart').style.display = 'inline-block';
    el.querySelector('#swPause').style.display = 'none';
  };
}

function timerCountdown(el) {
  let sec = 0, total = 0, running = false;
  el.innerHTML = `
    <div class="flex-row" style="justify-content:center;margin-bottom:.75rem">
      <input class="form-input" id="ctMin" type="number" min="0" max="99" value="25" style="width:70px;text-align:center;font-size:1.5rem">
      <span style="font-size:1.5rem;padding:0 .3rem">:</span>
      <input class="form-input" id="ctSec" type="number" min="0" max="59" value="00" style="width:70px;text-align:center;font-size:1.5rem">
    </div>
    <div class="timer-display" id="ctDisplay">25:00</div>
    <div class="timer-controls">
      <button class="btn-timer btn-start" id="ctStart">${t('ابدأ','Start')}</button>
      <button class="btn-timer btn-pause" id="ctPause" style="display:none">${t('إيقاف','Pause')}</button>
      <button class="btn-timer btn-reset" id="ctReset">${t('إعادة','Reset')}</button>
    </div>
    <div class="result-box" id="ctDone" style="display:none;background:var(--success);color:#fff">
      ${t('🎉 انتهى الوقت!','🎉 Time is up!')}
    </div>`;
  const display = el.querySelector('#ctDisplay');
  const fmt2 = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
  el.querySelector('#ctStart').onclick = () => {
    const mins = +el.querySelector('#ctMin').value || 0;
    const secs2 = +el.querySelector('#ctSec').value || 0;
    if (!running) { total = sec = mins * 60 + secs2; }
    if (!sec) return;
    running = true;
    el.querySelector('#ctDone').style.display = 'none';
    el.querySelector('#ctStart').style.display = 'none';
    el.querySelector('#ctPause').style.display = 'inline-block';
    APP.timers.ct = setInterval(() => {
      sec--;
      display.textContent = fmt2(sec);
      if (sec <= 0) {
        clearInterval(APP.timers.ct);
        el.querySelector('#ctDone').style.display = 'block';
        el.querySelector('#ctStart').style.display = 'inline-block';
        el.querySelector('#ctPause').style.display = 'none';
        running = false;
      }
    }, 1000);
  };
  el.querySelector('#ctPause').onclick = () => {
    running = false;
    clearInterval(APP.timers.ct);
    el.querySelector('#ctStart').style.display = 'inline-block';
    el.querySelector('#ctPause').style.display = 'none';
  };
  el.querySelector('#ctReset').onclick = () => {
    clearInterval(APP.timers.ct);
    running = false; sec = 0;
    display.textContent = '00:00';
    el.querySelector('#ctStart').style.display = 'inline-block';
    el.querySelector('#ctPause').style.display = 'none';
    el.querySelector('#ctDone').style.display = 'none';
  };
}

function timerPomodoro(el) {
  let sec = 25*60, phase = 'work', cycles = 0, running = false;
  el.innerHTML = `
    <div class="timer-display" id="pmDisplay">25:00</div>
    <p id="pmPhase" style="text-align:center;font-weight:700;margin-bottom:.75rem;color:var(--primary)">${t('وقت العمل 🍅','Work Time 🍅')}</p>
    <div class="timer-controls">
      <button class="btn-timer btn-start" id="pmStart">${t('ابدأ','Start')}</button>
      <button class="btn-timer btn-reset" id="pmReset">${t('إعادة','Reset')}</button>
    </div>
    <p style="text-align:center;color:var(--text2);font-size:.85rem;margin-top:.75rem" id="pmCycles">${t('الدورات: 0','Cycles: 0')}</p>`;
  const display = el.querySelector('#pmDisplay');
  const phaseEl = el.querySelector('#pmPhase');
  const cyclesEl = el.querySelector('#pmCycles');
  const fmt2 = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
  const switchPhase = () => {
    if (phase === 'work') { cycles++; cyclesEl.textContent = t(`الدورات: ${cycles}`, `Cycles: ${cycles}`); phase = cycles % 4 === 0 ? 'longbreak' : 'break'; }
    else { phase = 'work'; }
    const times = { work: 25*60, break: 5*60, longbreak: 15*60 };
    const labels = { work: t('وقت العمل 🍅','Work Time 🍅'), break: t('استراحة قصيرة ☕','Short Break ☕'), longbreak: t('استراحة طويلة 🌿','Long Break 🌿') };
    sec = times[phase];
    phaseEl.textContent = labels[phase];
    display.textContent = fmt2(sec);
  };
  el.querySelector('#pmStart').onclick = () => {
    if (running) { clearInterval(APP.timers.pm); running = false; el.querySelector('#pmStart').textContent = t('ابدأ','Start'); return; }
    running = true;
    el.querySelector('#pmStart').textContent = t('إيقاف','Pause');
    APP.timers.pm = setInterval(() => { sec--; display.textContent = fmt2(sec); if (sec <= 0) switchPhase(); }, 1000);
  };
  el.querySelector('#pmReset').onclick = () => {
    clearInterval(APP.timers.pm);
    running = false; sec = 25*60; phase = 'work'; cycles = 0;
    display.textContent = '25:00'; phaseEl.textContent = t('وقت العمل 🍅','Work Time 🍅');
    cyclesEl.textContent = t('الدورات: 0','Cycles: 0');
    el.querySelector('#pmStart').textContent = t('ابدأ','Start');
  };
}

function timerWorkout(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('وقت التمرين (ثانية)','Exercise time (sec)'), 'wkExTime', 'number', '45')}
    ${formField(t('وقت الراحة (ثانية)','Rest time (sec)'), 'wkRestTime', 'number', '15')}
    ${formField(t('عدد الجولات','Number of rounds'), 'wkRounds', 'number', '3')}
    <button class="btn-primary" id="wkStart">${t('ابدأ التمرين','Start Workout')}</button>
    <div id="wkTimer"></div>
  </div>`;
  el.querySelector('#wkStart').onclick = () => {
    const exTime = +el.querySelector('#wkExTime').value;
    const restTime = +el.querySelector('#wkRestTime').value;
    const rounds = +el.querySelector('#wkRounds').value;
    const timerEl = el.querySelector('#wkTimer');
    let round = 1, phase = 'exercise', sec2 = exTime;
    const fmt2 = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
    timerEl.innerHTML = `<div class="timer-display">${fmt2(sec2)}</div><p style="text-align:center;color:var(--primary);font-weight:700">${t('تمرين','Exercise')} — ${t('جولة','Round')} ${round}/${rounds}</p>`;
    clearInterval(APP.timers.wk);
    APP.timers.wk = setInterval(() => {
      sec2--;
      const display = timerEl.querySelector('.timer-display');
      const info = timerEl.querySelector('p');
      if (display) display.textContent = fmt2(sec2);
      if (sec2 <= 0) {
        if (phase === 'exercise') { phase = 'rest'; sec2 = restTime; if (info) info.textContent = t('استراحة...','Rest...'); }
        else { round++; if (round > rounds) { clearInterval(APP.timers.wk); if (display) display.textContent = '🎉'; if (info) info.textContent = t('انتهى التمرين!','Workout done!'); return; } phase = 'exercise'; sec2 = exTime; if (info) info.textContent = `${t('تمرين','Exercise')} — ${t('جولة','Round')} ${round}/${rounds}`; }
      }
    }, 1000);
  };
}

function timerBreathing(el) {
  let phase = 0, sec2 = 0, running = false;
  const phases = [
    { dur:4, label: t('شهيق... 🌬️','Inhale... 🌬️'), color:'var(--primary)' },
    { dur:7, label: t('احبس النفس... ⏸','Hold... ⏸'), color:'var(--warning)' },
    { dur:8, label: t('زفير... 😮‍💨','Exhale... 😮‍💨'), color:'var(--success)' }
  ];
  el.innerHTML = `
    <div class="tip-box">${t('تقنية 4-7-8: شهيق 4 ثوانٍ، احبس 7 ثوانٍ، زفير 8 ثوانٍ. تساعد على الاسترخاء وتقليل القلق','4-7-8 Technique: Inhale 4s, hold 7s, exhale 8s. Helps relax & reduce anxiety')}</div>
    <div class="timer-display" id="brDisplay">4</div>
    <p id="brLabel" style="text-align:center;font-size:1.1rem;font-weight:700;color:var(--primary);margin-bottom:1rem">${t('جاهز للبدء','Ready to start')}</p>
    <div class="timer-controls">
      <button class="btn-timer btn-start" id="brStart">${t('ابدأ تمرين التنفس','Start Breathing')}</button>
      <button class="btn-timer btn-reset" id="brStop" style="display:none">${t('إيقاف','Stop')}</button>
    </div>`;
  const display = el.querySelector('#brDisplay');
  const label = el.querySelector('#brLabel');
  el.querySelector('#brStart').onclick = () => {
    running = true;
    el.querySelector('#brStart').style.display = 'none';
    el.querySelector('#brStop').style.display = 'inline-block';
    phase = 0; sec2 = phases[0].dur;
    display.textContent = sec2; label.textContent = phases[0].label; label.style.color = phases[0].color;
    APP.timers.br = setInterval(() => {
      sec2--;
      display.textContent = sec2;
      if (sec2 <= 0) { phase = (phase + 1) % 3; sec2 = phases[phase].dur; label.textContent = phases[phase].label; label.style.color = phases[phase].color; }
    }, 1000);
  };
  el.querySelector('#brStop').onclick = () => {
    clearInterval(APP.timers.br); running = false;
    el.querySelector('#brStart').style.display = 'inline-block';
    el.querySelector('#brStop').style.display = 'none';
    display.textContent = '4'; label.textContent = t('توقّف','Stopped'); label.style.color = 'var(--text2)';
  };
}

function timerMeditation(el) {
  let sec2 = 0, total = 0, running = false;
  el.innerHTML = `
    <div class="flex-row" style="justify-content:center;margin-bottom:.75rem;flex-wrap:wrap;gap:.4rem">
      ${[3,5,10,15,20].map(m => `<button class="btn-secondary med-preset" data-min="${m}">${m} ${t('دقيقة','min')}</button>`).join('')}
    </div>
    <div class="timer-display" id="medDisplay">05:00</div>
    <div id="medBreath" style="text-align:center;font-size:2rem;transition:transform .5s">🧘</div>
    <div class="timer-controls">
      <button class="btn-timer btn-start" id="medStart">${t('ابدأ التأمل','Start Meditation')}</button>
      <button class="btn-timer btn-reset" id="medReset">${t('إعادة','Reset')}</button>
    </div>`;
  const display = el.querySelector('#medDisplay');
  const fmt2 = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
  el.querySelectorAll('.med-preset').forEach(btn => {
    btn.onclick = () => { total = sec2 = +btn.dataset.min * 60; display.textContent = fmt2(sec2); };
  });
  total = sec2 = 5 * 60;
  el.querySelector('#medStart').onclick = () => {
    if (running) { clearInterval(APP.timers.med); running = false; el.querySelector('#medStart').textContent = t('ابدأ','Start'); return; }
    if (!sec2) return;
    running = true;
    el.querySelector('#medStart').textContent = t('إيقاف','Pause');
    let breathPhase = 0;
    APP.timers.med = setInterval(() => {
      sec2--; breathPhase++;
      display.textContent = fmt2(sec2);
      el.querySelector('#medBreath').style.transform = breathPhase % 4 < 2 ? 'scale(1.2)' : 'scale(1)';
      if (sec2 <= 0) { clearInterval(APP.timers.med); running = false; display.textContent = '🎉'; el.querySelector('#medStart').textContent = t('ابدأ','Start'); }
    }, 1000);
  };
  el.querySelector('#medReset').onclick = () => { clearInterval(APP.timers.med); running = false; sec2 = total; display.textContent = fmt2(sec2); el.querySelector('#medStart').textContent = t('ابدأ','Start'); };
}

/* ===================================
   5️⃣ الملاحظات والنصوص
   =================================== */
function renderNotes(tool, el) {
  const key = 'notes_' + tool.fn;
  const saved = lsGet(key) || '';
  const wordCountMode = tool.fn === 'wordcount';
  const textCaseMode = tool.fn === 'textcase';
  const cleanMode = tool.fn === 'textclean';
  const rot13Mode = tool.fn === 'rot13';
  const lineCountMode = tool.fn === 'linecount';
  const jsonMode = tool.fn === 'json';
  const findReplaceMode = tool.fn === 'findreplace';

  let toolbar = '';
  if (wordCountMode) toolbar = `<div class="notes-toolbar"><span id="wc" style="font-size:.85rem;color:var(--text2)">${t('الكلمات: 0 | الأحرف: 0 | الجمل: 0','Words: 0 | Chars: 0 | Sentences: 0')}</span></div>`;
  else if (textCaseMode) toolbar = `<div class="notes-toolbar">
    <button class="notes-tool-btn" id="tcUpper">${t('كبير','UPPER')}</button>
    <button class="notes-tool-btn" id="tcLower">${t('صغير','lower')}</button>
    <button class="notes-tool-btn" id="tcTitle">${t('كل حرف كبير','Title Case')}</button>
  </div>`;
  else if (rot13Mode) toolbar = `<div class="notes-toolbar"><button class="notes-tool-btn" id="rot13Btn">${t('تشفير/فك تشفير ROT13','Encode/Decode ROT13')}</button></div>`;
  else if (jsonMode) toolbar = `<div class="notes-toolbar"><button class="notes-tool-btn" id="jsonFmt">${t('تنسيق JSON','Format JSON')}</button></div>`;
  else if (findReplaceMode) toolbar = `<div class="notes-toolbar flex-col" style="width:100%">
    <div class="flex-row">
      <input class="form-input" id="frFind" placeholder="${t('ابحث عن...','Find...')}" style="flex:1">
      <input class="form-input" id="frReplace" placeholder="${t('استبدل بـ...','Replace with...')}" style="flex:1">
      <button class="notes-tool-btn" id="frBtn">${t('استبدل','Replace')}</button>
    </div>
  </div>`;
  else if (lineCountMode) toolbar = `<div class="notes-toolbar"><span id="lc" style="font-size:.85rem;color:var(--text2)">${t('الأسطر: 0','Lines: 0')}</span></div>`;

  el.innerHTML = `
    ${toolbar}
    <textarea class="notes-area" id="notesArea" placeholder="${t('اكتب هنا...','Type here...')}">${saved}</textarea>
    <div class="notes-footer">
      <span id="charCount">${t('الأحرف: 0','Chars: 0')}</span>
      <span class="notes-save" id="saveNote">${t('💾 حفظ','💾 Save')}</span>
    </div>`;

  const area = el.querySelector('#notesArea');
  const updateCount = () => {
    const text = area.value;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text.split('\n').length;
    const sentences = text.split(/[.!?؟]+/).filter(s => s.trim()).length;
    el.querySelector('#charCount').textContent = t(`الأحرف: ${chars}`, `Chars: ${chars}`);
    if (wordCountMode && el.querySelector('#wc')) el.querySelector('#wc').textContent = t(`الكلمات: ${words} | الأحرف: ${chars} | الجمل: ${sentences}`, `Words: ${words} | Chars: ${chars} | Sentences: ${sentences}`);
    if (lineCountMode && el.querySelector('#lc')) el.querySelector('#lc').textContent = t(`الأسطر: ${lines}`, `Lines: ${lines}`);
    if (cleanMode) area.value = text.replace(/  +/g, ' ').replace(/\n{3,}/g, '\n\n');
  };
  area.addEventListener('input', updateCount);
  updateCount();

  el.querySelector('#saveNote').onclick = () => { lsSet(key, area.value); el.querySelector('#saveNote').textContent = t('✅ تم الحفظ','✅ Saved'); setTimeout(() => el.querySelector('#saveNote').textContent = t('💾 حفظ','💾 Save'), 1500); };

  if (textCaseMode) {
    el.querySelector('#tcUpper').onclick = () => { area.value = area.value.toUpperCase(); };
    el.querySelector('#tcLower').onclick = () => { area.value = area.value.toLowerCase(); };
    el.querySelector('#tcTitle').onclick = () => { area.value = area.value.replace(/\b\w/g, c => c.toUpperCase()); };
  }
  if (rot13Mode) {
    el.querySelector('#rot13Btn').onclick = () => {
      area.value = area.value.replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
      });
    };
  }
  if (jsonMode) {
    el.querySelector('#jsonFmt').onclick = () => {
      try { area.value = JSON.stringify(JSON.parse(area.value), null, 2); }
      catch { area.value = t('❌ JSON غير صالح','❌ Invalid JSON'); }
    };
  }
  if (findReplaceMode) {
    el.querySelector('#frBtn').onclick = () => {
      const find = el.querySelector('#frFind').value;
      const rep = el.querySelector('#frReplace').value;
      if (!find) return;
      area.value = area.value.split(find).join(rep);
    };
  }
}

/* ===================================
   6️⃣ المحوّلات
   =================================== */
function renderConv(tool, el) {
  const convBuilders = {
    units: () => convUnits(el),
    nums: () => convNums(el),
    num2word: () => convNum2Word(el),
    arNum: () => convNum2Word(el),
    color: () => convColor(el),
    numbase: () => convNums(el),
    timestamp: () => convTimestamp(el),
    base64: () => convBase64(el),
    ascii: () => convAscii(el),
    encoding: () => convEncoding(el),
    filesize: () => convFilesize(el),
    hijri: () => convHijri(el),
  };
  const fn = convBuilders[tool.fn];
  if (fn) fn();
  else convUnits(el);
}

function convUnits(el) {
  const categories = {
    [t('طول','Length')]: { m: 1, km: 0.001, cm: 100, mm: 1000, inch: 39.3701, ft: 3.28084, mile: 0.000621371, yard: 1.09361 },
    [t('وزن','Weight')]: { kg: 1, g: 1000, lb: 2.20462, oz: 35.274, ton: 0.001 },
    [t('درجة الحرارة','Temperature')]: null,
    [t('سرعة','Speed')]: { 'km/h': 1, 'm/s': 0.277778, 'mph': 0.621371, knot: 0.539957 },
    [t('مساحة','Area')]: { 'm²': 1, 'km²': 0.000001, 'cm²': 10000, 'ft²': 10.7639, acre: 0.000247105 },
  };
  const catOpts = Object.keys(categories).map(k => ({ v: k, l: k }));
  el.innerHTML = `<div class="converter-wrap">
    ${formSelect(t('الفئة','Category'), 'ucat', catOpts)}
    <div id="uInputs"></div>
    <div class="converter-result" id="uResult"></div>
  </div>`;
  const buildInputs = () => {
    const cat = el.querySelector('#ucat').value;
    const units = categories[cat];
    if (!units) {
      el.querySelector('#uInputs').innerHTML = `
        <div class="form-group"><label class="form-label">${t('درجة سيليوس','Celsius')}</label><input class="form-input" id="tempC" type="number" value="25"></div>
        <div class="form-group"><label class="form-label">${t('فهرنهايت','Fahrenheit')}</label><input class="form-input" id="tempF" type="number"></div>
        <div class="form-group"><label class="form-label">${t('كلفن','Kelvin')}</label><input class="form-input" id="tempK" type="number"></div>
        <button class="btn-primary" id="tempConv">${t('حوّل','Convert')}</button>`;
      el.querySelector('#tempConv').onclick = () => {
        const c = +el.querySelector('#tempC').value;
        el.querySelector('#tempF').value = (c * 9/5 + 32).toFixed(2);
        el.querySelector('#tempK').value = (c + 273.15).toFixed(2);
        el.querySelector('#uResult').textContent = `${c}°C = ${(c*9/5+32).toFixed(1)}°F = ${(c+273.15).toFixed(1)}K`;
      };
      return;
    }
    const unitKeys = Object.keys(units);
    el.querySelector('#uInputs').innerHTML = `
      <div class="form-group"><label class="form-label">${t('القيمة','Value')}</label><input class="form-input" id="uVal" type="number" value="1"></div>
      ${formSelect(t('من','From'), 'uFrom', unitKeys.map(k => ({ v:k, l:k })))}
      ${formSelect(t('إلى','To'), 'uTo', unitKeys.map(k => ({ v:k, l:k })))}
      <button class="btn-primary" id="uConv">${t('حوّل','Convert')}</button>`;
    el.querySelector('#uTo').selectedIndex = 1;
    el.querySelector('#uConv').onclick = () => {
      const val = +el.querySelector('#uVal').value;
      const from = el.querySelector('#uFrom').value;
      const to = el.querySelector('#uTo').value;
      const inBase = val / units[from];
      const result = inBase * units[to];
      el.querySelector('#uResult').textContent = `${val} ${from} = ${fmt(result, 6)} ${to}`;
    };
  };
  buildInputs();
  el.querySelector('#ucat').onchange = buildInputs;
}

function convNums(el) {
  el.innerHTML = `<div class="converter-wrap">
    <div class="form-group"><label class="form-label">${t('عشري (Decimal)','Decimal')}</label><input class="form-input" id="ndec" type="number" value="255"></div>
    <div class="form-group"><label class="form-label">${t('ثنائي (Binary)','Binary')}</label><input class="form-input" id="nbin" type="text"></div>
    <div class="form-group"><label class="form-label">${t('سداسي عشري (Hex)','Hexadecimal')}</label><input class="form-input" id="nhex" type="text"></div>
    <div class="form-group"><label class="form-label">${t('ثماني (Octal)','Octal')}</label><input class="form-input" id="noct" type="text"></div>
    <button class="btn-primary" id="nConv">${t('حوّل','Convert')}</button>
  </div>`;
  el.querySelector('#nConv').onclick = () => {
    const dec = parseInt(el.querySelector('#ndec').value);
    if (isNaN(dec)) return;
    el.querySelector('#nbin').value = dec.toString(2);
    el.querySelector('#nhex').value = dec.toString(16).toUpperCase();
    el.querySelector('#noct').value = dec.toString(8);
  };
}

function convNum2Word(el) {
  const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
  const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
  const hundreds = ['', 'مئة', 'مئتان', 'ثلاثمئة', 'أربعمئة', 'خمسمئة', 'ستمئة', 'سبعمئة', 'ثمانمئة', 'تسعمئة'];
  const numToAr = (n2) => {
    if (n2 === 0) return 'صفر';
    if (n2 < 0) return 'سالب ' + numToAr(-n2);
    if (n2 < 20) return ones[n2];
    if (n2 < 100) return tens[Math.floor(n2/10)] + (n2%10 ? ' و' + ones[n2%10] : '');
    if (n2 < 1000) return hundreds[Math.floor(n2/100)] + (n2%100 ? ' و' + numToAr(n2%100) : '');
    if (n2 < 1000000) return numToAr(Math.floor(n2/1000)) + ' ألف' + (n2%1000 ? ' و' + numToAr(n2%1000) : '');
    return numToAr(Math.floor(n2/1000000)) + ' مليون' + (n2%1000000 ? ' و' + numToAr(n2%1000000) : '');
  };
  el.innerHTML = `<div class="converter-wrap">
    <div class="form-group"><label class="form-label">${t('الرقم','Number')}</label><input class="form-input" id="n2w" type="number" value="1234"></div>
    <button class="btn-primary" id="n2wConv">${t('حوّل لكلمات','Convert to Words')}</button>
    <div class="gen-output" id="n2wResult"></div>
  </div>`;
  el.querySelector('#n2wConv').onclick = () => {
    const num = parseInt(el.querySelector('#n2w').value);
    el.querySelector('#n2wResult').textContent = isNaN(num) ? t('رقم غير صالح','Invalid number') : numToAr(Math.abs(num));
  };
}

function convColor(el) {
  el.innerHTML = `<div class="converter-wrap">
    <div class="color-preview" id="colorPrev" style="background:#3b82f6"></div>
    <div class="form-group"><label class="form-label">HEX</label><input class="form-input" id="hexInput" type="text" value="#3b82f6"></div>
    <div class="form-group"><label class="form-label">RGB</label><input class="form-input" id="rgbInput" type="text" value="rgb(59, 130, 246)"></div>
    <button class="btn-primary" id="colorConv">${t('حوّل','Convert')}</button>
  </div>`;
  el.querySelector('#colorConv').onclick = () => {
    const hex = el.querySelector('#hexInput').value;
    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
    if (match) {
      const [,r,g,b] = match.map((x,i)=>i?parseInt(x,16):x);
      el.querySelector('#rgbInput').value = `rgb(${r}, ${g}, ${b})`;
      el.querySelector('#colorPrev').style.background = hex;
    }
  };
  el.querySelector('#hexInput').addEventListener('input', (e) => {
    if (/^#[0-9a-f]{6}$/i.test(e.target.value)) el.querySelector('#colorPrev').style.background = e.target.value;
  });
}

function convTimestamp(el) {
  el.innerHTML = `<div class="converter-wrap">
    <div class="form-group"><label class="form-label">Unix Timestamp</label><input class="form-input" id="tsInput" type="number" value="${Math.floor(Date.now()/1000)}"></div>
    <div class="form-group"><label class="form-label">${t('التاريخ','Date')}</label><input class="form-input" id="dtInput" type="text" placeholder="YYYY-MM-DD HH:MM:SS"></div>
    <div class="flex-row">
      <button class="btn-secondary" id="ts2dt">${t('TS → تاريخ','TS → Date')}</button>
      <button class="btn-secondary" id="dt2ts">${t('تاريخ → TS','Date → TS')}</button>
    </div>
  </div>`;
  el.querySelector('#ts2dt').onclick = () => {
    const d = new Date(+el.querySelector('#tsInput').value * 1000);
    el.querySelector('#dtInput').value = d.toLocaleString('ar-SA');
  };
  el.querySelector('#dt2ts').onclick = () => {
    const ts = Math.floor(new Date(el.querySelector('#dtInput').value).getTime() / 1000);
    el.querySelector('#tsInput').value = isNaN(ts) ? t('خطأ','Error') : ts;
  };
}

function convBase64(el) {
  el.innerHTML = `<div class="converter-wrap">
    <div class="form-group"><label class="form-label">${t('النص الأصلي','Original Text')}</label><textarea class="form-textarea" id="b64in" placeholder="${t('أدخل النص...','Enter text...')}" rows="3"></textarea></div>
    <div class="form-group"><label class="form-label">Base64</label><textarea class="form-textarea" id="b64out" rows="3"></textarea></div>
    <div class="flex-row">
      <button class="btn-secondary" id="b64enc">${t('تشفير','Encode')}</button>
      <button class="btn-secondary" id="b64dec">${t('فك التشفير','Decode')}</button>
    </div>
  </div>`;
  el.querySelector('#b64enc').onclick = () => {
    try { el.querySelector('#b64out').value = btoa(unescape(encodeURIComponent(el.querySelector('#b64in').value))); }
    catch { el.querySelector('#b64out').value = t('خطأ في التشفير','Encoding error'); }
  };
  el.querySelector('#b64dec').onclick = () => {
    try { el.querySelector('#b64in').value = decodeURIComponent(escape(atob(el.querySelector('#b64out').value.trim()))); }
    catch { el.querySelector('#b64in').value = t('خطأ في فك التشفير','Decoding error'); }
  };
}

function convAscii(el) {
  el.innerHTML = `<div class="converter-wrap">
    <div class="form-group"><label class="form-label">${t('النص','Text')}</label><input class="form-input" id="ascTxt" type="text" value="Hello"></div>
    <div class="form-group"><label class="form-label">ASCII ${t('أكواد','Codes')}</label><input class="form-input" id="ascCodes" type="text" readonly></div>
    <button class="btn-primary" id="ascConv">${t('حوّل','Convert')}</button>
  </div>`;
  el.querySelector('#ascConv').onclick = () => {
    const text = el.querySelector('#ascTxt').value;
    el.querySelector('#ascCodes').value = text.split('').map(c => c.charCodeAt(0)).join(' ');
  };
}

function convEncoding(el) {
  el.innerHTML = `<div class="converter-wrap">
    <div class="form-group"><label class="form-label">${t('النص','Text')}</label><input class="form-input" id="encIn" type="text" value="مرحباً بالعالم!"></div>
    <div class="form-group"><label class="form-label">URL Encode</label><input class="form-input" id="encOut" type="text" readonly></div>
    <div class="flex-row">
      <button class="btn-secondary" id="encEnc">${t('تشفير URL','URL Encode')}</button>
      <button class="btn-secondary" id="encDec">${t('فك التشفير','Decode')}</button>
    </div>
  </div>`;
  el.querySelector('#encEnc').onclick = () => { el.querySelector('#encOut').value = encodeURIComponent(el.querySelector('#encIn').value); };
  el.querySelector('#encDec').onclick = () => { try { el.querySelector('#encIn').value = decodeURIComponent(el.querySelector('#encOut').value); } catch {} };
}

function convFilesize(el) {
  const units2 = { B:1, KB:1024, MB:1048576, GB:1073741824, TB:1099511627776 };
  const opts = Object.keys(units2).map(k => ({ v:k, l:k }));
  el.innerHTML = `<div class="converter-wrap">
    ${formField(t('الحجم','Size'), 'fsVal', 'number', '1')}
    ${formSelect(t('من','From'), 'fsFrom', opts)}
    ${formSelect(t('إلى','To'), 'fsTo', opts)}
    <button class="btn-primary" id="fsConv">${t('حوّل','Convert')}</button>
    <div class="converter-result" id="fsRes"></div>
  </div>`;
  el.querySelector('#fsFrom').selectedIndex = 2;
  el.querySelector('#fsTo').selectedIndex = 1;
  el.querySelector('#fsConv').onclick = () => {
    const val = +el.querySelector('#fsVal').value;
    const from = el.querySelector('#fsFrom').value;
    const to = el.querySelector('#fsTo').value;
    const bytes = val * units2[from];
    const result = bytes / units2[to];
    el.querySelector('#fsRes').textContent = `${fmt(result, 4)} ${to}`;
  };
}

function convHijri(el) {
  el.innerHTML = `<div class="converter-wrap">
    <div class="form-group"><label class="form-label">${t('التاريخ الميلادي','Gregorian Date')}</label><input class="form-input" id="gregDate" type="date"></div>
    <button class="btn-primary" id="hijriConv">${t('تحويل للهجري','Convert to Hijri')}</button>
    <div class="gen-output" id="hijriRes" style="text-align:center;font-size:1.2rem"></div>
    <div class="tip-box">${t('الحساب تقريبي لأن تحديد الأشهر الهجرية يعتمد على رؤية الهلال','Approximate calculation; exact Hijri dates depend on moon sighting')}</div>
  </div>`;
  el.querySelector('#gregDate').value = new Date().toISOString().split('T')[0];
  el.querySelector('#hijriConv').onclick = () => {
    const d = new Date(el.querySelector('#gregDate').value);
    try {
      const hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { year:'numeric', month:'long', day:'numeric' }).format(d);
      el.querySelector('#hijriRes').textContent = hijri;
    } catch {
      el.querySelector('#hijriRes').textContent = t('غير مدعوم في هذا المتصفح','Not supported in this browser');
    }
  };
}

/* ===================================
   7️⃣ دليل المعلومات
   =================================== */
function renderInfo(tool, el) {
  const infoBuilders = {
    multtable: () => infoMultTable(el),
    mathFormulas: () => infoMathFormulas(el),
    arabicGrammar: () => infoArabicGrammar(el),
    english: () => infoEnglish(el),
    countries: () => infoCountries(el),
    chemistry: () => infoChemistry(el),
    physics: () => infoPhysics(el),
    periodic: () => infoPeriodic(el),
    adhkar: () => infoAdhkar(el),
    geography: () => infoGeography(el),
    spelling: () => infoSpelling(el),
    adhkarDaily: () => infoAdhkar(el),
    firstaid: () => infoFirstAid(el),
    blood: () => infoBlood(el),
    bp: () => infoBP(el),
    sugar: () => infoSugar(el),
    nutrition: () => infoNutrition(el),
    stretch: () => infoStretch(el),
    vaccine: () => infoVaccine(el),
    bmiGuide: () => infoBmiGuide(el),
    priority: () => infoPriority(el),
    morning: () => infoMorning(el),
    annual: () => infoAnnual(el),
    passive: () => infoPassive(el),
    savingtips: () => infoSavingTips(el),
    trading: () => infoTrading(el),
    emergency: () => infoEmergency(el),
    bizanalysis: () => infoBizAnalysis(el),
    negotiate: () => infoNegotiate(el),
    parenting: () => infoParenting(el),
    gardening: () => infoGardening(el),
    maintenance: () => infoMaintenance(el),
    cooking: () => infoCooking(el),
    laundry: () => infoLaundry(el),
    decor: () => infoDecor(el),
    homesec: () => infoHomeSec(el),
    organize: () => infoOrganize(el),
    travel: () => infoTravel(el),
    emergencyGuide: () => infoEmergencyGuide(el),
    weathertips: () => infoWeatherTips(el),
    rights: () => infoRights(el),
    govservices: () => infoGovServices(el),
    letters: () => infoLetters(el),
    driving: () => infoDriving(el),
    mental: () => infoMental(el),
    safety: () => infoSafety(el),
    entrepreneurship: () => infoEntrepreneurship(el),
    islamicManners: () => infoIslamicManners(el),
    reading: () => infoReading(el),
    study: () => infoStudy(el),
    calendar: () => infoCalendar(el),
    shortcuts: () => infoShortcuts(el),
    htmlentities: () => infoHtmlEntities(el),
    digisec: () => infoDigiSec(el),
    httpstatus: () => infoHttpStatus(el),
    unicode: () => infoUnicode(el),
    regex: () => infoRegex(el),
    punctuation: () => infoPunctuation(el),
    writing: () => infoWritingGuide(el),
  };
  const builder = infoBuilders[tool.fn];
  if (builder) builder();
  else {
    el.innerHTML = `<div class="info-section"><p class="info-card">${t('محتوى هذه الأداة قيد الإضافة قريباً ✨','Content for this tool is coming soon ✨')}</p></div>`;
  }
}

/* --- دوال Info المختصرة --- */
function infoMultTable(el) {
  let html = `<div class="info-section"><h3>${t('جدول الضرب 1–12','Multiplication Table 1-12')}</h3><div style="overflow-x:auto"><table class="info-table"><tr><th>×</th>`;
  for (let j=1;j<=12;j++) html += `<th>${j}</th>`;
  html += `</tr>`;
  for (let i=1;i<=12;i++) {
    html += `<tr><th>${i}</th>`;
    for (let j=1;j<=12;j++) html += `<td>${i*j}</td>`;
    html += `</tr>`;
  }
  el.innerHTML = html + `</table></div></div>`;
}

function infoMathFormulas(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('معادلات أساسية','Basic Formulas')}</h3>
    ${['المساحة = طول × عرض', 'محيط الدائرة = 2πr', 'مساحة الدائرة = πr²', 'نظرية فيثاغورس: a²+b²=c²', 'متوسط = مجموع الأرقام ÷ عددها', 'الربح = سعر البيع - سعر الشراء', 'الفائدة البسيطة = أصل × مدة × معدل ÷ 100'].map(f => `<div class="info-card"><b>📐</b> ${f}</div>`).join('')}
  </div>`;
}

function infoArabicGrammar(el) {
  el.innerHTML = `<div class="info-section"><h3>أنواع الكلام</h3>
    <div class="info-card"><b>الاسم:</b> كل لفظ يدل على إنسان أو حيوان أو نبات أو جماد</div>
    <div class="info-card"><b>الفعل:</b> كل لفظ يدل على حدث مقترن بزمن (ماضٍ، مضارع، أمر)</div>
    <div class="info-card"><b>الحرف:</b> ما لا يُفهم معناه إلا مع غيره (في، على، من، إلى...)</div>
    <h3 style="margin-top:1rem">حالات الإعراب</h3>
    <div class="info-card"><b>الرفع:</b> الضمة — للفاعل والمبتدأ والخبر</div>
    <div class="info-card"><b>النصب:</b> الفتحة — للمفعول به والخبر المنصوب</div>
    <div class="info-card"><b>الجر:</b> الكسرة — بعد حروف الجر والإضافة</div>
  </div>`;
}

function infoEnglish(el) {
  const words = [['Good morning','صباح الخير'],['Thank you','شكراً'],['Please','من فضلك'],['Excuse me','عفواً'],['How much?','بكم هذا؟'],['Where is...?','أين...؟'],['I need help','أحتاج مساعدة'],['Yes / No','نعم / لا'],['My name is...','اسمي...'],['I don\'t understand','لا أفهم']];
  el.innerHTML = `<div class="info-section"><h3>${t('كلمات وجمل أساسية','Essential Words & Phrases')}</h3>
    <table class="info-table"><tr><th>English</th><th>العربية</th></tr>
    ${words.map(([en2,ar2]) => `<tr><td>${en2}</td><td>${ar2}</td></tr>`).join('')}</table></div>`;
}

function infoCountries(el) {
  const countries = [['مصر','Cairo / القاهرة','جنيه مصري EGP'],['السعودية','Riyadh / الرياض','ريال SAR'],['الإمارات','Abu Dhabi / أبوظبي','درهم AED'],['الكويت','Kuwait City / مدينة الكويت','دينار KWD'],['قطر','Doha / الدوحة','ريال QAR'],['المغرب','Rabat / الرباط','درهم MAD'],['تركيا','Ankara / أنقرة','ليرة TRY'],['ألمانيا','Berlin / برلين','يورو EUR'],['أمريكا','Washington DC','دولار USD'],['المملكة المتحدة','London / لندن','إسترليني GBP']];
  el.innerHTML = `<div class="info-section"><h3>${t('دول وعواصم وعملات','Countries, Capitals & Currencies')}</h3>
    <table class="info-table"><tr><th>${t('الدولة','Country')}</th><th>${t('العاصمة','Capital')}</th><th>${t('العملة','Currency')}</th></tr>
    ${countries.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
}

function infoChemistry(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('معادلات كيميائية أساسية','Basic Chemistry Formulas')}</h3>
    ${['الماء: H₂O','ثاني أكسيد الكربون: CO₂','الأكسجين: O₂','الهيدروجين: H₂','ملح الطعام: NaCl','الأمونيا: NH₃','الكحول الإيثيلي: C₂H₅OH','الغلوكوز: C₆H₁₂O₆'].map(f => `<div class="info-card">⚗️ ${f}</div>`).join('')}
  </div>`;
}

function infoPhysics(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('قوانين فيزيائية أساسية','Basic Physics Laws')}</h3>
    ${["قانون نيوتن الثاني: F = ma","قانون الجاذبية: F = Gm₁m₂/r²","السرعة: v = d/t","القدرة: P = W/t","الطاقة الحركية: KE = ½mv²","الطاقة الكامنة: PE = mgh","قانون أوم: V = IR","سرعة الضوء: c ≈ 3×10⁸ m/s"].map(f => `<div class="info-card">🔭 ${f}</div>`).join('')}
  </div>`;
}

function infoPeriodic(el) {
  const elements = [['H','هيدروجين',1],['He','هيليوم',2],['Li','ليثيوم',3],['C','كربون',6],['N','نيتروجين',7],['O','أكسجين',8],['Na','صوديوم',11],['Mg','ماغنيسيوم',12],['Al','ألومنيوم',13],['Si','سيليكون',14],['Fe','حديد',26],['Cu','نحاس',29],['Au','ذهب',79],['Ag','فضة',47],['Pb','رصاص',82]];
  el.innerHTML = `<div class="info-section"><h3>${t('أبرز عناصر الجدول الدوري','Key Periodic Table Elements')}</h3>
    <table class="info-table"><tr><th>${t('الرمز','Symbol')}</th><th>${t('الاسم','Name')}</th><th>${t('الرقم الذري','Atomic No.')}</th></tr>
    ${elements.map(([sym,name,num]) => `<tr><td><b>${sym}</b></td><td>${name}</td><td>${num}</td></tr>`).join('')}</table></div>`;
}

function infoAdhkar(el) {
  el.innerHTML = `<div class="info-section"><h3>أذكار الصباح</h3>
    <div class="tip-box">أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ</div>
    <div class="tip-box">اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ</div>
    <h3>أذكار المساء</h3>
    <div class="tip-box">أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ</div>
    <h3>أذكار عامة</h3>
    <div class="tip-box">سُبْحَانَ اللَّهِ وَبِحَمْدِهِ (100 مرة يوميًا تحطّ الخطايا)</div>
    <div class="tip-box">لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير</div>
    <div class="tip-box">اللهم صل وسلم على سيدنا محمد</div>
  </div>`;
}

function infoGeography(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('حقائق جغرافية','Geographical Facts')}</h3>
    ${['أكبر قارة: آسيا 🌏','أصغر قارة: أستراليا 🦘','أطول نهر: النيل 6650 كم 🇪🇬','أعمق بحيرة: بايكال (روسيا) 1637م','أعلى جبل: إيفرست 8849م','أكبر محيط: الهادئ','أكبر صحراء: الصحراء الكبرى الأفريقية','أصغر دولة: الفاتيكان'].map(f => `<div class="info-card">🌍 ${f}</div>`).join('')}
  </div>`;
}

function infoSpelling(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('أشهر الأخطاء الإملائية','Common Spelling Mistakes')}</h3>
    <table class="info-table"><tr><th>${t('الخطأ','Wrong')}</th><th>${t('الصواب','Correct')}</th></tr>
    ${[['إن شاء الله','إن شاء الله (لا: إنشاء الله)'],['مستوى','مستوى (لا: مستوا)'],['لأن','لأن (لا: لأن)'],['أو','أو (لا: أو)'],['بناءً على','بناءً على (لا: بناءا)'],['يُعلَّم','يُعلَّم (لا: يعلم بمعنى يُدرَّس)']].map(([w,c]) => `<tr><td style="color:var(--danger)">${w}</td><td style="color:var(--success)">${c}</td></tr>`).join('')}
    </table></div>`;
}

function infoFirstAid(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('الإسعافات الأولية الأساسية','Basic First Aid')}</h3>
    <div class="info-card"><b>🩹 الجروح البسيطة:</b> اغسل بماء نظيف، اضغط لوقف النزيف، ضع ضمادة نظيفة</div>
    <div class="info-card"><b>🔥 الحروق:</b> برّد بماء بارد (لا ثلج) لـ10-20 دقيقة، لا تفقع البثور</div>
    <div class="info-card"><b>🫁 الإغماء:</b> ضع المصاب على جانبه، تأكد من تنفسه، لا تعطه ماء</div>
    <div class="info-card"><b>❤️ السكتة القلبية (CPR):</b> اضغط على الصدر 30 ضغطة + نفخة هواء × 2</div>
    <div class="info-card"><b>🍽️ الاختناق بالطعام:</b> قم بمناورة هيمليش (الضغط على البطن من الخلف)</div>
    <div class="info-card"><b>☀️ ضربة الشمس:</b> انقل المصاب للظل، برّد جسمه، اتصل بالإسعاف</div>
    <div class="tip-box">${t('⚠️ في حالات الطوارئ اتصل دائماً بالإسعاف أولاً','⚠️ Always call emergency services first')}</div>
  </div>`;
}

function infoBlood(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('فصائل الدم والتبرع','Blood Types & Donation')}</h3>
    <table class="info-table"><tr><th>${t('الفصيلة','Type')}</th><th>${t('يتبرع لـ','Donates to')}</th><th>${t('يستقبل من','Receives from')}</th></tr>
    ${[['O-','الجميع','O-'],['O+','O+ A+ B+ AB+','O+, O-'],['A-','A- A+ AB- AB+','A- O-'],['A+','A+ AB+','A+ A- O+ O-'],['B-','B- B+ AB- AB+','B- O-'],['B+','B+ AB+','B+ B- O+ O-'],['AB-','AB- AB+','AB- A- B- O-'],['AB+','AB+ فقط','الجميع']].map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoBP(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('تصنيفات ضغط الدم','Blood Pressure Categories')}</h3>
    <table class="info-table"><tr><th>${t('التصنيف','Category')}</th><th>${t('الانقباضي','Systolic')}</th><th>${t('الانبساطي','Diastolic')}</th></tr>
    ${[['طبيعي ✅','أقل من 120','أقل من 80'],['مرتفع قليلاً','120-129','أقل من 80'],['مرتفع المرحلة 1 ⚠️','130-139','80-89'],['مرتفع المرحلة 2 🚨','140+','90+'],['منخفض','أقل من 90','أقل من 60']].map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoSugar(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('مستويات السكر في الدم','Blood Sugar Levels')}</h3>
    <table class="info-table"><tr><th>${t('الحالة','Condition')}</th><th>${t('قبل الأكل','Fasting')}</th><th>${t('بعد الأكل','After meal')}</th></tr>
    ${[['طبيعي ✅','70-99 mg/dL','أقل من 140'],['مقدمات السكري ⚠️','100-125','140-199'],['مرض السكري 🚨','126 فأكثر','200+'],['انخفاض السكر','أقل من 70','—']].map(r => `<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table><div class="tip-box">${t('🩺 استشر طبيبك للتشخيص الدقيق','🩺 Consult your doctor for accurate diagnosis')}</div></div>`;
}

function infoNutrition(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('قيم غذائية لأطعمة شائعة (لكل 100جم)','Nutritional values per 100g')}</h3>
    <table class="info-table"><tr><th>${t('الطعام','Food')}</th><th>${t('سعرات','Kcal')}</th><th>${t('بروتين','Protein')}</th><th>${t('كربوهيدرات','Carbs')}</th></tr>
    ${[['دجاج مشوي','165','31g','0'],['أرز مطبوخ','130','2.7g','28g'],['بيضة','155','13g','1g'],['تفاحة','52','0.3g','14g'],['موزة','89','1.1g','23g'],['خبز أبيض','265','9g','49g'],['لبن كامل','61','3.2g','4.8g'],['لوز','579','21g','22g']].map(r => `<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoStretch(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('تمارين الإطالة الأساسية','Basic Stretching Exercises')}</h3>
    <div class="info-card"><b>🦵 إطالة عضلة الفخذ الأمامية:</b> قف على قدم واحدة، أمسك كاحلك للخلف لـ30 ثانية</div>
    <div class="info-card"><b>🤸 إطالة الظهر:</b> استلقِ واسحب ركبتيك نحو صدرك لـ30 ثانية</div>
    <div class="info-card"><b>💪 إطالة الكتف:</b> مدّ ذراعك أمامك وادفعها للجانب الآخر لـ20 ثانية</div>
    <div class="info-card"><b>🌿 إطالة الرقبة:</b> ميّل رأسك ببطء يميناً ويساراً، احتفظ بكل وضعية 20 ثانية</div>
    <div class="tip-box">${t('افعل الإطالة يومياً لتحسين المرونة وتقليل آلام الجسم','Stretch daily to improve flexibility & reduce body pain')}</div></div>`;
}

function infoVaccine(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('التطعيمات الأساسية للأطفال','Essential Childhood Vaccines')}</h3>
    <table class="info-table"><tr><th>${t('العمر','Age')}</th><th>${t('التطعيم','Vaccine')}</th></tr>
    ${[['عند الولادة','BCG (السل) + Hepatitis B'],['شهرين','OPV + DPT + Hib + PCV'],['4 أشهر','OPV + DPT + Hib + PCV'],['6 أشهر','OPV + DPT + Hepatitis B'],['سنة','MMR (حصبة + نكاف + حصبة ألمانية)'],['6 سنوات','جرعة معززة DPT + OPV']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoBmiGuide(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('دليل مؤشر كتلة الجسم','BMI Guide')}</h3>
    <table class="info-table"><tr><th>${t('التصنيف','Category')}</th><th>BMI</th><th>${t('التوصية','Recommendation')}</th></tr>
    ${[['نحيف','أقل من 18.5','زيادة الوزن والبروتين'],['طبيعي ✅','18.5 - 24.9','حافظ على نمط حياتك الصحي'],['زائد الوزن','25 - 29.9','تقليل السعرات وزيادة النشاط'],['سُمنة','30 فأكثر','استشر طبيباً متخصصاً']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoPriority(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('مصفوفة أيزنهاور للأولويات','Eisenhower Priority Matrix')}</h3>
    <div class="stat-grid">
      <div class="stat-card" style="border:2px solid var(--danger)"><div class="stat-val" style="color:var(--danger)">🔴</div><div class="stat-lbl">${t('عاجل + مهم','Urgent + Important')}</div><small>${t('افعله الآن','Do it now')}</small></div>
      <div class="stat-card" style="border:2px solid var(--primary)"><div class="stat-val" style="color:var(--primary)">🔵</div><div class="stat-lbl">${t('مهم + غير عاجل','Important + Not urgent')}</div><small>${t('خطّط له','Schedule it')}</small></div>
      <div class="stat-card" style="border:2px solid var(--warning)"><div class="stat-val" style="color:var(--warning)">🟡</div><div class="stat-lbl">${t('عاجل + غير مهم','Urgent + Not important')}</div><small>${t('فوّضه لغيرك','Delegate it')}</small></div>
      <div class="stat-card" style="border:2px solid var(--text3)"><div class="stat-val" style="color:var(--text3)">⚪</div><div class="stat-lbl">${t('غير عاجل + غير مهم','Not urgent + Not important')}</div><small>${t('احذفه','Eliminate it')}</small></div>
    </div></div>`;
}

function infoMorning(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('روتين صباحي فعّال','Productive Morning Routine')}</h3>
    ${['⏰ الاستيقاظ في وقت ثابت يومياً','🙏 أذكار الصباح وقراءة القرآن','💧 شرب كوب ماء فور الاستيقاظ','🏃 10-15 دقيقة تمرين أو مشي','🚿 الاستحمام لتنشيط الجسم','📋 مراجعة مهام اليوم وتحديد الأولويات','🍳 وجبة إفطار صحية','📵 تجنب الهاتف أول 30 دقيقة'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoAnnual(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('مخطط الأهداف السنوية','Annual Goals Planner')}</h3>
    ${[['المال','حدد ميزانية، وهدف ادخار، واستثمار واحد'],['الصحة','هدف لياقة محدد مع خطة تمرين أسبوعية'],['العلاقات','قضِ وقتاً نوعياً مع الأسرة والأصدقاء'],['التعلم','كتاب شهرياً أو مهارة جديدة كل ربع سنة'],['العمل','هدف مهني واحد كبير في السنة'],['الروحانيات','ورد يومي ثابت من الذكر والقرآن']].map(([cat2,tip]) => `<div class="info-card"><b>🎯 ${cat2}:</b> ${tip}</div>`).join('')}
  </div>`;
}

function infoPassive(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('أفكار للدخل السلبي','Passive Income Ideas')}</h3>
    ${['📱 بناء تطبيق أو موقع ويب مدر للدخل','📚 كتابة وبيع كتاب إلكتروني أو دورة','🏠 تأجير عقار أو غرفة','📈 الاستثمار في الأسهم والصناديق','🎨 بيع تصاميم على منصات رقمية','📹 قناة يوتيوب أو بودكاست','🛒 التجارة الإلكترونية والدروب شيبنج','💻 برامج الإحالة والتسويق بالعمولة'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoSavingTips(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح الادخار الفعّال','Effective Saving Tips')}</h3>
    ${['💡 قاعدة 50/30/20: 50% ضروريات، 30% رغبات، 20% ادخار','🔄 ادخر تلقائياً يوم استلام الراتب','📊 سجّل كل إنفاق لمدة شهر لتعرف أين يذهب المال','🛒 اعمل قائمة تسوق ولا تشتري بدونها','☕ قلّل المصاريف الصغيرة اليومية (القهوة، التوصيل)','📱 راجع اشتراكاتك وألغِ غير الضرورية','🎯 ضع هدفاً مالياً محدداً يحفّزك على الادخار'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoTrading(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('مبادئ الاستثمار الآمن','Safe Investment Principles')}</h3>
    <div class="info-card"><b>⚠️ تحذير:</b> الاستثمار ينطوي على مخاطر. هذه مبادئ عامة وليست نصيحة مالية.</div>
    ${['لا تستثمر ما لا تتحمل خسارته','وزّع استثماراتك (لا تضع كل البيض في سلة واحدة)','استثمر بانتظام (التوسط في التكلفة)','فكّر في المدى البعيد، تجنب المضاربة','ابدأ بالتعلم قبل الاستثمار الفعلي','تجنب الطمع والخوف - التزم بخطتك'].map(i=>`<div class="info-card">📈 ${i}</div>`).join('')}
  </div>`;
}

function infoEmergency(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('صندوق الطوارئ','Emergency Fund')}</h3>
    <div class="info-card"><b>ما هو؟</b> مبلغ محفوظ لمواجهة الأزمات غير المتوقعة (فقدان وظيفة، مرض، إصلاحات طارئة)</div>
    <div class="info-card"><b>كم المبلغ المثالي؟</b> 3-6 أشهر من نفقاتك الشهرية الأساسية</div>
    <div class="info-card"><b>أين تحفظه؟</b> حساب توفير منفصل، سهل الوصول لكن ليس في متناول اليد للإنفاق اليومي</div>
    <div class="info-card"><b>كيف تبدأ؟</b> ابدأ بـ 1000 كهدف أولى ثم زد تدريجياً</div>
  </div>`;
}

function infoBizAnalysis(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('أدوات تحليل الأعمال الأساسية','Business Analysis Tools')}</h3>
    <div class="info-card"><b>📊 تحليل SWOT:</b> نقاط القوة، الضعف، الفرص، التهديدات</div>
    <div class="info-card"><b>🎯 تحليل الجمهور:</b> من هم عملاؤك؟ ما احتياجاتهم؟ أين يتواجدون؟</div>
    <div class="info-card"><b>💰 تحليل التعادل:</b> متى تغطي مصاريفك وتبدأ الربح؟</div>
    <div class="info-card"><b>📈 KPIs:</b> حدد مؤشرات قياس الأداء الرئيسية لمشروعك</div>
  </div>`;
}

function infoNegotiate(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('مهارات التفاوض الاحترافية','Professional Negotiation Skills')}</h3>
    ${['استمع أكثر مما تتحدث - الاستماع قوة','حدد حدك الأدنى قبل بدء التفاوض','ابدأ بعرض أعلى من المستهدف','ابحث عن "Win-Win" - الفوز للطرفين','لا تتسرع، الصمت أداة تفاوض قوية','استند للبيانات والحقائق لا للمشاعر','كن على استعداد لقول "لا" عند الحاجة'].map(i=>`<div class="info-card">🤝 ${i}</div>`).join('')}
  </div>`;
}

function infoParenting(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح تربوية حسب العمر','Parenting Tips by Age')}</h3>
    <div class="info-card"><b>0-3 سنوات:</b> الحنان والأمان، التحدث الكثير، القراءة، ألعاب الحواس</div>
    <div class="info-card"><b>3-6 سنوات:</b> اللعب المنظم، التعليم بالقصص، الحدود الواضحة والمحبة</div>
    <div class="info-card"><b>6-12 سنة:</b> المسؤولية، حل المشكلات، القراءة، الرياضة، القيم والأخلاق</div>
    <div class="info-card"><b>المراهقة:</b> الحوار المفتوح، الاستماع بلا حكم، الاستقلالية الموجّهة</div>
    <div class="tip-box">${t('القدوة الحسنة أقوى من ألف كلمة','Leading by example is stronger than a thousand words')}</div>
  </div>`;
}

function infoGardening(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح البستنة','Gardening Tips')}</h3>
    ${['🌿 اسقِ النباتات صباحاً لتقليل التبخر','☀️ تعرف على احتياج كل نبتة من الضوء','🌱 استخدم سماداً عضوياً كل شهر','✂️ قصّ الأجزاء الميتة لتحفيز النمو','🪲 تفقّد النباتات أسبوعياً للكشف المبكر عن الآفات','💧 تأكد من جودة التصريف - الجذور تكره الماء الراكد'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoMaintenance(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('صيانة دورية للمنزل','Periodic Home Maintenance')}</h3>
    <div class="info-card"><b>شهرياً:</b> تنظيف فلاتر المكيف، فحص صنابير الماء، تنظيف مصافي الأحواض</div>
    <div class="info-card"><b>كل 3 أشهر:</b> فحص مواسير الصرف، تنظيف الثلاجة، فحص أبواب ونوافذ</div>
    <div class="info-card"><b>سنوياً:</b> فحص السطح والعزل، صيانة السخان، طلاء أجزاء خارجية</div>
  </div>`;
}

function infoCooking(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('درجات حرارة الطهي','Cooking Temperatures')}</h3>
    <table class="info-table"><tr><th>${t('الطعام','Food')}</th><th>${t('درجة الأمان','Safe Temp')}</th></tr>
    ${[['دجاج كامل','74°C / 165°F'],['لحم بقر (ميديوم)','63°C / 145°F'],['لحم خنزير','71°C / 160°F'],['أسماك','63°C / 145°F'],['بيض مقلي','درجة الصفار لا يكون سائلاً']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoLaundry(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('رموز العناية بالملابس','Laundry Care Symbols')}</h3>
    ${[['🫧 غسيل بالغسالة عادي','اتبع درجة الحرارة المحددة'],['🚿 غسيل يدوي فقط','برفق بالماء الدافئ'],['❌ لا تغسل','نظافة جافة فقط'],['♨️ كوي بحرارة عالية','قطن وكتان'],['♨️ كوي بحرارة منخفضة','أقمشة حساسة'],['🚫 لا تجفف','علّق لتجف طبيعياً']].map(([s,d])=>`<div class="info-card"><b>${s}</b><br>${d}</div>`).join('')}
  </div>`;
}

function infoDecor(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح الديكور المنزلي','Home Decor Tips')}</h3>
    ${['🎨 اختر لوناً رئيسياً وأضف إليه لونين داعمين فقط','💡 الإضاءة الدافئة تجعل المكان أكثر راحة ودفئاً','🪴 النباتات الداخلية تحسن الهواء والمظهر','🖼️ علّق الصور بمستوى العين لا أعلى منها','📐 اترك مسافات بين الأثاث لسهولة الحركة','🪟 ستائر عالية تجعل غرفتك تبدو أكبر'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoHomeSec(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح أمن المنزل','Home Security Tips')}</h3>
    ${['🔒 أغلق الأبواب والنوافذ دائماً عند مغادرة المنزل','💡 استخدم إضاءة مؤقتة عند سفرك','📵 لا تعلن عن سفرك على وسائل التواصل قبل العودة','🔑 لا تترك مفتاحاً احتياطياً خارج المنزل','📹 ضع كاميرات مراقبة في المداخل الرئيسية','🚨 ثبّت نظام إنذار للمنزل'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoOrganize(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح التنظيم المنزلي','Home Organization Tips')}</h3>
    ${['📦 قاعدة الدخول والخروج: كل ما يدخل البيت يخرج شيء مقابله','🏷️ ضع ملصقات على الصناديق والرفوف','📅 نظّف وترتّب كل أسبوع - لا تتركه يتراكم','🗑️ تخلّص مما لم تستخدمه منذ سنة','📱 رقمِّن الأوراق والمستندات المهمة','🔄 خصص مكاناً ثابتاً لكل شيء'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoTravel(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح السفر','Travel Tips')}</h3>
    <div class="info-card"><b>📋 قبل السفر:</b> تحقق من الوثائق، احجز مبكراً، اشترِ تأميناً للسفر</div>
    <div class="info-card"><b>🧳 حقيبتك:</b> الأدوية الضرورية، نسخ من الوثائق، شاحن عالمي</div>
    <div class="info-card"><b>💰 المال:</b> لا تحمل كل نقودك معك، استخدم بطاقات متعددة</div>
    <div class="info-card"><b>📱 التقنية:</b> حمّل الخرائط بدون إنترنت، احفظ أرقام الطوارئ</div>
    <div class="info-card"><b>🏥 الصحة:</b> تعرّف على مستشفيات القرب، احمل وصفاتك الطبية</div>
  </div>`;
}

function infoEmergencyGuide(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('أرقام طوارئ عامة','General Emergency Numbers')}</h3>
    <div class="info-card"><b>🚨 الشرطة:</b> 911 (السعودية) | 122 (مصر) | 999 (الإمارات)</div>
    <div class="info-card"><b>🚒 الإطفاء:</b> 998 (السعودية) | 180 (مصر) | 997 (الإمارات)</div>
    <div class="info-card"><b>🚑 الإسعاف:</b> 911 (السعودية) | 123 (مصر) | 998 (الإمارات)</div>
    <h3 style="margin-top:.75rem">${t('تصرف في الطوارئ','Emergency Actions')}</h3>
    ${['🔥 حريق: أخرج فوراً، اتصل بالإطفاء، لا تستخدم المصعد','🌊 فيضان: اذهب لأعلى نقطة، ابتعد عن الكهرباء','⚡ كهرباء عارية: قطع المصدر، لا تلمس بيدك مباشرة'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoWeatherTips(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح حسب الطقس','Weather Tips')}</h3>
    <div class="info-card"><b>☀️ حرارة شديدة:</b> اشرب ماء كثيراً، تجنب الخروج 11ص-3م، البس فاتحاً</div>
    <div class="info-card"><b>❄️ برد شديد:</b> البس طبقات متعددة، غطِّ اليدين والرأس، دفّئ مفتاح السيارة</div>
    <div class="info-card"><b>🌧️ أمطار:</b> اقود ببطء، تجنب الأودية، فحص إطارات السيارة</div>
    <div class="info-card"><b>💨 رياح عاصفة:</b> ابتعد عن الأشجار والإعلانات، أمّن الأشياء المتحركة</div>
  </div>`;
}

function infoRights(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('حقوق المواطن والمستهلك','Citizen & Consumer Rights')}</h3>
    ${['🔒 الحق في الخصوصية وحماية البيانات الشخصية','📋 الحق في عقد واضح عند الشراء أو التوظيف','↩️ الحق في إرجاع منتج معيب خلال المدة القانونية','⚖️ الحق في التقاضي العادل أمام القضاء','🏥 الحق في الرعاية الصحية الطارئة','📚 الحق في التعليم والمعلومات','🧾 الحق في فاتورة واضحة ومفصّلة لكل خدمة'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoGovServices(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('خدمات حكومية إلكترونية','Online Government Services')}</h3>
    <div class="info-card"><b>🇸🇦 السعودية:</b> Absher (أبشر) - جميع الخدمات الحكومية</div>
    <div class="info-card"><b>🇪🇬 مصر:</b> بوابة مصر الرقمية - egov.eg</div>
    <div class="info-card"><b>🇦🇪 الإمارات:</b> UAE Pass - هوية رقمية موحدة</div>
    <div class="tip-box">${t('تأكد دائماً من الدخول للمواقع الرسمية الحكومية فقط','Always ensure you access official government websites only')}</div>
  </div>`;
}

function infoLetters(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('كيفية كتابة خطاب رسمي','How to Write a Formal Letter')}</h3>
    <div class="info-card"><b>1. البيانات:</b> اسمك وعنوانك في الأعلى الأيمن، ثم التاريخ</div>
    <div class="info-card"><b>2. المستلم:</b> اسم المسؤول والجهة والعنوان</div>
    <div class="info-card"><b>3. التحية:</b> "تحية طيبة وبعد" أو "معالي الوزير/السيد المحترم"</div>
    <div class="info-card"><b>4. الموضوع:</b> اكتبه بخط عريض "الموضوع: ..."</div>
    <div class="info-card"><b>5. جسم الخطاب:</b> فقرة مقدمة، ثم التفاصيل، ثم المطلوب</div>
    <div class="info-card"><b>6. الختام:</b> "وتفضّلوا بقبول فائق الاحترام والتقدير" ثم التوقيع</div>
  </div>`;
}

function infoDriving(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح قيادة آمنة','Safe Driving Tips')}</h3>
    ${['🚦 احترم إشارات المرور والسرعات المحددة','📱 لا تستخدم الهاتف أثناء القيادة','🛞 حافظ على مسافة أمان كافية','💡 فحص الإطارات والسائل شهرياً','😴 لا تقد وأنت نعسان - توقف واستراح','🌧️ قلّل السرعة في الأمطار والضباب','🔦 تأكد من عمل جميع الأضواء'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoMental(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح الصحة النفسية','Mental Wellness Tips')}</h3>
    ${['🧘 مارس التأمل ولو 5 دقائق يومياً','🌿 اخرج للطبيعة - الهواء الطلق يجدد الطاقة','💬 شارك مشاعرك مع شخص تثق به','📵 ابتعد عن وسائل التواصل الاجتماعي أوقات محددة','🎯 ركّز على ما بيدك لا ما لا تتحكم فيه','🙏 الامتنان يومياً يغير منظورك للحياة','⚕️ طلب المساعدة المتخصصة شجاعة وليس ضعفاً'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoSafety(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('الأمان الشخصي','Personal Safety Tips')}</h3>
    ${['👁️ انتبه لمحيطك دائماً - ابتعد عن الهاتف في الأماكن العامة','📍 شارك موقعك مع شخص تثق به عند ذهابك لمكان جديد','🔑 استخدم كلمات مرور قوية ومختلفة لكل حساب','📱 لا تشارك معلومات شخصية مع غرباء على الإنترنت','💳 تحقق من فواتير بطاقتك البنكية بانتظام','🚗 افتح السيارة وأنت قريب منها، تحقق من الداخل'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoEntrepreneurship(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('ريادة الأعمال - خطوات البداية','Entrepreneurship - Starting Steps')}</h3>
    <div class="info-card"><b>1️⃣ الفكرة:</b> حدد مشكلة وقدّم حلاً - الفكرة الجيدة تحل مشكلة حقيقية</div>
    <div class="info-card"><b>2️⃣ السوق:</b> من هم عملاؤك؟ ما حجم السوق؟ من منافسوك؟</div>
    <div class="info-card"><b>3️⃣ النموذج:</b> كيف ستحقق الإيراد؟ ما هيكل التكاليف؟</div>
    <div class="info-card"><b>4️⃣ MVP:</b> ابدأ بأبسط نسخة من منتجك واختبرها</div>
    <div class="info-card"><b>5️⃣ التمويل:</b> ادّخار شخصي، شركاء، مستثمرون، تمويل جماعي</div>
    <div class="info-card"><b>6️⃣ التسجيل القانوني:</b> سجّل نشاطك التجاري وأخذ التراخيص اللازمة</div>
  </div>`;
}

function infoIslamicManners(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('آداب إسلامية يومية','Daily Islamic Etiquette')}</h3>
    ${['بسم الله عند بدء أي عمل','الحمد لله بعد كل نعمة','السلام عند الدخول والخروج','قل الاستئذان قبل دخول البيت','كُل بيمينك واشرب وأنت جالس','غضّ البصر وحفظ اللسان','برّ الوالدين وصلة الرحم','الصدقة ولو بالكلمة الطيبة'].map(i=>`<div class="info-card">🤲 ${i}</div>`).join('')}
  </div>`;
}

function infoReading(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('مهارات القراءة الفعّالة','Effective Reading Skills')}</h3>
    ${['📖 اقرأ الفهرس والمقدمة أولاً لتعرف هيكل الكتاب','✏️ ضع خطاً تحت الجمل المهمة وسجّل ملاحظاتك','🔄 اقرأ بنية ومخصصاً وقتاً يومياً ثابتاً','💡 توقف بعد كل فصل وتساءل: ماذا تعلمت؟','🗣️ شارك ما قرأته مع الآخرين لتثبيته','📝 لخّص الكتاب بكلماتك الخاصة بعد إنهائه'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoStudy(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('أساليب الدراسة المثبتة علمياً','Scientifically Proven Study Techniques')}</h3>
    <div class="info-card"><b>🍅 بومودورو:</b> 25 دقيقة تركيز + 5 راحة × 4 جولات</div>
    <div class="info-card"><b>🔄 التكرار المتباعد:</b> راجع المعلومة بعد يوم، أسبوع، شهر</div>
    <div class="info-card"><b>✏️ الاختبار الذاتي:</b> اختبر نفسك بدلاً من القراءة المتكررة</div>
    <div class="info-card"><b>🗣️ التعليم:</b> علّم غيرك ما تعلّمته - أفضل طريقة للحفظ</div>
    <div class="info-card"><b>🖊️ الكتابة:</b> اكتب الملخصات بخطّ يدك لا الطباعة</div>
    <div class="info-card"><b>😴 النوم الكافي:</b> الدماغ يحفظ المعلومات أثناء النوم</div>
  </div>`;
}

function infoCalendar(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('الأشهر الهجرية','Islamic Months')}</h3>
    <table class="info-table"><tr><th>#</th><th>${t('الشهر','Month')}</th><th>${t('ملاحظة','Note')}</th></tr>
    ${[['1','محرم','أول أشهر السنة الهجرية'],['2','صفر',''],['3','ربيع الأول','مولد النبي ﷺ'],['4','ربيع الثاني',''],['5','جمادى الأولى',''],['6','جمادى الآخرة',''],['7','رجب','شهر الإسراء والمعراج'],['8','شعبان',''],['9','رمضان','شهر الصيام الكريم'],['10','شوال','عيد الفطر'],['11','ذو القعدة',''],['12','ذو الحجة','موسم الحج وعيد الأضحى']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoShortcuts(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('اختصارات لوحة المفاتيح الشائعة','Common Keyboard Shortcuts')}</h3>
    <table class="info-table"><tr><th>${t('الاختصار','Shortcut')}</th><th>${t('الوظيفة','Function')}</th></tr>
    ${[['Ctrl+C','نسخ'],['Ctrl+V','لصق'],['Ctrl+Z','تراجع'],['Ctrl+S','حفظ'],['Ctrl+A','تحديد الكل'],['Ctrl+F','بحث'],['Alt+Tab','تبديل النوافذ'],['Ctrl+W','إغلاق التبويب'],['F5','تحديث الصفحة'],['Win+D','سطح المكتب']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoHtmlEntities(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('رموز HTML الشائعة','Common HTML Entities')}</h3>
    <table class="info-table"><tr><th>${t('الرمز','Symbol')}</th><th>HTML Entity</th></tr>
    ${[['&amp;','&amp;amp;'],['&lt;','&amp;lt;'],['&gt;','&amp;gt;'],['&copy;','&amp;copy;'],['&reg;','&amp;reg;'],['&trade;','&amp;trade;'],['&nbsp;','&amp;nbsp;'],['&hearts;','&amp;hearts;'],['&euro;','&amp;euro;']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoDigiSec(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('الأمان الرقمي','Digital Security Tips')}</h3>
    ${['🔐 استخدم كلمات مرور طويلة ومعقدة (12+ حرف)','🔄 لا تعيد استخدام نفس كلمة المرور','📱 فعّل المصادقة الثنائية (2FA) دائماً','📧 تحقق من المرسل قبل فتح أي رابط أو مرفق','🛡️ حدّث نظام التشغيل والتطبيقات باستمرار','📶 تجنب الواي فاي العام للعمليات المصرفية','🔒 استخدم VPN عند الاتصال بشبكات عامة','💾 احتفظ بنسخ احتياطية لبياناتك المهمة'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

function infoHttpStatus(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('رموز حالة HTTP','HTTP Status Codes')}</h3>
    <table class="info-table"><tr><th>${t('الكود','Code')}</th><th>${t('المعنى','Meaning')}</th></tr>
    ${[['200','OK - نجاح'],['201','Created - تم الإنشاء'],['301','Moved - تم النقل دائماً'],['400','Bad Request - طلب خاطئ'],['401','Unauthorized - غير مصرح'],['403','Forbidden - ممنوع'],['404','Not Found - غير موجود'],['500','Server Error - خطأ في الخادم'],['503','Service Unavailable - الخدمة معطلة']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoUnicode(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('رموز Unicode مفيدة','Useful Unicode Symbols')}</h3>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem">
      ${['✓','✗','★','☆','♥','♦','♠','♣','©','®','™','°','±','×','÷','→','←','↑','↓','∞','≈','≠','≤','≥','√','π','Σ','μ','α','β','ω'].map(s=>`<span class="chip" style="font-size:1.1rem;cursor:pointer" onclick="navigator.clipboard?.writeText('${s}')">${s}</span>`).join('')}
    </div>
    <p class="result-note" style="margin-top:.5rem">${t('انقر على الرمز لنسخه','Click a symbol to copy it')}</p>
  </div>`;
}

function infoRegex(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('أنماط Regex الشائعة','Common Regex Patterns')}</h3>
    <table class="info-table"><tr><th>${t('النمط','Pattern')}</th><th>${t('الوصف','Description')}</th></tr>
    ${[['^\\\\d+$','أرقام فقط'],['[a-zA-Z]+','حروف إنجليزية فقط'],['\\\\S+@\\\\S+\\\\.\\\\S+','بريد إلكتروني مبسط'],['https?://\\\\S+','رابط URL'],['\\\\d{4}-\\\\d{2}-\\\\d{2}','تاريخ YYYY-MM-DD'],['\\\\+?[\\\\d\\\\s]{7,15}','رقم هاتف'],['[\\\\u0600-\\\\u06FF]+','نص عربي']].map(r=>`<tr>${r.map(c=>`<td><code>${c}</code></td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoPunctuation(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('علامات الترقيم العربية','Arabic Punctuation Marks')}</h3>
    <table class="info-table"><tr><th>${t('العلامة','Mark')}</th><th>${t('الاسم','Name')}</th><th>${t('الاستخدام','Use')}</th></tr>
    ${[['،','الفاصلة','الفصل بين أجزاء الجملة'],['؛','الفاصلة المنقوطة','الفصل بين الجمل المترابطة'],['؟','علامة الاستفهام','نهاية السؤال'],['!','علامة التعجب','التعجب والانفعال'],['…','النقاط الثلاث','الحذف أو التردد'],['«»','علامات التنصيص','الاقتباس'],['()','القوسان','الشرح والتفسير']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
}

function infoWritingGuide(el) {
  el.innerHTML = `<div class="info-section"><h3>${t('نصائح الكتابة الاحترافية','Professional Writing Tips')}</h3>
    ${['✍️ اكتب فكرة رئيسية واحدة في كل فقرة','🎯 ابدأ بالجوهر - لا تجعل القارئ ينتظر','🔄 اقرأ ما كتبته بصوت عالٍ - هذا يكشف الأخطاء','✂️ احذف كل كلمة لا تضيف معنى','💬 استخدم الجمل القصيرة للأفكار المعقدة','🖋️ تجنب الغموض - كن محدداً وواضحاً','📖 اقرأ كثيراً - القراءة تحسن الكتابة تلقائياً'].map(i=>`<div class="info-card">${i}</div>`).join('')}
  </div>`;
}

/* ===================================
   8️⃣ الألعاب
   =================================== */
function renderGame(tool, el) {
  const games = {
    guess: () => gameGuess(el),
    memory: () => gameMemory(el),
    trivia: () => gameTrivia(el),
    quiz: () => gameTrivia(el),
    iqtest: () => gameIQ(el),
    wordassoc: () => gameWordAssoc(el),
    riddles: () => gameRiddles(el),
    truefalse: () => gameTrueFalse(el),
    mathsprint: () => gameMathSprint(el),
    wordgame: () => gameWordGame(el),
  };
  const fn = games[tool.fn];
  if (fn) fn();
  else gameTrivia(el);
}

function gameGuess(el) {
  let secret = Math.floor(Math.random() * 100) + 1;
  let tries = 0;
  el.innerHTML = `<div class="game-area">
    <div class="game-score" id="guessScore">${t('خمّن رقماً من 1 إلى 100','Guess a number 1-100')}</div>
    <div class="flex-row" style="justify-content:center">
      <input class="form-input" id="guessInput" type="number" min="1" max="100" style="width:100px;text-align:center;font-size:1.5rem">
      <button class="btn-primary" id="guessBtn" style="width:auto">${t('خمّن','Guess')}</button>
    </div>
    <div class="game-feedback" id="guessFeedback" style="margin-top:.75rem"></div>
    <button class="btn-secondary" id="guessReset" style="margin-top:.75rem">${t('لعبة جديدة','New Game')}</button>
  </div>`;
  const score = el.querySelector('#guessScore');
  const input = el.querySelector('#guessInput');
  const feedback = el.querySelector('#guessFeedback');
  const guess = () => {
    const num = +input.value;
    tries++;
    if (num === secret) { feedback.innerHTML = `<span class="success-text">🎉 ${t('صحيح! في','Correct! In')} ${tries} ${t('محاولات','tries')}</span>`; score.textContent = t('مبروك!','Congratulations!'); }
    else if (num < secret) { feedback.textContent = t('⬆️ الرقم أكبر!','⬆️ Higher!'); }
    else { feedback.textContent = t('⬇️ الرقم أصغر!','⬇️ Lower!'); }
    score.textContent = `${t('محاولة','Try')} #${tries}`;
  };
  el.querySelector('#guessBtn').onclick = guess;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') guess(); });
  el.querySelector('#guessReset').onclick = () => { secret = Math.floor(Math.random() * 100) + 1; tries = 0; input.value = ''; feedback.textContent = ''; score.textContent = t('خمّن رقماً من 1 إلى 100','Guess a number 1-100'); };
}

function gameMemory(el) {
  let sequence = [], userSeq = [], step = 0;
  el.innerHTML = `<div class="game-area">
    <div class="game-score" id="memScore">${t('مستوى: 1','Level: 1')}</div>
    <div class="game-question" id="memDisplay" style="letter-spacing:.2em;font-family:monospace"></div>
    <div class="timer-controls">
      <button class="btn-timer btn-start" id="memStart">${t('ابدأ','Start')}</button>
    </div>
    <div id="memInput" style="display:none;margin-top:.75rem">
      <input class="form-input" id="memAnswer" type="text" placeholder="${t('أدخل التسلسل...','Enter sequence...')}" style="text-align:center">
      <button class="btn-primary" id="memCheck" style="margin-top:.5rem">${t('تحقق','Check')}</button>
    </div>
    <div class="game-feedback" id="memFeedback"></div>
  </div>`;
  const display = el.querySelector('#memDisplay');
  const score = el.querySelector('#memScore');
  const feedback = el.querySelector('#memFeedback');
  el.querySelector('#memStart').onclick = () => {
    sequence = Array.from({length: 5 + step}, () => Math.floor(Math.random() * 10));
    display.textContent = sequence.join(' ');
    feedback.textContent = '';
    setTimeout(() => {
      display.textContent = '? '.repeat(sequence.length).trim();
      el.querySelector('#memInput').style.display = 'block';
      el.querySelector('#memAnswer').focus();
    }, 2500);
  };
  el.querySelector('#memCheck').onclick = () => {
    const ans = el.querySelector('#memAnswer').value.replace(/\s+/g,'').split('').map(Number);
    const correct = ans.join('') === sequence.join('');
    if (correct) { step++; score.textContent = `${t('مستوى','Level')}: ${step + 1}`; feedback.innerHTML = `<span class="success-text">✅ ${t('صحيح! استمر','Correct! Keep going')}</span>`; el.querySelector('#memInput').style.display = 'none'; el.querySelector('#memAnswer').value = ''; }
    else { feedback.innerHTML = `<span class="danger-text">❌ ${t('خطأ! التسلسل كان:','Wrong! Sequence was:')} ${sequence.join(' ')}</span>`; step = 0; score.textContent = `${t('مستوى','Level')}: 1`; el.querySelector('#memInput').style.display = 'none'; el.querySelector('#memAnswer').value = ''; }
  };
}

function gameTrivia(el) {
  const questions = [
    { q: 'ما عاصمة المملكة العربية السعودية؟', opts: ['الرياض','جدة','مكة','الدمام'], a: 0 },
    { q: 'كم عدد الكواكب في المجموعة الشمسية؟', opts: ['7','8','9','10'], a: 1 },
    { q: 'ما هو أكبر محيط في العالم؟', opts: ['الأطلنطي','الهندي','الهادئ','المتجمد الشمالي'], a: 2 },
    { q: 'من هو مؤسس شركة Apple؟', opts: ['بيل غيتس','ستيف جوبز','إيلون ماسك','مارك زوكربيرغ'], a: 1 },
    { q: 'ما هي أطول نهر في العالم؟', opts: ['الأمازون','المسيسيبي','النيل','الصين الأصفر'], a: 2 },
    { q: 'كم عدد أيام السنة الكبيسة؟', opts: ['365','366','364','368'], a: 1 },
    { q: 'ما هو الرمز الكيميائي للذهب؟', opts: ['Go','Gd','Au','Ag'], a: 2 },
    { q: 'في أي سنة هجرية توفي النبي محمد ﷺ؟', opts: ['سنة 10','سنة 11','سنة 12','سنة 9'], a: 1 },
    { q: 'ما هي أصغر دولة في العالم؟', opts: ['موناكو','الفاتيكان','سان مارينو','لخنشتاين'], a: 1 },
    { q: 'ما هو قانون نيوتن الثاني؟', opts: ['F=mc²','F=ma','E=hv','V=IR'], a: 1 },
  ];
  let current = 0, score = 0;
  const shuffle = () => questions.sort(() => Math.random() - 0.5);
  shuffle();
  const show = () => {
    const q = questions[current % questions.length];
    el.innerHTML = `<div class="game-area">
      <div class="game-score">${t('النقاط','Score')}: ${score} | ${t('سؤال','Q')} ${(current % questions.length) + 1}/10</div>
      <div class="game-question">${q.q}</div>
      <div class="game-options">
        ${q.opts.map((opt,i) => `<button class="game-opt" data-i="${i}">${opt}</button>`).join('')}
      </div>
      <div class="game-feedback" id="tf"></div>
    </div>`;
    el.querySelectorAll('.game-opt').forEach(btn => {
      btn.onclick = () => {
        const correct = +btn.dataset.i === q.a;
        if (correct) { score++; btn.classList.add('correct'); }
        else { btn.classList.add('wrong'); el.querySelectorAll('.game-opt')[q.a].classList.add('correct'); }
        el.querySelectorAll('.game-opt').forEach(b => b.disabled = true);
        el.querySelector('#tf').innerHTML = correct ? `<span class="success-text">✅ ${t('صحيح!','Correct!')}</span>` : `<span class="danger-text">❌ ${t('الإجابة:','Answer:')} ${q.opts[q.a]}</span>`;
        current++;
        setTimeout(() => { if (current % questions.length === 0) { el.innerHTML = `<div class="game-area text-center"><div class="game-score">🎉</div><div class="game-question">${t('النتيجة النهائية','Final Score')}: ${score}/10</div><button class="btn-primary" id="restartQ">${t('العب مجدداً','Play Again')}</button></div>`; el.querySelector('#restartQ').onclick = () => { score = 0; current = 0; shuffle(); show(); }; } else show(); }, 1200);
      };
    });
  };
  show();
}

function gameIQ(el) {
  const questions = [
    { q: '2, 4, 8, 16, ?', opts: ['24','28','30','32'], a: 3 },
    { q: 'أي شكل يختلف عن الباقي؟ مثلث - مربع - دائرة - معيّن', opts: ['مثلث','مربع','دائرة','معيّن'], a: 2, note:'الدائرة ليس لها أضلاع' },
    { q: '1, 1, 2, 3, 5, 8, ?', opts: ['11','12','13','14'], a: 2 },
    { q: 'إذا كان A=1, B=2, C=3... فما قيمة Z؟', opts: ['24','25','26','27'], a: 2 },
    { q: '100 - 3 × 5 = ?', opts: ['475','85','95','15'], a: 1 },
  ];
  gameTrivia(el); // استخدام نفس منطق التريفيا
}

function gameTrueFalse(el) {
  const questions = [
    { q: 'الماء يغلي عند 90 درجة مئوية', a: false },
    { q: 'النيل أطول نهر في العالم', a: true },
    { q: 'القرآن الكريم نزل خلال 20 سنة', a: false, note: '23 سنة' },
    { q: 'الفيل أكبر حيوان بري في العالم', a: true },
    { q: 'الشمس نجم', a: true },
    { q: 'الأرض هي الكوكب الأقرب للشمس', a: false, note: 'عطارد هو الأقرب' },
    { q: 'الصين أكبر دولة من حيث المساحة', a: false, note: 'روسيا الأكبر' },
    { q: 'يوجد 26 حرفاً في اللغة الإنجليزية', a: true },
  ];
  let current = 0, score = 0;
  const show = () => {
    if (current >= questions.length) {
      el.innerHTML = `<div class="game-area text-center"><div class="game-score">🎉</div><div class="game-question">${t('النتيجة','Score')}: ${score}/${questions.length}</div><button class="btn-primary" id="restartTF">${t('العب مجدداً','Play Again')}</button></div>`;
      el.querySelector('#restartTF').onclick = () => { score = 0; current = 0; show(); };
      return;
    }
    const q = questions[current];
    el.innerHTML = `<div class="game-area">
      <div class="game-score">${score}/${questions.length}</div>
      <div class="game-question">${q.q}</div>
      <div class="flex-row" style="justify-content:center;gap:1rem">
        <button class="btn-timer" style="background:var(--success);color:#fff;padding:.75rem 2rem;font-size:1.1rem" id="tfTrue">✅ ${t('صحيح','True')}</button>
        <button class="btn-timer" style="background:var(--danger);color:#fff;padding:.75rem 2rem;font-size:1.1rem" id="tfFalse">❌ ${t('خطأ','False')}</button>
      </div>
      <div class="game-feedback" id="tfFb"></div>
    </div>`;
    const check = (ans) => {
      const correct = ans === q.a;
      if (correct) score++;
      el.querySelector('#tfFb').innerHTML = correct ? `<span class="success-text">✅ ${t('إجابة صحيحة!','Correct!')}</span>` : `<span class="danger-text">❌ ${t('خطأ! الإجابة: ','Wrong! Answer: ')}${q.a ? t('صحيح','True') : t('خطأ','False')} ${q.note ? `(${q.note})` : ''}</span>`;
      el.querySelector('#tfTrue').disabled = true; el.querySelector('#tfFalse').disabled = true;
      current++;
      setTimeout(show, 1500);
    };
    el.querySelector('#tfTrue').onclick = () => check(true);
    el.querySelector('#tfFalse').onclick = () => check(false);
  };
  show();
}

function gameMathSprint(el) {
  let score = 0, timeLeft = 30;
  const generate = () => {
    const ops = ['+','-','×'];
    const op = ops[Math.floor(Math.random() * 3)];
    const a = Math.floor(Math.random() * 20) + 1;
    const b = Math.floor(Math.random() * (op === '-' ? a : 20)) + 1;
    const ans = op === '+' ? a+b : op === '-' ? a-b : a*b;
    return { q: `${a} ${op} ${b} = ?`, ans };
  };
  let current = generate();
  el.innerHTML = `<div class="game-area">
    <div class="flex-row" style="justify-content:space-between"><span class="game-score">${t('نقاط','Score')}: <span id="msScore">0</span></span><span class="game-score">${t('الوقت','Time')}: <span id="msTime">30</span>s</span></div>
    <div class="game-question" id="msQ">${current.q}</div>
    <div class="flex-row" style="justify-content:center">
      <input class="form-input" id="msAns" type="number" style="width:100px;text-align:center;font-size:1.3rem" autofocus>
      <button class="btn-primary" id="msCheck" style="width:auto">${t('✓','✓')}</button>
    </div>
    <div class="game-feedback" id="msFb"></div>
  </div>`;
  const timer = setInterval(() => {
    timeLeft--;
    el.querySelector('#msTime').textContent = timeLeft;
    if (timeLeft <= 0) { clearInterval(timer); el.querySelector('#msQ').textContent = t(`انتهى! نقاطك: ${score}`,`Game over! Score: ${score}`); el.querySelector('#msAns').disabled = true; el.querySelector('#msCheck').disabled = true; }
  }, 1000);
  APP.timers.ms = timer;
  const check = () => {
    const ans = +el.querySelector('#msAns').value;
    if (ans === current.ans) { score++; el.querySelector('#msScore').textContent = score; el.querySelector('#msFb').innerHTML = `<span class="success-text">✅</span>`; }
    else { el.querySelector('#msFb').innerHTML = `<span class="danger-text">❌ ${current.ans}</span>`; }
    current = generate(); el.querySelector('#msQ').textContent = current.q; el.querySelector('#msAns').value = ''; el.querySelector('#msAns').focus();
  };
  el.querySelector('#msCheck').onclick = check;
  el.querySelector('#msAns').addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
}

function gameRiddles(el) {
  const riddles = [
    { q: 'أنا كثيرة بلا عدد، وصغيرة بلا حجم، أضيء الليل وأُعمي النظر. ما أنا؟', a: 'النجوم' },
    { q: 'كلما أخذت منه كبر. ما هو؟', a: 'الحفرة' },
    { q: 'له أسنان ولا يعضّ. ما هو؟', a: 'المشط' },
    { q: 'كلما تحرك صمت، وإذا وقف تكلم. ما هو؟', a: 'القلم' },
    { q: 'لي رأس بلا عقل، وذيل بلا حركة. ما أنا؟', a: 'العملة المعدنية' },
  ];
  let idx = Math.floor(Math.random() * riddles.length);
  let revealed = false;
  const show = () => {
    const r = riddles[idx];
    el.innerHTML = `<div class="game-area">
      <div class="game-question">${r.q}</div>
      <button class="btn-secondary" id="showAns">${t('اكشف الإجابة','Reveal Answer')}</button>
      <div class="game-feedback" id="riddleAns" style="display:none;font-size:1.3rem;color:var(--success)">💡 ${r.a}</div>
      <button class="btn-timer btn-start" id="nextRiddle" style="margin-top:.75rem">${t('لغز آخر','Next Riddle')}</button>
    </div>`;
    el.querySelector('#showAns').onclick = () => { el.querySelector('#riddleAns').style.display = 'block'; };
    el.querySelector('#nextRiddle').onclick = () => { idx = (idx + 1) % riddles.length; show(); };
  };
  show();
}

function gameWordAssoc(el) {
  const chains = ['شمس → نور → قمر → ليل → نجوم', 'مطر → نبات → ثمار → أكل → صحة', 'بيت → عائلة → محبة → قلب → إنسان'];
  let idx = 0;
  el.innerHTML = `<div class="game-area">
    <div class="game-question" id="waqQ">${chains[0]}</div>
    <div class="form-group"><input class="form-input" id="waqInput" placeholder="${t('أضف كلمة مرتبطة بآخر كلمة...','Add a word related to the last one...')}"></div>
    <button class="btn-primary" id="waqAdd">${t('أضف الكلمة','Add Word')}</button>
    <p class="result-note" style="margin-top:.5rem">${t('* لعبة ترفيهية - بنِ سلسلة كلمات مترابطة','* Fun game - build a chain of related words')}</p>
  </div>`;
  el.querySelector('#waqAdd').onclick = () => {
    const word = el.querySelector('#waqInput').value.trim();
    if (!word) return;
    const chain = el.querySelector('#waqQ').textContent;
    el.querySelector('#waqQ').textContent = chain + ' → ' + word;
    el.querySelector('#waqInput').value = '';
    el.querySelector('#waqInput').focus();
  };
}

function gameWordGame(el) {
  const words = ['كتاب','قلم','مدرسة','بيت','شجرة','سماء','بحر','جبل','نهر','فيل','أسد','قمر','شمس','نجمة','ورد'];
  let word = '', letters = [], score = 0;
  const start = () => {
    word = words[Math.floor(Math.random() * words.length)];
    letters = word.split('').sort(() => Math.random() - 0.5);
    el.querySelector('#wgLetters').textContent = letters.join(' ');
    el.querySelector('#wgInput').value = '';
    el.querySelector('#wgFb').textContent = '';
  };
  el.innerHTML = `<div class="game-area">
    <div class="game-score">${t('نقاط','Score')}: <span id="wgScore">0</span></div>
    <p style="color:var(--text2);margin-bottom:.5rem">${t('رتّب الحروف لتكوين كلمة عربية','Arrange letters to form an Arabic word')}</p>
    <div class="game-question" id="wgLetters"></div>
    <div class="flex-row" style="justify-content:center">
      <input class="form-input" id="wgInput" type="text" style="width:140px;text-align:center;font-size:1.2rem">
      <button class="btn-primary" id="wgCheck" style="width:auto">${t('تحقق','Check')}</button>
    </div>
    <div class="game-feedback" id="wgFb"></div>
    <button class="btn-secondary" id="wgSkip" style="margin-top:.5rem">${t('تخطِّ','Skip')}</button>
  </div>`;
  start();
  el.querySelector('#wgCheck').onclick = () => {
    const ans = el.querySelector('#wgInput').value.trim();
    const fb = el.querySelector('#wgFb');
    if (ans === word) { score++; el.querySelector('#wgScore').textContent = score; fb.innerHTML = `<span class="success-text">✅ ${t('صحيح!','Correct!')}</span>`; setTimeout(start, 1000); }
    else { fb.innerHTML = `<span class="danger-text">❌ ${t('حاول مجدداً','Try again')}</span>`; }
  };
  el.querySelector('#wgSkip').onclick = () => { el.querySelector('#wgFb').innerHTML = `<span class="danger-text">${t('الكلمة كانت:','Word was:')} ${word}</span>`; setTimeout(start, 1200); };
}

/* ===================================
   9️⃣ المولّدات
   =================================== */
function renderGen(tool, el) {
  const generators = {
    rand: () => genRandom(el),
    password: () => genPassword(el),
    strongpass: () => genPassword(el),
    uuid: () => genUuid(el),
    loremArabic: () => genLorem(el),
    proverbs: () => genProverbs(el),
    quotes: () => genQuotes(el),
    quotegen: () => genQuotes(el),
    dailyquote: () => genQuotes(el),
    jokes: () => genJokes(el),
    dailyjoke: () => genJokes(el),
    messages: () => genMessages(el),
    email: () => genEmail(el),
    story: () => genStory(el),
    storystarter: () => genStory(el),
    paragraph: () => genParagraph(el),
    arabicnames: () => genNames(el),
    fortune: () => genFortune(el),
    challenges: () => genChallenges(el),
    ideas: () => genIdeas(el),
    colorMood: () => genColorMood(el),
    invoiceGen: () => genInvoice(el),
    palette: () => genPalette(el),
    hash: () => genHash(el),
  };
  const fn = generators[tool.fn];
  if (fn) fn();
  else genRandom(el);
}

function genRandom(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('الحد الأدنى','Min'), 'rmin', 'number', '1')}
    ${formField(t('الحد الأقصى','Max'), 'rmax', 'number', '100')}
    ${formField(t('عدد الأرقام','Count'), 'rcount', 'number', '1')}
    <button class="btn-primary" id="randBtn">${t('ولّد رقم عشوائي','Generate Random')}</button>
    <div class="gen-output" id="randOut"></div>
  </div>`;
  el.querySelector('#randBtn').onclick = () => {
    const min = +el.querySelector('#rmin').value;
    const max = +el.querySelector('#rmax').value;
    const count = Math.min(+el.querySelector('#rcount').value || 1, 20);
    const nums = Array.from({length: count}, () => Math.floor(Math.random() * (max - min + 1)) + min);
    el.querySelector('#randOut').textContent = nums.join('\n');
  };
}

function genPassword(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('طول كلمة المرور','Password length'), 'pwLen', 'number', '16')}
    <div class="form-group">
      <label class="form-check"><input type="checkbox" id="pwUpper" checked> ${t('أحرف كبيرة (A-Z)','Uppercase (A-Z)')}</label>
      <label class="form-check"><input type="checkbox" id="pwLower" checked> ${t('أحرف صغيرة (a-z)','Lowercase (a-z)')}</label>
      <label class="form-check"><input type="checkbox" id="pwNum" checked> ${t('أرقام (0-9)','Numbers (0-9)')}</label>
      <label class="form-check"><input type="checkbox" id="pwSpec"> ${t('رموز خاصة (!@#$...)','Special chars (!@#$...)')}</label>
    </div>
    <button class="btn-primary" id="pwBtn">${t('ولّد كلمة مرور','Generate Password')}</button>
    <div class="gen-output" id="pwOut" style="font-family:monospace;font-size:1rem;letter-spacing:.05em;direction:ltr"></div>
    <button class="btn-copy" id="pwCopy" style="display:none">${t('📋 نسخ','📋 Copy')}</button>
  </div>`;
  el.querySelector('#pwBtn').onclick = () => {
    let chars = '';
    if (el.querySelector('#pwUpper').checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (el.querySelector('#pwLower').checked) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (el.querySelector('#pwNum').checked) chars += '0123456789';
    if (el.querySelector('#pwSpec').checked) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (!chars) return;
    const len = Math.min(+el.querySelector('#pwLen').value || 16, 64);
    const pw = Array.from({length: len}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    el.querySelector('#pwOut').textContent = pw;
    el.querySelector('#pwCopy').style.display = 'block';
    el.querySelector('#pwCopy').onclick = () => { navigator.clipboard?.writeText(pw); el.querySelector('#pwCopy').textContent = t('✅ تم النسخ','✅ Copied'); setTimeout(()=>el.querySelector('#pwCopy').textContent=t('📋 نسخ','📋 Copy'), 1500); };
  };
}

function genUuid(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('عدد UUIDs','Count'), 'uuidCount', 'number', '1')}
    <button class="btn-primary" id="uuidBtn">${t('ولّد UUID','Generate UUID')}</button>
    <div class="gen-output" id="uuidOut" style="font-family:monospace;font-size:.85rem;direction:ltr"></div>
  </div>`;
  el.querySelector('#uuidBtn').onclick = () => {
    const count = Math.min(+el.querySelector('#uuidCount').value || 1, 10);
    const uuids = Array.from({length: count}, () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    });
    el.querySelector('#uuidOut').textContent = uuids.join('\n');
  };
}

function genLorem(el) {
  const words = ['في هذا','المكان','نضع','نصاً','عشوائياً','يُستخدم','في','التصاميم','والواجهات','الرقمية','بدلاً','من','النص','الحقيقي','لملء','المساحات','الفارغة','واختبار','الشكل','العام','للصفحة','أو','التطبيق'];
  el.innerHTML = `<div class="tool-form">
    ${formSelect(t('النوع','Type'), 'loremType', [{ v:'word', l: t('كلمات','Words') }, { v:'sentence', l: t('جمل','Sentences') }, { v:'paragraph', l: t('فقرات','Paragraphs') }])}
    ${formField(t('العدد','Count'), 'loremCount', 'number', '5')}
    <button class="btn-primary" id="loremBtn">${t('ولّد نصاً','Generate Text')}</button>
    <div class="gen-output" id="loremOut"></div>
  </div>`;
  el.querySelector('#loremBtn').onclick = () => {
    const type = el.querySelector('#loremType').value;
    const count = Math.min(+el.querySelector('#loremCount').value || 5, 50);
    let result = '';
    if (type === 'word') result = Array.from({length: count}, () => words[Math.floor(Math.random() * words.length)]).join(' ');
    else if (type === 'sentence') result = Array.from({length: count}, () => Array.from({length: 8 + Math.floor(Math.random() * 8)}, () => words[Math.floor(Math.random() * words.length)]).join(' ') + '.').join(' ');
    else result = Array.from({length: count}, () => Array.from({length: 4 + Math.floor(Math.random() * 4)}, () => Array.from({length: 6 + Math.floor(Math.random() * 10)}, () => words[Math.floor(Math.random() * words.length)]).join(' ') + '.').join(' ')).join('\n\n');
    el.querySelector('#loremOut').textContent = result;
  };
}

function genProverbs(el) {
  const proverbs = [
    { ar: 'اللي بيتجوز على عينه يعيش سنين', en: 'He who chooses wisely lives well' },
    { ar: 'من تأنّى نال ما تمنّى', en: 'Patience brings success' },
    { ar: 'العقل زينة', en: 'A wise mind is an ornament' },
    { ar: 'الأيام دول', en: 'Days are ever changing' },
    { ar: 'قل الحق ولو على نفسك', en: 'Speak the truth even against yourself' },
    { ar: 'اسأل مجرّباً ولا تسأل طبيباً', en: 'Ask the experienced, not just the expert' },
    { ar: 'الوقت كالسيف إن لم تقطعه قطعك', en: 'Time like a sword; master it or it masters you' },
    { ar: 'خير الأمور أوسطها', en: 'The best of affairs is the moderate one' },
    { ar: 'من طلب العلا سهر الليالي', en: 'He who seeks greatness must lose sleep' },
    { ar: 'إذا كان الكلام من فضة فالصمت من ذهب', en: 'If speech is silver, silence is golden' },
  ];
  el.innerHTML = `<button class="btn-primary" id="provBtn" style="margin-bottom:.75rem">${t('مثل جديد','New Proverb')}</button>
    <div class="gen-output" id="provOut"></div>`;
  const show = () => {
    const p = proverbs[Math.floor(Math.random() * proverbs.length)];
    el.querySelector('#provOut').innerHTML = `<b style="font-size:1.1rem">${p.ar}</b><br><small style="color:var(--text2)">${p.en}</small>`;
  };
  show();
  el.querySelector('#provBtn').onclick = show;
}

function genQuotes(el) {
  const quotes = [
    { ar: '"العقل كالمظلة لا يعمل إلا وهو مفتوح" - توماس ديوار', en: '"The mind is like a parachute, it only works when open" - Thomas Dewar' },
    { ar: '"النجاح هو القدرة على الانتقال من فشل إلى فشل دون فقدان الحماس" - ونستون تشرشل', en: '"Success is going from failure to failure without losing enthusiasm" - Churchill' },
    { ar: '"أهدأ البحار لا تصنع بحاراً ماهراً"', en: '"Calm seas don\'t make skillful sailors"' },
    { ar: '"ابدأ من حيث أنت، استخدم ما لديك، افعل ما تستطيع" - أرثر آش', en: '"Start where you are, use what you have, do what you can" - Arthur Ashe' },
    { ar: '"الفشل هو فرصة للبدء من جديد بطريقة أكثر ذكاءً" - هنري فورد', en: '"Failure is the opportunity to begin again more intelligently" - Henry Ford' },
    { ar: '"إن كنت لا تعيش الطريقة التي تفكر بها، ستنتهي بالتفكير بالطريقة التي تعيش بها" - بول بورجيه', en: '"If you don\'t live the way you think, you\'ll think the way you live"' },
  ];
  el.innerHTML = `<button class="btn-primary" id="qBtn" style="margin-bottom:.75rem">${t('اقتباس جديد','New Quote')}</button>
    <div class="gen-output" id="qOut" style="font-size:.95rem;line-height:1.8"></div>`;
  const show = () => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    el.querySelector('#qOut').textContent = APP.lang === 'ar' ? q.ar : q.en;
  };
  show();
  el.querySelector('#qBtn').onclick = show;
}

function genJokes(el) {
  const jokes = [
    'ذهب رجل للطبيب وقال: "دكتور، أنسى كل شيء!" - قال الطبيب: "منذ متى؟" - قال: "منذ ماذا؟!"',
    'طالب يكتب في ورقة الامتحان: "الله يعلم، وأنا أعلم... وبعد التصحيح سيعلم أستاذي فقط!"',
    'سألت أمي: "لماذا تتكلم وأنت نائم؟" - قلت: "لأنك الوقت الوحيد الذي لا تقاطعيني فيه!"',
    'الطالب: "لن أنجح في الامتحان" - الأستاذ: "لماذا؟" - الطالب: "لأن الإجابات لم تصلني بعد!"',
    'سألت الذكاء الاصطناعي: "ما هو سر السعادة؟" - فقال: "ابحث عنها على جوجل"',
  ];
  el.innerHTML = `<button class="btn-primary" id="jokeBtn" style="margin-bottom:.75rem">${t('نكتة جديدة','New Joke')}</button>
    <div class="gen-output" id="jokeOut" style="font-size:.95rem;line-height:1.9"></div>`;
  const show = () => el.querySelector('#jokeOut').textContent = jokes[Math.floor(Math.random() * jokes.length)];
  show();
  el.querySelector('#jokeBtn').onclick = show;
}

function genMessages(el) {
  const occasions = {
    [t('تهنئة عيد','Eid Greetings')]: ['عيد مبارك وكل عام وأنتم بخير! أسأل الله أن يتقبل منا ومنكم.','تقبّل الله طاعتنا وطاعتكم، كل عام وأنتم بألف خير وصحة وسعادة.'],
    [t('شفاء عاجل','Get Well Soon')]: ['اللهم اشفِه شفاءً عاجلاً لا يغادر سقماً. سلامتك أهم شيء.','اللهم اكشف عنه الكرب وعافِه. نسأل الله لك الشفاء العاجل.'],
    [t('تهنئة زواج','Wedding')]: ['بالرفاء والبنين، كل الأمنيات الطيبة لكما بحياة سعيدة مليئة بالمحبة.','الف مبروك! أسأل الله أن يجعل زواجكما مباركاً وسعيداً.'],
    [t('مولود جديد','New Baby')]: ['مبروك المولود الجديد! أسأل الله أن يكون قرة عين وفرحاً للوالدين والجميع.'],
  };
  const keys = Object.keys(occasions);
  el.innerHTML = `<div class="tool-form">
    ${formSelect(t('المناسبة','Occasion'), 'msgOcc', keys.map(k => ({ v:k, l:k })))}
    <button class="btn-primary" id="msgBtn">${t('ولّد رسالة','Generate Message')}</button>
    <div class="gen-output" id="msgOut" style="line-height:1.8"></div>
  </div>`;
  el.querySelector('#msgBtn').onclick = () => {
    const occ = el.querySelector('#msgOcc').value;
    const msgs = occasions[occ];
    el.querySelector('#msgOut').textContent = msgs[Math.floor(Math.random() * msgs.length)];
  };
}

function genEmail(el) {
  const templates = {
    [t('طلب اجتماع','Meeting Request')]: `الموضوع: طلب اجتماع\n\nالسيد/السيدة [الاسم]،\n\nتحية طيبة وبعد،\n\nأودّ التواصل معكم لترتيب موعد اجتماع مناسب لمناقشة [الموضوع].\n\nأرجو إعلامي بالوقت المناسب لكم.\n\nمع التحية،\n[اسمك]`,
    [t('شكر وتقدير','Thank You')]: `الموضوع: شكر وتقدير\n\nالسيد/السيدة [الاسم]،\n\nأتقدم إليكم بخالص الشكر والتقدير على [السبب].\n\nدعمكم وتعاونكم كان له أثر كبير وأنا ممتن جداً لذلك.\n\nمع خالص الاحترام،\n[اسمك]`,
    [t('استفسار','Inquiry')]: `الموضوع: استفسار حول [الموضوع]\n\nإلى من يهمه الأمر،\n\nأرجو التكرم بإفادتي بمعلومات حول [الموضوع].\n\nمتى يمكنني الحصول على رد؟\n\nشكراً لكم،\n[اسمك]`,
  };
  const keys = Object.keys(templates);
  el.innerHTML = `<div class="tool-form">
    ${formSelect(t('نوع البريد','Email Type'), 'emailType', keys.map(k=>({v:k,l:k})))}
    <button class="btn-primary" id="emailBtn">${t('ولّد القالب','Generate Template')}</button>
    <textarea class="form-textarea" id="emailOut" rows="10" style="font-family:monospace;font-size:.85rem"></textarea>
  </div>`;
  el.querySelector('#emailBtn').onclick = () => {
    el.querySelector('#emailOut').value = templates[el.querySelector('#emailType').value];
  };
}

function genStory(el) {
  const chars = ['الصياد الشجاع','الأميرة الحكيمة','المسافر الغريب','الطفل الصغير','العالِم الكبير'];
  const places = ['في قرية نائية','على شاطئ بعيد','في غابة مجهولة','على قمة جبل شاهق','في مدينة عتيقة'];
  const events = ['اكتشف سراً مدهشاً','وجد كنزاً مخبوءاً','التقى بشخصية غريبة','واجه تحدياً صعباً','وقع في مغامرة لم يتوقعها'];
  el.innerHTML = `<button class="btn-primary" id="storyBtn" style="margin-bottom:.75rem">${t('ولّد بداية قصة','Generate Story Starter')}</button>
    <div class="gen-output" id="storyOut" style="font-size:.95rem;line-height:1.9"></div>`;
  el.querySelector('#storyBtn').onclick = () => {
    const char = chars[Math.floor(Math.random() * chars.length)];
    const place = places[Math.floor(Math.random() * places.length)];
    const event = events[Math.floor(Math.random() * events.length)];
    el.querySelector('#storyOut').textContent = `${char}، ${place}، ${event}. وبدأت القصة...`;
  };
}

function genParagraph(el) {
  const topics = [t('الصحة','Health'), t('التعليم','Education'), t('التكنولوجيا','Technology'), t('البيئة','Environment'), t('الأسرة','Family')];
  el.innerHTML = `<div class="tool-form">
    ${formSelect(t('الموضوع','Topic'), 'pgTopic', topics.map(k=>({v:k,l:k})))}
    <button class="btn-primary" id="pgBtn">${t('ولّد فقرة','Generate Paragraph')}</button>
    <div class="gen-output" id="pgOut" style="line-height:1.9"></div>
  </div>`;
  const paragraphs = {
    [t('الصحة','Health')]: 'تُعدّ الصحة الجيدة من أعظم النعم التي يمكن أن يحظى بها الإنسان في حياته. فمن خلال الحفاظ على نمط حياة صحي يشمل التغذية السليمة والنشاط البدني المنتظم والنوم الكافي، يستطيع المرء أن يرتقي بجودة حياته ويحافظ على طاقته وإنتاجيته على مدار اليوم.',
    [t('التعليم','Education')]: 'التعليم هو الركيزة الأساسية التي تقوم عليها الأمم والحضارات. فمن خلال الاستثمار في التعليم الجيد تُبنى العقول وتُصقل المهارات وتُطوَّر المجتمعات. فالتعليم ليس مجرد اكتساب معلومات، بل هو رحلة تشكيل شخصية الإنسان وتنمية قدراته على التفكير النقدي وحل المشكلات.',
    [t('التكنولوجيا','Technology')]: 'أحدثت التكنولوجيا ثورة شاملة في كافة جوانب الحياة الإنسانية المعاصرة. فمن الاتصالات إلى الطب إلى التعليم والترفيه، غيّرت الابتكارات التقنية الطريقة التي نعيش بها ونتفاعل مع بعضنا البعض ومع العالم من حولنا.',
    [t('البيئة','Environment')]: 'حماية البيئة مسؤولية يتشاركها جميع سكان كوكب الأرض. فالتغيرات المناخية وتلوث الهواء والماء وانقراض الأنواع الحيوانية تمثل تحديات جسيمة تستوجب تحركاً فورياً وجاداً على المستويين الفردي والجماعي.',
    [t('الأسرة','Family')]: 'الأسرة هي اللبنة الأساسية في بناء المجتمع، وهي الملاذ الأول والأهم للإنسان في مراحل حياته المختلفة. ففي كنف الأسرة يتعلم الطفل القيم والمبادئ ويكتسب الهوية والانتماء ويشعر بالأمان والحنان الذي يحتاجه لنمو صحي ومتوازن.',
  };
  el.querySelector('#pgBtn').onclick = () => {
    const topic = el.querySelector('#pgTopic').value;
    el.querySelector('#pgOut').textContent = paragraphs[topic] || paragraphs[t('الصحة','Health')];
  };
}

function genNames(el) {
  const maleNames = ['عبدالله','محمد','أحمد','علي','عمر','يوسف','إبراهيم','سعيد','خالد','زياد','ماجد','فهد','سلطان','راشد','ناصر'];
  const femaleNames = ['فاطمة','عائشة','مريم','نورة','سارة','هند','ريم','لينا','دانة','رنا','غادة','رندة','شهد','منال','علياء'];
  el.innerHTML = `<div class="tool-form">
    ${formSelect(t('الجنس','Gender'), 'nameGender', [{ v:'m', l: t('ذكر','Male') }, { v:'f', l: t('أنثى','Female') }, { v:'both', l: t('الاثنان','Both') }])}
    ${formField(t('العدد','Count'), 'nameCount', 'number', '5')}
    <button class="btn-primary" id="nameBtn">${t('ولّد أسماء','Generate Names')}</button>
    <div class="gen-output" id="nameOut"></div>
  </div>`;
  el.querySelector('#nameBtn').onclick = () => {
    const gender = el.querySelector('#nameGender').value;
    const count = Math.min(+el.querySelector('#nameCount').value || 5, 20);
    const pool = gender === 'm' ? maleNames : gender === 'f' ? femaleNames : [...maleNames, ...femaleNames];
    const names = Array.from({length: count}, () => pool[Math.floor(Math.random() * pool.length)]);
    el.querySelector('#nameOut').textContent = names.join('\n');
  };
}

function genFortune(el) {
  const fortunes = ['✨ اليوم سيكون يوماً مميزاً تحقق فيه شيئاً كنت تحلم به منذ زمن','🌟 الفرص تطرق بابك اليوم - افتح أعينك وانتبه لها','💪 إرادتك هي مفتاح نجاحك - لا شيء يوقفك اليوم','🤲 الصدقة والخير يعودان عليك مضاعفاً - ابدأ يومك بعمل طيب','🌈 كل غيمة لها فضة - الصعوبة التي تواجهها اليوم ستكون درساً عظيماً غداً','❤️ علاقاتك الإنسانية هي كنزك الحقيقي - أعطِ الآخرين من وقتك'];
  el.innerHTML = `<div class="text-center">
    <button class="btn-primary" id="fortBtn" style="margin-bottom:1rem">${t('اكشف رسالتك اليوم','Reveal Today\'s Message')}</button>
    <div class="gen-output" id="fortOut" style="font-size:1rem;line-height:1.9;display:none"></div>
  </div>`;
  el.querySelector('#fortBtn').onclick = () => {
    const f = fortunes[Math.floor(Math.random() * fortunes.length)];
    const out = el.querySelector('#fortOut');
    out.textContent = f; out.style.display = 'block';
    el.querySelector('#fortBtn').textContent = t('رسالة جديدة','New Message');
  };
}

function genChallenges(el) {
  const challenges = ['📚 اقرأ 20 صفحة من كتاب مفيد','💪 افعل 30 دقيقة رياضة اليوم','💧 اشرب 8 أكواب ماء على الأقل','📵 لا هاتف لمدة ساعة وتحدث مع عائلتك','✍️ اكتب 3 أشياء تشعر بالامتنان لها','🤝 ساعد شخصاً ما بدون انتظار مقابل','🌿 اخرج للطبيعة ولو لـ15 دقيقة','📞 تواصل مع شخص لم تره منذ وقت طويل','💡 تعلّم شيئاً جديداً واحداً اليوم'];
  el.innerHTML = `<button class="btn-primary" id="chalBtn" style="margin-bottom:.75rem">${t('تحدٍّ جديد','New Challenge')}</button>
    <div class="gen-output" id="chalOut"></div>`;
  const show = () => el.querySelector('#chalOut').textContent = challenges[Math.floor(Math.random() * challenges.length)];
  show();
  el.querySelector('#chalBtn').onclick = show;
}

function genIdeas(el) {
  const ideas = ['💡 ابدأ مشروعاً صغيراً في مجال اهتمامك','🎨 تعلّم مهارة إبداعية جديدة كالرسم أو الخط','📱 أنشئ محتوى رقمياً في موضوع تتقنه','🌱 ابدأ بستنة صغيرة في المنزل','📸 وثّق يومياتك بالصور والكتابة','🎵 تعلّم آلة موسيقية','🗣️ انضم لناد للخطابة أو النقاش','🏃 شارك في سباق خيري','📖 أسس نادي كتاب مع أصدقاء','✈️ خطط لرحلة إلى مكان لم تزره من قبل'];
  el.innerHTML = `<button class="btn-primary" id="ideaBtn" style="margin-bottom:.75rem">${t('فكرة جديدة','New Idea')}</button>
    <div class="gen-output" id="ideaOut"></div>`;
  const show = () => el.querySelector('#ideaOut').textContent = ideas[Math.floor(Math.random() * ideas.length)];
  show();
  el.querySelector('#ideaBtn').onclick = show;
}

function genColorMood(el) {
  const moods = [
    { color: '#ef4444', name: t('الأحمر - طاقة وحماس','Red - Energy & Passion'), desc: t('أنت مليء بالطاقة اليوم. استثمرها في شيء مهم!','You\'re full of energy today. Channel it into something important!') },
    { color: '#3b82f6', name: t('الأزرق - هدوء وتركيز','Blue - Calm & Focus'), desc: t('يوم مثالي للتفكير العميق والتخطيط.','Perfect day for deep thinking and planning.') },
    { color: '#16a34a', name: t('الأخضر - نمو وأمل','Green - Growth & Hope'), desc: t('الطبيعة والهدوء يشحنانك بالإيجابية.','Nature and calm recharge you positively.') },
    { color: '#f59e0b', name: t('الأصفر - إبداع وفرح','Yellow - Creativity & Joy'), desc: t('روحك مشرقة - أطلق إبداعك اليوم!','Your spirit is bright - unleash your creativity!') },
    { color: '#8b5cf6', name: t('البنفسجي - خيال وروحانية','Purple - Imagination & Spirit'), desc: t('يوم للتأمل والنظر في العمق.','A day for meditation and deep reflection.') },
  ];
  el.innerHTML = `<div class="text-center">
    <button class="btn-primary" id="moodBtn" style="margin-bottom:1rem">${t('اكتشف لون مزاجك','Find Your Mood Color')}</button>
    <div id="moodResult"></div>
  </div>`;
  el.querySelector('#moodBtn').onclick = () => {
    const mood = moods[Math.floor(Math.random() * moods.length)];
    el.querySelector('#moodResult').innerHTML = `
      <div style="width:120px;height:120px;border-radius:50%;background:${mood.color};margin:0 auto 1rem;box-shadow:0 8px 24px ${mood.color}44"></div>
      <h3 style="color:${mood.color};margin-bottom:.5rem">${mood.name}</h3>
      <p style="color:var(--text2);font-size:.9rem">${mood.desc}</p>`;
  };
}

function genInvoice(el) {
  el.innerHTML = `<div class="tool-form">
    ${formField(t('اسم العميل','Client Name'), 'invClient', 'text', '')}
    ${formField(t('الخدمة/المنتج','Service/Product'), 'invService', 'text', '')}
    ${formField(t('السعر','Price'), 'invPrice', 'number', '1000')}
    ${formField(t('الضريبة %','Tax %'), 'invTax', 'number', '15')}
    <button class="btn-primary" id="invGenBtn">${t('أنشئ الفاتورة','Generate Invoice')}</button>
    <div class="gen-output" id="invGenOut" style="font-family:monospace;font-size:.85rem;direction:rtl"></div>
  </div>`;
  el.querySelector('#invGenBtn').onclick = () => {
    const client = el.querySelector('#invClient').value || t('العميل','Client');
    const service = el.querySelector('#invService').value || t('الخدمة','Service');
    const price = +el.querySelector('#invPrice').value || 0;
    const taxRate = +el.querySelector('#invTax').value || 0;
    const tax = price * taxRate / 100;
    const total = price + tax;
    const date = new Date().toLocaleDateString('ar-SA');
    el.querySelector('#invGenOut').textContent = `
══════════════════════════
        فاتورة ضريبية
══════════════════════════
التاريخ: ${date}
رقم الفاتورة: INV-${Date.now().toString().slice(-6)}
──────────────────────────
العميل: ${client}
الخدمة: ${service}
──────────────────────────
المبلغ: ${fmt(price)}
ضريبة (${taxRate}%): ${fmt(tax)}
──────────────────────────
الإجمالي: ${fmt(total)}
══════════════════════════
    `.trim();
  };
}

function genPalette(el) {
  el.innerHTML = `<div class="tool-form">
    ${formSelect(t('نوع التدرج','Palette Type'), 'palType', [
      { v:'warm', l: t('دافئة','Warm') }, { v:'cool', l: t('باردة','Cool') },
      { v:'earth', l: t('ترابية','Earthy') }, { v:'pastel', l: t('باستيل','Pastel') }
    ])}
    <button class="btn-primary" id="palBtn">${t('ولّد لوحة ألوان','Generate Palette')}</button>
    <div id="palOut" style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.75rem"></div>
  </div>`;
  const palettes = {
    warm: ['#ff6b6b','#ff8e53','#feb421','#ff4757','#ff6348'],
    cool: ['#1e90ff','#00b4d8','#90e0ef','#48cae4','#0077b6'],
    earth: ['#8b5e3c','#b87333','#d2691e','#a0785a','#c68642'],
    pastel: ['#ffc8dd','#ffafcc','#bde0fe','#a2d2ff','#cdb4db'],
  };
  el.querySelector('#palBtn').onclick = () => {
    const type = el.querySelector('#palType').value;
    const colors = palettes[type];
    el.querySelector('#palOut').innerHTML = colors.map(c => `
      <div style="flex:1;min-width:60px;height:70px;border-radius:8px;background:${c};display:flex;align-items:flex-end;justify-content:center;padding:.3rem;cursor:pointer" onclick="navigator.clipboard?.writeText('${c}')" title="${t('انقر للنسخ','Click to copy')}">
        <span style="font-size:.65rem;color:#fff;background:rgba(0,0,0,.4);padding:.1rem .3rem;border-radius:4px">${c}</span>
      </div>`).join('');
  };
}

function genHash(el) {
  el.innerHTML = `<div class="tool-form">
    <div class="form-group"><label class="form-label">${t('النص المراد تشفيره','Text to hash')}</label><textarea class="form-textarea" id="hashIn" rows="3"></textarea></div>
    <button class="btn-primary" id="hashBtn">${t('ولّد Hash','Generate Hash')}</button>
    <div class="gen-output" id="hashOut" style="font-family:monospace;font-size:.85rem;direction:ltr;word-break:break-all"></div>
    <div class="tip-box">${t('* هذا تشفير مبسط للعرض فقط - ليس SHA أو MD5 حقيقي','* This is a simplified hash for demo only - not real SHA/MD5')}</div>
  </div>`;
  el.querySelector('#hashBtn').onclick = () => {
    const text = el.querySelector('#hashIn').value;
    let h = 0;
    for (let i = 0; i < text.length; i++) { h = (Math.imul(31, h) + text.charCodeAt(i)) | 0; }
    const hash = (h >>> 0).toString(16).padStart(8, '0');
    const hash2 = Array.from({length: 32}, (_, i) => ((h * (i+1)) ^ text.charCodeAt(i % text.length || 0)).toString(16).slice(-2)).join('');
    el.querySelector('#hashOut').textContent = `Simple: ${hash}\nDemo Hash: ${hash2}`;
  };
}

/* ===================================
   🔟 متتبع العناصر
   =================================== */
function renderTrack(tool, el) {
  const key = 'track_' + tool.fn;
  let items = lsGet(key) || [];

  const trackTypes = {
    weight: { unit: 'kg', label: t('الوزن','Weight'), icon: '⚖️', format: v => `${v} kg` },
    habits: { unit: '', label: t('العادة','Habit'), icon: '✅', format: v => v },
    goals: { unit: '', label: t('الهدف','Goal'), icon: '🎯', format: v => v },
    timelog: { unit: 'ساعة', label: t('المهمة','Task'), icon: '⏱️', format: (v, u) => `${v} ${u}` },
    expenses: { unit: '', label: t('النفقة','Expense'), icon: '💸', format: v => `${fmt(v)}` },
    debts: { unit: '', label: t('الدين','Debt'), icon: '💳', format: v => `${fmt(v)}` },
    pets: { unit: '', label: t('ملاحظة','Note'), icon: '🐾', format: v => v },
    subs: { unit: '/شهر', label: t('الاشتراك','Subscription'), icon: '📱', format: (v, u) => `${fmt(v)}${u}` },
    inventory: { unit: '', label: t('الصنف','Item'), icon: '📦', format: v => v },
  };

  const config = trackTypes[tool.fn] || trackTypes.weight;
  const rebuild = () => {
    lsSet(key, items);
    el.querySelector('#trackList').innerHTML = items.length
      ? items.map((item, i) => `
        <div class="todo-item">
          <span>${config.icon}</span>
          <span class="todo-text">${item.label} — <b>${config.format(item.value, config.unit)}</b> <small style="color:var(--text3)">${item.date}</small></span>
          <button class="todo-del" data-i="${i}">🗑</button>
        </div>`).join('')
      : `<p style="text-align:center;color:var(--text3);font-size:.85rem;padding:1rem">${t('لا سجلات بعد','No records yet')}</p>`;
    el.querySelectorAll('.todo-del').forEach(btn => {
      btn.onclick = () => { items.splice(+btn.dataset.i, 1); rebuild(); };
    });
    if (el.querySelector('#trackSum')) el.querySelector('#trackSum').textContent = items.length ? `${t('المجموع','Total')}: ${items.length} ${t('سجل','records')}` : '';
  };

  el.innerHTML = `<div class="tool-form">
    <div class="flex-row">
      <input class="form-input" id="trackLabel" type="text" placeholder="${config.label}...">
      <input class="form-input" id="trackVal" type="number" placeholder="${config.unit || '0'}" style="width:90px">
      <button class="todo-add-btn" id="trackAdd">+</button>
    </div>
    <div class="todo-list" id="trackList"></div>
    <p class="result-note" id="trackSum"></p>
  </div>`;
  rebuild();
  el.querySelector('#trackAdd').onclick = () => {
    const label = el.querySelector('#trackLabel').value.trim();
    const value = el.querySelector('#trackVal').value;
    if (!label && !value) return;
    items.unshift({ label: label || config.label, value: +value || 0, date: new Date().toLocaleDateString('ar-SA') });
    el.querySelector('#trackLabel').value = '';
    el.querySelector('#trackVal').value = '';
    rebuild();
  };
}

/* ===================================
   تشغيل التطبيق عند اكتمال التحميل
   =================================== */
document.addEventListener('DOMContentLoaded', initApp);
