import React from 'react'
import play from '../assets/images/play-icon-black.png'
import trailer from '../assets/images/play-icon-white.png'
import group from '../assets/images/group-icon.png'
import styled from 'styled-components'

const Details = () => {
  return (
    <Wrapper>
      <Background>
        <img
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg'
          alt='movie-background'
        />
      </Background>
      <ImgTitle>
        <img
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'
          alt='logo'
        />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src={play} alt='play-icon' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src={trailer} alt='trailer-icon' />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src={group} alt='group' />
        </GroupButton>
      </Controls>

      <SubTitle>2021 ~ 8m ~ Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque
        optio repellendus iusto perspiciatis itaque dolore minus explicabo. Quo
        in nisi nostrum mollitia, quaerat dignissimos, ab quas ducimus repellat
        ea sint perferendis perspiciatis voluptatum, quibusdam explicabo
        assumenda dolorem asperiores eum distinctio eaque voluptatem totam animi
        quae! Recusandae magni possimus excepturi.
      </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 70px);
  padding: 2rem calc(3.5vw - 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`

const PlayButton = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: var(--spacing);
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`

const AddButton = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    font-size: 2rem;
    color: var(--clr-white);
  }
`

const GroupButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`
const SubTitle = styled.div`
  margin-top: 2rem;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
export default Details
