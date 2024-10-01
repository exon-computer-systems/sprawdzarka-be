const config = {
  locales: [
    'pl',
  ],
  translations: {
    pl: {
      'app.components.LeftMenu.navbrand.title': 'OBI Panel',
      'app.components.LeftMenu.navbrand.workplace': 'Panel Zarządzania',
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
