import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
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
`
