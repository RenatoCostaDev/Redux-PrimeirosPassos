import { combineReducers } from 'redux'; // combineReducers: combina os reducers(1 ou +)
                                         // No exemplo só usamos 1 (course)   
import course from './course';

export default combineReducers({
    course,
})