import styled from 'styled-components'
import { shade } from 'polished'

import signInBackGroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background-color: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      color: #312e38;
      background-color: #ff9000;

      border-radius: 10px;
      border: 0;

      padding: 0px 16px;
      height: 56px;
      width: 100%;
      margin-top: 16px;

      font-weight: 500;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#FF9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
      margin-top: 2px;
    }

    &:hover {
      color: ${shade(0.2, '#FF9000')};
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackGroundImg}) no-repeat center;
  background-size: cover;
`
