import styled from 'styled-components';



const Styled = styled.div(
    ({color, layoutMode}) => `

    width: 100%;
    min-height; 100vh;
    margin: 0;
    font-family: 'noto-sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    background-color: ${layoutMode === 'light' ? '#f2f7f8' : '#222'};
    letter-spacing: -0.3px;

    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 30px;
    boxshadow: rgb(0 0 0 / 10%) 1.95px 1.95px 2.6px;u

    `,

);

export default Styled;