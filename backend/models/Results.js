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
    FROM results
    ORDER BY id DESC
    LIMIT 25`, []
    )
    return results.rows;
  }

  static async addResult(data) {
    const { name, dt } = data;
    const responseFromDatabase = await db.query(
      `
      SELECT id, data from results 
      WHERE data @> $1
      ORDER BY id DESC
      LIMIT 1;
      `, [JSON.stringify({ name: name })]
    )

    if (responseFromDatabase.rows.length) {
      const { dt: responseDt } = responseFromDatabase.rows[0].data;
      // if less than 1 hour in the same city return
      if (dt - responseDt < 3600) return;
    }
    
    // else add to the database 
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