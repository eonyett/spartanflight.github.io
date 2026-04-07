const fs = require('fs');
let css = fs.readFileSync('/Users/ethanonyett/Projects/spartanflightwebsite/spartanflight.github.io/public/styles.css', 'utf8');

const targetDesktop = `.sponsor-benefits-list li {
    position: relative;
    padding: 1.25rem 1.25rem 1.25rem 2.5rem;
    color: var(--white);
    opacity: 0.95;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 184, 28, 0.3);
    border-radius: 10px;
    text-align: left;
}

.sponsor-benefits-list li::before {
    content: '✓';
    position: absolute;
    left: 1rem;
    top: 1.25rem;
    color: var(--accent-gold-dark);
    font-weight: 900;
    font-size: 1.1rem;
}

.sponsor-benefit-title {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: block;
}`;

const replacementDesktop = `.sponsor-benefits-list li {
    position: relative;
    padding: 1.5rem 1.5rem 1.5rem 3rem;
    background: var(--primary-dark);
    color: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.sponsor-benefits-list li:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 184, 28, 0.5); /* Subtle gold on hover */
}

.sponsor-benefits-list li::before {
    content: '✓';
    position: absolute;
    left: 1.25rem;
    top: 1.5rem;
    color: var(--accent-gold);
    font-weight: 900;
    font-size: 1.2rem;
    line-height: 1.2;
}

.sponsor-benefit-title {
    font-weight: 800;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    display: block;
    color: var(--white);
}`;

const targetMobile = `    .sponsor-benefits-list li {
        padding: 1rem 1rem 1rem 2.25rem;
        font-size: 0.9rem;
    }

    .sponsor-benefit-title {
        font-size: 0.95rem;
    }

    .sponsor-benefit-desc {
        font-size: 0.85rem;
    }`;

const replacementMobile = `    .sponsor-benefits-list li {
        padding: 1.25rem 1.25rem 1.25rem 2.75rem;
        font-size: 0.9rem;
    }

    .sponsor-benefits-list li::before {
        top: 1.25rem;
        left: 1rem;
        font-size: 1.1rem;
    }

    .sponsor-benefit-title {
        font-size: 1.05rem;
    }

    .sponsor-benefit-desc {
        font-size: 0.9rem;
    }`;

if (css.includes(targetDesktop)) {
    css = css.replace(targetDesktop, replacementDesktop);
} else {
    console.log("Desktop target not found!");
}

if (css.includes(targetMobile)) {
    css = css.replace(targetMobile, replacementMobile);
} else {
    console.log("Mobile target not found!");
}

fs.writeFileSync('/Users/ethanonyett/Projects/spartanflightwebsite/spartanflight.github.io/public/styles.css', css);
console.log("Applied sponsor box styling fixes.");
