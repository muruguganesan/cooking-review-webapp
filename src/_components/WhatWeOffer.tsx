import { CommonTitleCenter } from './CommonTitle'
import styled from 'styled-components'
import { whatWeOffer } from '../_constants';
import OfferCard from './OfferCard';

const CardGroup = styled.div`
    display: flex;
    gap: 30px;
    @media(max-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 740px) {
        gap: 20px;
    }
    @media(max-width: 740px) {
        grid-template-columns: 1fr;
    }
`;
const CommonTitleCenterWrap = styled(CommonTitleCenter)`
    padding-bottom: 48px;
    @media(max-width: 1200px) {
        padding-bottom: 28px;
    }
    @media(max-width: 740px) {
        padding-bottom: 10px;
    }
`;

const WhatWeOffer = () => {
    return (
        <section className="section_padding">
            <div className="c">
                <CommonTitleCenterWrap>What We Offer</CommonTitleCenterWrap>
                <CardGroup>
                    {whatWeOffer.map((ele) => <OfferCard item={ele} />)}
                </CardGroup>
            </div>
        </section>
    )
}

export default WhatWeOffer