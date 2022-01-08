import React, { useState, useEffect} from 'react';
import ContentList from './contentListComponet';
import ArticleEdit from './articleEditComponent';
import ArticleDisplay from './articleDisplayCmpnt';

function LectureDisplay(props) {
    const [lecture, setLecture] = useState(props.object);

    useEffect(() => {
        if(lecture.state === 'EDIT') {
            props.onEdit(lecture);
        }
    });
    
    function removeLecture(event){
        props.remove(lecture)
    } 

    function editLecture(event) {
        const updatedLec = {...lecture,...{state: 'EDIT'}};
        setLecture(updatedLec);
    }

    function setArticleStateList(event) {
        const updateLecture = {...lecture,...{articleStatus: true, article:{...lecture.article, state: 'LIST'}}}
        setLecture(updateLecture);
        props.onEdit(updateLecture);
    }

    function setArticleStateEdit(event) {
        const updateLecture = {...lecture,...{article:{...lecture.article, state: 'EDIT'}}}

        // const updateLecture = {...lecture.article:{content: lecture.article.content, state: 'EDIT'}}}
        setLecture(updateLecture);
        props.onEdit(updateLecture);
    }
    function cancelContentDiv(event) {
        const updateLecture = {...lecture,...{articleStatus: false}}
        setLecture(updateLecture);
        props.onEdit(updateLecture);
    }

    function saveArticleContent(updatedArtObj) {
        const updateLecture = {...lecture};
        updateLecture.article.content = updatedArtObj.content;
        updateLecture.article.state = updatedArtObj.state;
        setLecture(updateLecture);
        props.onEdit(updateLecture);
    }

    return(
        <div className = "displayLecture" id = "childDiv" >
            <label className = "label" id = "replace" >Lecture {props.index + 1}: {lecture.name} </label>
            <button className = "classRemove" onClick = {removeLecture} >
            <span className="text-primary glyphicon glyphicon-trash"></span></button>
            <button className = "classEdit" onClick = {editLecture} >
            <span className="text-primary glyphicon glyphicon-pencil"></span></button>
            <button className = "contentBtn" id = "contentBtnId" onClick = {setArticleStateList}>+Content</button>
            {
                lecture.articleStatus?
                lecture.article.state === 'LIST'? <ContentList key = {lecture.id.slice(6)} addContent = {setArticleStateEdit} cancel = {cancelContentDiv}/>:
                lecture.article.state === 'EDIT'? <ArticleEdit key = {lecture.id.slice(8)} articleObject = {lecture.article} cancelTextareaDiv = {setArticleStateList} onSave = {saveArticleContent}/>:
                <ArticleDisplay key = {lecture.id.slice(12)} content = {lecture.article.content} edit = {setArticleStateEdit} cancel = {setArticleStateList}/>: null
            }
        </div>
    );
}

export default LectureDisplay;

