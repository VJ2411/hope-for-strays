import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
  const header = req.get("Authorization");
  if (header) {
    const token = header.split(" ")[1];
    jwt.verify(token,'bhawbhaw',(error,payload)=>{

      if(error){

        res.status(401).send({message:"Token is Invalid"})

      }else{
        next();
      }

    });
  } else {
    res.status(401).send({ error: "Token is missing" });
  }
};
