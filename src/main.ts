import './style.css'

type Project = {
  num: string
  title: string
  type: string
  text: string
  tags: string[]
  url?: string
  image?: string
  tone?: 'red' | 'cream' | 'blue' | 'graphite'
}

const profile = {
  github: 'https://github.com/PetlyaBEA',
  telegram: 'https://t.me/tonzun',
  whatsapp: 'https://wa.me/77023622988',
  whatsappDisplay: '+7 702 362 29 88',
}

const services = [
  {
    no: '01',
    title: 'Разработка сайтов',
    text: 'Лендинги, сайты для бизнеса и продуктовые страницы с сильным визуалом, адаптивом и понятной структурой.',
  },
  {
    no: '02',
    title: 'Telegram-системы',
    text: 'Боты, Mini Apps, роли, уведомления, админ-функции, интеграции и автоматизация рабочих процессов.',
  },
  {
    no: '03',
    title: 'Backend и данные',
    text: 'Flask, REST API, SQLite / PostgreSQL, авторизация, серверная логика и связка интерфейса с реальной системой.',
  },
  {
    no: '04',
    title: 'Запуск и поддержка',
    text: 'GitHub Pages, VPS, Linux, домен, публикация, исправления и развитие проекта после запуска.',
  },
]

const projects: Project[] = [
  {
    num: '01',
    title: 'Lumière Beauty Studio',
    type: 'САЙТ / BEAUTY',
    text: 'Премиальный demo-сайт салона красоты: editorial-подача, услуги, работы, мастера, отзывы, контакты, WhatsApp и mobile-first адаптив.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://petlyabea.github.io/lumiere-salon/',
    image: `${import.meta.env.BASE_URL}lumiere-salon.png`,
    tone: 'cream',
  },
  {
    num: '02',
    title: 'International School',
    type: 'САЙТ / ОБРАЗОВАНИЕ',
    text: 'Концепт сайта международной школы: программы, кампус, школьная жизнь, поступление, преимущества и полная адаптивная версия.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://petlyabea.github.io/International-school/',
    image: `${import.meta.env.BASE_URL}international-school.jpg`,
    tone: 'blue',
  },
  {
    num: '03',
    title: 'JAS ID',
    type: 'MINI APP / WEB',
    text: 'Telegram Mini App для волонтёров JAS Volunteers: цифровой профиль, мероприятия, часы, рейтинг, команда, QR и рабочее пространство для сотрудников.',
    tags: ['React', 'Flask', 'REST API'],
    image: `${import.meta.env.BASE_URL}jas-id.jpg`,
    tone: 'red',
  },
  {
    num: '04',
    title: 'JAS Volunteers',
    type: 'TELEGRAM / BACKEND',
    text: 'Система для волонтёрской организации: анкеты, роли, часы, мероприятия, модерация, аналитика, партнёры, промокоды и админ-панель.',
    tags: ['Python', 'aiogram', 'SQLite'],
    image: `${import.meta.env.BASE_URL}jas-volunteers.png`,
    tone: 'graphite',
  },
  {
    num: '05',
    title: 'CRIS Portfolio v1',
    type: 'ПОРТФОЛИО / FRONTEND',
    text: 'Предыдущая версия моего портфолио: тёмная визуальная подача, красный акцент, секции услуг, проектов, процесса и контактов.',
    tags: ['TypeScript', 'Vite', 'GitHub'],
    image: `${import.meta.env.BASE_URL}portfolio-v1.jpg`,
    tone: 'blue',
  },
]

const workflow = [
  ['01', 'Бриф', 'Разбираем задачу, аудиторию, референсы и то, какой результат нужен проекту.'],
  ['02', 'Объём работ', 'Фиксируем функционал, сроки, стоимость и что именно входит в работу до начала разработки.'],
  ['03', 'Сборка', 'Собираю интерфейс, адаптив и нужную логику, показываю промежуточный результат по ходу работы.'],
  ['04', 'Проверка', 'Вносим согласованные правки, тестируем мобильную версию и доводим проект до нормального состояния.'],
  ['05', 'Запуск', 'Публикую проект, подключаю домен/сервисы и передаю готовый результат клиенту.'],
]

