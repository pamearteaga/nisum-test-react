import { Edit } from "react-admin"
import AuthorForm from "../AuthorForm/AuthorForm";

const EditAuthor = (props) => {
  return (
    <Edit title={"Edit Author"} {...props}>
      <AuthorForm />
    </Edit>
  );
}

export default EditAuthor;