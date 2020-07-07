const db = require("../db");

class Results {
  static async getResultById(id) {
    const result = await db.query(
      `SELECT 
        id, 
        data
        FROM results
        WHERE id = $1`, [id]
    )
    return result;
  }

  static async getResults() {
    const results = await db.query(
      `SELECT 
      id, 
      data
    FROM results`, []
    )
    return results.rows;
  }

  static async addResult(data) {
    const result = await db.query(
      `INSERT INTO results (data)
      VALUES ($1)
      RETURNING id, data
      `, [data]
    );
    return result.rows[0];
  }

}

module.exports = Results;