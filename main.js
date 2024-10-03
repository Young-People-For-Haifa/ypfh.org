// Тексты для разных языков
const texts = {
    en: {
        navHome: "Home",
        navProjects: "Projects",
        navEvents: "Events",
        homeTitle: "Young People For Haifa",
        homeDescription1: "<strong>Young People for Haifa (YPFH)</strong> is a non-profit organization based in Haifa, Israel, that is committed to empowering young people to become active and engaged citizens in their communities.",
        homeDescription2: "Overall, <strong>Young People for Haifa</strong> is a dynamic and innovative organization that is making a real difference in the lives of young people in Haifa and beyond.",
        projectsTitle: "Projects",
        ironSwordsProject: "Iron Swords",
        cleanupProject: "CleanUp",
        sportProject: "Sport",
        eventsTitle: "Upcoming Events",
        eventsDescription: "Follow our upcoming events in our calendar below:",
        eventsInfo: "Click on the events in the calendar to save them to your own calendar and make sure you don't miss them.",
        socialMediaTitle: "Follow us",
        ironSwordsContent: `
        <h1>Iron Swords</h1>
        <p>Our soldiers, children, brothers, and sisters protect us every day, and now it is our turn to take care of them.</p>
        <ul>
            <li>We have set ourselves a significant goal - to provide the troops with 100 generators. This is not a matter of comfort; it's about security, health, and the ability to effectively defend our country.</li>
            <li>Many of our military units operate in field conditions. Therefore, generators are of vital importance: they enable the connection of medical equipment, water heating, and food preparation. Such generators also let the units keep warm and have their phones and other devices charged.</li>
            <li>Thanks to your support and the contributions of over 900 volunteers, we have already assisted 45,926 soldiers by sending thousands of essential items to the front lines - from clothing and medications to food, providing hot meals for over 11,000 servicemen and servicewomen.</li>
        </ul>
        <p>We may not be on the front lines, but we can support those who are fighting for us there. Your donation is our collective contribution to their victory and ours.</p>
        <p><strong>For international transactions</strong> - Bank name: BANK LEUMI B.M. Leumi's, Swift code: LUMIILITXXX, IBAN: IL42 0108 8000 0000 5826 806, Name: Young People for Haifa</p>
        <p><strong>For the residents of Israel</strong> - Bank Leumi, account number 05826806, branch code 880</p>
        <p>To deliver food, goods, and equipment, please bring them to the following address: 4 Rav Ohana Street, Hadar District</p>
        `,
        sportContent: `
        <h1>Sport</h1>
        <p>We invite you to join our free workouts 😃🏃🏽🏋🏼‍♀️</p>
        <p><strong>Circuit Training:</strong> 📅 Monday, 21:00, 📍 Hecht Park. Strength, functional, and aerobic training led by Lisa! This workout is suitable for all fitness levels!</p>
        <p><strong>Running Training:</strong> 📅 Friday, 8:00, 📍 Leonard Beach. Join Vladimir Berson for a morning run! We’ll run 5 km to the Marine Institute and back.</p>
        <p>📝 Telegram group link: <a href="https://t.me/ypfh_sport" target="_blank">https://t.me/ypfh_sport</a></p>
        `
    },
    ru: {
        navHome: "Главная",
        navProjects: "Проекты",
        navEvents: "События",
        homeTitle: "Молодёжь Для Хайфы",
        homeDescription1: "<strong>Молодёжь Для Хайфы (YPFH)</strong> - это некоммерческая организация, базирующаяся в Хайфе, Израиль, которая стремится наделять молодых людей возможностью становиться активными и вовлеченными гражданами в своих сообществах.",
        homeDescription2: "В целом, <strong>Молодёжь Для Хайфы</strong> - это динамичная и инновационная организация, которая действительно вносит реальные изменения в жизни молодых людей в Хайфе и за ее пределами.",
        projectsTitle: "Проекты",
        ironSwordsProject: "Железные Мечи",
        cleanupProject: "Чистка",
        sportProject: "Спорт",
        eventsTitle: "Предстоящие События",
        eventsDescription: "Следите за нашими предстоящими событиями в календаре ниже:",
        eventsInfo: "Нажмите на события в календаре, чтобы сохранить их в своем календаре и убедитесь, что вы их не пропустите.",
        socialMediaTitle: "Подписывайтесь на нас",
        ironSwordsContent: `
        <h1>Железные Мечи</h1>
        <p>Наши солдаты, дети, братья и сестры защищают нас каждый день, и теперь наша очередь позаботиться о них.</p>
        <ul>
            <li>Мы поставили перед собой значительную цель - обеспечить войска 100 генераторами. Это не вопрос комфорта; речь идет о безопасности, здоровье и способности эффективно защищать нашу страну.</li>
            <li>Многие наши военные части работают в полевых условиях. Поэтому генераторы имеют жизненно важное значение: они обеспечивают подключение медицинского оборудования, подогрев воды и приготовление пищи. Эти генераторы также позволяют поддерживать тепло и заряжать телефоны и другие устройства.</li>
            <li>Благодаря вашей поддержке и вкладам более 900 волонтеров мы уже помогли 45,926 солдатам, отправив тысячи необходимых предметов на передовую — от одежды и медикаментов до продуктов питания, предоставив горячее питание более чем 11,000 военнослужащим.</li>
        </ul>
        <p>Мы можем не находиться на передовой, но мы можем поддержать тех, кто там за нас сражается. Ваши пожертвования — это наш общий вклад в их победу и нашу.</p>
        <p><strong>Для международных переводов</strong> - Название банка: BANK LEUMI B.M. Leumi's, Swift код: LUMIILITXXX, IBAN: IL42 0108 8000 0000 5826 806, Название: Молодёжь Для Хайфы</p>
        <p><strong>Для жителей Израиля</strong> - Банк Leumi, номер счета 05826806, код отделения 880</p>
        <p>Чтобы доставить еду, товары и оборудование, пожалуйста, принесите их по следующему адресу: Улица Рав Охана 4, район Хадар</p>
        `,
        sportContent: `
        <h1>Спорт</h1>
        <p>Приглашаем на бесплатные тренировки 😃🏃🏽🏋🏼‍♀️</p>
        <p><strong>Круговая тренировка:</strong> 📅 Понедельник, 21:00, 📍 Парк Гехт. Силовая, функциональная и аэробная тренировка под руководством Лисы! Тренировка подходит для любого уровня!</p>
        <p><strong>Беговая тренировка:</strong> 📅 Пятница, 8:00, 📍 Старт у пляжа Леонарда. Присоединяйтесь к утреннему бегу под руководством Владимира Берсона! Пробежим 5 км.</p>
        <p>📝 ссылка на телеграм группу: <a href="https://t.me/ypfh_sport" target="_blank">https://t.me/ypfh_sport</a></p>
        `
    },
    he: {
        navHome: "בית",
        navProjects: "פרויקטים",
        navEvents: "אירועים",
        homeTitle: "צעירים למען חיפה",
        homeDescription1: "<strong>צעירים למען חיפה (YPFH)</strong> היא ארגון ללא מטרות רווח המבוסס בחיפה, ישראל, שמתחייב להעצים צעירים להיות אזרחים פעילים ומעורבים בקהילות שלהם.",
        homeDescription2: "בסך הכל, <strong>צעירים למען חיפה</strong> הוא ארגון דינמי וחדשני שמבצע שינוי אמיתי בחייהם של צעירים בחיפה ומחוצה לה.",
        projectsTitle: "פרויקטים",
        ironSwordsProject: "חרבות הברזל",
        cleanupProject: "ניקוי",
        sportProject: "ספורט",
        eventsTitle: "אירועים קרובים",
        eventsDescription: "עקוב אחר האירועים הקרובים שלנו בלוח השנה למטה:",
        eventsInfo: "לחץ על האירועים בלוח השנה כדי לשמור אותם בלוח השנה שלך ולוודא שלא תפספס אותם.",
        socialMediaTitle: "עקוב אחרינו",
        ironSwordsContent: `
        <h1>חרבות הברזל</h1>
        <p>חיילינו, ילדינו, אחינו ואחיותינו מגינים עלינו מדי יום, ועכשיו הגיע תורנו לדאוג להם.</p>
        <ul>
            <li>שמנו לעצמנו למטרה חשובה - לספק לכוחות 100 גנרטורים. זה לא עניין של נוחות; מדובר בביטחון, בריאות והיכולת להגן ביעילות על המדינה שלנו.</li>
            <li>יחידות צבא רבות שלנו פועלות בתנאי שדה. לכן, גנרטורים הם בעלי חשיבות עליונה: הם מאפשרים חיבור של ציוד רפואי, חימום מים והכנת מזון. גנרטורים אלו גם מאפשרים לכוחות לשמור על חום ולהטעין את הטלפונים והמכשירים האחרים שלהם.</li>
            <li>תודות לתמיכתכם ולתרומות של למעלה מ-900 מתנדבים, סייענו כבר ל-45,926 חיילים על ידי שליחת אלפי פריטים חיוניים לחזית - מבגדים ותרופות ועד מזון, תוך אספקת ארוחות חמות ליותר מ-11,000 חיילים.</li>
        </ul>
        <p>אנו אולי לא נמצאים בחזית, אך נוכל לתמוך באלו שנלחמים עבורנו שם. התרומה שלכם היא התרומה המשותפת שלנו לניצחונם ולניצחוננו.</p>
        <p><strong>לתרומות בינלאומיות</strong> - שם הבנק: BANK LEUMI B.M. Leumi's, קוד Swift: LUMIILITXXX, IBAN: IL42 0108 8000 0000 5826 806, שם: צעירים למען חיפה</p>
        <p><strong>לשוכני ישראל</strong> - בנק לאומי, מספר חשבון 05826806, קוד סניף 880</p>
        <p>להבאת מזון, סחורות וציוד, אנא הביאו אותם לכתובת הבאה: רחוב הרב אוחנה 4, רובע הדר</p>
        `,
        sportContent: `
        <h1>ספורט</h1>
        <p>הזמנה לאימונים חינם 😃🏃🏽🏋🏼‍♀️</p>
        <p><strong>אימון מעגלי:</strong> 📅 יום שני, 21:00, 📍 פארק חכט. אימון כוח, פונקציונלי ואירובי בהדרכת ליסה! האימון מתאים לכל הרמות!</p>
        <p><strong>אימון ריצה:</strong> 📅 יום שישי, 8:00, 📍 חוף לאונרדו. הצטרפו לריצת בוקר עם ולדימיר ברסון! נרוץ 5 ק"מ למכון לחקר הימים.</p>
        <p>📝 קישור לטלגרם: <a href="https://t.me/ypfh_sport" target="_blank">https://t.me/ypfh_sport</a></p>
        `
    }
};

