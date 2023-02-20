import styled from 'styled-components';


// css
import "./App.css";
import "@grapecity/wijmo.styles/wijmo.css";

const Styled = styled.div(
    ({side, layoutmode}) => `

    min-height: 100vh;
    margin: 0;
    font-family: 'noto-sans', sans-serif;
    font-weight: 400;
    color: #333;
    background-color: ${layoutmode === 'light' ? '#f2f7f8' : '#222'};
    letter-spacing: -0.4px;

    .container {
        width: calc(100% - 240px);
        ${side === 'left' ? 'margin-left' : 'margin-right'} : 240px;
        height: 100%;
        transition: all 0.3s;

        .site-contents {
            padding: 24px 40px;
            
            height: 100%
        }

        &.on {
                ${side === 'left' ? 'margin-left' : 'margin-right'}: 60px;
            width: calc(100% - 60px);
        }

        .main-header {
            position: relative;
            
            height: 80px;
            background-color: ${layoutmode === 'Light' ? '#fff' : '#fff'};
            padding: 0 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }




    
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 10%) 1.95px 1.95px 2.6px;u

}

.row {
    width: 100%;
    display: flex;
    align-items: center;

    .row-item {
        width: 100%;
    }
    .row-item-title {
        height: 50px;
        border-bottom: 1px solod #ddd;
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-size: 18px;
        font-weight: 600;
        background: #fff;
        border-radius: 4px 4px 0 0;
    }
    .row-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        background: #fff;
        padding: 0 20px;
        border-radius: 4px 4px 0 0;
    }
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
            margin-bottom: 0;
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



    height: auto;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.2) 0px 1px 3px -1px;

    font: inherit;
    margin: 0;
    border 0;

    .search-area {
        padding: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f5f6f7;
        border-radius: 4px;
        margin-bottom: 10px;

        label {
            font-size: 14px;
            margin-right: 10px;
            white-space: nowrap;
            &:after { 
                display: none;
            }
        }
        
        ul {
            display: flex;
            justify-content: center;

            li {
                position: relative;
                display: flex;
                align-items: center;


            }
        }
    }


}


    `,

);

export default Styled;