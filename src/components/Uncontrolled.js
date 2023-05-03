import React, { useRef } from 'react';

export function UncontrolledInput() {
	const inputRef = useRef(null);

	function handleClick() {
		const inputValue = inputRef.current.value;
		alert(inputValue)
		console.log(inputValue);
	}

	return (
		<div className='uncontrolled'>
			<h1>Uncontrolled Component</h1>
			<input type="text" ref={inputRef} />
			<button onClick={handleClick}>Log Value</button>
		</div>
	);
}
