import axios from 'axios';

export const FETCH_GARDEN_DATA = 'FETCH_GARDEN_DATA';
export const FETCH_MEDICAL_RECORDS_DATA = 'FETCH_MEDICAL_RECORDS_DATA';

export function fetchGardenData () {
  console.log('Actions - Fetching garden data')
  const request = axios.get(`/src/data/garden.json`);

  return {
    type: FETCH_GARDEN_DATA,
    payload: request
  };
}

export function fetchMedicalRecords () {
  console.log('Fetching medical Records')
  const request = axios.get(`/src/data/medcal-records.json`);

  return {
    type: FETCH_MEDICAL_RECORDS_DATA,
    payload: request
  };
}
