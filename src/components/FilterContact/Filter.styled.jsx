import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-top: 10px;
  border: 1px solid #c3dbff;
  border-radius: 5px;
  width: 300px;
  height: 35px;
  font-size: 15px;
  :focus-visible {
    outline: 1px solid #2884fc;
  }
`;
