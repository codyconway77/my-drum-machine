import React from 'react';
import './App.css';
import DrumPad from './DrumPad';

const sounds = [
  {keyCode:81, id: 'Heater 1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'} ,
  {keyCode:87, id: 'Heater 2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'} ,
  {keyCode:69, id: 'Heater 3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'} ,
  {keyCode:65, id: 'Heater 4', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'} ,
  {keyCode:83, id: 'Heater 6', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3 '} ,
  {keyCode:68, id: 'Dsc Oh', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'} ,
  {keyCode:90, id: 'Kick n Hat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'} ,
  {keyCode:88, id: 'KICK 1', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'} ,
  {keyCode:67, id: 'Cev H2', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'} ,
]

export class App extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    drumPad: sounds,
    display: 'Play a sound'
  }
  handleDisplay = string => {
    this.setState({
        display: string
    })
}
  render(){
    return (
      <div className="app">
        <div id="drum-machine">
          <div id="display">
            {this.state.display}
          </div>
          <div className="drum-pad-wrapper">
            {this.state.drumPad.map(s => (
              <DrumPad
                keyCode={s.keyCode}
                id={s.id}
                letter={s.letter}
                src={s.src}
                handleDisplay={this.handleDisplay}
              />  
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;