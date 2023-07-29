const jwt =  require('jsonwebtoken');

const Auth = (req,res,next) =>{
    const token = req.headers.authorization;
    console.log(token);
    jwt.verify(token, "zfit", (err, decoded) => {
        if(err){
            res.send({msg: "Please Login"});
        }else{
            req.body.userId = decoded.userId;
            next();
        }
    })
}

module.exports = {Auth};