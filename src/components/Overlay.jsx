import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
`;

const StyledImg = styled.img`
  width: 150px;
`;

export default function Overlay({ isOpen, onClose }) {
    return (
        <>
            {
                isOpen ? (
                    <StyledDiv className="overlay">
                        <div className="overlay-background" onClick={onClose}/>
                        <div className="overlay-container">
                            <div className="overlay-controls">
                                <button className="overlay-close" type="button" onClick={onClose}>x</button>
                            </div>
                            <p>Hello</p>
                        </div>
                    </StyledDiv>
                    ) : null
            }
        </>
    );
}