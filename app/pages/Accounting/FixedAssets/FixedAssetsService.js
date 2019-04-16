import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const saveURL = `${baseURL}/createFixedAsset`;
const removeFAprod_URL = `${baseURL}/removeFixedAssetProduct`;
const updateFAprod_URL = `${baseURL}/updateFixedAssetProduct`;
const UpdateFA_URL = `${baseURL}/updateFixedAsset`;
const SaveFAprodURL = `${baseURL}/addFixedAssetProduct`;
const SaveFASCURL = `${baseURL}/createFixedAssetStdCost`;
const addIden_URL = `${baseURL}/createFixedAssetIdent`;
const updateIden_URL = `${baseURL}/updateFixedAssetIdent`;
const removeIden_URL = `${baseURL}/removeFixedAssetIdent`;
const addReg_URL = `${baseURL}/createFixedAssetRegistration`;
const updateReg_URL = `${baseURL}/updateFixedAssetRegistration`;
const removeReg_URL = `${baseURL}/deleteFixedAssetRegistration`;
const addMR_URL = `${baseURL}/createFixedAssetMeter`;
const updateMR_URL = `${baseURL}/updateFixedAssetMeter`;
const removeMR_URL = `${baseURL}/deleteFixedAssetMeter`;
const addMaint_URL = `${baseURL}/createFixedAssetMaint`;
const removeMaint_URL = `${baseURL}/deleteFixedAssetMaint`;
const addAssign_URL = `${baseURL}/createPartyFixedAssetAssignment`;
const updateAssign_URL = `${baseURL}/updatePartyFixedAssetAssignment`;
const removeAssign_URL = `${baseURL}/deletePartyFixedAssetAssignment`;
const saveDep_URL = `${baseURL}/createFixedAssetDepMethod`;
const removeDep_URL = `${baseURL}/deleteFixedAssetDepMethod`;
const saveGL_URL = `${baseURL}/createFixedAssetTypeGlAccount`;
const removeGL_URL = `${baseURL}/deleteFixedAssetTypeGlAccount`;
const updateMaint_URL = `${baseURL}/updateFixedAssetMaint`;
const saveMO_URL = `${baseURL}/createFixedAssetMaintOrder`;
const removeMO_URL  = `${baseURL}/deleteFixedAssetMaintOrder`;
export const serviceRemoveFASC_URL = `${baseURL}/cancelFixedAssetStdCost`;
export const serviceUpdateFASC_URL = `${baseURL}/updateFixedAssetStdCost`;
export const serviceSave = values => axios.post(`${saveURL}`, values);
export const serviceUpdateFASC = values =>
  axios.post(`${serviceUpdateFASC_URL}`, values);
  export const serviceRemoveFASC = values =>
  axios.post(`${serviceRemoveFASC_URL}`, values);
export const serviceUpdateFA = values =>
  axios.post(`${UpdateFA_URL}`, values);
export const serviceUpdateFAprod = values =>
  axios.post(`${updateFAprod_URL}`, values);
export const serviceRemoveFAprod = values =>
  axios.post(`${removeFAprod_URL}`, values);
export const serviceSaveFAprod = values =>
  axios.post(`${SaveFAprodURL}`, values);
export const serviceSaveFASC = values =>
axios.post(`${SaveFASCURL}`, values);
export const serviceAddIden = values =>
axios.post(`${addIden_URL}`, values);
export const serviceUpdateIden = values =>
axios.post(`${updateIden_URL}`, values);
export const serviceRemoveIden = values =>
axios.post(`${removeIden_URL}`, values);

export const serviceAddReg = values =>
axios.post(`${addReg_URL}`, values);

export const serviceUpdateReg = values =>
axios.post(`${updateReg_URL}`, values);

export const serviceRemoveReg = values =>
axios.post(`${removeReg_URL}`, values);

export const serviceAddMR = values =>
axios.post(`${addMR_URL}`, values);

export const serviceUpdateMR = values =>
axios.post(`${updateMR_URL}`, values);

export const serviceRemoveMR = values =>
axios.post(`${removeMR_URL}`, values);

export const serviceAddMAINT = values =>
axios.post(`${addMaint_URL}`, values);
export const serviceRemoveMAINT = values =>
axios.post(`${removeMaint_URL}`, values);
export const serviceAddAssign  = values =>
axios.post(`${addAssign_URL}`, values);
export const serviceUpdateAssign  = values =>
axios.post(`${updateAssign_URL}`, values);
export const serviceRemoveAssign  = values =>
axios.post(`${removeAssign_URL}`, values);
export const serviceSaveDep = values =>
axios.post(`${saveDep_URL}`, values);
export const serviceRemoveDep = values =>
axios.post(`${removeDep_URL}`, values);
export const serviceSaveGLMAP = values =>
axios.post(`${saveGL_URL}`, values);
export const serviceRemoveGL = values =>
axios.post(`${removeGL_URL}`, values);
export const serviceUpdateMaint = values =>
axios.post(`${updateMaint_URL}`, values);
export const serviceSaveMO =values =>
axios.post(`${saveMO_URL}`, values);
export const serviceRemoveMO =values =>
axios.post(`${removeMO_URL}`, values);