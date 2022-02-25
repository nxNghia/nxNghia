const CONSTANCES = {
    JAVA_SCRIPT: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    CPP: "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    CS: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
    JAVA: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
    TYPESCRIPT: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    PHP: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    REACT: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    DOTNET: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
    EXPRESS: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
    LARAVEL: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
    NEXTJS: "https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logoColor=white",
    MYSQL: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    MONGO: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    POSTGRESQL: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
    GIT: "https://img.shields.io/badge/GIT-D83B01?style=for-the-badge&logo=git&logoColor=white",
    UBUNTU: "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
    FIGMA: "https://img.shields.io/badge/figma-AAAAAA?style=for-the-badge&logo=figma&logoColor=white",
    DOCKER: "https://img.shields.io/badge/docker-0078D4?style=for-the-badge&logo=docker&logoColor=white"
}

export const languages = {
    currently: [
        CONSTANCES.JAVA_SCRIPT,
        CONSTANCES.CPP,
        CONSTANCES.CS,
        CONSTANCES.JAVA
    ],
    interesting: [
        CONSTANCES.TYPESCRIPT,
        CONSTANCES.PHP
    ]
}

export const framework = {
    currently: [
        CONSTANCES.REACT,
        CONSTANCES.DOTNET,
        CONSTANCES.EXPRESS
    ],
    interesting: [
        CONSTANCES.LARAVEL,
        CONSTANCES.NEXTJS
    ]
}

export const database = {
    currently: [
        CONSTANCES.MYSQL,
        CONSTANCES.MONGO,
        CONSTANCES.POSTGRESQL
    ],
    interesting: []
}

export const other = {
    currently: [
        CONSTANCES.GIT,
        CONSTANCES.FIGMA,
        CONSTANCES.UBUNTU
    ],
    interesting: [
        CONSTANCES.DOCKER
    ]
}