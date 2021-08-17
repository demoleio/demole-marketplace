import styled from "styled-components";

const Overlay = styled.div`
    @keyframes OpacityKeyframes {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0px;
    top: 0px;
    animation: OpacityKeyframes 0.3s ease forwards;
    .wrapper {
        width: 100%;
        height: 100%;
        position: relative;

        .dark-range {
            width: 100%;
            position: absolute;
            height: 100%;
        }

        .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 36px;
            p {
                font-weight: bold;
                font-size: 18px;
            }

            img {
                cursor: pointer;
            }
        }

       
    }
`
export default Overlay