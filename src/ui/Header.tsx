import React from 'react';
import styled from 'styled-components';
import {ReactComponent as MenuIcon} from './menu-icon.svg';
import {ReactComponent as SearchIcon} from './search.svg';


const HeaderDiv = styled.header`
background: #4af;
color: white;
padding: 1em;
`

const Header = ()=>{
  return(
    <HeaderDiv>
      {/* Nav Brand: App Title and Icons */}
      <section>
        <h1>NoteBook</h1>
        <SearchIcon />
        <MenuIcon />
      </section>

      {/* TODO: Add swipeable navigation */}
    </HeaderDiv>
  );
}

export default Header;