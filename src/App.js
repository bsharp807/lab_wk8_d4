import React from 'react';
import FormContainer from './containers/FormContainer'
import ErrorContainer from './containers/ErrorContainer'
import DogContainer from './containers/DogContainer'

function App() {
  return (
    <div className="App">
      <h1>DOGGOS</h1>
      <FormContainer />
      <ErrorContainer />
      <DogContainer />
    </div>
  );
}

export default App;
