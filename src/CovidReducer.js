const CovidReducer = (
    (state, action) => 
    {
        switch(action.type)
        {
            case "country":
                {
                    return [action.payload, ...state]
                }
            default:
                return state;
        }
    }
)

export default CovidReducer;