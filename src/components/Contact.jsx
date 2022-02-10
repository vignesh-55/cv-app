function Contact({contact}) {
    return (
        <div>
            <div className='secTitle'>Contact</div>
            <div className="contactDetails list">
                    <p className='mobile'>{contact.mobile}</p>
                    <a href={`mailto:${contact.mail}` } className='email'>{contact.mail}</a>

            </div>
        </div>
    )
}

export default Contact