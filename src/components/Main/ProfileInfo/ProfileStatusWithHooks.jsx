import React, {useEffect, useState} from "react";
import HS from "../Main.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditeMode = () => {
        setEditMode(true)
    }

    const deactivateEditeMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className={HS.profileStatus}>
            {!editMode &&
            <div>
              <span><b>Статус</b>: </span>
              <span onDoubleClick={activateEditeMode}>{props.status || "Статуса нет :("}</span>
            </div>
            }
            {editMode &&
            <div>
                <span>Статус: </span>
                <input autoFocus={true}
                       onBlur={deactivateEditeMode}
                       onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;
