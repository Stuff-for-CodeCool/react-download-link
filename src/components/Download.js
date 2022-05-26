import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Download = () => {
    const [redirecting, setRedirecting] = useState(false);
    const [isDownloading, setIsDownloading] = useState(true);

    useEffect(() => {
        const titlu = document.title;
        if (isDownloading) {
            setTimeout(() => {
                document.title = "jmekerie";
                window.print();
                setIsDownloading(false);
            }, 500);
            setTimeout(() => {
                document.title = titlu;
                setRedirecting(true);
            }, 600);
        }
    });

    return redirecting ? <Navigate to="/" replace={true} /> : "Look at me lol";
};

export default Download;
