import styled from 'styled-components';
import { darken } from 'polished';

export const EventFormInputs = styled.form`
color: #fff;
margin: 50px 0;
p {
  margin-top: 5px;
}
`

export const EventFormButton = styled.div`
  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    margin: 50px 0;
    padding: 20px 20px;
    overflow: hidden;
    margin-top: 10px;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);
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
`
