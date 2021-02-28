import { combineReducers } from 'redux';
import user from './user_reducer';

// combineReducer를 이용해서 각종 reducer를 root Reducer 하나로 합침

const rootReducer = combineReducers({
    user
})

export default rootReducer;