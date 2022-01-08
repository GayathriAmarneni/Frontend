import React from 'react';

function ArticleDisplay(props) {
    return(
        <div id = "articleLabelId" >
            <label>Article: {props.content} </label>
            <button className = "articleEdit" id = "articleEditBtnId" onClick = {props.edit} >Edit</button>
            <button className = "classRemove" onClick = {props.cancel} >
            <span className="glyphicon glyphicon-remove"></span>
            </button>
        </div>
    );
}
export default ArticleDisplay;
