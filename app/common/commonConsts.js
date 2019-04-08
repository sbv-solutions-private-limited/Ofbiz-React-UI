// import React from 'react';
// Audit configs at Form bottom pane
export const LABEL_AUDIT_CREATEDBY = 'Created By: ';
export const LABEL_AUDIT_CREATEDON = ' Created On: ';
export const LABEL_AUDIT_CREATEDIP = ' System IP: ';
export const LABEL_AUDIT_MODIFIEDBY = 'Modified By: ';
export const LABEL_AUDIT_MODIFIEDON = ' Modified On: ';
export const LABEL_AUDIT_MODIFIEDIP = ' System IP: ';
export const LABEL_AUDIT_STYLE = {
  margin: '18px 0 0 0',
  fontSize: '10px',
  color: '#cbcbcc',
  fontStyle: 'italic',
};

let loggedInUser = null;
export const setLoggedInUser = loggedInUserParam => {
  loggedInUser = loggedInUserParam;
};

export const getLoggedInUser = () => loggedInUser;
