import express from 'express'
import morgan from 'morgan'
import rolesRoutes from './routers/rol.routes'
import alumnoRouter from './routers/alumno.routers'
import userRouters from './routers/user.routers'
import authRouters from './routers/auth.routers'


const app= express();
var cors = require('cors');
app.use(express.json());
app.use(cors());


app.use(morgan('dev'));

app.get('/',function(req,res,next) {
    res.send('bienvenido a node js...!');
    
});
    app.use('/api/auth/roles', rolesRoutes);
    app.use('/api/alumno', alumnoRouter);
    app.use('/api/auth', userRouters);
    app.use('/api/auth/users', authRouters);
    
   export default app;