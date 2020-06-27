import React from 'react';

class Profile extends React.Component {
    render() {
        const details = this.props.details;
        const repos = details.repoList.map(el => {
            return (
                <li className="list-group-item" key={el.id}>
                    <a href={el.html_url} target="_blank" rel="noopener noreferrer" key={el.id}>{el.full_name}</a>
                    <br />
                    <span>Size: {el.size}kB</span>
                    <br />
                    <p>{el.description}</p>
                </li>
            )
        })
        return (
            <div>
                <div className="card">
                    <img src={details.profileImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">{details.name}</h5>
                            <p className="card-text">{details.bio}</p>
                            <b>Total Public Repos: {details.repos}</b>
                            <br />
                            <br />
                            <a href={details.profLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit on Github</a>
                            <br />
                            <br />
                            <center><h3><i>Repositories </i></h3></center>
                            <br />
                            <hr className="separator" />
                            <ul className="list-group list-group-flush">
                                {repos}
                            </ul>
                        </center>
                    </div>
                </div>
            </div >
        )
    }
}

export default Profile;