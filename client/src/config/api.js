// API Configuration
const BASE_URL = "https://hms-backend.onrender.com";

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/api/login`,
  REGISTER: `${BASE_URL}/api/register`,
  ADMIN_LOGIN: `${BASE_URL}/api/admin/login`,
  DOCTOR_LOGIN: `${BASE_URL}/api/doctorLogin`,
  DOCTOR_REGISTER: `${BASE_URL}/api/DoctorRegister`,
  GET_PATIENT: `${BASE_URL}/api/getPatient`,
  GET_PATIENT_BY_ID: (id) => `${BASE_URL}/api/getPatient/${id}`,
  UPDATE_PATIENT: (id) => `${BASE_URL}/api/updatePatient/${id}`,
  DELETE_PATIENT: (id) => `${BASE_URL}/api/remove/${id}`,
  GET_DOCTORS: `${BASE_URL}/api/getDoctors`,
  GET_DOCTOR_BY_ID: (id) => `${BASE_URL}/api/getDoctor/${id}`,
  UPDATE_DOCTOR: (id) => `${BASE_URL}/api/updateDoctor/${id}`,
  DELETE_DOCTOR: (id) => `${BASE_URL}/api/removeDoctor/${id}`,
  CREATE_APPOINTMENT: `${BASE_URL}/api/appointment`,
  GET_APPOINTMENT: `${BASE_URL}/api/getAppointment`,
  GET_APPOINTMENT_BY_ID: (id) => `${BASE_URL}/api/getAppointment/${id}`,
  GET_UPDATE_APPOINTMENT: (id) => `${BASE_URL}/api/getUpdateAppointment/${id}`,
  UPDATE_APPOINTMENT: (id) => `${BASE_URL}/api/getUpdateAppointment/${id}`,
  DELETE_APPOINTMENT: (id) => `${BASE_URL}/api/removeAppointment/${id}`,
  ACCEPT_APPOINTMENT: (id) => `${BASE_URL}/api/acceptAppointment/${id}`,
  DECLINE_APPOINTMENT: (id) => `${BASE_URL}/api/declineAppointment/${id}`,
  DONE_APPOINTMENT: (id) => `${BASE_URL}/api/doneAppointment/${id}`,
  USER_APPOINTMENT: (id) => `${BASE_URL}/api/userAppointment/${id}`,
};

export default BASE_URL;
