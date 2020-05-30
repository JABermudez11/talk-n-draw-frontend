import React from 'react'

const PendingCard = props => {                      
    return (
        <div>                   
            {this.props.name}
            <button onClick={() => props.accept(props.key)} class="fas fa-user-plus"></button>
            <button onClick={() => props.decline(props.key)} class="fas fa-comments"></button>
        </div>
    )        
}

export default PendingCard