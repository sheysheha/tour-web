import React, { useState } from 'react';

const allLocations = [
  'Bandaranaike International Airport (CMB)',
  'Mattala Rajapaksa International Airport (HRI)',
  'Colombo',
  'Kandy',
  'Galle',
  'Jaffna',
  'Negombo',
  'Anuradhapura',
  'Batticaloa',
  'Trincomalee',
  'Kurunegala',
  'Matara',
  'Ratnapura',
  'Badulla',
  'Nuwara Eliya',
  'Polonnaruwa',
  'Hambantota',
  'Ampara',
  'Mannar',
  'Vavuniya',
  'Kilinochchi',
  'Monaragala',
  'Puttalam',
  'Kalutara',
  'Gampaha',
  'Matale'
];

const LocationDropdown = ({ label, value, onChange }) => {
  const [query, setQuery] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const filtered = allLocations.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type="text"
        value={query || value}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowOptions(true);
        }}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setTimeout(() => setShowOptions(false), 100)} // delay to allow click
        placeholder={`Select ${label.toLowerCase()}`}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
      />
      {showOptions && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md w-full max-h-60 overflow-y-auto shadow">
          {filtered.length > 0 ? (
            filtered.map((option) => (
              <li
                key={option}
                onClick={() => {
                  onChange(option);
                  setQuery(option);
                  setShowOptions(false);
                }}
                className="px-4 py-2 hover:bg-cyan-100 cursor-pointer"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};
export default LocationDropdown;