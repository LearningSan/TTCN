const db = require("../config/db");

class ShippingModel {

    static async createShipping(shipping_id, order_id) {
        const [result] = await db.execute(
            `INSERT INTO shipping (
                shipping_id,
                shipping_order_id,
                shipping_status
            ) VALUES (?, ?, 'preparing')`,
            [shipping_id, order_id]
        );

        return result;
    }

    static async updateStatus(order_id, status) {
        const [result] = await db.execute(
            "UPDATE shipping SET shipping_status = ? WHERE shipping_order_id = ?",
            [status, order_id]
        );
        return result;
    }
}

module.exports = ShippingModel;
