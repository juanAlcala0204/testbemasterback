/**
 * @fileoverview Archivo contenido de servicio cotización.
 * @author Juan David Alcala Sanchez
 */

/** DECLARACIÓN LIBRERÍA MONGO */
const SqlLib = require('../../../lib/SqlLib');

/** CREACIÓN CLASE CLIENTE SERVICIÓ, METODOS PARA INTERACCIÓN CON CLIENTE */
class Class {
    constructor() {
        this.table = 'clase';
        this.sqlDB = new SqlLib();
    }

    async findAllClasses(dataCondition, typeConsult) {
        try {
            const listProducts = await this.sqlDB.find(`clase_carrera cc`, 
            `inner join ${this.table} c on c.idClase = cc.idClase where idCarrera = ${dataCondition}`);
            const response = (listProducts.response) ? listProducts : false;
            return typeConsult == 'TABLE' ? response.data : response;
        } catch (error) {
            console.error(' Error while try to execute method findAllClasses of the Class Carrer:' + error);
            return false;
        }
    }

}


module.exports = Class;