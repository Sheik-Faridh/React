export const useBreakPointCode = `
const breakPointSizes: BreakPointSizeInterface = {
	xs: 320,
	sm: 720,
	md: 1024
}

const useBreakPoint = () => {
	const getBreakPoint = (): BreakPoint => {
		const width: number = window.outerWidth;
		switch (true) {
			case width < breakPointSizes.xs:
				return 'xs';
			case width >= breakPointSizes.xs && width < breakPointSizes.sm:
				return 'sm';
			case width >= breakPointSizes.sm && width < breakPointSizes.md:
				return 'md';
			default:
				return 'lg';
		}
	};

	const [breakPoint, setBreakPoint] = useState<string>(getBreakPoint());

	const updateBreakPoint = (): void => {
		setBreakPoint(getBreakPoint());
	};

	const handleResize = useCallback(debounce(updateBreakPoint, 100), []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return breakPoint;
};

export default useBreakPoint;`;

export const useCopyTextCode = `
const useCopyText = (successTimeout: number = 2000) => {
	const [copyStatus, setCopyStatus] = useState<CopyStatusType>('Inactive');

	const copyText = useCallback<CopyCallbackType>((text: string): void => {
		navigator.clipboard.writeText(text).then(
			() => setCopyStatus('copied'),
			() => setCopyStatus('failed')
		);
	}, []);

	useEffect(() => {
		if (copyStatus === 'Inactive') return;

		const timer = setTimeout(() => setCopyStatus('Inactive'), successTimeout);

		return () => {
			clearTimeout(timer);
		};
	}, [copyStatus, successTimeout]);

	return {
		copyStatus,
		copyText,
	};
};

export default useCopyText;`;

export const useIndexedDBCode = `
// useIndexedDB.ts
const useIndexedDB = (props: IndexedDBProps) => {

    const { name, version, objectStoresMeta } = props;

    useEffect(() => {
        let db: any;

        const request = indexedDB.open(name, version);

        request.onupgradeneeded = (event: any) => {
            db = event.target.result;

            for(const storeMeta of objectStoresMeta) {
                // create the object store 
                let store = storeMeta.storeConfig?.keyPath ? db.createObjectStore(storeMeta.store, {
                    keyPath: storeMeta.storeConfig.keyPath
                }) : db.createObjectStore(storeMeta.store, { keyPath: 'id', autoIncrement: true });

                // create an index on the unique property
                for(const schema of storeMeta.storeSchema){
                        store.createIndex(schema.name, schema.keyPath, {
                            unique: schema.options.unique
                        });
                }
            }
        };

        request.onerror = (event: any) => {
            console.error('Database error: ', event.target.errorCode);
        };

        return () => {
           db && db.close();
        }
    }, [name, version]);

    return { name, version };
}

export default useIndexedDB;

// useDB.ts
const useDB = () => {

    const { name, version } = useContext(IDBContext);

    const connect = () => new Promise((resolve,reject) => {
        const request = indexedDB.open(name, version);

        request.onsuccess = (event: any) => {
            const db = event.target.result;
            resolve(db);
        }

        request.onerror = (event: any) => {
            reject(event.target.error.message);
        };
    })
        
    const create = (storeName: string, data: any): Promise<unknown> => new Promise((resolve, reject) => 
        connect()
            .then((db: any) => {
                const txn = db.transaction([storeName], "readwrite");
                const store = txn.objectStore(storeName);
                let request = store.add(data);
                request.onsuccess = (event: any) => {
                    resolve(event);
                };

                request.onerror =  (event:any)  => {
                    reject(event.target.error.message);
                };
            })
            .catch(reject)
    );

    const getEntity = (storeName: string, prop: string, val: any): Promise<unknown> => new Promise((resolve, reject) => 
        connect()
            .then((db: any) => {
                const txn = db.transaction([storeName], "readonly");
                const store = txn.objectStore(storeName);
                const index = prop === 'id' ? store : store.index(prop);
                let query = index.get(val);
                query.onsuccess = (event: any) => {
                    resolve(event.target.result);
                };

                query.onerror =  (event:any)  => {
                    reject(event.target.error.message);
                };

                txn.oncomplete = function () {
                    db.close();
                };
            })
            .catch(reject)
    );

    const getAllEntities = (storeName: string): Promise<unknown> => new Promise((resolve, reject) => 
        connect()
            .then((db: any) => {
                    //const entities: any[] = [];
                    const txn = db.transaction([storeName], "readonly");
                    const store = txn.objectStore(storeName);

                    const request = store.getAll();

                    request.onsuccess = (event: any) => {
                        resolve(event.target.result);
                    }

                    request.onerror = (event: any) => {
                        reject(event.target.error.message);
                    }
            
                    // store.openCursor().onsuccess = (event: any) => {
                    //     let cursor = event.target.result;
                    //     if (cursor) {
                    //         entities.push(cursor.value);
                    //         // continue next record
                    //         cursor.continue();
                    //     }else{
                    //         resolve(entities);
                    //     }
                    // };

                    // close the database connection
                    txn.oncomplete = function () {
                        db.close();
                    };
            })
            .catch(reject)
    );

    const updateEntity = (storeName: string, prop: string, val: string,data: any): Promise<unknown> => new Promise((resolve, reject) => 
        connect()
            .then((db: any) => {
                    const txn = db.transaction([storeName], "readwrite");
                    const store = txn.objectStore(storeName);

                    store.openCursor().onsuccess = function(event:any) {
                        const cursor = event.target.result;
                        if (cursor) {
                            if (cursor.value[prop] === val) {
                                const updateData = {...cursor.value, ...data };
                                const request = cursor.update(updateData);
                                request.onsuccess = function(event: any) {
                                    resolve(event);
                                };
                            }else{
                                cursor.continue();
                            }
                        }
                    }
            
                    // close the database connection
                    txn.oncomplete = function () {
                        db.close();
                    };
            })
            .catch(reject)
    );

    const deleteEntity = (storeName: string, id: any): Promise<unknown> => new Promise((resolve, reject) => 
        connect()
            .then((db: any) => {
                const txn = db.transaction([storeName], "readwrite");
                const store = txn.objectStore(storeName);
                let query = store.delete(id);
                query.onsuccess = (event: any) => {
                    resolve(event);
                };

                query.onerror =  (event:any)  => {
                    reject(event.target.error.message);
                };

                txn.oncomplete = function () {
                    db.close();
                };
            })
            .catch(reject)
    );

    return {
        create,
        getAllEntities,
        getEntity,
        updateEntity,
        deleteEntity
    }
}

export default useDB;`;

