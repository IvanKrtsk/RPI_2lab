
import avatar1 from '../pictures/homepage/Santa_Barbara.jpg';
import photo1_1 from '../pictures/series/Santa_Barbara1.jpg'

import avatar2 from '../pictures/homepage/Sazdae.jpg'
import photo2_1 from '../pictures/homepage/Sazdae.jpg'
// import photo2_2 from './imgs/steveJobs/gallery2.jpg'
// import photo2_3 from './imgs/steveJobs/gallery3.jpg'

import avatar3 from '../pictures/homepage/Doctor_Who.jpg'
import photo3_1 from '../pictures/homepage/Doctor_Who.jpg'
// import photo3_2 from './imgs/gaben/gallery2.jpg'
// import photo3_3 from './imgs/gaben/gallery3.jpg'

import avatar4 from '../pictures/homepage/Simpsons.jpg'
import photo4_1 from '../pictures/homepage/Simpsons.jpg'
// import photo4_2 from './imgs/markZuckerberg/gallery2.jpg'
// import photo4_3 from './imgs/markZuckerberg/gallery3.jpg'

import avatar5 from '../pictures/homepage/Street_Sizam.jpg'
import photo5_1 from '../pictures/homepage/Street_Sizam.jpg'
// import photo5_2 from './imgs/billGates/gallery2.jpg'
// import photo5_3 from './imgs/billGates/gallery3.jpg'

import avatar6 from '../pictures/homepage/Track.jpg'
import photo6_1 from '../pictures/homepage/Track.jpg'


