import { useState } from "react";
import styled from "styled-components";
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
        <Modal
          title="Add product"
          visible={modalVisible}
          hideModal={hideModal}
          footer={
            <>
              <button onClick={hideModal}>Submit</button>
              <button onClick={hideModal}>Cancel</button>
            </>
          }
        >
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </Modal>
      ) : (
        <button onClick={showModal}>Show modal</button>
      )}
    </Wrapper>
  );
};

export default App;
