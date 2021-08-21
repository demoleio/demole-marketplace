
import styled from "styled-components";
import Character from "./Character";
import Checkbox from "./Checkbox";
import Pagination from "./Pagination";
import Select from "./Select";
import { Row, Col } from 'antd';

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
        .ant-checkbox-wrapper {
            margin-right: 31px;
            & > span {
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

        & > .ant-select {
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
                    <Checkbox id="Offer">Your offer</Checkbox>
                    <Checkbox id="Owned">Owned</Checkbox>
                    <Select />
                </div>
            </Head>

            <WrapperSelect>
                <Select />
                <Select />
            </WrapperSelect>

            <Row gutter={24}>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
                <Col lg={8} md={12} xs={24}><Character></Character></Col>
            </Row>

            <Pagination></Pagination>

        </Wrapper>
    )
}

export default ListCharacter