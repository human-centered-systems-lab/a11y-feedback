import fetch from "node-fetch";
import '../scss/styles.scss';
import img from '../assets/company_logo.png';
import test from '../data-protection.html';

const submitButton = document.getElementById("submit-button");
const isCopyDesiredCheckbox = document.getElementById('checkEmail');

const dataProtectionLink = document.getElementById("linkDataProtection");
dataProtectionLink.addEventListener("focus", function (e) {
    dataProtectionLink.ariaLabel = "Data Security Notice. This will be opened in a seperate tab."; // German: Datenschutzerklärung. Diese wird in einem separaten Tab geöffnet.
});

dataProtectionLink.addEventListener("blur", function (e) {
    dataProtectionLink.ariaLabel = "";
});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div class="message-color-${type}">${message}</div>`,
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
};

isCopyDesiredCheckbox.addEventListener("click", function () {
    const email = document.getElementById('emailInput');
    const emailHint = document.getElementById('emailHint');
    if (isCopyDesiredCheckbox.checked) {
        email.required = true;
        email.ariaLabel = "You want to receive a copy? Please provide your E-Mail."; // German: Du möchtest eine Kopie erhalten, bitte gebe dazu eine E-Mail an.
        emailHint.hidden = false;
    } else {
        email.required = false;
        emailHint.hidden = true;
        email.ariaLabel = "";
    }
});

submitButton.addEventListener("click", async function (event) {
    event.preventDefault();
    const form = document.getElementById('form');
    const isFromValid = form.checkValidity();
    form.reportValidity();

    if (isFromValid) {
        const feedback = document.getElementById('feedbackTextField').value;
        const descriptionTools = document.getElementById('textFieldTools').value;
        const subject = document.getElementById('subject').value;
        const isScreenreaderChecked = document.getElementById('screenreader').checked;
        const isZoomChecked = document.getElementById('zoom').checked;
        const isBrailleChecked = document.getElementById('braille').checked;
        const isSpeakChecked = document.getElementById('speak').checked;
        const isDarkmodeChecked = document.getElementById('darkmode').checked;
        const isOtherChecked = document.getElementById('other').checked;
        const isNoToolChecked = document.getElementById('noTool').checked;
        const name = document.getElementById('inputName').value;
        const email = document.getElementById('emailInput').value;
        const phone = document.getElementById('phoneInput').value;
        const isCopyDesired = document.getElementById('checkEmail').checked;
        const isSendDataChecked = document.getElementById('checkData').checked;
        const file = document.getElementById('formFile').files.length > 0 ? true : false;

        let browser;
        let browserInfo;
        let os;
        if (isSendDataChecked) {
            browserInfo = navigator.userAgent;
            os = navigator.platform;
            const getBrowserName = () => {
                if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
                    browser = `Opera: Opera v${browserInfo.split('Opera/')[1]}`;
                } else if (browserInfo.includes('Edg')) {
                    browser = `Edg: Edg v${browserInfo.split('Edg/')[1]}`;
                } else if (browserInfo.includes('Chrome')) {
                    browser = `Chrome: Chrome v${browserInfo.split('Chrome/')[1]}`;
                } else if (browserInfo.includes('Safari')) {
                    browser = `Safari: Safari v${browserInfo.split('Safari/')[1]}`;
                } else if (browserInfo.includes('Firefox')) {
                    browser = `Firefox: Firefox v${browserInfo.split('Firefox/')[1]}`
                } else {
                    browser = 'unknown'
                }
            }
            getBrowserName();
        } else {
            browser = '';
            browserInfo = '';
            os = '';
        }

        const response = await fetch('https://fklhafhwcioeisonuclr.supabase.co/rest/v1/feedback', {
            method: 'POST',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbGhhZmh3Y2lvZWlzb251Y2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNzY3MDQsImV4cCI6MjAxNTY1MjcwNH0.Ys5nCaqsWiYSOpl7RM8KOsdFgedaZfXn1y30WHmriPM',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbGhhZmh3Y2lvZWlzb251Y2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNzY3MDQsImV4cCI6MjAxNTY1MjcwNH0.Ys5nCaqsWiYSOpl7RM8KOsdFgedaZfXn1y30WHmriPM',
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                'feedback': feedback,
                'description_tools': descriptionTools,
                'is_screenreader_used': isScreenreaderChecked,
                'is_zoom_used': isZoomChecked,
                'is_braille_used': isBrailleChecked,
                'is_speak_used': isSpeakChecked,
                'is_darkmode_used': isDarkmodeChecked,
                'is_other_used': isOtherChecked,
                'is_no_tool_used': isNoToolChecked,
                'subject': subject,
                'name': name,
                'email': email,
                'phone': phone,
                'browser': browser,
                'operation_system': os,
                'copy': isCopyDesired,
                'file': file
            })
        });

        if (response.status === 201) {
            appendAlert('Thank you! Your feedback was succesfully send. You can close this page now.', 'success'); // German: Vielen Dank! Dein Feedback wurde erfolgreich abgesendet. Du kannst diese Seite jetzt schließen.
            form.reset();
        } else {
            appendAlert('Oops, something went wrong. Please try again later.', 'warning'); // German: Ups, etwas ist schief gegangen. Versuche es später noch einmal.
        }
    }
});

