import React from 'react';
import ReactDOm from 'react-dom';
import Immutable from 'immutable';

import {Editor, EditorState} from 'draft-js';

import './editor.css';

console.log(Immutable);
const blockRenderMap = Immutable.Map({
    'header-two':{
        element:'h2'
    },
    'unstyled':{
        element:'h2'
    }
});

class MEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = this.onChange.bind(this);
        this.editorFocus = this.editorFocus.bind(this);
        this.getContent = this.getContent.bind(this);
    }
    
    componentDidMount(){
        this.refs['editorWrapper'].addEventListener('click',this.editorFocus);
        // this.refs['output'].addEventListener('click', this.getContent);
    }
    onChange(content){
        this.setState({
            editorState:content
        });
    }
    getContent(){
        console.log(this.state.editorState.getCurrentContent().hasText());
    }
    editorFocus(){//点击wrapper的时候，编辑器也获取焦点
        this.refs['editor'].focus();
        this.refs['placeholder'].style.display = 'none';
        // this.refs['editor'].blur(function(){
        //     console.log('blur');
        //     this.refs['placeholder'].style.display = 'block';
        // })
    }
    /** 
     * 接下来是编辑器部分，基于draftjs https://draftjs.org/
    */
    render(){
        return (
            <div className="editor-div__wrapper" ref="editorWrapper">
                <span className="editor-span__placeholder" ref="placeholder">从这里你可以开始输入...</span>
                <Editor 
                    className="editor-div__panel" 
                    editorState={this.state.editorState}
                    onChange={this.onChange} 
                    blockRenderMap={blockRenderMap}
                    ref="editor"
                />
            </div>
        );
    }
}

export default MEditor;
