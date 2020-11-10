import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <ul className="pagination pagination-sm">
                            <li className="page-item disabled">
                                <a className="page-link" href="#">&laquo;</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">4</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">5</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">&raquo;</a>
                            </li>
                        </ul>
                    </div>


        );
    }
}

export default Footer;
