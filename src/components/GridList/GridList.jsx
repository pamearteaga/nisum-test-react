import { ListStyled, GridStyled } from "./GridListStyled";

const GridList = (props) => {
  return (
    <ListStyled {...props} pagination={false} exporter={false} title={"Book Store"}>
      <GridStyled>
        {props.children}
      </GridStyled>
    </ListStyled>
  );
};

export default GridList;
