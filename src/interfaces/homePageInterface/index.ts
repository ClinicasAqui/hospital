import { ReactNode } from "react";

export interface IHomeContext {
  children: ReactNode;
}

export interface IResponseClinicas {
  clinics: [
    {
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
  ];
}

export interface IResponseClinica {
    clinics: 
      {
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
    ;
  }


export interface IHomeContextProvier {
    clinica: IResponseClinicas;
    loading: boolean;
}
