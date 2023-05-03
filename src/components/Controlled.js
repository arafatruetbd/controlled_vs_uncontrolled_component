import React, { useState } from 'react';

export function ControlledInput() {
	const [inputValue, setInputValue] = useState('');

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	return (
		<div className='controlled'>
			<h1>Controlled Component</h1>
			<input type="text" value={inputValue} onChange={handleChange} />
			<p>{inputValue}</p>
		</div>

	);
}
