export interface RouterType {
    title: string,
    path: string,
    dropdown?: boolean,
    onClick?: () => void
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
        onClick: () => {
            // Logs user out
        },
        dropdown: true
    }
]

export default Router