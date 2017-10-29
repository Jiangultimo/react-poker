import React from 'react';

import './index.css';
import RedWolf from '../../assets/rw.png';

class Index extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		this.handleImgPosition();
		window.onresize = () => {
			this.handleImgPosition();
		}
	}
	handleImgPosition(){
		let indexContainer = document.getElementById('index');
		let navs = document.getElementById('navs');
		indexContainer.style.height = `${window.innerHeight - navs.clientHeight}px`;
	}
	render(){
		return(
			<div className="index-div__container" id="index">
				<img src={RedWolf} alt="red wolf" className="index-img__redwolf" />
			</div>
			);
	}
}

export default Index;