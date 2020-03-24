import { connect } from 'react-redux';
import { Footer } from '../components/footer';

const mapStateToProps = (state) => ({
  theme: state.appReducer.theme,
});

export default connect(mapStateToProps, {})(Footer);
