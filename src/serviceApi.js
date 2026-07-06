import axios from "axios";

const BASE = "https://civicsystem.rf.gd";

export const userRegistration = async (data) =>
  (await axios.post(`${BASE}/userRegistration.php`, data)).data;

export const userLogin = async (data) =>
  (await axios.post(`${BASE}/userLogin.php`, data)).data;

export const updateUser = async (data) =>
  (await axios.post(`${BASE}/updateUser.php`, data)).data;

export const deleteUser = async (data) =>
  (await axios.post(`${BASE}/deleteUser.php`, data)).data;

export const viewResidents = async () =>
  (await axios.get(`${BASE}/ViewResidents.php`)).data;

export const adminLogin = async (data) =>
  (await axios.post(`${BASE}/adminLogin.php`, data)).data;

export const addDepartment = async (data) =>
  (await axios.post(`${BASE}/addDepartment.php`, data)).data;

export const viewDepartments = async () =>
  (await axios.get(`${BASE}/ViewDepartment.php`)).data;

export const updateDepartment = async (data) =>
  (await axios.post(`${BASE}/UpdateDepartment.php`, data)).data;

export const deleteDepartment = async (data) =>
  (await axios.post(`${BASE}/DeleteDepartment.php`, data)).data;

export const departmentLogin = async (data) =>
  (await axios.post(`${BASE}/departmentLogin.php`, data)).data;

export const addIssue = async (data) =>
  (await axios.post(`${BASE}/addIssue.php`, data)).data;

export const viewIssues = async () =>
  (await axios.get(`${BASE}/ViewIssue.php`)).data;

export const updateIssueStatus = async (data) =>
  (await axios.post(`${BASE}/updateIssueStatus.php`, data)).data;

export const deleteIssue = async (data) =>
  (await axios.post(`${BASE}/deleteIssue.php`, data)).data;

export const updateIssue = async (data) =>
  (await axios.post(`${BASE}/updateIssue.php`, data)).data;

export default userRegistration;
