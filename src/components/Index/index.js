import React from 'react';

import './index.css';
import RedWolf from '../../assets/rw.png';
import {HandleContainerHeight} from '../../utils/utils.js';

class Index extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		console.log('index');
		HandleContainerHeight('index');
		window.onresize = () => {
			HandleContainerHeight('index');
		}
	}
	render() {
		return (
			<div className="index-div__container" id="index">
				<img src={RedWolf} alt="red wolf" className="index-img__redwolf" />
			</div>
		);
	}
}

export default Index;