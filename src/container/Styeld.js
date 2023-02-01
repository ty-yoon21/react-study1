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

    @media (max-width: 1680px) {
        .main_wrap {
            .search-area {
                align-items: flex-end;

                &.responsive {
                    ul {
                        flex-direction: column;
                        li {
                            & + li {
                                margin-left: 0px;
                                margin-top: 10px;
                            }
                            label {
                                min-width: 65px;
                                text-align: left;
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;/
                            }
                        }
                    }
                }
                &.row-flex-end {
                    align-items: flex-end;
                }
            }
        }
    }
    `,

);

export default Styled;