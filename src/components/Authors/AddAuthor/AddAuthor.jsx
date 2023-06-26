import { Create } from "react-admin";
import AuthorForm from "../AuthorForm/AuthorForm";

const AddAuthor = (props) => {
  return (
    <Create title={"Add a new author"} {...props}>
      <AuthorForm />
    </Create>
  );
};

export default AddAuthor;
