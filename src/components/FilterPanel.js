import styled from "styled-components"
import FilterIcon from "../assests/img/filter-icon.svg"
import Input from "../components/Input"
import Checkbox from "./Checkbox";
import Range from "./Range";
import Button from "./Button";
import { useState } from "react";
import VectorDown from '../assests/img/VectorDown.png'
import { Slider } from 'antd';

const Wrapper = styled.div`
    background: #1A1E30;
    margin-top: 45px;
    padding: 25px;
    border-radius: 8px;

    & > div:last-child {
        border-bottom: 0px;
    }
    
    .ant-slider:hover .ant-slider-rail {
        background-color: black;
    }

    .ant-slider-rail {
        background-color: black;
    }

    .ant-slider-dot {
        background-color: black;
        border-color: black;
    }

    .ant-slider-dot-active {
        background-color: #00CEFF;
        border-color: #00CEFF;
    }

    @media only screen and (max-width: 768px) {
        display: ${props => props.isShow ? "block" : "none"};
        margin-top: 16px;
    }
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .clear {
        color: #00CEFF;
        font-weight: 600;
        font-size: 16px;
    }
`;

const TitleWithIcon = styled.p`
    & > img {
        margin-top: -3px;
    }
    & > span {
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
    }
`;

const Item = styled.div`
    padding: 20px 0px 30px;
    border-bottom: 0.5px solid #292F49;
`;

const Title = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #9298AB;
    margin-bottom: 10px;
`;

const TwoCol = styled.div`
    & > label {
        margin-top: 15px;
        width: 50%;
        margin-left: 0 !important;
    }

    & > label:nth-child(1),
    & > label:nth-child(2) {
        margin-top: 0;
    }
`;

const HeadMobile = styled.div`
    display: none;

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 38px;
        width: 100%;
        & > p {
            font-size: 18px;
        }

        /* & > div {
            display: flex;
            align-items: center;
            .ant-checkbox-wrapper {
                margin-right: 31px;
                & > span {
                    font-size: 16px;
                }
            }
        } */
    }
`;

const FiltersBtn = styled(Button)`
    border: 1px solid #FFB337;
    background-color: transparent;
    display: none;

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > img {
            margin-left: 4px;
        }
    }
`

const TextLevel = styled.p`
    color: white;
    font-size: 16px;
    margin-top: 5px;
`


function FilterPanel() {
    const [isShow, setisShow] = useState(false)
    const marks = {
        0: {
            label: <TextLevel>Any</TextLevel>,
        },
        1: {
            label: <TextLevel>1</TextLevel>,
        },
        2: {
            label: <TextLevel>2</TextLevel>,
        },
        3: {
            label: <TextLevel>3</TextLevel>,
        },
        4: {
            label: <TextLevel>4</TextLevel>,
        },
        5: {
            label: <TextLevel>5</TextLevel>,
        },
    };
    return (
        <>
            <HeadMobile>
                <p>28.975.019 Monsters</p>
                <FiltersBtn onClick={() => setisShow(!isShow)}>FILTERS <img src={VectorDown} alt="photos"></img></FiltersBtn>
            </HeadMobile>

            <Wrapper isShow={isShow} >
                <Head>
                    <TitleWithIcon>
                        <img src={FilterIcon} alt="filter-icon" />
                        <span>FILTERS (0)</span>
                    </TitleWithIcon>
                    <p className="clear">Clear filter</p>
                </Head>
                <Item>
                    <Input placeholder="Monster ID" />
                </Item>
                <Item>
                    <Title>TRIBES</Title>
                    <TwoCol>
                        <Checkbox id="Treeman">Treeman</Checkbox>
                        <Checkbox id="Angle">Angle</Checkbox>
                        <Checkbox id="Merman">Merman</Checkbox>
                        <Checkbox id="Shadow">Shadow</Checkbox>
                        <Checkbox id="Dragon" checked={true}>Dragon</Checkbox>
                    </TwoCol>
                </Item>
                <Item>
                    <Title>PRICE</Title>
                    <Range prefix="$" range={{ min: 0, max: 30000 }} start={[0, 20000]} step={1} connect={true}></Range>
                </Item>
                <Item>
                    <Title>LEVEL</Title>
                    <Slider min={0} max={5} trackStyle={{ backgroundColor: '#00CEFF' }} handleStyle={{ backgroundColor: '#00CEFF', width: 12, height: 12, borderColor: '#00CEFF' }} marks={marks} defaultValue={0} />
                </Item>
                <Item>
                    <Title>ELEMENT</Title>
                    <TwoCol>
                        <Checkbox id="Fire">Fire</Checkbox>
                        <Checkbox id="Light">Light</Checkbox>
                        <Checkbox id="Water">Water</Checkbox>
                        <Checkbox id="Dark">Dark</Checkbox>
                        <Checkbox id="Nature" checked={true}>Nature</Checkbox>
                    </TwoCol>
                </Item>
            </Wrapper>
        </>

    )
}

export default FilterPanel