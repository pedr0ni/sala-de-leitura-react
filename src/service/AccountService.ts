import Account from '../models/Account'
import Service from './Service'

class AccountService {

    constructor() {
        this.loadToken()
    }

    loadToken() {
        const token = this.getToken()

        console.log(token)
        if (token)
            Service.defaults.headers = {
                Authorization: `Bearer ${token}`
            }
    }

    create(body: Account) {
        return Service.post('/user/register', body)
    }

    authenticate(body: Account) {
        return Service.post('/account-service/authenticate', body)
    }

    myAccount() {
        return Service.get<Account>('/account-service/my-account')
    }

    changeImage(body: FormData) {
        return Service.post<Account>('/account-service/change-image', body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    setToken(token: string) {
        localStorage.setItem('Authorization', token)
        Service.defaults.headers = {
            Authorization: `Bearer ${token}`
        }
    }

    logout() {
        localStorage.removeItem('Authorization')
    }

    getToken() : string | null {
        const value = localStorage.getItem('Authorization')
        
        return value
    }

    setAccount(account: Account) {
        localStorage.setItem('Static_Account', JSON.stringify(account))
    }

    getAccount() : Account | null {
        const account = localStorage.getItem('Static_Account')

        return account ? JSON.parse(account) : null
    }

}

export default new AccountService()