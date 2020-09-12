const CountryReducer = ((state, action) => {
    switch (action.type) {
        case "changeCountry":
            {
                return [action.payload, ...state]
            }
        default:
            return state;
    }
}

)

export default CountryReducer;