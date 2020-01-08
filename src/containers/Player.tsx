import {connect} from 'react-redux';
import Player from '../components/Player';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({title: state.songTitle})
}
export default connect(mapStateToProps)(Player);