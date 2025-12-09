import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY || 'TSE-Poder-legislativo';
export const verifyToken = (req, res, next) => {
    const token = req.cookies?.accessToken;
    if (!token) {
        res.status(401).json({ msg: 'Token no proporcionado' });
        return;
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'Token inválido' });
    }
};
//# sourceMappingURL=auth.js.map