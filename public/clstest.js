const fs = require('fs');
let styles = fs.readFileSync('styles.css', 'utf8');
styles += `

/* Fix header placeholder CLS layout shift */
#header-placeholder {
    min-height: 98px;
    background: var(--white);
}

@media (max-width: 768px) {
    #header-placeholder {
        min-height: 77px;
    }
}
`;
fs.writeFileSync('styles.css', styles);
