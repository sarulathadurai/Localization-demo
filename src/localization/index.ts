import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          Welcome: 'Welcome {{name}}',
          Balance: 'Balance',
          Transactions: 'Transactions',
          'food store': 'food store',
          'house Rent': 'house Rent',
          Uber: 'Uber',
          'Cloth Merchant': 'Cloth Merchant',
          send: 'send',
          request: 'request',
          more: 'more',
        },
      },
      hi: {
        translation: {
          Welcome: 'स्वागत {{name}}',
          Balance: 'शेष',
          Transactions: 'लेनदेन',
          'food store': 'खाने की दुकान',
          'house Rent': 'मकान किराया',
          Uber: 'उबेर',
          'Cloth Merchant': 'कपड़ा व्यापारी',
          send: 'भेजना',
          request: 'अनुरोध',
          more: 'अधिक',
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
