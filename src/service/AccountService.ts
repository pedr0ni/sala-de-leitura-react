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

}

export default new AccountService()