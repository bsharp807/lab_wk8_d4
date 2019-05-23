import { connect } from 'react-redux';
import PicsList from '../components/PicsList';

const mapStateToProps = (state) => {
  return {
    doggos: state.doggos
  };
};

export default connect(mapStateToProps)(PicsList);
