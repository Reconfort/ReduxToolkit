// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../hooks";

import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";

export const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIceCream = useAppSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of iceCreams - {numOfIceCream} </h2>
      <button onClick={() => dispatch(ordered())}>Order iceCream</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(restocked(value))}>Restock iceCream</button>
    </div>
  );
};
