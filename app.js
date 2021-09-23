// ? Task:Clear All Cookies


// Solution 1
const clearCookies = document.cookie
  .split(";")
  .forEach(
    (cookie) =>
      (document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
  );


// ! Explanation: You can easily clear all cookies stored in a web page by accessing the cookie using document.cookie and clearing it.
