
function toggleLanguage() {
    const html = document.getElementById('html');
    console.log();
    const currentLang = html.attributes['lang'].value;
    console.log("🚀 ~ toggleLanguage ~ currentLang:", currentLang);
    const image=document.getElementById('iPhoneImage');
    const arImage='./assets/iPhone 13_Ar.svg';
    const enImage='./assets/iPhone_13_lg.svg';
    switch (currentLang) {
        case languagues.EN:
            html.attributes['dir'].value= direction.AR;
            html.attributes['lang'].value= languagues.AR;
            image.attributes['src'].value=arImage;
            break;
        case languagues.AR:
            html.attributes['dir'].value=direction.EN;
            html.attributes['lang'].value=languagues.EN;
            image.attributes['src'].value=enImage;
            break;
    }
}
const languagues = {
    EN: 'en-SA',
    AR: 'ar-SA'
}
const direction = {
    EN: 'ltr',
    AR: 'rtl',
}