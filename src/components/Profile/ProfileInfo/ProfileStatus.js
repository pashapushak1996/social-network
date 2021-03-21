import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }


    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };

    const onStatusChange = (e) => {
        let value = e.currentTarget.value;
        setStatus(value);
    };


    return (
        <div>
            { editMode ?
                <input type="text" value={ status } autoFocus={ true }
                       onBlur={ deactivateEditMode }
                       onChange={ (e) => onStatusChange(e) }/>
                : <span onDoubleClick={ activateEditMode }>{ !props.status ?
                    <span>No status</span> : props.status }</span> }
        </div>);
}


export default ProfileStatus;