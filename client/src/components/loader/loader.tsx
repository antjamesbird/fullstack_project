import React from "react";
import Modal from "../styled_components/modal";
import Loading from "./../styled_components/loading";

const Loader = () => {
  return (
    <Modal>
      <Loading>Loading...</Loading>
    </Modal>
  );
};

export default Loader;
