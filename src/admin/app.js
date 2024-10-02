import './custom.css';

const config = {
  locales: ['pl'],
  translations: {
    pl: {
      'app.components.LeftMenu.navbrand.title': 'OBI Panel',
      'app.components.LeftMenu.navbrand.workplace': 'Panel Zarządzania',
    },
    en: {
      'app.components.LeftMenu.navbrand.title': 'OBI Panel',
      'app.components.LeftMenu.navbrand.workplace': 'Management Panel',
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
