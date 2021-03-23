import styled from "styled-components";

const Blur = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  position: relative;

  min-width: 30vw;
  min-height: 50vh;
  max-height: 80vh;

  display: flex;
  flex-direction: column;

  border-radius: 0.8em;
  padding: 5px 20px;

  background-color: white;
`;

const Header = styled.div`
  display: flex;
  padding-bottom: 2px;
  border-bottom: 1px solid grey;
`;

const Content = styled.div`
  overflow: scroll;
  flex-grow: 1;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: auto;
`;

const Title = styled.label``;

const ExitButton = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const Modal = ({ children, title, visible, hideModal, footer }) => {
  if (!visible) return null;

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <Blur onClick={hideModal}>
      <Wrapper onClick={stopPropagation}>
        <Header>
          <Title>{title}</Title>
          <ExitButton onClick={hideModal}>X</ExitButton>
        </Header>

        <Content>{children}</Content>

        {footer ? <Footer>{footer}</Footer> : null}
      </Wrapper>
    </Blur>
  );
};

export default Modal;
