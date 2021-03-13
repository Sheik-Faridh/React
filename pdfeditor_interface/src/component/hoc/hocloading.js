import React, { useState } from 'react';
import Loader from '../loader/loader';

const HOCLoading = WrappedComponent => {

    const HOC = props => {
        const [loadingState,setLoading] = useState({
            loading: false,
            loadingMessage: ""
        });

        return (
            <>
                { loadingState.loading && <Loader message={loadingState.loadingMessage} /> }
                <WrappedComponent {...props} setLoading={setLoading} />
            </>
        )
    }
    return HOC;
}

export default HOCLoading;