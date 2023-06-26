import {
  TextField,
  ImageField,
  FunctionField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";
import { InfoCardStyled } from "./InfoCardStyled";

const InfoCard = ({ type = "book" }) => {
  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <InfoCardStyled>
      {type === "book" && (
        <div className="img-wrap" style={{ backgroundColor: getRandomColor() }}>
          <ImageField source="coverImage" title="title" />
        </div>
      )}
      <div className="text-wrap">
        {type === "book" ? (
          <TextField source="title" className="title" />
        ) : (
          <div>
            <TextField source="name" className="title" />
            <TextField source="lastname" className="title" />
          </div>
        )}
        <p className="helper-text">
          {type === "book" ? (
            <>
              <strong>Published:</strong>
              <DateField source="launchDate" />
            </>
          ) : (
            <>
              <strong>Birth Date:</strong>
              <DateField source="birthDate" />
            </>
          )}
        </p>
        {type === "book" ? (
          <p className="helper-text">
            <strong>Author:</strong>
            <FunctionField
              label="Author"
              render={(record) =>
                `${record.author.name} ${record.author.lastname}`
              }
            />
          </p>
        ) : (
          <p className="helper-text">
            <strong>Nationality:</strong>
            <TextField source="nationality" />
          </p>
        )}
        <div>
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </InfoCardStyled>
  );
};

export default InfoCard;
