import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
// import App from '../router'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// npm install redux-devtools-extension --save-dev 要想使用chrome redux调试插件，还需要在项目中安装 redux-devtools-extension 插件

export default store