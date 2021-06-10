/**
 * @fileoverview Archivo contenido de servicio cotización.
 * @author Juan David Alcala Sanchez
 */

/** DECLARACIÓN LIBRERÍA MONGO */
const SqlLib = require('../../../lib/SqlLib');

/** CREACIÓN CLASE CLIENTE SERVICIÓ, METODOS PARA INTERACCIÓN CON CLIENTE */
class Carrer {
    constructor() {
        this.table = 'Carrera';
        this.sqlDB = new SqlLib();
    }

    async findAllCareers(dataCondition, typeConsult) {
        try {
            const listProducts = await this.sqlDB.find(`${this.table}`, `where idUniversidad = ${dataCondition}`);
            const response = (listProducts.response) ? listProducts : false;
            return typeConsult == 'TABLE' ? response.data : response;
        } catch (error) {
            console.error(' Error while try to execute method findAllCareers of the Class Carrer:' + error);
            return false;
        }
    }

    async registerCareer(dataCareer) {
        try {
            const createCareerId = await this.sqlDB.create(`${this.table}`, dataCareer);
            return createCareerId ? createCareerId : { response: false };
        } catch (error) {
            console.error(' Error while try to execute method registerCareer of the Class Carrer:' + error);
            return false;
        }
    }

    async updateCareer(dataUpdate) {
        try {
            const updateResponse = await this.sqlDB.update(
                `${this.table}`,
                { ...dataUpdate.data},
                `idCarrera = ${dataUpdate.idCarrera}`
            );
            const response = updateResponse.response ? updateResponse : false;
            return response;
        } catch (error) {
            console.error(
                " Error while try to execute method updateStateReservation: " + error
            );
            return false;
        }
    }

}


module.exports = Carrer;