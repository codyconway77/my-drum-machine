import React, { Component } from 'react'

export class DrumPad extends Component {
    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
    }
    render() {
        return (
            <div
            className="drum-pad" 
            id={this.props.id}
            onClick={this.handleClick}>
                <p>{this.props.letter}</p>
                <audio 
                className= 'clip'
                ref={ref => this.audio = ref}
                src={this.props.src} 
                id={this.props.letter}></audio>
            </div>
        )
    }
}

export default DrumPad;
