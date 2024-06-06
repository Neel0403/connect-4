import React from 'react'


const Footer = ({ onNewGameClick, onSuggestClick }) => {
    const renderButtons = () => {
        // if (gamseState === GAME_STATE_PLAYING) {
        //     return (
        //         <button onClick={onSuggestClick}>Suggest</button>
        //     )
        // }
        return (
            <>
                <button onClick={onSuggestClick}>Suggest</button>
                <button onClick={onNewGameClick}>New Game</button>
            </>
        )
    }
    return (
        <div className='panel footer'>
            {renderButtons()}
        </div>
    )
}

export default Footer