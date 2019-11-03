import React from "react";

const input = props => {
    return (
        <div className="input">
            <label>Song</label>
            <input type="text" value={props.song} onChange={props.changeSong} />
            <label>Artist</label>
            <input type="text" value={props.artist} onChange={props.changeArtist} />
            <label>Genre</label>
            <select value={props.genre} onChange={props.changeGenre}>
                <option value="Rock">Rock</option>
                <option value="Metal">Metal</option>
                <option value="Alternative">Alternative</option>
                <option value="Pop">Pop</option>
                <option value="Folk">Folk</option>
            </select>
            <label>Rating</label>
            <select value={props.rating} onChange={props.changeRating}>
                <option value="1 ster">1 ster</option>
                <option value="2 sterren">2 sterren</option>
                <option value="3 sterren">3 sterren</option>
                <option value="4 sterren">4 sterren</option>
                <option value="5 sterren">5 sterren</option>
            </select>

            <button onClick={props.clicked}>Add Song</button>
        </div>
    );
};

export default input;