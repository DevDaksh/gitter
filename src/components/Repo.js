import React, { Component } from 'react'

class Repo extends Component {
    render() {
        const details = this.props.details;
        details.repoList.forEach(el => {
            console.log(el);
        })

        return (
            <div>

            </div>
        )
    }
}

export default Repo;