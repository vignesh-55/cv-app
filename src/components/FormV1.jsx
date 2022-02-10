import {useState} from 'react'
import NameForm from "./FormComp/NameForm"
import ExperienceForm from './FormComp/ExperienceForm'
import EducationForm from './FormComp/EducationForm'
import SkillsForm from './FormComp/SkillsForm'
import RoleForm from './FormComp/RoleForm'
import ProudForm from './FormComp/ProudForm'
import ContactForm from './FormComp/ContactForm'

const initialCV={
  name: '',
  exp: '',
  edu: '',
  skills: '',
  role: '',
  proud: '',
  contact: ''
}
function FormV1({getCV}) {
    const [currentForm, setcurrentForm] = useState('name')
    const [currentIdx, setcurrentIdx] = useState(0)
    const [myCV, setmyCV] = useState(initialCV)

    const navForm = ['name', 'exp', 'edu', 'skills', 'role', 'proud', 'contact']

    function addNameTitle(name){
      setmyCV({...myCV,name})
    }

    function addExperience(exp){
      setmyCV({...myCV,exp})
    }

    function addEducation(edu){
      setmyCV({...myCV,edu})
    }

    function addSkills(skills){
      setmyCV({...myCV,skills})
    }

    function addRoles(role){
      setmyCV({...myCV,role})
    }

    function addProudList(proud){
      setmyCV({...myCV,proud})
    }

    function addContact(contact){
      setmyCV({...myCV,contact})
    }

    function next(){
      let currentStep = currentIdx;
      currentStep = currentStep >= 5? 6: currentStep + 1;
      setcurrentIdx(currentStep);
      setcurrentForm(navForm[currentStep]);
    }

    function previous() {
      let currentStep = currentIdx;
      currentStep = currentStep <= 0? 1: currentStep - 1;
      setcurrentIdx(currentStep);
      setcurrentForm(navForm[currentStep]);
    }

    function previousButton(){
      if(currentIdx !==0){
        return (
          <button className='btn' type="button" onClick={previous}>Previous</button>
        )
      }
      return null;
    }

    function nextButton(){
      if(currentIdx < 6){
        return (
          <button className='btn' type="button" onClick={next}>Next</button>        
        )
      }
      return <button className='btn btn-success' type="button" onClick={generateCV}>Get CV</button>  ;
    }

    function generateCV(){
      getCV(myCV);
    }

    return (
      <div>
        <div className='form-container'>
          <NameForm       addName={addNameTitle}      currentForm={currentForm} />
          <ExperienceForm addExp={addExperience}      currentForm={currentForm} />
          <EducationForm  addEdu={addEducation}       currentForm={currentForm} />
          <SkillsForm     addSkills={addSkills}       currentForm={currentForm} />
          <RoleForm       addRoles={addRoles}         currentForm={currentForm} />
          <ProudForm      addProudList={addProudList} currentForm={currentForm} />
          <ContactForm    addContact={addContact}     currentForm={currentForm} />
        </div>
          {/* <ExperienceForm       currentForm={currentForm} />
          <EducationForm        currentForm={currentForm} />
          <SkillsForm            currentForm={currentForm} />
          <RoleForm               currentForm={currentForm} />
          <ProudForm       currentForm={currentForm} />
          <ContactForm         currentForm={currentForm} /> */}
          <div className="navButton">
            {previousButton()}
            {nextButton()}
          </div>
      </div>
    )
}

export default FormV1
