import jwt from "jsonwebtoken";
import infoModel from "../model/infoModel.js";

export const createInfo = async (req, res) => {
    const info = req.body;
    const newInfo = new infoModel(info);
  
    try {
        await newInfo.save();
      
        res.status(201).json(newInfo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchInfo = async (req, res) => {

    try {
        const infos = await infoModel.find();

        res.status(201).json(infos);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteInfo = async (req, res) => {

    const { id } = req.params;

    await infoModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted Successfully" });

}