import { createStore } from 'redux'
import reducer from './Reducer'

const initialState = {message: ""}

const store = createStore(
    reducer,
    initialState
)

export default store;