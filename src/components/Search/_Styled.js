import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => props.theme.title};
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 1px;
  padding-bottom: 35px;
  transition: color 0.2s ease;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  width: 100%;
  height: 40px;
  gap: 15px;
`;

export const Input = styled.input`
  background: transparent;
  padding: 5px 12px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.title};
  transition: all 0.2s ease;

  &:focus-visible {
    border: 1px solid #ccc;
    outline: none;
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 420px) {
    width: 200px;
  }
`;

export const Button = styled.button`
  display: flex;
  border: none;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.button};
  transition: background-color 0.3s ease;
  padding: 5px 13px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Error = styled.span`
  font-size: 16px;
  color: #ed4337;
  padding: 5px 0px;
`;
