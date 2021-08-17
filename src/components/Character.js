import { Link } from "react-router-dom";
import styled from "styled-components";
import dragon from '../assests/img/dragon.png'

const Wrapper = styled.section`
    height: ${props => props.customHeight ? props.customHeight : "423px"};
    border: 1px solid #292F49;
    border-radius: 20px;
    background-color: transparent;
    margin-top: 24px;
    /* padding: 24px; */

    &:hover {
        box-shadow: 0px 0px 2px 6px #1A1E30;
        background-color: #1A1E30;
    }

    @media only screen and (max-width: 768px) {
        height: 168px;
        overflow: hidden;
    }
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 0px 24px;


    & > p:first-child {
        background-color: #21D33D;
        border-radius: 6px;
        padding: 4px 12px;
        font-size: 16px;
        font-weight: 600;
    }


    & > p:last-child {
        position: relative;
        font-family: "EvilEmpire";
        color: rgba(255, 246, 231, 0.05);
        font-size: 48px;
        line-height: 55px;

        & > span {
            position: absolute;
            top: 8px;
            left: 30px;
            display: block;
            color: white;
            font-size: 32px;
            line-height: 37px;
            font-family: "EvilEmpire";
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 5px 20px;
        & > p:first-child {
            font-size: 12px;
        }

        & > p:last-child {
            font-size: 48px;
            line-height: 55px;
            & > span {
                top: 8px;
                left: 30px;
                font-size: 32px;
                line-height: 37px;
               
            }
        }
    }

`

const Monster = styled.div`
    background-image: radial-gradient(46.9% 46.9% at 49.88% 50.12%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.25) 0.01%, rgba(255, 255, 255, 0) 107.22%);
    display: flex;
    align-items: center;
    justify-content: center;
    width:  ${props => props.customHeight ? "256px" : "300px"};
    height: ${props => props.customHeight ? "256px" : "300px"};
    margin-top: -40px;
    margin-left: auto;
    margin-right: auto;

    & > .dragon {
        margin-left: 70px;
        margin-top: 30px;
    }

    @media only screen and (max-width: 768px) {
        width:  158px;
        height: 158px;
        margin: 0px;
        margin-top: -42px;
        /* margin-left: -13px; */

        background: radial-gradient(46.9% 46.9% at 49.88% 50.12%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.25) 0.01%, rgba(255, 255, 255, 0) 107.22%);

        & > .dragon {
            /* width:  127px; */
            height: 89px;
            margin-left: 35px;
            margin-top: 5px;
        }
    }
`

const Price = styled.div`
    text-align: center;
    & > p:first-child {
        font-size: 24px;
        font-weight: bold;
    }

    & > p:last-child {
        color: #AFB9CF;
        font-size: 18px;
    }

    @media only screen and (max-width: 768px) {
        text-align: left;
        margin-right: 40px;
        margin-top: 10px;

        & > p:first-child {
            font-size: 20px;
        }

        & > p:last-child {
            font-size: 16px;
        }
    }

`

const WrapperInfoMobile = styled.div`
    @media only screen and (max-width: 768px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`

export default function Character(props) {
    console.log(props)
    return (
        <Wrapper {...props}>
            <Link to="/detail/0">
                <Head>
                    <p>#1234</p>
                    <p>TREEMAN <span>TREEMAN</span></p>
                </Head>

                <WrapperInfoMobile>
                    <Monster  {...props}>
                        <img className="dragon" src={dragon} alt="photos"></img>
                    </Monster>

                    {!props.notShowPrice && <Price>
                        <p>0.927 BNB</p>
                        <p>$258.97</p>
                    </Price>}
                </WrapperInfoMobile>
            </Link>
        </Wrapper>
    )
}
