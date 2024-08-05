import lotrImage from '../assets/lord-of-the-rings.jpg';
import styled from "styled-components";

const StyledImg = styled.img`
    width: 150px;
`;

export default function Book() {
    return(
        <StyledImg src={lotrImage}/>
    )
}