// async function includeHTML(selector, filePath) {
//     try {
//         const response = await fetch(filePath);
//         if (!response.ok) throw new Error(`Failed to load ${filePath}`);
//         const html = await response.text();
//         document.querySelector(selector).innerHTML = html;
//     } catch (error) {
//         console.error('Error including HTML:', error);
//     }
// }

// // Include the header and footer
// document.addEventListener('DOMContentLoaded', () => {
//     includeHTML('header', '/components/header.html');
//     includeHTML('footer', '/components/footer.html');
// });

async function includeHTML(selector, path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load ${path}`);
        const html = await response.text();
        document.querySelector(selector).innerHTML = html;
    } catch (error) {
        console.error('include.js: Error including HTML:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML('header', '/components/header.html');
    includeHTML('footer', '/components/footer.html');
});