const MyCountryReducer = (state, action) => 
{
    switch (action) 
    {
        case "updateCountry":
            {
                if(state === "")
                {
                    console.log("No Country Select")
                }
                else
                {
                    console.log(state)
                }
                return;
            }
        default:
            return state;
    }
}

export default MyCountryReducer;