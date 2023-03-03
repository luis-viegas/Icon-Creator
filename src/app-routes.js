import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, Ambidata, LabWay_Lims, QMSiTech, ProfilePage } from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/Ambidata',
    component: Ambidata
  },
  {
    path: '/LabWay_Lims',
    component: LabWay_Lims
  },
  {
    path: '/QMSiTech',
    component: QMSiTech
  },
  {
    path: '/home',
    component: HomePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
