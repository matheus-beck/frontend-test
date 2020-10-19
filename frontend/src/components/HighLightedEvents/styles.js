import styled from "styled-components";
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  list-style: none;
  color: #fff;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 15px;
    img {
      align-self: center;
      max-width: 150px;
    }
    li{
      margin: -12px 0;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 14px;
      font-weight: bold;
      margin: 1px 0 8px;
    }
    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      flex: 1;
      text-align: center;
      border-radius: 5px;
      overflow: hidden;
      margin-top: 3px;
      margin-bottom: 3px;
      margin-left: 2px;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
      div {
        display: flex;
        align-items: center;
        padding: 10px;
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
}
`;

export const GoToEvent = styled(Link)`
  text-decoration: none;
  flex: 1;
  text-align: center;
  font-weight: bold;
`

export const Title = styled.h1`
color: #fff;
margin-bottom: 5px;
`