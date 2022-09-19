import styled from "@emotion/styled";

export const DivCarrosel = styled.div`
  width: 80%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 4%;

  .swiper {
    width: 100%;
    height: 100%;
    border-top-left-radius: 4%;
    border-top-right-radius: 4%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .conteinerInfo{
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    h3{
      color: white;
      
    }

    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 94%;

      .buttonCl{
        border: 1px solid #023e8a;
        background-color: rgb(0, 95, 255);
        font-size: 14px;
        text-align: center;
        height: 30px;
        width: 90px;
        color:  white;
        border-radius: 8px;


        &:hover{
          background-color: rgb(0, 70, 255);
        }
      }

      
    }
  }
`;
