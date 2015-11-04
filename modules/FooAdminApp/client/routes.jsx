import App from './App';
import Dashboard from './Dashboard';

export default {
  component: App,
  childRoutes: [
    { path: 'dashboard', component: Dashboard }
  ]
};

