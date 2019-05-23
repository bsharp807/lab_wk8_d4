import { connect } from 'react-redux';
import Form from '../components/Form';


const mapDispatchToProps = (dispatch) => ({
  getRandomDoggo(breed) {
    dispatch(() => {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(dogData => {
        dispatch({
          type: 'ADD_DATA',
          dogData
        })
      })
    })
  }
})

export default connect(null, mapDispatchToProps)(Form);
