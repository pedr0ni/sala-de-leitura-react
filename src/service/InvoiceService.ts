import Service from './Service'

class InvoiceService {

    byAccount() {
        return Service.get('/invoice-service/by-account')
    }

}

export default new InvoiceService()