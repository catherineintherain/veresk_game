const fallbackTasks = {
  happy: {
    label: "Радостное",
    emoji: "😄",
    subtitle: "игривое и светлое",
    locations: {
      home: {
        label: "Дома",
        emoji: "🏠",
        description: "комната, кухня, двор",
        tasks: [
          { text: "Найди 5 предметов круглой формы в своей комнате.", hint: "Посмотри на посуду и игрушки." },
          { text: "Запиши 3 смешных звука вокруг себя и придумай им названия.", hint: "Слушай звуки дома." },
          { text: "Найди 3 предмета, которые блестят.", hint: "Посмотри на свету." }
        ]
      },
      walk: {
        label: "На прогулке",
        emoji: "🌳",
        description: "улица, парк, двор",
        tasks: [
          { text: "Найди 5 предметов желтого цвета на улице.", hint: "Посмотри на машины и цветы." },
          { text: "Найди 3 предмета, которые качаются или шевелятся от ветра.", hint: "Листья, пакеты и флажки тоже считаются." },
          { text: "Найди 5 разных следов человека на улице.", hint: "Обувь, колеса, рисунки, мусор, мел." }
        ]
      },
      museum: {
        label: "В музее",
        emoji: "🏛️",
        description: "картины, залы, экспонаты",
        tasks: [
          { text: "Найди 5 деталей на одном экспонате, которые сначала не заметны.", hint: "Смотри на края, фон и мелочи." },
          { text: "Придумай разговор между двумя картинами или статуями.", hint: "О чем они спорят или шутят?" }
        ]
      }
    }
  },
  calm: {
    label: "Спокойное",
    emoji: "😌",
    subtitle: "тихое и внимательное",
    locations: {
      home: {
        label: "Дома",
        emoji: "🏠",
        description: "медленное и уютное наблюдение",
        tasks: [
          { text: "Найди все предметы треугольной формы в доме.", hint: "Посмотри по полочкам и углам." },
          { text: "Найди 5 теней от разных предметов.", hint: "Посмотри возле окна или лампы." },
          { text: "Заметь, какие 3 вещи в комнате самые мягкие на вид.", hint: "Даже если ты их не трогаешь." }
        ]
      },
      walk: {
        label: "На прогулке",
        emoji: "🌳",
        description: "звук, свет, фактуры",
        tasks: [
          { text: "Посчитай, сколько разных звуков ты слышишь за одну минуту.", hint: "Не перебивай их, просто замечай." },
          { text: "Найди 3 места, где природа встречается с городом.", hint: "Например, дерево рядом со стеной." },
          { text: "Выбери дерево и придумай ему характер.", hint: "Оно строгое, веселое, сонное или гордое?" }
        ]
      },
      museum: {
        label: "В музее",
        emoji: "🏛️",
        description: "детали, формы, названия",
        tasks: [
          { text: "Выбери одну картину и расскажи о ней 5 деталей, которые никто не заметит.", hint: "Смотри очень внимательно." },
          { text: "Выбери один экспонат и найди в нем 3 формы и 3 цвета.", hint: "Смотри как исследователь." },
          { text: "Придумай новое название для картины или предмета.", hint: "Пусть оно будет точным и красивым." }
        ]
      }
    }
  },
  sad: {
    label: "Грустное",
    emoji: "😢",
    subtitle: "бережное и мягкое",
    locations: {
      home: {
        label: "Дома",
        emoji: "🏠",
        description: "тихо, бережно, поддерживающе",
        tasks: [
          { text: "Запиши мелодию, которая звучит у тебя в голове, и воспроизведи ее голосом.", hint: "Слушай тишину дома." },
          { text: "Найди 5 спокойных цветов вокруг себя.", hint: "Ищи мягкие, тихие оттенки." },
          { text: "Придумай маленькое доброе существо, которое живет на книжной полке.", hint: "Как его зовут и что оно охраняет?" }
        ]
      },
      walk: {
        label: "На прогулке",
        emoji: "🌳",
        description: "мягкие цвета и спокойные детали",
        tasks: [
          { text: "Найди 5 спокойных деталей природы, которые никто не торопит.", hint: "Лист, ветка, облако, камень, лужа." },
          { text: "Придумай короткое доброе имя для ветра сегодня.", hint: "Какой он именно сейчас?" },
          { text: "Заметь 3 цвета, которые делают улицу мягче.", hint: "Ищи неяркие оттенки." }
        ]
      },
      museum: {
        label: "В музее",
        emoji: "🏛️",
        description: "спокойный вариант без спешки",
        tasks: [
          { text: "Выбери один тихий экспонат и найди в нем 3 детали, которые успокаивают.", hint: "Смотри на цвет, линии и фактуру." },
          { text: "Придумай короткую теплую фразу, которую могла бы сказать картина или статуя.", hint: "Одной фразы достаточно." }
        ]
      }
    }
  },
  wow: {
    label: "Взволнованное",
    emoji: "😮",
    subtitle: "любопытное и исследовательское",
    locations: {
      home: {
        label: "Дома",
        emoji: "🏠",
        description: "изобретать и замечать странности",
        tasks: [
          { text: "Найди 5 предметов, о назначении которых ты мог бы придумать неправильную, но смешную версию.", hint: "Сначала внимательно их рассмотри." },
          { text: "Выбери бытовой предмет и придумай для него улучшение будущего.", hint: "Что бы в нем добавил изобретатель?" },
          { text: "Заметь, какие предметы дома чаще всего стоят парами.", hint: "Ботинки, подушки, ложки, ищи внимательно." }
        ]
      },
      walk: {
        label: "На прогулке",
        emoji: "🌳",
        description: "искать подсказки и следы",
        tasks: [
          { text: "Найди 5 деталей, которые рассказывают о людях без самих людей.", hint: "Следы, вещи, объявления, рисунки." },
          { text: "Придумай новую игру для дорожной разметки, не наступая на определенные полосы.", hint: "Сделай правило и проверь его." },
          { text: "Заметь, какие линии чаще встречаются вокруг: прямые, волнистые или ломаные.", hint: "Посмотри на провода, ветки и тротуары." }
        ]
      },
      museum: {
        label: "В музее",
        emoji: "🏛️",
        description: "тайны старых предметов",
        tasks: [
          { text: "Найди следы времени на старом предмете.", hint: "Царапины, потертости, трещинки это подсказки." },
          { text: "Представь, что один экспонат оживает ночью. Что он делает первым делом?", hint: "Придумай короткую сцену." }
        ]
      }
    }
  }
};

