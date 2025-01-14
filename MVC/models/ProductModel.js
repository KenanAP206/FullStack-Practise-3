import { Schema, model } from "mongoose"

let ProductSchema = new Schema({
    name:{ type: String, required: true },
    discount:{ type: Number},
    price:{ type: Number},
    category:{ type: String},
    image:{ type: String}
})

export let ProductModel= model("products",ProductSchema)