const express = require('express');
const router = express.Router();
const helpers = require('../lib/helpers');
const path = require('path');




router.get('/',(req,res)=>{
    res.redirect('/empleados/list')
});

router.get('/empleados/list',(req,res)=>{
   const data =  helpers.leerFichero(req,res,'employees.txt');
    res.render('links/empleados',{data:data})
})
router.get('/empleados/create',(req,res)=>{
    res.render('links/create_user')
})

router.post('/empleados/create',(req,res)=>{
    //Obtengo las variables desde el formulario
    var json = req.body;
    const data =  helpers.leerFichero(req,res,'employees.txt');
    // Obtengo el último index para añadir el nuevo
    helpers.obtainLastIndex(data);
    var lastIndex = helpers.obtainLastIndex(data);
    //Parseo la variable line y la añado al texto
    var line = `${parseInt(lastIndex)},${json.name},${json.surname},${json.address},${json.phone},${json.email},${json.birthdate}\n`;
    helpers.writeFichero('employees.txt',line);

    res.redirect('/empleados/list');
});


router.get('/empleados/filteruser',(req,res)=>{
    res.render('links/buscador')
});








module.exports = router;