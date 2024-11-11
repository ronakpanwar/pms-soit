const jwt = require('jsonwebtoken')

const Authentication = async(req,res,next)=>{
    try {
        const token = await req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"User not login..",
                success:false
            })
        }

        const decode =  jwt.verify(token , process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        }

        req.id = decode.Id;
        // console.log(decode.role)
        req.role = decode.role || null ;
        next();

    
    } catch (error) {
        console.log(error)
    }
}

const isAutherized = (role=[])=>{
    return function cheakRole(req,res,next){
        if(!req.role)
            return  res.status(404).json({
            success:false,
            message:"user not login...",
        })
        // console.log(req.role)
        if(!role.includes(req.role)){
            return res.status(404).json({
            success:false,
            message:"User not Autherized..",
        }) 
         }
         next();
    }

}

module.exports={
    Authentication,
    isAutherized
}