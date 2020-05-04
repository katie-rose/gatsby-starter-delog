---
template: BlogPost
path: /crypto-dark-mode
date: 2019-06-05T23:38:55.509Z
title: Crypto Tracker - Dark Mode
thumbnail: /assets/crypto.png
metaDescription: "crypto tracker, dark mode "
---
## An intro to dark mode.

### Built with: React + Hooks + Vanilla CSS

This was the first time I dipped my toes into the sea of dark mode and I had a lot of fun. Like most developers, viewing anything in light mode seems foreign at this point. 

The cryptocurrency tracker was already in place. It was our job to simply add dark mode to this project by creating a custom hook that lets you save data to localStorage.

First, I created a function called `useLocalStorage`.

```javascript
import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
```

I then created another custom hook called `useDarkMode` that imports `useLocalStorage`.

Our dark mode setup has a default value of `false` aka Light Mode aka I have never heard a more accurate statement.

```javascript
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark", false);
  useEffect(() => {
    console.log(darkMode);
    const body = document.getElementById("bodyTag");
    darkMode
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [darkMode]);
  return [darkMode, setDarkMode];
};
```

This was then pulled into the navbar where the dark mode buttons resided. 

`useState` was removed and replaced with the custom gook `useDarkMode`.

```javascript
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
```

Boom! Dark mode complete.

<div align="center">
<a href="https://katiedarkmode.netlify.app/" class="post-button">View Website</a></div>