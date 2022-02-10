import {MdArrowRight} from 'react-icons/md'
function Achievements({proudOf}) {
    return (
        <div>
            <div className='secTitle'>Achievements</div>
            <ul>
                {proudOf.map(ele => <li className='proudOf list'>
                   <div className='withIcon'>
                       <div className="icon">
                           <MdArrowRight />
                       </div>
                        {ele}
                   </div>
                </li>)}
            </ul>
        </div>
    )
}

export default Achievements
