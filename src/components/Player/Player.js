import { Html } from "@react-three/drei";
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import PreviousIcon from "../../assets/icons/previous.png";
import NextIcon from "../../assets/icons/next.png";

const Player = ({ playSong }) => {
  const [song, setSong] = useState([]);
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    title: "Death Bed",
    artist: "Powfu",
    artwork: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
    url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
    id: "1",
  });
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicCurrentTime, setMusicCurrentTime] = useState("00:00");
  const [videoIndex, setVideoIndex] = useState(0);
  const currentAudio = useRef();

  const fetchSongs = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/ShivamJoker/sample-songs/master/data.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setSong(result);
        },
        (error) => {
          console.log(error);
        }
      );
    return res;
  };

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };
  console.log(playSong);
  const handlePlayerSong = () => {
    if (playSong === true) {
      handleAudioPlay(playSong);
    } else {
      console.log(playSong);

    }
  };
  useEffect(() => {
    fetchSongs();
    handlePlayerSong()
  }, []);
  const handleNextSong = () => {
    if (musicIndex >= song.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let setNumber = song.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = song[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      title: musicObject.songName,
      artist: musicObject.songArtist,
      artwork: musicObject.songAvatar,
      url: musicObject.songSrc,
      id: musicObject.id,
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  return (
    <>
      <group>
        <Html
          distanceFactor={0.17}
          position={[-0.5, 0.7, 0.47]}
          scale={[6, 6, 6]}
          transform
          occlude
          onOcclude={false}
          center
        >
          <small className="player-song-title">
            {currentMusicDetails.title} - {currentMusicDetails.artist} |{" "}
            {musicCurrentTime}
          </small>
        </Html>
        <Html
          distanceFactor={0.17}
          position={[0.62, 0.698, 0.47]}
          scale={[6, 6, 6]}
          transform
          occlude
          onOcclude={false}
          center
        >
          <audio
            src={currentMusicDetails.url}
            ref={currentAudio}
            onEnded={handleNextSong}
            onTimeUpdate={handleAudioUpdate}
          ></audio>
          <button className="player-previous" onClick={handlePrevSong}>
            <img
              className="previous-icon"
              src={PreviousIcon}
              alt="previous-icon"
            />
          </button>
          <button className="player-next" onClick={handleNextSong}>
            <img className="next-icon" src={NextIcon} alt="next-icon" />
          </button>
        </Html>
      </group>
    </>
  );
};

export default Player;
