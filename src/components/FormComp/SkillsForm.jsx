import {useRef, useState} from 'react';
let skillsList = [];

function SkillsForm({addSkills, currentForm}) {
    const [skills, setskills] = useState('')
    const skillref = useRef()

    function handleSkill(e){
        const{value} = e.target;
        setskills(value);
    }

    function addToSkillList(){
        if(skills === ''){
            alert('Add your skill');
            return;
        }else if(skillsList.includes(skills)){
            setskills('');
            alert('This skill added');
            return;
        }
        skillsList.push(skills)
        addSkills(skillsList)
        setskills('');
        skillref.current.focus();
    }

    return (currentForm !== 'skills' ? null :(
        <div className="skills details">
            <div className='heading'>Skills:</div>
            <input ref={skillref} type='text' id='skill' placeholder='Technical skills only' value={skills} onChange={handleSkill} />
            <button className='btn' type='button' onClick={addToSkillList}>Add</button>
        </div>
    ))
}

export default SkillsForm
