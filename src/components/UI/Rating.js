import React from "react";
import { IoIosStar } from "react-icons/io";

/**
 * @author
 * @function Rating
 **/

const Rating = (props) => {
  return (
    <span
      style={{
        display: "inline-block",
        background: "#388e3c",
        color: "#fff",
        fontWeight: "400",
        fontSize: "12px",
        borderRadius: "3px",
        padding: "2px 5px",
      }}
    >
      {props.value} <IoIosStar />
    </span>
  );
};

export default Rating;
