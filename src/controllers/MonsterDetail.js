import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import MonsterImage from "../components/MonsterImage";
import MonsterInfo from "../components/MonsterInfo";

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

export default function MonsterDetail() {
    return (
        <Wrapper>
            <Header />
            <ContainerStyled>
                <Row>
                    <Col md={6} xs={12}>
                        <MonsterImage></MonsterImage>
                    </Col>
                    <Col md={6} xs={12}>
                        <MonsterInfo></MonsterInfo>
                    </Col>
                </Row>
            </ContainerStyled>
            <Footer></Footer>
        </Wrapper>
    )
}
