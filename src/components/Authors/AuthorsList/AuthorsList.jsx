import GridList from "../../GridList/GridList";
import InfoCard from "../../InfoCard/InfoCard";

const AuthorsList = (props) => {
  return (
    <GridList props={props}>
      <InfoCard type={"author"} />
    </GridList>
  );
};

export default AuthorsList;
