import React from 'react'
import styled from "styled-components"
function Styledcomp() {
    const Heading=styled.h1`
    color:red;
    border:3px solid red;
    border-radius:10px;
    margin-left:400px;
    `//why is it called styled component the reason is when we write styled.h1 it in itself is a component
    //another way
    const Head=styled.h2({
        color:"Red",
        border:"3px dashed brown"
    })//naming should be capital letter first 
  return (
    <div>
        <p>Styled component is an external library which can be used to style components in react easily</p>
        <Heading>Hii</Heading> we see that above created Heading is used here
        <Head>Hello</Head>
    </div>
  )
}

export default Styledcomp