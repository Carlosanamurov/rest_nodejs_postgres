import e from 'express';
import {pool} from '../database'

export const readAllAlumno = async(req,res)=>{
    try {
        const response = await pool.query('select * from alumno');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Server internal error...!');
    }
}
 export const readAlumno= async(req,res)=>{
     try {
         const id = parseInt(req.params.id);
         const response = await pool.query('select * from alumno where idalumno=$1',[id]);
         return res.status(200).json(response.rows);
     } catch (e) {
         console.log(e);
         return res.status(500).json('Server internal error...!');
     }
 }