import React , { useCallback,useImperativeHandle } from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import BlockIcon from '@material-ui/icons/Block';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import useToast from "./hooks";
import { uniqueId } from "./helper";
import "./style.css";

const RenderIcon = ({type}) => {
    const icons = {
        success: <CheckCircleOutlineIcon htmlColor="#FFF" />,
        error: <BlockIcon htmlColor="#FFF" />,
        warning: <WarningIcon htmlColor="#FFF" />
    }
    return (
        <>
            {icons[type]}
        </>
    )
}

const Toast = ({toastRef}) => {

    const { toastState,dispatch } = useToast();

    const showToast = useCallback(
        toastData => {
            const id = uniqueId("toast");
            const data = {
                ...toastData,
                id
            };
            dispatch({
                type: "TOAST",
                payload:{
                    toast: [...toastState.toast,data]
                }
            });
            setTimeout(() => removeToast(id), toastState.autoClose);
        },
        [toastState]
    )

    useImperativeHandle(toastRef,() => ({
        showToast
    }))

    const removeToast = useCallback(
        id => {
            const filterToast = toastState.toast.filter(toast => toast.id !== id);
            dispatch({
                type: "TOAST",
                payload:{
                    toast: filterToast
                }
            })
        },
        [toastState]
    )

    return(
        <>
        {
            toastState.toast.map(toast => 
                <div className="notification-panel" data-id={toast.id} key={toast.id}>
                    <div className={`notification-body ${toast.type}`}> 
                        <div className="notification-symbol">
                            <RenderIcon type={toast.type} />
                        </div>
                        <div className="message-content">
                            <label>{toast.type}</label>
                            <div className="content">{toast.message}</div>
                        </div>
                        <div className="close-notify" onClick={() => removeToast(toast.id)}>
                            <CloseIcon fontSize="small" />
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Toast;