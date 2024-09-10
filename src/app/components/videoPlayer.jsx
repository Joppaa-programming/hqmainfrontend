import React from 'react'

export default function VideoPlayer() {
    return (
        <div className=" mt-[-10px] md:mt-[-60px] flex gap-4 flex-row  overflow-x-scroll overflow-y-hidden px-4">
            <video width="320px" height="720px" preload="auto" controls >
                <source src="/hqvid.mp4" />
                videoPlayer</video>
            <video width="320px" height="720px" preload="auto" controls >
                <source src="/hqad.mp4" />
                videoPlayer</video>
                <video width="320px" height="720px" preload="auto" controls >
                <source src="/video.webm" />
                videoPlayer</video>
            <video width="320px" height="720px" preload="auto" controls >
                <source src="/restaurant.mp4" />
                videoPlayer</video>

        </div>
    )
}
