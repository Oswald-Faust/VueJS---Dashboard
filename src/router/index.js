import { createRouter, createWebHistory } from "vue-router";
 
import DashboardPage from '../pages/master/DashboardPage'

import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: DashboardPage,
      children: [
         {
          name: 'HomePage',
          path: '/HomePage',
          component:HomePage
        },
        {
          name: 'ProfilePage',
          path: '/ProfilePage',
          component:ProfilePage
        }
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  