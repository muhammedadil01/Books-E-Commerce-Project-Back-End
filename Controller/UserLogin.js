const User = require("../Model/Schema")
const bcrypt = require("bcrypt")

const userlogin=async(req,res)=>{
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
        res.json("Login Successfull");
    } else {
        res.status(401).json("Invalid email or password");
    }
} catch (error) {
    console.error("Error during login:", error);
    res.status(500).json("Internal server error");
}
   
  
}

module.exports = userlogin