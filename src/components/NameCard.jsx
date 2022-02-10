function NameCard({nameTitle}) {
    return nameTitle === '' ? null :(
        <div>
            <h3 className='name'>{nameTitle.name}</h3>
            <p className='title'>{nameTitle.title}</p>
            <div className="profile-summary">
                <div>
                    <p className='secTitle profileHeading'>Profile Summary</p>
                </div>
                <div className="profileDetails">{nameTitle.profile}</div>
            </div>
        </div>
    )
}

export default NameCard;
