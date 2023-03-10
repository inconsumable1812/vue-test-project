# Тестовое задание на позицию frontend-vue-js-разработчик

# Задание

1. Необходимо разделить содержимое компонента `ContentBlock` на отдельные компоненты для фильтров и списка пользователей (допускается использование своей вёрстки).
2. Добавить в структуру данных списка пользователей `users` недостающие для фильтрации параметры, и предусмотреть возможность его динамической загрузки из внешнего `.json API`
3. Реализовать фильтрацию универсально, используя _Vuex_ (или другое хранилище состояний) так, что бы состояние фильтров было доступно другим компонентам.
4. (_опционально_) Добавить визуальное обозначение процесса фильтрации (**preloader**).
5. Добавить в структуру данных пользователя информацию об адресе проживания и выводить её при клике на портрет.
6. (_опционально_) Сопроводить процесс фильтрации "интересным" визуальным переходом (`transitions`).

# Что выполнено
- Все пункты задания
- Переписал проект на Vue 3 + TypeScript
- В качестве хранилища состояний использоавл [Pinia](https://pinia.vuejs.org/)

## Установка проекта

```
npm install
```

### Компиляция и hot-reloads для разработки

```
npm run serve
```
