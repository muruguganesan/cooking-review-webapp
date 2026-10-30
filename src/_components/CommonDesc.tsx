import styled from 'styled-components';

const CommonDesc = styled.p`
    color: #6B5B4F;
    line-height: 1.2;
    font-size: 18px;
    @media(max-width: 1200px) {
        font-size: 16px;
    }
        @media(max-width: 740px) {
       font-size: 14px;
    }
`;
const CommonDescCenter = styled(CommonDesc)`
    text-align: center;
`;

export { CommonDesc, CommonDescCenter };