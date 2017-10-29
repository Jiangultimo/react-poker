import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './navs.css';

//引入路由组件
import Index from '../../Index/index.js';
import About from '../../About/about.js';
import Origin from '../../Origin/origin.js';
import Mm2 from '../../Mm2/Mm2.js';
import Mm2r from '../../Mm2r/Mm2r.js';
import Mm3 from '../../Mm3/Mm3.js';

class Navs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navs:[
                {
                    name:'Metal Max',
                    link:'/',
                    component:Index,
                    key:"Index"
                },
                {
                    name:'Metal Max Ⅰ',
                    link:'/origin',
                    component:Origin,
                    key:'Origin'
                },
                {
                    name:'Metal Max Ⅱ',
                    link: '/mm2',
                    component: Mm2,
                    key:'Mm2'
                },
                {
                    name:'Metal Max Ⅱ Reload',
                    link: '/mm2r',
                    component:Mm2r,
                    key:'Mm2r'
                },
                {
                    name:'Metal Mex Ⅲ',
                    link:'/mm3',
                    component:Mm3,
                    key:'Mm3'
                },
                {
                    name:'Metal Mac Profile',
                    link:'/about',
                    component:About,
                    key:'About'
                }
            ]
        };
        // this.handleNavsPosition = this.
    }
    componentDidMount(){
        console.log(document.getElementById('navs'));
        this.handleNavsPosition();
        window.onresize = () => {
            this.handleNavsPosition();
        }
        
    }
    handleNavsPosition(){
        let navs = document.getElementById('navs');
        navs.style.top = `${window.innerHeight - navs.clientHeight}px`;
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
                <div>
                    <ul className="navs-ul__group" id="navs">
                        {
                            this.state.navs.map( (value, index) => {
                                return <li key={index} onClick={this.handleActive} className="navs-li__item"><Link to={value.link} className="navs-a__link">{value.name}</Link></li>
                            })
                        }
                    </ul>
                    {
                        this.state.navs.map( (item, index) => {
                            return item.key == 'Index' ? <Route exact path={item.link} component={item.component} key={item.key} />:<Route path={item.link} component={item.component} key={item.key} />
                        })
                    }
                    {/* <Route exact path="/" component={Index} />
                    <Route path="/about" component={About} /> */}
                </div>
            </Router>
            </div>
        );
    }
}

export default Navs;
