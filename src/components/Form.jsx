import {useState} from 'react'

const initialNameTitle = {
    name: '',
    title: ''
}
const initialExp = {
    role: '',
    company: '',
    period: '',
    details: ''
}
const initialEdu = {
    course: '',
    school: '',
    year: ''
}
const initialRole = {
    role: '',
    org: ''
}
const initialContact = {
    mobile: '',
    mail: '',
}
let experienceList = [];
let educationList = [];
let skillsList = [];
let rolesList = [];
let proudOfList = [];

function Form({showName, addExperienceList, addEducationList, addSkill, addRoles, addAchievements, addContact}) {
    let periodPattern1 = /[a-zA-Z]{3} '[0-9]{2} - [a-zA-Z]{3} '[0-9]{2}/
    let periodPattern2 = /[a-zA-Z]{3} '[0-9]{2}/

    const [nameAndTitle, setnameAndTitle] = useState(initialNameTitle)
    const [profileSummary, setprofileSummary] = useState('');
    const [eduObject, seteduObject] = useState(initialEdu)
    const [expObject, setexpObject] = useState(initialExp)
    const [skills, setskills] = useState('')
    const [rolesObj, setrolesObj] = useState(initialRole)
    const [proudOf, setproudOf] = useState('')
    const [contact, setcontact] = useState(initialContact)

    const [msg, setmsg] = useState(null);
    const [disable, setdisable] = useState(true)

    function handleNameTitle(e){
        const {id, value} = e.target
        if(id === 'name'){
            if(e.target.value.length === 0){
                setmsg(null);
                setdisable(true);
            }else if(e.target.value.trim().length < 4 ){
                setmsg('Please provide your name');
                setdisable(true);
            }else{
                setmsg(null);
                setdisable(false)
            }
            setnameAndTitle({...nameAndTitle, [id] : value})
        }
        if(id === 'title'){
            setnameAndTitle({...nameAndTitle, [id] : value})
        }
    }
    function handleProfile(e){
        if(e.target.value.trim().length < 20){
            setmsg('A proper profile summary is needed')
            setdisable(true);
        }else{
            setmsg(null);
            setdisable(false)
        }
        setprofileSummary(e.target.value);
    }

    function handleExpDetails(e){
        const {id, value} = e.target;
        if(id === 'role'){
            if(value.length === 0){
                setmsg('In which thing you are experienced');
                setdisable(true)
            }else{
                setdisable(false);
                setmsg(null)
            }
            setexpObject({...expObject, [id]: value});
        }else if(id === 'school'){
            if(value.length === 0){
                setmsg('From where you got this experience');
                setdisable(true)
            }else{
                setdisable(false);
                setmsg(null)
            }
            setexpObject({...expObject, [id]: value});
        }else if(id === 'period'){
            if(!(periodPattern2.test(value)) && !(periodPattern1.test(value))){
                setmsg('Your period should be like Jan \'19 - Feb \'21 or Jan \'19')
                setdisable(true);
            }else{
                setmsg(null);
                setdisable(false)
            }
            setexpObject({...expObject, [id]: value});
        }else{
            setexpObject({...expObject, [id]: value});
        }
    }

    function handleCourseDetails(e){
        const {id, value} = e.target;
        if(id === 'course'){
            seteduObject({...eduObject, [id]: value})
        }else if(id === 'school'){
            seteduObject({...eduObject,[id]: value})
        }else{
            if(!(/[0-9]{4}/).test(Number(value))){
                setmsg('Please enter the year that you completed the course')
                setdisable(true)
                seteduObject({...eduObject,[id]: null});
            }else{
                setmsg(null);
                setdisable(false)
            }
            seteduObject({...eduObject,[id]: Number(value)})
        }
    }

    function handleSkill(e){
        const{value} = e.target;
        setskills(value);
    }

    function handleRoleOrg(e){
        const {id, value} = e.target;
        if(id === 'role'){
            setrolesObj({...rolesObj, [id]: value})
        }else if(id === 'org'){
            setrolesObj({...rolesObj, [id]: value});
        }
    }

    function handleProudOf(e){
        if(e.target.value > 60){
            alert('Please make it short');
            return;
        }
        setproudOf(e.target.value);
    }

    function handleContact(e){
        const {id, value} = e.target;
        if(id === 'mobile'){
            if(isNaN(Number(value))){
                alert('Provide only Number');
                setcontact({...contact, [id]: ''})
            }else if(value.length > 10){
                alert('Provide 10 digit number')
                setcontact({...contact, [id]: ''})
            }
            setcontact({...contact, [id]: value})
        }else if(id === 'mail'){
            setcontact({...contact, [id]: value})
        }
    }

    function addToExpList(){
        const {role, company, period, details} = expObject;
        if(role === '' || company === '' || period === '' || details === ''){
            alert("add some thing");
            return;
        }else {
            let history = {
                role,
                company,
                period,
                details
            }
            experienceList.push(history)
        }
        setexpObject({
            role: '',
            company: '',
            period: '',
            details: ''
        })
    }

    function addToEduList(){
        const {course, school, year} = eduObject;
        if(course === '' || school === '' || year === ''){
            alert('Add your education');
            return;
        }else{
            let edu = {
                course,
                school,
                year
            }
            educationList.push(edu);
        }
        seteduObject({
            course: '',
            school: '',
            year: ''
        })
    }

    function addToSkillList(){
        skillsList.push(skills)
        setskills('');
    }

    function addToRolesList(){
        const {role, org} = rolesObj;
        let newRole = {
            role,
            org,
        }
        rolesList.push(newRole)
        setrolesObj({
            role:'',
            org: ''
        })
    }

    function addAchieveList(){
        proudOfList.push(proudOf);
        setproudOf('');
    }

    function makeCapitalize(str){
        return str.split(' ')
                .map(str => str[0].toUpperCase()+str.slice(1))
                .join(' ');
    }

    function handleForm(){

    }

    function handleForm(e){
        e.preventDefault();
        if(nameAndTitle.name.length > 4 && profileSummary.length > 20){
            const nameTitle = {
                name: makeCapitalize(nameAndTitle.name),
                title: makeCapitalize(nameAndTitle.title),
                profile: profileSummary,
            }
            showName(nameTitle);
            addExperienceList(experienceList)
            addEducationList(educationList);
            addSkill(skillsList);
            addRoles(rolesList);
            addAchievements(proudOfList);
            addContact(contact);
            console.log(experienceList, educationList, skillsList, rolesList);
        }
        setnameAndTitle({name: '', title: ''})
        setprofileSummary('')
        setcontact({mobile: '', mail: ''})
        setdisable(true)
    }

    return (
        <form onSubmit={handleForm}>
            <div className="name-title">
                <label htmlFor='name'>Name</label>
                <input onChange={handleNameTitle} type='text' id='name' placeholder='Your Name' value={nameAndTitle.name} />
                <label htmlFor='name'>Title</label>
                <input onChange={handleNameTitle} type='text' id='title' placeholder='Your are a..' value={nameAndTitle.title} />
            {(msg !== null && msg.includes('name')) && <div>{msg}</div>}
            </div>

            <div className="profile-summary">
                <label htmlFor='profileSummary'>Profile Summary</label>
                <textarea rows={3} value={profileSummary} onChange={handleProfile}/>
                {(msg !== null && msg.includes('profile')) && <div>{msg}</div>}
            </div>

            <div className="experience">
                <label htmlFor='expProjects'>Experience</label>
                <p>Include your projects also if any in this section</p>
                <div className="expDetails">
                    <input type='text' id='role' placeholder='Title of your role or your project' onChange={handleExpDetails} value={expObject.role}/>
                    <input type='text' id='company' placeholder='Company name or self learning' onChange={handleExpDetails} value={expObject.company}/>
                    <input type='text' id='period' value={expObject.period} onChange={handleExpDetails} />
                    <textarea id='details' value={expObject.details} onChange={handleExpDetails} />
                    <button type='button' onClick={addToExpList}>Add</button>
                    {(msg !== null && msg.includes('period')) && <div>{msg}</div>}
                </div>
            </div>

            <div className="education">
                <p>Education: </p>
                <div className="expDetails">
                    <input type='text' id='course' placeholder='Course' onChange={handleCourseDetails} value={eduObject.course}/>
                    <input type='text' id='school' placeholder='School' onChange={handleCourseDetails} value={eduObject.school}/>
                    <input type='text' id='year' value={eduObject.year} onChange={handleCourseDetails} />
                    <button type='button' onClick={addToEduList}>Add</button>
                    {(msg !== null && msg.includes('course')) && <div>{msg}</div>}
                </div>
            </div>
            
            <div className="skills">
                <p>Skills:</p>
                <div className="skillsDetails">
                    <input type='text' id='skill' placeholder='Technical skills only' value={skills} onChange={handleSkill} />
                    <button type='button' onClick={addToSkillList}>Add</button>
                </div>
            </div>

            <div className="additional-roles">
                <p>Roles and Responsibilities:</p>
                <div className="rolesDetails">
                    <input type='text' id='role' placeholder='Role' value={rolesObj.role} onChange={handleRoleOrg} />
                    <input type='text' id='org' placeholder='Organization' value={rolesObj.org} onChange={handleRoleOrg} />
                    <button type='button' onClick={addToRolesList}>Add</button>
                </div>
            </div>

            <div className="achievements">
                <p>Achievements:</p>
                <div className="proudMoment">
                    <input type='text' id='proudOf' placeholder='Role' value={proudOf} onChange={handleProudOf} />
                    <button type='button' onClick={addAchieveList}>Add</button>
                </div>
            </div>

            <div className="contact">
                <p>Contact:</p>
                <div className="contactList">
                    <input type='text' id='mobile' placeholder='76581 90187' value={contact.mobile} onChange={handleContact} />
                    <input type='text' id='mail' placeholder='abc@gmail.com' value={contact.mail} onChange={handleContact} />
                </div>
            </div>

            <button type='submit' disabled={disable}>Add</button>
        </form>
    )
}

export default Form
