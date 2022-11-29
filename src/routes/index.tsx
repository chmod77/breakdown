import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { AdminRolesPage, AssignSuperAdminPage, CreatorVerificationRequestsPage, DataExportPage, FlaggedContentPage, Homepage, OfficialRequestsPage, RootSignInPage, SignInAdminPage, SignInPage, UsersPage } from '../pages';
import { AuthenticatedRoute, UnauthenticatedRoute } from '../routing';

export default function Routes({appProps}: any) {
  return (
   <Switch>
        <UnauthenticatedRoute path="/" exact component={SignInPage} appProps={appProps}/>
        <UnauthenticatedRoute path="/root" exact component={RootSignInPage} appProps={appProps}/>
        <UnauthenticatedRoute path="/assign" exact component={AssignSuperAdminPage} appProps={appProps}/>
        <UnauthenticatedRoute path="/signin-admin" exact component={SignInAdminPage} appProps={appProps}/>
        <UnauthenticatedRoute path="/dash" exact component={Homepage} appProps={appProps} />
        <UnauthenticatedRoute path="/creator-verification" exact component={CreatorVerificationRequestsPage} appProps={appProps} />
        <UnauthenticatedRoute path="/official-verification" exact component={OfficialRequestsPage} appProps={appProps} />
        <UnauthenticatedRoute path="/flagged-content" exact component={FlaggedContentPage} appProps={appProps} />
        <UnauthenticatedRoute path="/admin-roles" exact component={AdminRolesPage} appProps={appProps} />
        <UnauthenticatedRoute path="/users" exact component={UsersPage} appProps={appProps} />
        <UnauthenticatedRoute path="/data-export" exact component={DataExportPage} appProps={appProps} />

   </Switch>
  )
}
