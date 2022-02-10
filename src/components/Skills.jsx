import { MdArrowRight } from "react-icons/md";

function Skills({skills}) {
    return (
        <div>
            <div className='secTitle'>Skills</div>
            <ul>
                {skills.map(skill => <li className='skills list'>
                    <div className="withIcon">
                        <div className="icon">
                            <MdArrowRight />
                        </div>
                        {skill}</div>
                </li>)}
            </ul>
        </div>
    )
}

export default Skills
