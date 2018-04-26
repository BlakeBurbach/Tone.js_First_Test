import React, { Component } from 'react';
import './App.css';
import Tone from 'tone'


class App extends Component {

	triggerTone = (synth, tone) => {
		synth.triggerAttackRelease(tone);
		synth.toMaster();
	}
	
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
				"sustain" : 0,
				"release" : 1.5,
			},
			"portamento" : 0.05
    })
    

    return(
			<div>
      	<button onClick={()=>this.triggerTone(synth, "C4")}>Tone 1</button>
				<button onClick={()=>this.triggerTone(synth, "C#4")}>Tone 2</button>
				<button onClick={()=>this.triggerTone(synth, "D4")}>Tone 3</button>
				<button onClick={()=>this.triggerTone(synth, "D#4")}>Tone 4</button>
				<button onClick={()=>this.triggerTone(synth, "E4")}>Tone 5</button>
				<input type="range" min="1" max="100" value="50"/> 
			</div>
    )
  }
}

export default App;
