import '../css/App.css'
// eslint-disable-next-line react/prop-types
export default function Navbar({ setCategory,setCountry }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="badge bg-white fs-4 text-dark">NewsMag</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link pointer" onClick={() => setCategory("technology")}>Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link pointer" onClick={() => setCategory("business")}>Business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link pointer" onClick={() => setCategory("sports")}>Sports</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link pointer" onClick={() => setCategory("entertainment")}>Intertainement</div>
                            </li>

                        </ul>
                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   sort by country
                            </button>
                            <ul className="dropdown-menu">
                                <li><div className="dropdown-item" onClick={()=>setCountry("us")}>America</div></li>
                                <li><div className="dropdown-item" onClick={()=>setCountry("sa")}>South Africa</div></li>
                                <li><div className="dropdown-item" onClick={()=>setCountry("jp")}>Japan</div></li>
                                <li><div className="dropdown-item" onClick={()=>setCountry("ca")}>Canada</div></li>
                                <li><div className="dropdown-item" onClick={()=>setCountry("au")}>Australia</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
