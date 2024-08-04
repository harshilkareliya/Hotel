const express = require('express');
const routes = express.Router();
const Customer = require('../models/Customer');

routes.post('/',async (req,res)=>{
    try{
        const data = req.body

        const newCustomer = new Customer(data)

        const response = await newCustomer.save()

        console.log('Customer Add successfully')
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
    }
})

routes.get('/',async (req,res)=>{
    try{
        const data = await Customer.find()
        console.log('Customer Fetched successfully')
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
    }
})

routes.put('/:id',async (req,res)=>{
    try{
        const customerId = req.params.id
        const updatedCustomer = req.body

        const response = await Customer.findByIdAndUpdate(customerId,updatedCustomer,{
            new: true,
            runValidators: true,
        })

        if(!response){
            return res.status(404).json({error : 'Customer not Found'})
        }

        console.log('Customer Data Updated Successfully')
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
    }
})

module.exports = routes