import {combineReducers} from 'redux';
import userSlice from '../reducers/user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;
