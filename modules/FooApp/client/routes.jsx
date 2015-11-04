import App from '../modules/app/components/App';
import Home from '../modules/home/components/Home';

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: []
};

