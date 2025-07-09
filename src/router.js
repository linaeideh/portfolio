import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About"; // هذه ستكون صفحتك الرئيسية التي تحتوي على الأقسام
// تأكد من عدم استيراد Skills هنا كصفحة منفصلة
// import Skills from "./pages/SkillsPage/Skills"; // ❌ لا تستوردها كصفحة هنا

const AppRouter = () => { // قم بتغيير اسم الدالة إلى AppRouter أو App
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* الصفحة الرئيسية ستعرض كل المحتوى، بما في ذلك قسم المهارات */}
          <Route path="/" element={<About />} />
          {/* لا حاجة لمسار منفصل /skills هنا */}
          {/* <Route path="/skills" element={<Skills />} /> */}
          {/* قم بإلغاء تعليق المسارات الأخرى إذا كنت ستستخدمها كصفحات منفصلة */}
          {/* <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter; // تصدير المكون