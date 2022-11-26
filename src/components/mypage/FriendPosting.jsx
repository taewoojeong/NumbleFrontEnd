import React, { useState } from "react";
import styled from "styled-components";
import PostImg from "../../images/postImg.svg";
import Moment from "react-moment";
import Heart from "../../images/heart.svg";
import Comment from "../../images/comment.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [friendImg, setFriendImg] = useState(PostImg);
  const [friendName, setFriendName] = useState("넘블러");
  const [friendLocation, setLocation] = useState("공덕동");
  const [friendContent, setContent] = useState(
    "OO동에 이사온지 얼마 되지 않아 아는 친구가 한 명도 없어요ㅜㅜ 나이는 25살 여자입니다! 같이 밥먹고 운동 다닐 동네 친구 구해요!"
  );

  const [heartCount, setHeartCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const displayCreateAt = (createdAt) => {
    const date = new Date(createdAt);
    const now = Date.now();
    if (parseInt(date - now) > -60000) {
      return <Moment format="방금 전">{date}</Moment>;
    }
    if (parseInt(date - now) > -3600000) {
      return <Moment format="분 전">{date}</Moment>;
    }
    if (parseInt(date - now) > -86400000) {
      return <Moment format="시간 전">{date}</Moment>;
    }
    if (parseInt(date - now) > -604800000) {
      return <Moment format="일 전">{date}</Moment>;
    }
    if (parseInt(date - now) > -2592000000) {
      return <Moment format="주 전">{date}</Moment>;
    }
    if (parseInt(date - now) > -31536000000) {
      return <Moment format="달 전">{date}</Moment>;
    }
    return <Moment format="년 전">{date}</Moment>;
  };

  const Container = styled.div`
    background: #272a33;
    border-radius: 0.6rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
  `;

  return (
    <Container>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <img
          src={friendImg}
          alt="friendImg"
          style={{
            borderRadius: "50%",
            width: "1.7rem",
            height: "1.7rem",
            marginRight: "0.7rem",
          }}
        />
        <div
          style={{
            marginRight: "0.5rem",
            fontSize: "1.2rem",
            fontWeight: "500",
          }}
        >
          {friendName}
        </div>
        <div style={{ fontSize: "1rem", fontWeight: "400" }}>
          {friendLocation}
        </div>
      </div>
      <div
        style={{ marginBottom: "1rem", textAlign: "left", fontSize: "1.1rem" }}
      >
        {friendContent}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "1rem", fontWeight: "400" }}>
          {displayCreateAt("2021-08-01T10:00:00.000Z")}
        </div>
        <div style={{ display: "flex", alignContent: "center" }}>
          <img src={Heart} alt="heart" style={{ marginRight: "0.3rem" }} />
          <div style={{ marginRight: "1rem" }}>{heartCount}</div>
          <img src={Comment} alt="comment" style={{ marginRight: "0.3rem" }} />
          <div>{commentCount}</div>
        </div>
      </div>
    </Container>
  );
}
