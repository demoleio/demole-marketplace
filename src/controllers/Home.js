import Header from "../components/Header";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import MarketInfo from "../components/MarketInfo";
import FilterPanel from "../components/FilterPanel";

const Wrapper = styled.section`
    background-color: #0F1323;
    min-height: 100vh;
    font-family: 'Georama', sans-serif;
    color: white;
`;

const ContainerStyled = styled(Container)`
    @media (min-width: 1288px) {
        width: 1288px;
    }
`;

function App() {
    // const wallet = useWallet()

    return (
        <Wrapper>
            <Header />
            <ContainerStyled>
                <MarketInfo />
                <Row>
                    <Col md={3} xs={12}>
                        <FilterPanel />
                    </Col>
                    <Col md={9} xs={12}>

                    </Col>
                </Row>
            </ContainerStyled>
        </Wrapper>
    );
}

export default App;
