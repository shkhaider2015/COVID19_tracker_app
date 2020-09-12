const CovidReducer = (
    (state, action) => 
    {
        switch(action.type)
        {
            case "a":
                {
                    return [action.payload, ...state]
                }
            default:
                return state;
        }
    }
)

export default CovidReducer;