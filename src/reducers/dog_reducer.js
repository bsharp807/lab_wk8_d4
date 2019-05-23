const dogReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DATA':
      const newState = [...state, action.dogData]
      return newState;
    default:
      return state;
  }
};

export default dogReducer;
