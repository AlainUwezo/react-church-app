export interface Program{
    id: number
    day: string
    desc: string
    startTime: Heure
    endTime: Heure
}

export interface Heure{
    id: number
    hour: number
    min: number
}