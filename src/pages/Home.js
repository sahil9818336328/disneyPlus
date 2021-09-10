import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import background from '../assets/images/home-background.png'
import ImgSlider from '../components/ImgSlider'
import Viewers from '../components/Viewers'
import Movies from '../components/Movies'
import { setMovies } from '../features/movie/movieSlice'
import db from '../firebase'
import styled from 'styled-components'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      dispatch(setMovies(tempMovies))
    })
  })
  return (
    <Wrapper>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &::before {
    background: url(${background}) center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
export default Home
