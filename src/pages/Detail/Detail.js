import React from 'react'

export default function Detail(props) {
    console.log('match',props.match);
    return (
        <div>
            {/* param.id >>> id là tên đặt bên App.js, bên kia đặt tên gì bên này phải đặt tên nó */}
            id : { props.match.params.id};
        </div>
    )
}


// props.match.params lấy tên chi tiết của path name
