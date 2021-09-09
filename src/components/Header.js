import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import home from '../assets/images/home-icon.svg'
import search from '../assets/images/search-icon.svg'
import watchlist from '../assets/images/watchlist-icon.svg'
import originals from '../assets/images/original-icon.svg'
import movies from '../assets/images/movie-icon.svg'
import series from '../assets/images/series-icon.svg'
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    icon: home,
    title: 'HOME',
  },
  {
    id: 2,
    icon: search,
    title: 'SEARCH',
  },
  {
    id: 3,
    icon: watchlist,
    title: 'WATCHLIST',
  },
  {
    id: 4,
    icon: originals,
    title: 'ORIGINALS',
  },
  {
    id: 5,
    icon: movies,
    title: 'MOVIES',
  },
  {
    id: 6,
    icon: series,
    title: 'SERIES',
  },
]

const Header = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <Logo src={logo} alt='logo' />
      </Link>
      <NavMenu>
        {data.map((item) => {
          const { id, icon, title } = item
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          return (
            <a href='#' key={id}>
              <img src={icon} alt={icon} />
              <span>{title}</span>
            </a>
          )
        })}
      </NavMenu>

      <UserImg
        src='https://avatars.githubusercontent.com/u/77143232?v=4'
        alt='user'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  align-items: center;
  overflow-x: hidden;
`
const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  a {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: var(--clr-white);

    img {
      height: 20px;
      display: block;
      margin-right: 0.3rem;
    }
    span {
      font-size: 13px;
      letter-spacing: var(--spacing);
      position: relative;

      &::after {
        content: '';
        height: 2px;
        background-color: var(--clr-white);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scale(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 50%;
`
export default Header
