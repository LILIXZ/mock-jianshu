import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    z-index: 0;
    background-color: #f9f9f9;
`

export const LoginBox = styled.div`
    width: 400px;
    height: 180px;
    margin: 100px auto;
    padding-top: 20px;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    background-color: #fff;
`

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777;
`

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    margin: 10px auto;
    color: #fff;
    background-color: #3194d0;
    border-radius: 15px;
    text-align: center;
`