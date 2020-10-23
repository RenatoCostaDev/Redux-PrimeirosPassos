// store => Cria o estado global, onde fica armazenado a maioria dos daos da aplicação
import { createStore } from 'redux';

import rootReducer from './reducers'

const store = createStore(rootReducer);
export default store;