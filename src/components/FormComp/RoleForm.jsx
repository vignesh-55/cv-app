import {useRef, useState} from 'react'

const initialRole = {
    role: '',
    org: ''
}
let rolesList = [];

function RoleForm({addRoles, currentForm}) {
    const [rolesObj, setrolesObj] = useState(initialRole)
    const roleref = useRef()

    function handleRoleOrg(e){
        const {id, value} = e.target;
        if(id === 'role'){
            setrolesObj({...rolesObj, [id]: value})
        }else if(id === 'org'){
            setrolesObj({...rolesObj, [id]: value});
        }
    }

    function addToRolesList(){
        const {role, org} = rolesObj;
        if(role === '' || org === ''){
            alert('Add your roles and responsibilities');
            return;
        }else if(rolesList.some(ele => ele.role === role)){
            alert('Role added already');
            setrolesObj({
                role: '',
                org: ''
            })
            return;
        }
        let newRole = {
            role,
            org,
        }
        rolesList.push(newRole)
        addRoles(rolesList);
        setrolesObj({
            role:'',
            org: ''
        })
        roleref.current.focus()
    }

    return (currentForm !== 'role' ? null :(
        <div className="additional-roles details">
            <div className='heading'>Roles &#38; Responsibilities</div>
            <label htmlFor='role'>Role</label>
            <input ref={roleref} type='text' id='role' placeholder='Captain' value={rolesObj.role} onChange={handleRoleOrg} />
            <label htmlFor='org'>Organization</label>
            <input type='text' id='org' placeholder='Football Team' value={rolesObj.org} onChange={handleRoleOrg} />
            <button className='btn' type='button' onClick={addToRolesList}>Add</button>
        </div>
    ))
}

export default RoleForm
