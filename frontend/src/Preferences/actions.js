import {
  CHANGE_TO_FAHRENHEIT,
  CHANGE_TO_CELSIUS,
  CHANGE_TO_LOW_ACTIVITY,
  CHANGE_TO_HIGH_ACTIVITY
} from "./actionTypes";

function changeToFahrenheit() {
  return {
    type: CHANGE_TO_FAHRENHEIT,
    payload: {
      temperaturePreference: "fahrenheit"
    }
  }
}
function changeToCelsius() {
  return {
    type: CHANGE_TO_CELSIUS,
    payload: {
      temperaturePreference: "celsius"
    }
  }
}
function changeToHighActivity() {
  return {
    type: CHANGE_TO_HIGH_ACTIVITY,
    payload: {
      activityLevel: "high"

    }
  }
}
function changeToLowActivity() {
  return {
    type: CHANGE_TO_LOW_ACTIVITY,
    payload: {
      activityLevel: "low"
    }
  }
}

export {
  changeToFahrenheit,
  changeToCelsius,
  changeToLowActivity,
  changeToHighActivity,
};