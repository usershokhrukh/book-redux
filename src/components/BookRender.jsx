import React from "react";
import {useDispatch, useSelector} from "react-redux";

const BookRender = () => {
  const book = useSelector((state) => state.filter);
  const books = useSelector((state) => state.books);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  localStorage.setItem("books", JSON.stringify(books));  
  return books?.map((item) => {
    if (book === "ALL") {
      return (
        <div className="app__items" key={item?.id}>
          <div className="app__book-top">
            <div className="app__book-top-left">
              <h2 className="app__book-title">{item?.title}</h2>
              <p className="app__book-author">{item?.author}</p>
            </div>
            <div className="app__book-top-right">
              {item?.isRead ? (
                <p className="app__book-status read">o'qilgan</p>
              ) : (
                <p className="app__book-status unread">o'qilmagan</p>
              )}
              <input
                className="app__book-input"
                onChange={(e) => {
                  dispatch({type: "TOGGLE", id: item?.id});
                }}
                type="checkbox"
                checked={item.isRead}
              />
            </div>
          </div>
          <button
            className="app__book-delete"
            onClick={() => {
              dispatch({type: "REMOVE_BOOK", id: item?.id});
            }}
          >
            delete
          </button>
        </div>
      );
    } else if (book === "ONLY_READ") {
      if (item?.isRead) {
        return (
          <div className="app__items" key={item?.id}>
            <div className="app__book-top">
              <div className="app__book-top-left">
                <h2 className="app__book-title">{item?.title}</h2>
                <p className="app__book-author">{item?.author}</p>
              </div>
              <div className="app__book-top-right">
                {item?.isRead ? (
                  <p className="app__book-status read">o'qilgan</p>
                ) : (
                  <p className="app__book-status unread">o'qilmagan</p>
                )}
                <input
                  className="app__book-input"
                  onChange={(e) => {
                    dispatch({type: "TOGGLE", id: item?.id});
                  }}
                  type="checkbox"
                  checked={item.isRead}
                />
              </div>
            </div>
            <button
              className="app__book-delete"
              onClick={() => {
                dispatch({type: "REMOVE_BOOK", id: item?.id});
              }}
            >
              delete
            </button>
          </div>
        );
      }
    } else if (book === "ONLY_UNREAD") {
      if (!item?.isRead) {
        return (
          <div className="app__items" key={item?.id}>
            <div className="app__book-top">
              <div className="app__book-top-left">
                <h2 className="app__book-title">{item?.title}</h2>
                <p className="app__book-author">{item?.author}</p>
              </div>
              <div className="app__book-top-right">
                {item?.isRead ? (
                  <p className="app__book-status read">o'qilgan</p>
                ) : (
                  <p className="app__book-status unread">o'qilmagan</p>
                )}
                <input
                  className="app__book-input"
                  onChange={(e) => {
                    dispatch({type: "TOGGLE", id: item?.id});
                  }}
                  type="checkbox"
                  checked={item.isRead}
                />
              </div>
            </div>
            <button
              className="app__book-delete"
              onClick={() => {
                dispatch({type: "REMOVE_BOOK", id: item?.id});
              }}
            >
              delete
            </button>
          </div>
        );
      }
    } else if (book === "SEARCH") {      
      if (item?.title.toLowerCase().includes(search.toLowerCase())) {
        return (
          <div className="app__items" key={item?.id}>
            <div className="app__book-top">
              <div className="app__book-top-left">
                <h2 className="app__book-title">{item?.title}</h2>
                <p className="app__book-author">{item?.author}</p>
              </div>
              <div className="app__book-top-right">
                {item?.isRead ? (
                  <p className="app__book-status read">o'qilgan</p>
                ) : (
                  <p className="app__book-status unread">o'qilmagan</p>
                )}
                <input
                  className="app__book-input"
                  onChange={(e) => {
                    dispatch({type: "TOGGLE", id: item?.id});
                  }}
                  type="checkbox"
                  checked={item.isRead}
                />
              </div>
            </div>
            <button
              className="app__book-delete"
              onClick={() => {
                dispatch({type: "REMOVE_BOOK", id: item?.id});
              }}
            >
              delete
            </button>
          </div>
        );
      }
    }
  });
};

export default BookRender;
