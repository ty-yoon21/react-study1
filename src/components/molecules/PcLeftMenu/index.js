import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Styled';
import LeftMenu from '../LeftMenu';



function PcLeftMenu({isActive, layout, color, sidebarBackgrounds}) {
    let navCss = 'portal';

    return (
        <Styled
            className={isActive && 'on'}
            side={layout}
            color={color}
            sidebarBackgrounds={sidebarBackgrounds}        
        >
            <LeftMenu color={color} sidebarBackgrounds={sidebarBackgrounds} />


        </Styled>

        
    );
    
}

PcLeftMenu.propTypes = {
    isActive: PropTypes.bool,
    layout: PropTypes.string,
    color: PropTypes.string,
    sidebarBackgrounds: PropTypes.string,
}

export default PcLeftMenu;