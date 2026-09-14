const searchQueries = [
  'irwin casino',
  'irwin casino официальный',
  'irwin casino официальный сайт',
  'irwin casino зеркало',
  'ирвин казино',
  'ирвин казино официальный',
  'ирвин казино официальный сайт',
  'ирвин казино зеркало',
  'ирвин казино зеркало рабочее',
  'irwin casino играть',
  'ирвин казино онлайн',
  'irwin казино',
  'ирвин казино играть',
]

const benefits = [
  {
    number: '01',
    title: 'Понятная навигация',
    text: 'Главные разделы собраны в одном месте: от входа и регистрации до правил, бонусов и поддержки. Не нужно тратить время на поиск нужной страницы.',
  },
  {
    number: '02',
    title: 'Актуальный доступ',
    text: 'Если привычный адрес временно не открывается, используйте официальный канал проекта и проверяйте, что соединение защищено перед вводом данных.',
  },
  {
    number: '03',
    title: 'Игра с контролем',
    text: 'Воспринимайте казино как развлечение: заранее задавайте бюджет, не пытайтесь отыграться и делайте паузы. Доступно только совершеннолетним.',
  },
]

const faqs = [
  {
    question: 'Что такое Irwin Casino?',
    answer: 'Irwin Casino — онлайн-платформа с каталогом игровых автоматов, настольных игр и другими форматами развлечений. Перед началом рекомендуем ознакомиться с правилами, условиями бонусов и ограничениями по региону.',
  },
  {
    question: 'Где найти официальный сайт Irwin Casino?',
    answer: 'Переходите на сайт только по адресу из проверенного официального источника. Обращайте внимание на защищённое соединение, корректное написание домена и отсутствие подозрительных окон, которые запрашивают пароль или платёжные данные.',
  },
  {
    question: 'Что делать, если основной сайт не открывается?',
    answer: 'Сначала проверьте интернет-соединение и обновите страницу. Если проблема сохраняется, воспользуйтесь официальным зеркалом, указанным службой поддержки или верифицированными каналами бренда. Не доверяйте случайным ссылкам из комментариев и рекламы.',
  },
  {
    question: 'Можно ли играть с телефона?',
    answer: 'Да, современный интерфейс адаптирован для смартфонов и планшетов. Перед регистрацией проверьте системные требования, разрешённые способы оплаты и доступность сервиса в вашем регионе.',
  },
  {
    question: 'Как играть ответственно?',
    answer: 'Определите лимит расходов и времени до начала сессии, не используйте заёмные деньги, не играйте в состоянии стресса или усталости. Если контроль становится сложным, остановитесь и обратитесь за помощью к профильным организациям.',
  },
]

