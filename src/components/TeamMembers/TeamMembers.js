import React from 'react';

import Member from './Member';

const TeamMembers = () => {
    const memberData = [
        {
            id: 1,
            name: 'Trish',
            position: 'Designer',
            imgUrl: 'https://i.imgur.com/ig1ePiz.png'
        },
        {
            id: 2,
            name: 'Jenny',
            position: 'QA',
            imgUrl: 'https://i.imgur.com/V2NCyKE.png'
        },
        {
            id: 3,
            name: 'Brody',
            position: 'Developer',
            imgUrl: 'https://i.imgur.com/MvoqPL0.png'
        }
    ]

    const memberComp = memberData.map((data) => {
        return <Member key={data.id} data={data}/>
    });

    return(
        <div className='site-team'>
            <div className='site-team__container container'>
                <div className='site-team__members'>
                    {memberComp}
                </div>
            </div>
        </div>
    );
}

export default TeamMembers;