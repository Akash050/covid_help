import * as dummyActionType from "../actionsType/dummyActionType";

export default (state = {}, action) => {
    switch (action.type) {
        case dummyActionType.DUMMY:
            return {
                ...state,
                payload: action.payload,
            };
        default:
            return state;
    }
};
