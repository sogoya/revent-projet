import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa"; // Icône remplie

const LikeButton = ({ initialLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <span
      onClick={toggleLike}
      style={{
        display: "flex",
        fontSize: "17px",
        alignItems: "center",
        position: "absolute",
        right: "5px",
        bottom: "105px",
        backgroundColor: "white",
        padding: "6px 8px",
        borderRadius: "18px",
        cursor: "pointer",
        transition: "color 0.3s ease",
      }}
    >
      {liked ? (
        <FaHeart style={{ fontSize: "22px", color: "red" }} /> // Cœur rouge plein
      ) : (
        <CiHeart style={{ fontSize: "22px", color: "black" }} /> // Cœur vide noir
      )}
      <p style={{ marginLeft: "5px" }}>{likes}</p>
    </span>
  );
};

export default LikeButton;
