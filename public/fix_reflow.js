const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(
`            function updateIndicator() {
                const scrollY = window.scrollY + 160;
                let current = sectionIds[0];

                for (const id of sectionIds) {
                    const el = document.getElementById(id);
                    if (el && el.offsetTop <= scrollY) {
                        current = id;
                    }
                }

                links.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === current);
                });

                // Show/hide indicator based on scroll position
                const hero = document.querySelector('.hero');
                const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
                indicator.classList.toggle('visible', window.scrollY > heroBottom - 100);
                ticking = false;
            }`,
`            function updateIndicator() {
                const scrollY = window.scrollY + 160;
                
                // --- DOM READS ---
                // Pre-calculate positions to avoid forced reflows during DOM writes
                const sectionPositions = sectionIds.map(id => {
                    const el = document.getElementById(id);
                    return { id, top: el ? el.offsetTop : 0 };
                });
                
                const hero = document.querySelector('.hero');
                const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
                
                // --- DOM WRITES ---
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
            }`);
fs.writeFileSync('index.html', html);
