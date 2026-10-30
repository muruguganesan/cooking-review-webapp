import React from 'react'
import styled from 'styled-components'
import Chip from './Chip';
import { upcomingClassDetails } from '../_constants';
import IconWithText from './IconWithText/_comp/IconWithText';
import { CommonTitle } from './CommonTitle';
import { CommonDesc } from './CommonDesc';

const Card = styled.div`
    border-radius: 20px;
    background-color: white;
    padding: 48px;
    @media (max-width: 900px) {
       padding: 30px;
    }
    @media (max-width: 740px) {
       padding: 15px 20px 20px;
    }
`;
const CardRow = styled.div`
    display: flex;
    gap: 40px;
    justify-content: space-between;
    @media (max-width: 900px) {
       gap: 20px;
    }
       @media (max-width: 740px) {
       flex-wrap: wrap-reverse;
    }
`;

const IconWithCardWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-block: 24px;
`;

const CommonTitleWrap = styled(CommonTitle)`
    padding-bottom: 16px;
    @media(max-width: 740px) {
        text-align: center;
    }
`;

const ChipWrap = styled(Chip)`
   margin-bottom: 16px;
`;
const ChipWrapper = styled.div`
    @media(max-width: 740px) {
        text-align: right;
    }
`;

const UpcomingClassImage = styled.div`
    border-radius: 15px;
`;
const UpcomingClass = () => {
    return (
        <section className='section_padding bg_yellow'>
            <div className="c">
                <Card>
                    <ChipWrapper><ChipWrap>Upcoming Class</ChipWrap></ChipWrapper>
                    
                    <CommonTitleWrap>Sweet & Sour Ribs</CommonTitleWrap>
                    <CardRow>
                        <div className="col_2 col_740_1">

                            <CommonDesc>Master this classic Chinese dish! Learn the perfect balance of sweet and tangy flavors with tender, caramelized ribs. Using ingredients you can find at any local grocery store.</CommonDesc>
                            <IconWithCardWrap>
                                {
                                    upcomingClassDetails.map((ele) => <IconWithText item={ele} />)
                                }
                            </IconWithCardWrap>
                            <div className="com_btn_wrap">
                            <button className="common_btn">Join Now</button>

                            </div>
                        </div>
                        <div className="col_2 col_740_1">
                            <div className="upcoming_img_wrap">
                                <img src="https://images.unsplash.com/photo-1622643944007-450264a5f9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="" />
                            </div>
                        </div>
                    </CardRow>

                </Card>
            </div>
        </section>
    )
}

export default UpcomingClass