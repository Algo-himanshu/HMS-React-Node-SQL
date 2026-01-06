// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:6969';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/login`,
  REGISTER: `${API_BASE_URL}/api/register`,
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  DOCTOR_LOGIN: `${API_BASE_URL}/api/doctorLogin`,
  DOCTOR_REGISTER: `${API_BASE_URL}/api/DoctorRegister`,
  GET_PATIENT: `${API_BASE_URL}/api/getPatient`,
  GET_PATIENT_BY_ID: (id) => `${API_BASE_URL}/api/getPatient/${id}`,
  UPDATE_PATIENT: (id) => `${API_BASE_URL}/api/updatePatient/${id}`,
  DELETE_PATIENT: (id) => `${API_BASE_URL}/api/remove/${id}`,
  GET_DOCTORS: `${API_BASE_URL}/api/getDoctors`,
  GET_DOCTOR_BY_ID: (id) => `${API_BASE_URL}/api/getDoctor/${id}`,
  UPDATE_DOCTOR: (id) => `${API_BASE_URL}/api/updateDoctor/${id}`,
  DELETE_DOCTOR: (id) => `${API_BASE_URL}/api/removeDoctor/${id}`,
  CREATE_APPOINTMENT: `${API_BASE_URL}/api/appointment`,
  GET_APPOINTMENT: `${API_BASE_URL}/api/getAppointment`,
  GET_APPOINTMENT_BY_ID: (id) => `${API_BASE_URL}/api/getAppointment/${id}`,
  GET_UPDATE_APPOINTMENT: (id) => `${API_BASE_URL}/api/getUpdateAppointment/${id}`,
  UPDATE_APPOINTMENT: (id) => `${API_BASE_URL}/api/getUpdateAppointment/${id}`,
  DELETE_APPOINTMENT: (id) => `${API_BASE_URL}/api/removeAppointment/${id}`,
  ACCEPT_APPOINTMENT: (id) => `${API_BASE_URL}/api/acceptAppointment/${id}`,
  DECLINE_APPOINTMENT: (id) => `${API_BASE_URL}/api/declineAppointment/${id}`,
  DONE_APPOINTMENT: (id) => `${API_BASE_URL}/api/doneAppointment/${id}`,
  USER_APPOINTMENT: (id) => `${API_BASE_URL}/api/userAppointment/${id}`,
};

export default API_BASE_URL;
