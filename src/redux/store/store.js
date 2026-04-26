import {createStore} from "redux";

const init = {
  books: [],
  filter: "ALL",
  len: 0,
  addModal: false,
  search: ""
};
const localBooks = localStorage.getItem("books");
if (localBooks) {
  init.books = JSON.parse(localBooks);
  init.len = init.books.length
}
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
          }
          return item;
        }),
      };
    case "MODAL":
      return {
        ...state,
        addModal: !state.addModal,
      }
    case "SEARCH":
      return {
        ...state,
        search: action.search,
        filter: "SEARCH"
      }
    default:
      return state;
  }
};

export const store = createStore(bookReducer);
