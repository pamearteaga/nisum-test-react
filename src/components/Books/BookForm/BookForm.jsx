import { SimpleForm, TextInput, DateInput, required, minLength } from "react-admin";

const BookForm = () => {
  const validateText = [required("Required field."), minLength(3 ,"Must have at least 3 characters.")];
  return (
    <SimpleForm>
      <TextInput size="small" source="title" validate={validateText} />
      <DateInput source="launchDate" validate={required("Required field.")}/>
      <TextInput
        label="Book Cover"
        placeholder="Example: https://example.com/book-cover.jpg"
        source="coverImage"
        validate={required("Required field.")}
      />
      <p>Author's name</p>
      <TextInput label="Name" source="author.name" validate={validateText} />
      <TextInput label="Lastname" source="author.lastname" validate={validateText} />
    </SimpleForm>
  );
};

export default BookForm;
