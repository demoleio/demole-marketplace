import Nouislider from "nouislider-react";
import { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";

const NouisliderStyled = styled(Nouislider)`
    box-shadow: none;
    border-radius: 0px;
    height: 3px;
    background: black;
    border: none;

    & .noUi-handle {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #00CEFF;
        border: none;
        box-shadow: none;
        top: -4px;
        right: -9px;

        &::before,
        &::after {
            display: none;
        }
    }

    & .noUi-connect {
        background: #00CEFF;
    }
`;

const WrapperValue = styled.div`
    margin-top: 15px;

    & > span {
        display: inline-block;
        width: calc(50% - (15px / 2));
        background: #292F49;
        border-radius: 8px;
        margin-right: 15px;
        padding: 4px 10px;
        color: #AFB9CF;
        text-align: center;
        font-size: 16px;

        &:last-child {
            margin-right: 0;
        }
    }
`;


function Range(props) {
    const [value, setvalue] = useState(props.start);

    const onChange = (render, handle, value, un, percent) => {
        value = value.map(x => parseInt(x))
        setvalue(value)
    }

    return (
        <Fragment>
            <NouisliderStyled {...props} onChange={onChange}/>
            <WrapperValue>
                <span>{props.prefix || ""}{value[0]}</span>
                <span>{props.prefix || ""}{value[1]}</span>
            </WrapperValue>
        </Fragment>
    )
}

export default Range