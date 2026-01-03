// api/authenService.js
import api from "./api";

export const fetchMe = async () => {
  return await api.get(`authen/me`);
};
export const updateProfileApi = async (body) => {
  return await api.put(`authen/me/profile`, body);
};
export const changePasswordApi =async (body) => {
  return await api.put(`authen/me/password`, body);
};

export const signupApi =async (body) => {
  return await api.post(`authen/signup`, body);
};

export const loginApi =async (email, password) => {
  return await api.post(
    `/login`,
    { email, password },)
};

export const logoutApi =async () => {
  return await api.post(
    `authen/logout`)
};
// gửi OTP quên mật khẩu
export const sendResetPasswordOtpApi =async (email) => {
  return await api.post(`authen/forgot-password`, { email });
};

// đặt lại mật khẩu
export const resetPasswordApi =async ({ email, otp, newPassword }) => {
  return await api.post(`authen/reset-password`, { email, otp, newPassword });
};
