/**
 * @fileoverview Archivo contenido de controlador sobre modulo Carrera.
 * @author Juan David Alcala Sanchez
 */

/** DECLARACIÓN CONSTANTES DE DEPENDENCIAS */
const express = require('express');
const Carrer = require('../../services/career/Career');
const { FormatDataCareer, FormatDataCareerUpdate } = require('./formatDataCareer');

class CareerController {
    constructor() {
        this.service = new Carrer();
    }

    async register(req, res) {
        try {
            // Obtención data request
            const { body: infoCareer } = req;
            const idUniversidad = 1;

            // Uso servicios
            const infoFormated = FormatDataCareer({ ...infoCareer, idUniversidad });
            const createResponse = await this.service.registerCareer(infoFormated);

            if (!createResponse.response) throw "error failed when execute Service register ";

            res.status(201).json({
                response: createResponse.response,
                data: createResponse.data.insertId
            });

        } catch (error) {
            console.error(error);
            res.status(400).json({
                response: false,
                errorLog: error,
                errorMessageClient: 'Se presento un inconveniente mientras se creaba la Carrera'
            });
        }
    }

    async getAll(req, res) {
        try {
            // Obtención data request
            const { params } = req;
            const idUniversidad = 1;

            // Uso servicios
            const getService = await this.service.findAllCareers(idUniversidad, params.TYPE_CONSULT);

            if (!getService) throw "Error while execute service getAll "

            res.status(200).json(getService);

        } catch (error) {
            console.error(error);
            res.status(400).json({
                response: false,
                errorLog: error,
                errorMessageClient: 'Se presento un inconveniente mientras se obtenía las carreras'
            });
        }
    }

    async update(req, res) {
        try {
            const { body: infoUpdate } = req;

            // Uso servicios
            const infoFormated = FormatDataCareerUpdate(infoUpdate.data);
            const serviceUpdate = await this.service.updateCareer({ data: infoFormated, idCarrera: infoUpdate.idCarrera });

            if (!serviceUpdate.response) throw "Error failed when execute Service updateCareer";
            
            res.status(201).json({
                ...serviceUpdate
            });

        } catch (error) {
            console.error(error);
            res.status(400).json({
                response: false,
                errorLog: error,
                errorMessageClient:
                    "Se presento un inconveniente mientras se actualizaba información de carrera",
            });
        }
    }

}

module.exports = CareerController;