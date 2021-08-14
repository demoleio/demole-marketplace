import { Link } from "react-router-dom";
import styled from "styled-components";
import dragon from '../assests/img/dragon.png'

const Wrapper = styled.section`
    height: 423px;
    border: 1px solid #292F49;
    border-radius: 20px;
    background-color: transparent;
    margin-top: 24px;
    /* padding: 24px; */
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
`

const Monster = styled.div`
    background-image: radial-gradient(46.9% 46.9% at 49.88% 50.12%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.25) 0.01%, rgba(255, 255, 255, 0) 97.22%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    margin-top: -40px;

    & > .dragon {
        margin-left: 70px;
        margin-top: 30px;
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

`

export default function Character() {
    return (
        <Wrapper>
            <Link to="/detail/0">
                <Head>
                    <p>#1234</p>
                    <p>TREEMAN <span>TREEMAN</span></p>
                </Head>

                <Monster>
                    <img className="dragon" src={dragon} alt="photos"></img>
                </Monster>

                <Price>
                    <p>0.927 BNB</p>
                    <p>$258.97</p>
                </Price>
            </Link>
        </Wrapper>
    )
}
