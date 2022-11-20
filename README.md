# Rick and Morty React App

![66133](https://user-images.githubusercontent.com/79591409/202893691-f85679af-0935-4de8-b4d4-5677cfde574f.jpg)

## Требования к функциональности

### React

- Пишем функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты. [ButtonPrimary](./src/components/UI/ButtonPrimary), [ErrorMessage](./src/components/UI/ErrorMessage/ErrorMessage.jsx), [Spinner](./src/components/UI/Spinner/Spinner.jsx), [SearchBar](./src/components/SearchBar/SearchBar.jsx), [Pagination](./src/components/Pagination/Pagination.jsx)
- Есть рендеринг списков [CardsList](./src/components/Cards/CardsList/CardsList.jsx), [FavoritesPage](./src/pages/FavoritesPage/FavoritesPage.jsx),[HistoryPage](./src/pages/HistoryPage/HistoryPage.jsx)
- Реализована хотя бы одна форма [AuthForm](./src/components/AuthForm/AuthForm.jsx)
- Есть применение Контекст API [ThemeContext](./src/context/ThemeContext.js)
- Есть применение предохранителя [ErrorBoundary](./src/components/ErrorBoundary.jsx)
- Есть хотя бы один кастомный хук [hooks](./src/hooks)
- Хотя бы несколько компонентов используют PropTypes [ErrorBoundary](./src/components/ErrorBoundary.jsx), [ErrorMessage](./src/components/UI/ErrorMessage/ErrorMessage.jsx)
- Поиск не должен триггерить много запросов к серверу: реализовано с помощью библиотеки react-debounce-input в компоненте [SearchBar](./src/components/SearchBar/SearchBar.jsx)
- Есть применение lazy + Suspense: [App](./src/App.js)

### Redux

- Используем Modern Redux with Redux Toolkit: [store](./src/store/index.js)
- Используем слайсы [authSlice](./src/store/authSlice.js), [heroesApiSlice](./src/store/heroesApiSlice.js), [userSlice](./src/store/userSlice.js)
- Есть хотя бы одна кастомная мидлвара [logger](./src/store/middlewares/logger.js)
- Используется RTK Query [heroesApiSlice](./src/store/heroesApiSlice.js)
- Используется Transforming Responses [heroesApiSlice](./src/store/heroesApiSlice.js)
