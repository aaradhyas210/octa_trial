import React from 'react';
import { Redirect } from 'react-router-dom';
import SignInWidget from './OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';

const Login = ( { config } ) =>
{
    const { oktaAuth, authState } = useOktaAuth();

    const onSuccess = ( tokens ) =>
    {
        oktaAuth.handleLoginRedirect( tokens );
    };

    const onError = ( err ) =>
    {
        console.log( 'error logging in', err );
    };

    if ( authState.isPending ) return null;
    console.log( authState );
    return authState.isAuthenticated ?
        <Redirect to={ { pathname: '/' } } /> :
        <SignInWidget
            config={ config }
            onSuccess={ onSuccess }
            onError={ onError } />;
};
export default Login;