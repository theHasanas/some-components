import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: ${(props) => props.height};

  background-color: salmon;
`;

const BackButton = styled.button`
  position: absolute;
  top: 50%;

  border: none;
  background: none;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;

  border: none;
  background: none;
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 5px;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Dot = styled.button`
  margin-right: 5px;
  padding: 0;
  border: none;
  border-radius: 500px;
  width: 10px;
  height: 10px;

  background-color: ${({ active }) => (active ? "white" : "grey")};
`;

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === children.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
    console.log(currentSlide);
  };

  const prevSlide = () => {
    if (currentSlide === 0) setCurrentSlide(children.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const goToSlide = (slideNumber) => {
    return () => setCurrentSlide(slideNumber);
  };

  return (
    <Wrapper height="200px">
      <BackButton onClick={prevSlide}>{"<"}</BackButton>
      {children[currentSlide]}
      <DotsWrapper>
        {children.map((_, index) => {
          return (
            <Dot onClick={goToSlide(index)} active={index === currentSlide} />
          );
        })}
      </DotsWrapper>
      <NextButton onClick={nextSlide}>{">"}</NextButton>
    </Wrapper>
  );
};

export default Carousel;
