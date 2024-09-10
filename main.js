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
        eventsTitle: "Upcoming Events",
        eventsDescription: "Follow our upcoming events in our calendar below:",
        eventsInfo: "Click on the events in the calendar to save them to your own calendar and make sure you don't miss them.",
        socialMediaTitle: "Follow us",
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
        eventsTitle: "Предстоящие События",
        eventsDescription: "Следите за нашими предстоящими событиями в календаре ниже:",
        eventsInfo: "Нажмите на события в календаре, чтобы сохранить их в своем календаре и убедитесь, что вы их не пропустите.",
        socialMediaTitle: "Подписывайтесь на нас",
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
        eventsTitle: "אירועים קרובים",
        eventsDescription: "עקוב אחר האירועים הקרובים שלנו בלוח השנה למטה:",
        eventsInfo: "לחץ על האירועים בלוח השנה כדי לשמור אותם בלוח השנה שלך ולוודא שלא תפספס אותם.",
        socialMediaTitle: "עקוב אחרינו",
    }
};

// Функция для смены языка
function setLanguage(lang) {
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
        document.getElementById('events-title').innerText = language.eventsTitle;
        document.getElementById('events-description').innerText = language.eventsDescription;
        document.getElementById('events-info').innerText = language.eventsInfo;
        document.getElementById('social-media-title').innerText = language.socialMediaTitle;
    }

    // Check if we are on the iron-swords.html page
    if (document.querySelector('.content')) {
        document.querySelector('.content').innerHTML = language.ironSwordsContent;
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
}

// Обновление контента при загрузке
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en'); // По умолчанию английский
});
