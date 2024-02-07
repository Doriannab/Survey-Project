
import React from 'react'

const Progress= ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: 'w-full',
		backgroundColor: 'whitesmoke',
		borderRadius: 50,
		margin: 50
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:50,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}

	
	return (

        <div>
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
        <h1>Voir Resultats</h1>

	</div>
	</div>
    </div>
	)
}

export default Progress;
