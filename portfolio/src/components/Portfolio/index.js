import React from 'react'

function Portfolio() {
    return (
        <div id="main-container" className="container">
            <h1>My Work</h1>
            <div className="row">
                {/* Team Member 1 */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow">
                        <img src="assets/project1.png" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <a className="songProject" href="https://ipv5.github.io/Spotify-Artist-Search/">
                                <h5 className="card-title mb-0">Song Search Project</h5>
                            </a>
                            <div className="card-text text-black-50">Anthony Simone</div>
                        </div>
                    </div>
                </div>
                {/* Team Member 2 */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow">
                        <img src="assets/2PlayPortfolio.png" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <a className="songProject" href="https://github.com/92til-infinity/Project2x4">
                                <h5 className="card-title mb-0">2Play Playlist Generator</h5>
                            </a>
                            <div className="card-text text-black-50">Anthony Simone</div>
                        </div>
                    </div>
                </div>
                {/* Team Member 3 */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow">
                        <img src="https://via.placeholder.com/200x100" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0">Exampler</h5>
                            <div className="card-text text-black-50">Web Developer</div>
                        </div>
                    </div>
                </div>
                {/* Team Member 4 */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow">
                        <img src="https://via.placeholder.com/200x100" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0">Example</h5>
                            <div className="card-text text-black-50">Web Developer</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.row */}
        </div>

    )
}

export default Portfolio;
