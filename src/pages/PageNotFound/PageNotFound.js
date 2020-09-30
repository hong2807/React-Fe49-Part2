import React from 'react';


export default function PageNotFound(props) {
    console.log('location',props.location)

    return (
        <div className="container">
        Không tìm thấy trang : {props.location.pathname}
        <br></br>
        <button className="btn btn-danger" onClick={()=>{
            props.history.replace('/home');
        }}>Bấm vào đây trở về trang chủ</button>
    </div>
    )
}



// Gõ trang bất kì mà ko có trong App.js thì nó hiện ra ko tìm thấy trang
// Tạo 1 nút bấm vào là quay về trang chủ