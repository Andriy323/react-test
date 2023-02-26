import { configureStore } from '@reduxjs/toolkit'
// import contactReduce from './contact-reducer/contact-reducer'
import contactReducer from './contactSlice'
 const store = configureStore({
  reducer: {
    contacts: contactReducer
  },
})

export default store