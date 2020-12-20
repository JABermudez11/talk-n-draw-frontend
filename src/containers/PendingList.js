import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../constants/index'
import PendingCard from './PendingCard'

class PendingList extends Component {    

    state = {
        users: [],
        pendingRequests: []
    }

    componentDidMount() {
        // get pending list
        fetch(`${API_ROOT}/pendings`,{
            headers: HEADERS,
            method: "GET"
        })
        .then(res => res.json())
        .then(pending => this.filterUsers(pending))


        // get users list
        fetch(`${API_ROOT}/users`,{
            headers: HEADERS,
            method: "GET"
        })
        .then(res => res.json())
        .then(users => this.holdUsers(users))
    }    

    holdUsers = (list) => {
        // console.log(list)
        this.setState({
            users: list
        })
    }

    filterUsers = (pending) => {
        if(pending){
            // const newList = pending.filter(rq =>            
            //     rq.friend_id === Number(localStorage.getItem("userId"))
            // )
            // this.setState({ 
            //     pendingRequests: newList            
            // })   
        }     
    }    
    
    renderPending = (pending) => {
        pending.map(user => {
            // console.log(user.owner_id)
            const u = this.findUser(user.owner_id, this.state.users)
            // console.log(u)
            if(u){
                return (
                    <PendingCard 
                        key={user.owner_id} 
                        name={u.username}
                        accept={this.handleAccept} 
                        decline={this.handleDecline}
                    />
                )
            } 
        })
    }

    findUser = (userId, list) => {
        return list.find(u => u.id === userId)
    }

    // removeRequest = () => {
    //     fetch(`${API_ROOT}/pending`)
    // }

    handleAccept = () => {
        console.log("accept")
    }

    handleDecline = () => {
        console.log("ded")
    }

    render() {
        return (
            <div>
                List of Pending Requests
                {this.renderPending(this.state.pendingRequests)}                
            </div>
        )
    }
}

export default PendingList