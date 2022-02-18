import { createStore } from "redux"
import { bookReducer } from "./bookReducer"

const configureStore = () => {
    return createStore(
        bookReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configureStore