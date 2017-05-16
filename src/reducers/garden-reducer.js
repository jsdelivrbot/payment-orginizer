import { FETCH_GARDEN_DATA } from '../actions/index';

const INITIAL_STATE = {
  all: [{"boo": 5}]
};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GARDEN_DATA:
      console.log("got garden data", action)
      return {
        ...state,
        garden: action.payload.data
      } // take our current state and add on payload.data

     default:
       return state;
  }

  return state;
}
