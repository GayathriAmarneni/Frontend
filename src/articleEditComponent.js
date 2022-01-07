import React, { useState, useEffect } from 'react';

function ArticleEdit(props) {
    const [lecture, setLecture] = useState(props.object);
    useEffect(() => {
        if(lecture.article.state === 'DISPLAY') {
            props.onSave(lecture);
        }
    });
    const handleOnChange = (event) => {
        const updatedLec = {...lecture,...{article:{content: event.target.value, state: 'EDIT'}}}
        setLecture(updatedLec);
    }

    const handleOnSave = (event) => {
        const updatedLec = {...lecture,...{article: {content: lecture.article.content, state: 'DISPLAY'}}}
        setLecture(updatedLec);
    }
    return(
        <div id = "textAreaDivId" >
            <textarea id = "textAreaId" rows = "3" cols = "70" placeholder = "Enter text" value = {lecture.article.content} onChange = {handleOnChange} ></textarea>
            <button className = "saveTextArea" onClick = {handleOnSave}>Save</button>
            <button className = "classRemoveContent" onClick = {props.cancelTextareaDiv} >
            <span className="glyphicon glyphicon-remove"></span>
            </button>
        </div>
    );
}
export default ArticleEdit;