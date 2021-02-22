import styled from 'styled-components';
import {Link} from 'react-router-dom';

// {Container, Text, FormButton,FormContent, FormH1, FormLabel, FormInput, FormWrap, Form, Icon}
export const Container = styled.div`
  min-height:692px;
  position: fixed;
  bottom:0;
  top:0;
  left:0;
  right:0;
  z-index:0;
  overflow: hidden;
  background: linear-gradient(
      108deg,
      rgba(1, 147, 86, 1,)0%,
      rgba(10,201,122,1)100%
  );
`;

export const Text = styled.span`
    text-align:center;
    margin-top:24px;
    color:#fff;
    font-size:14px;

`;

export const FormButton = styled.button`

    color:#fff;
    font-size:20px;
    background: #01bf71;
    padding: 16px 0;
    border:none;
    border-radius:4px;
    cursor:pointer;
`;

export const FormInput = styled.input`
    margin-bottom:32px;
    padding: 16px 16px;
    border:none;
    border-radius:4px;
`;

export const FormLabel = styled.label`
    margin-bottom:8px;
    font-size:14px;
    color:#fff;
`;

export const FormH1 = styled.h1`
    margin-bottom:40px;
    font-size:20px;
    color:#fff;
    font-weight:400;
    text-align:center;
`;

export const Form = styled.form`

    font-weight:400;
    text-align:center;
    background:#010101;
    max-width:400px;
    height:auto;
    width:100%;
    z-index:1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9):

    @media screen and (max-width:400px){
        padding:32px 32px;
        margin-bottom:40px;
    }
`;

export const FormContent = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    background:#01BF71;
    @media screen and (max-width:480px){
        padding:10px;
        margin-bottom: 0px;
    }
`;

export const Icon = styled(Link)`
    margin-left:32px;
    margin-top:32px;
    text-decoration:none;
    color:#fff;
    font-weight:700;
    font-size:32px;

    @media screen and (max-width:768px){
        margin-left:150px;
        margin-top:150px;
    }

    @media screen and (max-width:480px){
        margin-left:16px;
        margin-top:16px;
    }
`;

export const FormWrap = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    background: #01BF71;

    @media screen and (max-width:480px){
     height:100%;
    background: #01BF71;
    padding-bottom:80px;
    }
`;