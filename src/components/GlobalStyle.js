import { createGlobalStyle } from 'styled-components';

import EvilEmpire from '../assests/fonts/EvilEmpire.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'EvilEmpire';
        src: local('EvilEmpire'), url(${EvilEmpire}) format('opentype');
        /* font-weight: 300;
        font-style: normal; */
    }

    p {
        margin-bottom: 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: white;
        &:hover{ 
            color: white;
        }
    }

    ${'' /* CUSTOM ANT SELECT */}
    .ant-select-dropdown {
        background-color: #0F1323;
		border: 1px solid #9298AB;
		border-radius: 8px;
		box-shadow: 6px 3px 6px 0 rgba(0, 0, 0, 0.4);
        padding: 0;

        .ant-select-item {
            font-size: 16px;
            color: #9298AB;
            height: 44px;
            line-height: 44px;
            padding: 0px 12px;
        }

        .ant-select-item-option-selected {
            background-color: #292F49;
        }

        .ant-select-item-option-active {
            background-color:#394163;
        }
    }
`;