import Header from "../components/Header";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import MarketInfo from "../components/MarketInfo";
import FilterPanel from "../components/FilterPanel";
import ListCharacter from "../components/ListCharacter";
import Footer from "../components/Footer";
// import useWallet from "../hooks/useWallet";

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

function Home() {
    // const wallet = useWallet()
    return (
        <Wrapper>
            <Header />
            <ContainerStyled>
                <MarketInfo />
                <Row>
                    <Col lg={3} md={12}>
                        <FilterPanel/>
                    </Col>
                    <Col lg={9} md={12}>
                        <ListCharacter></ListCharacter>
                    </Col>
                </Row>
            </ContainerStyled>
            <Footer></Footer>
        </Wrapper>
    );
}

export default Home;
