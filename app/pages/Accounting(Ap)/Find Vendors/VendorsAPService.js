import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const saveURL = `${baseURL}/createVendor`;
const updateURL = `${baseURL}/updateVendor`;
export const serviceSave = values => axios.post(`${saveURL}`, values);
export const serviceUpdate = values => axios.post(`${updateURL}`, values);

