import { RWebShare } from "react-web-share";

export default function SocialShare(url) {
    return (
        <RWebShare data={{text: "Web Share - GfG",url:url,title: "GfG",}} onClick={() => console.log("shared successfully!")}>
            <button className="text-[1.2rem] text-white font-mono">Share</button>
        </RWebShare>
    )
}
