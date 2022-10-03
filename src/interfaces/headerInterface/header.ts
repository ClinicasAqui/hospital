export interface IInput{
    input: boolean
}

export interface Iuser {
    id: string;
    name: string;
    email: string;
    age: number;
    avatar?: string;
    healthPlanName: null | [string];
    isActive: boolean;
    isVerify:boolean;
    isAdm: boolean;
    createdAt: string;
    updateAt: string;
}