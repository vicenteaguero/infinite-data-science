const path = '/course/toc.json';

async function getTOC() {
    try {
        const response = await fetch(path);
        const data = await response.json();

        const toc = document.getElementById('toc');

        for (const module in data) {

            const mh = document.createElement('h2');
            mh.className = 'toc';

            mh.textContent = module;
            toc.appendChild(mh);

            const submodules = data[module];

            for (const sub in submodules) {

                const sh = document.createElement('h3');
                sh.className = 'toc';
                sh.textContent = sub;
                toc.appendChild(sh);

                const lessons = submodules[sub];
                const list = document.createElement('ul');
                list.className = 'toc';

                for (const lesson in lessons) {

                    const item = document.createElement('li');
                    item.className = 'toc';
                    const link = document.createElement('a');
                    link.className = 'toc';

                    link.href = lessons[lesson];
                    link.textContent = lesson;

                    item.appendChild(link);
                    list.appendChild(item);
                }

                toc.appendChild(list);
            }
        }
    } catch (error) {
        console.error('toc.js: Error fetching TOC data', error);
    }
}

document.addEventListener('DOMContentLoaded', getTOC);