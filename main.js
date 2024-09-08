// Тексты для разных языков
const texts = {
    en: {
        navHome: "Home",
        navProjects: "Projects",
        navEvents: "Events",
        ironSwordsContent: `
        <h1>Iron Swords</h1>
        <p>Our soldiers, children, brothers, and sisters protect us every day, and now it is our turn to take care of them.</p>
        <p>Join us in the non-profit organization "Young People for Haifa" to help as well. They are fighting for us on the front lines, and we must fight for them on the home front.</p>
        <ul>
            <li>We have set ourselves a significant goal - to provide the troops with 100 generators. This is not a matter of comfort; it's about security, health, and the ability to effectively defend our country.</li>
            <li>Many of our military units operate in field conditions. Therefore, generators are of vital importance: they enable the connection of medical equipment, water heating, and food preparation. Such generators also let the units keep warm and have their phones and other devices charged.</li>
            <li>Thanks to your support and the contributions of over 900 volunteers, we have already assisted 45,926 soldiers by sending thousands of essential items to the front lines - from clothing and medications to food, providing hot meals for over 11,000 servicemen and servicewomen.</li>
        </ul>
        <p>We may not be on the front lines, but we can support those who are fighting for us there. Your donation is our collective contribution to their victory and ours.</p>
        <p>You can donate money to support our association, "Young People for Haifa".</p>
        <p><strong>For international transactions</strong> - Bank name: BANK LEUMI B.M. Leumi's, Swift code: LUMIILITXXX, IBAN: IL42 0108 8000 0000 5826 806, Name: Young People for Haifa</p>
        <p><strong>For the residents of Israel</strong> - Bank Leumi, account number 05826806, branch code 880</p>
        <p>To deliver food, goods, and equipment, please bring them to the following address:</p>
        <p>4 Rav Ohana Street, Hadar District</p>
        `,
    },
    ru: {
        navHome: "Главная",
        navProjects: "Проекты",
        navEvents: "События",
        ironSwordsContent: `
        <h1>Железные Мечи</h1>
        <p>Наши солдаты, дети, братья и сестры защищают нас каждый день, и теперь наша очередь позаботиться о них.</p>
        <p>Присоединяйтесь к некоммерческой организации "Молодёжь Для Хайфы", чтобы помочь. Они сражаются за нас на передовой, и мы должны бороться за них на домашнем фронте.</p>
        <ul>
            <li>Мы поставили перед собой значительную цель - обеспечить войска 100 генераторами. Это не вопрос комфорта; речь идет о безопасности, здоровье и способности эффективно защищать нашу страну.</li>
            <li>Многие наши военные части работают в полевых условиях. Поэтому генераторы имеют жизненно важное значение: они обеспечивают подключение медицинского оборудования, подогрев воды и приготовление пищи. Эти генераторы также позволяют поддерживать тепло и заряжать телефоны и другие устройства.</li>
            <li>Благодаря вашей поддержке и вкладам более 900 волонтеров мы уже помогли 45,926 солдатам, отправив тысячи необходимых предметов на передовую — от одежды и медикаментов до продуктов питания, предоставив горячее питание более чем 11,000 военнослужащим и военнослужащим-женщинам.</li>
        </ul>
        <p>Мы можем не находиться на передовой, но мы можем поддержать тех, кто там за нас сражается. Ваши пожертвования — это наш общий вклад в их победу и нашу.</p>
        <p>Вы можете пожертвовать деньги на поддержку нашей ассоциации "Молодёжь Для Хайфы".</p>
        <p><strong>Для международных переводов</strong> - Название банка: BANK LEUMI B.M. Leumi's, Swift код: LUMIILITXXX, IBAN: IL42 0108 8000 0000 5826 806, Название: Молодёжь Для Хайфы</p>
        <p><strong>Для жителей Израиля</strong> - Банк Leumi, номер счета 05826806, код отделения 880</p>
        <p>Чтобы доставить еду, товары и оборудование, пожалуйста, принесите их по следующему адресу:</p>
        <p>Улица Рав Охана 4, район Хадар</p>
        `,
    },
    he: {
        navHome: "בית",
        navProjects: "פרויקטים",
        navEvents: "אירועים",
        ironSwordsContent: `
        <h1>חרבות הברזל</h1>
        <p>חיילינו, ילדינו, אחינו ואחיותינו מגינים עלינו מדי יום, ועכשיו הגיע תורנו לדאוג להם.</p>
        <p>הצטרפו לארגון "צעירים למען חיפה" כדי לעזור גם כן. הם נלחמים עבורנו בחזית, ואנו חייבים להילחם עבורם בעורף.</p>
        <ul>
            <li>שמנו לעצמנו למטרה חשובה - לספק לכוחות 100 גנרטורים. זה לא עניין של נוחות; מדובר בביטחון, בריאות והיכולת להגן ביעילות על המדינה שלנו.</li>
            <li>יחידות צבא רבות שלנו פועלות בתנאי שדה. לכן, גנרטורים הם בעלי חשיבות עליונה: הם מאפשרים חיבור של ציוד רפואי, חימום מים והכנת מזון. גנרטורים אלו גם מאפשרים לכוחות לשמור על חום ולהטעין את הטלפונים והמכשירים האחרים שלהם.</li>
            <li>תודות לתמיכתכם ולתרומות של למעלה מ-900 מתנדבים, סייענו כבר ל-45,926 חיילים על ידי שליחת אלפי פריטים חיוניים לחזית - מבגדים ותרופות ועד מזון, תוך אספקת ארוחות חמות ליותר מ-11,000 חיילים וחיילות.</li>
        </ul>
        <p>אנו אולי לא נמצאים בחזית, אך נוכל לתמוך באלו שנלחמים עבורנו שם. התרומה שלכם היא התרומה המשותפת שלנו לניצחונם ולניצחוננו.</p>
        <p>ניתן לתרום כסף לתמיכה בעמותת "צעירים למען חיפה".</p>
        <p><strong>לתרומות בינלאומיות</strong> - שם הבנק: BANK LEUMI B.M. Leumi's, קוד Swift: LUMIILITXXX, IBAN: IL42 0108 8000 0000 5826 806, שם: צעירים למען חיפה</p>
        <p><strong>לשוכני ישראל</strong> - בנק לאומי, מספר חשבון 05826806, קוד סניף 880</p>
        <p>להבאת מזון, סחורות וציוד, אנא הביאו אותם לכתובת הבאה:</p>
        <p>רחוב הרב אוחנה 4, רובע הדר</p>
        `,
    }
};

// Функция для смены языка
function setLanguage(lang) {
    const language = texts[lang];

    document.getElementById('nav-home').innerText = language.navHome;
    document.getElementById('nav-projects').innerText = language.navProjects;
    document.getElementById('nav-events').innerText = language.navEvents;

    if (document.querySelector('.content')) {
        document.querySelector('.content').innerHTML = language.ironSwordsContent;
    }

    if (lang === 'he') {
        document.body.classList.remove('english', 'russian');
        document.body.classList.add('hebrew');
    } else if (lang === 'ru') {
        document.body.classList.remove('english', 'hebrew');
        document.body.classList.add('russian');
    } else {
        document.body.classList.remove('hebrew', 'russian');
        document.body.classList.add('english');
    }
}

// Обновление контента при загрузке
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en'); // По умолчанию английский
});
