function createCookie(name, value, days, sameSite = 'Lax', secure = false) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    
    let cookieString = name + "=" + value + expires + "; path=/";
    
    if (sameSite) {
        cookieString += "; SameSite=" + sameSite;
    }
    
    if (secure) {
        cookieString += "; Secure";
    }

    document.cookie = cookieString;
}