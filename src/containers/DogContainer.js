import { connect } from 'react-redux';
import PicsList from '../components/PicsList';

const mapStateToProps = (state) => {
  return {
    doggos: state
  };
};

export default connect(mapStateToProps)(PicsList);
