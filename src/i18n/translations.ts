export const translations = {
  ru: {
    // Meta
    'meta.title': 'Михаил\u00A0Виноградов\u00A0— фотограф, видеомейкер, турист',
    'meta.description': 'Михаил\u00A0Виноградов\u00A0— фотограф, видеомейкер, турист. Travel photo, пейзажная фотография, работа с\u00A0видео.',

    // Tile 1: Avatar
    'tile1.name': 'Михаил Виноградов',
    'tile1.tagline': 'Фотография как часть жизни.',
    'tile1.avatarAlt': 'Михаил\u00A0Виноградов\u00A0— фотограф и\u00A0путешественник',

    // Tile 2: Travel Photo
    'tile2.title': 'Travel photo',
    'tile2.description': 'Для хороших фотографий можно организовать и\u00A0небольшую экспедицию. Есть опыт походов, опыт организации походов и\u00A0разведок. С\u00A0собой всегда всё необходимое оборудование и\u00A0снаряжение.',
    'tile2.imgAlt': 'Горный пейзаж — travel-фотография',
    'tile2.cta': 'Подробнее',

    // Tile 3: Landscape Photography
    'tile3.title': 'Пейзажная фотография, портрет, репортажная съемка',
    'tile3.description': 'Работа на\u00A0результат, работа с\u00A0моделью, с\u00A0поиском необходимых локаций\u00A0— даже если для этого нужно пройти немного больше, чем задумывали.',
    'tile3.imgAlt': 'Пейзажная фотография — съёмка на природе',
    'tile3.cta': 'Подробнее',

    // Tile 4: Video
    'tile4.title': 'Работа с видео',
    'tile4.description': 'Съемка видео. Написание сценария. Работа со\u00A0звуком. «Покрас» видео. Обработка в\u00A0Adobe Premier. Несложный motion-desing в\u00A0Adobe After Effects.',
    'tile4.imgAlt': 'Работа с видео — аэросъёмка',
    'tile4.cta': 'Подробнее',

    // Tile 5: Contact
    'tile5.label': 'Всегда на связи:',

    // Travel Photo page
    'travelPhoto.title': 'Travel photo',
    'travelPhoto.meta.title': 'Travel photo — Михаил Виноградов',
    'travelPhoto.meta.description': 'Travel-фотографии Михаила Виноградова. Горы, походы, экспедиции\u00A0— фотографии из\u00A0путешествий.',
    'travelPhoto.back': 'На главную',

    // Other Photos page
    'otherPhotos.title': 'Пейзажная фотография, портрет, репортажная съемка',
    'otherPhotos.meta.title': 'Пейзажная фотография — Михаил Виноградов',
    'otherPhotos.meta.description': 'Пейзажная фотография, портрет, репортажная съемка. Работа на\u00A0результат, поиск необходимых локаций.',
    'otherPhotos.back': 'На главную',

    // Video page
    'video.title': 'Работа с видео',
    'video.meta.title': 'Работа с видео — Михаил Виноградов',
    'video.meta.description': 'Видеопроизводство Михаила Виноградова. Съёмка, сценарий, монтаж, цветокоррекция, motion-design.',
    'video.back': 'На главную',

    // Footer
    'footer.copyright': '©\u00A0{year} Михаил\u00A0Виноградов',
  },

  en: {
    // Meta
    'meta.title': 'Mikhail\u00A0Vinogradov\u00A0— Photographer, Videomaker, Traveler',
    'meta.description': 'Mikhail\u00A0Vinogradov\u00A0— photographer, videomaker, traveler. Travel photo, landscape photography, video production.',

    // Tile 1: Avatar
    'tile1.name': 'Mikhail Vinogradov',
    'tile1.tagline': 'Photography as a way of life.',
    'tile1.avatarAlt': 'Mikhail\u00A0Vinogradov\u00A0— photographer and traveler',

    // Tile 2: Travel Photo
    'tile2.title': 'Travel photo',
    'tile2.description': 'Great photos are worth a small expedition. Experienced in hiking, organizing trips and scouting locations. Always equipped with all the necessary gear.',
    'tile2.imgAlt': 'Mountain landscape — travel photography',
    'tile2.cta': 'Portfolio',

    // Tile 3: Landscape Photography
    'tile3.title': 'Landscape photography, portrait, reportage',
    'tile3.description': 'Focused on results, working with models and finding the perfect locations — even if it means going a little further than planned.',
    'tile3.imgAlt': 'Landscape photography — outdoor shooting',
    'tile3.cta': 'Portfolio',

    // Tile 4: Video
    'tile4.title': 'Video production',
    'tile4.description': 'Video shooting. Scriptwriting. Sound design. Color grading. Editing in Adobe Premiere. Basic motion design in Adobe After Effects.',
    'tile4.imgAlt': 'Video production — aerial filming',
    'tile4.cta': 'Portfolio',

    // Tile 5: Contact
    'tile5.label': 'Get in touch:',

    // Travel Photo page
    'travelPhoto.title': 'Travel photo',
    'travelPhoto.meta.title': 'Travel photo\u00A0— Mikhail\u00A0Vinogradov',
    'travelPhoto.meta.description': 'Travel photography by Mikhail\u00A0Vinogradov. Mountains, hiking, expeditions\u00A0— photos from travels.',
    'travelPhoto.back': 'Back to home',

    // Other Photos page
    'otherPhotos.title': 'Landscape photography, portrait, reportage',
    'otherPhotos.meta.title': 'Landscape photography\u00A0— Mikhail\u00A0Vinogradov',
    'otherPhotos.meta.description': 'Landscape photography, portrait, reportage by Mikhail\u00A0Vinogradov. Focused on results, finding perfect locations.',
    'otherPhotos.back': 'Back to home',

    // Video page
    'video.title': 'Video production',
    'video.meta.title': 'Video production\u00A0— Mikhail\u00A0Vinogradov',
    'video.meta.description': 'Video production by Mikhail\u00A0Vinogradov. Shooting, scriptwriting, editing, color grading, motion design.',
    'video.back': 'Back to home',

    // Footer
    'footer.copyright': '©\u00A0{year} Mikhail\u00A0Vinogradov',
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations['ru'];
