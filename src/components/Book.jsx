import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
`;

const StyledImg = styled.img`
    width: 150px;
`;

function Book(book) {
    return(
        <StyledDiv>
            <h1>{book.title}</h1>
            <StyledImg src={book.cover}/>
            <h2>{book.author}</h2>
            <p>{book.description}</p>
        </StyledDiv>
    )
}

export default Book;