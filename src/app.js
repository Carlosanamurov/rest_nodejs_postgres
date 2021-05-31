import express from 'express'
import morgan from 'morgan'
import rolesRoutes from './routers/rol.routes'
import alumnoRouter from './routers/alumno.routers'


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
   export default app;