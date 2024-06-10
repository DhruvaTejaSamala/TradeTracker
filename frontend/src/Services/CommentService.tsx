import axios from "axios";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";
import { toast } from "react-toastify";

const api = "http://localhost:5283/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    
    symbol = symbol.toLowerCase();
    const data = await axios.post<CommentPost>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};


export const commentGetAPI = async (
  symbol: string,
 ) => {
  try {
    
    symbol = symbol.toLowerCase();
    const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};