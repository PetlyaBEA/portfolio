# Обновление портфолио — Прайс + единый стиль

Что добавлено:
- вкладка «Прайс» в навигацию;
- 7 услуг с ценами;
- адаптивные карточки в тёмном cyan/teal стиле;
- отдельный CTA «Интересует покупка?»;
- модальное окно с объяснением, что дизайн проекта подбирается под клиента;
- WhatsApp и Telegram в модальном окне;
- иллюстрация/референс стилей;
- визуальный стиль старых разделов подтянут под новый прайс;
- GitHub Pages base: `/portfolio/`.

После замены файлов:
```powershell
npm install
npm run dev
```

Для публикации:
```powershell
npm run build
git add .
git commit -m "Add pricing and client design flow"
git push
```

GitHub Pages должен использовать Source: GitHub Actions.
