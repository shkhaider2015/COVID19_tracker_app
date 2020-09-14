const MyCountryReducer = (state, action) => 
{
    
    switch (action.type) 
    {
        case "updateCountry":
            {
                console.log("in updateCountry dispatch() ")
                console.log("action.payload ", action.payload)
                return;
            }
        case "getCountry":
            {
                console.log("in GetCountry() called")
                return action.payload;
            }
        default:
            return state;
    }
}

export default MyCountryReducer;