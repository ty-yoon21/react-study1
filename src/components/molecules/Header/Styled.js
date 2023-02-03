import styled from 'styled-components';

const Styled = styled.header(
    ({ side, layoutmode}) => `

    position: relative;
    width: 100%;
    height: 60px;
    background-color: ${layoutmode === 'Light' ? '#fff' : '#424242'};
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .ant-layout-header {
        position: relative;
        width: 100%;
        height: 60px;
        background-color: ${layoutmode === 'Light' ? '#fff' : '#424242'};
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    `,
);
export default Styled;