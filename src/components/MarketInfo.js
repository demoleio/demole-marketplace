import styled from "styled-components"

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 45px;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Line = styled.div`
    height: 2px;
    background: linear-gradient(90deg, rgba(255,215,81,0) 0%, rgba(255,215,81,1) 50%, rgba(255,215,81,0) 100%);
`;

const Info = styled.ul`
    margin: 50px auto;
    display: flex;
    justify-content: space-evenly;

    
    @media only screen and (max-width: 576px) {
        flex-wrap: wrap;
        margin: 15px auto;

        & > .list-inline-item:last-child {
            margin-top: 39px;
        }
    }
`;

const InfoItem = styled.li`
    text-align: center;
    & > .title {
        font-size: 18px;
        font-weight: bold;
        color: #9298AB;
    }

    & > .value {
        font-weight: bold;
        font-size: 40px;
    }

    @media only screen and (max-width: 768px) {
        margin-right: 20px;
        & > .title {
            font-weight: 600;
            font-size: 16px;
        }

        & > .value {
            font-size: 20px;
        }
    }
`;

function MarketInfo() {
    return (
        <Wrapper>
            <Line />

            <Info className="list-inline">
                <InfoItem className="list-inline-item">
                    <p className="title">Monster sold</p>
                    <p className="value">7800</p>
                </InfoItem>
                <InfoItem className="list-inline-item">
                    <p className="title">Total volume</p>
                    <p className="value">3509.63900 BNB</p>
                </InfoItem>
                <InfoItem className="list-inline-item">
                    <p className="title">Highest price</p>
                    <p className="value">51 BNB</p>
                </InfoItem>
            </Info>

            <Line />
        </Wrapper>

    )
}

export default MarketInfo