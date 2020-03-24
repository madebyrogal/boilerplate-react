import { connect } from 'react-redux';
import { appSetTheme } from '../reducers/app/actions';
import { Header } from '../components/header';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  appSetTheme,
})(Header);
