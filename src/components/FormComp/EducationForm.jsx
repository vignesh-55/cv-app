import React, {useRef, useState} from 'react'

const initialEdu = {
    course: '',
    school: '',
    year: ''
}
let educationList = [];

function EducationForm({addEdu, currentForm}) {
    const [eduObject, seteduObject] = useState(initialEdu);
    // const [startDate, setStartDate] = useState(new Date());
    // const dateref = useRef();
    const roleref = useRef()
    
    function handleCourseDetails(e){
           const {id, value} = e.target;
           if(id === 'course'){
               seteduObject({...eduObject, [id]: value})
           }else if(id === 'school'){
               seteduObject({...eduObject,[id]: value})
           }else{
            seteduObject({...eduObject,[id]: value})
        }
    }

    // function handleCourseDetails(e){
    //     console.log(typeof e, e.getFullYear());
    //     if(typeof e !== 'object'){
    //            const {id, value} = e.target;
    //            if(id === 'course'){
    //                seteduObject({...eduObject, [id]: value})
    //            }else if(id === 'school'){
    //                seteduObject({...eduObject,[id]: value})}
    //        }else{
    //         seteduObject({...eduObject,year: e})
    //         console.log(e, eduObject.year.getFullYear());
    //     }
    // }

    // function handleDate(date){
    //     // setStartDate(date)
    //     seteduObject({...eduObject, year: date})
    //     console.log(eduObject);
    // }

    function addToEduList(){
        const {course, school, year} = eduObject;
        if(course === '' || school === '' || year === ''){
            alert('Add your education');
            seteduObject({
                course: '',
                school: '',
                year: ''
            })
            return;
        }else{
            let edu = {
                course,
                school,
                year
            }
            educationList.push(edu);
        }
        addEdu(educationList);
        seteduObject({
            course: '',
            school: '',
            year: ''
        })
        roleref.current.focus();
    }

    return (currentForm !== 'edu' ? null :(
        <div className="education details">
            <div className='heading'>Education</div>
                <label htmlFor='course'>Course</label>
                <input ref={roleref} type='text' id='course' placeholder='B.Tech' onChange={handleCourseDetails} value={eduObject.course}/>
                <label htmlFor='school'>School</label>
                <input type='text' id='school' placeholder='MIT' onChange={handleCourseDetails} value={eduObject.school}/>
                <label htmlFor='year'>Passed in</label>
                {/* <DatePicker htmlFor='year' ref={dateref} selected={startDate}  onChange={(date) => {setStartDate(date)
                console.log(date.getFullYear());}}
                showYearPicker dateFormat="yyyy"/> */}
                {/* <DatePicker htmlFor='year' selected={eduObject.year} id='year' ref={dateref} onChange={handleCourseDetails}
                showYearPicker dateFormat="yyyy"/> */}
                <input type='date' id='year'  value={eduObject.year} onChange={handleCourseDetails} />
                <button className='btn' type='button' onClick={addToEduList}>Add</button>
                {/* {msg !== null && <div>{msg}</div>} */}
        </div>
    ))
}

export default EducationForm
