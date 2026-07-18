// import axios from "axios";

// const BASE = "https://civicsystem.rf.gd/api";


// const LARAVEL_BASE = "http://127.0.0.1:8000/api";

// export const userRegistration = async (data) =>
//   (await axios.post(`${BASE}/userRegistration.php`, data)).data;

// export const userLogin = async (data) =>
//   (await axios.post(`${BASE}/userLogin.php`, data)).data;

// export const updateUser = async (data) =>
//   (await axios.post(`${BASE}/updateUser.php`, data)).data;

// export const deleteUser = async (data) =>
//   (await axios.post(`${BASE}/deleteUser.php`, data)).data;

// export const viewResidents = async () =>
//   (await axios.get(`${BASE}/ViewResidents.php`)).data;

// export const adminLogin = async (data) =>
//   (await axios.post(`${BASE}/adminLogin.php`, data)).data;

// export const addDepartment = async (data) =>
//   (await axios.post(`${BASE}/addDepartment.php`, data)).data;

// export const viewDepartments = async () =>
//   (await axios.get(`${BASE}/ViewDepartment.php`)).data;

// export const updateDepartment = async (data) =>
//   (await axios.post(`${BASE}/UpdateDepartment.php`, data)).data;

// export const deleteDepartment = async (data) =>
//   (await axios.post(`${BASE}/DeleteDepartment.php`, data)).data;

// export const departmentLogin = async (data) =>
//   (await axios.post(`${BASE}/departmentLogin.php`, data)).data;

// export const addIssue = async (data) =>
//   (await axios.post(`${BASE}/addIssue.php`, data)).data;

// export const viewIssues = async () =>
//   (await axios.get(`${BASE}/ViewIssue.php`)).data;

// export const updateIssueStatus = async (data) =>
//   (await axios.post(`${BASE}/updateIssueStatus.php`, data)).data;

// export const deleteIssue = async (data) =>
//   (await axios.post(`${BASE}/deleteIssue.php`, data)).data;

// export const updateIssue = async (data) =>
//   (await axios.post(`${BASE}/updateIssue.php`, data)).data;




// export const createResident = async (data) =>
//   (await axios.post(`${LARAVEL_BASE}/residents`, data)).data;

// export const getResidents = async () =>
//   (await axios.get(`${LARAVEL_BASE}/residents`)).data;

// export const updateResident = async (id, data) =>
//   (await axios.put(`${LARAVEL_BASE}/residents/${id}`, data)).data;

// export const deleteResident = async (id) =>
//   (await axios.delete(`${LARAVEL_BASE}/residents/${id}`)).data;

// export default userRegistration;



import axios from "axios";

const LARAVEL_BASE = "http://127.0.0.1:8000/api";

export const userRegistration = async (data) =>
  (await axios.post(`${LARAVEL_BASE}/residents`, data)).data;

export const userLogin = async (data) =>
  (await axios.post(`${LARAVEL_BASE}/residents/login`, data)).data;

export const updateUser = async (data) =>
  (await axios.post(`${LARAVEL_BASE}/residents/updateProfile`, data)).data;

export const deleteUser = async (data) =>
  (await axios.delete(`${LARAVEL_BASE}/residents/${data.id}`)).data;

export const viewResidents = async () =>
  (await axios.get(`${LARAVEL_BASE}/residents`)).data;

export const adminLogin = async (data) =>
  (await axios.post(`${LARAVEL_BASE}/admin/login`, data)).data;

export const addDepartment = async (data) =>
  (await axios.post(`${LARAVEL_BASE}/departments`, data)).data;

export const viewDepartments = async () =>
  (await axios.get(`${LARAVEL_BASE}/departments`)).data;

export const updateDepartment = async (data) => {
  const { id, ...rest } = data;
  return (await axios.put(`${LARAVEL_BASE}/departments/${id}`, rest)).data;
};

export const deleteDepartment = async (data) =>
  (await axios.delete(`${LARAVEL_BASE}/departments/${data.id}`)).data;

export const departmentLogin = async (data) =>
  (await axios.post(`${LARAVEL_BASE}/departments/login`, data)).data;

export const addIssue = async (data) =>
  (await axios.post(`${LARAVEL_BASE}/issues`, data)).data;

export const viewIssues = async () =>
  (await axios.get(`${LARAVEL_BASE}/issues`)).data;

export const updateIssueStatus = async (data) => {
  const { id, ...rest } = data;
  return (await axios.put(`${LARAVEL_BASE}/issues/${id}/status`, rest)).data;
};

export const deleteIssue = async (data) =>
  (await axios.delete(`${LARAVEL_BASE}/issues/${data.id}`)).data;

export const updateIssue = async (data) => {
  const { id, ...rest } = data;
  return (await axios.put(`${LARAVEL_BASE}/issues/${id}`, rest)).data;
};

export default userRegistration;
