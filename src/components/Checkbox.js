import styled from "styled-components";

import { Checkbox as Checkboxx } from 'antd';

const Checkbox = styled(Checkboxx)`
    .ant-checkbox {
        width: 18px;
        height: 18px;
        border-radius: 3px;
        margin: 0;
    }

    .ant-checkbox-checked {
        background-color: #00CEFF;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
        .ant-checkbox-inner {
            display: none;
        }
    }

    .ant-checkbox-inner {
        border-radius: 3px;
        width: 18px;
        height: 18px;
        background-color: transparent;
        border: 2px solid #9298AB;
        margin: 0;
    }

    span {
        font-size: 18px;
        margin-left: 5px;
        color: white;
    }
`;

export default Checkbox