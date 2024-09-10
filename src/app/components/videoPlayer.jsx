import React from 'react'

export default function VideoPlayer() {
    return (
        <div className=" mt-[-30px] md:mt-[-60px] flex gap-4 flex-row  overflow-x-scroll overflow-y-hidden px-4">
            <video width="320px" height="720px" controls >
                <source src="/video.webm" />
                videoPlayer</video>
            <video width="320px" height="720px" controls >
                <source src="/video.webm" />
                videoPlayer</video>
                <video width="320px" height="720px" controls >
                <source src="/video.webm" />
                videoPlayer</video>
        </div>
    )
}
