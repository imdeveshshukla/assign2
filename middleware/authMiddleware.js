const jwt = require('json-web-token')

const verifyToken = (req,res,next)=>{
    const token = req.headers?.token;
    try {
        if (!token) {
          return res.status(401).send({ msg: "Please Sigin!!!" });
        }
        let payload = jwt.verify(token, process.env.SECRET_KEY);
        if (payload.email) {
          req.email = payload.email;
          next();
        } else res.status(401).send({ msg: "Invalid Token" });
        
      } catch (error) {
        return res.status(400).json({
          msg:"Some Error Occured",
          error
        })
      }

}

module.exports = verifyToken;