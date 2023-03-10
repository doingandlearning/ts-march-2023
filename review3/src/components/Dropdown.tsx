
import React, { useState, FunctionComponent } from 'react';

type Option = {
	value: string;
	label: string;
};

type DropdownProps = {
	options: Option[];
	onChange: (selectedOption: Option) => void;
};

const Dropdown: FunctionComponent<DropdownProps> = ({ options, onChange }) => {
	const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

	const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;
		const selectedOption = options.find((option) => option.value === selectedValue);
		if (selectedOption) {
			setSelectedOption(selectedOption);
			onChange(selectedOption);
		}
	};

	return (
		<select value={selectedOption.value} onChange={handleOptionChange}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Dropdown
