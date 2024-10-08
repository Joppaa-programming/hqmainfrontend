import React from 'react'

export default function VideoPlayer() {
    return (
        <div className=" mt-[5px] md:mt-[-60px] flex gap-4 flex-row  overflow-x-scroll overflow-y-hidden px-4">
             <video width="320px" height="720px" preload="auto" poster={"/foodvid.png"}  controls >
                <source src="/video.webm" />
                videoPlayer</video> <video width="320px" height="720px" preload="auto" poster={"/carvid.png"}  controls >
                <source src="/hqvid.mp4" />
                videoPlayer</video>
            <video width="320px" height="720px" poster={"/visitvid.png"} preload="auto" controls >
                <source src="/hqad.mp4" />
                videoPlayer</video>
              
            <video width="320px" height="720px" preload="auto" poster={"/shopvid.png"}  controls >
                <source src="/restaurant.mp4" />
                videoPlayer</video>
          

        </div>
    )
}
