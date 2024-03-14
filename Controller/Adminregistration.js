const User = require("../Model/Schema");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const Adminregistration = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
         
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: "Inputs Are Missing" });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        const existdata = await User.findOne({ email });
        if (existdata) {
            return res.status(400).json({ error: "User Already Exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const adminCreate = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const token = tokengenerate(adminCreate._id);
        res.json({
            firstName: adminCreate.firstName,
            lastName: adminCreate.lastName,
            email: adminCreate.email,
            Token: token
        });
    } catch (err) {
        console.error("Admin Registration Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const tokengenerate = (id) => {
    return JWT.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
};

module.exports = Adminregistration;