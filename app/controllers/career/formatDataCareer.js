const express = require('express');

const FormatDataCareer = (data) => ({
    idUniversidad: data.idUniversidad,
    nombre_carrera: data.nameCareer,
    descripcion_carrera: data.descriptionCareer,
    estado: 'A'
});


const FormatDataCareerUpdate = (data) => {
    let infoFormated = {};
    if(data.hasOwnProperty('nameCareer')) {
        infoFormated.nombre_carrera = data.nameCareer;
    }
    
    if(data.hasOwnProperty('descriptionCareer')){
        infoFormated.descripcion_carrera = data.descriptionCareer;
    }
    
    if(data.hasOwnProperty('stateCareer')) {
        infoFormated.estado = data.stateCareer
    }

    return infoFormated;
};

module.exports = {
    FormatDataCareer,
    FormatDataCareerUpdate
}