import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { AssignSuperAdminPage, RootSignInPage, SignInAdminPage, SignInPage } from '../pages';
import { AuthenticatedRoute, UnauthenticatedRoute } from '../routing';

export default function Routes({appProps}: any) {
  return (
   <Switch>
        <UnauthenticatedRoute path="/" exact component={SignInPage} appProps={appProps}/>
        <UnauthenticatedRoute path="/root" exact component={RootSignInPage} appProps={appProps}/>
        <UnauthenticatedRoute path="/assign" exact component={AssignSuperAdminPage} appProps={appProps}/>
        <UnauthenticatedRoute path="/signin-admin" exact component={SignInAdminPage} appProps={appProps}/>
        <AuthenticatedRoute path="/dash" exact component={SignInPage} appProps={appProps} />
   </Switch>
  )
}
