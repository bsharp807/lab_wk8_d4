import React from 'react';

const Error = (props) => {
  console.log(props);
  if(props.status) {
    return(
      <div>Breed doesn't exist, thicko!</div>
    )
  } return null;
}

export default Error;
