// src/data/mySkills.js (أو skillsData.js)

const mySkills = [
    {
        id: 1,
        name: "HTML",
        level: "Advanced",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        details: { // ✨ أضف كائن details هنا ✨
            source: "W3Schools, MDN Web Docs",
            hours: 40,
            description: "إتقان كامل لأساسيات HTML5 وبناء الهياكل الأساسية لصفحات الويب.",
            certificateUrl: "/assets/html-certificate.jpg", // ✨ تأكد من مسار الشهادة الصحيح ✨
        },
    },
    {
        id: 2,
        name: "CSS",
        level: "Advanced",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        details: {
            source: "FreeCodeCamp, CSS-Tricks",
            hours: 50,
            description: "خبرة واسعة في CSS3، Flexbox، Grid، والتحكم الكامل بتصميم الواجهات الجذابة.",
            certificateUrl: "/assets/css-certificate.jpg",
        },
    },
    {
        id: 3,
        name: "JavaScript",
        level: "Intermediate",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        details: {
            source: "Udemy Course: The Complete JavaScript Course 2024",
            hours: 80,
            description: "فهم قوي لـ ES6+، البرمجة غير المتزامنة (Async/Await)، والتعامل مع الـ DOM.",
            certificateUrl: "/assets/js-certificate.jpg",
        },
    },
    {
        id: 4,
        name: "React",
        level: "Intermediate",
        icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
        details: {
            source: "Coursera: Meta Front-End Developer Professional Certificate",
            hours: 70,
            description: "بناء تطبيقات ويب تفاعلية باستخدام React Hooks، Context API، و React Router.",
            certificateUrl: "/assets/react-certificate.jpg",
        },
    },
    {
        id: 5,
        name: "Node.js",
        level: "Beginner",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
        details: {
            source: "Online Tutorials, Documentation",
            hours: 20,
            description: "تعلم أساسيات Node.js وبناء APIs بسيطة.",
            certificateUrl: "/assets/node-certificate.jpg", // إذا كان لديك شهادة
        },
    },
//     {
//     id: 6,
//     name: "Excel",
//     level: "Advanced",
//     icon: "https://cdn-icons-png.flaticon.com/512/732/732220.png", // أيقونة مناسبة لـ Excel
//     details: {
//         source: "LinkedIn Learning, Microsoft Learn",
//         hours: 45,
//         description: "مهارات متقدمة في استخدام Excel، بما في ذلك الصيغ، الجداول المحورية، والتصورات البيانية.",
//         certificateUrl: "/assets/excel-certificate.jpg", // تأكد من توفر الصورة في هذا المسار
//     },
// },

{
    id: 7,
    name: "Git & GitHub",
    level: "Intermediate",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
    details: {
        source: "GitHub Docs, YouTube Tutorials",
        hours: 30,
        description: "إتقان استخدام Git في تتبع الإصدارات والعمل الجماعي باستخدام GitHub.",
        certificateUrl: "/assets/git-certificate.jpg",
    },
}
,



];

export default mySkills;