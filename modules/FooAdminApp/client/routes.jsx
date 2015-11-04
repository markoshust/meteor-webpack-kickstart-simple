import App from '../modules/app/components/App';
import Dashboard from '../modules/dashboard/components/Dashboard';

export default {
  component: App,
  childRoutes: [
    { path: 'dashboard', component: Dashboard }
  ]
};

