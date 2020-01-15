import React from 'react';

interface IMainClasses<T> {
    main: T;
}

export interface IMainProps {
    classes: IMainClasses<string>;
}

class Main extends React.Component<IMainProps, {}> {
    public render() {
        return (
            <div className={this.props.classes.main}>
                <p className="text-centered">Main content here</p>
            </div>

        );
    }
}


export default Main;