import roles from '../../mockups/roles';

const INITIAL_STATE = {
    discussion: {},
    roles: roles || [],
    people: [],
    selectedRoles: [],
    roleEdit: {}
};

function addToSelectedRoles(state, { payload }) {
    state = {
        ...state,
        selectedRoles: state.selectedRoles.concat([payload])
    };

    return state;
}

function removeFromSelectedRoles(state, { payload }) {
    state = {
        ...state,
        selectedRoles: state.selectedRoles.filter(role => role._id !== payload)
    };

    return state;
}

function selectRoleEdit(state, { payload }) {
    state = {
        ...state,
        roleEdit: state.roles.find(role => role._id === payload)
    };

    return state;
}

function addDiscussionReducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case('addToSelectedRoles'): return addToSelectedRoles(state, action);
        case('removeFromSelectedRoles'): return removeFromSelectedRoles(state, action);
        case('selectRoleEdit'): return selectRoleEdit(state, action);
        default: return state;
    }
}

export default addDiscussionReducer;