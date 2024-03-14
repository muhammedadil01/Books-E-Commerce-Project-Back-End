const User = require("../Model/Schema");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const userregistration = async (req, res) => {
    try {
        const { FirstName, SecondName, Email, Password } = req.body;

        // Check if user already exists
        const existdata = await User.findOne({ Email });
        if (existdata) {
            return res.json("User Already Exists");
        }

        // Check password length
        if (Password.length < 6) {
            return res.json("Enter At Least 6 Characters for Password");
        }

        // Check for missing inputs
        if (!FirstName || !SecondName || !Email || !Password) {
            return res.json("Inputs Are Missing");
        }

        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        // Create new user
        const userCreate = await User.create({
            FirstName,
            SecondName,
            Email,
            Password: hashedPassword
        });

        // Generate JWT token
        const token = tokengenerate(userCreate._id);

        res.json({
            FirstName: userCreate.FirstName,
            SecondName: userCreate.SecondName,
            Email: userCreate.Email,
            Token: token
        });
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const tokengenerate = (id) => {
    return JWT.sign({ id }, `${process.env.JWT_SECRET}`, {
        expiresIn: "1d"
    });
};

module.exports = userregistration;
