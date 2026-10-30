import styled from 'styled-components'
import type { OfferCardJsonType } from '../_types';
import { CommonDescCenter } from './CommonDesc';


const Card = styled.div`
    display: grid;
    place-items: center;
    padding: 32px;
    background-color: #fff8f0;
    border-radius: 20px;
    @media(max-width: 1200px) {
       padding: 25px;
    }
    @media(max-width: 740px) {
       padding: 15px;
    }
`;

const IconBackground = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #e67e22;
    position: relative;
    @media(max-width: 1200px) {
        width: 44px;
        height: 44px;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`;

const Title = styled.h4`
    padding-block: 16px 12px;
    color: #3d3027;
    font-weight: 600;
    font-size: 20px;
    @media(max-width: 1200px) {
        font-size: 18px;
    }
    @media(max-width: 740px) {
       font-size: 15px;
    }
`;



type OfferCardPropsType = {
    item: OfferCardJsonType
}


const OfferCard = ({ item }: OfferCardPropsType) => {
    return (
        <Card>
            <IconBackground>
                <IconWrapper className='offer_card_icon'>
                    {item.elem}
                </IconWrapper>
            </IconBackground>
            <Title>{item.title}</Title>
            <CommonDescCenter>{item.desc}</CommonDescCenter>
        </Card>
    )
}

export default OfferCard