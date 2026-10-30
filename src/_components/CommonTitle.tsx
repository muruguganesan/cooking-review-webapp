import styled from 'styled-components'

const CommonTitle = styled.h3`
    font-size: 30px;
    font-weight: 700;
    @media(max-width: 1200px) {
      font-size: 25px;
    }
    @media(max-width: 500px) {
      font-size: 20px;
    }
`;


const CommonTitleCenter = styled(CommonTitle)`
    text-align: center;
`;



export { CommonTitleCenter, CommonTitle };