import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { IHomeContext, IHomeContextProvier, IResponseClinicas} from "../../interfaces/homePageInterface";
import { apiHospital } from "../../services/apiHospital";

export const HomeProvider = createContext<IHomeContextProvier>({} as IHomeContextProvier);

export function HomeContext({ children }: IHomeContext) {
    const [clinica, setClinicas] = useState<IResponseClinicas>({} as IResponseClinicas)
    const [loading, setLoading] = useState(true) 

    useEffect(() => {
        apiHospital.get("public/clinics").then(res => {
            setClinicas(res.data)
        }).finally(() => setLoading(false))
    }, [])

  return (
    <HomeProvider.Provider value={{ clinica, loading }}>
      {children}
    </HomeProvider.Provider>
  );
}
