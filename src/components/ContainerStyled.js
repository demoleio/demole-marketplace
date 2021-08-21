import styled from "styled-components";

const ContainerStyled = styled.div`
    margin: auto;
   
    @media (max-width: 575px) {
        width: calc(100% - 30px);
    }

    @media (min-width: 576px) {
        width: 540px;
    }
    
    @media (min-width: 768px) {
        width: 720px;
    }

    @media (min-width: 992px) {
        width: 960px;
    }

    @media (min-width: 1200px) {
        width: 1140px;
    }
    
    @media (min-width: 1288px) {
        width: 1288px;
    }

`

export default ContainerStyled