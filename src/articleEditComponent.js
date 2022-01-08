import React, { useState, useEffect } from 'react';

function ArticleEdit(props) {
   
    const[article, updateArticle] = useState(props.articleObject);
    
    const handleOnChange = (event) => {
        const articleObj = {...article,...{content: event.target.value}};
        updateArticle(articleObj);
    }

    const handleOnSave = (event) => {
        const updatedArticle = {...article,... {state: 'DISPLAY'}}
        updateArticle(updatedArticle);
        props.onSave(updatedArticle);
    }

    return(
        <div id = "textAreaDivId" >
            <textarea id = "textAreaId" rows = "3" cols = "70" placeholder = "Enter text" value = {article.content} onChange = {handleOnChange} ></textarea>
            <button className = "saveTextArea" onClick = {handleOnSave}>Save</button>
            <button className = "classRemoveContent" onClick = {props.cancelTextareaDiv} >
            <span className="glyphicon glyphicon-remove"></span>
            </button>
        </div>
    );
}
export default ArticleEdit;
