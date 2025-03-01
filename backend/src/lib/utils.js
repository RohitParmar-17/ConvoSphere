import jwt from "jsonwebtoken";

export const generateToken = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"});
    res.cookie("jwt",token,{
        maxAge : 7*24*60*60*1000, // Bcoz it takes as milliseconds, so 7 day is this much
        httpOnly :true, // prevent cross site scripting attacks
        sameSite : "strict", // prevents attacks :)
        secure : process.env.NODE_ENV !== "development",
    });

    return token;
};