import React from 'react';
import HeaderContent from './HeaderContent';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="header-title">
          <span className="lambdaSchool">Lambda School</span>
          <span className="tagAndTime"> @LambdaSchool · {moment().format("D MMM")}</span>
          <HeaderContent />
        </div>
    );
  }

export default HeaderTitle;