import styled from '@emotion/styled';
import { BsTrash } from 'react-icons/bs';

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  padding-left: 8px;
  display: flex;
  flex-wrap: nowrap;
  padding: 8px;
`;
export const List = styled.li`
  background-color: white;
  margin: 5px;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 35px;
  border-radius: 5px;
  /* border: 1px solid #2884fc; */
`;

export const Button = styled.button`
  background-color: #fff;
  border: 0ch;
  display: flex;
  justify-content: end;
`;

export const IconSVG = styled(BsTrash)`
  height: 18px;
  width: 18px;
  cursor: pointer;
  :hover {
    color: #2884fc;
  }
`;
