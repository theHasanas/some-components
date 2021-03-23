import { useState } from "react";
import styled from "styled-components";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <Wrapper>
      {modalVisible ? (
        <Modal title="Add product" visible={modalVisible} hideModal={hideModal}>
          <Carousel>
            <div>
              <h1>One</h1>
            </div>

            <div>
              <h1>two</h1>
            </div>

            <div>
              <h1>three</h1>
            </div>

            <div>
              <h1>foru</h1>
            </div>

            <div>
              <h1>five</h1>
            </div>

            <div>
              <h1>six</h1>
            </div>
          </Carousel>
        </Modal>
      ) : (
        <button onClick={showModal}>Show modal</button>
      )}
    </Wrapper>
  );
};

export default App;
