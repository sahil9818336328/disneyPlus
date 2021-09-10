import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectMovies } from '../features/movie/movieSlice'
import { Link } from 'react-router-dom'

const Movies = () => {
  const movies = useSelector(selectMovies)
  return (
    <Wrapper>
      <h4>Movies Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            const { id, cardImg, type } = movie
            if (type === 'recommend') {
              return (
                <Wrap key={id}>
                  <Link to={`/details/${id}`}>
                    <img src={cardImg} alt='recommended-movies' />
                  </Link>
                </Wrap>
              )
            }
          })}
      </Content>

      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            const { id, cardImg, type } = movie
            if (type === 'original') {
              return (
                <Wrap key={id}>
                  <Link to={`/details/${id}`}>
                    <img src={cardImg} alt='recommended-movies' />
                  </Link>
                </Wrap>
              )
            }
          })}
      </Content>

      <h4>Latest & Trending</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            const { id, cardImg, type } = movie
            if (type === 'new') {
              return (
                <Wrap key={id}>
                  <Link to={`/details/${id}`}>
                    <img src={cardImg} alt='recommended-movies' />
                  </Link>
                </Wrap>
              )
            }
          })}
      </Content>

      <h4>Popular Shows</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            const { id, cardImg, type } = movie
            if (type === 'trending') {
              return (
                <Wrap key={id}>
                  <Link to={`/details/${id}`}>
                    <img src={cardImg} alt='recommended-movies' />
                  </Link>
                </Wrap>
              )
            }
          })}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 1.5rem;

  h4 {
    font-weight: 500;
  }
`

const Content = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 25px;
  margin-bottom: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: var(--clr-white);
  }
`
export default Movies
