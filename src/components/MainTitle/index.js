import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styled from './Styled';

export default function MainTitle({ path, title }) {
    return (
        <Styled>
            <h2>{title}</h2>
        </Styled>
    );
}


