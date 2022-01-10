import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        props.cancel(lecture)
<<<<<<< HEAD
=======
    }
    function setStartDate(date) {
        const updatedLec = {...lecture,...{startDate: date}}
        setLecture(updatedLec);
    }
    function setEndDate(date) {
        const updatedLec = {...lecture,...{endDate: date}}
        setLecture(updatedLec);
>>>>>>> 6f64042 (second commit)
    }
    return(
<<<<<<< HEAD
        <div id = "subMainDiv">
            <div id = "subDiv1" className = "newLecture" >
                <div className = "lecture" id = "subDiv" >
                    <label id = "labelId">Lecture {props.index + 1}: </label> 
                    <input type="text" className = "lectureName" id = "idTextBox"  placeholder="Enter a Title" value = {lecture.name} onChange = {handleOnChange}></input>
                    <div id = "btnId" className= "saveAndCancelBtns" >
                        <button className = "btnRemove" onClick = {cancelLecture}>Delete</button>
                        <button type="submit" className = "saveTitle" onClick = {handleOnSave} >Save Lecture</button>
                    </div>
=======
        <div id = "subDiv1" className = "newLecture" >
            <div className = "lecture" id = "subDiv" >
                <label id = "labelId">Lecture {props.index + 1}: </label> 
                <input type="text" className = "lectureName" id = "idTextBox"  placeholder="Enter a Title" value = {lecture.name} onChange = {handleOnChange}></input>
                <DatePicker selected = {lecture.startDate} placeholderText = "Start date" 
                dateFormat = "dd/MM/yyyy" onChange={setStartDate} yearDropdownItemNumber={50}
                scrollableYearDropdown={true} showYearDropdown/> 
                <DatePicker selected = {lecture.endDate} minDate = {lecture.startDate} 
                placeholderText = "End date" dateFormat = "dd/MM/yyyy" onChange={setEndDate} yearDropdownItemNumber={50} 
                scrollableYearDropdown={true} showYearDropdown />               
                <div id = "btnId" className= "saveAndCancelBtns" >
                    <button className = "btnRemove" onClick = {cancelLecture}>Delete</button>
                    <button type="submit" className = "saveTitle" onClick = {handleOnSave} >Save Lecture</button>
>>>>>>> 6f64042 (second commit)
                </div>
            </div>
        </div>
    );
}
export default LectureEdit;

