import './style.css'

const profile = {
  github: 'https://github.com/PetlyaBEA',
  telegram: 'https://t.me/tonzun',
  whatsapp: 'https://wa.me/77023622988',
  whatsappDisplay: '+7 702 362 29 88',
}

const services = [
  ['Разработка сайтов', 'Лендинги, сайты для бизнеса и каталоги с понятной структурой и адаптивом.'],
  ['Telegram-боты', 'Заявки, уведомления, роли, админ-функции и автоматизация рутинных процессов.'],
  ['Mini Apps и системы', 'Интерфейсы внутри Telegram, API, базы данных, кабинеты и рабочая логика.'],
  ['Поддержка', 'Доработки, исправления, публикация, сервер и развитие проекта после запуска.'],
]

const projects = [
  {
    num: '01',
    title: 'JAS Volunteers',
    type: 'Telegram / Backend',
    text: 'Система для волонтёрской организации: роли, часы, мероприятия, модерация, аналитика и рабочие процессы.',
    tags: ['Python', 'aiogram', 'SQLite'],
  },
  {
    num: '02',
    title: 'JAS ID',
    type: 'Mini App / Web',
    text: 'Telegram Mini App с авторизацией, цифровым профилем, рейтингом, QR, командами, API и staff workspace.',
    tags: ['React', 'Flask', 'REST API'],
  },
  {
    num: '03',
    title: 'CRIS Portfolio',
    type: 'Frontend',
    text: 'Личный сайт-портфолио с адаптивной версткой, анимациями и автоматическим деплоем через GitHub Pages.',
    tags: ['TypeScript', 'Vite', 'GitHub'],
  },
  {
    num: '04',
    title: 'International School',
    type: 'Website / Frontend',
    text: 'Концепт сайта частной международной школы: программы обучения, кампус, школьная жизнь, поступление и адаптивная версия.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://petlyabea.github.io/International-school/',
  },
]

const workflow = [
  ['01', 'Обсуждение', 'Разбираем задачу, цели и примеры, которые вам нравятся.'],
  ['02', 'План и цена', 'Фиксируем функционал, сроки и стоимость до начала разработки.'],
  ['03', '50% предоплата', 'После согласования начинаю работу над проектом.'],
  ['04', 'Разработка', 'Собираю интерфейс и необходимую логику, показываю результат.'],
  ['05', 'Правки', 'Вносим согласованные изменения, которые входят в первоначальное ТЗ.'],
  ['06', 'Оставшиеся 50%', 'После готовности оплачивается вторая половина суммы.'],
  ['07', 'Запуск', 'Публикую проект, подключаю нужные сервисы и передаю готовый результат.'],
]

const prices = [
  ['Простой сайт', 'от 25 000 ₸', 'Лендинг или сайт-визитка для бизнеса.'],
  ['Бизнес-сайт', 'от 50 000 ₸', 'Несколько разделов, формы, интеграции и более сложная структура.'],
  ['Полная веб-система', 'от 90 000 ₸', 'Frontend, backend, API, БД, роли и админ-панель при необходимости.'],
  ['Telegram-бот', 'от 30 000 ₸', 'Заявки, роли, уведомления, база данных и автоматизация.'],
  ['Telegram Mini App', 'от 50 000 ₸', 'Web App внутри Telegram с авторизацией, профилем и API.'],
]

const arrow = '<span aria-hidden="true">↗</span>'

const serviceMarkup = services.map(([title, text], i) => `
  <article class="service-card reveal">
    <div class="service-no">0${i + 1}</div>
    <h3>${title}</h3>
    <p>${text}</p>
    <a href="#contact" class="text-link">Обсудить ${arrow}</a>
  </article>
`).join('')

const projectMarkup = projects.map((p, i) => `
  <article class="project-card reveal project-${i + 1}">
    <div class="project-visual">
      <div class="visual-top"><span>${p.num}</span><span>${p.type}</span></div>
      <div class="visual-window">
        <div class="window-bar"><i></i><i></i><i></i></div>
        <div class="window-layout"><b></b><b></b><b></b><b></b><b></b></div>
      </div>
    </div>
    <div class="project-copy">
      <span class="eyebrow">${p.type}</span>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${'url' in p && p.url ? `<a class="project-link" href="${p.url}" target="_blank" rel="noopener noreferrer">Открыть проект ${arrow}</a>` : ''}
    </div>
  </article>
`).join('')

