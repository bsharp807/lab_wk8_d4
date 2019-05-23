import { connect } from 'react-redux';
import Error from '../components/Error';

const mapStateToProps = (state) => {
  return {
    status: state.error
  };
};

export default connect(mapStateToProps)(Error);
