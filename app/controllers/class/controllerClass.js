/**
 * @fileoverview Archivo contenido de controlador sobre modulo Carrera.
 * @author Juan David Alcala Sanchez
 */

/** DECLARACIÓN CONSTANTES DE DEPENDENCIAS */
const express = require('express');
const Class = require('../../services/class/Class');

class ClassController {
    constructor() {
        this.service = new Class();
    }

    async getAll(req, res) {
        try {
            // Obtención data request
            const { params } = req;

            // Uso servicios
            const getService = await this.service.findAllClasses(params.ID_CAREER, params.TYPE_CONSULT);

            if (!getService) throw "Error while execute service getAll "

            res.status(200).json(getService);

        } catch (error) {
            console.error(error);
            res.status(400).json({
                response: false,
                errorLog: error,
                errorMessageClient: 'Se presento un inconveniente mientras se obtenía las clases'
            });
        }
    }

}

module.exports = ClassController;