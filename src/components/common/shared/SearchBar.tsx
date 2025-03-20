import React from 'react';

import Input from './Input';

interface SearchBarProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = "Tìm kiếm...",
    value,
    onChange,
    className = "",
}) => {
  return (
    <Input 
        type="text"
        placeholder={placeholder}
        icon="bi-search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
    />
  )
}

export default SearchBar