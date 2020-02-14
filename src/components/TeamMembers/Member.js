import React from 'react';

const Member = (props) => {
    const memberStyle = {
        background: `url(${props.data.imgUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return(
        <div className='site-team__member' style={memberStyle}>
            <h3 className='site-team__member--name'>{props.data.name}</h3>
            <div className='site-team__member--line'></div>
            <h3 className='site-team__member--position'>{props.data.position}</h3>
        </div>
    );
}

export default Member;