
export function submitAction(
  actionType,
  dataForAction,
  nameSpace,
  props,
  notificationTitle,
  callback,
) {
  let urlString = ``;
  if (actionType === 'isExists') {
    urlString = `${nameSpace}/actionExists`;
  } else if (actionType === 'save') {
    urlString = `${nameSpace}/actionSave`;
  } else if (actionType === 'updateAgreement') {
    urlString = `${nameSpace}/actionUpdateAgreement`;
  } else if (actionType === 'saveAgreement') {
    urlString = `${nameSpace}/actionSaveAgreement`;
  } else if (actionType === 'copyAgreement') {
    urlString = `${nameSpace}/actionCopyAgreement`;
  } else if (actionType === 'saveAgreementTerm') {
    urlString = `${nameSpace}/actionSaveAgreementTerm`;
  } else if (actionType === 'updateAgreementTerm') {
    urlString = `${nameSpace}/actionUpdateAgreementTerm`;
  } else if (actionType === 'deleteAgreementTerm') {
    urlString = `${nameSpace}/actionDeleteAgreementTerm`;
  } else if (actionType === 'deleteAgreementItem') {
    urlString = `${nameSpace}/actionDeleteAgreementItem`;
  } else if (actionType === 'saveAgreementItem') {
    urlString = `${nameSpace}/actionSaveAgreementItem`;
  } else if (actionType === 'updateAgreementItem') {
    urlString = `${nameSpace}/actionUpdateAgreementItem`;
  } else if (actionType === 'saveAgreementPromotions') {
    urlString = `${nameSpace}/actionSaveAgreementPromotions`;
  } else if (actionType === 'saveAgreementProducts') {
    urlString = `${nameSpace}/actionSaveAgreementProducts`;
  } else if (actionType === 'saveAgreementParty') {
    urlString = `${nameSpace}/actionSaveAgreementParty`;
  } else if (actionType === 'saveAgreementGeo') {
    urlString = `${nameSpace}/actionSaveAgreementGeo`;
  } else if (actionType === 'saveAgreementFacilities') {
    urlString = `${nameSpace}/actionSaveAgreementFacilities`;
  } else if (actionType === 'saveAgreementWorkEffort') {
    urlString = `${nameSpace}/actionSaveAgreementWorkEffort`;
  } else if (actionType === 'deleteAgreementWorkEffort') {
    urlString = `${nameSpace}/actionDeleteAgreementWorkEffort`;
  } else if (actionType === 'saveAgreementRoles') {
    urlString = `${nameSpace}/actionSaveAgreementRoles`;
  } else if (actionType === 'saveAgreementContents') {
    urlString = `${nameSpace}/actionSaveAgreementContents`;
  } else if (actionType === 'savePaymentGroupMember') {
    urlString = `${nameSpace}/actionSavePaymentGroupMember`;
  } else if (actionType === 'updateInvoice') {
    urlString = `${nameSpace}/actionUpdateInvoice`;
  } else if (actionType === 'setInvoiceStatus') {
    urlString = `${nameSpace}/actionSetInvoiceStatus`;
  } else if (actionType === 'copyInvoice') {
    urlString = `${nameSpace}/actionSaveCopyInvoice`;
  } else if (actionType === 'massChangeInvoiceStatus') {
    urlString = `${nameSpace}/actionSaveMassChangeInvoiceStatus`;
  } else if (actionType === 'saveInvoiceItem') {
    urlString = `${nameSpace}/actionCreateInvoiceItem`;
  } else if (actionType === 'removeInvoiceItem') {
    urlString = `${nameSpace}/actionRemoveInvoiceItem`;
  } else if (actionType === 'saveInvoiceRoles') {
    urlString = `${nameSpace}/actionCreateInvoiceRole`;
  } else if (actionType === 'updateInvoiceRole') {
    urlString = `${nameSpace}/actionUpdateInvoiceRole`;
  } else if (actionType === 'removeInvoiceRole') {
    urlString = `${nameSpace}/actionRemoveInvoiceRole`;
  } else if (actionType === 'saveInvoiceTerm') {
    urlString = `${nameSpace}/actionCreateInvoiceTerm`;
  } else if (actionType === 'sendInvoicePerEmail') {
    urlString = `${nameSpace}/actionSendInvoicePerEmail`;
  } else if (actionType === 'updatePaymentGroup') {
    urlString = `${nameSpace}/actionUpdatePaymentGroup`;
  } else if (actionType === 'removePaymentGroup') {
    urlString = `${nameSpace}/actionRemovePaymentGroup`;
  } else if (actionType === 'removePaymentGroupMember') {
    urlString = `${nameSpace}/actionDeletePaymentGroupMember`;
  } else if (actionType === 'updatePaymentGroupMember') {
    urlString = `${nameSpace}/actionUpdatePaymentGroupMember`;
  } else if (actionType === 'updatePayment') {
    urlString = `${nameSpace}/actionUpdatePayment`;
  } else if (actionType === 'createPaymentAndApplication') {
    urlString = `${nameSpace}/actionCreatePaymentAndApplication`;
  } else if (actionType === 'removePaymentApp') {
    urlString = `${nameSpace}/actionRemovePaymentApp`;
  } else if (actionType === 'setPaymentStatus') {
    urlString = `${nameSpace}/actionSetPaymentStatus`;
  } else if (actionType === 'saveVendors') {
    urlString = `${nameSpace}/actionsaveVendors`;
  } else if (actionType === 'updateVendors') {
    urlString = `${nameSpace}/actionUpdateVendors`;
  } else if (actionType === 'saveall') {
    urlString = `${nameSpace}/actionSaveall`;
  } else if (actionType === 'list') {
    urlString = `${nameSpace}/actionList`;
  } else if (actionType === 'lineItems') {
    urlString = `${nameSpace}/actionLineItems`;
  } else if (actionType === 'byId') {
    urlString = `${nameSpace}/actionById`;
  } else if (actionType === 'activate') {
    urlString = `${nameSpace}/actionActivate`;
  } else if (actionType === 'activateAll') {
    urlString = `${nameSpace}/actionActivateAll`;
  } else if (actionType === 'deactivate') {
    urlString = `${nameSpace}/actionDeactivate`;
  } else if (actionType === 'deactivateAll') {
    urlString = `${nameSpace}/actionDeactivateAll`;
  } else if (actionType === 'block') {
    urlString = `${nameSpace}/actionBlock`;
  } else if (actionType === 'blockAll') {
    urlString = `${nameSpace}/actionBlockAll`;
  } else if (actionType === 'unblock') {
    urlString = `${nameSpace}/actionUnblock`;
  } else if (actionType === 'unblockAll') {
    urlString = `${nameSpace}/actionUnblockAll`;
  } else if (actionType === 'delete') {
    urlString = `${nameSpace}/actionDelete`;
  } else if (actionType === 'authTransaction') {
    urlString = `${nameSpace}/actionAuthTransaction`;
  }else if (actionType === 'captureOrderPayments') {
    urlString = `${nameSpace}/actionCaptureOrderPayments`;
  }else if (actionType === 'manualForcedCcTransaction') {
    urlString = `${nameSpace}/actionManualForcedCcTransaction`;
  }else if (actionType === 'updatePaymentGatewayConfig') {
    urlString = `${nameSpace}/actionUpdatePaymentGatewayConfig`;
  }else if (actionType === 'updatePaymentGatewayConfigClearCommerce') {
    urlString = `${nameSpace}/actionUpdatePaymentGatewayConfigClearCommerce`;
  }else if (actionType === 'updateConfigAUTHORIZE_NET_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigAUTHORIZE_NET_CONFIG`;
  }else if (actionType === 'updateConfigCYBERSOURCE_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigCYBERSOURCE_CONFIG`;
  }else if (actionType === 'updateConfigIDEAL_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigIDEAL_CONFIG`;
  }else if (actionType === 'updateConfigEWAY_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigEWAY_CONFIG`;
  }else if (actionType === 'updateConfigPAYFLOWPRO_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigPAYFLOWPRO_CONFIG`;
  }else if (actionType === 'updateConfigPAYPAL_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigPAYPAL_CONFIG`;
  }else if (actionType === 'updateConfigSAGEPAY_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigSAGEPAY_CONFIG`;
  }else if (actionType === 'updateConfigSECUREPAY_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigSECUREPAY_CONFIG`;
  }else if (actionType === 'updateConfigWORLDPAY_CONFIG') {
    urlString = `${nameSpace}/actionUpdateConfigWORLDPAY_CONFIG`;
  }else if (actionType === 'updatePaymentGatewayConfigType') {
    urlString = `${nameSpace}/actionUpdatePaymentGatewayConfigType`;
  } else if (actionType === 'saveBillingAccount') {
    urlString = `${nameSpace}/actionSaveBillingAccount`;
  }else if (actionType === 'updateBillingAccount') {
    urlString = `${nameSpace}/actionUpdateBillingAccount`;
  }else if (actionType === 'saveBillingAccountRoles') {
    urlString = `${nameSpace}/actionSaveBillingAccountRoles`;
  }else if (actionType === 'updateBillingAccountRoles') {
    urlString = `${nameSpace}/actionUpdateBillingAccountRoles`;
  }else if (actionType === 'removeBillingAccountRoles') {
    urlString = `${nameSpace}/actionRemoveBillingAccountRoles`;
  }else if (actionType === 'saveBillingAccountTerms') {
    urlString = `${nameSpace}/actionSaveBillingAccountTerms`;
  }else if (actionType === 'updateBillingAccountTerms') {
    urlString = `${nameSpace}/actionUpdateBillingAccountTerms`;
  } else if (actionType === 'removeBillingAccountTerms') {
    urlString = `${nameSpace}/actionRemoveBillingAccountTerms`;
  }
  else if (actionType === 'createFinancialAccount') {
    urlString = `${nameSpace}/actionCreateFinancialAccount`;
  }
  else if (actionType === 'updateFinancialAccount') {
    urlString = `${nameSpace}/actionUpdateFinancialAccount`;
  }
  else if (actionType === 'deleteFinancialAccount') {
    urlString = `${nameSpace}/actionRemoveFinancialAccount`;
  }
  else if (actionType === 'saveFARoles') {
    urlString = `${nameSpace}/actionSaveFARoles`;
  }
  else if (actionType === 'updateFARoles') {
    urlString = `${nameSpace}/actionUpdateFARoles`;
  }
  else if (actionType === 'delFARoles') {
    urlString = `${nameSpace}/actionDelFARoles`;
  }
  else if (actionType === 'saveFinTrans') {
    urlString = `${nameSpace}/actionSaveFinTrans`;
  }
  else if (actionType === 'removeFAtrans') {
    urlString = `${nameSpace}/actionremoveFAtrans`;
  }
  else if (actionType === 'saveDepWithPay') {
    urlString = `${nameSpace}/actionsaveDepWithPay`;
  }
  else if (actionType === 'saveFAauth') {
    urlString = `${nameSpace}/actionsaveFAauth`;
  }
  else if (actionType === 'delFAauth') {
    urlString = `${nameSpace}/actiondelFAauth`;
  }
  else if (actionType === 'saveReco') {
    urlString = `${nameSpace}/actionsaveReco`;
  }
  else if (actionType === 'delRec') {
    urlString = `${nameSpace}/actionDelReco`;
  }
  else if (actionType === 'updateRec') {
    urlString = `${nameSpace}/actionUpdateRec`;
  }
  else if (actionType === 'updateTaxAuth') {
    urlString = `${nameSpace}/actionUpdateTaxAuth`;
  }
  else if (actionType === 'saveTaxAuthCat') {
    urlString = `${nameSpace}/actionSaveTaxAuthCat`;
  }
  else if (actionType === 'delTaxAuthCat') {
    urlString = `${nameSpace}/actionDelTaxAuthCat`;
  }
  else if (actionType === 'saveAssociations') {
    urlString = `${nameSpace}/actionSaveAssociations`;
  }
  else if (actionType === 'delAssociations') {
    urlString = `${nameSpace}/actiondelAssociations`;
  }
  else if (actionType === 'saveGla') {
    urlString = `${nameSpace}/actionsAVEgla`;
  }  
  else if (actionType === 'delGLA') {
    urlString = `${nameSpace}/actionDelgla`;
  } 
  else if (actionType === 'updatePR') {
    urlString = `${nameSpace}/actionUpdatePR`;
  } 
  else if (actionType === 'delPR') {
    urlString = `${nameSpace}/actionDelPR`;
  } 
  else if (actionType === 'savePR') {
    urlString = `${nameSpace}/actionSavePR`;
  } 
  else if (actionType === 'saveParties') {
    urlString = `${nameSpace}/actionSaveParties`;
  } 

  else if (actionType === 'updateParties') {
    urlString = `${nameSpace}/actionUpdateParties`;
  } 
  else if (actionType === 'delPaties') {
    urlString = `${nameSpace}/actionDelParties`;
  } 


  else if (actionType === 'deleteAll') {
    urlString = `${nameSpace}/actionDeleteAll`;
  } else if (actionType === 'statesByCountryList') {
    urlString = `${nameSpace}/action${actionType}`;
  }
  if (actionType === 'isExists') {
    triggerIsExistsAction(urlString, dataForAction, props, callback);
  } else if (
    actionType === 'byId' ||
    actionType === 'list' ||
    actionType === 'lineItems'
  ) {
    triggerListAndByIdAction(urlString, dataForAction, props);
  } else if (actionType === 'statesByCountryList') {
    triggerListAndByIdAction(urlString, dataForAction, props);
  } else {
    triggerAction(urlString, dataForAction, props, notificationTitle, callback);
  }
}

const triggerAction = (
  urlString,
  criteria,
  props,
  notificationTitle,
  callback,
) => {
  const { dispatch } = props;
  console.log(urlString);
  console.log(criteria);
  dispatch({
    type: urlString,
    payload: criteria,
  });
};

const triggerIsExistsAction = (urlString, criteria, props, callback) => {
  const { dispatch } = props;
  dispatch({
    type: urlString,
    payload: criteria,
  });
};

const triggerListAndByIdAction = (urlString, criteria, props) => {
  const { dispatch } = props;
  dispatch({
    type: urlString,
    payload: criteria,
  });
};
