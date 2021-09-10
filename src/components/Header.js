import React, { useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import home from '../assets/images/home-icon.svg'
import search from '../assets/images/search-icon.svg'
import watchlist from '../assets/images/watchlist-icon.svg'
import originals from '../assets/images/original-icon.svg'
import movies from '../assets/images/movie-icon.svg'
import series from '../assets/images/series-icon.svg'
import { Link, useHistory } from 'react-router-dom'
import {
  selectUserName,
  selectUserPhoto,
  userLogin,
  userLogout,
} from '../features/user/userSlide'
import { useSelector } from 'react-redux'
import { auth, provider } from '../firebase'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

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
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const navbar = document.getElementById('navbar')

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 70) {
        navbar.classList.add('navbar__fixed')
      } else {
        navbar.classList.remove('navbar__fixed')
      }
    })
  }, [])

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          userLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        )
        history.push('/home')
      }
    })
  }, [dispatch, history])

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        userLogin({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      )
      history.push('/home')
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(userLogout())
      history.push('/')
    })
  }

  return (
    <Wrapper id='navbar'>
      <Link to='/home'>
        <Logo src={logo} alt='logo' />
      </Link>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
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
          <ToggleMenu className='menu__toggle'>
            <div className='hamburger'></div>
          </ToggleMenu>
          <UserImg
            src={userPhoto}
            alt='user'
            onClick={signOut}
            title='sign out'
          />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
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
  @media (max-width: 992px) {
    display: none;
  }
`

const ToggleMenu = styled.div`
  padding: 1em;
  position: absolute;
  top: 1.7em;
  right: 1em;
  cursor: pointer;

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    content: '';
    display: block;
    background: var(--clr-white);
    height: 3px;
    width: 1.75em;
    border-radius: 2px;
    transition: all ease-in-out 500ms;
  }

  .hamburger::before {
    transform: translateY(-7px);
  }

  .hamburger::after {
    transform: translateY(4px);
  }

  .open {
    transform: rotate(45deg);
    background: var(--clr-grey-1);
  }

  .open::before {
    opacity: 0;
  }

  .open::after {
    transform: translateY(-3px) rotate(-90deg);
    background: var(--clr-grey-1);
  }

  @media (min-width: 992px) {
    display: none;
  }
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 50%;

  @media (max-width: 992px) {
    display: none;
  }
`

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

export default Header
