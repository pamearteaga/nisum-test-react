import { Grid } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  FunctionField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const BooksList = (props) => {
  return (
    <List {...props}>
      <Datagrid
        sx={{
          "& .RaDatagrid-thead": {
            display: "none"
          },
          "& .RaDatagrid-table": {
            display: "block",
            width: "100%"
          },
          "& .RaDatagrid-tbody": {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
          },
          "& .RaDatagrid-row": {
            display: "flex",
            flexDirection: "column",
            width: "25%",
          }

        }}
      >
        <ImageField source="coverImage" title="title" />
        <TextField label="Título" source="title" />
        <DateField label="Launch date" source="launchDate" />
        <FunctionField
          label="Author"
          render={(record) => `${record.author.name} ${record.author.lastname}`}
        />
        <div>
        <EditButton />
        <DeleteButton />
        </div>
      </Datagrid>
    </List>
  );
};

export default BooksList;
