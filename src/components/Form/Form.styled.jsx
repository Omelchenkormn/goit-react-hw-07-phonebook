import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { IoIosContact } from 'react-icons/io';

export const Forms = styled(Form)`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: 0ch;
  background-color: #e7f0ff;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled(Field)`
  width: 130px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #c3dbff;
  border-radius: 5px;
  width: 300px;
  height: 35px;
  font-size: 15px;
  ::placeholder {
    font-size: 15px;
    padding-left: 5px;
  }
  :focus-visible {
    outline: 1px solid #2884fc;
  }
`;
export const Error = styled.div`
  color: red;
  font-size: 15px;
  text-align: center;
`;
export const SvgIconProfile = styled(IoIosContact)`
  width: 60px;
  height: 55px;
  color: #497290;
  &:hover {
    color: #2884fc;
  }
`;
