import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
    render(){
        const {photos, year } = this.props;
        return(
            <div>
                <p>
                    You have { photos.length } from { year }
                </p>
            </div>
        )
    }
}

Page.PropTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
}