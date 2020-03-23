import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
padding:2em 1em 3em;
text-align:center;
border-top: 1px solid grey;

& a{
  &:hover{
    text-decoration: underline;
  }
}
`;

const Footer = ()=>{
  return(
    <FooterDiv>
      NoteBook v0.1.0 | &copy; {new Date().getFullYear()} <a href="https://bit.ly/yinkaenoch" rel="noopener noreferrer" target="_blank">Yinka Enoch Adedokun</a>.
    </FooterDiv>
  );
}

export default Footer;