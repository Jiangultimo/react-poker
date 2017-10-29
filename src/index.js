import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './style.css';
import Navs from './components/common/navs/navs.js';
class DemoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="index-div__wrapper">
                <Navs />
            </div>
        );
    }
}

ReactDOM.render(
    <DemoList />,
    document.getElementById('app')
);