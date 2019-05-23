import React from 'react';

const Form = (props) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.getRandomDoggo(evt.target.breed.value.toLowerCase());
  }

  return(
    <form autoComplete='off' onSubmit={handleSubmit}>
      <input type='text' name='breed'/>
      <button type='submit'>Get Random Doggo</button>
    </form>
  );
}

export default Form
