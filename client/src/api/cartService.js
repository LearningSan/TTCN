import api from "./api";

/**
 * 🛒 Lấy giỏ hàng của user
 */
export const getCart = async () => {
  const res =await api.get("/cart");
  return res.data;
};
/**
 * 🛍️ Lấy các item trong giỏ
 */
export const getCartItems = async (cartId) => {
  const res =await api.get(`/cart-item/${cartId}`);
  return res.data;
};

/**
 * ➕ Thêm item vào giỏ
 */
export const addCartItem = async (body) => {
  const res =await api.post("/cart-item/", body);
  return res.data;
};

export const updateCartItemQty = async (body) => {
  const res =await api.put("/cart-item", body);
  return res.data;
};
/**
 * ❌ Xoá 1 item trong giỏ
 */
export const deleteCartItem = async (cartItemId) => {
  const res =await api.delete(`/cart-item/${cartItemId}`);
  return res.data;
};

export const clearCartItems = async () => {
  const res =await api.delete("/cart-item/clear/all");
  return res.data;
};
