import React, {useEffect} from 'react';
import Music from "./Music";
import {connect} from "react-redux";
import {getTracks, setPage} from "../../redux/reducers/music-reducer";

const MusicContainer = (props) => {
    useEffect(() => {
        props.getTracks(props.page);
    }, []);

    const switchCurrentPage = (page) => {
        props.setPage(page);
        props.getTracks(page);
    };

    return <Music { ...props } switchCurrentPage={ switchCurrentPage }/>
}

const mapStateToProps = (state) => {
    return {
        tracks: state.musicPage.tracks,
        currPage: state.musicPage.page,
        totalCount: state.musicPage.totalCount,
        sizeOfPage: state.musicPage.sizeOfPage
    }
}

export default connect(mapStateToProps, {getTracks, setPage})(MusicContainer);