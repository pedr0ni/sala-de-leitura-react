import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import AccountService from '../../service/AccountService'

export interface IPrivateRouteProps extends RouteProps { }

export const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
	const [logged] = React.useState(AccountService.getToken())

	return logged ? (
		<Route {...props} component={props.component} render={undefined} />
	) : (
		<Redirect to="/auth/login" />
	)
}