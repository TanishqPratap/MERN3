const http = require('http'); 
const express=require('express');

const car = { 
        make: 'Toyota', 
        model: 'Corolla', 
        year: 2018, 
        color: 'Blue' 
}; 
console.log('Car properties:', car); 
delete car.model; 
console.log('Car properties after deletion:', car); 
const objectLength = Object.keys(car).length; 
console.log('Object length:', objectLength); 