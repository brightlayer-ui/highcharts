import * as Highcharts from 'highcharts';

export const getChartsLanguage = (i18nLanguage: string): Highcharts.LangOptions | undefined => {
    switch (i18nLanguage) {
        case 'fr':
            return {
                loading: 'Chargement...',
                months: [
                    'janvier',
                    'février',
                    'mars',
                    'avril',
                    'mai',
                    'juin',
                    'juillet',
                    'août',
                    'septembre',
                    'octobre',
                    'novembre',
                    'décembre',
                ],
                weekdays: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
                shortMonths: ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc'],
                rangeSelectorFrom: 'Du',
                rangeSelectorTo: 'au',
                rangeSelectorZoom: 'Période',
                downloadPNG: 'Télécharger en PNG',
                downloadJPEG: 'Télécharger en JPEG',
                downloadPDF: 'Télécharger en PDF',
                downloadSVG: 'Télécharger en SVG',
                resetZoom: 'Réinitialiser le zoom',
                resetZoomTitle: 'Réinitialiser le zoom',
                thousandsSep: ' ',
                decimalPoint: ',',
            };
        default:
            return undefined;
    }
};

export const getChartsAxisDateTimeLabelFormats = (
    i18nLanguage: string
): Highcharts.AxisDateTimeLabelFormatsOptions | undefined => {
    switch (i18nLanguage) {
        case 'fr': // default to built-in locale until a native French speaker can specify
            return undefined;

        case 'en': // assume US English
            return {
                day: '%m/%d',
                hour: '%l:%M %P',
                millisecond: '%l:%M:%S %P', // '%l:%M:%S.%L %P'
                second: '%l:%M:%S %P',
                minute: '%l:%M',
                month: '%b, %Y',
                year: '%Y',
                week: '%b %e',
            };

        default:
            return undefined;
    }
};

type FormatStrings = {
    day: string;
    hour: string;
    millisecond: string;
    second: string;
    minute: string;
    month: string;
    year: string;
    week: string;
};
export const getChartsTooltipDateTimeLabelFormats = (i18nLanguage: string): FormatStrings | undefined => {
    switch (i18nLanguage) {
        case 'fr': // default to built-in locale until a native French speaker can specify
            return undefined;

        case 'en': {
            // assume US English
            const format = '%m/%d/%Y %l:%M:%S %P';

            return {
                day: format,
                hour: format,
                millisecond: format,
                second: format,
                minute: format,
                month: format,
                year: format,
                week: format,
            };
        }

        default:
            return undefined;
    }
};
