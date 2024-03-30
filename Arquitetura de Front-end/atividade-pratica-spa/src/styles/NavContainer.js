import styled from "styled-components"

export const NavContainer = styled.nav(()=>({
  display:'flex',
  justifyContent:'center',

  ul: {
    display:'flex',
    justifyContent:'space-between',
    width: 250,
    paddingTop:20,
  },

  li: {
    display:'flex',
    justifyContent:'center',
    listStyle: 'none',
    color:'#fff',
    padding:10,
  },

  a: {
    textDecoration:'none',
    color:'#fff',
    '&:hover':{
      fontSize:15
    },
    '&.active': { 
      fontWeight: 'bold',
    },
  }
}))