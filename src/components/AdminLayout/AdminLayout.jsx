import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import BooksList from "../Books/BooksList/BooksList";
import AddBook from "../Books/AddBook/AddBook";
import EditBook from "../Books/EditBook/EditBook";
import AuthorsList from "../Authors/AuthorsList/AuthorsList";
import AddAuthor from "../Authors/AddAuthor/AddAuthor";
import EditAuthor from "../Authors/EditAuthor/EditAuthor";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonIcon from '@mui/icons-material/Person';

const AdminLayout = () => {
  return (
    <Admin dataProvider={simpleRestProvider("http://localhost:3000")}>
      <Resource
        name="books"
        list={BooksList}
        create={AddBook}
        edit={EditBook}
        icon={ImportContactsIcon}
      />
      <Resource
        name="authors"
        list={AuthorsList}
        create={AddAuthor}
        edit={EditAuthor}
        icon={PersonIcon}
      />
    </Admin>
  );
};

export default AdminLayout;
