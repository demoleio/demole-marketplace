
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Character from "./Character";
import Checkbox from "./Checkbox";
import Pagination from "./Pagination";
import Select from "./Select";

const Wrapper = styled.section`
    margin-top: 45px;

    & > .Pagination {
        padding: 0 280px;
        margin: 45px 0;
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
`;




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

            <Row>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
                <Col md={4} xs={12}><Character></Character></Col>
            </Row>

            <Pagination></Pagination>

        </Wrapper>
    )
}

export default ListCharacter