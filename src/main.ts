import './style.css'

type Project = {
  kicker: string
  title: string
  description: string
  stack: string[]
  highlights: string[]
  accent: 'green' | 'violet' | 'blue'
  visual: 'jas-id' | 'bot' | 'portfolio'
  link?: string
}

const profile = {
  name: 'CRIS',
  role: 'Разработчик · Кибербезопасность',
  intro:
    'Создаю практичные цифровые продукты: Telegram-автоматизацию, защищённые веб-интерфейсы и системы, которые реально работают в продакшене.',
  location: 'Казахстан',
  availability: 'Открыт к проектам и сотрудничеству',
  github: 'https://github.com/PetlyaBEA',
  telegramId: '8707501473',
  telegram: 'tg://user?id=8707501473',
  whatsapp: 'https://wa.me/77023622988',
  whatsappDisplay: '+7 702 362 29 88',
}

const projects: Project[] = [
  {
    kicker: 'Главный проект',
    title: 'JAS ID',
    description:
      'Цифровой профиль волонтёра и Telegram Mini App: мероприятия, рейтинг, учёт часов, QR-идентификация, публичные профили и рабочие инструменты для сотрудников по их уровню доступа.',
    stack: ['React', 'Vite', 'Flask', 'SQLite', 'Telegram WebApp'],
    highlights: ['Проверка Telegram initData', 'RBAC + scope', 'QR-профиль', 'Продакшен на VPS'],
    accent: 'green',
    visual: 'jas-id',
  },
  {
    kicker: 'Система автоматизации',
    title: 'JAS Volunteers Bot',
    description:
      'Продакшен Telegram-бот для регистрации волонтёров, модерации, команд, часов, мероприятий, аналитики и ежедневной работы координаторов и руководителей.',
    stack: ['Python', 'aiogram', 'SQLite', 'Linux', 'systemd'],
    highlights: ['Модульные handlers', 'Ролевые права', 'Рабочие процессы', 'Сервис 24/7'],
    accent: 'blue',
    visual: 'bot',
  },
  {
    kicker: 'Личный сайт',
    title: 'Portfolio',
    description:
      'Сайт, который вы сейчас смотрите: быстрый адаптивный интерфейс без отдельного backend, собранный на TypeScript + Vite и подготовленный для GitHub Pages.',
    stack: ['TypeScript', 'Vite', 'CSS', 'GitHub Pages'],
    highlights: ['Без отдельного сервера', 'Адаптивный UI', 'Лёгкие анимации', 'Автодеплой'],
    accent: 'violet',
    visual: 'portfolio',
  },
]

const skills = [
  { group: 'Разработка', items: ['Python', 'TypeScript', 'JavaScript', 'React', 'HTML / CSS'] },
  { group: 'Бэкенд', items: ['Flask', 'aiogram', 'REST API', 'SQLite', 'Auth & RBAC'] },
  { group: 'Продакшен', items: ['Linux', 'Nginx', 'Gunicorn', 'systemd', 'Git / GitHub'] },
  { group: 'Фокус', items: ['Кибербезопасность', 'Автоматизация', 'UX', 'Архитектура продукта'] },
]

