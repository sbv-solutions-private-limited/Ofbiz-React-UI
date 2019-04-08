import axios from 'axios';
import { baseURL } from './../../common/rest_urls';

const pageURL = `${baseURL}/${'login'}`;

const loginURL = `${pageURL}/login`;
const getValuesURL = `${pageURL}/getValues`;
const existsURL = `${pageURL}/isexists`;

export const serviceLogin = values => axios.post(`${loginURL}`, values);

export const servicegetValues = criteria =>
  axios.post(`${getValuesURL}`, criteria);

export const serviceExists = name => axios.get(`${existsURL}?userName=${name}`);
