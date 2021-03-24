import React from "react";
import styles from "../Music/Music.module.css";

const Paginator = ({pageSize, totalCount, switchCurrentPage, currentPage}) => {

    const pageCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            { pages.map((p) => <span key={ p } onClick={ () => switchCurrentPage(p) }
                                     className={ currentPage === p ? styles.selectedPage : undefined }> { p }</span>) }
        </div>
    );
};

export default Paginator;