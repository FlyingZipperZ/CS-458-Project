import React from 'react'
import { Button } from '../ButtonElement'
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
Column2,
ImgWrap,
InfoBg,
ImageBg,
 } from './InfoElements'
import testingBg from '../../images/testing-room-bg.jpg'

import { useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as ChevronLeft } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from './assets/chevron-right.svg';

const Slideshow = (props) => {
  const [{ items, activeIndex }, setState] = useState({
    items: props.items,
    activeIndex: 0, // begin with the first item
  });

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      // jump from the first image to the last
      setState((s) => ({ ...s, activeIndex: items.length - 1 }));
      return;
    }
    if (newIndex === items.length) {
      // jump from the last image to the first
      setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }

    setState((s) => ({ ...s, activeIndex: newIndex }));
  };

  return (
    <SlideWrapper style={{ border: '1px solid #000', borderRadius: '50%'}}>
      <ImageBox>
        <img alt={items[activeIndex].caption} src={items[activeIndex].image} />
        <NavButton position="left" onClick={moveTo(activeIndex - 1)}>
          <ChevronLeft />
        </NavButton>
        <NavButton position="right" onClick={moveTo(activeIndex + 1)}>
          <ChevronRight />
        </NavButton>
        <ImageCaption>{items[activeIndex].caption}</ImageCaption>
      </ImageBox>
      <ThumbnailList>
        {items.map((item, index) => (
          <Thumbnail
            onClick={moveTo(index)}
            active={activeIndex === index}
            src={item.image}
          />
        ))}
      </ThumbnailList>
    </SlideWrapper>
  );
};

const InfoSection = ({img, id, topLine, headLine, description, alt, imgStart, buttonName, to, items}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoBg>
          <ImageBg src={testingBg} type='image/jpg'></ImageBg>
        </InfoBg>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>
                        {topLine}
                    </TopLine>
                    <Heading >
                        {headLine}
                    </Heading>
                    <Subtitle >
                        {description}
                    </Subtitle>
                    <BtnWrap>
                        <Button to={to} smooth='true' duration={500} spy='true' exact='true' offset={-80}>
                          {buttonName}
                        </Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                      <Slideshow items={items}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>

    </>
  )
}


const ThumbnailList = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 15%;
`;
const Thumbnail = styled.div`
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  :hover {
    opacity: 1;
  }
`;

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 3px;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  ${({ position }) =>
    position === 'left' &&
    css`
      left: 10px;
    `}
  ${({ position }) =>
    position === 'right' &&
    css`
      right: 10px;
    `}
`;

const ImageCaption = styled.span`
  width: 100%;
  text-align: center;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  padding: 8px;
  background: rgba(255, 255, 255, 0.7);
`;

const ImageBox = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 85%;
  border: 1px solid black;
  border-radius: 33px;
  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin-top: 66px;
  border: 1px solid black;
  border-radius: 50%;
`;


export default InfoSection
