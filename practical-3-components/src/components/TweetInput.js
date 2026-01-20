import React, { useState } from "react";

function TweetInput() {
  const [tweet, setTweet] = useState("");
  const maxChars = 50;
  const overLimit = tweet.length > maxChars;

  return (
    <div style={{ margin: "20px" }}>
      <h3>Tweet Input</h3>
      <textarea
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        rows="4"
        cols="40"
      />
      <div style={{ color: overLimit ? "red" : "black" }}>
        {tweet.length}/{maxChars}
      </div>
      <button disabled={tweet.length === 0 || overLimit}>
        Tweet
      </button>
    </div>
  );
}

export default TweetInput;
