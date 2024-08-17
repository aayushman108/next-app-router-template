"use client";
import React, { useCallback, useMemo, useState } from "react";

export function CallbackHookCheck() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, _setCount3] = useState(0);

  const obj = { a: 1, b: 2, c: 3, d: 4 };
  const { a, b, ...rest } = obj;

  const handleIncreaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecreaseCount = useCallback(() => {
    setCount2(count2 - 1);
  }, []);

  const modifiedCount = useMemo(() => {
    return {
      count: count + 5,
    };
  }, []);

  return (
    <section>
      <button
        onClick={handleIncreaseCount}
      >{`Using previous value ${count}`}</button>
      <button
        onClick={handleDecreaseCount}
      >{`Using current value ${count2}`}</button>
      <h2>How to check if the function with useCallback is recreated?</h2>
      <p>
        You can pass the function as dependency to useEffect, so that whenever
        the function is recreated the useEffect runs
      </p>
      <h2>Scenarios where useCallback is used:</h2>
      <ul>
        <li>
          when you have functions that are passed to child component as props
        </li>
        <li>
          when you have function that are used in dependency array of another
          hooks(like useEffect)
        </li>
        <li>when the functions are expensive to create and execute</li>
      </ul>
      <div>{`useMemo data - ${modifiedCount.count}`}</div>
    </section>
  );
}
