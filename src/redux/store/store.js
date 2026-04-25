import {createStore} from "redux";

const init = {
  books: [],
  filter: "ALL",
  len: 0,
  addModal: false
};

const bookReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      action.item.id = state.len + 1;
      return {
        ...state,
        books: [...state.books, action.item],
        len: state.len + 1,
      };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    case "ALL":
      return {
        ...state,
        filter: "ALL",
      };
    case "ONLY_READ":
      return {
        ...state,
        filter: "ONLY_READ",
      };
    case "ONLY_UNREAD":
      return {
        ...state,
        filter: "ONLY_UNREAD",
      };
    case "TOGGLE":
      return {
        ...state,
        books: state.books.map((item) => {
          if (item.id == action.id) {
            item.isRead = !item.isRead
            console.log(item);
            
          }
          return item;
        }),
      };
    case "MODAL":
      return {
        ...state,
        addModal: !state.addModal,
      }
    default:
      return state;
  }
};

export const store = createStore(bookReducer);
