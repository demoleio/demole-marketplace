
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Character from "./Character";
import Checkbox from "./Checkbox";
import Pagination from "./Pagination";
import Select from "./Select";

const Wrapper = styled.section`
    margin-top: 45px;
    @media only screen and (max-width: 768px) {
        margin-top: 0px;
        margin-bottom: 35px;
    }
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
        font-size: 18px;
    }

    & > div {
        display: flex;
        align-items: center;
        .form-check {
            margin-right: 31px;
            .form-check-label {
                font-size: 16px;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;


const WrapperSelect = styled.div`
    display: none;

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 19px;

        & > .react-select-custom {
            width: 47%;
            margin-bottom: 41px;
        }
    }
`



function ListCharacter() {
    return (
        <Wrapper>
            <Head>
                <p>28.975.019 Monsters</p>
                <div>
                    <Checkbox label="Your offer" id="Offer" />
                    <Checkbox label="Owned" id="Owned" />
                    <Select />
                </div>
            </Head>

            <WrapperSelect>
                <Select />
                <Select />
            </WrapperSelect>

            <Row>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
                <Col lg={4} md={6} xs={12}><Character></Character></Col>
            </Row>

            <Pagination></Pagination>

        </Wrapper>
    )
}

export default ListCharacter