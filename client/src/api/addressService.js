import api from "./api";

// USER
export const getAddressesByUser = async (userId) => {
  const res = await api.get(`/addresses/${userId}`);
  return res.data;
};

export const getDefaultAddress = async (userId) => {
  const res = await api.get(`/addresses/${userId}/default`);
  return res.data;
};

// USER + GUEST (user_id có thể null)
export const createAddress = async (data) => {
  const res = await api.post("/addresses", data);
  return res.data;
};

export const setDefaultAddress = async (addressId, userId) => {
  const res = await api.put(
    `/addresses/${addressId}/default`,
    { user_id: userId }
  );
  return res.data;
};
