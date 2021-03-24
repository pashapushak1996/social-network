import React, {useState} from "react";
import styles from "../../Music/Music.module.css";

const Paginator = ({pageSize, totalItemCount, switchCurrentPage, currentPage, portionSize}) => {

    const pageCount = Math.ceil(totalItemCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const [portionNumber, setPortionNumber] = useState(1);

    const portionCount = Math.ceil(pageCount / portionSize);
    const leftBorder = (portionNumber - 1) * portionSize + 1;
    const rightBorder = portionSize * portionNumber;

    return (
        <div>
            { portionNumber > 1 && <button onClick={ () => setPortionNumber(portionNumber - 1) }>Prev</button> }
            { pages.filter((page) =>
                page >= leftBorder && page <= rightBorder
            ).map((p) => <span key={ p } onClick={ () => switchCurrentPage(p) }
                               className={ currentPage === p ? styles.selectedPage : undefined }> { p }</span>) }
            { portionNumber < portionCount &&
            <button onClick={ () => setPortionNumber(portionNumber + 1) }>Next</button> }
        </div>
    );
};

export default Paginator;