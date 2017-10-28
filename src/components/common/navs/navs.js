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
    handleActive(e){//点击导航只有一个被选中
        let links = document.getElementsByClassName('navs-a__link');//类数组
        let len = links.length;
        for(let i = 0; i<len; i++){
            links[i].style.backgroundColor = '#fff';
        }
        e.target.style.backgroundColor='#e3e3e3';
    }
    render(){
        return(
            <div className="navs-div__container">
            <Router>
                <ul className="navs-ul__group">
                    {
                        this.state.navs.map( (value, index) => {
                            return <li key={index} onClick={this.handleActive} className="navs-li__item"><Link to={value.link} className="navs-a__link">{value.name}</Link></li>
                        })
                    }
                </ul>
            </Router>
            </div>
        );
    }
}

export default Navs;
