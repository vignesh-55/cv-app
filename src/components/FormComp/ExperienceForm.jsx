import {useRef, useState} from 'react';

const initialExp = {
    role: '',
    company: '',
    period: {
        from: '',
        to: ''
    },
    details: ''
}
// const initialPeriod = {
//     from: '',
//     to: ''
// }
let experienceList = [];

function ExperienceForm({addExp, currentForm}) {

    const [expObject, setexpObject] = useState(initialExp);
    const [msg, setmsg] = useState(null);
    const [disable, setdisable] = useState(true);
    const roleref = useRef()

    function handleExpDetails(e){
        const {id, value, className} = e.target;
        if(id === 'role'){
            if(value.length === 0){
                setmsg('In which thing you are experienced');
                setdisable(true)
            }else{
                setdisable(false);
                setmsg(null)
            }
            setexpObject({...expObject, [id]: value});
        }else if(id === 'company'){
            if(value.length === 0){
                setmsg('From where you got this experience');
                setdisable(true)
            }else{
                setdisable(false);
                setmsg(null)
            }
            setexpObject({...expObject, [id]: value});
        }else if(id==='details'){
            setexpObject({...expObject, [id]: value});
        }else if(id === 'from' && className==='period'){
            setexpObject({...expObject, period: {...expObject[className], [id]: value}});
        }else{
            setexpObject({...expObject, period: {...expObject[className], [id]: value}});
        }
    }

    // function handlePeriodDetails(e){
    //     const {id, value} = e.target;
    //     if(id === 'from'){
    //         setperiod({...fromto, [id]: value})
    //     }else{
    //         setperiod({...fromto, [id]: value})
    //     }
    //     if(period.from === period.to){
    //         setexpObject({...expObject, period: period.to})
    //     }else{
    //         setexpObject({...expObject, period: `${period.from} ${period.to}`})
    //     }
    // }

    function todaysDate(){
        let today = new Date(),
        day = today.getDate(),
        month = today.getMonth()+1, 
        year = today.getFullYear();
        if(day<10){
            day='0'+day
        } 
        if(month<10){
            month='0'+month
        }
        today = year+'-'+month+'-'+day;
    return today;
    }

    function addToExpList(){
        const {role, company, period, details} = expObject;
        if(new Date(expObject.period.from) > new Date(expObject.period.to)){
            alert('Period is wrong');
            setexpObject({...expObject, period: {...expObject.period, to: ''}});
            return;
        }
        if(role === '' || company === '' || period === '' || details === ''){
            alert("Give all required details");
            return;
        }else {
            let history = {
                role,
                company,
                period,
                details
            }
            experienceList.push(history)
            addExp(experienceList);
        }
        setexpObject({
            role: '',
            company: '',
            period: {
                from: '',
                to: ''
            },
            details: ''
        })
        roleref.current.focus();
    }
    
    return (currentForm !== 'exp' ? null :(
        <div className="experience details">
            <div className='heading'>Experience</div>
            <p><i>Include your projects also if any in this section</i></p>
            {/* <div className="expDetails"> */}
                <label htmlFor='role'>Role</label>
                <input ref={roleref}type='text' id='role' placeholder='Title of your role or your project' onChange={handleExpDetails} value={expObject.role}/>
                <label htmlFor='company'>Company</label>
                <input type='text' id='company' placeholder='Company name or self learning' onChange={handleExpDetails} value={expObject.company}/>
                {/* <label htmlFor='period'>Period</label> */}
                {/* <input type='text' id='period' value={expObject.period} onChange={handleExpDetails} /> */}
                <div className="period-input">
                    <label htmlFor='from'>From</label>
                    <input type='date' className='period' max={todaysDate()} id='from' value={expObject.period.from} onChange={handleExpDetails} />
                    <label htmlFor='to'>To</label>
                    <input type='date' className='period' max={todaysDate()} id='to' value={expObject.period.to} onChange={handleExpDetails} />
                </div>
                <label htmlFor='details'>Details</label>
                <textarea id='details' value={expObject.details} onChange={handleExpDetails} />
                <button className='btn' type='click' disabled={disable} onClick={addToExpList}>Add</button>
                {msg !== null && <div>{msg}</div>}
            {/* </div> */}
        </div>
    ))
}

export default ExperienceForm
