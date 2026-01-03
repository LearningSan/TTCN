// api/authenService.js
import api from "./api";

export const fetchMe = async () => {
  return await api.get(`/me`);
};
export const updateProfileApi = async (body) => {
  return await api.put(`/me/profile`, body);
};
export const changePasswordApi =async (body) => {
  return await api.put(`/me/password`, body);
};

export const signupApi =async (body) => {
  return await api.post(`/signup`, body);
};

export const loginApi =async (email, password) => {
  return await api.post(
    `/login`,
    { email, password },)
};

export const logoutApi =async () => {
  return await api.post(
    `/logout`)
};
// gửi OTP quên mật khẩu
export const sendResetPasswordOtpApi =async (email) => {
  return await api.post(`/forgot-password`, { email });
};

// đặt lại mật khẩu
export const resetPasswordApi =async ({ email, otp, newPassword }) => {
  return await api.post(`/reset-password`, { email, otp, newPassword });
};
