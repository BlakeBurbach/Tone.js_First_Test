import React, { Component } from 'react';
import './App.css';
import Tone from 'tone'


class App extends Component {

  render() {
		var synth = new Tone.Synth({
			"oscillator" : {
				"type" : "amtriangle",
				"harmonicity" : 0.5,
				"modulationType" : "sine"
			},
			"envelope" : {
				"attackCurve" : 'exponential',
				"attack" : 0.05,
				"decay" : 0.2,
				"sustain" : 0.2,
				"release" : 1.5,
			},
			"portamento" : 0.05
    })
    
    

    return(
      <button onClick={()=>this.triggerTone()}>Tone</button>
    )
  }
}

export default App;
