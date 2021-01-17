import Service from './Service'

class SchoolService {

    byAccount() {
        return Service.get('/school-service/by-account')
    }

    allAccounts() {
        return Service.get('/school-service/all-accounts')
    }

}

export default new SchoolService()