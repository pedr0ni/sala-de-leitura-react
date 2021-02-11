import Account from '../models/Account'
import School from '../models/School'
import Service from './Service'

class SchoolService {

    fetchByAccount() {
        return Service.get<School>('/school-service/by-account')
    }

    updateByAccount(body: School) {
        return Service.put<School>('/school-service/by-account', body)
    }

    allAccounts() {
        return Service.get<Account[]>('/school-service/all-accounts')
    }

}

export default new SchoolService()