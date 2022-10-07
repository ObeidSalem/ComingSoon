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
                <select onChange={handleChangeLocale} value={language}>

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
