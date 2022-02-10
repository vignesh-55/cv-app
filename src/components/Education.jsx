function Education({education}) {
    return (
        <div>
            <div className='secTitle'>Education</div>
            <ul>
                {education.map(edu => <li>
                    <div className="list">
                        <div className="course-year">
                            <p className='course'>{edu.course}</p>
                            <p className='year'>{edu.year.slice(0,4)}</p>
                        </div>
                            <p className='school'>{edu.school}</p>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default Education
