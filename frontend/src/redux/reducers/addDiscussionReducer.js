const INITIAL_STATE = {
    discussion: {},
    roles: [],
    people: [],
    selectedRoles: []
};

function addToSelectedRoles(state, { payload }) {
    return Object.assign({}, state, {
        selectedRoles: state.selectedRoles.concat([payload])
    });
}

function addDiscussionReducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case('addToSelectedRoles'): addToSelectedRoles(state, action);
        default: return state;
    }
}

export default addDiscussionReducer;