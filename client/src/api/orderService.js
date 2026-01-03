import axios from "axios";

import api from "./api";


export const getOrderHistoryByUser = async (userId, status = "all") => {
  const res = await api.get(
    `/orders/history/${userId}?status=${status}`
  );
  return res.data;
};

export const getOrderDetail = async (orderId) => {
  const res = await api.get(`/orders/${orderId}`);
  return res.data;
};


export const createOrder = async (body) => {
  const res = await api.post("/orders", body);
  return res.data;
};
