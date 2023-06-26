import { Create } from "react-admin";
import BookForm from "../BookForm/BookForm";

const AddBook = (props) => {
  return (
    <Create title={"Add a new book"} {...props}>
      <BookForm />
    </Create>
  );
};

export default AddBook;
