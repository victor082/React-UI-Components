import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="header-title-all">
        <div className="header-title">
        <h3>Lambda School</h3><span>@LambdaSchool {moment().format("MMMM Do YYYY")}</span>
        </div>
        </div>
    );
};

export default HeaderTitle;