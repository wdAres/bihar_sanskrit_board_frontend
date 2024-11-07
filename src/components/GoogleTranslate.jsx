import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Dynamically load the Google Translate script
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Define the callback function for Google Translate initialization
    window.googleTranslateElementInit = () => {
      // Initialize Google Translate with English as the default language
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',  // The default language of your website (English)
        includedLanguages: 'en,hi',  // Languages you want to support (English and Hindi)
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,  // Prevents auto-display when the page loads
        gaTrack: true  // Optionally track language changes for analytics
      }, 'google_translate_element');
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div> {/* Container for the Google Translate widget */}
    </div>
  );
};

export default GoogleTranslate;
