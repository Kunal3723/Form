import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });

        if (!existingUser) { return res.status(404).json({ message: "User does not exist" }) }

        

        if (password!==existingUser.password) { return res.status(404).json({ message: "Invalid credentials" }) }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "300s" });

        res.status(200).send({ token, result: existingUser });
       



    } catch (error) {
        res.status(500).json({ message: message.error });
    }
}