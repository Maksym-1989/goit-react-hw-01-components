import React from 'react';
import css from './Section.module.css'

const Section = ({ children, title }) => {
    return (
        <div className={css.container}>
            {children}
        </div>    );
}

export default Section;