import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'default', label: '---' },
    { value: 'deadline', label: 'Deadline' },
    { value: 'process', label: 'Tiến độ' },
];

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
    };

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
        />
    );
};

export default Dropdown;
