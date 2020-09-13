import React, { createContext, useReducer } from "react"
import CountryReducer from "../Reducer/CountryReducer";


const initialSelect = [
    {countryName : 'Global'},
]

export const CountryContext = createContext(initialSelect);

export const CountryProvider = ({ children }) =>
{
    let [state, dispatch] = useReducer(CountryReducer, initialSelect)

    function selectCountry(CountryObject)
    {
        dispatch({
            type : "changeCountry",
            payload : {
                countryName : CountryObject.countryName,
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