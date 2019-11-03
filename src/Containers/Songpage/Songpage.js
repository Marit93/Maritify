import React, { Component } from 'react';
import { } from "./Songpage.css";
import Artist from "../../Components/Music/Artist";
import Genre from "../../Components/Music/Genre";
import Rating from "../../Components/Music/Rating";
import Songs from "../../Components/Music/Songs";


class Songpage extends Component {

    state = {
        newSong: { song: "", artist: "", genre: "", rating: "" },
        songs: [
            {
                song: "Hero",
                artist: "Enrique Iglesias",
                genre: "Pop",
                rating: "5 STARS",
            },
            {
                song: "Walk me home",
                artist: "Pink",
                genre: "Pop",
                rating: "4 STARS"
            }
        ],
        filterOption=this.filterOption.bind(this)
    };

    addSongHandler = () => {
        const newSong = { ...this.state.newSong };
        const newSongs = [...this.state.songs];
        newSongs.push(newSong);
        this.setState({
            songs: newSongs,
            newSong: {
                song: "",
                artist: "",
                genre: "",
                rating: "",
            }
        });
    };

    addTitleHandler = event => {
        const songTitle = event.target.value;
        const newSong = { ...this.state.newSong };
        newSong.song = songTitle;
        this.setState({ newSong: newSong });

    };

    addArtistHandler = event => {
        const songArtist = event.target.value;
        const newSong = { ...this.state.newSong };
        newSong.artist = songArtist;
        this.setState({ newSong: newSong });

    };

    addGenreHandler = event => {
        const songGenre = event.target.value;
        const newSong = { ...this.state.newSong };
        newSong.genre = songGenre;
        this.setState({ newSong: newSong });

    };

    addRatingHandler = event => {
        const songRating = event.target.value;
        const newSong = { ...this.state.newSong };
        newSong.rating = songRating;
        this.setState({ newSong: newSong });

    };

    filterOption(e) {
        let filterSongs = this.state.newSong;
        filterSongs = newSong.filter((item => {
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        }));
        this.setState({
            newSong: filterSongs
        })
    }



    //Stil can not figure out the delete function
    // deleteSongHandler = event => {
    //     const deleted = event.target.value;
    //     const deleteSong = {...this.state.newSong};
    //     newSong.splice 

    // deleteSongHandler(id) {
    //     const { newSongs } = this.state;

    //     this.setState({
    //         newSongs: newSongs.filter(newSongs => newSongs.id !== id)
    //     });

    // }



    render() {
        return (
            <div className="whole">
                <div className="top">
                    <h1>Marit's Play List</h1>
                    <input
                        type="text"
                        placeholder="Song"
                        onChange={this.addTitleHandler}
                        value={this.state.newSong.song}
                    ></input>
                    <input
                        type="text"
                        placeholder="Artist"
                        onChange={this.addArtistHandler}
                        value={this.state.newSong.artist}></input>
                    <select onChange={this.addGenreHandler}>
                        <option value="Pop">Pop</option>
                        <option value="HipHop">HipHop</option>
                        <option value="Dance">Dance</option>
                        <option value="Anders">Anders</option>
                    </select>


                    <select onChange={this.addRatingHandler}>
                        <option value="1">1 STAR</option>
                        <option value="2">2 STARS</option>
                        <option value="3">3 STARS</option>
                        <option value="4">4 STARS</option>
                        <option value="5">1 STARS</option>
                    </select>

                    <button type="button" onClick={this.addSongHandler}>
                        ADD
                </button>
                </div>
                <input type="text"
                    className="center-block"
                    placeholder="Filter here..."
                    onChange={this.filterOption}></input>
                <div className="bottom">
                    <ul className="songs">
                        <ul>
                            {this.state.songs.map((item, index) => {
                                return <li song={item.song} key={index}>{item.song}</li>
                            })}</ul>
                        <ul>
                            {this.state.songs.map((item, index) => {
                                return <li artist={item.artist} key={index}>{item.artist}</li>
                            })}</ul>
                        <ul>
                            {this.state.songs.map((item, index) => {
                                return <li genre={item.genre} key={index}>{item.genre}</li>
                            })}</ul>
                        <ul>
                            {this.state.songs.map((item, index) => {
                                return <li rating={item.rating} key={index}>{item.rating}</li>
                            })}</ul>

                    </ul>
                </div>
            </div>
        );
    }
};



export default Songpage;