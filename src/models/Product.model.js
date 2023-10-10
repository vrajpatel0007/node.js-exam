const mongoose = require("mongoose");


const productschema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_description: {
            type: String,
            trim: true,
        },
        product_price: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const product = mongoose.model("prodct", productschema);
module.exports = product;