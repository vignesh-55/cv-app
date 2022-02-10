import {MdArrowRight} from 'react-icons/md'
function Roles({roles}) {
    return (
        <div>
            <div className='secTitle'>Roles and Responsibilities</div>
            <ul>
                {roles.map(ele => 
                    <li className='rolesRespo list'>
                        <div className="withIcon">
                            <div className="icon">
                                <MdArrowRight />
                            </div>
                            {ele.role} in {ele.org}</div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Roles
