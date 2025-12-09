import bcrypt from 'bcrypt';
import User from '../models/saf/users';
import jwt from 'jsonwebtoken';
export const ReadUser = async (req, res) => {
    const listUser = await User.findAll();
    return res.json({
        msg: `List de categoría encontrada exitosamenteeeee`,
        data: listUser
    });
};
export const LoginUser = async (req, res, next) => {
    const { rfc, password } = req.body;
    let passwordValid = false;
    let user = null;
    let bandera = true;
    user = await User.findOne({
        where: { rfc: rfc },
    });
    if (!user) {
        return res.status(400).json({
            msg: `Usuario no existe con el rfc ${rfc}`
        });
    }
    const hash = user.password.replace(/^\$2y\$/, '$2b$');
    passwordValid = await bcrypt.compare(password, hash);
    if (!passwordValid) {
        return res.status(402).json({
            msg: `Password Incorrecto => ${password}`
        });
    }
    const accessToken = jwt.sign({ rfc: rfc }, process.env.SECRET_KEY || 'TSE-Poder-legislativo', { expiresIn: '2h' });
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 2 * 60 * 60 * 1000,
        path: '/',
    });
    return res.json({ user, bandera });
};
export const getCurrentUser = (req, res) => {
    const user = req.user;
    res.json({
        rfc: user.rfc,
    });
};
export const cerrarsesion = async (req, res) => {
    res.clearCookie('accessToken', {
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
    });
    return res.status(200).json({ message: 'Sesión cerrada' });
};
//# sourceMappingURL=users.js.map