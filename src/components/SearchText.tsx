import React from 'react';

interface ISearchTextProps {
    onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


class searchText extends React.Component<ISearchTextProps, {}> {
    public constructor (props: ISearchTextProps) {
        super(props);
    }

    public onSearchTextChangeInternal = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onSearchTextChange(event);
    }

    public render() {
        return(
            <input type="text" name="searchText" placeholder="Buscar..."
                        onChange={this.onSearchTextChangeInternal} />
        )
    }

}

export default searchText