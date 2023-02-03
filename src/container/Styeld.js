import styled from 'styled-components';



const Styled = styled.div(
    ({side, layoutmode}) => `

    width: 100%;
    min-height: 100vh;
    margin: 0;
    font-family: 'noto-sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    background-color: ${layoutmode === 'light' ? '#f2f7f8' : '#222'};
    letter-spacing: -0.3px;

    .container {
        width: calc(100% - 240px);
        ${side === 'left' ? 'margin-left' : 'margin-right'} : 240px;
        height: 3000px;
        transition: all 0.3s;

        .site-contents {
            padding: 24px 40px;
            width: 100%;
            height: 100%
        }

        &.on {
                ${side === 'left' ? 'margin-left' : 'margin-right'}: 60px;
            width: calc(100% - 60px);
        }

        .main-header {
            position: relative;
            width: 100%;
            height: 80px;
            background-color: ${layoutmode === 'Light' ? '#fff' : '#fff'};
            padding: 0 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


    }




    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 30px;
    boxshadow: rgb(0 0 0 / 10%) 1.95px 1.95px 2.6px;u

}
/* main content */
.main_title {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 10px;

    & + p {
        text-align: center;
    }

    .btn-list {
        display: flex;
        margin-top: 10px;

        li {
            margin-botton: 0;
            &:nth-child(2n) {
                margin: 0 5px;
            }
            &:first-child {
                margin-left: 5px;
            }
            &.btn-list li:last-child {
                margin-right: 0px;
            }
        }
    }
}

.main_wrap {

    width: 100%;
    height: auto;
    backgroud: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.2) 0px 1px 3px -1px;

    .search-area {
        padding: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        backgroud: #f5f6f7;
        border-radius: 4px;
        margin-botton: 10px;
    }


}


    `,

);

export default Styled;