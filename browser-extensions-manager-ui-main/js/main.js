const init = () => {
    loadExtensions();
    handleNav();
    themeHandler();
}

const loadExtensions = () => {
    const extensionsContainer = document.querySelector('main > section > .extensions');
    fetch('./data.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((extension) => {
                const extensionElement = document.createElement('article');
                extensionElement.className= extension.isActive ? 'extension active' : 'extension';

                extensionElement.innerHTML = `
                    <header>
                        <img src="${extension.logo}" alt="${extension.name}">
                        <section>
                            <h3>${extension.name}</h3>
                            <p>${extension.description}</p>
                        </section>
                    </header>
                    <footer>
                        <button class="remove">Remove</button>
                        <span class="toggle">
                            <input type="checkbox" class="enable" ${extension.isActive ? 'checked' : ''}>
                            <span class="slider"></span>
                        </span>
                    </footer>
                `;
                extensionsContainer.appendChild(extensionElement);
            });
        });
}

const handleNav = () => {
    document.querySelector('main > section nav').addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (e.target.tagName == 'A' && !e.target.classList.contains('active')) {
            document.querySelectorAll('main > section nav a').forEach((navLink) => navLink.classList.remove('active'));
            e.target.classList.add('active');

            const show = e.target.innerText.toLowerCase();
            document.querySelectorAll('.extension').forEach((extension) => extension.style.display = 'flex');

            if (show == 'active') {
                document.querySelectorAll('.extension:not(.active)').forEach((extension) => extension.style.display = 'none');
            } else if (show == 'inactive') {
                document.querySelectorAll('.extension.active').forEach((extension) => extension.style.display = 'none');
            }
        }
    });
}

const themeHandler = () => {
    const body = document.querySelector('body')

    !window.matchMedia('(prefers-color-scheme: dark)').matches
        ? body.classList.add('light')
        : body.classList.add('dark')

    document.querySelector('main > header .mode-toggler').addEventListener('click', () => {
        body.className == 'light'
            ? body.className = 'dark'
            : body.className = 'light'
    })
}

init();