/**
 * App Reducers
 */
import { combineReducers } from 'redux';


// System
import tsysMenuReducer from './TsysMenuReducer';
//impoort tsysAuthReducer from './TsysAuthReducer';

const reducers = combineReducers({

    tsysMenuReducer: tsysMenuReducer,
    //tsysAuthReducer: tsysAuthReducer,
});

export default reducers;