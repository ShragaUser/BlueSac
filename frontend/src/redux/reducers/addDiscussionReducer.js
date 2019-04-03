const INITIAL_STATE = {
    discussion: {},
    roles: [],
    people: [],
    selectedRoles: []
};

function addToSelectedRoles(state, { payload }) {
    state = {
        ...state,
        selectedRoles: state.selectedRoles.concat([payload])
    };

    return state;
}

function removeFromSelectedRoles(state, { payload }) {
    return Object.assign({}, state, {
        selectedRoles:
            state.selectedRoles.filter(role => (
                role._id !== payload
            ))
    });
}

function addDiscussionReducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case('addToSelectedRoles'): return addToSelectedRoles(state, action);
        case('removeFromSelectedRoles'): return removeFromSelectedRoles(state, action);
        default: return state;
    }
}

export default addDiscussionReducer;