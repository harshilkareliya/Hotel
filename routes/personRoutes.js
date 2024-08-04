const express = require('express');
const routes = express.Router();
const Person = require('../models/Person');

routes.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

routes.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Person Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

routes.get('/:work', async (req, res) => {
    try {
        const findData = req.params.work;
        let data;

        if (findData === 'chef' || findData === 'waiter' || findData === 'manager') {
            data = await Person.find({ work: findData });
            console.log('Work data fetched');
        } else {
            const regex = new RegExp(findData, 'i'); // 'i' for case-insensitive
            data = await Person.find({ name: regex });
            console.log('Named data fetched');
        }

        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'No records found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

routes.put('/:id',async (req,res)=>{
    try{
        const personId = req.params.id
        const updtaedPersonData = req.body

        const response = await Person.findByIdAndUpdate(personId,updtaedPersonData,{
            new: true,
            runValidators: true,
        })

        if(!response){
            return res.status(404).json({error : 'Person not found'})
        }

        console.log('Person Data Updated Successfully')
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

routes.delete('/:id',async (req,res)=>{
    try{
        const personId = req.params.id
        const response = await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error : 'Person not found'})
        }
        console.log('Person Data Deleted Successfully')
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = routes;
