import { Invoice } from '../models/Invoice'
import Service from './Service'

class InvoiceService {

    byAccount() {
        return Service.get<Invoice[]>('/invoice-service/by-account')
    }

}

export default new InvoiceService()