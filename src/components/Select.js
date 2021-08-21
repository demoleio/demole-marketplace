import styled from 'styled-components';
import { Select as SelectAntd } from 'antd';
import DropdownIcon from "../assests/img/select-dropdown-icon.svg"

const { Option } = SelectAntd;

const SelectStyled = styled(SelectAntd)`
    width: 200px;

	svg {
		fill: #9298AB;
	}

	&:not(.ant-select-customize-input) .ant-select-selector { 
		background-color: transparent;
		border-radius: 8px;
		color: #9298AB;
		border: 1px solid #9298AB;
		height: 44px;
		padding: 0 12px;
	}

	&.ant-select-single .ant-select-selector .ant-select-selection-item, .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
		line-height: 44px;
		font-size: 16px;
	}
`;

export default function Select(props) {
	const suffixIcon = <img src={DropdownIcon} alt="VectorDown" />

	return (
		<SelectStyled defaultValue="jack" suffixIcon={suffixIcon}>
			<Option value="jack">Jack</Option>
			<Option value="lucy">Lucy</Option>
			<Option value="Yiminghe">Yiminghe</Option>
		</SelectStyled>
	)
}

