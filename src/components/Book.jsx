import styled from "styled-components";
import Rate from "./Rate.jsx";

const Container = styled.div`
  background-color: white;
  width: 19vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  border: solid black 2px;
  &:hover {
    box-shadow: 0 0 20px 5px rgba(0,0,0,.2)
  }
`;

const StyledImg = styled.img`
  width: 200px;
`;

const StyledRate = styled(Rate)`
display: flex;
flex-direction: row;
`

const StyledH1 = styled.h1`
  text-align: center;
  font-family: "Bodoni 72 Smallcaps", serif;

`;

const StyledH2 = styled.h2`
  font-family: "Bodoni 72 Smallcaps", serif;
`;

function Book(book) {
    return(
        <>
        <Container>
            <StyledH1>{book.title}</StyledH1>
            <StyledImg src={book.cover}/>
            <StyledH2>{book.author}</StyledH2>
            <Rate/>
        </Container>



        </>
    )
}

export default Book;