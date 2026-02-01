import '../tailwind.css'
import { useState } from "react";

const HomePage = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <p className="text-3xl text-red-600 font-bold underline">{count}</p>
            <button className="text-blue-600" onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default HomePage