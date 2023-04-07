import { Goal } from "./goal";
import { Program } from "./program";
import Amour from './../assets/images/love.jfif';
import Foi from './../assets/images/foi.jfif';
import Esperance from './../assets/images/esperance.jfif';

export const PROGRAMS: Program[] = [{
    id: 0,
    day: 'Lundi',
    desc: 'Debut de echaristie et apres il y a proclammation',
    startTime: {
        id: 0,
        hour: 12,
        min: 0
    },
    endTime: {
        id: 0,
        hour: 14,
        min: 5
    }
}, {
    id: 1,
    day: 'Mardi',
    desc: 'Lorem ipsum dolor sit amet.',
    startTime: {
        id: 1,
        hour: 9,
        min: 30
    },
    endTime: {
        id: 1,
        hour: 12,
        min: 0
    }
}, {
    id: 2,
    day: 'Mercredi',
    desc: 'Debut de echaristie et apres il y a proclammation',
    startTime: {
        id: 0,
        hour: 8,
        min: 45
    },
    endTime: {
        id: 0,
        hour: 15,
        min: 0
    }
}, {
    id: 3,
    day: 'Jeudi',
    desc: 'Evangelisation aux petites enfants de moins de 5 ans',
    startTime: {
        id: 0,
        hour: 15,
        min: 25
    },
    endTime: {
        id: 0,
        hour: 16,
        min: 45
    }
}, {
    id: 4,
    day: 'Vendredi',
    desc: 'Debut de echaristie et apres il y a proclammation',
    startTime: {
        id: 0,
        hour: 10,
        min: 0
    },
    endTime: {
        id: 0,
        hour: 12,
        min: 0
    }
}, {
    id: 0,
    day: 'Samedi',
    desc: 'Lorem ipsum dolor sit amet.',
    startTime: {
        id: 0,
        hour: 13,
        min: 40
    },
    endTime: {
        id: 0,
        hour: 15,
        min: 20
    }
}, {
    id: 0,
    day: 'Dimanche',
    desc: 'Debut de echaristie et apres il y a proclammation',
    startTime: {
        id: 0,
        hour: 20,
        min: 0
    },
    endTime: {
        id: 0,
        hour: 23,
        min: 59
    }
}]

export const GOALS: Goal[] = [{
    id: 0,
    title: 'Amour',
    desc: 'Vivre en harmonie et avec un grand amour pour Dieu et pour son prochain',
    picture: Amour
}, {
    id: 1,
    title: 'Foi',
    desc: 'Croire en Dieu avec tout son coeur et sagement',
    picture: Foi
}, {
    id: 2,
    title: 'Espérance',
    desc: 'Comprendre en quoi nous avons la garantie de la véracité de notre croyqnce.',
    picture: Esperance
}] 