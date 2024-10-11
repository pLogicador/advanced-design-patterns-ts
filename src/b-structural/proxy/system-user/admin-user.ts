import { 
    SystemUserAddressProtocol, 
    SystemUserProtocol,  
} from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    public firstName: string;
    public userName: string;

    constructor(firstName: string, userName: string) {
        this.firstName = firstName;
        this.userName = userName;
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve) => {
            return setTimeout(() => {
                return resolve([
                    {street: 'Av. Brasil', number: 60},
                    {street: 'Rua B.', number: 45},
                ]);
            }, 2000);
        });
    }
}
