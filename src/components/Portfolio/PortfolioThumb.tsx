import React from 'react';
import styled from 'styled-components';
import { Picture } from '../Picture';
import { assetPath } from '../../util/helpers';

export const PortfolioThumb = ({ pfe }) => {
  if (pfe.thumbnail) {
    const imagePath = assetPath(pfe.thumbnail);
    return (
      <Thumb>
        <Picture
          webPImagePath={require(`../../assets/images${imagePath}?webp`)}
          imagePath={require(`../../assets/images${imagePath}?trace`)}
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
