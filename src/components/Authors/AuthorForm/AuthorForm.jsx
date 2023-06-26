import {
  SimpleForm,
  TextInput,
  DateInput,
  required,
  minLength,
} from "react-admin";

const AuthorForm = () => {
  const validateText = [
    required("Required field."),
    minLength(3, "Must have at least 3 characters."),
  ];
  return (
    <SimpleForm>
      <TextInput source="name" validate={validateText} />
      <TextInput source="lastname" validate={validateText} />
      <DateInput source="birthDate" validate={required("Required field.")} />
      <TextInput source="nationality" validate={validateText} />
    </SimpleForm>
  );
};

export default AuthorForm;
