/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronsDown, X } from 'lucide-react';

export default function App() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const triggerAction = () => {
    // Вызываем глобальную функцию редиректа в Telegram и отправки события Пикселя из index.html
    if (typeof (window as any).handleAction === 'function') {
      (window as any).handleAction();
    }
  };

  return (
    <div className="min-h-screen bg-[#0A26C4] font-sans text-white relative overflow-x-hidden flex flex-col">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      ></div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex flex-col justify-between min-h-screen">
        
        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto flex-grow z-20 min-h-[120vh] pb-[20vh]">
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-6 sm:mb-8 drop-shadow-2xl">
            <span className="text-[#D7FF00]">ПОЛУЧИТЬ</span><br />
            ГАЙД
          </h1>

          <div className="animate-bounce mt-8 mb-4 sm:mt-12 sm:mb-8 flex justify-center">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(215,255,0,0.15)]">
              <ChevronsDown className="w-8 h-8 sm:w-10 sm:h-10 text-[#D7FF00]" strokeWidth={2} />
            </div>
          </div>

          <button
            onClick={triggerAction}
            className="mt-4 sm:mt-8 w-full sm:w-auto bg-[#D7FF00] text-black font-extrabold text-lg sm:text-2xl uppercase tracking-tight px-6 py-5 sm:px-12 sm:py-6 rounded-full hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(215,255,0,0.4)]"
          >
            ПЕРЕЙТИ В TELEGRAM
          </button>
        </main>

        {/* Footer Section */}
        <section className="bg-white text-slate-900 rounded-t-[20px] sm:rounded-t-[40px] py-4 sm:py-6 px-4 sm:px-8 mt-auto relative z-20 w-full flex-shrink-0 border-t-8 border-[#D7FF00]">
          <div className="max-w-7xl mx-auto">
            
            {/* Strict Footer Requirements for Moderation */}
            <div className="text-center">
              <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 mb-3">
                <button onClick={() => setActiveModal('privacy')} className="text-slate-500 hover:text-[#0A26C4] font-semibold text-xs transition-colors">Политика конфиденциальности</button>
                <span className="text-slate-300 text-xs hidden sm:inline">|</span>
                <button onClick={() => setActiveModal('terms')} className="text-slate-500 hover:text-[#0A26C4] font-semibold text-xs transition-colors">Условия использования</button>
              </div>
              <div className="text-slate-400 text-[10px] max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-2">
                <p className="mb-2">© {new Date().getFullYear()} Onchain Analytics. Данный сайт носит исключительно образовательный характер.</p>
                <p className="uppercase tracking-widest opacity-80" style={{ fontSize: '9px' }}>
                  Disclaimer: This site is not a part of the TikTok website or TikTok Inc. 
                  Additionally, this site is NOT endorsed by TikTok in any way. 
                  TIKTOK is a trademark of TIKTOK, Inc.
                </p>
              </div>
            </div>
            
          </div>
        </section>

      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl relative">
            <div className="sticky top-0 bg-white border-b border-slate-100 p-4 flex justify-between items-center z-10 rounded-t-3xl text-slate-800">
              <h2 className="text-xl font-bold uppercase tracking-wide">
                {activeModal === 'privacy' && "Политика конфиденциальности"}
                {activeModal === 'terms' && "Условия использования"}
              </h2>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-800">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 text-slate-600 space-y-4 text-sm leading-relaxed">
              {activeModal === 'privacy' && (
                <div className="space-y-4">
                  <p className="font-semibold text-slate-800">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
                  <p>Настоящая Политика конфиденциальности (далее — «Политика») действует в отношении всей информации, которую данный веб-сайт («Сайт») может получить о пользователе во время использования Сайта и его сервисов. Использование Сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.</p>
                  
                  <h3 className="font-bold text-slate-800 mt-4">1. Сбор и обработка технической информации</h3>
                  <p>В целях обеспечения корректной работы Сайта, анализа пользовательского опыта и оптимизации рекламных кампаний мы автоматически собираем технические (неперсонифицированные) данные. К ним относятся:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>IP-адрес пользователя и геолокация на уровне страны/города;</li>
                    <li>Данные о браузере, версии операционной системы и типе устройства;</li>
                    <li>Сведения о взаимодействии с Сайтом (клики, время на странице, источники перехода);</li>
                    <li>Идентификаторы пользовательских сессий, сгенерированные рекламными платформами.</li>
                  </ul>

                  <h3 className="font-bold text-slate-800 mt-4">2. Использование файлов Cookie и Пикселей отслеживания</h3>
                  <p>На Сайте используются стандартные технологии отслеживания, включая аналитические счетчики и рекламные пиксели (в частности, TikTok Pixel, Google Analytics). Эти инструменты используют файлы Cookie (небольшие текстовые файлы, сохраняемые в браузере), чтобы собирать агрегированную и обезличенную статистику. Мы не используем эти данные для установления личности конкретного посетителя.</p>
                  <p>Вы можете в любой момент запретить сохранение файлов Cookie, изменив соответствующие настройки в вашем браузере. Однако это может повлиять на функциональность некоторых элементов Сайта.</p>

                  <h3 className="font-bold text-slate-800 mt-4">3. Цели сбора данных</h3>
                  <p>Собранная информация используется исключительно в следующих целях:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Предоставление доступа к запрашиваемым обучающим материалам;</li>
                    <li>Оценка эффективности маркетинговых и рекламных кампаний в социальных сетях (вкл. TikTok Ads);</li>
                    <li>Улучшение структуры и контента Сайта для повышения его удобства;</li>
                    <li>Обеспечение безопасности Сайта и предотвращение мошеннических действий.</li>
                  </ul>

                  <h3 className="font-bold text-slate-800 mt-4">4. Передача данных третьим лицам</h3>
                  <p>Мы строго соблюдаем конфиденциальность и <strong>не продаем, не обмениваем и не передаем</strong> ваши персональные данные внешним коммерческим организациям. Передача технических (анонимизированных) данных возможна только доверенным аналитическим партнерам, которые предоставляют нам услуги по обработке статистики, и только в рамках их собственных политик конфиденциальности (например, Политика конфиденциальности TikTok).</p>

                  <h3 className="font-bold text-slate-800 mt-4">5. Защита информации и Возрастные ограничения</h3>
                  <p>Мы применяем разумные административные, технические и физические меры безопасности для защиты собранной информации. Сайт не предназначен для использования лицами, не достигшими 18-летнего возраста. Мы сознательно не собираем данные несовершеннолетних.</p>

                  <h3 className="font-bold text-slate-800 mt-4">6. Согласие пользователя</h3>
                  <p>Посещая Сайт и взаимодействуя с его интерфейсом (включая нажатие на кнопки перехода по внешним ссылкам в мессенджеры), Пользователь подтверждает свое согласие с условиями данной Политики конфиденциальности.</p>
                </div>
              )}
              {activeModal === 'terms' && (
                <div className="space-y-4">
                  <p className="font-semibold text-slate-800">Договор публичной оферты и Условия использования</p>
                  <p>Настоящее Пользовательское соглашение (далее — «Соглашение») регламентирует отношения между Администрацией веб-сайта (далее — «Сайт») и любым лицом, посещающим Сайт (далее — «Пользователь»). Взаимодействие с любыми элементами Сайта означает полное согласие Пользователя с настоящими Условиями.</p>

                  <div className="p-4 bg-red-50 text-red-900 border border-red-200 rounded-xl my-4 text-xs">
                    <p className="font-bold uppercase tracking-wider mb-2">ВАЖНОЕ УВЕДОМЛЕНИЕ (ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ):</p>
                    <p>Администрация Сайта не является брокером, финансовым советником, инвестиционным фондом или дилером. Все материалы, тексты, аналитика и ссылки, представленные на данном Сайте и в связанном Telegram-канале, созданы <strong>ИСКЛЮЧИТЕЛЬНО В ОБРАЗОВАТЕЛЬНЫХ, ИНФОРМАЦИОННЫХ И ИССЛЕДОВАТЕЛЬСКИХ ЦЕЛЯХ</strong>. Настоящий Сайт не занимается приемом денежных средств, не предлагает услуги доверительного управления и не публикует призывов к покупке, продаже или удержанию каких-либо криптоактивов, ценных бумаг или деривативов.</p>
                  </div>

                  <h3 className="font-bold text-slate-800 mt-4">1. Предмет Соглашения</h3>
                  <p>Сайт предоставляет Пользователю доступ к бесплатным информационным материалам, посвященным анализу публичных данных блокчейна (ончейн-аналитика). Любые упоминания активов, кошельков или стратегий являются частным мнением автора и не должны восприниматься как руководство к действию.</p>

                  <h3 className="font-bold text-slate-800 mt-4">2. Принятие рисков (Криптовалюты)</h3>
                  <p>Пользователь настоящим подтверждает, что осознает фундаментальные риски, связанные с рынком криптовалют (цифровых активов):</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Высокая волатильность:</strong> Стоимость криптовалют может резко изменяться, вплоть до полной потери стоимости.</li>
                    <li><strong>Отсутствие гарантий:</strong> Прошлые результаты любых анализируемых блокчейн-кошельков не гарантируют аналогичных результатов в будущем.</li>
                    <li><strong>Технические и регуляторные риски:</strong> Риски взлома смартфонов/кошельков, потери приватных ключей и изменения законодательства.</li>
                  </ul>

                  <h3 className="font-bold text-slate-800 mt-4">3. Ограничение ответственности</h3>
                  <p>Сайт и его владельцы отказываются от любых прямых или подразумеваемых гарантий относительно точности, надежности и полноты предоставляемой информации. Пользователь несет единоличную, стопроцентную ответственность за любые убытки (включая упущенную выгоду), понесенные в результате использования информации, полученной с Сайта или из связанного Telegram-канала.</p>

                  <h3 className="font-bold text-slate-800 mt-4">4. Интеллектуальная собственность</h3>
                  <p>Все права на дизайн Сайта, текст и структуру принадлежат его создателям. Копирование материалов Сайта без письменного разрешения запрещено. Использование торговых марок третьих лиц (таких как Telegram, TikTok) носит исключительно номинальный характер для описания платформ.</p>

                  <h3 className="font-bold text-slate-800 mt-4">5. Внешние ссылки</h3>
                  <p>Сайт содержит гиперссылки на сторонние ресурсы (в частности, Telegram). Администрация не контролирует содержание таких ресурсов и не несет за них ответственности. Переходя по кнопке «ПЕРЕЙТИ В TELEGRAM», Пользователь соглашается с пользовательскими условиями самой платформы Telegram.</p>

                  <h3 className="font-bold text-slate-800 mt-4">6. Требования к возрасту</h3>
                  <p>Для использования Сайта и связанных материалов Пользователю должно быть не менее 18 лет, либо он должен достичь возраста совершеннолетия в своей юрисдикции.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
