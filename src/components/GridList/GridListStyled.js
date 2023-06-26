import styled from "styled-components";
import { List, Datagrid } from "react-admin";

export const ListStyled = styled(List)`
  & .MuiPaper-root {
    box-shadow: none;
    width: auto;
    max-width: 100%;
  }
`;

export const GridStyled = styled(Datagrid)`
  background-color: #e3f9ef;
  width: auto;
  padding: 0 10px;
  & .RaDatagrid-thead {
    display: none;
  }
  & .RaDatagrid-table {
    display: block;
    width: auto;
  }
  & .RaDatagrid-tbody {
    display: grid;
    grid-template-columns: repeat(auto-fill, 24%);
    justify-content: space-between;
    @media screen and (max-width: 1199px) {
      grid-template-columns: repeat(auto-fill, 32%);
    }
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(auto-fill, 48%);
    }
    @media screen and (max-width: 575px) {
      grid-template-columns: repeat(auto-fill, 100%);
    }
  }
  & .RaDatagrid-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 10px;
    td {
      border: none;
      padding: 0;
    }
    td:first-child {
      display: none;
    }
  }
`;
