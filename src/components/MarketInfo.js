import styled from "styled-components"

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 45px;
`;

const Line = styled.div`
    height: 2px;
    background: linear-gradient(90deg, rgba(255,215,81,0) 0%, rgba(255,215,81,1) 50%, rgba(255,215,81,0) 100%);
`;

const Info = styled.ul`
    margin: 50px auto;
    display: flex;
    justify-content: space-evenly;
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