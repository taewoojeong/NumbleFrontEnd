import React from "react";
import Post from "./Post";
import Location from "./Location";
import WritingButton from './WritingButton';

export default function FreeBoard() {
  return (
    <>
      <Location />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
			<WritingButton />
    </>
  );
}
