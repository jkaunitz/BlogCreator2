import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import blogs from './blogReducer';

const rootReducer = combineReducers({
    form,
    blogs
})

export default rootReducer;