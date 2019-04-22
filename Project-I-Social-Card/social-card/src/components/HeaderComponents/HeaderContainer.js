import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = () => {
    return (
        <div className="header-container">
        <ImageThumbnail />
        <div className="header-description">
        <HeaderTitle /></div>
        <HeaderContent />
        </div>
    )
}

export default HeaderContainer;