// Функция для смены языка
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang); // Сохраняем выбранный язык в localStorage
    const language = texts[lang];

    document.getElementById('nav-home').innerText = language.navHome;
    document.getElementById('nav-projects').innerText = language.navProjects;
    document.getElementById('nav-events').innerText = language.navEvents;

    // Update content on index.html
    if (document.getElementById('home-title')) {
        document.getElementById('home-title').innerText = language.homeTitle;
        document.getElementById('home-description1').innerHTML = language.homeDescription1;
        document.getElementById('home-description2').innerHTML = language.homeDescription2;
        document.getElementById('projects-title').innerText = language.projectsTitle;
        document.getElementById('iron-swords').innerText = language.ironSwordsProject;
        document.getElementById('cleanup-project').innerText = language.cleanupProject;
        document.getElementById('sport-project').innerText = language.sportProject;
        document.getElementById('events-title').innerText = language.eventsTitle;
        document.getElementById('events-description').innerText = language.eventsDescription;
        document.getElementById('events-info').innerText = language.eventsInfo;
        document.getElementById('social-media-title').innerText = language.socialMediaTitle;
    }

    // Update content on iron-swords.html and sport.html
    if (document.querySelector('.content')) {
        if (document.querySelector('#IronSwords')) {
            document.querySelector('.content').innerHTML = language.ironSwordsContent;
        } else if (document.querySelector('#Sport')) {
            document.querySelector('.content').innerHTML = language.sportContent;
        }
    }

    // Update the body's language class
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

    // Update links with the selected language
    updateProjectLinks(lang);
}

// Функция для обновления ссылок на страницы проектов с выбранным языком
function updateProjectLinks(lang) {
    const baseUrl = window.location.origin;

    document.getElementById('iron-swords-link').href = `${baseUrl}/iron-swords.html?lang=${lang}`;
    document.getElementById('cleanup-link').href = `${baseUrl}/cleanup.html?lang=${lang}`;
    document.getElementById('sport-link').href = `${baseUrl}/sport.html?lang=${lang}`;
    document.getElementById('logo-link').href = `${baseUrl}/index.html?lang=${lang}`;
}

// Обновление контента при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Получаем сохранённый язык или используем английский по умолчанию
    setLanguage(savedLanguage); // Устанавливаем язык
});

