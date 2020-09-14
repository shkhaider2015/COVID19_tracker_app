const CountryReducer = ((state, action) => {
    switch (action.type) {
        case "changeCountry":
            {
                console.log("In Reducer -- >")
                console.log(action.payload)
                return [action.payload, ...state]
            }
        default:
            return state;
    }
}

)

export default CountryReducer;