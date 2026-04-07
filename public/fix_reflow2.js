const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /function updateIndicator\(\) {[\s\S]*?ticking = false;\s*}/m;
const newCode = `let sectionPositions = [];
            let heroBottom = 0;
            
            function calculatePositions() {
                sectionPositions = sectionIds.map(id => {
                    const el = document.getElementById(id);
                    return { id, top: el ? el.offsetTop : 0 };
                });
                const hero = document.querySelector('.hero');
                heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
            }
            
            // Calculate once on load and on resize
            calculatePositions();
            window.addEventListener('resize', () => {
                requestAnimationFrame(calculatePositions);
            });

            function updateIndicator() {
                const scrollY = window.scrollY + 160;
                
                // --- DOM WRITES ---
                if (sectionPositions.length === 0) return;
                
                let current = sectionPositions[0].id;
                for (const pos of sectionPositions) {
                    if (pos.top > 0 && pos.top <= scrollY) {
                        current = pos.id;
                    }
                }

                links.forEach((link, i) => {
                    link.classList.toggle('active', sectionIds[i] === current);
                });

                // Show/hide indicator based on scroll position
                indicator.classList.toggle('visible', window.scrollY > heroBottom - 100);
                ticking = false;
            }`;

html = html.replace(regex, newCode);
fs.writeFileSync('index.html', html);
