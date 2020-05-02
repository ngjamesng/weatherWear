import { TEMPERATURE_PREFERENCE, ACTIVITY_LEVEL } from "./actionTypes";

const INITIAL_STATE = {
  temperaturePreference: "celsius",
  activityLevel: "low"
}

function rootReducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case TEMPERATURE_PREFERENCE:
      return {
        ...state, 
        temperaturePreference: action.payload.temperaturePreference
      }
    case ACTIVITY_LEVEL:
      return {
        ...state, 
        activityLevel: action.payload.activityLevel
      }
  }
}

export default rootReducer;
