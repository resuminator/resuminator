import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export const useUpdateReducer = (type, {id, field, value}, ...args) => {
    const [payload, setPayload] = useState({});
    const dispatch = useDispatch();
    setPayload({ [field] : value})

    useEffect(() => {
        dispatch({
            type,
            payload,
            id
        })
    }, [dispatch, payload, id, type])

    return payload;
}
