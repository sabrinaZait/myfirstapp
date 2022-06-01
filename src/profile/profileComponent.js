import React from 'react'
import PropTypes from 'prop-types';

const Profile_component = ({ fullName, bio, profession, handleName, children }) => {
    const styleProfile = {
        color: 'black', display: 'flex', margin: "40px 60px",
        justifyItems: 'center', textAlign: 'start'
    }

    
    const handleAlert = e => {
        handleName(fullName);
    }
    return (
        <div style={styleProfile}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', textAlign: 'center' }}>
                <div> {children}</div>
                <div>
                    <button onClick={handleAlert} style={{ width: '100px', height: '40px', border: 'dashed 2px green', borderRadius: '3px', fontSize: '15' }} >
                        Click here !
                    </button>
                </div>
            </div>
            <div style={{ margin: '20px 50px' }} >
                <h1>{fullName}</h1>

                <h4>{profession}</h4>

                <span>{bio}</span>
            </div>
        </div>
    )
}

//  default props 
Profile_component.defaultProps = {
    fullName: 'ZAIT Sabrina',
    bio: 'to the stars that listen and the dreams that are answered ',
    profession: 'Student in web developement '
};


Profile_component.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}

export default Profile_component