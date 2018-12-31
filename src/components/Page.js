import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
    onBtnClick = e =>{
        const year = e.currentTarget.innerText;
        this.props.setYear(year);
    }
    render(){
        const {photos, year } = this.props;
        return(
            <div>
                <div>
                    <button className='btn' onClick={this.onBtnClick}>2018</button>
                    <button className='btn' onClick={this.onBtnClick}>2017</button>
                    <button className='btn' onClick={this.onBtnClick}>2016</button>
                    <button className='btn' onClick={this.onBtnClick}>2015</button>
                    <button className='btn' onClick={this.onBtnClick}>2014</button>
                </div>
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
    setYear: PropTypes.func.isRequired,
}