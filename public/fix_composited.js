const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace(/transition:\s*all\s*0\.3s;/g, 'transition: background 0.3s, opacity 0.3s, transform 0.3s;');
fs.writeFileSync('styles.css', css);
