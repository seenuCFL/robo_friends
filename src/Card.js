import React, {Component} from 'react';

class Card extends Component{
    render(){
        return(
            <div className='tc bg-light-green dib br3 pa3 bw2 shadow-5 ma2 grow'>
                <img alt='robo' src={`https://robohash.org/${this.props.id}?200x200`}></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;