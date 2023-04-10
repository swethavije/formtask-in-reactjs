import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Form from './Form'
import { stateContext } from './Context'
import { initialState, stateReducer } from './StateReducer'

const Routing = () => {
  const [state,dispatch]=useReducer(stateReducer,initialState);
  console.log("state",state)
  return (
    <stateContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Form" element={<Form />}></Route>
        {/* <Route path="/edit" render={() => <Form selectedData={editData} />} /> */}
    </Routes>
    </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Routing