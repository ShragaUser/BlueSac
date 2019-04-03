import { combineReducers } from 'redux';
import discussionReducer from './discussionReducer';
import addDiscussionReducer from './addDiscussionReducer';

const rootReducer = combineReducers({
    discussionState: discussionReducer,
    addDiscussionState: addDiscussionReducer
});

export default rootReducer;