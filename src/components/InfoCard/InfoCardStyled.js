import styled from "styled-components";

export const InfoCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 100px;
  .img-wrap {
    width: 30%;
    max-width: 75px;
    overflow: hidden;
    border-radius: 8px;
    height: 100px;
    .MuiBox-root {
      max-width: 75px;
      max-height: 105px;
    }
    .RaImageField-image {
      margin: 0;
      max-width: 75px;
      max-height: 105px;
      object-fit: fill;
      border-radius: 8px;
    }
  }
  .text-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    min-width: 70%;
    padding-left: 10px;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    .helper-text {
      font-size: 0.75rem;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      strong {
        margin-right: 3px;
      }
    }
    .MuiTypography-root {
      font-size: 0.75rem;
      line-height: normal;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    .title{
      font-size: 1.1rem;
      font-weight: 600;
      margin-right: 10px;
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
