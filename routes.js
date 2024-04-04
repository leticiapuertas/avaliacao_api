import express from 'express' 
import sql from 'mssql' 
import { sqlConfig } from './config.js'; 

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router()

routes.get('/', async (req, res)=>{
    try{
         const { recordset } =  await pool.query`select * from avaliacao`
         return res.status(200).json(recordset)
    }
    catch(error){
         return res.status(501).json('algo deu errado')
    }
 })
 routes.post('/agendamento/novo', async (req,res)=>{
    try{
        const {hora, motivo_reserva, data_agendamento, nome_espaco } = req.body;
        await pool.query`insert into avaliacao values(${hora},${motivo_reserva},${data_agendamento}, ${nome_espaco})`
        return res.status(201).json(`ok`)
    }
    catch(error){
        return res.status(501).json('erro ao inserir...')
    }
 })

 routes.delete('/agendamento/excluir/:id', async (req, res)=>{
    try {
        const { id } = req.params
        await pool.query`delete from avaliacao where id = ${id}`
        return res.status(200).json('excluido!')
    } catch (error) {
        console.log(error)
        return res.status(501).json('erro ao excluir...')
    }
})


 export default routes;