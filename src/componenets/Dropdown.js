import React, { useState } from 'react'


function Dropdown() {
    const [selectedOption, setSelectedOption] = useState('Select Plant Type');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const options = [
        { label: 'Tropical Plant', image: 'https://img.freepik.com/premium-vector/tropical-plant-icon_118813-3026.jpg?w=2000' },
        { label: 'Cold-Sensitive Plant', image: 'https://static.vecteezy.com/system/resources/thumbnails/011/481/519/small/illustration-of-sensitive-plant-or-mimosa-pudica-isolated-on-white-background-vector.jpg' },
        { label: 'Seedling', image: 'https://previews.123rf.com/images/berkut2011/berkut20111803/berkut2011180300495/98028073-seedling-icon-vector-growing-tree-green-agriculture.jpg' },
        { label: 'Succulent and Cactus', image: 'https://media.istockphoto.com/id/1191967761/vector/saguaro-cactus-color-icon.jpg?s=612x612&w=0&k=20&c=bOrNPMK2CgBG7rYAgrbbOBgKvJ_TIThz09iWXFGBdVs=' },
        { label: 'Hydroponic Plant', image: 'https://img.freepik.com/premium-vector/hydroponics-logo-vector-illustration-design-template_598213-2251.jpg?w=2000' },
        { label: 'Indoor Plant', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PUMLQnvFzghr_HrkTIK1FhNREJV_mL0f6w&usqp=CAU' },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option.label);
        setIsDropdownOpen(false);
    };

    return (
        <div className="select-menu">
            <div className="select-btn" onClick={toggleDropdown}>
                <span className="text">{selectedOption}</span>
                <ion-icon name="color-fill-outline" className={isDropdownOpen ? 'icon-arrow active' : 'icon-arrow'}></ion-icon>
            </div>
            {isDropdownOpen && (
        <ul className="list">
          {options.map((option, index) => (
            <li key={index} className="option" style={{ '--i': options.length - index }} onClick={() => handleOptionClick(option)}>
              <img src={option.image} width="40" height="40" alt={option.label} />
              <span className 
                ="text">{option.label}</span>
            </li>
            ))}
        </ul>
        )}
        </div>
    );
}

export default Dropdown;
