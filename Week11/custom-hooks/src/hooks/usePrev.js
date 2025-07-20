import { useEffect, useRef } from "react"

// it first 'returns', later useEffect gets called. Hence we are able to get previous state value
export const usePrev = (value) => {
    const ref = useRef();

    // 'ref' variable stores a vlaue, and when the value of 'ref' changes it does not trigger re-render.
    useEffect(() => {
        ref.current =value;
    }, [value]);

    return ref.current;
}