import { useState } from "react"
const initialNameTitle = {
    name: '',
    title: '',
    profile: ''
}
function NameForm({addName, currentForm}) {
    const [nameAndTitle, setnameAndTitle] = useState(initialNameTitle)
    const [msg, setmsg] = useState(null);
    const [disable, setdisable] = useState(true)

    function handleNameTitle(e){
        const {id, value} = e.target

        if(id === 'name'){
            if(value.length === 0){
                setmsg(null);
            }else if(value.trim().length < 4 ){
                setmsg('Please provide your name');
            }else{
                setmsg(null);
            }
            setnameAndTitle({...nameAndTitle, [id] : value})
        } else if(id === 'title'){
            setnameAndTitle({...nameAndTitle, [id] : value})
        } else if(id === 'profile'){
            if(value.length === 0){
                setmsg(null);
            }else if(value.length < 20){
                setmsg('A proper profile summary is needed')
            }else{
                setmsg(null)
            }
            setnameAndTitle({...nameAndTitle, [id]: value})
        }

        nameAndTitle.name.length > 2 && nameAndTitle.profile.length > 20 ?  setdisable(false)
            : setdisable(true);     
    }

    function passToForm(){
        addName(nameAndTitle);
        setnameAndTitle({
            name: '',
            title: '',
            profile: '',
        })
    }
  
    return (currentForm !== 'name' ? null : (
        <div className="name-title details">
            <label htmlFor='name'>Name</label>
            <input onChange={handleNameTitle} type='text' id='name' placeholder='Your Name' value={nameAndTitle.name} />
            {(msg !== null && msg.includes('name')) && <div>{msg}</div>}
            <label htmlFor='name'>Title</label>
            <input onChange={handleNameTitle} type='text' id='title' placeholder='Your are a..' value={nameAndTitle.title} />

            <div className="profile-summary-form">
                <label htmlFor='profileSummary'>Profile Summary</label>
                <textarea id='profile' value={nameAndTitle.profile} onChange={handleNameTitle}/>
                {(msg !== null && msg.includes('profile')) && <div>{msg}</div>}
            </div>

            <button className='btn' type='click' disabled={disable} onClick={passToForm}>Add</button>
        </div>
    ))
}

export default NameForm
