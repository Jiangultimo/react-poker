import React from 'react';

import './origin.css';

import originIntro from '../../assets/origin.png';
import {HandleContainerHeight} from '../../utils/utils.js';

class Origin extends React.Component{
    constructor(props){
        super(props);
    }
    ComponentDidMount(){
        // HandleContainerHeight('origin');
        // window.onresize = () => {
        //     HandleContainerHeight('origin');
        // }
    }
    render(){
        return (
            <div id="origin" className="J-container">
                <img src={originIntro} alt="重装机兵" className="origin-img__intro" />
            </div>
        );
    }
}

export default Origin;