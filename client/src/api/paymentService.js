// src/api/paymentService.js

import api from "./api";
export const createVnpayPayment = async ({ orderId, amount }) => {
  const res = await api.post(
    `/vnpay/create`,
    { orderId, amount },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  // ⚠️ redirect sang VNPAY
  window.location.href = res.data.paymentUrl;
};

export const createMomoPayment = async ({ orderId, amount }) => {
  const res = await api.post(
    `/momo/create`,
    { orderId, amount },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  // ⚠️ redirect sang MOMO
  window.location.href = res.data.payUrl;
};
