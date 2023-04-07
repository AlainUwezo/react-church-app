import React, { FunctionComponent } from 'react'
import { Goal } from '../../models/goal'
import './goal.css'

type Props = {
    goal: Goal
}

const GoalCard: FunctionComponent<Props> = ({ goal }) => {
    return (
        <li className="goal-card">
            <img
                className="goal__img"
                src={goal.picture}
                alt={goal.title + 'picture'}
            />
            <div className="goal-content">
                <h5 className="goal__title">{goal.title}</h5>
                <p className="goal__desc">{goal.desc}</p>
            </div>
        </li>
    )
}

export default GoalCard
