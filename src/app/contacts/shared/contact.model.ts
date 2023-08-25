export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    telephone: string;
    mobile?: string;
    dateOfBirth?: Date ;
    age?: number ;
    emailID : string;
    imageUrl?: string;
    location?: {
        address: string;
        city: string;
        state: string;
    };
    notes?: string;
}