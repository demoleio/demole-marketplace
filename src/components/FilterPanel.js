import styled from "styled-components"
import FilterIcon from "../assests/img/filter-icon.svg"
import Input from "../components/Input"
import Checkbox from "./Checkbox";
import Range from "./Range";

const Wrapper = styled.div`
    background: #1A1E30;
    margin-top: 45px;
    padding: 25px;
    border-radius: 8px;

    & > div:last-child {
        border-bottom: 0px;
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
    & > div {
        margin-top: 15px;
        display: inline-block;
        width: 50%;
    }

    & > div:nth-child(1),
    & > div:nth-child(2) {
        margin-top: 0;
    }
`;

function FilterPanel() {
    return (
        <Wrapper>
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
                    <Checkbox label="Treeman" id="Treeman"/>
                    <Checkbox label="Angle" id="Angle"/>
                    <Checkbox label="Merman" id="Merman"/>
                    <Checkbox label="Shadow" id="Shadow"/>
                    <Checkbox label="Dragon" id="Dragon" checked={true} />
                </TwoCol>
            </Item>
            <Item>
                <Title>PRICE</Title>
                <Range prefix="$" range={{ min: 0, max: 30000 }} start={[0, 20000]} step={1} connect={true}></Range>
            </Item>
            <Item>
                <Title>ELEMENT</Title>
                <TwoCol>
                    <Checkbox label="Fire" id="Fire"/>
                    <Checkbox label="Light" id="Light"/>
                    <Checkbox label="Water" id="Water"/>
                    <Checkbox label="Dark" id="Dark"/>
                    <Checkbox label="Nature" id="Nature" checked={true} />
                </TwoCol>
            </Item>
        </Wrapper>
    )
}

export default FilterPanel