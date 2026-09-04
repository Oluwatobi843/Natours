const express = require('express');
const Tour = require('./../models/tourModel')

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8'))




exports.getAllTours = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
       
    })
}

exports.getTour =  (req, res) => {
    
    console.log(req.params )

    const id = req.params.id * 1;
       const tour = tours.find(el => el.id === id);

    // if(id > tours.length){
    if(!tour){
        return res.status(404).json({
             status: 'fail',
             message: 'Invalid ID'
        })
    }

 
    res.status(200).json({
        status: 'success',
        data: {
            tour: tour 
        }
    })
}

exports.createTour = async (req, res) => {
    const newTour = await Tour.create(req.body)

  res.status(201).json({
    status: 'success', 
    data: {
        tour: newTour
    }
  })
   

     
}


exports.updateTour = (req, res) => {
 

    res.status(200).json({
      
    })
} 

exports.deleteTour  =  (req, res) => {


    res.status(204).json({
        status: 'success',
        data: null
    });
}