import './style.css'

const profile = {
  github: 'https://github.com/PetlyaBEA',
  telegram: 'tg://user?id=8707501473',
  whatsapp: 'https://wa.me/77023622988',
  whatsappDisplay: '+7 702 362 29 88',
}

const services = [
  { icon: '▣', title: 'Простой сайт', price: '25 000 ₸', text: 'Лендинг или сайт-визитка для бизнеса.', features: ['Адаптивный дизайн', 'Информация об услугах', 'Контакты и формы', 'Базовая SEO-настройка'] },
  { icon: '▤', title: 'Бизнес-сайт', price: '50 000 ₸', text: 'Более крупный сайт с логикой и интеграциями.', features: ['Несколько разделов', 'Формы и заявки', 'Интеграции', 'Расширенная структура'] },
  { icon: '⬡', title: 'Полная веб-система', price: '90 000 ₸', text: 'Система с backend, БД и рабочими кабинетами.', features: ['Frontend + Backend', 'API и база данных', 'Роли и доступы', 'Админ-панель при необходимости'] },
  { icon: '➤', title: 'Telegram-бот', price: '30 000 ₸', text: 'Автоматизация процессов внутри Telegram.', features: ['Команды и меню', 'Заявки и уведомления', 'Роли и права', 'База данных'] },
  { icon: '◇', title: 'Telegram Mini App', price: '50 000 ₸', text: 'Полноценный интерфейс прямо внутри Telegram.', features: ['Web App интерфейс', 'Telegram-авторизация', 'API и профиль', 'Интеграция с ботом'] },
]

const projects = [
  { type: 'Telegram + Web', title: 'JAS Volunteers', text: 'Система для волонтёрской организации: бот, роли, часы, мероприятия, модерация и рабочие процессы.', tags: ['Python', 'aiogram', 'SQLite'] },
  { type: 'Mini App', title: 'JAS ID', text: 'Telegram Mini App с авторизацией, цифровым профилем, рейтингом, QR, командами и API.', tags: ['React', 'Flask', 'API'] },
  { type: 'Web', title: 'Portfolio', text: 'Этот сайт-портфолио: TypeScript, Vite, адаптивная верстка и автоматический деплой через GitHub Pages.', tags: ['TypeScript', 'Vite', 'GitHub'] },
]

const reasons = [
  ['01', 'Прямое общение', 'Вы общаетесь сразу с разработчиком. Без менеджеров, лишних согласований и потери смысла задачи.'],
  ['02', 'Дизайн под ваш бизнес', 'Не копирую один шаблон всем подряд. Стиль подбирается под нишу, аудиторию и ваши референсы.'],
  ['03', 'Можно начать с малого', 'Не обязательно сразу заказывать большую систему. Можно запустить первую версию и развивать её дальше.'],
  ['04', 'Делаю проект целиком', 'Интерфейс, backend, база данных, публикация, домен и сервер — всё можно закрыть в одном месте.'],
  ['05', 'Адаптивность', 'Проект сразу проектируется так, чтобы им было удобно пользоваться и с компьютера, и с телефона.'],
  ['06', 'Не пропадаю после запуска', 'После публикации можно отдельно заказать поддержку, исправления и дальнейшее развитие проекта.'],
]

const workflow = [
  ['01', 'Обсуждение', 'Вы рассказываете задачу, цель проекта и показываете примеры, которые вам нравятся.'],
  ['02', 'План и стоимость', 'Фиксируем функционал, сроки, итоговую цену и то, что должно быть в готовом проекте.'],
  ['03', '50% предоплата', 'После согласования условий начинается разработка.'],
  ['04', 'Разработка', 'Собираю проект и показываю промежуточный или готовый результат.'],
  ['05', 'Согласованные правки', 'Исправляем то, что входит в первоначально согласованную задачу.'],
  ['06', 'Оставшиеся 50%', 'После готовности проекта оплачивается вторая половина суммы.'],
  ['07', 'Запуск', 'Публикую проект, подключаю необходимые сервисы и передаю готовый результат.'],
]

