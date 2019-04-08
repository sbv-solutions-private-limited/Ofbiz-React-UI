import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

function mapStateToProps(state) {
  const { locale, messages } = state['@@i18n'];
  return { locale, messages, key: locale };
}

export default connect(mapStateToProps)(IntlProvider);
