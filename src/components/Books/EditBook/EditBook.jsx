import { Edit } from "react-admin"
import BookForm from "../BookForm/BookForm"

const EditBook = (props) => {
  return (
    <Edit title={"Edit Book"} {...props}>
      <BookForm />
    </Edit>
  );
}

export default EditBook