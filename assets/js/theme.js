class CustomTheme {
    constructor() {
        // part A: check if localStorage works
        this.islocalStorage = function() {
            try {
                localStorage.setItem("test", "testing");
                localStorage.removeItem("test");
                return true;
            } catch (error) {
                return false
            }
           
        };
        // part B: Get the value from the buttons
        this.schemeBtns = document.querySelectorAll('.js-theme-color');
        this.schemeBtns.forEach((btn) => {
            const btnVal = btn.value;
            btn.addEventListener('click', () => this.themeScheme(btnVal))
        });

        this.fontBtns = document.querySelectorAll('.js-font-btn');
        this.fontBtns.forEach((btn) => {
            const btnVal = btn.value;
            const btnTag = btn;
            btn.addEventListener('click', () => this.themeFont(btnVal, btnTag))
        });

        // part C: get the html button element
        this.switchBtn = document.querySelector('.js-theme-toggle');
        const clicked = this.switchBtn;
        this.switchBtn.addEventListener('click', () => this.themePosition(clicked))
    }

    // part D: Save the data in localStorage
    themeScheme(btnVal) {
        document.documentElement.setAttribute('data-theme', btnVal);
        if (this.islocalStorage) {
            localStorage.setItem('theme-name', btnVal);
        }
    };
    
    themeFont(btnVal,btnTag) {
        document.documentElement.style.setProperty('--font-size', `${btnVal}px`);
        if (this.islocalStorage) {
            localStorage.setItem('font-size', btnVal);
        }
        ;
        if (btnVal == localStorage.getItem('font-size')) {
            removeActive();
            btnTag.classList.add('active');
    }
};

    themePosition(clicked) {
    if (clicked.getAttribute('aria-checked') == 'true') {
        clicked.setAttribute('aria-checked', 'false');
        document.documentElement.style.setProperty('--position', 'static');
        document.documentElement.style.setProperty('--top-margin', '0px');
        if (this.islocalStorage) {
            localStorage.setItem('position', 'static');
        }

    } else {
        clicked.setAttribute('aria-checked', 'true');
        document.documentElement.style.setProperty('--position', 'fixed');
        document.documentElement.style.setProperty('--top-margin', '96px');
        if (this.islocalStorage) {
            localStorage.setItem('position', 'fixed');
        }
    }

    }
}

function removeActive() {
    const btns = document.querySelectorAll('.js-font-btn');
    btns.forEach((btn) => {
        btn.classList.remove('active');
    })
}

// part E: Only use our class if css custom properties are supported
if (window.CSS && CSS.supports('color', 'var(--i-support')) {
    new CustomTheme()
};

// part E: Add an active class to selected font size button

window.addEventListener('load', () => {
    const fontBtns = document.querySelectorAll('.js-font-btn');
    fontBtns.forEach((btn) => {
        const btnVal = btn.value;
        const btnTag = btn;
        if (btnVal == localStorage.getItem('font-size')) {
            btnTag.classList.add('active');
    }
    });   
})
