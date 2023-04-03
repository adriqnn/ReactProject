const { parseToken } = require("../services/userService");

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];

    if(token){
        try{
            const payload = parseToken(token);
            req.user = payload;
            req.token = token;
        }catch(err){
            return res.status(401).json({message: 'Invalid authorization token!'});
        };
    };
    next();
};

// if(token){
//     //     try{
//     //         const payload = parseToken(token);
//     //         console.log(payload);
//     //         req.user = payload;
//     //         req.token = token;
//     //     }catch(err){
//     //         parseError(err);
//     //         return res.status(400).json({message: 'Invalid authorization token!'});
//     //     };
//     // }else{
//     //     try{
//     //         throw new Error('User not logged in!')
//     //     }catch(err){
//     //         const message = parseError(err);
//     //         res.status(401).json({message});
//     //     };
//     // };