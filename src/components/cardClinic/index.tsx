import { ReactElement } from "react";
import { ICL } from "../../interfaces/cardClInterface";
import { Typography, Button, IconButton, Tooltip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { DivCard } from "./styled";
import { useNavigate } from "react-router-dom";

export function CardCl({ cl }: ICL): ReactElement {
  const navigate = useNavigate()
  return (
    <DivCard>
    <Swiper  
        updateOnImagesReady = {true} preventClicks = {true} preloadImages = {true} slideToClickedSlide = {true} spaceBetween = {10} loop = {true} centeredSlides navigation={true} coverflowEffect = {{
            
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows : true,}} pagination = {true} effect = "coverflow" modules={[Navigation,Autoplay,EffectCoverflow,Pagination]}
        className="mySwiper">
          <SwiperSlide key={"avatar"} virtualIndex={0} style={{backgroundImage: `url(${cl.avatar})`}} className="swiper-slide" />
          {cl.clinicImages.map((slideContent, index) => {
            return(
              index <= 3 &&
              <SwiperSlide key={"item-" + index + 1} virtualIndex={index} style={{backgroundImage: `url(${slideContent.link})`}} className="swiper-slide">
              </SwiperSlide>)})}
    </Swiper>
      <div className="conteinerInfo">
        <h3>{cl.name}</h3>
        <div>
          <Button className="buttonCl" onClick={() => navigate(`/clinica/${cl.id}`)}>Ver Mais</Button>
          <Tooltip title={cl.descripition}>
          <Button className="buttonCl">
            <Typography variant="body2" color="White" >
              Resumo
            </Typography>
          </Button>
        </Tooltip>
        </div>
      </div>
    </DivCard>
  );
}
