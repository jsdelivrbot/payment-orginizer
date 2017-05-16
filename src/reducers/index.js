import { combineReducers } from 'redux';
import GardenReducer from './garden-reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  garden: GardenReducer
});

export default rootReducer;



//
// import { combineReducers } from 'redux';
// import PostsReducer from './reducer-posts';
// import {reducer as formReducer} from 'redux-form';
//
// const rootReducer = combineReducers({
//   post: PostsReducer,
//   form: formReducer
// });
//
// export default rootReducer;
