/**
 * @fileoverview Archivo de control rutas servidor.
 * @author Juan David Alcala Sanchez
 */

/** DECLARACIÓN DEPENDENCIAS / UTILIDADES */
const express = require('express');
const RoutesLogicModuleCareer = require('./career/routeModuleCareer');

/**
 *  FUNCIONALIDAD PRINCIPAL DE ENRUTAMIENTO API Y CONSUMO DE CAPA DE SERVICIOS
 * @param app // Recibe la app de express como parámetro
 */

function UniversityApi(app) {

    /** Declaración router **/
    const router = express.Router();

    /** OBTENCIÓN DECLARACIÓN DE RUTAS VIEWS */
    RoutesLogicModuleCareer(router);
    return router;
}

module.exports = UniversityApi;