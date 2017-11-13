import React from 'react';
import ReactDOm from 'react-dom';
import Immutable from 'immutable';

import {Editor, EditorState, RichUtils} from 'draft-js';

import './editor.css';

const blockRenderMap = Immutable.Map({
    'header-two':{
        element:'h2'
    },
    'unstyled':{
        element:'h2'
    }
});
const INLINE_STYLE = ['BOLD','ITALIC','STRIKETHROUGH'];
class MEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = this.onChange.bind(this);
        this.editorFocus = this.editorFocus.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    
    _onChangeStyle(item){
        let newState = RichUtils.toggleInlineStyle(this.state.editorState, item);
        this.onChange(newState);
    }
    handleKeyCommand(command){
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if(newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    componentDidMount(){
        this.refs['editorWrapper'].addEventListener('click',this.editorFocus);
    }
    onChange(content){
        this.setState({
            editorState:content
        });
    }
    editorFocus(){//点击wrapper的时候，编辑器也获取焦点
        this.refs['editor'].focus();
        this.refs['placeholder'].style.display = 'none';
    }
    /** 
     * 接下来是编辑器部分，基于draftjs https://draftjs.org/
    */
    render(){
        return (
            <div className="editor-div__wrapper" ref="editorWrapper">
            <div className="editor-div__tool">
            {
                INLINE_STYLE.map( (item, index) => {
                    return <button className="editor-button__item" data-style={item} key={index} onClick={this._onChangeStyle.bind(this, item)}>{item}</button>
                })
            }
            </div>
                <span className="editor-span__placeholder" ref="placeholder">从这里你可以开始输入...</span>
                <Editor 
                    className="editor-div__panel" 
                    handleKeyCommand={this.handleKeyCommand}
                    editorState={this.state.editorState}
                    onChange={this.onChange} 
                    ref="editor"
                />
            </div>
        );
    }
}

export default MEditor;
