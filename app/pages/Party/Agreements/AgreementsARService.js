import axios from 'axios';
import { addPaginationURLParams } from '../../../common/Utils/common';
import { baseURL } from '../../../common/rest_urls';
import { NAMESPACE } from './AgreementsConsts';

const pageURL = `${baseURL}/${NAMESPACE}`;

const saveURL = `${pageURL}/save`;
const deleteURL = `${pageURL}/delete`;
const deleteAllURL = `${pageURL}/deleteall`;
const blockURL = `${pageURL}/block`;
const blockAllURL = `${pageURL}/blockall`;
const unblockURL = `${pageURL}/unblock`;
const unblockAllURL = `${pageURL}/unblockall`;
const activateURL = `${pageURL}/activate`;
const activateAllURL = `${pageURL}/activateall`;
const deactivateURL = `${pageURL}/deactivate`;
const deactivateAllURL = `${pageURL}/deactivateall`;
const listURL = `${pageURL}/list`;
const byIdURL = `${pageURL}/id`;
const existsURL = `${pageURL}/isexists`;

export const serviceSave = values => axios.post(`${saveURL}`, values);

export const serviceDelete = id => axios.delete(`${deleteURL}?id=${id}`);

export const serviceDeleteAll = ids =>
  axios.delete(`${deleteAllURL}?ids=${ids}`);

export const serviceBlock = id => axios.get(`${blockURL}?id=${id}`);

export const serviceBlockAll = ids => axios.get(`${blockAllURL}?ids=${ids}`);

export const serviceUnblock = id => axios.get(`${unblockURL}?id=${id}`);

export const serviceUnblockAll = ids =>
  axios.get(`${unblockAllURL}?ids=${ids}`);

export const serviceActivate = id => axios.get(`${activateURL}?id=${id}`);

export const serviceActivateAll = ids =>
  axios.get(`${activateAllURL}?ids=${ids}`);

export const serviceDeactivate = id => axios.get(`${deactivateURL}?id=${id}`);

export const serviceDeactivateAll = ids =>
  axios.get(`${deactivateAllURL}?ids=${ids}`);

export const serviceList = criteria => {
  const listURLPagination = addPaginationURLParams(`${listURL}`, criteria);
  return axios.post(`${listURLPagination}`, criteria);
};

export const serviceById = id => axios.get(`${byIdURL}?id=${id}`);

export const serviceExists = name => axios.get(`${existsURL}?name=${name}`);
