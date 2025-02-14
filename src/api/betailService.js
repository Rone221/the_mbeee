import api from "./axiosConfig";

export const getAllBetails = () => api.get("/betails");
export const getBetailById = (id) => api.get(`/betails/${id}`);
export const createBetail = (data) => api.post("/betails", data);
export const updateBetail = (id, data) => api.put(`/betails/${id}`, data);
export const deleteBetail = (id) => api.delete(`/betails/${id}`);
