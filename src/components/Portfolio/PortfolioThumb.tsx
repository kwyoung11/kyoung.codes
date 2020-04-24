import React from 'react';
import styled from 'styled-components';
import { Picture } from '../Picture';

export const PortfolioThumb = ({ pfe }) => {
  if (pfe.thumbnail) {
    return (
      <Thumb>
        <Picture
          webPImageUrl={require(`../../../public${pfe.thumbnail}?webp`)}
          imageUrl={require(`../../../public${pfe.thumbnail}`)}
        />
      </Thumb>
    );
  } else {
    return (
      <Thumb>
        <div>No image can be provided due to NDA</div>
      </Thumb>
    );
  }
};

const Thumb = styled.div`
  width: 100%;
  img {
    box-shadow: inset 0px -25px 10px #aaa;
    object-fit: cover;
    height: 300px;
    width: 100%;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    height: 300px;
    width: 100%;
  }
`;
