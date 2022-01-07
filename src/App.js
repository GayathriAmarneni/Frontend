import React, { useState} from 'react';
import './App.css';
import { v4 as uuidv4} from 'uuid';
import LectureEdit from './lecEditComponent';
import LectureDisplay from './lecDisplayComponent';

function App() {
  const [lectureArr, setLectureArr] = useState([])
  console.log(lectureArr);

  function generateUID()
  {
    return uuidv4();
  }

  function addNewLecture() {
    setLectureArr([...lectureArr, {id: generateUID(), name: "", state: "EDIT", articleStatus: false, article: {content:"", state:""}}])
  }
  
  function cancelLectureDiv(index) {
    const lectArrayClone = [...lectureArr];
    lectArrayClone.splice(index, 1);
    setLectureArr(lectArrayClone);
  }
  
  function saveLectureObj(updatedLecObj) {
    const lectArrayClone = [...lectureArr];
    const indexToUpdate = lectArrayClone.findIndex(lecture => lecture.id === updatedLecObj.id);
    lectArrayClone[indexToUpdate]=updatedLecObj;
    setLectureArr(lectArrayClone);
  }

  return (
    <div className = "classAddNewSession" >
      <button className = "addNewLecture" onClick = {addNewLecture} >ADD</button>
      {lectureArr.map((lecture, index) => {
        if (lecture.state === 'EDIT') {
          return <LectureEdit key={lecture.id} object = {lecture} index = {index} cancel = {cancelLectureDiv} onSave = {saveLectureObj}/>;
        }
        if (lecture.state === 'DISPLAY') {
          return <LectureDisplay key = {lecture.id} object = {lecture} index = {index} remove = {cancelLectureDiv} onEdit = {saveLectureObj}/>;
        }
        
      })}
    </div>
  );
}
export default App;