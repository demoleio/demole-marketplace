import styled from "styled-components";
import BinanceIcon from '../assests/img/icon_binance.png'
import PolygonIcon from '../assests/img/icon_polygon.png'


const Wrapper = styled.div`

    background: #1A1E30;
    border: 1px solid #292F49;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 16px;
    position: absolute;
    top: 60px;
    right: -40px;

    width: 218px;
    z-index: 2;

    & > div {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        img {
            margin-right: 10px;
            width: 24px;
        }

        p {
            font-size: 16px;
        }

        &:last-child {
            margin-bottom: 0px;
        }
    }

    @media only screen and (max-width: 768px) {
        right: -100px;
    }
`;

export default function SelectChainPopover(props) {
    return (
        <Wrapper>
            <div>
                <img src={BinanceIcon} alt="photos"></img>
                <p>Binance Smart Chain</p>
            </div>
            <div>
                <img src={PolygonIcon} alt="photos"></img>
                <p>Polygon</p>
            </div>
        </Wrapper>
    )
}
