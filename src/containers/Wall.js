/**
 * Created by Terry on 2016-11-13.
 */
import React from 'react';
import { Home } from 'containers';

class Wall extends React.Component {
    render() {
        return(
            <Home username={this.props.params.username}></Home>
        );
    }
}

export default Wall;