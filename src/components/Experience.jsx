function Experience({experience}) {
    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    function checkPeriod(range){
        const fromDte = `${monthName[new Date(range.from).getMonth()]} '${range.from.slice(2,4)}`
        const toDte = `${monthName[new Date(range.to).getMonth()]} '${range.to.slice(2,4)}`
        const curMonYear = JSON.stringify(new Date()).slice(1,5) + JSON.stringify(new Date()).slice(5,8)
        if(fromDte === toDte){
            return fromDte;
        }else if(curMonYear === range.to.slice(0,7)){
            return `${fromDte} - Present`;
        }
        return `${fromDte} - ${toDte}`
    }
    return (
        <div>
            <div className='secTitle'>Experience</div>
            <ul>
                {experience.map(el => 
                <li key={el.period} >
                        <div className="list">
                            <div className="rolePeriod">
                                <p className='role'>{el.role}</p>
                                <p>{checkPeriod(el.period)}</p>
                            </div>
                            <p className='company'>{el.company}</p>
                            <p className='roleDetails'>{el.details}</p>
                        </div>
                </li>)}
            </ul>
        </div>
    )
}

export default Experience
