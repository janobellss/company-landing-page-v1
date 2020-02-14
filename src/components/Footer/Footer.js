import React from 'react';

import FooterNav from './FooterNav';

const Footer = () => {
    const footerNavElements = [
        {
            id: 1,
            title: 'Team',
            item: [
                'Lisa',
                'Danielle',
                'Brian',
                'Join us!'
            ]
        },
        {
            id: 2,
            title: 'Learn More',
            item: [
                'Manifesto',
                'Works',
                'Stories'
            ]
        },
        {
            id: 3,
            title: 'Meet Us',
            item: [
                'Studio',
                'Community',
                'Workshops'
            ]
        },
        {
            id: 4,
            title: 'Contact',
            item: [
                'Twitter',
                'Facebook',
                'Instagram'
            ]
        }
    ]

    const footerNavContents = footerNavElements.map((data) => {
        return <FooterNav key={data.id} data={data}/>
    });

    return(
        <footer className='site-footer'>
            <div className='site-footer__container container'>
                <div className='site-footer__contents'>
                    {footerNavContents}
                </div>
            </div>
        </footer>
    );
}

export default Footer;