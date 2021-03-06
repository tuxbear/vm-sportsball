import React from 'react';
import classNames from 'classnames';

const Match = ({ data }) => {
    const {
        eventName,
        spilt,
        finished,
        guess,
        result,
        correct,
        correctOutcome,
        wrong,
    } = data;

    return (
        <tr
            className={classNames(
                'tr',
                { 'tr--red': wrong},
                { 'tr--green': correct},
                { 'tr--lightgreen': correctOutcome && !correct},
                { 'tr--live': !finished},
            )}
        >
            <td className="td">
                {eventName}
            </td>
            <td className="td">
                {spilt &&
                    <span>
                        {guess}
                    </span>
                }
            </td>
            <td className="td">
                {finished &&
                    <span>
                        {result}
                    </span>
                }
            </td>
        </tr>
    );
}

export default Match;
