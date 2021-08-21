import Header from "../components/Header";
import styled from "styled-components";
import MarketInfo from "../components/MarketInfo";
import FilterPanel from "../components/FilterPanel";
import ListCharacter from "../components/ListCharacter";
import Footer from "../components/Footer";
import { Row, Col } from 'antd';
import ContainerStyled from "../components/ContainerStyled";


// import useWallet from "../hooks/useWallet";

const Wrapper = styled.section`
    background-color: #0F1323;
    min-height: 100vh;
    font-family: 'Georama', sans-serif;
    color: white;
`;

function Home() {
    // const wallet = useWallet()
    return (
        <Wrapper>
            <Header />
            <ContainerStyled>
                <MarketInfo />
                <Row gutter={24}>
                    <Col lg={6} md={24} xs={24}>
                        <FilterPanel />
                    </Col>
                    <Col lg={18} md={24} xs={24}>
                        <ListCharacter></ListCharacter>
                    </Col>
                </Row>
            </ContainerStyled>
            <Footer></Footer>
        </Wrapper>
    );
}

export default Home;
