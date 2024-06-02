import { useState, useRef } from "react";
import axios from "axios";

function Sqrt()
{
	const rNum = useRef();
	const[num, setNum] = useState("");
	const[msg, setMsg] = useState("");

	const hNum = (event) => { setNum(event.target.value); };

	const find = (event) => {
		event.preventDefault();
		let url = "https://sqrtexpress-2.onrender.com/find";
		
		if (num == "")
		{
			alert("U did not Enter Number");
			setMsg("");
			rNum.current.focus();
			return;
		}
		
		if (parseFloat(num)<0)
		{
			alert("-ve Number not allowed");
			setMsg("");
			rNum.current.focus();
			return;			
		}
		
		let data = { params: {number:num}};
		axios.get(url,data)
		.then(res => setMsg(res.data.msg))
		.catch(err => setMsg("Issue " + err));
	}
return(
<>
<center>
	<h1> Square Root Finder</h1>
	<form onSubmit={ find }>
		<input type="number" step="any" placeholder="enter Number" onChange={ hNum } ref = { rNum }/>
		<br/><br/>
		<input type="submit" value="Find SQRT"/>
	</form>
	<h2>{ msg }</h2>
</center>
</>
);
}
export default Sqrt;