const seriesDatabase = [
    {
        id: 1,
        url: '/santa_barbara',
        full_name: 'Санта Барбара',
        life_dates: '1984 - 1993',
        main_photo: avatar1,
        timeline: [
            {
                id: 1,
                title: "Удивительно",
                description:
                    "В день супруги Добсон писали по 100 страниц сценария",
                icon: "job",
            },
            {
                id: 2,
                title: "Актёры",
                description:
                    "Сейчас об этом уже мало кто помнит, но именно Ди Каприо сыграл юного Мейсона в 1990 году.",
                icon: "job",
            },
            {
                id: 3,
                title: "Серии",
                description:
                    "Всего было снято 2137 серий, в США они демонстрировались с 1984 по 1993 годы.",
                icon: "job",
            },
            {
                id: 4,
                title: "«Санта-Барбара» снималась не в Санта-Барбаре",
                description:
                    "Весь сериал снимался в студии, площадью 1800 квадратных метров. " +
                    "Располагалась она в 140 километрах от настоящей Санта-Барбары. " +
                    "Адрес поместья Кэпвеллов упоминает улицу «Park Lane», но номер дома назван несуществующий.",
                icon: "job",
            },
            {
                id: 5,
                title: "Конец",
                description:
                    "15 января 1993 года в США показали последнюю серию «Санта-Барбары»." +
                    " В целом Добсоны заработали на сериале 30 000 000 долларов",
                icon: "job",
            },
        ],
        gallery: [
            photo1_1
        ],
        videos: [
            "https://www.youtube.com/watch?v=HTjjNozVy5w"
        ],
        coordinates: {
            longitude: -119.698,
            latitude: 34.4208
        },
        // short_information: ""
    },
    {
        id: 2,
        url: '/sazdae',
        full_name: 'Саздаэ-Сан',
        life_dates: '1969 - наши дни',
        main_photo: avatar2,
        timeline: [
            {
                id: 1,
                title: "Рекорд",
                description:
                    "Японский мультсериал установил абсолютный рекорд — 45 лет в эфире." +
                    " Аниме «Садзаэ-сан» стало дважды рекордсменом «Книги рекордов Гиннесса»",
                icon: "job",
            },
            {
                id: 2,
                title: "Озвучка",
                description:
                    "Сэйю Мидори Като, которая подарила свой голос в Садзаэ-сан персонажу Садзаэ Фугута, " +
                    "получила награду за самую продолжительную озвучку одного и того же персонажа в " +
                    "телевизионном анимационном сериале.",
                icon: "job",
            },
            {
                id: 3,
                title: "Сюжет",
                description:
                    "В центре сюжета — мать-домохозяйка, которая живет со своим мужем, " +
                    "родителями и тремя детьми. Они стойко и с юмором переживают жизнь в " +
                    "японской провинции после Второй мировой войны.",
                icon: "job",
            },
            {
                id: 4,
                title: "Персонажи",
                description:
                    "Персонажи названы в честь морских животных и они икогда не стареют",
                icon: "job",
            },
            {
                id: 5,
                title: "Анимация",
                description:
                    "Это было последнее аниме, в котором использовалась традиционная анимация Cel",
                icon: "job",
            },
        ],
        gallery: [
            photo2_1
        ],
        videos: [
            "https://www.youtube.com/watch?v=7d7vpTYIMro"
        ],
        coordinates: {
            longitude: 139.692,
            latitude: 35.6895
        },
        short_information: ""
    },
    {
        id: 3,
        url: '/doctor_who',
        full_name: 'Доктор Кто',
        life_dates: '1963 - наши дни',
        main_photo: avatar3,
        timeline: [
            {
                id: 1,
                title: "Сериал",
                description:
                    "Сериал «Доктор Кто» является одним из самых знаменитых " +
                    "научно-фантастических сериалов в мире и внесен в Книгу рекордов Гиннесса.",
                icon: "job",
            },
            {
                id: 2,
                title: "Актёр",
                description:
                    "Когда Дэвиду Теннанту, исполнителю роли одного из Докторов, было тринадцать лет, " +
                    "в своем сочинении «Межгалактическая передозировка» он выказал уверенность в том, "+
                    "что когда-нибудь сыграет в этом сериале.",
                icon: "job",
            },
            {
                id: 3,
                title: "Эпизод «Пустой ребенок»",
                description:
                    " В эпизоде «Пустой ребенок» фильтры противогазов представляют собой пустые консервные "+
                    "банки. Использовать настоящие фильтры времен Второй мировой войны было невозможно, "+
                    "так как они содержат опасный для здоровья асбест.",
                icon: "job",
            },
            {
                id: 4,
                title: "Отказ в роли",
                description:
                    "Приглашение на роль Доктора получал Бенедикт Камбербэтч, отказавшийся из-за ответственности, "+
                    "связанной с исполнением этого персонажа. А Хью Грант рассказывал, что когда-то отказался "+
                    "от роли Доктора, так как был уверен, что сериал не будет популярным.",
                icon: "job",
            },
        ],
        gallery: [
            photo3_1
        ],
        videos: [
            "https://www.youtube.com/watch?v=orVPpNv_uek"
        ],
        coordinates: {
            longitude: -0.12574,
            latitude: 51.5085
        },
        short_information: ""
    },
    {
        id: 4,
        url: '/simpsons',
        full_name: 'Симпсоны',
        life_dates: '1987 - наши дни',
        main_photo: avatar4,
        timeline: [
            {
                id: 1,
                title: "Создание",
                description:
                    "Симпсоны - американский анимационный телевизионный ситком с участием анимированной "+
                    "семьи Симпсонов, созданный Мэттом Гренингом. Он придумал персонажей в вестибюле "+
                    "офиса Джеймса Л. Брукса и назвал их в честь членов своей семьи, заменив собственное имя Барт.",
                icon: "job",
            },
            {
                id: 2,
                title: "Лучший сериал",
                description:
                    "В 1998 году «The Simpsons» был назван американским журналом «Time» лучшим телевизионным сериалом ХХ века.",
                icon: "job",
            },
            {
                id: 3,
                title: "Предсказывают будущее?",
                description:
                    "Симпсоны имеют долгую историю и множество эпизодов, что увеличивает вероятность "+
                    "того, что некоторые из сюжетных линий или шуток в будущем совпадут с реальными "+
                    "событиями. Кроме того, сериал часто высмеивает популярную культуру и современные "+
                    "события, что еще больше усиливает ощущение предсказуемости",
                icon: "job",
            },
            {
                id: 4,
                title: "Желтый цвет",
                description:
                    "Проще говоря, Симпсоны стали желтыми в результате эксперимента – не радиационного, " +
                    "а над вниманием зрителей",
                icon: "job",
            },
        ],
        gallery: [
            photo4_1
        ],
        videos: [
            "https://www.youtube.com/watch?v=dloX7qRs-Os"
        ],
        coordinates: {
            longitude: -118.244,
            latitude: 34.0522
        },
        short_information: ""
    },
    {
        id: 5,
        url: '/street_sizam',
        full_name: 'Улица Сезам',
        life_dates: '1969 - наши дни',
        main_photo: avatar5,
        timeline: [
            {
                id: 1,
                title: "О сериале",
                description:
                    "Одно из самых любимых детских шоу всех времен — «Улица Сезам» с куклами-маппетами — впервые "+
                    "появилось на телевидении в 1969 году. Создатели задумывали его как развлекательно-образовательную "+
                    "программу для детей из бедных семей, но в итоге проект превратился в просветительское "+
                    "скетч-шоу об актуальных социальных проблемах. В программе участвовали многие звезды, например, "+
                    "бывшая первая леди США Мишель Обама и лауреатка премии «Оскар» Лупита Нионго.",
                icon: "job",
            },
            {
                id: 2,
                title: "Часть 1",
                description:
                    "Одно из самых любимых детских шоу всех времен — «Улица Сезам» с куклами-маппетами — впервые появилось "+
                    "на телевидении в 1969 году.",
                icon: "job",
            },
            {
                id: 3,
                title: "Часть 2",
                description:
                    "Создатели задумывали его как развлекательно-образовательную "+
                    "программу для детей из бедных семей, но в итоге проект превратился в просветительское скетч-шоу "+
                    "об актуальных социальных проблемах.",
                icon: "job",
            },
            {
                id: 4,
                title: "Часть 3",
                description:
                    " В программе участвовали многие звезды, например, бывшая первая леди "+
                    "США Мишель Обама и лауреатка премии «Оскар» Лупита Нионго.",
                icon: "job",
            },
        ],
        gallery: [
            photo5_1
        ],
        videos: [
            "https://www.youtube.com/watch?v=pvS28nqOCo0"
        ],
        coordinates: {
            longitude: -74.006,
            latitude: 40.7143
        },
        short_information: ""
    },
    {
        id: 6,
        url: '/track',
        full_name: 'След',
        life_dates: '2000 - 2015',
        main_photo: avatar6,
        timeline: [
            {
                id: 1,
                title: "О сериале",
                description:
                    "«След» — российский криминальный телесериал, рассказывающий о сотрудниках "+
                    "вымышленной спецслужбы — Федеральной экспертной службы (ФЭС), созданной в "+
                    "Москве в составе МВД России для борьбы с преступностью.",
                icon: "job",
            },
            {
                id: 2,
                title: "Самый длинный в России",
                description:
                    "Является самым продолжительным российским телесериалом по количеству серий.",
                icon: "job",
            },
            {
                id: 3,
                title: "Просмотр",
                description:
                    "Для полного просмотра сериала уйдёт около 40-45 суток.",
                icon: "job",
            },
            {
                id: 4,
                title: "Съёмка",
                description:
                    "Было использовано 7 тысяч объектов, на которых проводилась натуральная съёмка.",
                icon: "job",
            },
        ],
        gallery: [
            photo6_1
        ],
        videos: [
            "https://www.youtube.com/watch?v=Jz51mw35bgw"
        ],
        coordinates: {
            longitude: 37.6156,
            latitude: 55.7522
        },
        short_information: ""
    }
];

export default seriesDatabase;