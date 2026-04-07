const fs = require('fs');
let html = fs.readFileSync('/Users/ethanonyett/Projects/spartanflightwebsite/spartanflight.github.io/public/index.html', 'utf8');

const target = `let lastWidth = window.innerWidth;\\n            let resizeTimeout;\\n            window.addEventListener('resize', () => {\\n                clearTimeout(resizeTimeout);\\n                resizeTimeout = setTimeout(() => {\\n                    if (window.innerWidth !== lastWidth) {\\n                        lastWidth = window.innerWidth;\\n                        requestAnimationFrame(calculatePositions);\\n                    }\\n                }, 150);\\n            });`;

const replacement = `let lastWidth = window.innerWidth;
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    if (window.innerWidth !== lastWidth) {
                        lastWidth = window.innerWidth;
                        requestAnimationFrame(calculatePositions);
                    }
                }, 150);
            });`;

html = html.replace(target, replacement);
fs.writeFileSync('/Users/ethanonyett/Projects/spartanflightwebsite/spartanflight.github.io/public/index.html', html);
