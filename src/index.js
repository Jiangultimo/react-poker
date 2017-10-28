import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import Navs from './components/common/navs/navs.js';
class DemoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Navs />
            </div>
        );
    }
}

ReactDOM.render(
    <DemoList />,
    document.getElementById('app')
);