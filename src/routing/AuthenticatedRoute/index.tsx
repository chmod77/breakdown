//@ts-ignore
import { Spin } from "antd";
import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface UserInterface {
  first_name: string,
  last_name: string
}

interface AppPropsInterface {
  isAuthenticated: boolean,
  isVerified: boolean,
  isProfiled: boolean,
  user: UserInterface
}

interface IProps extends RouteProps {
  exact?: boolean;
  appProps: AppPropsInterface,
  path: string;
}

//@ts-ignore
export default function AuthenticatedRoute({ component: C, appProps, ...rest }: IProps) {

  if (appProps.isAuthenticated == undefined || appProps.isAuthenticated == null) {
    return (
      <div className='centerLoader text-center'>
        <Spin size="large" spinning={true}></Spin>
      </div>
    )
  }

  if (appProps.isAuthenticated && appProps.isVerified && appProps.isProfiled) {
    return <Redirect to="/dashboard" />;
  }

//   if (appProps.isAuthenticated && !appProps.isVerified && !appProps.isProfiled) {
//     return <Redirect to="/onboarding/welcome" />;
//   }

//   if (appProps.isAuthenticated && !appProps.isVerified && appProps.isProfiled) {
//     return <Redirect to="/waitlist" />;
//   }

  return (

    <Route
    {...rest}
    render={props =>
      appProps.isAuthenticated 
        //@ts-ignore
        ? <C {...props} {...appProps} />
        : <Redirect
          to={`/?redirect=${props.location.pathname}${props.location
            .search}`}
        />}
  />
    // <Route
    //   {...rest}
    //   render={props =>
    //     appProps.isAuthenticated && !appProps.isVerified && !appProps.isProfiled
    //       //@ts-ignore
    //       ? <C {...props} {...appProps} />
    //       : <Redirect
    //         to={`/signin?redirect=${props.location.pathname}${props.location
    //           .search}`}
    //       />}
    // />
  );


}
