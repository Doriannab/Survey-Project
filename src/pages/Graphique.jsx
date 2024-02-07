import React from 'react';
import Progress from './Progess';


 function Graphique() {
  return (
    <div className="w-full h-full">
			  <h1 className="text-center text-black text-4xl mb-24">Progress Bar</h1>
			<Progress
				bgcolor="orange"
				progress="25"
				height={30}
                
			/>
			<Progress
				bgcolor="red"
				progress="55"
				height={30}
			/>
			<Progress
				bgcolor="#685E43"
				progress="45"
				height={30}
			/>
			<Progress
				bgcolor="#D3D3D3"
				progress="80"
				height={30}
			/>
			<Progress
				bgcolor="#99ccff"
				progress="39"
				height={30}
			/>
          
		</div>
	);
}

export default Graphique;




