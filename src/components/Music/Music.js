import React from 'react';
import styles from './Music.module.css';
import Paginator from "../Paginator/Paginator";

const Music = ({tracks, currPage, totalCount, switchCurrentPage, sizeOfPage}) => {

    const tracksElements = tracks.map((el) => {
        return (<div key={ el.name } className={ styles.item }>
            <div>
                <div>{ el.artist.name }</div>
            </div>
            <div>{ el.name }</div>
            <div>
                <a href={ el.url }>Listen</a>
            </div>
        </div>)
    });


    return (
        <div>
            <Paginator totalCount={ totalCount } pageSize={ sizeOfPage } currentPage={ currPage }
                       switchCurrentPage={ switchCurrentPage }/>
            <div className={ styles.items }>
                { tracksElements }
            </div>
        </div>
    );
};

export default Music;
