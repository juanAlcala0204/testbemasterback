/**
 * @fileoverview Archivo contenido de lógica principal de enrutamiento sobre modulo Carrera.
 * @author Juan David Alcala Sanchez
 */

/** DECLARACIÓN CONSTANTES DE DEPENDENCIAS */
const express = require('express');
const ClassController = require('../../controllers/class/controllerClass');


function RoutesLogicModuleClass(router) {

    const controller = new ClassController();

    router.get('/app/getAllClasses/:TYPE_CONSULT/:ID_CAREER', async(req, res) => controller.getAll(req, res));
    
}

module.exports = RoutesLogicModuleClass;