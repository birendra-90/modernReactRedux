export let selectBook = (book) => {
  return {
    type: 'SELECT_BOOK',
    payload: book
  };
};
