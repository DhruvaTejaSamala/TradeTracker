import React, { useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import { commentGetAPI, commentPostAPI } from "../../Services/CommentService";
import { toast } from "react-toastify";
import { CommentGet } from "../../Models/Comment";
import StockCommentList from "../StockCommentList/StockCommentList";
import Spinner from "../Spinner/Spinner";

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comment, setComment] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getComments();
  },[]);
  
  const handleComment = (e: CommentFormInputs) => {
    // toast.success(`Comment on stock ${stockSymbol} created successfully!`);
     commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success(`Comment on stock ${stockSymbol} created successfully!`);
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  const getComments =  ()=>{
      setLoading(true);
      commentGetAPI(stockSymbol).then((res) => {
        setLoading(false);
        setComment(res?.data!);
      }
      )
  };

  return (
    <div className = "flex flex-col">
      {loading ? <Spinner /> : <StockCommentList comments={comment!}  />}
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;