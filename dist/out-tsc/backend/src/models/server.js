import express from 'express';
import routeUser from "../routes/user";
import rRifa from "../routes/rifa";
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import { verifyToken } from '../middlewares/auth';
class Server {
    app;
    port;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3018';
        this.middlewares();
        this.routes();
        this.dbConnect();
        this.listen();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("La aplicación se está corriendo exitosamente en el puerto => " + this.port);
        });
    }
    routes() {
        this.app.use(routeUser);
        this.app.use(rRifa);
    }
    middlewares() {
        // Configuración de CORS
        this.app.use(cors({
            origin: 'http://localhost:4200',
            credentials: true
        }));
        // Parseo de JSON
        this.app.use(express.json());
        this.app.use(cookieParser());
        // Archivos estáticos
        this.app.use('/storage', express.static(path.join(process.cwd(), 'storage')));
        // Middleware de autenticación
        this.app.use((req, res, next) => {
            const publicPaths = [
                '/api/user/login',
                '/api/buscador',
                '/api/rifa'
            ];
            const isPublic = publicPaths.some(path => req.path.startsWith(path));
            if (isPublic) {
                return next();
            }
            return verifyToken(req, res, next);
        });
    }
    async dbConnect() {
        try {
            console.log("Conexión a la base de datos exitosa");
        }
        catch (error) {
            console.log("Error en la conexión a la base de datos => " + error);
        }
    }
}
export default Server;
//# sourceMappingURL=server.js.map