const prices = [
  ['Лендинг / визитка', 'от 25 000 ₸'],
  ['Бизнес-сайт', 'от 50 000 ₸'],
  ['Telegram-бот', 'от 30 000 ₸'],
  ['Telegram Mini App', 'от 50 000 ₸'],
  ['Веб-система / dashboard', 'от 90 000 ₸'],
]

const arrow = '<span aria-hidden="true">↗</span>'

const servicesMarkup = services.map((service) => `
  <article class="service-card reveal">
    <div class="service-meta">
      <span>${service.no}</span>
      <span>УСЛУГА</span>
    </div>
    <div class="service-icon" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <h3>${service.title}</h3>
    <p>${service.text}</p>
    <a href="#contact" class="line-link">Обсудить задачу ${arrow}</a>
  </article>
`).join('')

function projectVisual(project: Project) {
  if (project.image) {
    return `
      <div class="project-image-wrap">
        <img src="${project.image}" alt="Превью проекта ${project.title}" loading="lazy" />
      </div>
    `
  }

  return `
    <div class="project-terminal project-terminal--${project.tone ?? 'red'}" aria-hidden="true">
      <div class="terminal-top">
        <span>CRIS / ${project.num}</span>
        <span>LIVE BUILD</span>
      </div>
      <div class="terminal-grid">
        <div class="terminal-main">
          <span class="terminal-kicker">${project.type}</span>
          <strong>${project.title}</strong>
          <div class="terminal-lines"><i></i><i></i><i></i></div>
        </div>
        <div class="terminal-side">
          <b></b><b></b><b></b><b></b>
        </div>
      </div>
      <div class="terminal-code">
        <span>01</span><i></i><i></i><i></i><i></i>
      </div>
    </div>
  `
}

const projectMarkup = projects.map((project, index) => `
  <article class="project-card reveal ${index === 0 ? 'project-card--featured' : ''}">
    <div class="project-head">
      <span>${project.num}</span>
      <span>${project.type}</span>
    </div>
    <div class="project-visual project-visual--${project.tone ?? 'red'}">
      ${projectVisual(project)}
    </div>
    <div class="project-copy">
      <h3>${project.title}</h3>
      <p>${project.text}</p>
      <div class="project-footer">
        <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        ${project.url ? `<a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Открыть ${arrow}</a>` : '<span class="project-private">PRIVATE / INTERNAL</span>'}
      </div>
    </div>
  </article>
`).join('')

const workflowMarkup = workflow.map(([no, title, text]) => `
  <article class="process-row reveal">
    <span class="process-no">${no}</span>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>
`).join('')

