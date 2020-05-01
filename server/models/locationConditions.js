const db = require("../db");

class LocationConditions {
  static async getCondition({ woeid, date }) {
    const conditionResponse = await db.query(
      `SELECT 
        id, 
        conditions.woeid, 
        city_name, 
        location_type, 
        applicable_date, 
        the_temp, 
        wind_speed, 
        weather_state_name 
      FROM conditions
      JOIN locations ON conditions.woeid = locations.woeid
      WHERE locations.woeid = $1 
        AND applicable_date = $2`,
      [woeid, date]
    )
    // const condition = conditionResponse.rows[0];
    const condition = conditionResponse.rows;
    return condition;
  }

  static async addCondition({ woeid, city_name, location_type, condition }) {
    const { applicable_date, the_temp, wind_speed, weather_state_name } = condition;
    const locationsResponse = await db.query(`
      INSERT INTO locations (
        woeid, city_name, location_type
      )
      VALUES ($1, $2, $3) 
      ON CONFLICT DO NOTHING
      returning woeid, city_name;
    `, [woeid, city_name, location_type]);
    const conditionResponse = await db.query(`
    INSERT INTO conditions (
      woeid, applicable_date, the_temp, wind_speed, weather_state_name
    )
    values ($1, $2, $3, $4, $5)
    RETURNING id, woeid, applicable_date, the_temp, wind_speed, weather_state_name;
    `, [woeid, applicable_date,
      Math.round(the_temp),
      Math.round(wind_speed),
      weather_state_name]);

    const dbConditionResp = conditionResponse.rows[0];
    return dbConditionResp;
  }

  static async getConditionById(id) {
    const conditionResponse = await db.query(
      `SELECT 
        id, 
        conditions.woeid, 
        city_name, 
        location_type, 
        applicable_date, 
        the_temp, 
        wind_speed, 
        weather_state_name 
      FROM conditions
      JOIN locations ON conditions.woeid = locations.woeid
      WHERE conditions.id= $1`
      , [id]);
    const condition = conditionResponse.rows;
    return condition;
  }
}

module.exports = LocationConditions;