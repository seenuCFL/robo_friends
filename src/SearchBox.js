import React, { Component } from 'react';

class SearchBox extends Component{
    render(){
        return(
            <div className='pa2'>
                <input className='pa3 ba b--green bg-lighttest-blue' type='search' placeholder='search robots' onChange={this.props.searchChange}></input>
            </div> 
        );
    }
}
export default SearchBox;