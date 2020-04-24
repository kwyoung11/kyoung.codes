import React from 'react';
import styled from 'styled-components';
import { Picture } from '../Picture';

export const PortfolioThumb = ({ pfe }) => {
  if (pfe.thumbnail) {
    return (
      <Thumb>
        <Picture
          webPImagePath={require(`../../assets/images/${pfe.thumbnail}?webp`)}
          imagePath={require(`../../assets/images/${pfe.thumbnail}?trace`)}
        />
      </Thumb>
    );
  } else {
    return (
      <Thumb>
        <div className="no-image">No image can be provided due to NDA</div>
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
  .no-image {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 100%;
  }
`;
