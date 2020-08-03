import React, { Component } from 'react'

export class DrumPad extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
    }
    handleKeyPress = event => {
        if (event.keyCode === this.props.keyCode) {
            this.audio.play()
            this.audio.currentTime = 0
            this.props.handleDisplay(this.props.id)
        }
    }
    handleDisplay = string => {
        this.setState({
            display: string
        })
    }

    render() {
        return (
            <div
            className="drum-pad" 
            id={this.props.id}
            onKeyPress={this.handleKeyPress}
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
