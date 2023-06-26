import GridList from "../../GridList/GridList";
import InfoCard from "../../InfoCard/InfoCard";

const BooksList = (props) => {
  return (
    <GridList props={props}>
      <InfoCard />
    </GridList>
  );
};

export default BooksList;
