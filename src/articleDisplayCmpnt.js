import React from 'react';

function ArticleDisplay(props) {
    return(
        <div id = "articleLabelId" >
            <label>Article: {props.object.article.content} </label>
            <button className = "articleEdit" id = "articleEditBtnId" onClick = {props.edit} >Edit</button>
        </div>
    );
}
export default ArticleDisplay;