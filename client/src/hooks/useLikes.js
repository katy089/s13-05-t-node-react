import axios from "axios";
import { useState } from "react";
import { API_URL_LIKES } from "../config/api";
import { useDispatch } from "react-redux";
import { updateMisLikes } from "../redux/authSlice";

const useLikes = () => {
  const dispatch = useDispatch();
  const [isLiking, setIsLiking] = useState(false);
  const [likeError, setLikeError] = useState(null);

  const handleLike = async (idUser, idLike) => {
    // console.log("idUser:", idUser);
    // console.log("idLike:", idLike);
    setIsLiking(true);
    setLikeError(null); //limpia cualquier error previo

    try {
      // const response = await axios.post(API_URL_LIKES, { idUser, idLike });
      await axios.post(API_URL_LIKES, { idUser, idLike });
      // console.log("Like response:", response.data);
      setIsLiking(false);
      dispatch(updateMisLikes([{ likedId: idLike }]));
    } catch (error) {
      console.error("Like error:", error);
      setLikeError(error.message);
    }
  };

  return { isLiking, likeError, handleLike };
};

export default useLikes;
