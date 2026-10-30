import styled from 'styled-components'
import type { IconWithTextType } from '../_types';
import { CommonDesc } from '../../CommonDesc';

const Wrap = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`;

const IconWithText = ({ item }: { item: IconWithTextType }) => {
  return (
    <Wrap>
      {item.ele}
      <CommonDesc>{item.text}</CommonDesc>
    </Wrap>
  )
}

export default IconWithText