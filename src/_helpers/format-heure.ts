import { Heure } from "../models/program";

const FormatHeure = (time: Heure)=>{
    return time.hour + 'h' + ((time.min < 10) ? '0' + time.min : time.min);
}

export default FormatHeure;