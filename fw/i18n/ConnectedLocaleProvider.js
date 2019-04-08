import React from 'react';
import { connect } from 'react-redux';
import { LocaleProvider } from 'antd';

function mapStateToProps(state) {
  const { antdLocale } = state['@@i18n'];
  return { locale: antdLocale, key: antdLocale };
}

export default connect(mapStateToProps)(LocaleProvider);
