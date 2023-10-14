interface User {
    id: number;
    name: string;
    birthday: Date;
    email: string;
    password: string;
    
}
interface Rule {
    id: number;
    name: string;
}
interface PublicationType {
    id: number;
    name: string;
}
interface Publication {
    id: number;
    name: string;
    typeId: number;
    userId: number;
    
}
