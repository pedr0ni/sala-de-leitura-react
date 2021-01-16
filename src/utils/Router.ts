import AccountService from "../service/AccountService"
import * as H from 'history'

export interface RouterType {
    title: string,
    path: string,
    dropdown?: boolean,
    onClick?: (history: H.History) => void
}

const Router: RouterType[] = [
    {
        title: 'Painel de Controle',
        path: '/'
    },
    {
        title: 'Biblioteca',
        path: '/library'
    },
    {
        title: 'Alunos',
        path: '/students'
    },
    {
        title: 'Meu Perfil',
        path: '/profile',
        dropdown: true,
        onClick: undefined
    },
    {
        title: 'Sair',
        path: '/logout',
        onClick: (history) => {
            // Logs user out
            history.push('/auth/login')
            AccountService.logout()
        },
        dropdown: true
    }
]

export default Router