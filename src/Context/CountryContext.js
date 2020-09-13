import React, { createContext, useReducer } from "react"
import CountryReducer from "../Reducer/CountryReducer";


const initialSelect = [
    {countryName : ''},
]

export const CountryContext = createContext(initialSelect);

export const CountryProvider = ({ children }) =>
{
    let [state, dispatch] = useReducer(CountryReducer, initialSelect)

    function selectCountry(countryName)
    {
        dispatch({
            type : "changeCountry",
            payload : {
                countryName : countryName,
            }
        })
    }

    return (
        <CountryContext.Provider
        value={
            {
                country : state,
                selectCountry // selectCountry : selectCountry
            }
        }
        >
            { children }


        </CountryContext.Provider>

    )
}