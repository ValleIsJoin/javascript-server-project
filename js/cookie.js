function setCookie()
    {
        document.cookie = "TestPageCookies=Accepted";
        document.getElementsByClassName('cookie-banner')[0].style.display = "none";
    }
     
    function clearCookies()
    {
        document.cookie="TestPageCookies=;expires=Wed; 01 Jan 1970";
        location.reload();
    }
     
    window.addEventListener("DOMContentLoaded", function (evt) {
        if (document.cookie.indexOf("TestPageCookies=Accepted") >= 0)
        {
            document.getElementsByClassName('cookie-banner')[0].style.display = "none";
        }
    }, false)