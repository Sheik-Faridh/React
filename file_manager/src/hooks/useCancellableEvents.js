import { useRef } from 'react';

const useCancellableEvents = () => {
  const pendingEvents = useRef([]);

  const appendPendingEvent = event =>
    pendingEvents.current = [...pendingEvents.current, event];

  const removePendingEvent = event =>
    pendingEvents.current = pendingEvents.current.filter(p => p !== event);

  const clearPendingEvents = () => {
    pendingEvents.current.map(p => p.cancel());
  }

  const handler = {
    appendPendingEvent,
    removePendingEvent,
    clearPendingEvents,
  };

  return handler;
};

export default useCancellableEvents;