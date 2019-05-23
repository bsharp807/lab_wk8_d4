import React from 'react';

const Form = (props) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.getRandomDoggo(evt.target.breed.value);

  }

  return(
    <form autocomplete='off' onSubmit={handleSubmit}>
      <input type='text' name='breed'/>
      <button type='submit'></button>
    </form>
  );
}

export default Form
