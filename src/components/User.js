import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
    render(){
        const { name } = this.props;
        return (
            <div>
                <p>Hello from { name }</p>
            </div>
        )
    }
}
User.PropTypes = {
    name: PropTypes.string.isRequired,
}