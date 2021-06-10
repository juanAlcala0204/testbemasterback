/**
 * @fileoverview Archivo contenido de lógica principal de enrutamiento sobre modulo Carrera.
 * @author Juan David Alcala Sanchez
 */

/** DECLARACIÓN CONSTANTES DE DEPENDENCIAS */
const express = require('express');
const CareerController = require('../../controllers/career/controllerCareer');


function RoutesLogicModuleCareer(router) {

    const controller = new CareerController();

    router.post('/app/registerCareer/', async(req, res) => controller.register(req, res));
    router.get('/app/getAllCareers/:TYPE_CONSULT', async(req, res) => controller.getAll(req, res));
    router.put('/app/updateCareer/', async(req, res) => controller.update(req, res));
    
}

module.exports = RoutesLogicModuleCareer;