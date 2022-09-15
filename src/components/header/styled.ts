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

 .conteinerInput{
    display: flex;
    align-items: center;
    margin-right: 20px;

    button{
        border: none;
        background-color: inherit;
    }

    input{
        border-left: none;
        padding: 6px;
    };
 }
`;
