import Vue from "vue";
import VueRouter from "vue-router";

import TodayUsage from "@/views/TodayUsage";
import AddMeter from "@/views/AddMeter";
import Calculators from "@/views/Calculators";
import AddCalculator from "@/views/AddCalculator";
import Reports from "@/views/Reports";
import Datas from "@/views/Datas";

Vue.use(VueRouter);

const routes = [
  {
    path: "/latest",
    component: TodayUsage,
  },
  {
    path: "/add-meter",
    component: AddMeter,
  },
  {
    path: "/calculators",
    component: Calculators,
  },
  {
    path: "/add-calculator",
    component: AddCalculator,
  },
  {
    path: "/reports",
    component: Reports,
  },
  {
    path: "/datas",
    component: Datas
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
