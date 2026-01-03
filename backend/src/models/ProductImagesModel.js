const db = require("../config/db");

class ProductImagesModel {
     static async create(data) {
        const sql = `
            INSERT INTO product_image (image_product_id,image_url)
            VALUES (?, ?)
        `;

        const values = [
          data.image_product_id,
          data.image_url
        ];

        const [result] = await db.execute(sql, values);
        return result.insertId;
    }


  static deleteByProductId(productId) {
    return db.execute("DELETE FROM product_image WHERE image_product_id = ?", [productId]);
  }

  static getByProductId(productId) {
    return db.execute("SELECT * FROM product_image WHERE image_product_id = ?", [productId]);
  }
}

module.exports= ProductImagesModel;