import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookItem, setBookItem] = useState({
    id: null,
    title: "",
    author: "",
    isRead: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookItem.title && bookItem.author) {
      dispatch({
        type: "ADD_BOOK",
        item: {
          ...bookItem,
        },
      });
      e.target.reset();
      dispatch({type: "MODAL"});
      dispatch({type: "ALL"});
    }
  };

  const handleChange = (e) => {
    setBookItem({
      ...bookItem,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <form className="app__add-form" onSubmit={handleSubmit}>
      <div className="app__add-box">
        <h2 className="app__add-title">Add book</h2>
        <input
          className="app__add-f-input"
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Book title"
        />
        <input
          className="app__add-f-input"
          type="text"
          name="author"
          onChange={handleChange}
          placeholder="Book author"
        />
        <div className="app__add-f-bot">
          <button className="app__add-f-btn app__add-f-btn-add" type="submit">
            Add book
          </button>
          <button
            className="app__add-f-btn"
            onClick={() => dispatch({type: "MODAL"})}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBook;
