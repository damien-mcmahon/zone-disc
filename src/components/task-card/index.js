import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../card';
import Button from 'components/button';

import './styles.scss';
const COMPLETED_ICON = ['far', 'check-circle'];
const DONE_BUTTON_ICON = 'check-circle';

const TaskCard = ({className, task}) => (
    <Card className="task-card__wrapper">
        <div className="task-card__action-wrapper">
            {task.done === "true" ? (
                <FontAwesomeIcon 
                    size="4x"
                    className="task-card__completed-icon"
                    icon={COMPLETED_ICON} />
            ) : (
                <Button className="task-card__done-button"> 
                    <FontAwesomeIcon 
                        className="task-card__done-button__icon"
                        icon={DONE_BUTTON_ICON }/>
                    Done 
                </Button>
            )}
        </div>

        <div className="task-card__info-wrapper">
            <h1 className="task-card__description">{task.taskDesc}</h1> 
        </div>
    </Card>
);

export default TaskCard;