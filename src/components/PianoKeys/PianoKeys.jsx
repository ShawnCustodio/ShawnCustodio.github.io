import React, { useEffect } from 'react';
import ANote from '../NoteMP3/ANote.mp3';
import BNote from '../NoteMP3/BNote.mp3';
import CNote from '../NoteMP3/CNote.mp3';
import DNote from '../NoteMP3/DNote.mp3';
import ENote from '../NoteMP3/ENote.mp3';
import FNote from '../NoteMP3/FNote.mp3';
import GNote from '../NoteMP3/GNote.mp3';
import './PianoKeys.css';

const PianoKeys = () => {
  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    switch (key) {
      case 'A':
        new Audio(ANote).play();
        break;
      case 'B':
        new Audio(BNote).play();
        break;
      case 'C':
        new Audio(CNote).play();
        break;
      case 'D':
        new Audio(DNote).play();
        break;
      case 'E':
        new Audio(ENote).play();
        break;
      case 'F':
        new Audio(FNote).play();
        break;
      case 'G':
        new Audio(GNote).play();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    
    <div className="piano-container">
      <div className= "wood-background">
      <div className="key white c"></div>
      <div className="key white d"></div>
      <div className="key white e"></div>
      <div className="key white f"></div>
      <div className="key white g"></div>
      <div className="key white a"></div>
      <div className="key white b"></div>
      </div>
    </div>
  );
};
export default PianoKeys;
