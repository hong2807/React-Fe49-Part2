import React, { useState } from 'react'

export default function Login (props) {

    // this.state = {
    //     userLogin: {
    //         userName:'',
    //         passWord: ''
    //     }
    // } => cách ghi của class component

    // const [state, setState] = useState({
    //     userLogin: {
    //         userName:'',
    //         passWord: ''
    //     }
    // });


     const [userLogin, setUserLogin] = useState({
        userName:'',
        passWord: ''
    });   //cách ghi tắt hơn
    console.log('userLogin',userLogin) // userLogin là object

    // Cách 1
    // const handleChange = (e) => {
    //     // e.target là 1 object nó có rất nhiều key. Name, value là một trong những key đó
    //     // Để xem các  key,value của e.target console.dir(e.target)
    //     // Dùng destructuring object để tách các key thành các biến ra sử dụng
    //     const {name,value} = e.target;  //ES6 destructuring
    //     console.log(name,value) //name là name của ô input đó, value là giá trị ng dùng nhập vào ô input đó
    //     userLogin[name] = value;
    //     setUserLogin(userLogin)
    // }

    // Cách 2
    const handleChange = (e) => {
        const {value,name} = e.target;
        setUserLogin({
            ...userLogin,
            [name]:value 
        })   //cách ghi tắt hơn
    }



    const login = (e) => {
        e.preventDefault(); //Ngăn sự kiện sau khi submit reload lại trang
        //Kiểm tra userName,passWord = cybersoft => Chuyển về trước đó ngược lại báo lỗi
        if(userLogin.userName === 'cybersoft' && userLogin.passWord==='cybersoft'){
            // props.history.goBack(); //goBack chuyển hướng về trang trước link đến trang này

            props.history.push('/home'); //chuyển hướng đến trang (path) chỉ định => home

            // props.history.replace('/home'); // thay đổi thành route tương ứng

        }else{ 
            alert('Login fail !')
        }
    }

    console.log('history',props.history)



    return (
        <div>
             <form className="container"  onSubmit={login}>
            <h3 className="display-4 text-center">Login</h3>
            <div className="form-group">
                <p>userName</p>
                <input name="userName" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <p>passWord</p>
                <input name="passWord" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">Login</button>
            </div>
        </form>
        </div>
    )
}

// Có 1 form gồm 2 ô input là username và password và 1 button login
// Xác định state là 2 ô input, lúc đầu nó rỗng, mỗi lần change trên ô input là nó setState lại, mà các ô input này dùng chung 1 function thì làm sao phân biệt được ô input nào change => thì lúc này nó sẽ dựa trên name vì name mỗi ô input khác nhau 
// Lấy ra name và value của ô input đó 
// Mỗi lần onchange thì cập nhật lại value đó (setState)
