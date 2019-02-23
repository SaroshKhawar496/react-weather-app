import React, { Component } from 'react';

class Weather extends Component {
    render(){
        // let show = undefined;
        // if (this.props.city && this.props.country){
        //     show = (
        //         <div>
        //         <p>Location: {this.props.city}, {this.props.country}</p>
        //         <p>Temperature: {this.props.temperature}</p>
        //         <p>Humidity: {this.props.humidity}</p>
        //         <p>Conditions: {this.props.description}</p>
        //         </div>
        //     );
        // }
        return(
            <div>

                {/* {show} */}

                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
            
            </div>
        );
    }
}

export default Weather;