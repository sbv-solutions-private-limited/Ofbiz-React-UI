/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

//TODO(@vedha): update extract-intl script as well as language generator scripts

const ConnectedIntlProvider = require('./ConnectedIntlProvider').default;
const ConnectedLocaleProvider = require('./ConnectedLocaleProvider').default;

const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line

const enLocaleData = require('react-intl/locale-data/en');
const enTranslationMessages = require('../../app/translations/en.json');
const antdEn = require('antd/lib/locale-provider/en_US');

addLocaleData(enLocaleData);

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'en',
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
};

const localeData = {
  enUS: {
    messages: {
      ...translationMessages.en
    },
    antdLocale: antdEn,
    locale: 'en-US'
  }
};

function getLocaleData(locale) {
  return localeData[locale];
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.ConnectedIntlProvider = ConnectedIntlProvider;
exports.ConnectedLocaleProvider = ConnectedLocaleProvider;
exports.getLocaleData = getLocaleData;
