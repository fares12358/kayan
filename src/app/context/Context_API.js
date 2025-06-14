'use client'
import React, { createContext, useState } from 'react';

// 1️⃣ Create context
export const Context_API = createContext();

// 2️⃣ Create provider component
export const MyProvider = ({ children }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    //otp number   
    const [ OTPphone,setOTPPhone] = useState('');
    // userdata
    const [phone, setPhone] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [SecundName, setSecundName] = useState('');
    const [ThirdName, setThirdName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //global info
    const [Class, setClass] = useState('');
    const [Section, setSection] = useState('');
    const [governorate, setGovernorate] = useState('');
    const [city, setCity] = useState('');
    const [schoolType, setSchoolType] = useState('');
    const [schoolName, setSetschoolName] = useState('');
    const [secundLang, setSetsecundLang] = useState('');
    const [facebookLink, setfacebookLink] = useState('');
    const [birthDate, setBirthDate] = useState({year:'',month:'',day:''});
    //parentdata
    const [firstnumber, setFirstnumber] = useState('');
    const [secundNumber, setsecundNumber] = useState('');
    //personal id
    const [file, setFile] = useState(null);
    const values = {
        isOpenMenu,setIsOpenMenu,
        isLogin, setIsLogin,
        OTPphone,setOTPPhone,
        //userdata
        phone, setPhone,
        FirstName, setFirstName,
        SecundName, setSecundName,
        ThirdName, setThirdName,
        LastName, setLastName,
        email, setEmail,
        password, setPassword,
        //globalinfo
        Class, setClass,
        Section, setSection,
        governorate, setGovernorate,
        city, setCity,
        schoolType, setSchoolType,
        schoolName, setSetschoolName,
        secundLang, setSetsecundLang,
        facebookLink, setfacebookLink,
        birthDate, setBirthDate,
        //parentdata
        firstnumber, setFirstnumber,
        secundNumber, setsecundNumber,
        //personalfile
        file,setFile

    }


    return (
        <Context_API.Provider value={values}>
            {children}
        </Context_API.Provider>
    );
};
