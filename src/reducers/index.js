import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  form,
  posts: postsReducer
});

export default rootReducer;