export interface IResponseLogin {
  data: {
    accessToken: string;
    user: {
      email: string;
      id: string;
    };
  };
}

export interface IApiCepResponse {
    data: {
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
        ibge: string;
        gia: string;
        ddd: string;
        siafi: string;
    }
  
}
