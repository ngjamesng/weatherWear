import {
  CHANGE_TO_FAHRENHEIT,
  CHANGE_TO_CELSIUS,
  CHANGE_TO_LOW_ACTIVITY,
  CHANGE_TO_HIGH_ACTIVITY
} from "./actionTypes";

const INITIAL_STATE = JSON.parse(localStorage.getItem("preferences")) || {
  temperaturePreference: "celsius",
  activityLevel: "low"
}

function rootReducer(state = INITIAL_STATE, action) {
  let changedState = {};
  switch (action.type) {
    case CHANGE_TO_FAHRENHEIT:
      changedState = {
        ...state,
        temperaturePreference: action.payload.temperaturePreference
      };
      break;
    case CHANGE_TO_CELSIUS:
      changedState = {
        ...state,
        temperaturePreference: action.payload.temperaturePreference
      };
      break;
    case CHANGE_TO_LOW_ACTIVITY:
      changedState = {
        ...state,
        activityLevel: action.payload.activityLevel
      };
      break;
    case CHANGE_TO_HIGH_ACTIVITY:
      changedState = {
        ...state,
        activityLevel: action.payload.activityLevel
      };
      break;
    default:
      return state;
  }
  localStorage.setItem("preferences", JSON.stringify(changedState));
  return changedState;
}

export default rootReducer;
