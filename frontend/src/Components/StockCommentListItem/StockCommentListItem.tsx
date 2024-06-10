import React from 'react'
import { CommentGet } from '../../Models/Comment';

type Props = {
    comment: CommentGet;
}

const StockCommentListItem = ({comment}: Props) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 ml-4 p-4 mb-8 w-full  rounded-lg bg-white shadow-lg dark:text-slate-200  dark:bg-slate-800 ">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
              {comment.title}
            </p>
          </div>
          <p className="text-dark text-sm dark:text-slate-400">@{comment.createdBy}</p>
          
        </div>
      </div>
      <p className="-mt-4 text-gray-500 dark:text-slate-300">
        {comment.content}
      </p>
    </div>
  )
}

export default StockCommentListItem