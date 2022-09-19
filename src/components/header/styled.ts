import styled from "@emotion/styled";

export const ConteineirHeader = styled.div`
  width: 99vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const ConteinerLogoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 160px;
    height: 80px;
  }
`;

export const ConteinerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .conteinerInput {
    display: flex;
    align-items: center;
    margin-right: 20px;

    button {
      border: none;
      background-color: inherit;
      border: 1px solid gray;
      border-right: none;
      padding: 4px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;

      :hover{
        background-color: whitesmoke;
      }
    }

    input {
      border-color: gray;
      border-left: none;
      padding: 6px;
      font-size: 18px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;

      :focus {
        outline: none;
      }
    }

  }
`;
