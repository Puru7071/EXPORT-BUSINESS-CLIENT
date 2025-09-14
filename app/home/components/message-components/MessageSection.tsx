"use client"
import { useState } from "react"
import dynamic from "next/dynamic"

const PortfolioArea = dynamic(() => import("../portfolio-component/PortfolioArea"), {
    loading: () => <div>Loading...</div>
})

const MessageSection = () => {
    const [show, setShow] = useState(false);
    return <>
        <div className="h-64 w-full bg-red-500" onClick={() => setShow(true)}>MessageSection</div>
        {show && <PortfolioArea />}
    </>
}

export default MessageSection
