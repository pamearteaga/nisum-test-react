import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from "ra-data-simple-rest"
import BooksList from './components/BooksList/BooksList';
import AddBook from './components/AddBook/AddBook';
import EditBook from './components/EditBook/EditBook';
import AuthorsList from './components/AuthorsList/AuthorsList';

function App() {
  return (
    <Admin dataProvider={simpleRestProvider("http://localhost:3000")}>
      <Resource name="books" list={BooksList} create={AddBook} edit={EditBook} />
      <Resource name="authors" list={AuthorsList} />
    </Admin>
  );
}

export default App;
