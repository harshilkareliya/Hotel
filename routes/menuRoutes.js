const express = require('express')
const routes = express.Router()
const Menu = require('../models/Menu')

routes.post('/', async (req,res)=>{
    try{
        const data = req.body

        const newMenu = new Menu(data)

        const response = await newMenu.save()
        console.log('Menu saved successfully')
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error : 'Enter nal server error'})
    }
})

routes.get('/',async (req,res)=>{
    try{
        const data = await Menu.find()
        console.log('Menu fatched successfully')
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error : 'Enternal server error'})
    }
})

routes.put('/:id',async (req,res)=>{
    try{
        const menuId = req.params.id 
        const unpdatedMenu = req.body

        const response = await Menu.findIdAndUpdate(menuId,unpdatedMenu,{new:true,runValidators:true})

        if(!response){
            return res.status(404).json({error : "Menu not Found"})
        }

        console.log("Menu Updated successfully")
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error : 'Enternal server error'})
    }
})

routes.delete('/delete',async (req,res)=>{
    
})

module.exports = routes