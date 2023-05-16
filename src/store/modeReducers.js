const initialState = {
    mode: false,
};
const modeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_MODE':
        return { ...state, mode: !state.mode };
      default:
        return state;
    }
};

export default modeReducer;