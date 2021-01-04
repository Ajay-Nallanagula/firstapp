import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

const FreelanceTrial = () => {
  const fileObj = new File([""], "assets\\left.mp4", { type: "video/mp4" });
  const objUrl = URL.createObjectURL(fileObj);
  const [closeInterval, setCloseInterval] = useState(null);

  const [videoFilePath, setVideoFileURL] = useState(null);
  const playerRef = useRef();

  const handleVideoUpload = (event) => {
    console.log(event.target.files[0]);
    console.log({ fileObj });
    setVideoFileURL(URL.createObjectURL(event.target.files[0]));
  };
  // time = playerRef.current?.getCurrentTime()

  //   useEffect(()=>{
  //     const interval =setInterval(()=>{
  //         const currentTime = playerRef.current.getCurrentTime()
  //         console.log({currentTime})
  //     },1000)
  //     //setCloseInterval(interval)
  //   })

  const handleClick = () => {
    const interval = setInterval(() => {
      const currentTime = playerRef.current.getCurrentTime();
      console.log({ currentTime });
    }, 1);
    setCloseInterval(interval);
  };

 

  return (
    <>
      <input type="file" onChange={handleVideoUpload} />
      <ReactPlayer
        url={videoFilePath}
        controls={true}
        muted={true}
        playing={true}
        ref={playerRef}
        onEnded={() => {
          console.log("onEnded Invoked");
          clearInterval(closeInterval);
        }}
        onStart={() => {console.log('onStart')
        const interval = setInterval(() => {
            const currentTime = playerRef.current.getCurrentTime();
            console.log({ currentTime });
          }, 1);
          setCloseInterval(interval);
    }}
      />
      <button onClick={handleClick}>Log CurrentTime</button>
      {/* <button onClick={handleStopClick}>STOP Log CurrentTime</button> */}
    </>
  );
};

export default FreelanceTrial;