export default function Page() {
  return (
    <main className="irwin-page">
      <header className="irwin-header">
        <div className="irwin-shell irwin-header-inner">
          <a className="irwin-brand" href="#top" aria-label="Irwin Casino — на главную">
            <span className="irwin-brand-mark" aria-hidden="true">I</span>
            <span><strong>IRWIN</strong><small>CASINO</small></span>
          </a>
          <nav className="irwin-nav" aria-label="Основная навигация">
            <a href="#about">О платформе</a>
            <a href="#games">Игры</a>
            <a href="#faq">FAQ</a>
            <a href="#responsible">Ответственная игра</a>
          </nav>
          <a className="irwin-header-cta" href="#start">Перейти на сайт <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className="irwin-hero" id="top">
        <div className="irwin-shell irwin-hero-grid">
          <div className="irwin-hero-copy">
            <p className="irwin-eyebrow"><span className="irwin-status-dot" /> Онлайн-платформа развлечений</p>
            <h1>Irwin Casino — официальный сайт для игры онлайн</h1>
            <p className="irwin-lead">Всё, что нужно знать о входе, регистрации, зеркале и выборе игр. Разбираемся спокойно и по делу, чтобы доступ к платформе был понятным, а игровой процесс — безопасным и ответственным.</p>
            <div className="irwin-hero-actions" id="start">
              <a className="irwin-button irwin-button-primary" href="#guide">Открыть подробный гид <span aria-hidden="true">→</span></a>
              <a className="irwin-button irwin-button-quiet" href="#responsible">Правила ответственной игры</a>
            </div>
            <div className="irwin-hero-note"><span aria-hidden="true">✓</span> 18+ · Играйте только на средства, которые готовы потратить</div>
          </div>
          <div className="irwin-hero-art" aria-label="Премиальная карточка Irwin Casino">
            <div className="irwin-art-top"><span>EST. 2024</span><span>№ 01 / GUIDE</span></div>
            <div className="irwin-art-center"><span className="irwin-art-monogram">I</span><span className="irwin-art-label">IRWIN<br /><b>CASINO</b></span></div>
            <div className="irwin-art-bottom"><span>PLAY WITHIN LIMITS</span><span>18+</span></div>
          </div>
        </div>
      </section>

      <section className="irwin-query-strip" aria-label="Популярные запросы">
        <div className="irwin-shell irwin-query-inner"><span className="irwin-query-label">Ищут сейчас</span><div className="irwin-query-list">{searchQueries.slice(0, 6).map((query) => <span key={query}>{query}</span>)}</div></div>
      </section>

      <section className="irwin-section" id="about">
        <div className="irwin-shell">
          <div className="irwin-section-heading"><p className="irwin-kicker">Навигация без лишнего шума</p><h2>Официальный Irwin Casino: как найти нужную информацию</h2><p>Запросы «irwin casino официальный сайт», «ирвин казино официальный» и «irwin casino зеркало» появляются, когда пользователю важно быстро понять, где находится актуальный вход и как отличить его от копии. Ниже собрали базовые ориентиры, которые помогают проверять страницу до регистрации.</p></div>
          <div className="irwin-feature-grid">{benefits.map((benefit) => <article className="irwin-feature-card" key={benefit.number}><span className="irwin-feature-number">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
        </div>
      </section>

      <section className="irwin-section irwin-section-dark" id="guide">
        <div className="irwin-shell irwin-content-grid">
          <div className="irwin-sticky-label"><p className="irwin-kicker">Полный гид</p><h2>Irwin Casino официальный сайт</h2><span className="irwin-rule" /></div>
          <div className="irwin-prose"><p className="irwin-intro">Официальный сайт Irwin Casino — это отправная точка для знакомства с платформой. На корректной странице должны быть доступны понятные разделы, контакты поддержки, правила акций, возрастные ограничения и сведения о лицензировании или юрисдикции, если они заявлены оператором.</p><h3>Как проверить адрес перед входом</h3><p>В поиске встречаются варианты «irwin casino официальный», «irwin casino официальный сайт» и «ирвин казино официальный сайт». Само совпадение ключевых слов ещё не доказывает подлинность страницы. Проверьте адресную строку: домен должен быть написан без лишних символов, соединение — защищено, а сайт не должен перенаправлять на несколько неизвестных страниц подряд.</p><p>Не вводите логин, пароль, данные карты или код подтверждения на странице, которая пришла из случайного сообщения. Лучше открыть официальный канал бренда вручную, добавить адрес в закладки и использовать его при следующих посещениях. Это простая привычка, которая снижает риск попасть на фишинговую копию.</p><h3>Регистрация и личный кабинет</h3><p>Перед регистрацией ознакомьтесь с условиями использования и политикой конфиденциальности. Указывайте только достоверные данные, используйте уникальный пароль и не передавайте доступ третьим лицам. После создания аккаунта проверьте настройки безопасности, уведомления и доступные лимиты.</p><p>Если платформа предлагает бонус за регистрацию, внимательно прочитайте требования по отыгрышу, минимальному депозиту, срокам действия и максимальному выигрышу. Бонусные средства часто имеют отдельные правила и не являются гарантированным доходом.</p><h3>Что делать, если нужен вход через зеркало</h3><p>Поисковые запросы «irwin casino зеркало», «ирвин казино зеркало» и «ирвин казино зеркало рабочее» обычно означают, что основной адрес недоступен у конкретного интернет-провайдера или временно находится на техническом обслуживании. Рабочее зеркало должно быть опубликовано в официальной рассылке, личном кабинете, службе поддержки или другом проверенном канале.</p><p>Случайные списки зеркал в поисковой выдаче могут содержать устаревшие или небезопасные адреса. Проверяйте дату публикации, дизайн страницы, сертификат и совпадение условий с официальной платформой. Если есть сомнения, не авторизуйтесь и задайте вопрос поддержке.</p></div>
        </div>
      </section>

      <section className="irwin-section" id="games">
        <div className="irwin-shell irwin-games-layout"><div><p className="irwin-kicker">Каталог развлечений</p><h2>Irwin Casino онлайн: выбирайте формат осознанно</h2></div><div className="irwin-prose"><p>Запросы «irwin casino играть», «ирвин казино онлайн» и «ирвин казино играть» отражают интерес к каталогу. На платформе могут быть представлены слоты, настольные игры, live-форматы и промо-режимы — конкретный список зависит от региона и текущей версии сайта.</p><p>Перед запуском игры изучите её волатильность, правила, линию выплат и значение RTP, если эти параметры опубликованы. Ни один показатель не обещает конкретный результат: случайность остаётся частью механики. Выбирайте игру не по обещанию крупного выигрыша, а по понятности правил и комфортному лимиту ставки.</p><div className="irwin-game-notes"><div><span className="irwin-note-icon">A</span><h3>Автоматы</h3><p>Быстрые раунды и разнообразные темы. Установите лимит до начала сессии.</p></div><div><span className="irwin-note-icon">◆</span><h3>Столы</h3><p>Карточные и классические форматы, где важно заранее знать правила.</p></div><div><span className="irwin-note-icon">LIVE</span><h3>Live-игры</h3><p>Интерактивный формат с ведущими и дополнительными ограничениями.</p></div></div></div></div>
      </section>

      <section className="irwin-callout" id="responsible"><div className="irwin-shell irwin-callout-inner"><div><p className="irwin-kicker">Важное напоминание</p><h2>Игра — это отдых, а не способ решить финансовые вопросы</h2></div><div className="irwin-callout-copy"><p>Не увеличивайте ставку после проигрыша, не занимайте деньги для игры и не играйте, чтобы отыграться. Поставьте личные лимиты, отслеживайте время сессии и делайте паузы. Если игровой процесс перестаёт быть развлечением, остановитесь и обратитесь за профессиональной поддержкой.</p><a className="irwin-text-link" href="#faq">Читать ответы на частые вопросы <span aria-hidden="true">→</span></a></div></div></section>

      <section className="irwin-section irwin-faq" id="faq"><div className="irwin-shell irwin-faq-layout"><div><p className="irwin-kicker">Есть вопрос?</p><h2>FAQ об Irwin Casino</h2><p className="irwin-muted">Коротко отвечаем на основные вопросы об официальном сайте, зеркале, мобильном доступе и безопасной игре.</p></div><div className="irwin-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <footer className="irwin-footer"><div className="irwin-shell"><div className="irwin-footer-top"><a className="irwin-brand" href="#top"><span className="irwin-brand-mark" aria-hidden="true">I</span><span><strong>IRWIN</strong><small>CASINO</small></span></a><p>Информационный гид об онлайн-платформе.<br />18+ · Играйте ответственно.</p><a className="irwin-footer-cta" href="#start">К началу <span aria-hidden="true">↑</span></a></div><div className="irwin-footer-bottom"><p>© 2024–2026 Irwin Casino Guide</p><div className="irwin-hashtags" aria-label="Поисковые хештеги"><span>#irwincasino</span><span>#ирвинказино</span><span>#официальныйсайт</span><span>#казиноонлайн</span></div></div></div></footer>
    </main>
  )
}
