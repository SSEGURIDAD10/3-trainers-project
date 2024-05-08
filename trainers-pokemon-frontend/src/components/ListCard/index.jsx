// rafce
import React from "react";

const ListCard = (props) => {
  const { children } = props;
  return (
    <>
      <h1>ListCard</h1>
      {children}
    </>
  );
};

export default ListCard;
