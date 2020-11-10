import React from 'react'
import { useSelector } from 'react-redux'


export default function Counter() {
    const count = useSelector(state => state.count);
    return (
        <div>
            Total: {count}
        </div>
    )
}
