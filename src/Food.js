import React, { useState } from "react";

const Food = ({ name }) => {
  const [tried, setTried] = useState(false);

  /*
  const onDelete = () => {
    props.deleteFood(props.food);
  };
*/

  return (
    <li className={tried ? "strike" : ""} onClick={() => setTried(!tried)}>
      {name}
    </li>
    /*<li>
      {props.food}
      <span className="delete" onClick={onDelete}>
        X
      </span>
    </li>*/
  );
};

export default Food;
