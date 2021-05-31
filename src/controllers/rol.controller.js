import e from 'express';
import {pool} from '../database'

 export const readAllRoles = async(req, res)=>{
    try {
        const response= await pool.query('select * from rol');
        return res.status(200).json(response.rows);

    } catch (error) {
        console.log(error);
        return res.status(500).json('internal server error...!');
    }
}
 export const readRoles =  async(req, res)=>{
     try {
          const id = parseInt(req.params.id);
          const response = await pool.query('select * from rol where idrol=$1', [id]);
          return res.status(200).json(response.rows);
     } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error..!'); 
     }
 }
  export const delRol = async(req,res)=>{
      try {
          const id = parseInt(req.params.id);
          const response = await pool.query('delete from rol where idrol=$1',[id]);
          return res.status(200).json(`Rol ${id} eliminado correctamente...!`);
      } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server error...!');

      }
  }

   export const updateRoles = async(req,res)=>{
       try {
           const id = parseInt(req.params.id);
           const {cargo} = req.body;
           await pool.query('update rol set cargo$1 where idrol=$1',[cargo,id]);
           return res.status(200).json(
               `Rol ${id} modificado correctamente...!`);
       } catch (error) {
            console.log(error);
             return res.status(500).json('Internal server error...!');
           
       }
   }
    export const createRoles = async(req,res)=>{
        try {
            const {cargo} = req.body;
            await pool.query('insert into rol(cargo) values($1)',[cargo]);
            return  res.status(200).json(`Rol ${cargo} creado correctamente...!`);

        } catch (error) {
            console.log(error)
            return res.status(500).json('Server internal error..!')
        }
    };