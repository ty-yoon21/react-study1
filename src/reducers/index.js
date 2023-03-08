/**
 * App Reducers
 */
import { combineReducers } from 'redux';


// System
import tsysMenuReducer from './TsysMenuReducer';
//impoort tsysAuthReducer from './TsysAuthReducer';

// Auth
import tAuthReducer from './TAuthReducer';

const reducers = combineReducers({

    tsysMenuReducer: tsysMenuReducer,
    //tsysAuthReducer: tsysAuthReducer,
    tAuthReducer: tAuthReducer,
});

export default reducers;