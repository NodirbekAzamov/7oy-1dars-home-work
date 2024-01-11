import React  from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <div className='box d-flex flex-column my-5'>
                <Link to="/users" className='btn btn-primary my-1'>Users</Link>
                <Link to="/todo" className='btn btn-primary my-1'>Todo</Link>
                <Link to="/photos" className='btn btn-primary my-1'>Photos</Link>
                <Link to="/albums" className='btn btn-primary my-1'>Albums</Link>
                <Link to="/comments" className='btn btn-primary my-1'>Comments</Link>
                <Link to="/posts" className='btn btn-primary my-1'>Posts</Link>
            </div>
            <div>
                
            </div>
        </div>
    )
}