const included = [
  { title: 'Для сайта', items: ['Дизайн и структура', 'Адаптив под телефон', 'Верстка страниц', 'Формы и кнопки', 'Подключение контактов', 'Базовая SEO-настройка', 'Публикация сайта'] },
  { title: 'Для системы', items: ['Frontend', 'Backend / REST API', 'SQLite или PostgreSQL', 'Роли и доступы', 'Админ-панель — если нужна', 'Настройка сервера', 'Базовая защита и проверка доступа'] },
]

const stack = ['Python', 'JavaScript', 'TypeScript', 'React', 'Flask', 'REST API', 'SQLite', 'PostgreSQL', 'Git', 'Linux', 'Nginx', 'Vite']

const svg = (d: string) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`
const arrow = svg('M5 12h14M13 6l6 6-6 6')
const send = svg('m3 11 18-8-8 18-2-7-8-3Zm8 3 10-11')

const serviceCards = services.map((s) => `
  <article class="price-card reveal">
    <div class="price-top"><span class="price-icon">${s.icon}</span><span class="price-eyebrow">Услуга</span></div>
    <h3>${s.title}</h3>
    <p>${s.text}</p>
    <div class="price-value"><small>от</small><strong>${s.price}</strong></div>
    <ul>${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <a class="card-link" href="#contact">Обсудить проект ${arrow}</a>
  </article>`).join('')

const projectCards = projects.map((p, index) => `
  <article class="project-card reveal">
    <div class="project-visual visual-${index + 1}">
      <div class="browser-shell"><div class="browser-dots"><i></i><i></i><i></i></div><div class="browser-grid"><span></span><span></span><span></span><b></b></div></div>
    </div>
    <div class="project-info">
      <span class="project-type">${p.type}</span>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  </article>`).join('')

const reasonCards = reasons.map(([num, title, text]) => `
  <article class="reason-card reveal"><span>${num}</span><h3>${title}</h3><p>${text}</p></article>`).join('')

const flowSteps = workflow.map(([num, title, text]) => `
  <article class="flow-step reveal"><div class="step-num">${num}</div><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')

const includedCards = included.map(section => `
  <article class="included-card reveal"><div class="included-head"><span>+</span><h3>${section.title}</h3></div><ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul></article>`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#home">CRIS<span>.</span></a>
    <nav class="desktop-nav">
      <a href="#about">Обо мне</a><a href="#projects">Проекты</a><a href="#advantages">Почему я</a><a href="#process">Процесс</a><a href="#pricing">Прайс</a><a href="#contact">Контакты</a>
    </nav>
    <a class="top-cta" href="#contact">Связаться ${arrow}</a>
    <button class="menu-button" aria-label="Открыть меню">☰</button>
  </header>
  <div class="mobile-menu" aria-hidden="true">
    <a href="#about">Обо мне</a><a href="#projects">Проекты</a><a href="#advantages">Почему я</a><a href="#process">Процесс</a><a href="#pricing">Прайс</a><a href="#contact">Контакты</a>
  </div>

  <main>
    <section class="hero section" id="home">
      <div class="hero-copy reveal">
        <div class="pill"><span></span> WEB · TELEGRAM · SYSTEMS</div>
        <h1>Создаю продукты,<br>которые <span>упрощают работу бизнеса.</span></h1>
        <p>Сайты, Telegram-боты и веб-системы — от идеи и интерфейса до backend, базы данных и запуска.</p>
        <div class="hero-actions"><a class="btn btn-primary" href="#projects">Посмотреть проекты ${arrow}</a><a class="btn btn-secondary" href="#contact">${send} Связаться</a></div>
        <div class="hero-proof"><div><b>Web</b><span>Сайты и системы</span></div><div><b>Telegram</b><span>Боты и Mini Apps</span></div><div><b>Full cycle</b><span>От идеи до запуска</span></div></div>
      </div>
      <div class="hero-product reveal" aria-hidden="true">
        <div class="product-glow"></div>
        <div class="dashboard-card dashboard-main"><div class="dash-head"><span>Project / dashboard</span><b>● online</b></div><div class="dash-title">Business system</div><div class="dash-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="dash-row"><span></span><span></span><span></span></div></div>
        <div class="dashboard-card dashboard-side"><span>API</span><strong>Connected</strong><i></i><i></i><i></i></div>
        <div class="dashboard-card dashboard-phone"><div class="phone-notch"></div><b>Telegram</b><span>Mini App</span><div class="phone-lines"><i></i><i></i><i></i></div></div>
        <div class="tech-chip chip-one">Python</div><div class="tech-chip chip-two">PostgreSQL</div><div class="tech-chip chip-three">React</div>
      </div>
    </section>

    <section class="section about" id="about">
      <div class="section-label">01 / ОБО МНЕ</div>
      <div class="about-layout">
        <div class="about-title reveal"><h2>Здравствуйте,<br>я разработчик.</h2></div>
        <div class="about-text reveal">
          <p>Создаю сайты, Telegram-ботов и веб-системы под реальные задачи бизнеса. Мне важно, чтобы проект был понятным для клиента, удобным для пользователя и не разваливался при первом же расширении.</p>
          <p>Работаю с интерфейсом, backend, API, базами данных и деплоем. Могу собрать как небольшой сайт, так и систему с ролями, админ-панелью и автоматизацией.</p>
          <div class="about-note"><span>Важно</span> Дизайн этого портфолио — мой личный стиль. Ваш проект может выглядеть совершенно иначе.</div>
        </div>
      </div>
      <div class="stack-strip reveal">${stack.map(s => `<span>${s}</span>`).join('')}</div>
    </section>

    <section class="section" id="projects">
      <div class="section-label">02 / ПРОЕКТЫ</div>
      <div class="section-head"><div><h2>Проекты</h2><p>Реальные продукты, где есть не только интерфейс, но и рабочая логика.</p></div><span class="section-index">03</span></div>
      <div class="projects-grid">${projectCards}</div>
    </section>

    <section class="section advantages" id="advantages">
      <div class="section-label">03 / ПОЧЕМУ СО МНОЙ</div>
      <div class="section-head"><div><h2>Не просто «сделать сайт».</h2><p>Я стараюсь закрыть задачу бизнеса целиком и не заставлять клиента разбираться в технических деталях.</p></div></div>
      <div class="reasons-grid">${reasonCards}</div>
    </section>

    <section class="section process" id="process">
      <div class="section-label">04 / КАК ПРОХОДИТ РАБОТА</div>
      <div class="process-layout">
        <div class="process-intro reveal"><h2>Понятный процесс.<br><span>Без сюрпризов по ходу работы.</span></h2><p>До начала разработки фиксируем, что именно делаем и сколько это стоит.</p><div class="payment-card"><small>Оплата</small><strong>50% / 50%</strong><span>Предоплата → готовый проект</span></div></div>
        <div class="flow-list">${flowSteps}</div>
      </div>
      <div class="scope-warning reveal"><b>Дополнительные функции</b><span>Всё, чего не было в первоначально согласованном ТЗ, оценивается отдельно до начала дополнительных работ.</span></div>
    </section>

    <section class="section included" id="included">
      <div class="section-label">05 / ЧТО ВХОДИТ В ПРОЕКТ</div>
      <div class="section-head"><div><h2>От интерфейса до запуска.</h2><p>Состав зависит от задачи, но базово проект может включать следующие работы.</p></div></div>
      <div class="included-grid">${includedCards}</div>
    </section>

    <section class="section pricing" id="pricing">
      <div class="section-label">06 / ПРАЙС</div>
      <div class="section-head"><div><h2>Стартовая стоимость</h2><p>Цена зависит от объёма, сроков и функционала. Поэтому для разработки указана стоимость «от».</p></div></div>
      <div class="pricing-grid">${serviceCards}</div>
      <div class="extras-grid">
        <article class="extra-card reveal"><span>.KZ</span><div><small>Домен .kz</small><strong>10 000 ₸</strong><p>Регистрация домена для проекта.</p></div></article>
        <article class="extra-card reveal"><span>↗</span><div><small>Установка / настройка</small><strong>3 000 ₸</strong><p>Публикация и базовая настройка проекта.</p></div></article>
        <article class="extra-card reveal"><span>∞</span><div><small>Сервер / поддержка</small><strong>по договорённости</strong><p>Зависит от проекта, нагрузки и объёма работ.</p></div></article>
      </div>
      <div class="pricing-note reveal"><span>Точная стоимость</span><p>Сначала обсуждаем задачу и только потом фиксируем итоговую цену. Так вы заранее понимаете, за что платите.</p><a class="btn btn-primary" href="#contact">Получить оценку ${arrow}</a></div>
    </section>

    <section class="section style-choice">
      <div class="style-panel reveal">
        <div><div class="section-label">ВАШ ПРОЕКТ — ВАШ СТИЛЬ</div><h2>Это портфолио выглядит так, как нравится мне.<br><span>Ваш сайт не обязан выглядеть так же.</span></h2><p>Можно сделать светлый, минималистичный, корпоративный, premium или совершенно другой дизайн. Вы можете прислать свои референсы — либо я покажу несколько направлений перед началом работы.</p></div>
        <div class="style-tags"><span>Minimal</span><span>Light</span><span>Premium</span><span>Corporate</span><span>Bold</span><span>Ваш референс</span></div>
        <button class="btn btn-secondary" id="open-style-modal">Посмотреть, как это работает ${arrow}</button>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="contact-panel reveal">
        <div><div class="section-label">07 / КОНТАКТЫ</div><h2>Есть задача?<br><span>Давайте обсудим.</span></h2><p>Опишите, что нужно сделать. Я задам необходимые вопросы и скажу, какой вариант реализации подойдёт.</p></div>
        <div class="contact-actions"><a class="contact-primary" href="${profile.whatsapp}" target="_blank" rel="noreferrer">WhatsApp <small>${profile.whatsappDisplay}</small>${arrow}</a><a href="${profile.telegram}">Telegram ${arrow}</a><a href="${profile.github}" target="_blank" rel="noreferrer">GitHub / PetlyaBEA ${arrow}</a></div>
      </div>
    </section>
  </main>

  <footer><a class="brand" href="#home">CRIS<span>.</span></a><span>© 2026 · Разработка сайтов, Telegram-ботов и веб-систем</span></footer>

  <div class="modal" id="style-modal" aria-hidden="true">
    <div class="modal-card">
      <button class="modal-close" aria-label="Закрыть">×</button>
      <div class="section-label">ДИЗАЙН ПОД ВАС</div>
      <h2>Сначала выбираем направление.</h2>
      <p>Вы можете прислать сайты, которые вам нравятся, фирменные цвета, логотип или просто описать желаемое настроение. Если референсов нет — я могу показать несколько разных вариантов и вместе выберем направление.</p>
      <div class="modal-styles"><span>Светлый</span><span>Минимализм</span><span>Premium</span><span>Корпоративный</span><span>Яркий</span><span>Ваш вариант</span></div>
      <p class="modal-note">То есть покупая разработку у меня, вы не покупаете копию этого портфолио. Внешний вид создаётся под конкретный бизнес.</p>
      <div class="modal-actions"><a class="btn btn-primary" href="${profile.whatsapp}" target="_blank" rel="noreferrer">Написать в WhatsApp</a><a class="btn btn-secondary" href="${profile.telegram}">Telegram</a></div>
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
document.querySelector('.modal-close')?.addEventListener('click', closeModal)
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal() })
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal() })

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible')
}), { threshold: .1 })
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
