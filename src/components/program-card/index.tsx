import React, { FunctionComponent } from 'react'
import FormatHeure from '../../_helpers/format-heure'
import { Program } from '../../models/program'
import './program.css'

type Props = {
    prog: Program
}

const programCard: FunctionComponent<Props> = ({ prog }) => {
    return (
        <div className="program-card">
            <div className="program__day">{prog.day}</div>
            <div className="program__desc">{prog.desc}</div>
            <div className="program__time">
                {FormatHeure(prog.startTime)} - {FormatHeure(prog.endTime)}
            </div>
        </div>
    )
}

export default programCard
