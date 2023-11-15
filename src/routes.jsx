import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import Category from "./pages/Category/Category";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Index from "./pages/index/index";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
];

export default routes;
