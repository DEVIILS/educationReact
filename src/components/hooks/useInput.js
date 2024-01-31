import { useState } from 'react';

export function useInput(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);
    return {
        type: 'text',
        className: 'control',
        value,
        onChange: (event) => setValue(event.target.value),
    };
}
