import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOptions/InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../Post/Post";
import { db } from "../firebase";
import firebase from "firebase";
import "firebase/firestore";

const Feed = () => {
  //setting input state for the input field
  const [input, setInput] = useState<string>("");
  const [posts, setPosts] = useState([]);
  //using the useEffect to set up firebase db
  //useEffect help us to fire a code when the feed component loads
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot: any) =>
        setPosts(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e: any) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Isintume Jennifer",
      description: "this is the test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputoptions">
          <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
          <InputOption
            Icon={SubscriptionsIcon}
            title={"Video"}
            color={"#7FC15E"}
          />
          <InputOption Icon={EventNoteIcon} title={"Event"} color={"#E7A33E"} />
          <InputOption
            Icon={CalendarViewDayIcon}
            title={"Write article"}
            color={"#C0CBCD"}
          />
        </div>
      </div>
      {/* POST */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
