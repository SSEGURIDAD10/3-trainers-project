// rafce
import React from "react";
import './index.css'

const ListCard = (props) => {
  const { children } = props;
  return (
    <>
    <div className="container-list">
      {children}
    </div>
    </>
  );
};

export default ListCard;
