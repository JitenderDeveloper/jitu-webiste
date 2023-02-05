import React from 'react'

function BlogBtn() {
    return (
        <>
            <div className="container-fluid p-0 mt-2">
                <div className="row">
                    <div className="col-12">
                        <div className="btn-side">
                            <nav aria-label="...">
                                <ul className="pagination pagination-lg">
                                    <li className="page-item"><a className="page-link pagination-wid" href="#">All</a></li>
                                    <li className="page-item"><a className="page-link pagination-wid" href="#">E-Commerce</a></li>
                                    <li className="page-item"><a className="page-link pagination-wid" href="#">Navbar</a></li>
                                    <li className="page-item"><a className="page-link pagination-wid" href="#">Doctor</a></li>
                                    <li className="page-item"><a className="page-link pagination-wid" href="#">Machine Learing</a></li>
                                    <li className="page-item"><a className="page-link pagination-wid" href="#">Prototype</a></li>
                                    <li className="page-item"><a className="page-link pagination-wid" href="#">Bootstrap5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogBtn