const pool = require("../db/database");

class SqlLib {
  constructor() {
    this.pool = pool;
  }

  async create(table, data) {
    try {
      let results = await this.pool.query(`INSERT INTO ${table} set ?`, [data]);
      return {
        response: true,
        data: results,
      };
    } catch (error) {
      console.error(`INSERT INTO ${table} set ${data}`);
      console.error(
        " ERROR WHILE TRY TO EXECUTE FUNCTION CREATE OF LIB SQL : " + error
      );
      return false;
    }
  }

  async find(tables, condition) {
    try {
      let results;
      //console.log("QUERY", condition);
      //console.log("TABLES", tables);
      results = await this.pool.query(`SELECT * FROM ${tables} ${condition}`);
      return {
        response: true,
        data: results,
      };
    } catch (error) {
      console.error(
        " ERROR WHILE TRY TO EXECUTE FUNCTION FIND OF LIB SQL : " + error
      );
      return false;
    }
  }

  async update(tables, data, condition) {
    try {
      let results;
      //console.log("data", data);
      //console.log("TABLES", tables);
      //console.log("TABLES", `UPDATE ${tables} set ? where ${condition}`);
      results = await this.pool.query(
        `UPDATE ${tables} set ? where ${condition}`,
        [data]
      );
      return {
        response: true,
        data: results,
      };
    } catch (error) {
      console.error(
        " ERROR WHILE TRY TO EXECUTE FUNCTION UPDATE OF LIB SQL : " + error
      );
      return false;
    }
  }

  async query(query) {
    try {
      let results;
      //console.log("uqery", query);
      results = await this.pool.query(query);
      return {
        response: true,
        data: results,
      };
    } catch (error) {
      console.error(
        " ERROR WHILE TRY TO EXECUTE FUNCTION FIND OF LIB SQL : " + error
      );
      return false;
    }
  }
}

module.exports = SqlLib;
