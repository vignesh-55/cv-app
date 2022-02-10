import NameCard from './components/NameCard'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Roles from './components/Roles'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
// import Form from './components/Form'

import {useState} from 'react'
import FormV1 from './components/FormV1'
const initialCV={
  name: '',
  exp: '',
  edu: '',
  skills: '',
  role: '',
  proud: '',
  contact: ''
}
function App() {
  // const [nameTitle, setnameTitle] = useState({name: '', title: '', profile: ''})
  // const [experience, setexperience] = useState([])
  // const [education, seteducation] = useState([])
  // const [skills, setskills] = useState([])
  // const [roles, setroles] = useState([])
  // const [proudOf, setproudOf] = useState([])
  // const [contact, setcontact] = useState({mobile: '', mail: ''})
  ////////////////////////////////////////////////////////////
  const [myCV, setmyCV] = useState(initialCV)

  // let experienceArr = [];
  // function showName(nameTitle){
  //   setnameTitle(nameTitle);
  // }
  // function addExperience(newExperience){
  //   console.log(newExperience, experience);
  //   setexperience(newExperience)
  // }

  // function addEducation(newEducation){
  //   seteducation(newEducation);
  // }

  // function addSkill(skillsList){
  //   setskills(skillsList)
  // }

  // function addRoles(rolesList){
  //   setroles(rolesList)
  // }

  // function addAchievements(proudOfList){
  //   setproudOf(proudOfList)
  // }

  // function addContact(newcontact){
  //   setcontact(newcontact)
  // }

  function getCV(newCV){
    setmyCV({...myCV,...newCV})
  }

  return (
    <div className="App">
      {myCV.name === '' && <FormV1 getCV={getCV}/>}
      {myCV.name !== '' && <div className="myResume">
        {myCV.name !== '' && <NameCard nameTitle={myCV.name} />}
        <div className="bars">
          <div className="left-bar">
            {myCV.edu.length !==0 && <Education education={myCV.edu} />}
            {myCV.contact !=='' && <Contact contact={myCV.contact} />}
            {myCV.skills.length !==0 && <Skills skills={myCV.skills} />}
          </div>
          <div className="right-bar">
            {myCV.exp.length !==0 && <Experience experience={myCV.exp} />}
            {myCV.role.length !==0 && <Roles roles={myCV.role} />}
            {myCV.proud.length !==0 && <Achievements proudOf={myCV.proud} />}
          </div>
        </div>
      </div>}

      {/* Conventional */}

      {/* <Form showName={showName} addExperienceList={addExperience} addEducationList={addEducation} addSkill={addSkill} addRoles={addRoles} addAchievements={addAchievements} addContact={addContact}/>
      <NameCard nameTitle={nameTitle} />
      {experience.length > 0 && <Experience experience={experience} />}
      {education.length > 0 && <Education education={education} />}
      {skills.length > 0 && <Skills skills={skills} />}
      {roles.length > 0 && <Roles roles={roles} />}
      {proudOf.length > 0 && <Achievements proudOf={proudOf} />}
      {contact.mobile !== '' && <Contact contact={contact} />} */}

    </div>
  );
}

export default App;