const state = {
  tasks: fallbackTasks,
  moodKey: null,
  locationKey: null,
  taskIndex: 0
};

const screens = {
  moods: document.querySelector("#screen-moods"),
  locations: document.querySelector("#screen-locations"),
  task: document.querySelector("#screen-task")
};

const breadcrumb = document.querySelector("#breadcrumb");
const moodGrid = document.querySelector("#mood-grid");
const locationGrid = document.querySelector("#location-grid");
const locationsTitle = document.querySelector("#locations-title");
const taskMoodTag = document.querySelector("#task-mood-tag");
const taskLocationTag = document.querySelector("#task-location-tag");
const taskText = document.querySelector("#task-text");
const taskHint = document.querySelector("#task-hint");
const backButton = document.querySelector("#back-button");
const nextTaskButton = document.querySelector("#next-task-button");

init();

async function init() {
  state.tasks = await loadTasks();
  renderMoods();
  attachEvents();
  showScreen("moods");
}

async function loadTasks() {
  try {
    const response = await fetch("tasks.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn("Не удалось загрузить tasks.json, используется встроенный набор.", error);
    return fallbackTasks;
  }
}

function attachEvents() {
  backButton.addEventListener("click", handleBack);
  nextTaskButton.addEventListener("click", showNextTask);
}

function renderMoods() {
  moodGrid.innerHTML = "";

  Object.entries(state.tasks).forEach(([moodKey, mood]) => {
    const button = createCardButton({
      tone: moodKey,
      emoji: mood.emoji,
      title: mood.label,
      subtitle: mood.subtitle
    });

    button.addEventListener("click", () => {
      state.moodKey = moodKey;
      state.locationKey = null;
      renderLocations();
      showScreen("locations");
    });

    moodGrid.appendChild(button);
  });
}

function renderLocations() {
  const mood = state.tasks[state.moodKey];
  locationGrid.innerHTML = "";
  locationsTitle.textContent = `${mood.label}: выбери место`;

  Object.entries(mood.locations).forEach(([locationKey, location]) => {
    const button = createCardButton({
      tone: state.moodKey,
      emoji: location.emoji,
      title: location.label,
      subtitle: location.description
    });

    button.addEventListener("click", () => {
      state.locationKey = locationKey;
      state.taskIndex = randomTaskIndex(location.tasks.length);
      renderTask();
      showScreen("task");
    });

    locationGrid.appendChild(button);
  });
}

function renderTask() {
  const mood = state.tasks[state.moodKey];
  const location = mood.locations[state.locationKey];
  const task = location.tasks[state.taskIndex];

  taskMoodTag.textContent = `${mood.emoji} ${mood.label}`;
  taskLocationTag.textContent = `${location.emoji} ${location.label}`;
  taskText.textContent = task.text;
  taskHint.textContent = task.hint;
}

function createCardButton({ tone, emoji, title, subtitle }) {
  const button = document.createElement("button");
  button.className = "card-button";
  button.dataset.tone = tone;
  button.type = "button";
  button.innerHTML = `
    <span class="card-emoji">${emoji}</span>
    <span class="card-title">${title}</span>
    <span class="card-subtitle">${subtitle}</span>
  `;
  return button;
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, screen]) => {
    screen.classList.toggle("active", name === screenName);
  });

  const isLocations = screenName === "locations";
  const isTask = screenName === "task";

  backButton.classList.toggle("is-hidden", screenName === "moods");
  nextTaskButton.classList.toggle("is-hidden", !isTask);

  if (screenName === "moods") {
    breadcrumb.textContent = "Шаг 1. Выбери настроение";
  } else if (isLocations) {
    breadcrumb.textContent = "Шаг 2. Выбери место";
  } else if (isTask) {
    breadcrumb.textContent = "Шаг 3. Выполни задание";
  }
}

function handleBack() {
  if (screens.task.classList.contains("active")) {
    showScreen("locations");
    return;
  }

  showScreen("moods");
}

function showNextTask() {
  const tasks = state.tasks[state.moodKey].locations[state.locationKey].tasks;

  if (tasks.length < 2) {
    renderTask();
    return;
  }

  let nextIndex = state.taskIndex;
  while (nextIndex === state.taskIndex) {
    nextIndex = randomTaskIndex(tasks.length);
  }

  state.taskIndex = nextIndex;
  renderTask();
}

function randomTaskIndex(length) {
  return Math.floor(Math.random() * length);
}
