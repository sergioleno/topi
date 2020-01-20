const LanguageReducer = (state, action) => {
  switch (action.type) {
    case 'U':
      return action.data;
    case 'UPDATE_PLANOS_ACEITOS':
      return { ...state, planos: [...action.data] };
    default:
      return state;
  }
};

export default LanguageReducer;
