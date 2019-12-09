class Bank {
    //atributos
    accounts: UserAccount[];
    fileManager: JSONFileManager;

    //métodos
    createAccount(): void{};
    getAllAccounts(): UserAccount[];
    getAccountByCpf(): UserAccount;
    saveAccounts(): void{}
}