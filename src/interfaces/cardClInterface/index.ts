export interface ICL {
    cl: {
        id: number;
        idCl: number;
        nomeCl: string;
        img: string[]
        endereço: {
            Rua: string;
            Numero: string;
            Bairro: string;
            Cidade: string;
            Cep: string;
        };
        descricao: string;
        tratamento: string;
    } 
}