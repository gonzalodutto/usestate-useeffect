import { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const like_initial_state = false;
  const [likeState, set_likeState] = useState(like_initial_state);

  const changeStateLike = () => {
    set_likeState(!likeState);
  };

  const increment = () => {
    // console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };

  const reset = () => {
    set_numLikes(0);
  };

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      <p>
        <button onClick={increment}>Like</button>
      </p>
      <p>
        <button onClick={reset}>Reset</button>
      </p>
      <p>
        <button onClick={changeStateLike}>
          {likeState ? "I don't like" : "I Like it"}{" "}
        </button>
      </p>
    </div>
  );
}
