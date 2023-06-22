import styled from 'styled-components';

export const Login = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0.5em 1em;
    border-radius: 30px;
    background: none;
    border: 1px solid #ededed;
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
`
