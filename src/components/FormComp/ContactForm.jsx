import {useState} from 'react'; 
const initialContact = {
    mobile: '',
    mail: '',
}
function ContactForm({addContact, currentForm}) {
    const [contact, setcontact] = useState(initialContact)
    const [disable, setdisable] = useState(true)

    function handleContact(e){
        const {id, value} = e.target;
        if(id === 'mobile'){
            if(isNaN(Number(value))){
                alert('Provide only Number');
                setcontact({...contact, [id]: ''})
                return;
            }else if(value.length > 10){
                alert('Provide 10 digit number')
                setcontact({...contact, [id]: value.slice(0,10)})
                return;
            }
            setcontact({...contact, [id]: value})
        }else if(id === 'mail'){
            setcontact({...contact, [id]: value})
        }
        (contact.mobile !== '') && (contact.mail.length > 8) ? setdisable(false)
            : setdisable(true)
    }

    function passToForm(){
        if(!contact.mail.includes('@') || !(/\.com/).test(contact.mail)){
            alert('Enter a valid mail id');
            setcontact({...contact, mail: ''})
            return;
        }
        addContact(contact);
        setcontact({
            mobile: '',
            mail: '',
        })
    }

    return (currentForm !== 'contact' ? null :(
        <div className="contact details">
            <div className='heading'>Contact</div>
            <input type='text' id='mobile' placeholder='76581 90187' value={contact.mobile} onChange={handleContact} />
            <input type='text' id='mail' placeholder='abc@gmail.com' value={contact.mail} onChange={handleContact} />
            <button className='btn' type='click' disabled={disable} onClick={passToForm}>Add</button>
        </div>
    ))
}

export default ContactForm
