import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './navs.css';

class Navs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navs:[
                {
                    name:'首页',
                    link:'/'
                },
                {
                    name:'关于',
                    link:'/about'
                }
            ]
        };
    }

    render(){
        return(
            <div className="navs-div__container">
            <Router>
                <ul>
                    {
                        this.state.navs.map( (value, index) => {
                            return <li key={index}><Link to={value.link}>{value.name}</Link></li>
                        })
                    }
                </ul>
            </Router>
            </div>
        );
    }
}

export default Navs;
