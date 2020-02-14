export interface AuthGateway {
    generateToken (userId: string): string;
    getUserIdFromToken(token: string): string
    } 