const icon = (name: 'arrow' | 'github' | 'telegram' | 'whatsapp' | 'mail' | 'code' | 'shield' | 'server') => {
  const icons = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
    telegram: '<path d="m21.4 4.6-3 14.1c-.22 1-.82 1.25-1.66.78l-4.57-3.37-2.2 2.12c-.25.24-.45.44-.92.44l.33-4.66 8.49-7.67c.37-.33-.08-.51-.57-.18L6.8 12.77l-4.52-1.41c-.98-.31-1-.98.2-1.45L20.16 3.1c.82-.3 1.54.2 1.27 1.5Z"/>',
    whatsapp: '<path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.2.3 11.7c0 2.1.6 4.2 1.6 6L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.4h.1c6.5 0 11.8-5.2 11.8-11.7 0-3.1-1.2-6-3.5-8.5Zm-8.4 18.2h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 1 1 8.6 4.8Zm5.4-7.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z"/>',
    mail: '<path d="M3 5h18v14H3V5Zm0 1 9 7 9-7"/>',
    code: '<path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12"/>',
    shield: '<path d="M12 3 5 6v5c0 4.7 2.9 8 7 10 4.1-2 7-5.3 7-10V6l-7-3Zm-3 9 2 2 4-4"/>',
    server: '<path d="M4 4h16v6H4V4Zm0 10h16v6H4v-6ZM7 7h.01M7 17h.01"/>',
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`
}

const projectVisual = (type: Project['visual']) => {
  if (type === 'jas-id') {
    return `
      <div class="mock-phone" aria-hidden="true">
        <div class="mock-phone__top"><span>JAS ID</span><i></i></div>
        <div class="id-card-mini">
          <div class="mini-avatar">JV</div>
          <div><b>Профиль волонтёра</b><small>Цифровой ID</small></div>
          <div class="mini-qr"></div>
        </div>
        <div class="mini-stats"><span><b>Часы</b><small>учёт</small></span><span><b>Рейтинг</b><small>live</small></span></div>
        <div class="mini-bars"><i></i><i></i><i></i></div>
      </div>`
  }

  if (type === 'bot') {
    return `
      <div class="chat-mock" aria-hidden="true">
        <div class="chat-head"><div class="bot-dot">J</div><div><b>JAS Volunteers</b><small>bot</small></div><i></i></div>
        <div class="chat-line left">Выберите действие</div>
        <div class="chat-grid"><span>Профиль</span><span>События</span><span>Часы</span><span>Команда</span></div>
        <div class="chat-line right">Открыть JAS ID ↗</div>
      </div>`
  }

  return `
    <div class="code-mock" aria-hidden="true">
      <div class="code-top"><i></i><i></i><i></i><span>portfolio.ts</span></div>
      <pre><span class="c-purple">const</span> <span class="c-blue">build</span> = {
  idea: <span class="c-green">'полезно'</span>,
  ui: <span class="c-green">'чисто'</span>,
  ship: <span class="c-green">true</span>
}</pre>
      <div class="deploy-pill">● опубликовано</div>
    </div>`
}

const projectCard = (project: Project, index: number) => `
  <article class="project-card project-card--${project.accent} reveal" style="--delay:${index * 70}ms">
    <div class="project-card__copy">
      <div class="eyebrow">${project.kicker}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-row">${project.stack.map((item) => `<span>${item}</span>`).join('')}</div>
      <ul class="project-points">${project.highlights.map((item) => `<li>${item}</li>`).join('')}</ul>
    </div>
    <div class="project-card__visual">${projectVisual(project.visual)}</div>
  </article>`

const socialLink = (
  label: string,
  value: string,
  href: string,
  iconName: 'github' | 'telegram' | 'whatsapp',
) => `
  <a class="social-link" href="${href}" target="_blank" rel="noreferrer">
    ${icon(iconName)}
    <span><b>${label}</b><small>${value}</small></span>
    ${icon('arrow')}
  </a>`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page-noise" aria-hidden="true"></div>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Наверх"><span>C</span>${profile.name}</a>
    <nav class="desktop-nav" aria-label="Навигация">
      <a href="#projects">Проекты</a>
      <a href="#architecture">Архитектура</a>
      <a href="#skills">Навыки</a>
      <a href="#about">Обо мне</a>
    </nav>
    <a class="header-cta" href="#contact">Связаться ${icon('arrow')}</a>
  </header>

  <main id="top">
    <section class="hero-section section-shell">
      <div class="hero-copy">
        <div class="status-pill"><i></i>${profile.availability}</div>
        <h1>Создаю системы,<br><span>которыми реально пользуются.</span></h1>
        <p class="hero-lead">${profile.intro}</p>
        <div class="hero-actions">
          <a class="button button--primary" href="#projects">Смотреть проекты ${icon('arrow')}</a>
          <a class="button button--ghost" href="#contact">Мои контакты</a>
        </div>
        <div class="hero-meta"><span>${profile.location}</span><i></i><span>${profile.role}</span></div>
      </div>

      <div class="hero-stage" aria-label="Технологии">
        <div class="orbit orbit--one"></div><div class="orbit orbit--two"></div>
        <div class="hero-terminal">
          <div class="terminal-top"><span><i></i><i></i><i></i></span><small>~/work</small></div>
          <div class="terminal-body">
            <p><span class="prompt">$</span> whoami</p>
            <p class="terminal-output">${profile.role}</p>
            <p><span class="prompt">$</span> current_focus</p>
            <p class="terminal-output">защита + автоматизация + web<span class="cursor">_</span></p>
          </div>
        </div>
        <div class="float-chip chip--python">PY <span>Python</span></div>
        <div class="float-chip chip--security">${icon('shield')} <span>Защита</span></div>
        <div class="float-chip chip--web">${icon('code')} <span>Web</span></div>
        <div class="float-chip chip--ops">${icon('server')} <span>Linux</span></div>
      </div>
    </section>

    <section class="proof-strip" aria-label="Ключевые стороны">
      <div><strong>01</strong><span>Разработка<br>продукта</span></div>
      <div><strong>02</strong><span>Backend +<br>автоматизация</span></div>
      <div><strong>03</strong><span>Безопасность<br>по умолчанию</span></div>
      <div><strong>04</strong><span>Деплой<br>в продакшен</span></div>
    </section>

    <section id="projects" class="section-shell section-block">
      <div class="section-heading reveal">
        <div><div class="eyebrow">Мои проекты</div><h2>Не макеты, а <span>рабочие системы.</span></h2></div>
        <p>Мне важен не только код, но и весь путь продукта: права доступа, данные, UX, сервер, деплой и дальнейшая поддержка.</p>
      </div>
      <div class="projects-grid">${projects.map(projectCard).join('')}</div>
    </section>

    <section id="architecture" class="section-shell section-block architecture-section">
      <div class="section-heading reveal">
        <div><div class="eyebrow">JAS · Архитектура и защита</div><h2>Как устроена система<br><span>под капотом.</span></h2></div>
        <p>JAS — это связка Telegram-бота, Mini App, API, базы данных и Linux-инфраструктуры. Критичные проверки выполняются на сервере, а не в интерфейсе.</p>
      </div>
      <div class="architecture-grid">
        <article class="architecture-card reveal"><span>01</span><h3>Telegram-аутентификация</h3><p>JAS ID не доверяет данным из браузера. Mini App передаёт initData, а Flask проверяет подпись Telegram на сервере. Пустые и некорректные данные отклоняются до выдачи сессии.</p></article>
        <article class="architecture-card reveal"><span>02</span><h3>Роли и границы доступа</h3><p>Права задаются на backend через permissions.py. Доступ ограничивается scope: команда, город или global. Frontend только показывает интерфейс — окончательное решение всегда принимает сервер.</p></article>
        <article class="architecture-card reveal"><span>03</span><h3>Данные и приватность</h3><p>Telegram-бот и JAS ID используют общую базу и единые правила. Чужие приватные поля не выдаются через API, скрытые профили фильтруются, а QR доступен только владельцу или сотруднику с нужным permission.</p></article>
        <article class="architecture-card reveal"><span>04</span><h3>Продакшен и защита</h3><p>Nginx принимает HTTPS-трафик и проксирует его в Gunicorn/Flask. Бот и JAS ID работают отдельными systemd-сервисами, секреты вынесены из кода, добавлены security headers, CSRF-защита и безопасный rollback.</p></article>
      </div>
      <div class="architecture-flow reveal" aria-label="Архитектура JAS"><span>Telegram Bot</span><i>→</i><span>JAS ID / React</span><i>→</i><span>Flask API</span><i>→</i><span>SQLite</span><i>→</i><span>Linux VPS</span></div>
    </section>

    <section id="skills" class="section-shell section-block">
      <div class="skills-layout">
        <div class="skills-intro reveal">
          <div class="eyebrow">Инструменты</div>
          <h2>Мне интересно понимать<br><span>весь стек целиком.</span></h2>
          <p>От логики приложения и интерфейса до Linux-сервисов, API, прав доступа и продакшен-деплоя.</p>
        </div>
        <div class="skills-grid">
          ${skills
            .map(
              (skill, index) => `
                <article class="skill-card reveal" style="--delay:${index * 60}ms">
                  <span class="skill-index">0${index + 1}</span>
                  <h3>${skill.group}</h3>
                  <div>${skill.items.map((item) => `<span>${item}</span>`).join('')}</div>
                </article>`,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section id="about" class="section-shell section-block">
      <div class="about-card reveal">
        <div class="about-number">// 01</div>
        <div class="about-copy">
          <div class="eyebrow">Обо мне</div>
          <h2>Для меня проект не заканчивается<br><span>на «у меня работает».</span></h2>
          <p>Мне интересно создавать понятные и поддерживаемые системы, которыми можно пользоваться в реальной организации. Сейчас мой основной опыт — Telegram-продукты, web, автоматизация, серверная инфраструктура и кибербезопасность.</p>
          <p>Учусь через практику: продумываю flow, собираю, тестирую, ломаю, исправляю, деплою и затем улучшаю по реальному использованию.</p>
        </div>
        <div class="about-side">
          <div><small>Подход</small><strong>Сделать → проверить → задеплоить → улучшить</strong></div>
          <div><small>Сейчас изучаю</small><strong>Кибербезопасность и продуктовую разработку</strong></div>
          <div><small>Локация</small><strong>${profile.location}</strong></div>
        </div>
      </div>
    </section>

    <section id="contact" class="section-shell contact-section section-block">
      <div class="contact-copy reveal">
        <div class="eyebrow">Контакты</div>
        <h2>Есть идея или проект?<br><span>Напишите мне.</span></h2>
        <p>Быстрее всего отвечаю в Telegram или WhatsApp. GitHub — для кода и проектов.</p>
      </div>
      <div class="social-grid reveal">
        ${socialLink('GitHub', '@PetlyaBEA', profile.github, 'github')}
        ${socialLink('Telegram', `ID ${profile.telegramId}`, profile.telegram, 'telegram')}
        ${socialLink('WhatsApp', profile.whatsappDisplay, profile.whatsapp, 'whatsapp')}
      </div>
    </section>
  </main>

  <footer class="site-footer section-shell">
    <span>© ${new Date().getFullYear()} ${profile.name}</span>
    <span>TypeScript + Vite · GitHub Pages</span>
    <a href="#top">Наверх ↑</a>
  </footer>


`

const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ;(entry.target as HTMLElement).classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 },
)
revealElements.forEach((element) => observer.observe(element))

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href')
    if (!targetId || targetId === '#') return
    const target = document.querySelector(targetId)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})
