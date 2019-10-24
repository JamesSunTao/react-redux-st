import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
// import App from '../router'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store