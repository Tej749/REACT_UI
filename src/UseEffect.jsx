import { useEffect, useState } from "react";

function LearnUseEffect() {
  // ---- frist type ---
  // useEffect(() => {
  //   console.log("Welcome to useEffect component check page....");
  //   // data fetch logic
  // }, []);
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0)

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increaseLike = () => {
    setLike(like+1)
  }
  
  // useEffect(() => {
  //   console.log("testpage")
  // }, [count]);
  // Like Button 

  useEffect(() =>{
    // like count sent to backend 
    console.log("Count & Like sent to server")
  }, [like, count])

  // display in page
  return (
    <>
      <h1> {count} </h1>
      

      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount }>-</button>
      <h1> Like : {like} </h1>
      <button onClick={increaseLike}>Like Me</button>

    </>
  );
}
export default LearnUseEffect;
