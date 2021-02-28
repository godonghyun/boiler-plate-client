import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_action/user_actions';

export default function Auth(SpecificComponent, option, adminRoute = null) {
    // null => 아무나 출입 가능
    // true => 로그인한 유저만 출입 가능
    // false => 로그인한 유저는 출입 불가능

    const dispatch = useDispatch();
    
    function AuthenticationCheck(props) {

        useEffect(() => {
            dispatch(authUser()).then(response => {
                console.log(response);

                if (!response.payload.isAuth) { // 로그인 아닌 상태
                    if (option) {
                        props.history.push('/login');
                    }
                } else {    // 로그인상태
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    } else if (!option) {
                        props.history.push('/');
                    }
                }
            });
        }, [])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck;
}