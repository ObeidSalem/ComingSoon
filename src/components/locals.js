import React from 'react'
import Cookies from "js-cookie";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Locals = () => {
    const currentLocale = Cookies.get("i18next") || "en";
    const { i18n } = useTranslation();

    const [language, setLanguage] = useState(currentLocale);
    const handleChangeLocale = (e) => {
        const lang = e.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);

    };
    const languages = [
        { name: "English", code: "en" },
        { name: "العربية", code: "ar" },

    ];
    return (
        <div>
            <div className="switcher">
                {/* Language switch dropdown here */}
                <select 
                onChange={handleChangeLocale} 
                value={language}
                style={{
                    borderColor: '#d2d4d6',
                    borderRadius: '5px',
                    borderWidth: '1px',
                    padding: '0px',
                    fontSize:'12px',
                    background: '#ffffff',
                    color: 'black',
                }}
                >
                    {languages.map(({ name, code }) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Locals
