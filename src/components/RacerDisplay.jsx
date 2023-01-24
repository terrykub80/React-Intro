import React from 'react'

export default function RacerDisplay(props) {
    const tableHeaders = ['Position', 'Driver', 'Points', 'Wins', 'Nationality', 'Constructor']
    return (
        <div>
            <h1 className='text-center my-3'>F1 Racer Standings</h1>
            <table className='table table-primary table-striped'>
                <thead>
                    <tr className='fst-italic fs-4'>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.racers.map( racer => (
                        <tr key={racer.position}>
                            <th>{racer.position}</th>
                            <th>{racer.Driver.familyName}, {racer.Driver.givenName}</th>
                            <th>{racer.points}</th>
                            <th>{racer.wins}</th>
                            <th>{racer.Driver.nationality}</th>
                            <th>{racer.Constructors[0].name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
