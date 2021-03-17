import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        status: this.props.status,
        editMode: false
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateProfileStatus(this.state.status);
    };

    onStatusChange = (e) => {
        let value = e.currentTarget.value;
        this.setState({status: value});
    };

    render() {
        console.log(this.props);
        return (
            <div>
                { this.state.editMode ?
                    <input type="text" value={ this.state.status } autoFocus={ true }
                           onBlur={ () => this.deactivateEditMode() }
                           onChange={ (e) => this.onStatusChange(e) }/>
                    : <span  onDoubleClick={ () => this.activateEditMode() }>{ !this.props.status ?
                        <span>No status</span> : this.props.status }</span> }
            </div>)
    }
}


export default ProfileStatus;