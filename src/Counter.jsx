import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

export default function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const style = {
    dispaly: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
 };

  return (
    <div style={style} className="grid grid-cols-2">
      <h1 className="text-4xl" key={count}>count: {count}
      </h1>
      <div style={style}>
        <button className="border-2" onClick={() => dispatch(actions.increment())}>INCREMENT</button>
        <button className="border-2"  onClick={() => dispatch(actions.decrement())}>DECREMENT</button>
        <button className="text-orange-600" onClick={() => dispatch(actions.reset())}>RESET</button>

        <button onClick={() => dispatch(actions.addby(10))}>add 10</button>

      </div>
    </div>
  );
}
