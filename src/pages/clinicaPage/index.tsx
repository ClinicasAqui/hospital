import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { IResponseClinica } from "../../interfaces/apiInterface/apiInterface";
import { apiHospital } from "../../services/apiHospital";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay, Pagination } from "swiper";
import { DivCarrosel } from "./styled";

export function ClinicaPage(): ReactElement {
  const { id } = useParams();
  const [clinica, setClinica] = useState<IResponseClinica>(
    {} as IResponseClinica
  );
  const [loading, setLoading] = useState(true);
  const [userExist, setUserExist] = useState(false);


  useEffect(() => {
    apiHospital
      .get(`public/clinic/${id}`)
      .then((res) => {
        setClinica(res.data.clinic);
      })
      .finally(() => setLoading(false));
  }, [loading]);

  return (
    <>
      {!loading && (
        <div>
          <Header input={false} />

          <div>
            <h2>{clinica.name}</h2>
            <p>{clinica.descripition}</p>
          </div>
          <DivCarrosel>
            <Swiper
              autoplay
              loopPreventsSlide
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
              }}
              updateOnImagesReady={true}
              preventClicks={true}
              preloadImages={true}
              slideToClickedSlide={true}
              spaceBetween={10}
              loop={true}
              centeredSlides
              navigation={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: true,
              }}
              pagination={true}
              effect="coverflow"
              modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
            >
              <SwiperSlide
                key={"avatar"}
                virtualIndex={0}
                style={{ backgroundImage: `url(${clinica.avatar})` }}
                className="swiper-slide"
              />
              {clinica.clinicImages.map((elem, index) => {
                return (
                  <SwiperSlide
                    key={"item-" + index + 1}
                    virtualIndex={index + 1}
                    style={{ backgroundImage: `url(${elem.link})` }}
                    className="swiper-slide"
                  ></SwiperSlide>
                );
              })}
            </Swiper>
          </DivCarrosel>
          <h2>Localizão</h2>
          {
            !userExist ?
            <div
              style={{
                position: "relative",
                height: "500px",
                width: "600px",
                textAlign: "right",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  background: "none",
                  height: "500px",
                  width: "600px",
                }}
              >
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src={`https://maps.google.com/maps?q=${
                    clinica.clinicAddress.zipCode
                  }%20${clinica.clinicAddress.way.replace(/ /g, "%20")},%20${
                    clinica.clinicAddress.number
                  }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  scrolling="no"
                ></iframe>
                <a href="https://www.whatismyip-address.com"></a>
                <br />
              </div>
            </div>
            :
            <></>
          }
        </div>
      )}
    </>
  );
}
