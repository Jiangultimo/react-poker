import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Index from '../components/Index/index.js';
import About from '../components/About/about.js';
import Origin from '../components/Origin/origin.js';
import Mm2 from '../components/Mm2/Mm2.js';
import Mm2r from '../components/Mm2r/Mm2r.js';
import Mm3 from '../components/Mm3/Mm3.js';

const routes = [
    {
        name: 'Metal Max',
        link: '/',
        component: Index,
        key: "Index"
    },
    {
        name: 'Metal Max Ⅰ',
        link: '/origin',
        component: Origin,
        key: 'Origin'
    },
    {
        name: 'Metal Max Ⅱ',
        link: '/mm2',
        component: Mm2,
        key: 'Mm2'
    },
    {
        name: 'Metal Max Ⅱ Reload',
        link: '/mm2r',
        component: Mm2r,
        key: 'Mm2r'
    },
    {
        name: 'Metal Max Ⅲ',
        link: '/mm3',
        component: Mm3,
        key: 'Mm3'
    },
    {
        name: 'Metal Max Profile',
        link: '/about',
        component: About,
        key: 'About'
    }
];

const RouteWidthSubRoutes = (route) => {
    console.log(route);
    return (
        route.key == 'Index' ? <Route exact path={route.path} render={props => (
            <route.component {...props} routes={route.routes} />
        )} /> : <Route path={route.path} render={props => (
            <route.component {...props} routes={route.routes} />
        )} />
    )
};
const handleActive = (e) => {//点击导航只有一个被选中
    let links = document.getElementsByClassName('navs-a__link');//类数组
    let len = links.length;
    for(let i = 0; i<len; i++){
        links[i].style.backgroundColor = '#fff';
    }
    e.target.style.backgroundColor='#e3e3e3';
}

const NavsRouter = () => {
    return (
    <Router>
        <div>
            <ul className="navs-ul__group" id="navs">
                {
                    routes.map((value, index) => {
                        return <li key={index} onClick={handleActive} className="navs-li__item"><Link to={value.link} className="navs-a__link">{value.name}</Link></li>
                    })
                }
            </ul>
            {
                routes.map((item, index) => (
                    <RouteWidthSubRoutes key={index} {...item} />
                ))
            }
        </div>
    </Router>
    )
}

export default NavsRouter;