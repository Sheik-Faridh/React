import useCancellableEvents from './useCancellableEvents';
import { cancellablePromise,delay } from '../lib/helpers';

const useClickPreventionOnDoubleClick = (onClick, onDoubleClick) => {
    const handler = useCancellableEvents();
  
    const handleClick = e => {
      handler.clearPendingEvents();
      const waitForClick = cancellablePromise(delay(250));
      handler.appendPendingEvent(waitForClick);
  
      return waitForClick.promise
        .then(() => {
          handler.removePendingEvent(waitForClick);
          onClick(e);
        })
        .catch(error => {
          handler.removePendingEvent(waitForClick);
          if (!error.isCanceled) 
            console.error("Error Occurred",error);
        });
    };
  
    const handleDoubleClick = e => {
      handler.clearPendingEvents();
      onDoubleClick(e);
    };
  
    return [handleClick, handleDoubleClick];
};
  
export default useClickPreventionOnDoubleClick;