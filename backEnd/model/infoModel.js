import mongoose from "mongoose";

const infoSchema = mongoose.Schema({

    username: { type: String, require: true },
    mobile: { type: Number, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
})


const infoModel = mongoose.model("infoModel", infoSchema);

export default infoModel;