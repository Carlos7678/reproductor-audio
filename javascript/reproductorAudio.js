class SongPlayer {
    constructor(songs, currentSongIndex) {
        this.songs = songs;
        this.currentSongIndex = currentSongIndex;

        this.audio = document.getElementById('audio');
        this.songTitle = document.getElementById('song-title');
        this.albumCover = document.getElementById('album-cover');

        // Event listeners for play/pause and skip buttons
        this.audio.addEventListener('ended', () => this.onEnded());
        document.getElementById('prev-button').addEventListener('click', () => this.prevSong());
        document.getElementById('play-pause-button').addEventListener('click', () => this.playPause());
        document.getElementById('next-button').addEventListener('click', () => this.nextSong());
    }

    // Play the current song
    play() {
        this.audio.src = `audio/${this.songs[this.currentSongIndex].src}`;
        this.audio.play();
        this.songTitle.textContent = this.songs[this.currentSongIndex].title;
        this.albumCover.innerHTML = `<img src="images/${this.songs[this.currentSongIndex].cover}" alt="Portada del álbum">`;
    }

    // Toggle play/pause
    playPause() {
        if (this.audio.paused) {
            this.audio.play();
            document.getElementById('play-pause-button').innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            this.audio.pause();
            document.getElementById('play-pause-button').innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    // Go to the previous song
    prevSong() {
        this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
        this.play();
    }

    // Go to the next song
    nextSong() {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        this.play();
    }

    // Handle song ending
    onEnded() {
        this.nextSong();
    }
}

// Create a SongPlayer object
const songs = [
    {
        title: 'Janji - Heroes Tonight (feat. Johnning)',
        src: 'Heroes Tonight.mp3',
        cover: 'HeroesTonight.jfif',
    },
    {
        title: 'Cartoon - On & On (feat. Daniel Levi)',
        src: 'On & On.mp3',
        cover: 'on & on.jpg',
    },
    {
        title: '1$K1 - GODSLAYER ',
        src: 'GODSLAYER.mp3',
        cover: 'godslayer.jpg',
    },
    {
        title: 'Egzod & Maestro Chives - Royalty (Don Diablo Remix)',
        src: 'Royalty.mp3',
        cover: 'royalty.jpg',
    },
    {
        title: 'Wiguez - Marcheur',
        src: 'Marcheur.mp3',
        cover: 'marcheur.jpg',
    },
];

const songPlayer = new SongPlayer(songs, 0);

// Play the first song
songPlayer.play();