import styled from 'styled-components';
import { Select as SelectAntd } from 'antd';

const { Option } = SelectAntd;

const SelectStyled = styled(SelectAntd)`
    width: 200px;

	svg {
		fill: #9298AB;
	}

	&:not(.ant-select-customize-input) .ant-select-selector { 
		background-color: transparent;
		border-radius: 8px;
		font-size: 16px;
		color: #9298AB;
		border: 1px solid #9298AB;
	}
`;

const Text = styled.p`
	color: #9298AB;
`

const Item = styled(Option)`
	
`

export default function Select(props) {

	const Show = () => {
		document.getElementById('MiamiPlayers').setAttribute('size', 3);
	}

	return (
		<SelectStyled id="MiamiPlayers" onclick={() => Show()} defaultValue="lucy" dropdownStyle={{ backgroundColor: '#0F1323', border: '1px solid #9298AB', borderRadius: 8, color: '#9298AB', boxShadow: '6px 3px 6px 0 rgba(0, 0, 0, 0.4)' }} style={{ color: '#9298AB' }}>
			<Item value="jack"><Text>Jack</Text></Item>
			<Option value="lucy"><Text>Lucy</Text></Option>
			<Option value="Yiminghe"><Text>Yiminghe</Text></Option>
		</SelectStyled>
	)
}

