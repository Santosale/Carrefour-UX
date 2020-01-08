import React from 'react';
import SearchText from './SearchText';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

library.add(faFilter);

interface IHeaderProps {
    collapsed: boolean;
    onFilterClick: (collapse: boolean) => any;
}

interface IHeaderState {
    searchText: string;
    
}

class Header extends React.Component< IHeaderProps , IHeaderState> {
    constructor (props: IHeaderProps ){
        super (props);
        // change state
        this.state = { searchText: ""};
    }

    
    public onSearchTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchText: event.target.value});
    }

    public render (){
    const onClick = () => {
        this.props.onFilterClick(!!!this.props.collapsed)
    }
    return (<div className="header">
    <p>Hola mundo: {this.state.searchText}</p>
    <a className="btn btn-success" onClick={onClick}>
        <FontAwesomeIcon icon="filter" />
    </a>
    {!!!this.props.collapsed ?
        <div className="filterForm">
            <SearchText onSearchTextChange={this.onSearchTextChange}/>
    </div>
    : null}
    </div>);
    }
}

export default Header;