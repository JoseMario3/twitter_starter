import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import { useEffect } from "react";

export default function TweetBox({tweetText, setTweetText, tweets, tweetsLength, setTweets, userProfile, remainingChar, setRemainingChar}) {
  function handleOnTweetTextChange(evt) {
    setTweetText(evt.target.value);
  };
  
  function handleOnSubmit() {
    let newTweet = {
      name : userProfile.name,
      handle : userProfile.handle,
      text : tweetText,
      comments : 0,
      retweets : 0,
      likes : 0,
      id : tweetsLength
    };
    
    setTweets(tweets.concat(newTweet));
    setTweetText("");
  };

  const disabled = (tweetText.length === 0 || tweetText.length > 140);

  return (
    <div className="tweet-box">
      <TweetInput
        value={tweetText}
        handleOnChange={handleOnTweetTextChange}
      />
      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount
          tweetText={tweetText}
          remainingChar={remainingChar}
          setRemainingChar={setRemainingChar}
        />
        <TweetSubmitButton
          tweetText={tweetText}
          handleOnSubmit={handleOnSubmit}
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  {/*if(props.tweetText.length > 0) {
    useEffect(() => {
      props.setRemainingChar(props.charRemaining-props.tweetText.length);
    })
  }*/}
    return <span>{/*props.charRemaining*/}</span>
}

export function TweetSubmitButton({handleOnSubmit, disabled}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
         <button className="tweet-submit-button" disabled={disabled} onClick={handleOnSubmit}>Tweet</button> 
      </div>
  )
}
