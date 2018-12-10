import {
    SET_BLOGS
} from '../actions/types;'

const INITIAL_STATE = {
    blogs: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_BLOGS:
            const blogs = action.payload;
            return {
                ...state,
                blogs
            }
        default: return state;
    }
}