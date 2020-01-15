export interface AuthGateway {
generateToken (userId: string): string
}