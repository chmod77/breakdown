import { Spin } from "antd";
import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

function querystring(name: any, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
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

export default function UnauthenticatedRoute({ component: C, appProps, ...rest }: IProps) {


  if (appProps.isAuthenticated == null || appProps.isAuthenticated == undefined) {
    return (
        <div className='centerLoader text-center'>
            <Spin size="large" spinning={true}></Spin>
        </div>


    )
}
  const redirect = querystring("redirect");
  console.log(appProps)

  return (
    <Route
      {...rest}
      render={props =>
        !appProps.isAuthenticated
        //@ts-ignore
          ? <C {...props} {...appProps} />
          : <Redirect
            to={redirect === "" || redirect === null ? "/dashboard" : redirect}
          />}
    />
  );
}
