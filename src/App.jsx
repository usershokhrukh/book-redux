import React, {useEffect} from "react";
import BookRender from "./components/BookRender";
import {useDispatch, useSelector} from "react-redux";
import AddBook from "./components/AddBook";
import "./assets/App.scss";

const App = () => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.addModal);
  return (
    <div className="app">
      <input
        className="app__search"
        onChange={(e) =>
          dispatch({type: "SEARCH", search: e.target.value.trim()})
        }
        type="search"
        placeholder="Search book..."
      />
      <div className="app__top">
        <button
          className="app__top-filters"
          onClick={() => {
            dispatch({type: "ALL"});
          }}
        >
          All
        </button>
        <button
          className="app__top-filters"
          onClick={() => {
            dispatch({type: "ONLY_READ"});
          }}
        >
          Only read
        </button>
        <button
          className="app__top-filters"
          onClick={() => {
            dispatch({type: "ONLY_UNREAD"});
          }}
        >
          Only unread
        </button>
        <button
          className="app__top-add"
          onClick={() => {
            dispatch({type: "MODAL"});
          }}
        >
          Add book
        </button>
      </div>
      <div className="app__books-render">
        <BookRender />
      </div>
      {book ? <AddBook /> : null}
    </div>
  );
};

export default App;
