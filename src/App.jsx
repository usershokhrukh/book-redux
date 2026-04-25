import React, {useEffect} from "react";
import BookRender from "./components/BookRender";
import {useDispatch, useSelector} from "react-redux";
import AddBook from "./components/AddBook";

const App = () => {
  const dispatch = useDispatch();
  const addBook = useSelector((state) => state?.item);
  const book = useSelector((state) => state);
  console.log(book);

  useEffect(() => {
    dispatch({
      type: "ADD_BOOK",
      item: {
        id: 2,
        title: "Books",
        author: "Abdulla Qodiriy",
        isRead: false,
      },
    });
  }, []);
  return (
    <div>
      <input type="search" placeholder="Search book..." />
      <div>
        <button
          onClick={() => {
            dispatch({type: "ALL"});
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            dispatch({type: "ONLY_READ"});
          }}
        >
          Only read
        </button>
        <button
          onClick={() => {
            dispatch({type: "ONLY_UNREAD"});
          }}
        >
          Only unread
        </button>
        <button
          onClick={() => {
            dispatch({type: "MODAL"});
          }}
        >
          Add book
        </button>
      </div>
      <BookRender />
      {book?.addModal ? <AddBook /> : null}
    </div>
  );
};

export default App;
