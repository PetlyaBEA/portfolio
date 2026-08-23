import './style.css'

const profile = {
  role: 'Разработчик · Web · Telegram',
  github: 'https://github.com/PetlyaBEA',
  telegram: 'tg://user?id=8707501473',
  whatsapp: 'https://wa.me/77023622988',
  whatsappDisplay: '+7 702 362 29 88',
}

const skills = [
  ['▣', 'Веб-разработка', 'Современные сайты, лендинги и веб-приложения.'],
  ['➤', 'Telegram-боты', 'Боты любой сложности с админ-панелью.'],
  ['◫', 'Базы данных', 'SQLite, структура данных, оптимизация.'],
  ['⚙', 'API & Backend', 'REST API, Flask, интеграции и бизнес-логика.'],
  ['✦', 'Дизайн', 'Адаптивные интерфейсы под стиль вашего бизнеса.'],
  ['⌁', 'Деплой', 'VPS, Nginx, Gunicorn, systemd и GitHub Pages.'],
]

const stack = ['Python', 'JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'SQLite', 'Flask', 'Git', 'Linux']

const services = [
  { icon: '▣', title: 'Простой сайт', price: '10 000 ₸', features: ['Лендинг / визитка', 'Информация о бизнесе', 'Контакты и формы', 'Адаптив под телефон'] },
  { icon: '▤', title: 'Бизнес-сайт', price: '35 000 ₸', badge: 'Популярно', features: ['Несколько разделов', 'Формы и заявки', 'Интеграции и сервисы', 'Более сложная структура'] },
  { icon: '⬡', title: 'Полная система', price: '60 000 ₸', features: ['Личные кабинеты и роли', 'База данных и API', 'Админ-панель', 'Автоматизация'] },
  { icon: '➤', title: 'Telegram-бот', price: '20 000 ₸', features: ['Команды и меню', 'Заявки и уведомления', 'Роли и доступ', 'База данных'] },
  { icon: '◇', title: 'Telegram Mini App', price: '40 000 ₸', features: ['Web App внутри Telegram', 'Авторизация и профиль', 'Интеграция с ботом', 'Мобильный интерфейс'] },
  { icon: '⌁', title: 'Поддержка / доработки', price: 'по договорённости', features: ['Доработка функций', 'Исправление ошибок', 'Оптимизация', 'Индивидуальные задачи'] },
]

const projects = [
  {
    type: 'Telegram + Web',
    title: 'JAS Volunteers',
    text: 'Система для волонтёрской организации: Telegram-бот, роли, часы, мероприятия, модерация и рабочие процессы.',
    tags: ['Python', 'aiogram', 'SQLite'],
    accent: 'cyan',
  },
  {
    type: 'Mini App',
    title: 'JAS ID',
    text: 'Telegram Mini App с авторизацией, цифровым профилем, рейтингом, QR, командами и API.',
    tags: ['React', 'Flask', 'API'],
    accent: 'blue',
  },
  {
    type: 'Web',
    title: 'Portfolio',
    text: 'Этот адаптивный сайт: TypeScript + Vite, тёмный интерфейс и автоматический деплой через GitHub Pages.',
    tags: ['TypeScript', 'Vite', 'GitHub'],
    accent: 'violet',
  },
]

const icon = (path: string) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`
const arrow = icon('M5 12h14M13 6l6 6-6 6')
const send = icon('m3 11 18-8-8 18-2-7-8-3Zm8 3 10-11')

const skillCards = skills.map(([symbol, title, text]) => `
  <article class="skill-card reveal">
    <div class="skill-icon">${symbol}</div>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>`).join('')

const projectCards = projects.map((p) => `
  <article class="project-card project-card--${p.accent} reveal">
    <div class="project-cover">
      <div class="project-window">
        <div class="window-top"><i></i><i></i><i></i></div>
        <div class="window-ui">
          <div class="window-sidebar"></div>
          <div class="window-content"><span></span><span></span><span></span><b></b></div>
        </div>
      </div>
    </div>
    <div class="project-body">
      <div class="project-type">${p.type}</div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  </article>`).join('')

const serviceCards = services.map((s) => `
  <article class="price-card reveal ${s.badge ? 'price-card--featured' : ''}">
    ${s.badge ? `<div class="price-badge">${s.badge}</div>` : ''}
    <div class="price-icon">${s.icon}</div>
    <h3>${s.title}</h3>
    <div class="price-value"><small>${s.price.includes('договор') ? '' : 'от'}</small><strong>${s.price}</strong></div>
    <ul>${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <a href="#contact" class="price-button">Выбрать ${arrow}</a>
  </article>`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#home">CRIS<span>.</span></a>
    <nav class="desktop-nav">
      <a href="#home">Главная</a>
      <a href="#about">Обо мне</a>
      <a href="#projects">Проекты</a>
      <a href="#skills">Навыки</a>
      <a href="#stack">Технологии</a>
      <a href="#pricing">Прайс</a>
      <a href="#contact">Контакты</a>
    </nav>
    <button class="menu-button" aria-label="Открыть меню">☰</button>
  </header>

  <div class="mobile-menu" aria-hidden="true">
    <a href="#home">Главная</a><a href="#about">Обо мне</a><a href="#projects">Проекты</a><a href="#skills">Навыки</a><a href="#pricing">Прайс</a><a href="#contact">Контакты</a>
  </div>

  <main>
    <section class="hero section" id="home">
      <div class="hero-copy reveal">
        <div class="mini-label">✦ DEVELOPER & CREATIVE</div>
        <h1>Превращаю идеи<br><span>в реальность.</span></h1>
        <p>Разрабатываю современные сайты, Telegram-ботов и веб-системы. Чистый интерфейс, продуманная логика и внимание к деталям.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects">Посмотреть проекты ${arrow}</a>
          <a class="btn btn-outline" href="#contact">${send} Связаться</a>
        </div>
      </div>
      <div class="hero-art reveal">
        <div class="glow-orb"></div>
        <div class="laptop">
          <div class="laptop-screen">
            <div class="code-lines"><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div class="code-panel"><b></b><span></span><span></span></div>
          </div>
          <div class="laptop-base"></div>
        </div>
        <div class="phone"><div class="phone-pill"></div><div class="telegram-logo">➤</div><span>Telegram</span></div>
        <div class="floating-card floating-card--one">&lt;/&gt;</div>
        <div class="floating-card floating-card--two">◎</div>
      </div>
      <div class="hero-stats">
        <div><strong>2+</strong><span>Крупных проекта</span></div>
        <div><strong>100%</strong><span>Адаптивно</span></div>
        <div><strong>24/7</strong><span>Продакшен</span></div>
        <div><strong>Web</strong><span>+ Telegram</span></div>
      </div>
    </section>

    <section class="section about" id="about">
      <div class="section-kicker">ОБО МНЕ</div>
      <div class="about-grid">
        <div class="about-copy reveal">
          <h2>Здравствуйте, я разработчик.</h2>
          <p>Создаю современные сайты, Telegram-ботов и веб-системы для реальных задач. Мне важно, чтобы продукт был не только красивым, но и понятным, быстрым и удобным для людей.</p>
          <p>Работаю с frontend, backend, базами данных, API и деплоем. Могу собрать как простой сайт для бизнеса, так и полноценную систему с ролями, админ-панелью и автоматизацией.</p>
          <p class="about-note">Дизайн этого портфолио — мой личный стиль. Для вашего проекта я готов сделать совершенно другое оформление под ваш бизнес, аудиторию и предпочтения.</p>
          <a class="btn btn-primary" href="#contact">Обсудить проект ${arrow}</a>
        </div>
        <div class="about-portrait reveal" aria-hidden="true">
          <div class="portrait-silhouette"><div class="head"></div><div class="hoodie"></div></div>
          <div class="focus-card"><i></i><span>Focused<small>Building cool stuff</small></span></div>
          <div class="location-card"><b>●</b><span>Kazakhstan</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="skills">
      <div class="section-kicker">НАВЫКИ</div>
      <div class="section-head"><h2>Что я умею</h2><p>От идеи до готового проекта в интернете.</p></div>
      <div class="skills-grid">${skillCards}</div>
    </section>

    <section class="section stack-section" id="stack">
      <div class="section-kicker">ТЕХНОЛОГИИ</div>
      <div class="stack-layout">
        <div>
          <h2>Мой стек</h2>
          <div class="stack-grid">${stack.map((s, i) => `<div class="stack-item"><span>${['Py','JS','TS','⚛','5','3','DB','Fl','Git','⌘'][i]}</span><small>${s}</small></div>`).join('')}</div>
        </div>
        <div class="code-card reveal">
          <div class="code-tabs"><b>Python</b><span>JavaScript</span><span>TypeScript</span></div>
          <pre><em>async def</em> create_project():
  return {
    <b>"design"</b>: <i>"modern"</i>,
    <b>"code"</b>: <i>"clean"</i>,
    <b>"result"</b>: <i>"ready"</i>
  }</pre>
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="section-kicker">ПРОЕКТЫ</div>
      <div class="section-head"><h2>Избранные работы</h2><p>Проекты, где дизайн соединяется с реальной логикой.</p></div>
      <div class="projects-grid">${projectCards}</div>
    </section>

    <section class="section pricing" id="pricing">
      <div class="section-kicker">ПРАЙС</div>
      <div class="section-head"><h2>Стоимость разработки</h2><p>Прозрачные стартовые цены. Финальная стоимость зависит от объёма и функционала.</p></div>
      <div class="pricing-grid">${serviceCards}</div>
      <article class="server-card reveal">
        <div class="price-icon">◎</div><div><h3>Домен и сервер</h3><strong>по договорённости</strong><p>Подбор и регистрация домена, аренда и настройка сервера.</p></div><a href="#contact">Обсудить ${arrow}</a>
      </article>

      <div class="purchase-cta reveal">
        <div><span>✦ Интересует покупка?</span><p>Нажмите ниже, чтобы обсудить проект и получить консультацию.</p></div>
        <button class="btn btn-primary" id="open-style-modal">${send} Нажать</button>
      </div>

      <div class="style-note reveal">
        <div class="style-note-icon">ⓘ</div>
        <div><h3>Стиль зависит от вас!</h3><p>Моё портфолио сделано так, как нравится мне. Ваш проект не обязан выглядеть так же — я готов подобрать стиль под ваш бизнес, показать несколько направлений и собрать дизайн по вашим пожеланиям.</p></div>
        <button class="btn btn-outline" id="open-examples">Готов показать примеры стилей ${arrow}</button>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="section-kicker">КОНТАКТЫ</div>
      <h2>Связаться со мной</h2>
      <p>Есть идея или проект? Напишите мне — обсудим задачу, стиль, сроки и стоимость.</p>
      <div class="contact-links">
        <a class="contact-btn contact-btn--primary" href="${profile.telegram}">${send} Telegram</a>
        <a class="contact-btn" href="${profile.whatsapp}" target="_blank" rel="noreferrer">WhatsApp · ${profile.whatsappDisplay}</a>
        <a class="contact-btn" href="${profile.github}" target="_blank" rel="noreferrer">GitHub · PetlyaBEA</a>
      </div>
    </section>
  </main>

  <footer><span>© 2026 CRIS. Все права защищены.</span><span>Code. Design. Create. ♥</span></footer>

  <div class="modal" id="style-modal" aria-hidden="true">
    <div class="modal-card">
      <button class="modal-close" aria-label="Закрыть">×</button>
      <div class="section-kicker">ВАШ ПРОЕКТ — ВАШ СТИЛЬ</div>
      <h2>Сайт не обязан выглядеть как моё портфолио.</h2>
      <p>Это оформление я сделал под собственный вкус. Для вашего бизнеса могу подготовить другое направление: светлое, минималистичное, корпоративное, премиальное, яркое или максимально простое.</p>
      <div class="style-options"><span>Минимализм</span><span>Premium</span><span>Корпоративный</span><span>Светлый</span><span>Яркий</span><span>Ваш референс</span></div>
      <p class="modal-small">Перед разработкой вы можете прислать примеры сайтов, которые вам нравятся. Я также готов показать несколько вариантов стиля, чтобы выбрать направление до начала основной работы.</p>
      <div class="modal-actions"><a class="btn btn-primary" href="${profile.whatsapp}" target="_blank" rel="noreferrer">Написать в WhatsApp</a><a class="btn btn-outline" href="${profile.telegram}">Telegram</a></div>
    </div>
  </div>
`

const menuButton = document.querySelector<HTMLButtonElement>('.menu-button')!
const mobileMenu = document.querySelector<HTMLDivElement>('.mobile-menu')!
menuButton.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open')
  mobileMenu.setAttribute('aria-hidden', String(!open))
  menuButton.textContent = open ? '×' : '☰'
})
mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open')
  mobileMenu.setAttribute('aria-hidden', 'true')
  menuButton.textContent = '☰'
}))

const modal = document.querySelector<HTMLDivElement>('#style-modal')!
const openModal = () => { modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open') }
const closeModal = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open') }
document.querySelector('#open-style-modal')?.addEventListener('click', openModal)
document.querySelector('#open-examples')?.addEventListener('click', openModal)
document.querySelector('.modal-close')?.addEventListener('click', closeModal)
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal() })
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal() })

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible')
}), { threshold: .12 })
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
