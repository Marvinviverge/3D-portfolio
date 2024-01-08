import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    figma,
    fonctionpublique,
    oc,
    oc2,
    logo,
    groupomania,
    learnathome,
    hrnet,
    wordpress,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "À propos",
    },
    {
        id: "experiences",
        title: "Expériences",
    },
    {
        id: "work",
        title: "Projets",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Développement Web",
        icon: web,
    },
    {
        title: "Intégration Maquette",
        icon: mobile,
    },
    {
        title: "Optimisation",
        icon: backend,
    },
    {
        title: "Maintenances",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "wordpress",
        icon: wordpress,
    },
];

const experiences = [
    {
        title: "Une vie passée...",
        company_name: "Fonction Publique",
        icon: fonctionpublique,
        iconBg: "#E6DEDD",
        date: "Septembre 2012 - Mars 2022",
        points: [
            "J'ai fais le choix d'intégrer sur concours la fonction publique.",
            "Durant neuf années, j'ai effectué mon travail avec passion et dévouement.",
            "En charge de dossiers complexes, j'ai développé de nombreux soft skills.",
            "Empathie, Esprit d'équipe, Organisation, Communication, Sens des responsabilités...",
            "Néanmoins, après une longue remise en question, j'ai pris conscience que j'aspirais à de nouveaux défis et j'ai décidé de me reconvertir.",
        ],
    },
    {
        title: "Formation Développeur Web",
        company_name: "Openclassrooms - Titre RNCP Niveau 5 (Bac+2)",
        icon: oc2,
        iconBg: "#383E56",
        date: "Avril 2022 - Octobre 2022",
        points: [
            "J'ai intégrer une formation de Développeur Web grâce à la plateforme Openclassrooms.",
            "D'une durée de six mois, j'ai appris durant celle-ci les bases du développement web, avec la réalisation de six projets.",
            "HTML5 et CSS3, bien-sûr, mais aussi Javascript, NodeJS, ReactJS, MongoDB et Express.",
            "Au travers de ces projets, j'ai découvert une véritable passion pour ce domaine.",
            "C'est ainsi que je suis ressorti diplômé d'un Titre RNCP de niveau 5, soit l'équivalent d'un Bac +2",
        ],
    },
    {
        title: "Développeur Concepteur Logiciel",
        company_name: "Openclassrooms - Titre RNCP Niveau 6 (Bac+3/4)",
        icon: oc,
        iconBg: "#E6DEDD",
        date: "Décembre 2022 - Décembre 2023",
        points: [
            "En quête d'apprentissage, j'ai eu l'opportunité de poursuivre mon enseignement auprès de la plateforme, en intégrant une formation beaucoup plus poussée.",
            "Attiré par le Front-End, c'est tout naturellement que mon choix s'est porté sur ReactJS.",
            "Cette fois-ci la formation a duré douze mois, durant lesquels il a fallu présenter douze projets à des évaluateurs professionnels.",
            "Apprentissage de ReactJS en profondeur, utilisation de Redux Toolkit, de la librairie Recharts, réalisation de maquette sur Figma ou encore tests avec Jest.",
            "Cette fois encore j'ai réussi à mener mes ambitions à termes, et j'ai pu obtenir un Titre RNCP de niveau 6, reconnu comme Bac+3/4."
        ],
    },
    {
        title: "Développeur Web",
        company_name: "Freelance",
        icon: logo,
        iconBg: "#383E56",
        date: "Jan 2023 - Present",
        points: [
            "Dés la sortie de ma formation, j'ai décidé en attendant de trouver un emploi en CDI, de lancer mon activité en tant que freelance.",
            "L'occasion pour moi d'avoir mes premiers contacts avec des clients, me permettant entre autre d'explorer différents CMS comme Wordpress.",
            "Mais aussi de poursuivre mon apprentissage vers d'autres frameworks comme ThreeJS pour la réalisation de ce portfolio...",
            "ou même d'autres langages, attiré par Python ou PHP pour compléter mes connaissances.",
            "Passionné par le développement web, oui, mais surtout passionné par son apprentissage, passionné par la satisfation client."
        ],
    },
];

const projects = [
    {
        name: "Groupomania",
        description:
            "Réseau social d'entreprise, visant à améliorer la cohésion de groupe, en permettant aux utilisateurs de créer leur profil, poster des messages, uploader des images, modifier ou encore supprimer leurs précédents post. Un système de like/dislike est également mis en place.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongoDB/expressJS",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: groupomania,
        source_code_link: "https://github.com/Marvinviverge/Groupomania",
    },
    {
        name: "Learn@Home",
        description:
            "Création d'une maquette pour une application de soutien scolaire permettant la mise en relation entre étudiant/mentor, avec calendrier, todo-list, discussion instantanée, et ce en version desktop et mobile. Cette maquette est prête pour intégration web.",
        tags: [
            {
                name: "figma",
                color: "pink-text-gradient",
            },
        ],
        image: learnathome,
        source_code_link: "https://www.figma.com/proto/mHmfzrtpNhjfsjyiF2JP30/Learn%40Home?type=design&node-id=9-48&t=yAKRVmanrywj3Y3V-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=9%3A48&show-proto-sidebar=1",
    },
    {
        name: "HRNet",
        description:
            "Conversion de plugins jQuery vers la bibliothèque ReactJS pour une application destinée à un service de Ressources Humaines. Création de composants réutilisables. L'application permets la création/suppression d'employés avec tri dans un tableau. ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: hrnet,
        source_code_link: "https://hrnet-gamma.vercel.app/home",
    },
];

export { services, technologies, experiences, projects };