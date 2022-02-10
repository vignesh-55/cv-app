import {useRef, useState} from 'react'

let proudOfList = [];
function ProudForm({addProudList, currentForm}) {
    const [proudOf, setproudOf] = useState('')
    const proudref = useRef()

    function handleProudOf(e){
        setproudOf(e.target.value);
    }

    function addAchieveList(){
        if(proudOf === '' || proudOf.length > 60){
            alert('Enter av valid achievement');
        }
        proudOfList.push(proudOf);
        addProudList(proudOfList);
        setproudOf('');
        proudref.current.focus()
    }

    return (currentForm !== 'proud' ? null :(
        <div className="achievements details">
            <div className='heading'>Achievements</div>
            <input ref={proudref}type='text' id='proudOf' placeholder='1st place in quiz' value={proudOf} onChange={handleProudOf} />
            <button className='btn' type='button' onClick={addAchieveList}>Add</button>
        </div>
    ))
}

export default ProudForm
