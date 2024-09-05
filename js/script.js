//=====================TOGGLE MODE================================//
document.addEventListener('DOMContentLoaded', function () {
    // Toggle Dark Mode
    const toggleButton = document.getElementById('toggle-dark-mode');
    const dlIcon = document.getElementById('dl-icon');

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');

            // Cambiar el ícono
            if (document.body.classList.contains('dark-mode')) {
                dlIcon.classList.remove('fa-moon');
                dlIcon.classList.add('fa-sun');
            } else {
                dlIcon.classList.remove('fa-sun');
                dlIcon.classList.add('fa-moon');
            }
        });
    }

    // Navbar Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }


    //=====================================MUSIC PLAYER============================================//
    const songs = [
        { src: 'song/Feid, Maisak - SE ME OLVIDA (Official Video).mp3', title: 'Se me olvida', artist: 'Feid, Maisk', cover: 'img/feid.jpg' },
        { src: 'song/Myke Towers & Peso Pluma - SE TE NOTA.mp3', title: 'Se te nota', artist: 'Myke Towers, Peso Pluma', cover: 'img/myketowers.jpg' },
        { src: 'song/UWAIE - Kapo (Video Oficial).mp3', title: 'Kapo', artist: 'Uwaie', cover: 'img/uwaie.jpg' }
    ];
    let currentSongIndex = 0;

    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeControl = document.getElementById('volumeControl');
    const progressBar = document.getElementById('progressBar');
    const songTitle = document.getElementById('songTitle');
    const artistName = document.getElementById('artistName');
    const albumCover = document.getElementById('albumCover');

    // Verificar si los elementos del reproductor existen antes de agregar eventos
    if (audioPlayer && playPauseBtn && prevBtn && nextBtn && volumeControl && progressBar && songTitle && artistName && albumCover) {
        // Función para cargar una canción
        function loadSong(index) {
            const song = songs[index];
            audioPlayer.src = song.src;
            songTitle.textContent = song.title;
            artistName.textContent = song.artist;
            albumCover.src = song.cover;
            playPauseBtn.innerHTML = '<i class="fas fa-play-circle fa-2x"></i>';
        }

        // Cargar la primera canción al iniciar
        loadSong(currentSongIndex);

        // Función para reproducir/pausar la canción
        playPauseBtn.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>';
            } else {
                audioPlayer.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play-circle fa-2x"></i>';
            }
        });

        // Función para la canción anterior
        prevBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
            loadSong(currentSongIndex);
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>';
        });

        // Función para la siguiente canción
        nextBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
            loadSong(currentSongIndex);
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>';
        });

        // Actualización de la barra de progreso
        audioPlayer.addEventListener('timeupdate', () => {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = `${progress}%`;
        });

        // Control de volumen
        volumeControl.addEventListener('input', function () {
            audioPlayer.volume = this.value;
        });
    }


    // ====================================EXPLORAR========================================//
    const searchTrends = document.getElementById('searchTrends');
    const trendsList = document.getElementById('trendsList');
    const searchReleases = document.getElementById('searchReleases');
    const releasesList = document.getElementById('releasesList');
    const searchAlbums = document.getElementById('searchAlbums');
    const albumsList = document.getElementById('albumsList');
    const genreSelect = document.getElementById('genreSelect');
    const genreContent = document.getElementById('genreContent');
    const topArtistsList = document.getElementById('topArtistsList');

    const genres = {
        'rock': ['Álbum Rock 1', 'Álbum Rock 2', 'Álbum Rock 3'],
        'pop': ['Álbum Pop 1', 'Álbum Pop 2', 'Álbum Pop 3'],
        'jazz': ['Álbum Jazz 1', 'Álbum Jazz 2', 'Álbum Jazz 3']
    };

    const trendsData = ['Tendencia 1', 'Tendencia 2', 'Tendencia 3'];
    const releasesData = ['Lanzamiento 1', 'Lanzamiento 2', 'Lanzamiento 3'];
    const albumsData = ['Álbum 1', 'Álbum 2', 'Álbum 3'];
    const topArtistsData = ['Artista 1', 'Artista 2', 'Artista 3'];

    if (searchTrends) {
        searchTrends.addEventListener('input', function () {
            const filter = searchTrends.value.toLowerCase();
            const filteredItems = trendsData.filter(item => item.toLowerCase().includes(filter));
            updateList(trendsList, filteredItems);
        });
    }

    if (searchReleases) {
        searchReleases.addEventListener('input', function () {
            const filter = searchReleases.value.toLowerCase();
            const filteredItems = releasesData.filter(item => item.toLowerCase().includes(filter));
            updateList(releasesList, filteredItems);
        });
    }

    if (searchAlbums) {
        searchAlbums.addEventListener('input', function () {
            const filter = searchAlbums.value.toLowerCase();
            const filteredItems = albumsData.filter(item => item.toLowerCase().includes(filter));
            updateList(albumsList, filteredItems);
        });
    }

    if (genreSelect) {
        genreSelect.addEventListener('change', function () {
            const selectedGenre = genreSelect.value;
            const items = genres[selectedGenre] || [];
            updateList(genreContent, items);
        });
    }

    function updateList(listElement, items) {
        listElement.innerHTML = '';
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = item;
            listElement.appendChild(listItem);
        });
    }

    // Inicializar listas con datos predeterminados
    updateList(trendsList, trendsData);
    updateList(releasesList, releasesData);
    updateList(albumsList, albumsData);
    updateList(topArtistsList, topArtistsData);


    // ====================================BIBLIOTECA========================================//
    const playlistList = document.getElementById('playlistList');
    const artistsList = document.getElementById('artistsList');
    const playlistDetails = document.getElementById('playlistDetails');
    const playlistForm = document.getElementById('playlistForm');
    const artistUpdatesList = document.getElementById('artistUpdatesList');

    // Datos de ejemplo
    const playlists = ['Playlist 1', 'Playlist 2', 'Playlist 3'];
    const artists = ['Artista 1', 'Artista 2', 'Artista 3'];
    const updates = ['Actualización 1', 'Actualización 2', 'Actualización 3'];

    if (playlistForm) {
        playlistForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const playlistName = event.target.querySelector('input[name="playlistName"]').value;
            if (playlistName) {
                playlists.push(playlistName);
                updateList(playlistList, playlists);
                playlistForm.reset();
            }
        });
    }

    updateList(playlistList, playlists);
    updateList(artistsList, artists);
    updateList(playlistDetails, playlists); // Cambiar esto si hay detalles específicos
    updateList(artistUpdatesList, updates);

    // ====================================CHAT========================================//
    const chatHeader = document.getElementById('chatHeader');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const chatForm = document.getElementById('chatForm');
    const shareMusicBtn = document.getElementById('shareMusicBtn');
    const friendsList = document.getElementById('friendsList');
    const addFriendForm = document.getElementById('addFriendForm');

    function sendMessage(event) {
        event.preventDefault();
        if (messageInput.value.trim() !== '') {
            const message = document.createElement('div');
            message.classList.add('chat-message');
            message.innerHTML = `<strong>Tú:</strong> ${messageInput.value}`;
            chatMessages.appendChild(message);
            messageInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    function addFriend(event) {
        event.preventDefault();
        const friendName = document.getElementById('friendName').value.trim();
        const existingFriends = Array.from(friendsList.children).map(item => item.textContent.trim());
        if (friendName && !existingFriends.includes(friendName)) {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.innerHTML = `<span class="badge bg-primary rounded-pill">${friendsList.children.length + 1}</span> ${friendName}`;
            listItem.addEventListener('click', function () {
                selectFriend(listItem);
            });
            friendsList.appendChild(listItem);
            document.getElementById('addFriendModal').classList.remove('show');
            document.getElementById('addFriendModal').style.display = 'none';
            document.querySelector('.modal-backdrop').remove();
            addFriendForm.reset();
        } else {
            alert('Este amigo ya está en la lista o el nombre está vacío.');
        }
    }

    function selectFriend(friendElement) {
        chatHeader.textContent = `Chat con ${friendElement.textContent}`;
        messageInput.disabled = false;
        chatForm.querySelector('button[type="submit"]').disabled = false;
        shareMusicBtn.disabled = false;
        chatMessages.innerHTML = '';
    }

    if (chatForm) {
        chatForm.addEventListener('submit', sendMessage);
    }

    if (addFriendForm) {
        addFriendForm.addEventListener('submit', addFriend);
    }

    if (friendsList) {
        friendsList.addEventListener('click', function (event) {
            if (event.target && event.target.nodeName === 'LI') {
                selectFriend(event.target);
            }
        });
    }

    if (shareMusicBtn) {
        shareMusicBtn.addEventListener('click', () => {
            const message = document.createElement('div');
            message.classList.add('chat-message');
            message.innerHTML = `<strong>Tú:</strong> He compartido una canción.`;
            chatMessages.appendChild(message);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }

});
