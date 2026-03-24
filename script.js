const countryMap = {
    // --- العملات العربية (الأولوية لجمهورك في الجزائر والجوار) ---
    "DZD": { ar: "الجزائر - دينار", en: "Algeria - Dinar", fr: "Algérie - Dinar" },
    "SAR": { ar: "السعودية - ريال", en: "Saudi Arabia - Riyal", fr: "Arabie Saoudite - Riyal" },
    "EGP": { ar: "مصر - جنيه", en: "Egypt - Pound", fr: "Égypte - Livre" },
    "AED": { ar: "الإمارات - درهم", en: "UAE - Dirham", fr: "Émirats - Dirham" },
    "MAD": { ar: "المغرب - درهم", en: "Morocco - Dirham", fr: "Maroc - Dirham" },
    "KWD": { ar: "الكويت - دينار", en: "Kuwait - Dinar", fr: "Koweït - Dinar" },
    "QAR": { ar: "قطر - ريال", en: "Qatar - Riyal", fr: "Qatar - Riyal" },
    "TND": { ar: "تونس - دينار", en: "Tunisia - Dinar", fr: "Tunisie - Dinar" },
    "LYD": { ar: "ليبيا - دينار", en: "Libya - Dinar", fr: "Libye - Dinar" },
    "JOD": { ar: "الأردن - دينار", en: "Jordan - Dinar", fr: "Jordanie - Dinar" },
    "OMR": { ar: "عمان - ريال", en: "Oman - Riyal", fr: "Oman - Riyal" },
    "BHD": { ar: "البحرين - دينار", en: "Bahrain - Dinar", fr: "Bahreïn - Dinar" },
    "LBP": { ar: "لبنان - ليرة", en: "Lebanon - Pound", fr: "Liban - Livre" },
    "SYP": { ar: "سوريا - ليرة", en: "Syria - Pound", fr: "Syrie - Livre" },
    "IQD": { ar: "العراق - دينار", en: "Iraq - Dinar", fr: "Irak - Dinar" },
    "YER": { ar: "اليمن - ريال", en: "Yemen - Riyal", fr: "Yémen - Riyal" },
    "SDG": { ar: "السودان - جنيه", en: "Sudan - Pound", fr: "Soudan - Livre" },
    "MRU": { ar: "موريتانيا - أوقية", en: "Mauritania - Ouguiya", fr: "Mauritanie - Ouguiya" },
    "SOS": { ar: "الصومال - شلن", en: "Somalia - Shilling", fr: "Somalie - Shilling" },
    "DJF": { ar: "جيبوتي - فرنك", en: "Djibouti - Franc", fr: "Djibouti - Franc" },
    "KMF": { ar: "جزر القمر - فرنك", en: "Comoros - Franc", fr: "Comores - Franc" },

    // --- العملات العالمية الكبرى ---
    "USD": { ar: "أمريكا - دولار", en: "USA - Dollar", fr: "USA - Dollar" },
    "EUR": { ar: "أوروبا - يورو", en: "Europe - Euro", fr: "Europe - Euro" },
    "GBP": { ar: "بريطانيا - جنيه إسترليني", en: "UK - Pound", fr: "UK - Livre" },
    "JPY": { ar: "اليابان - ين", en: "Japan - Yen", fr: "Japon - Yen" },
    "CNY": { ar: "الصين - يوان", en: "China - Yuan", fr: "Chine - Yuan" },
    "TRY": { ar: "تركيا - ليرة", en: "Turkey - Lira", fr: "Turquie - Lire" },
    "RUB": { ar: "روسيا - روبل", en: "Russia - Ruble", fr: "Russie - Rouble" },
    "CAD": { ar: "كندا - دولار", en: "Canada - Dollar", fr: "Canada - Dollar" },
    "AUD": { ar: "أستراليا - دولار", en: "Australia - Dollar", fr: "Australie - Dollar" },
    "CHF": { ar: "سويسرا - فرنك", en: "Switzerland - Franc", fr: "Suisse - Franc" },
    "INR": { ar: "الهند - روبية", en: "India - Rupee", fr: "Inde - Roupie" },
    "NZD": { ar: "نيوزيلندا - دولار", en: "NZ - Dollar", fr: "N. Zélande - Dollar" },
    "ZAR": { ar: "جنوب أفريقيا - راند", en: "S. Africa - Rand", fr: "Afrique du S. - Rand" },
    "BRL": { ar: "البرازيل - ريال", en: "Brazil - Real", fr: "Brésil - Real" },
    "KRW": { ar: "كوريا الجنوبية - وون", en: "S. Korea - Won", fr: "Corée du S. - Won" },
    "MXN": { ar: "المكسيك - بيزو", en: "Mexico - Peso", fr: "Mexique - Peso" },
    "SGD": { ar: "سنغافورة - دولار", en: "Singapore - Dollar", fr: "Singapour - Dollar" },
    "HKD": { ar: "هونغ كونغ - دولار", en: "Hong Kong - Dollar", fr: "Hong Kong - Dollar" },
    "NOK": { ar: "النرويج - كرونة", en: "Norway - Krone", fr: "Norvège - Couronne" },
    "SEK": { ar: "السويد - كرونة", en: "Sweden - Krona", fr: "Suède - Couronne" },
    "DKK": { ar: "الدنمارك - كرونة", en: "Denmark - Krone", fr: "Danemark - Couronne" },
    "PLN": { ar: "بولندا - زلوتي", en: "Poland - Zloty", fr: "Pologne - Zloty" },
    "ILS": { ar: "إسرائيل - شيكل", en: "Israel - Shekel", fr: "Israël - Shekel" },
    "THB": { ar: "تايلاند - بات", en: "Thailand - Baht", fr: "Thaïlande - Baht" },
    "IDR": { ar: "إندونيسيا - روبية", en: "Indonesia - Rupiah", fr: "Indonésie - Roupie" },
    "MYR": { ar: "ماليزيا - رينغيت", en: "Malaysia - Ringgit", fr: "Malaisie - Ringgit" },
    "PHP": { ar: "الفلبين - بيزو", en: "Philippines - Peso", fr: "Philippines - Peso" },
    "VND": { ar: "فيتنام - دونغ", en: "Vietnam - Dong", fr: "Vietnam - Dong" },
    "HUF": { ar: "المجر - فورنت", en: "Hungary - Forint", fr: "Hongrie - Forint" },
    "CZK": { ar: "التشيك - كرونة", en: "Czechia - Koruna", fr: "Tchéquie - Couronne" },
    "RON": { ar: "رومانيا - ليو", en: "Romania - Leu", fr: "Roumanie - Leu" },

    // --- العملات الرقمية والمعادن (Crypto & Metals) ---
    "BTC": { ar: "عملة رقمية - بيتكوين", en: "Crypto - Bitcoin", fr: "Crypto - Bitcoin" },
    "ETH": { ar: "عملة رقمية - إيثيريوم", en: "Crypto - Ethereum", fr: "Crypto - Ethereum" },
    "XAU": { ar: "معدن - ذهب (أونصة)", en: "Metal - Gold (oz)", fr: "Métal - Or (oz)" },
    "XAG": { ar: "معدن - فضة (أونصة)", en: "Metal - Silver (oz)", fr: "Métal - Argent (oz)" },
    "USDT": { ar: "عملة رقمية - تيثر", en: "Crypto - Tether", fr: "Crypto - Tether" },
    "BNB": { ar: "عملة رقمية - بينانس", en: "Crypto - BNB", fr: "Crypto - BNB" },

    // --- بقية دول العالم ---
    "AFN": { ar: "أفغانستان - أفغاني", en: "Afghanistan - Afghani", fr: "Afghanistan - Afghani" },
    "ALL": { ar: "ألبانيا - ليك", en: "Albania - Lek", fr: "Albanie - Lek" },
    "AMD": { ar: "أرمينيا - درام", en: "Armenia - Dram", fr: "Arménie - Dram" },
    "AOA": { ar: "أنغولا - كوانزا", en: "Angola - Kwanza", fr: "Angola - Kwanza" },
    "ARS": { ar: "الأرجنتين - بيزو", en: "Argentina - Peso", fr: "Argentine - Peso" },
    "AWG": { ar: "أروبا - فلورن", en: "Aruba - Florin", fr: "Aruba - Florin" },
    "AZN": { ar: "أذربيجان - مانات", en: "Azerbaijan - Manat", fr: "Azerbaïdjan - Manat" },
    "BAM": { ar: "البوسنة - مارك", en: "Bosnia - Mark", fr: "Bosnie - Mark" },
    "BBD": { ar: "باربادوس - دولار", en: "Barbados - Dollar", fr: "Barbade - Dollar" },
    "BDT": { ar: "بنغلاديش - تاكا", en: "Bangladesh - Taka", fr: "Bangladesh - Taka" },
    "BGN": { ar: "بلغاريا - ليف", en: "Bulgaria - Lev", fr: "Bulgarie - Lev" },
    "BIF": { ar: "بوروندي - فرنك", en: "Burundi - Franc", fr: "Burundi - Franc" },
    "BMD": { ar: "برمودا - دولار", en: "Bermuda - Dollar", fr: "Bermudes - Dollar" },
    "BND": { ar: "بروناي - دولار", en: "Brunei - Dollar", fr: "Brunei - Dollar" },
    "BOB": { ar: "بوليفيا - بوليفيانو", en: "Bolivia - Boliviano", fr: "Bolivie - Boliviano" },
    "BSD": { ar: "البهاما - دولار", en: "Bahamas - Dollar", fr: "Bahamas - Dollar" },
    "BTN": { ar: "بوتان - نغولترم", en: "Bhutan - Ngultrum", fr: "Bhoutan - Ngultrum" },
    "BWP": { ar: "بوتسوانا - بولا", en: "Botswana - Pula", fr: "Botswana - Pula" },
    "BYN": { ar: "بيلاروسيا - روبل", en: "Belarus - Ruble", fr: "Biélorussie - Rouble" },
    "BZD": { ar: "بليز - دولار", en: "Belize - Dollar", fr: "Belize - Dollar" },
    "CDF": { ar: "الكونغو - فرنك", en: "Congo - Franc", fr: "Congo - Franc" },
    "CLP": { ar: "تشيلي - بيزو", en: "Chile - Peso", fr: "Chili - Peso" },
    "COP": { ar: "كولومبيا - بيزو", en: "Colombia - Peso", fr: "Colombie - Peso" },
    "CRC": { ar: "كوستاريكا - كولون", en: "Costa Rica - Colon", fr: "Costa Rica - Colon" },
    "CUP": { ar: "كوبا - بيزو", en: "Cuba - Peso", fr: "Cuba - Peso" },
    "CVE": { ar: "الرأس الأخضر - إيسكودو", en: "C. Verde - Escudo", fr: "Cap-Vert - Escudo" },
    "DOP": { ar: "الدومينيكان - بيزو", en: "Dominican - Peso", fr: "Dominicaine - Peso" },
    "ERN": { ar: "إريتريا - ناكفا", en: "Eritrea - Nakfa", fr: "Érythrée - Nakfa" },
    "ETB": { ar: "إثيوبيا - بير", en: "Ethiopia - Birr", fr: "Éthiopie - Birr" },
    "FJD": { ar: "فيجي - دولار", en: "Fiji - Dollar", fr: "Fidji - Dollar" },
    "GEL": { ar: "جورجيا - لاري", en: "Georgia - Lari", fr: "Géorgie - Lari" },
    "GHS": { ar: "غانا - سيدي", en: "Ghana - Cedi", fr: "Ghana - Cedi" },
    "GIP": { ar: "جبل طارق - جنيه", en: "Gibraltar - Pound", fr: "Gibraltar - Livre" },
    "GMD": { ar: "غامبيا - دالاسي", en: "Gambia - Dalasi", fr: "Gambie - Dalasi" },
    "GNF": { ar: "غينيا - فرنك", en: "Guinea - Franc", fr: "Guinée - Franc" },
    "GTQ": { ar: "غواتيمالا - كويتزال", en: "Guatemala - Quetzal", fr: "Guatemala - Quetzal" },
    "GYD": { ar: "غيانا - دولار", en: "Guyana - Dollar", fr: "Guyana - Dollar" },
    "HNL": { ar: "هندوراس - لمبيرا", en: "Honduras - Lempira", fr: "Honduras - Lempira" },
    "HTG": { ar: "هايتي - غورد", en: "Haiti - Gourde", fr: "Haïti - Gourde" },
    "ISK": { ar: "آيسلندا - كرونة", en: "Iceland - Krona", fr: "Islande - Couronne" },
    "JMD": { ar: "جامايكا - دولار", en: "Jamaica - Dollar", fr: "Jamaïque - Dollar" },
    "KES": { ar: "كينيا - شلن", en: "Kenya - Shilling", fr: "Kenya - Shilling" },
    "KGS": { ar: "قرغيزستان - سوم", en: "Kyrgyzstan - Som", fr: "Kirghizistan - Som" },
    "KHR": { ar: "كمبوديا - ريال", en: "Cambodia - Riel", fr: "Cambodge - Riel" },
    "KZT": { ar: "كازاخستان - تينغ", en: "Kazakhstan - Tenge", fr: "Kazakhstan - Tenge" },
    "LAK": { ar: "لاوس - كيب", en: "Laos - Kip", fr: "Laos - Kip" },
    "LKR": { ar: "سريلانكا - روبية", en: "Sri Lanka - Rupee", fr: "Sri Lanka - Roupie" },
    "LRD": { ar: "ليبيريا - دولار", en: "Liberia - Dollar", fr: "Liberia - Dollar" },
    "LSL": { ar: "ليسوتو - لوتي", en: "Lesotho - Loti", fr: "Lesotho - Loti" },
    "MGA": { ar: "مدغشقر - أرياري", en: "Madagascar - Ariary", fr: "Madagascar - Ariary" },
    "MKD": { ar: "مقدونيا - دينار", en: "Macedonia - Denar", fr: "Macédoine - Denar" },
    "MMK": { ar: "ميانمار - كيات", en: "Myanmar - Kyat", fr: "Myanmar - Kyat" },
    "MNT": { ar: "منغوليا - توغريك", en: "Mongolia - Tugrik", fr: "Mongolie - Tugrik" },
    "MOP": { ar: "ماكاو - باتاكا", en: "Macau - Pataca", fr: "Macao - Pataca" },
    "MUR": { ar: "موريشيوس - روبية", en: "Mauritius - Rupee", fr: "Maurice - Roupie" },
    "MVR": { ar: "المالديف - روفيه", en: "Maldives - Rufiyaa", fr: "Maldives - Rufiyaa" },
    "MWK": { ar: "ملاوي - كواشا", en: "Malawi - Kwacha", fr: "Malawi - Kwacha" },
    "MZN": { ar: "موزمبيق - متكال", en: "Mozambique - Metical", fr: "Mozambique - Metical" },
    "NAD": { ar: "ناميبيا - دولار", en: "Namibia - Dollar", fr: "Namibie - Dollar" },
    "NGN": { ar: "نيجيريا - نايرا", en: "Nigeria - Naira", fr: "Nigéria - Naira" },
    "NIO": { ar: "نيكاراغوا - كوردوبا", en: "Nicaragua - Cordoba", fr: "Nicaragua - Cordoba" },
    "NPR": { ar: "نيبال - روبية", en: "Nepal - Rupee", fr: "Népal - Roupie" },
    "PAB": { ar: "بنما - بالبوا", en: "Panama - Balboa", fr: "Panama - Balboa" },
    "PEN": { ar: "بيرو - سول", en: "Peru - Sol", fr: "Péرو - Sol" },
    "PGK": { ar: "بابوا غينيا - كينا", en: "PNG - Kina", fr: "PNG - Kina" },
    "PKR": { ar: "باكستان - روبية", en: "Pakistan - Rupee", fr: "Pakistan - Roupie" },
    "PYG": { ar: "باراغواي - غواراني", en: "Paraguay - Guarani", fr: "Paraguay - Guarani" },
    "RSD": { ar: "صربيا - دينار", en: "Serbia - Dinar", fr: "Serbie - Denar" },
    "RWF": { ar: "رواندا - فرنك", en: "Rwanda - Franc", fr: "Rwanda - Franc" },
    "SBD": { ar: "جزر سليمان - دولار", en: "Solomon Is. - Dollar", fr: "Îles Salomon - Dollar" },
    "SCR": { ar: "سيشل - روبية", en: "Seychelles - Rupee", fr: "Seychelles - Roupie" },
    "SLL": { ar: "سيراليون - ليون", en: "S. Leone - Leone", fr: "S. Leone - Leone" },
    "SRD": { ar: "سورينام - دولار", en: "Suriname - Dollar", fr: "Suriname - Dollar" },
    "SSP": { ar: "جنوب السودان - جنيه", en: "S. Sudan - Pound", fr: "Soudan du S. - Livre" },
    "STN": { ar: "ساو تومي - دوبرا", en: "Sao Tome - Dobra", fr: "S. Tomé - Dobra" },
    "SZL": { ar: "سوازيلاند - ليلانغيني", en: "Swaziland - Lilangeni", fr: "Swaziland - Lilangeni" },
    "TJS": { ar: "طاجيكستان - ساماني", en: "Tajikistan - Somoni", fr: "Tadjikistan - Somoni" },
    "TMT": { ar: "تركمانستان - مانات", en: "Turkmenistan - Manat", fr: "Turkménistan - Manat" },
    "TOP": { ar: "تونغا - بانغا", en: "Tonga - Pa'anga", fr: "Tonga - Pa'anga" },
    "TTD": { ar: "ترينيداد - دولار", en: "Trinidad - Dollar", fr: "Trinité - Dollar" },
    "TWD": { ar: "تايوان - دولار", en: "Taiwan - Dollar", fr: "Taïوان - Dollar" },
    "TZS": { ar: "تنزانيا - شلن", en: "Tanzania - Shilling", fr: "Tanzanie - Shilling" },
    "UAH": { ar: "أوكرانيا - هريفنا", en: "Ukraine - Hryvnia", fr: "Ukraine - Hryvnia" },
    "UGX": { ar: "أوغندا - شلن", en: "Uganda - Shilling", fr: "Ouganda - Shilling" },
    "UYU": { ar: "أوروغواي - بيزو", en: "Uruguay - Peso", fr: "Uruguay - Peso" },
    "UZS": { ar: "أوزبكستان - سوم", en: "Uzbekistan - Som", fr: "Ouzbékistan - Som" },
    "VES": { ar: "فنزويلا - بوليفار", en: "Venezuela - Bolivar", fr: "Venezuela - Bolivar" },
    "VUV": { ar: "فانواتو - فاتو", en: "Vanuatu - Vatu", fr: "Vanuatu - Vatu" },
    "WST": { ar: "ساموا - تالا", en: "Samoa - Tala", fr: "Samoa - Tala" },
    "XAF": { ar: "وسط أفريقيا - فرنك", en: "Central Africa - Franc", fr: "Afrique Centrale - Franc" },
    "XCD": { ar: "شرق الكاريبي - دولار", en: "E. Caribbean - Dollar", fr: "Caraïbes Orient. - Dollar" },
    "XOF": { ar: "غرب أفريقيا - فرنك", en: "West Africa - Franc", fr: "Afrique de l'Ouest - Franc" },
    "XPF": { ar: "فرنك بولينيزي", en: "CFP - Franc", fr: "Franc CFP" },
    "ZMW": { ar: "زامبيا - كواشا", en: "Zambia - Kwacha", fr: "Zambie - Kwacha" },
    "ZWL": { ar: "زيمبابوي - دولار", en: "Zimbabwe - Dollar", fr: "Zimbabwe - Dollar" }
};/* 1. تعريف النصوص بـ 3 لغات */
const labels = {
    ar: { title: "محول العملات", amt: "المبلغ", from: "من", to: "إلى", set: "الإعدادات", lang: "اللغة", theme: "المظهر", close: "إغلاق", search: "ابحث هنا...", offline: "وضع أوفلاين" },
    en: { title: "Converter", amt: "Amount", from: "From", to: "To", set: "Settings", lang: "Language", theme: "Theme", close: "Close", search: "Search here...", offline: "Offline Mode" },
    fr: { title: "Convertisseur", amt: "Montant", from: "De", to: "À", set: "Paramètres", lang: "Langue", theme: "Mode", close: "Fermer", search: "Chercher ici...", offline: "Mode Hors-ligne" }
};

