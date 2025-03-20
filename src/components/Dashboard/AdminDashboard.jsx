import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/Createtask'
import AllTask from '../others/Alltask'


const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard