import Vue from "vue";
import Router from "vue-router";
import categoriesPage from "@/pages/categoriespage";
import Home from "@/pages/home"
import ContactUs from "@/pages/contactus";
import askUsaQuestionPage from "@/pages/askUsaQuestionPage";
import questionsAndAnswers from "@/pages/questionsandanswers";
import coolInfo from "@/pages/coolInfo";
import CategoriesDetail from "@/components/categoriesdetail";
import KpMap from "@/pages/kpmap";
import ModalDialog from "@/components/ModalDialog";
import MentalHealth from "@/pages/mentalHealth";
import Helpline from "@/pages/Helpline"
/* import coolInfo from "@/pages/coofInfo" */

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/coolInfo",
      name: "coolInfo",
      component: coolInfo

    },
    {
      path: "/categoriespage",
      name: "categoriespage",
      component: categoriesPage
    },
    {
      path: "/askUsaQuestionPage",
      name: "askUsaQuestionPage",
      component: askUsaQuestionPage
    },
    {
      path: "/questionsandanswers/:link",
      name: "questionsAndAnswers",
      component: questionsAndAnswers
    },
    {
      path: "/mentalHealth",
      name: "mental Health",
      component: MentalHealth
    },
    {
      path: "/contactUs",
      name: "Contact Us",
      props: true,
      component: ContactUs
    },
    {
      path: "/categoriesdetail/:categoryId",
      name: "Categories Detail",
      props: true,
      component: CategoriesDetail
    },
    {
      path: "/kpmap",
      name: "Kp Map",
      props: true,
      component: KpMap
    },
    {
      path: "/ModalDialog",
      name: "ModalDialog",
      props: true,
      component: ModalDialog
    },
    {
      path: "/Helpline",
      name: "Helpline",
      props: true,
      component: Helpline
    },
    
    
    
    
  ],
  
});