/* 2. ميزات الحفظ التلقائي والعمل بدون إنترنت */
const saveToLocal = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocal = (key) => JSON.parse(localStorage.getItem(key));

// ميزة النسخ عند الضغط على النتيجة
document.getElementById('finalResult').onclick = function() {
    const text = this.innerText;
    if (text === "0.00" || text === "Error") return;
    navigator.clipboard.writeText(text);
    const originalColor = this.style.color;
    this.style.color = "#00ff00"; 
    setTimeout(() => this.style.color = originalColor, 500);
};

/* 3. تفعيل Select2 للعملات فقط */
function initSelect2(lang) {
    const t = labels[lang];
    $('#fromCurrency, #toCurrency').select2({
        width: '100%',
        dir: (lang === 'ar') ? 'rtl' : 'ltr',
        language: { noResults: () => t.search }
    });

    $('#fromCurrency, #toCurrency').on('select2:open', function() {
        const searchField = document.querySelector('.select2-search__field');
        if (searchField) searchField.placeholder = t.search;
    });

    $('#fromCurrency, #toCurrency').on('change', convert);
}

/* 4. تغيير اللغة وتحديث الواجهة */
async function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    localStorage.setItem('userLang', lang); // حفظ اللغة
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    const t = labels[lang];
    document.getElementById('lblAmount').innerText = t.amt;
    document.getElementById('lblFrom').innerText = t.from;
    document.getElementById('lblTo').innerText = t.to;
    document.getElementById('setTile').innerText = t.set;
    document.getElementById('setLang').innerText = t.lang;
    document.getElementById('setTheme').innerText = t.theme;
    document.querySelector('.close-btn').innerText = t.close;

    initSelect2(lang);
    await loadCurrencies(lang);
}

