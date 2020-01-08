import Header from '../components/Header';
import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import { HeaderActions } from '../actions/HeaderAction';

const mapStateToProps = (state: IGlobalState) => ({
    collapsed: state.collapsed
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onFilterClick: (collapsed: boolean) => {
        dispatch({type: HeaderActions.HEADER_COLLAPSE, payload: collapsed})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)