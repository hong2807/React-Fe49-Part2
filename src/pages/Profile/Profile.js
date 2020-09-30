import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Profile(props) {


    if (localStorage.getItem('userLogin')) { //Nếu trong localStorage có userLogin thì vào dc trang profile
        return <div className="display-4">Hello cybersoft</div>
    } else {

        alert('Đăng nhập để vào trang này !');

        return <Redirect to='/login' />
    }



}


// Trang profie cần phải đăng nhập thì mới cho vào dc, ko thì nó quay về trang login
