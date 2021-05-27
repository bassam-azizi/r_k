

export const TodayIs = () =>{
	let date = new Date();
	return(
		" " + date.toLocaleDateString('en-UK',{weekday:'long', day:'numeric', month:'numeric', year:'numeric'})
		// date.toLocaleDateString('ar-ma',{weekday:'long', day:'numeric', month:'numeric', year:'numeric'});
		// date.toLocaleDateString('fr-FR',{weekday:'long', day:'numeric', month:'numeric', year:'numeric'});
		)
}
