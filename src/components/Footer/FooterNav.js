import React from 'react';

const FooterNav = (props) => {
    return(
        // <div className='footer-nav'>
        //     <h3 className='footer-nav__title'>{props.data.title}</h3>
        //     <h4>{props.data.item[0]}</h4>
        //     <h4>{props.data.item[1]}</h4>
        //     <h4>{props.data.item[2]}</h4>
        //     <h4 style={{'paddingTop':'1rem'}}>{props.data.item[3]}</h4>
        // </div>

        <ul className='footer-nav'>
            <li className='footer-nav__item'><h3 className='footer-nav__title'>{props.data.title}</h3></li>
            <li className='footer-nav__item'><h4><a href='#' className='footer-nav__link'>{props.data.item[0]}</a></h4></li>
            <li className='footer-nav__item'><h4><a href='#' className='footer-nav__link'>{props.data.item[1]}</a></h4></li>
            <li className='footer-nav__item'><h4><a href='#' className='footer-nav__link'>{props.data.item[2]}</a></h4></li>
            <li className='footer-nav__item'><h4 style={{'paddingTop':'1rem'}}><a href='#' className='footer-nav__link'>{props.data.item[3]}</a></h4></li>
        </ul>
    );
}

export default FooterNav;