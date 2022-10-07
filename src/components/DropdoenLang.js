import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const DropdownLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("id");

  const handleLangChange = evt => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div className="">

        <select
          onChange={handleLangChange}
          value={language}
          style={{
            borderColor: '#1B7CEC',
            borderRadius: '5px',
            borderWidth: '2px',
            padding: '2px',
            fontSize: '10px',
            background: '#ffffff',
            color: 'black',
            fontWeight: 'bold'
          }}
        >
          <option value="en">English</option>

          <option value="ar">Arabic</option>

        </select>
      </div>

    </div>
  );
};

export default DropdownLanguage;