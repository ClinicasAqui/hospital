export interface IResponseLogin {
  data: {
    accessToken: string;
    user: {
      email: string;
      id: string;
    };
  };
}

export interface IResponseClinica {
      id: string;
      name: string;
      cnpj: string;
      authenticated: boolean;
      descripition: string;
      avatar: string;
      phone: string;
      createdAt: string;
      updatedAt: string;
      CorporationName: string;
      clinicAddress: {
        country: string;
        city: string;
        state: string;
        zipCode: string;
        distict: string;
        way: string;
        number: string;
        createdAt: string;
        updatedAt: string;
        ClinicsName: string;
      };
      clinicImages: [
        {
          id: string;
          link: string;
          width: string;
          height: string;
          createdAt: string;
          updatedAt: string;
          clinicName: string;
        }
      ];
      category: [
        {
          categoryName: string;
          clinicName: string;
          createdAt: string;
        }
      ];
      clinicRating:
        | [
            {
              id: string;
              user: string | null;
              userName: string | null;
              userAvatar: string | null;
              title: string | null;
              message: string | null;
              rating: string;
              createdAt: string;
              updatedAt: string;
              deleted: boolean;
              ClinicsName: string;
            }
          ]
        | [];
      corporation: {
        id: string;
        corporation: string;
      };
      healthPlan: [
        {
          healthPlanName: string;
          clinicName: string;
          assignedAt: string;
        }
      ];
      insurance: [
        {
          treatmentsName: string;
          clinicName: string;
          assignedAt: string;
        }
      ];
      ratingReply: [];
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
  };
}