/* 5. جلب العملات مع دعم الأوفلاين */
async function loadCurrencies(lang) {
    const fromS = document.getElementById('fromCurrency');
    const toS = document.getElementById('toCurrency');
    
    const oldF = localStorage.getItem('lastFrom') || "USD";
    const oldT = localStorage.getItem('lastTo') || "DZD";

    try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await res.json();
        saveToLocal('offline_rates', data.rates); // حفظ للعمل أوفلاين
        
        updateCurrencyOptions(data.rates, lang, oldF, oldT);
    } catch (e) {
        // استخدام البيانات المحفوظة إذا لم يتوفر إنترنت
        const savedRates = getFromLocal('offline_rates');
        if (savedRates) updateCurrencyOptions(savedRates, lang, oldF, oldT);
    }
}

function updateCurrencyOptions(rates, lang, oldF, oldT) {
    const fromS = document.getElementById('fromCurrency');
    const toS = document.getElementById('toCurrency');
    const codes = Object.keys(rates);
    
    fromS.innerHTML = ""; toS.innerHTML = "";
    codes.forEach(code => {
        const name = (typeof countryMap !== 'undefined' && countryMap[code]) ? countryMap[code][lang] : code;
        fromS.add(new Option(`${code} | ${name}`, code));
        toS.add(new Option(`${code} | ${name}`, code));
    });

    $(fromS).val(oldF).trigger('change.select2');
    $(toS).val(oldT).trigger('change.select2');
    convert();
}

