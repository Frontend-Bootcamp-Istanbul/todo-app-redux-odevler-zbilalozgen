import styled from "styled-components";

export const AddTodoWrapper = styled.div`
  display: inline-block;
  width: 30%;
  padding: 10px;
  vertical-align: top;
`;

export const ButtonMain = styled.button`
  border: 1px solid #ccc;
  margin-left: 15px;
  padding: 5px 15px;
  font-size: 1em;
`;

export const RemoveAllButton = styled(ButtonMain)`
  width: 90%;
  margin: 0 auto;
  display: block;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  background: #7d3232;
  color: #fff;
  cursor: pointer;
`;

export const Header3 = styled.h3`
  background: #346;
  text-align: center;
  color: #fff;
  padding: 10px 15px;
  border-radius: 0 0 2px 2px;
  margin: 0;
  margin-bottom: 20px;
`;

export const TextInput = styled.input`
  border: 1px solid #ccc;
  padding: 7px 5px;
  width: 150px;
  font-size: 14px;
`;
