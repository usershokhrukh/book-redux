import React from "react";
import {useDispatch, useSelector} from "react-redux";

const BookRender = () => {
  const book = useSelector((state) => state);
  console.log(book);
  const dispatch = useDispatch();
  return book?.books.map((item) => {
    return (
      <div className="book__items">
        <div>
          <div>
            <h2>{item?.title}</h2>
            <p>{item?.author}</p>
          </div>
          <div>
            <p>{item?.isRead ? "o'qilgan" : "o'qilmagan"}</p>
            <input type="checkbox" checked={`${item?.isRead}`} />
          </div>
        </div>
        <button
          onClick={() => {
            dispatch({type: "REMOVE_BOOK", id: item?.id});
          }}
        >
          delete
        </button>
      </div>
    );
  });
};

export default BookRender;
