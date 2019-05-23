const dogReducer = (state = {doggos: [], error: false}, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      if(action.dogData.status === 'success'){
        const newDoggos = [...state.doggos, action.dogData]
        return {...state, doggos: newDoggos, error: false};
      } else{
        const errorState = {...state, error: true}
        return errorState
      }
    default:
      return state;
  }
};

export default dogReducer;
