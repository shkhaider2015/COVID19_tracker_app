import React, { createContext, useReducer } from 'react'
import CovidReducer from './CovidReducer'

const initialData = [
    {country : 'Pakistan'}
]

export const CovidContext = createContext(initialData);

export const CovidProvider = ({ children }) => 
{
    let [state, dispatch] = useReducer(CovidReducer, initialData)

    function addData(myData)
    {
        dispatch({
            type : "aa",
            payload : {
                country : myData
            }
        })
    }
}