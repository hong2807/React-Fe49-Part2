import React, { useState } from 'react';
import axios from 'axios'

export default function Home() {

    const [dsPhim, setDSPhim] = useState([])

    const getFilm = () => {
        axios({
            method: 'GET',
            url: "https://movie0706.cybersoft.edu.vn//api/QuanLyPhim/LayDanhSachPhim",
        })
            .then(res => {
                console.log('Kết quả: ', res);
                //Set lại state dsPhim => function render lại (chạy lại tất cả với dsPhim mang giá trị mới)
                setDSPhim(res.data);
            })
            .catch(err => {
                console.log('Lỗi: ', err.message)
            })
    }


    const renderPhim = () => {

        // return <div className="col-4">
        //     <div className="card text-white bg-warning">
        //         <img className="card-img-top" src="" alt="" />
        //         <div className="card-body">
        //             <h4 className="card-title">Tên phim</h4>
        //             <p className="card-text">Mô tả</p>
        //         </div>
        //     </div>
        // </div>

        return dsPhim.map((phim, index) => {
            return <div className="col-4 mb-4" key={index}>
                <div className="card text-white bg-warning h-100">
                    <img style={{height: 515, objectFit: 'cover'}} className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e) => {
                        e.target.src = 'https://picsum.photos/300/300'
                    }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })

    }




    return (
        <div>
            <div className="container">
                <button className="btn btn-success mt-3" onClick={() => {
                    getFilm();
                }}>Lấy danh sách phim</button>
                <h3 className="text-danger mt-3" style={{ fontSize: 35 }}>DANH SÁCH PHIM</h3>
                {/* Giao diện danh sách phim */}
                <div className="row" >
                    {renderPhim()}
                </div>
            </div>
        </div>
    )
}


// tạo 1 nút "Lấy danh sách phim" >>> Khi click vào lấy ds phim từ api về
// tạo ra 1 giao diện chứa ds phim
// khi click vào lấy ds phim thì lúc đầu mình phải có 1 state mặc định là mảng ds phim, để khi click thì vào nó render lại state đó
// onError là 1 sự kiện nó được kích hoạt nếu lỗi xảy ra khi tải tệp bên ngoài (vd: tài liệu or img), và ở trên nếu cái hình bị lỗi ko load lên dc thì sẽ để 1 cái hình mặc định