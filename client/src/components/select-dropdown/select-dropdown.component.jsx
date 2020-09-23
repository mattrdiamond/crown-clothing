import React, { useState, useRef } from "react";
import { handleKeyPress } from "../../utils/utils";
import useOnClickOutside from "../../utils/use-onclick-outside";
import ArrowButton from "../arrow-button/arrow-button.component";
import "./select-dropdown.styles.scss";

const SelectDropdown = ({ handleSelect, options, selectedValue }) => {
  const sortRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const closeSelect = () => setIsOpen(false);

  const onOptionClicked = (option) => () => {
    closeSelect();
    handleSelect(option);
  };

  // Close dropdown when clicking outside
  useOnClickOutside(sortRef, closeSelect, "ignore-co-sort");

  console.log("render select");
  return (
    <div className="select-component">
      <div
        className={"select-header ignore-co-sort" + (isOpen ? " open" : "")}
        onClick={toggleOpen}
        onKeyPress={(e) => handleKeyPress(e, toggleOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <span className="select-header-text">
          {!selectedValue ? "Sort by" : selectedValue}
        </span>
        <ArrowButton isClosed={!isOpen} />
        {isOpen && (
          <ul className="select-list" role="listbox" ref={sortRef}>
            {options.map((option) => (
              <li
                className={
                  "select-list-item" +
                  (option.value === selectedValue ? " selected" : "")
                }
                onClick={onOptionClicked(option)}
                onKeyPress={(e) => handleKeyPress(e, onOptionClicked(option))}
                key={option.id}
                role="option"
                aria-selected={
                  option.value === selectedValue ? "true" : "false"
                }
                tabIndex={isOpen ? 0 : -1}
              >
                {option.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectDropdown;