const pricingMarkup = prices.map(([title, price], index) => `
  <article class="price-row reveal">
    <span>0${index + 1}</span>
    <h3>${title}</h3>
    <strong>${price}</strong>
    <a href="#contact" aria-label="Обсудить ${title}">${arrow}</a>
  </article>
`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="noise" aria-hidden="true"></div>

  <header class="site-header">
    <a class="brand" href="#home" aria-label="CRIS — на главную">
      <span class="brand-mark">✣</span>
      <span>CRIS.DEV</span>
    </a>

    <nav class="desktop-nav" aria-label="Навигация">
      <a href="#services">Услуги</a>
      <a href="#projects">Проекты</a>
      <a href="#process">Процесс</a>
      <a href="#pricing">Прайс</a>
    </nav>

    <div class="header-actions">
      <a class="header-login" href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      <a class="header-cta" href="#contact">Связаться</a>
      <button class="menu-btn" type="button" aria-label="Открыть меню" aria-expanded="false">
        <span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mobile-nav" aria-hidden="true">
    <nav>
      <a href="#services"><span>01</span>Услуги</a>
      <a href="#projects"><span>02</span>Проекты</a>
      <a href="#process"><span>03</span>Процесс</a>
      <a href="#pricing"><span>04</span>Прайс</a>
      <a href="#contact"><span>05</span>Контакты</a>
    </nav>
    <div class="mobile-nav-foot">
      <a href="${profile.telegram}" target="_blank" rel="noopener noreferrer">Telegram ↗</a>
      <a href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </div>
  </div>

  <main>
    <section class="hero" id="home">
      <div class="hero-stars" aria-hidden="true"></div>
      <div class="hero-horizon" aria-hidden="true"></div>

      <div class="hero-inner">
        <div class="hero-copy reveal">
          <p class="micro-label">САЙТЫ / TELEGRAM / WEB-СИСТЕМЫ · KAZAKHSTAN</p>
          <h1>
            <span>СОЗДАЮ</span>
            <span>ЦИФРОВЫЕ</span>
            <span class="outline-word">ПРОДУКТЫ.</span>
          </h1>
          <p class="hero-lead">Сайты, Telegram-боты и веб-системы — от идеи и интерфейса до backend, базы данных и полноценного запуска.</p>
          <div class="hero-actions">
            <a class="btn btn--accent" href="#contact">Обсудить проект ${arrow}</a>
            <a class="btn btn--plain" href="#projects">Смотреть работы</a>
          </div>
        </div>

        <aside class="hero-note reveal" aria-label="Краткое описание">
          <span>001 / PROFILE</span>
          <p>Независимый разработчик. Делаю интерфейсы и системы, которые должны не просто красиво выглядеть, а реально работать.</p>
        </aside>
      </div>

      <div class="hero-ticker" aria-hidden="true">
        <span>WEB DEVELOPMENT</span><i></i><span>TELEGRAM</span><i></i><span>BACKEND</span><i></i><span>UI / UX</span><i></i><span>DEPLOY</span>
      </div>
    </section>

    <section class="metric-strip" aria-label="Краткая статистика">
      <div class="metric reveal"><strong>05</strong><span>избранных проектов</span></div>
      <div class="metric reveal"><strong>100%</strong><span>адаптивные интерфейсы</span></div>
      <div class="metric reveal"><strong>01</strong><span>прямой контакт со мной</span></div>
      <div class="metric reveal"><strong>24/7</strong><span>доступность сайта</span></div>
    </section>

    <section class="section" id="services">
      <div class="section-top">
        <div>
          <span class="section-index">01 / УСЛУГИ</span>
          <h2>Что я <span>делаю.</span></h2>
        </div>
        <p>Собираю цифровые продукты под конкретную задачу — без лишнего функционала и одинакового шаблона для всех.</p>
      </div>
      <div class="services-grid">${servicesMarkup}</div>
    </section>

    <section class="section projects" id="projects">
      <div class="section-top">
        <div>
          <span class="section-index">02 / ПРОЕКТЫ</span>
          <h2>Выбранные <span>работы.</span></h2>
        </div>
        <p>Публичные demo-проекты и рабочие системы. Для открытых проектов можно перейти на живую версию прямо из карточки.</p>
      </div>
      <div class="projects-grid">${projectMarkup}</div>
    </section>

    <section class="statement section">
      <div class="statement-grid">
        <span class="section-index">03 / ПОДХОД</span>
        <blockquote class="reveal">Дизайн — это не украшение.<br><em>Это то, как работает продукт.</em></blockquote>
        <div class="statement-note reveal">
          <span>МОЁ ПРАВИЛО</span>
          <p>Сначала задача и структура. Потом визуальный стиль, адаптив, интерактивность и запуск.</p>
        </div>
      </div>
    </section>

    <section class="section process" id="process">
      <div class="section-top process-head">
        <div>
          <span class="section-index">04 / ПРОЦЕСС</span>
          <h2>Понятный <span>процесс.</span></h2>
        </div>
        <div class="process-payment">
          <span>ОПЛАТА</span>
          <strong>50 / 50</strong>
          <small>старт → релиз</small>
        </div>
      </div>
      <div class="process-list">${workflowMarkup}</div>
    </section>

    <section class="section pricing" id="pricing">
      <div class="section-top">
        <div>
          <span class="section-index">05 / ПРАЙС</span>
          <h2>Стартовая <span>стоимость.</span></h2>
        </div>
        <p>Точная стоимость зависит от объёма проекта. До начала разработки фиксируем, что входит в работу.</p>
      </div>
      <div class="price-list">${pricingMarkup}</div>
      <div class="pricing-note reveal">
        <span>NOTE</span>
        <p>Домен, платные внешние сервисы и дополнительные функции вне первоначального ТЗ оплачиваются отдельно.</p>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="contact-grid">
        <div class="contact-copy reveal">
          <span class="section-index section-index--light">06 / КОНТАКТЫ</span>
          <h2>Есть проект?<br><span>Давайте соберём.</span></h2>
          <p>Опишите задачу в Telegram или WhatsApp. Я скажу, что можно сделать, какие данные нужны и с чего лучше начать.</p>
        </div>

        <div class="contact-links reveal">
          <a href="${profile.telegram}" target="_blank" rel="noopener noreferrer">
            <span>Telegram</span><small>@tonzun</small>${arrow}
          </a>
          <a href="${profile.whatsapp}" target="_blank" rel="noopener noreferrer">
            <span>WhatsApp</span><small>${profile.whatsappDisplay}</small>${arrow}
          </a>
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span><small>PetlyaBEA</small>${arrow}
          </a>
        </div>
      </div>
      <div class="contact-marquee" aria-hidden="true">
        <span>ОТКРЫТ ДЛЯ НОВЫХ ПРОЕКТОВ · ОТКРЫТ ДЛЯ НОВЫХ ПРОЕКТОВ · ОТКРЫТ ДЛЯ НОВЫХ ПРОЕКТОВ ·</span>
      </div>
    </section>
  </main>

  <footer class="footer">
    <a class="brand" href="#home"><span class="brand-mark">✣</span><span>CRIS.DEV</span></a>
    <p>© <span id="year"></span> CRIS. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
    <a href="#home">НАВЕРХ ↑</a>
  </footer>
`

const menuButton = document.querySelector<HTMLButtonElement>('.menu-btn')
const mobileNav = document.querySelector<HTMLElement>('.mobile-nav')

function closeMenu() {
  menuButton?.classList.remove('open')
  mobileNav?.classList.remove('open')
  document.body.classList.remove('menu-open')
  menuButton?.setAttribute('aria-expanded', 'false')
  menuButton?.setAttribute('aria-label', 'Открыть меню')
  mobileNav?.setAttribute('aria-hidden', 'true')
}

function toggleMenu() {
  const willOpen = !mobileNav?.classList.contains('open')
  mobileNav?.classList.toggle('open', willOpen)
  menuButton?.classList.toggle('open', willOpen)
  document.body.classList.toggle('menu-open', willOpen)
  menuButton?.setAttribute('aria-expanded', String(willOpen))
  menuButton?.setAttribute('aria-label', willOpen ? 'Закрыть меню' : 'Открыть меню')
  mobileNav?.setAttribute('aria-hidden', String(!willOpen))
}

menuButton?.addEventListener('click', toggleMenu)
mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu()
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) closeMenu()
})

const revealElements = document.querySelectorAll<HTMLElement>('.reveal')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' })

  revealElements.forEach((element) => observer.observe(element))
} else {
  revealElements.forEach((element) => element.classList.add('visible'))
}

const year = document.querySelector<HTMLElement>('#year')
if (year) year.textContent = String(new Date().getFullYear())
