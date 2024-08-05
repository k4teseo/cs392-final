import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`

const Container = styled.div`
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
`;

const StyledImg = styled.img`
    width: 200px;
`;

function Book(book) {
    return(
        <StyledDiv>
        <Container>
            <h1>{book.title}</h1>
            <StyledImg src={book.cover}/>
            <h2>{book.author}</h2>
        </Container>
        </StyledDiv>
    )
}

export default Book;