import React, { useState } from 'react'

import {API_ROOT, HEADERS} from '../constants/index'
import FriendCard from '../containers/FriendCard'


export default function FindFriendForm() {    

    const [searched, setSearched] = useState("");

    const handleChange = e => {        
        localStorage.setItem("searched", e.target.value)
        
    }
    
    const handleSubmit = e => {
        e.preventDefault()        

        fetch(`${API_ROOT}/users`,{
            method: "GET",
            headers: HEADERS
        })
        .then(res => res.json())
        .then(users => filter(users))
    }

    const filter = users => {          
        users.map(user => {
            if (user.username === localStorage.getItem("searched")){ 
                setSearched(user)
            }
        })
        localStorage.removeItem("searched")
    }            
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"  
                    placeholder="username" onChange={handleChange} />
                    <button type="submit" class="fas fa-search"></button>
                </form>    

                <div>
                    { searched ? <FriendCard user={searched} /> : null } 
                </div>
            </div>
        )
    
}
