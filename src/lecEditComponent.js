import React, { useState, useEffect } from 'react';

function LectureEdit(props) {
    const [lecture, setLecture] = useState(props.object);

    useEffect(() => {
        if(lecture.state === 'DISPLAY') {
            props.onSave(lecture);
        }
    });

    const handleOnChange = (event) => {
        const updatedLec = {...lecture,...{name: event.target.value}}
        setLecture(updatedLec);
    }

    const handleOnSave = (event) => {
        const updatedLec = {...lecture,...{state: 'DISPLAY'}}
        setLecture(updatedLec);
    }
    function cancelLecture(event) {
        props.cancel(props.index)
    }
    
    return(
        <div id = "subMainDiv">
            <div id = "subDiv1" className = "newLecture" >
                <div className = "lecture" id = "subDiv" >
                    <label id = "labelId">Lecture {props.index + 1}: </label> 
                    <input type="text" className = "lectureName" id = "idTextBox"  placeholder="Enter a Title" value = {lecture.name} onChange = {handleOnChange}></input>
                    <div id = "btnId" className= "saveAndCancelBtns" >
                        <button className = "btnRemove" onClick = {cancelLecture}>Cancel</button>
                        <button type="submit" className = "saveTitle" onClick = {handleOnSave} >Save Lecture</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LectureEdit;