export const useNetworkCode = `
const useNetwork = () => {
    const [online, setOnline] = useState<boolean>(window.navigator.onLine);

    const handleOnline = (): void => {
        setOnline(true);
    };

    const handleOffline = (): void => {
        setOnline(false);
    };

    useEffect(() => {
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return online;
};

export default useNetwork;`;

export const useScrollCode = `
const useScroll = (props: ScrollPropsInterface = {}) => {
	const { element = null, focusInCB, focusOutCB } = props;

	const getScrollOffset = (offSet: 'x' | 'y', el: Element | null): number => {
		if (el) {
			const viewportOffset = el.getBoundingClientRect();
			return offSet === 'x' ? viewportOffset.left : viewportOffset.top;
		}

		return offSet === 'x' ? window.pageXOffset : window.pageYOffset;
	};

	const setDirection = (
		{ y, x }: ScrollStateInterface,
		el: Element | null
	): Direction | undefined => {
		const yOffset = getScrollOffset('y', el);
		const xOffset = getScrollOffset('x', el);

		if (
			y !== undefined &&
			x !== undefined &&
			yOffset !== undefined &&
			xOffset !== undefined
		) {
			if (y > yOffset) return el ? 'down' : 'up';
			if (y < yOffset) return el ? 'up' : 'down';
			if (x > xOffset) return el ? 'right' : 'left';
			if (x < xOffset) return el ? 'left' : 'right';
		}

		return undefined;
	};
	const [focus, setFocus] = useState<boolean>(false);

	const [scroll, setScroll] = useState<ScrollStateInterface>({
		x: getScrollOffset('x', element),
		y: getScrollOffset('y', element),
		direction: undefined,
		elem: element,
	});

	const handleScroll = () => {
		setScroll((prevState) => ({
			...prevState,
			x: getScrollOffset('x', prevState.elem),
			y: getScrollOffset('y', prevState.elem),
			direction: setDirection(prevState, prevState.elem),
		}));
	};

	const handleFocus = (e: any): void => {
		if (scroll.elem) {
			setFocus(true);
			focusInCB && focusInCB(e);
		}
	};

	const handleBlur = (e: any): void => {
		if (scroll.elem) {
			setFocus(false);
			focusOutCB && focusOutCB(e);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const setElem = (ele: Element | null) => {
		setScroll({
			x: getScrollOffset('x', ele),
			y: getScrollOffset('y', ele),
			direction: undefined,
			elem: ele,
		});
	};

	useEffect(() => {
		if (scroll.elem) {
			scroll.elem.addEventListener('mouseover', handleFocus);
			scroll.elem.addEventListener('mouseleave', handleBlur);

			return () => {
				scroll.elem?.removeEventListener('mouseover', handleFocus);
				scroll.elem?.removeEventListener('mouseleave', handleBlur);
			};
		}
	}, [scroll.elem]);

	return { scroll, focus, setElem };
};

export default useScroll;`;

export const useMousePositionCode = `
const useMousePosition = () => {
	const [position, setPosition] = useState<MouseMovementInterface>({
		x: 0,
		y: 0,
	});

	const handlePosition = (e: MouseEvent): void => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener('mousemove', handlePosition);

		return () => {
			window.removeEventListener('mousemove', handlePosition);
		};
	}, []);

	return position;
};

export default useMousePosition;
`;
