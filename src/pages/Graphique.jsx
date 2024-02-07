import React from 'react';
import Progress from './Progess';


 function Graphique() {
  return (
    <div className="w-full">
			<h3 className="text-center text-black">Progress Bar</h3>
			<Progress
				bgcolor="orange"
				progress="30"
				height={30}
                
			/>
			<Progress
				bgcolor="red"
				progress="60"
				height={30}
			/>
			<Progress
				bgcolor="#99ff66"
				progress="50"
				height={30}
			/>
			<Progress
				bgcolor="#ff00ff"
				progress="85"
				height={30}
			/>
			<Progress
				bgcolor="#99ccff"
				progress="95"
				height={30}
			/>
		</div>
	);
}

export default Graphique;




