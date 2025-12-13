module.exports = {
    "name": "Jidpha's Spa Treatments & Therapies",
    "email": "jidaphaspatreatment@gmail.com",
    "phoneForTel": "+441903261738",
    "phoneFormatted": "01903 261738",
    "openingHours": "Mon-Fri: 10am-6pm",
    "onlineBooking": "https://jidaphaspa.setmore.com",
    "address": {
        "lineOne": "99A Ashacre Ln",
        "lineTwo": "",
        "city": "Worthing",
        "state": "",
        "zip": "BN13 2DE",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/xB4Gn6y5odCiDDcf8"
    },
    "socials": {
        "facebook": "https://www.facebook.com/profile.php?id=100057380593008",
        "instagram": "https://www.instagram.com/",
        "tiktok": "https://www.tiktok.com/",
        "googleReview": "https://g.page/r/CYMYLxp1fzfHEBM/review",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://jidaphas-spa.com",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://jidaphas-spa.com/#business",
            "name": "Jidpha's Spa Treatments & Therapies",
            "image": "https://jidaphas-spa.com/assets/svgs/logo-pink2.svg",
            "url": "https://jidaphas-spa.com",
            "telephone": "+441903261738",
            "email": "jidaphaspatreatment@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "99A Ashacre Ln",
                "addressLocality": "Worthing",
                "postalCode": "BN13 2DE",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/xB4Gn6y5odCiDDcf8"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "10:00",
                "closes": "18:00"
            },
            "sameAs": [
                "https://www.facebook.com/profile.php?id=100057380593008",
                "https://g.page/r/CYMYLxp1fzfHEBM/review"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://jidaphas-spa.com/#website",
            "url": "https://jidaphas-spa.com",
            "name": "Jidpha's Spa Treatments & Therapies",
            "publisher": {
                "@id": "https://jidaphas-spa.com/#business"
            }
        }
    }
};