/* 6. دالة التحويل الذكية */
async function convert() {
    const amt = document.getElementById('amount').value;
    const f = document.getElementById('fromCurrency').value;
    const t = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('finalResult');
    const lang = document.getElementById('langSelect').value;

    localStorage.setItem('lastFrom', f);
    localStorage.setItem('lastTo', t);

    if (!amt || amt <= 0) {
        resultDiv.innerText = "0.00";
        return;
    }

    try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${f}`);
        const data = await res.json();
        const rate = data.rates[t];
        renderResult(amt, rate, f, t);
    } catch (e) {
        // تحويل أوفلاين
        const savedRates = getFromLocal('offline_rates');
        if (savedRates) {
            const usdToF = savedRates[f];
            const usdToT = savedRates[t];
            const rate = usdToT / usdToF;
            renderResult(amt, rate, f, t, true);
        } else {
            resultDiv.innerText = "Error";
        }
    }
}

function renderResult(amt, rate, f, t, isOffline = false) {
    const total = (amt * rate).toLocaleString(undefined, { minimumFractionDigits: 2 });
    document.getElementById('rateInfo').innerText = `1 ${f} = ${rate.toFixed(4)} ${t} ${isOffline ? '(' + labels[document.getElementById('langSelect').value].offline + ')' : ''}`;
    document.getElementById('finalResult').innerText = total;
}

/* 7. التحكم في الإعدادات والمظهر */
function toggleSettings() {
    const m = document.getElementById('settingsModal');
    m.style.display = (m.style.display === 'block') ? 'none' : 'block';
}

function swapCurrencies() {
    const f = $('#fromCurrency');
    const t = $('#toCurrency');
    const tmp = f.val();
    f.val(t.val()).trigger('change.select2');
    t.val(tmp).trigger('change.select2');
    convert();
}

function updateAppColor(color) {
    document.documentElement.style.setProperty('--primary', color);
    localStorage.setItem('userPrimaryColor', color);
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

/* 8. التشغيل عند التحميل (استعادة كل شيء) */
$(document).ready(async function() {
    // 1. استعادة اللون
    const savedColor = localStorage.getItem('userPrimaryColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--primary', savedColor);
        if(document.getElementById('colorPicker')) document.getElementById('colorPicker').value = savedColor;
    }

    // 2. استعادة المظهر (Dark/Light)
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-theme');

    // 3. استعادة اللغة
    const savedLang = localStorage.getItem('userLang') || 'ar';
    document.getElementById('langSelect').value = savedLang;

    await changeLanguage();
});

// تسجيل الـ Service Worker لـ PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW failed', err));
    });
}
