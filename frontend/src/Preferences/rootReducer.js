import {
  CHANGE_TO_FAHRENHEIT,
  CHANGE_TO_CELSIUS,
  CHANGE_TO_LOW_ACTIVITY,
  CHANGE_TO_HIGH_ACTIVITY
} from "./actionTypes";

const INITIAL_STATE = {
  temperaturePreference: "celsius",
  activityLevel: "low"
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_TO_FAHRENHEIT:
      return {
        ...state,
        temperaturePreference: action.payload.temperaturePreference
      }
    case CHANGE_TO_CELSIUS:
      return {
        ...state,
        temperaturePreference: action.payload.temperaturePreference
      }
    case CHANGE_TO_LOW_ACTIVITY:
      return {
        ...state,
        activityLevel: action.payload.activityLevel
      }
    case CHANGE_TO_HIGH_ACTIVITY:
      return {
        ...state,
        activityLevel: action.payload.activityLevel
      }
    default:
      return state;
  }
}

export default rootReducer;
