const CONSTANCES = {
    REACTJS: {
        title: 'ReactJS',
        color: '#20232A',
        font: '#FFFFFF'
    },
    EXPRESSJS: {
        title: 'ExpressJS',
        color: '#404D59',
        font: '#FFFFFF'
    },
    MONGODB: {
        title: 'MongoDB',
        color: '#4EA94B',
        font: '#FFFFFF'
    },
    JAVASCRIPT: {
        title: 'JavaScript',
        color: '#F7DF1E'
    },
    CPP: {
        title: 'C++',
        color: '#00599C',
        font: '#FFFFFF'
    },
    OPENGL: {
        title: 'OpenGL',
        color: '#58A0DB',
        font: '#FFFFFF'
    },
    NETLIFY: {
        title: 'Netlify',
        color: '#429972',
        font: '#FFFFFF'
    },
    HEROKU: {
        title: 'Heroku',
        color: '#614399',
        font: '#FFFFFF'
    }
}

export const data = [
    {
        title: 'EzyTalk',
        describe: 'Chat application',
        url: 'https://github.com/nxNghia/EzyTalk',
        includes: [CONSTANCES.REACTJS, CONSTANCES.EXPRESSJS, CONSTANCES.MONGODB, CONSTANCES.HEROKU]
    },
    {
        title: 'Yumemi',
        describe: `Japanes prefecture's population visualization`,
        url: 'https://github.com/nxNghia/yumemi',
        includes: [CONSTANCES.REACTJS, CONSTANCES.NETLIFY]
    },
    {
        title: '2048',
        describe: 'Small game, which inspire of the famous game 2048',
        url: 'https://github.com/nxNghia/2048',
        includes: [CONSTANCES.CPP, CONSTANCES.OPENGL]
    },
    {
        title: 'Flappy bird',
        describe: 'Small game, which inspire of the famous game Flappy bird',
        url: 'https://github.com/nxNghia/FlappyBird',
        includes: [CONSTANCES.JAVASCRIPT]
    },
]