const workflowMarkup = workflow.map(([n, title, text]) => `
  <article class="step reveal">
    <span class="step-index">${n}</span>
    <div><h3>${title}</h3><p>${text}</p></div>
  </article>
`).join('')

const priceMarkup = prices.map(([title, price, text]) => `
  <article class="price-row reveal">
    <div><h3>${title}</h3><p>${text}</p></div>
    <strong>${price}</strong>
    <a href="#contact" aria-label="Обсудить ${title}">${arrow}</a>
  </article>
`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="noise"></div>
  <header class="site-header">
    <a class="brand" href="#home" aria-label="CRIS home"><span>C</span> CRIS</a>
    <nav class="nav desktop-nav">
      <a href="#about">Обо мне</a>
      <a href="#services">Услуги</a>
      <a href="#projects">Проекты</a>
      <a href="#process">Процесс</a>
      <a href="#pricing">Прайс</a>
      <a href="#contact">Контакты</a>
    </nav>
    <a class="header-cta" href="#contact">Связаться ${arrow}</a>
    <button class="menu-btn" aria-label="Открыть меню">☰</button>
  </header>

  <div class="mobile-nav" aria-hidden="true">
    <a href="#about">Обо мне</a><a href="#services">Услуги</a><a href="#projects">Проекты</a><a href="#process">Процесс</a><a href="#pricing">Прайс</a><a href="#contact">Контакты</a>
  </div>

  <main>
    <section class="hero" id="home">
      <aside class="social-rail" aria-label="Социальные сети">
        <span></span>
        <a href="${profile.telegram}" target="_blank">TG</a>
        <a href="${profile.whatsapp}" target="_blank">WA</a>
        <a href="${profile.github}" target="_blank">GH</a>
        <span></span>
      </aside>
      <div class="hero-copy reveal">
        <p class="eyebrow">WEB · TELEGRAM · SYSTEMS</p>
        <h1>Создаю сайты,<br>которые <em>решают</em><br>задачи <span>бизнеса.</span></h1>
        <p class="hero-text">Разрабатываю сайты, Telegram-ботов и веб-системы — от идеи и дизайна до backend, базы данных и запуска.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#contact">Обсудить проект ${arrow}</a>
          <a class="btn ghost" href="#projects">Смотреть проекты</a>
        </div>
      </div>
      <div class="hero-art reveal">
        <div class="art-shape shape-a"></div><div class="art-shape shape-b"></div>
        <img src="${import.meta.env.BASE_URL}statue.jpg" alt="Декоративная классическая скульптура" />
      </div>
      <div class="hero-footer-line"></div>
    </section>

    <section class="section about" id="about">
      <div class="section-kicker">01 / ОБО МНЕ</div>
      <div class="about-grid">
        <div class="reveal"><h2>Здравствуйте,<br>я разработчик.</h2></div>
        <div class="about-copy reveal">
          <p class="lead">Делаю сложное простым и понятным.</p>
          <p>Создаю сайты, Telegram-ботов и веб-системы под реальные задачи бизнеса. Мне важно, чтобы проект был понятен клиенту, удобен пользователю и нормально развивался дальше.</p>
          <p>Работаю с frontend, backend, API, SQLite и PostgreSQL, ролями, админ-панелями, Linux и деплоем.</p>
          <div class="about-callout"><b>Стиль зависит от вас.</b><span>Это портфолио оформлено так, как нравится мне. Ваш проект может быть светлым, минималистичным, корпоративным, premium или полностью по вашим референсам.</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <div class="section-kicker">02 / УСЛУГИ</div>
      <div class="split-head">
        <h2>Что я делаю</h2>
        <p>Помогаю собрать цифровой продукт под конкретную задачу — без лишнего функционала и шаблонного подхода.</p>
      </div>
      <div class="services-grid">${serviceMarkup}</div>
    </section>

    <section class="section projects" id="projects">
      <div class="section-kicker">03 / ПРОЕКТЫ</div>
      <div class="split-head">
        <h2>Реальные проекты</h2>
        <p>Без выдуманных кейсов: здесь то, над чем я действительно работал.</p>
      </div>
      <div class="projects-list">${projectMarkup}</div>
    </section>

    <section class="section why">
      <div class="section-kicker">04 / ПОЧЕМУ СО МНОЙ</div>
      <div class="why-grid">
        <div class="reveal"><h2>Не просто «сделать сайт».</h2><p class="lead">Я стараюсь закрыть задачу бизнеса целиком.</p></div>
        <div class="why-list reveal">
          <div><span>01</span><h3>Прямое общение</h3><p>Вы общаетесь сразу со мной, без менеджеров и цепочки посредников.</p></div>
          <div><span>02</span><h3>Дизайн под задачу</h3><p>Не копирую один шаблон всем подряд. Подбираю стиль под нишу и аудиторию.</p></div>
          <div><span>03</span><h3>Можно начать с малого</h3><p>Сначала запускаем нужную версию, потом при необходимости расширяем.</p></div>
          <div><span>04</span><h3>Проект под ключ</h3><p>Интерфейс, backend, база, публикация, домен и сервер можно закрыть в одном месте.</p></div>
        </div>
      </div>
    </section>

    <section class="section process" id="process">
      <div class="section-kicker">05 / ПРОЦЕСС РАБОТЫ</div>
      <div class="process-grid">
        <div class="process-intro reveal">
          <h2>Понятно, что происходит на каждом этапе.</h2>
          <p>До старта фиксируем объём и цену. Дополнительные функции вне первоначального ТЗ оцениваются отдельно.</p>
          <div class="payment"><span>Оплата</span><strong>50% / 50%</strong><small>предоплата → готовый проект</small></div>
        </div>
        <div class="steps">${workflowMarkup}</div>
      </div>
    </section>

    <section class="section pricing" id="pricing">
      <div class="section-kicker">06 / ПРАЙС</div>
      <div class="split-head">
        <h2>Стартовая стоимость</h2>
        <p>Точную цену фиксируем после обсуждения задачи. Стоимость разработки указана «от».</p>
      </div>
      <div class="price-list">${priceMarkup}</div>
      <div class="extras reveal">
        <div><span>Домен .kz</span><strong>10 000 ₸</strong></div>
        <div><span>Установка / настройка</span><strong>3 000 ₸</strong></div>
        <div><span>Сервер / поддержка</span><strong>по договорённости</strong></div>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="contact-card reveal">
        <div>
          <div class="section-kicker light">07 / КОНТАКТЫ</div>
          <h2>Есть задача?<br>Давайте обсудим.</h2>
          <p>Напишите, что хотите сделать. Я задам несколько вопросов и предложу подходящий вариант.</p>
        </div>
        <div class="contact-links">
          <a href="${profile.whatsapp}" target="_blank"><span>WhatsApp</span><small>${profile.whatsappDisplay}</small>${arrow}</a>
          <a href="${profile.telegram}" target="_blank"><span>Telegram</span><small>@tonzun</small>${arrow}</a>
          <a href="${profile.github}" target="_blank"><span>GitHub</span><small>PetlyaBEA</small>${arrow}</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <a class="brand" href="#home"><span>C</span> CRIS</a>
    <p>Сайты · Telegram · Web systems</p>
    <p>© 2026</p>
  </footer>
`

const menuBtn = document.querySelector<HTMLButtonElement>('.menu-btn')!
const mobileNav = document.querySelector<HTMLDivElement>('.mobile-nav')!
menuBtn.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open')
  mobileNav.setAttribute('aria-hidden', String(!open))
  menuBtn.textContent = open ? '×' : '☰'
})
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('open')
  mobileNav.setAttribute('aria-hidden', 'true')
  menuBtn.textContent = '☰'
}))

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
