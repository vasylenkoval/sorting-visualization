import styled from "styled-components";

export const Table = styled.div`
  width: auto;
  display: flex;
  position: fixed;
  left: 11.5%;
  right: 2%;
  top: 5%;
  bottom: 5%;
  background-color: #27293d;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
`;

export const Bar = styled.div`
  margin-right: 4px;
  border: 1px solid rgb(29, 119, 237);
  border-radius: 1px 1px 0 0;
  margin-top: auto;
  transition: ${({ transition }) => transition && "background-color .6s"};
  height: ${({ height }) => (height ? height : "50%")};
  width: ${({ width }) => (width ? width : "10%")};
  background: linear-gradient(
    to bottom,
    ${({ barTopColor }) => barTopColor},
    ${({ barBottomColor }) => barBottomColor}
  );
  ${({ selected }) =>
    selected &&
    `background: red;
    border: none;
  `}
  @media (max-width: 900px) {
    margin-right: 2px;
  }
`;

export const Title = styled.h3`
  position: absolute;
  color: grey;
  font-size: 1.5rem;
  font-weight: 300;
  top: 15px;
  left: 30px;
`;

export const AlgorithmName = styled.h2`
  position: absolute;
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  top: 35px;
  left: 30px;
`;
