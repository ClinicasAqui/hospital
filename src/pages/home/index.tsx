import { lutimes } from "fs";
import { useContext } from "react";
import { CardCl } from "../../components/cardClinic";
import { Header } from "../../components/header";
import { HomeProvider } from "../../context/HomeContex";

export function HomePage() {
  const { clinica, loading } = useContext(HomeProvider);

  return (
    <>
      <Header input={false} />
      {!loading && (
        <div>
          <h2>Mais Avaliadas</h2>
          <div style={{ display: "flex", overflow: "scroll" }}>
            {clinica.clinics.map((elem, index) => {
              return (
                <div style={{ marginLeft: "10px" }} key={elem.name}>
                  <CardCl cl={elem} key={index + 8} />
                </div>
              );
            })}
          </div>

          <h2>A sua Região</h2>
          <div style={{ display: "flex", overflow: "scroll" }}>
            {clinica.clinics.map((elem) => {
              return (
                <div style={{ marginLeft: "10px" }} key={elem.id}>
                  <CardCl cl={elem} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
