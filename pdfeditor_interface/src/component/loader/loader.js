import React from 'react';
import { createPortal } from 'react-dom';
import HashLoader from 'react-spinners/HashLoader';

const Loader = ({message}) => {

    const messageList = ["To write is human, to edit is divine","Some editors are failed writers, but so are most writers...","No passion in the world is equal to the passion to alter someone else's draft"];
    const min = 0;
    const max = 2;
    const messageIndex = Math.floor(Math.random() * (max - min) + min);

    return createPortal(
        <div id="custom-loader" className={message ? "backdrop" : "custom-loader-wrapper"}>
            <HashLoader size={100} height={20} color="#95F095" />
            <div className="loader-message">
                {
                    message 
                    ?   <div>{message}</div>
                    :   <figure>
                            <blockquote>
                                <div>{messageList[messageIndex]}</div>
                            </blockquote>
                        </figure>
                }
            </div>
        </div>,
        document.getElementById("loader-container")
    )
}

export default Loader;