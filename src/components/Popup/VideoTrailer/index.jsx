import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactPlayer from "react-player/lazy";
import { StyledModal } from "./styled";

const VideoTrailer = (_, ref) => {
  const [url, setUrl] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: (data) => {
      setUrl(data);
      setIsModalOpen(true);
    },
  }));

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledModal
        open={isModalOpen}
        onCancel={handleCancel}
        width={800}
        footer={null}
        destroyOnClose
        centered
      >
        <div>
          <ReactPlayer width="100%" height={500} playing url={url} />
        </div>
      </StyledModal>
    </>
  );
};

export default forwardRef(VideoTrailer);
