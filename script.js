// Estructura de datos con canciones ganadoras de Eurovisión 2000-2024
const songs = [
    { country: "Switzerland", title: "The Code", artist: "Nemo", spotifyId: "1EjIXKhNHI00ZLMRpS8iz8", image: "artists/2024.jpg", code: "CH", year: 2024 },
    { country: "Sweden", title: "Tattoo", artist: "Loreen", spotifyId: "1DmW5Ep6ywYwxc2HMT5BG6", image: "artists/2023.jpg", code: "SE", year: 2023 },
    { country: "Ukraine", title: "Stefania", artist: "Kalush Orchestra", spotifyId: "2vHzOWRKYPLu8umRPIFuOq", image: "artists/2022.jpg", code: "UA", year: 2022 },
    { country: "Italy", title: "Zitti e Buoni", artist: "Måneskin", spotifyId: "776AftMmFFAWUIEAb3lHhw", image: "artists/2021.jpg", code: "IT", year: 2021 },
    { country: "Netherlands", title: "Arcade", artist: "Duncan Laurence", spotifyId: "1Xi84slp6FryDSCbzq4UCD", image: "artists/2019.jpg", code: "NL", year: 2019 },
    { country: "Israel", title: "Toy", artist: "Netta", spotifyId: "6VO6JrvcuGMfPOQgT6kSGE", image: "artists/2018.jpg", code: "IL", year: 2018 },
    { country: "Portugal", title: "Amar Pelos Dois", artist: "Salvador Sobral", spotifyId: "202ObLBtd9FxpOgpSj9xiG", image: "artists/2017.jpg", code: "PT", year: 2017 },
    { country: "Ukraine", title: "1944", artist: "Jamala", spotifyId: "1AZQTUs1FPy7YHH8aad3dA", image: "artists/2016.jpg", code: "UA", year: 2016 },
    { country: "Sweden", title: "Heroes", artist: "Måns Zelmerlöw", spotifyId: "4ciaNqHWA2IzHphZaVRzHI", image: "artists/2015.jpg", code: "SE", year: 2015 },
    { country: "Austria", title: "Rise Like a Phoenix", artist: "Conchita Wurst", spotifyId: "0fvafkeEoF6Y9gGLK3Wnu3", image: "artists/2014.jpg", code: "AT", year: 2014 },
    { country: "Denmark", title: "Only Teardrops", artist: "Emmelie de Forest", spotifyId: "3yRwgprKX3If2zcuGfKFBu", image: "artists/2013.jpg", code: "DK", year: 2013 },
    { country: "Sweden", title: "Euphoria", artist: "Loreen", spotifyId: "1xN7BpTAWnZkuSLOtRP6Qc", image: "artists/2012.jpg", code: "SE", year: 2012 },
    { country: "Azerbaijan", title: "Running Scared", artist: "Ell & Nikki", spotifyId: "6nA43LwkBmljzdIs1GKZ8x", image: "artists/2011.jpg", code: "AZ", year: 2011 },
    { country: "Germany", title: "Satellite", artist: "Lena", spotifyId: "2UjNsh4ipNrmog6wdS2JVv", image: "artists/2010.jpg", code: "DE", year: 2010 },
    { country: "Norway", title: "Fairytale", artist: "Alexander Rybak", spotifyId: "6NgYIETQ8U72CVfkzYhK30", image: "artists/2009.jpg", code: "NO", year: 2009 },
    { country: "Russia", title: "Believe", artist: "Dima Bilan", spotifyId: "3cSspMBbG6WJq3Whm9v8av", image: "artists/2008.jpg", code: "RU", year: 2008 },
    { country: "Serbia", title: "Molitva", artist: "Marija Šerifović", spotifyId: "1ue71r2sNUvl4LSqvgVVcZ", image: "artists/2007.jpg", code: "RS", year: 2007 },
    { country: "Finland", title: "Hard Rock Hallelujah", artist: "Lordi", spotifyId: "4LmSxJVbKgclgUXcwZEisI", image: "artists/2006.jpg", code: "FI", year: 2006 },
    { country: "Greece", title: "My Number One", artist: "Helena Paparizou", spotifyId: "6LkCvCc9oFoLDv4DLhzTox", image: "artists/2005.jpg", code: "GR", year: 2005 },
    { country: "Ukraine", title: "Wild Dances", artist: "Ruslana", spotifyId: "1Lav2Z3RKu71MJLIjQz4dQ", image: "artists/2004.jpg", code: "UA", year: 2004 },
    { country: "Turkey", title: "Every Way That I Can", artist: "Sertab Erener", spotifyId: "5I8ENb7zzrbYLwhGESY9CF", image: "artists/2003.jpg", code: "TR", year: 2003 },
    { country: "Latvia", title: "I Wanna", artist: "Marie N", spotifyId: "70tFqMdkFXCPeirRaLAKKM", image: "artists/2002.jpg", code: "LV", year: 2002 },
    { country: "Estonia", title: "Everybody", artist: "Tanel Padar, Dave Benton & 2XL", spotifyId: null, image: "artists/2001.jpg", code: "EE", year: 2001 },
    { country: "Denmark", title: "Fly on the Wings of Love", artist: "Olsen Brothers", spotifyId: "4v2RaPHSsTvNkggw3RqyeT", image: "artists/2000.jpg", code: "DK", year: 2000 }
];

const flagEmojis = {
    "CH": "🇨🇭", "SE": "🇸🇪", "UA": "🇺🇦", "IT": "🇮🇹", "NL": "🇳🇱",
    "IL": "🇮🇱", "PT": "🇵🇹", "DK": "🇩🇰", "AT": "🇦🇹", "AZ": "🇦🇿",
    "DE": "🇩🇪", "NO": "🇳🇴", "RU": "🇷🇺", "RS": "🇷🇸", "FI": "🇫🇮",
    "GR": "🇬🇷", "TR": "🇹🇷", "LV": "🇱🇻", "EE": "🇪🇪"
};

// Extend song data with placeholder popularity (replace with real data, e.g., streams)
const songsWithPopularity = songs.map(song => ({
    ...song,
    popularity: Math.floor(Math.random() * 1000) + 100 // Placeholder: millions of streams
}));

// Función para barajar aleatoriamente un array (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Estado del sorter basado en merge sort interactivo
let state = {
    entries: shuffleArray(songsWithPopularity.map((song, index) => ({ ...song, index }))),
    sortedIndexes: [],
    segmentParents: [],
    totalSize: 0,
    comparisonResults: [],
    currentComparisonLeft: 0,
    currentComparisonRight: 0,
    comparisonHeadLeft: 0,
    comparisonHeadRight: 0,
    finishSize: 0,
    finishFlag: false,
    sortedEntries: []
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("Script cargado");

    // Inicializar el sorter
    function initSorter() {
        const entriesLength = state.entries.length;
        const initialIndexes = Array.from({ length: entriesLength }, (_, i) => i);
        state.sortedIndexes = [initialIndexes];
        state.segmentParents = [-1];
        let totalSize = 0;
        const segmentsQueue = [initialIndexes];

        while (segmentsQueue.length > 0) {
            const segment = segmentsQueue.shift();
            if (segment && segment.length > 1) {
                const mid = Math.ceil(segment.length / 2);
                const left = segment.slice(0, mid);
                const right = segment.slice(mid);
                const parentIndex = state.sortedIndexes.indexOf(segment);
                state.sortedIndexes.push(left, right);
                state.segmentParents.push(parentIndex, parentIndex);
                totalSize += segment.length;
                if (left.length > 1) segmentsQueue.push(left);
                if (right.length > 1) segmentsQueue.push(right);
            }
        }

        state.totalSize = totalSize;
        state.currentComparisonLeft = state.sortedIndexes.length - 2;
        state.currentComparisonRight = state.sortedIndexes.length - 1;
        state.comparisonResults = [];
        state.finishSize = 0;
        state.finishFlag = false;
        state.sortedEntries = [];
        console.log("Sorter inicializado:", state);
    }

    // Actualizar el estado tras un voto con weighted reliability
    function sortStep(vote) {
        let { sortedIndexes, currentComparisonLeft, currentComparisonRight, comparisonHeadLeft, comparisonHeadRight, comparisonResults, finishSize } = state;

        const leftIndex = sortedIndexes[currentComparisonLeft][comparisonHeadLeft];
        const rightIndex = sortedIndexes[currentComparisonRight][comparisonHeadRight];
        const leftSong = state.entries[leftIndex];
        const rightSong = state.entries[rightIndex];

        // Weighting factor: 70% user vote, 30% popularity (adjustable)
        const voteWeight = 0.7;
        const popularityWeight = 0.3;

        // Determine winner based on weighted decision
        let decision = vote; // Default to user vote
        if (leftSong.popularity !== null && rightSong.popularity !== null) {
            const popularityDiff = rightSong.popularity - leftSong.popularity; // Higher popularity wins
            const weightedVote = vote ? 1 : -1;
            const combinedScore = (weightedVote * voteWeight) + (popularityDiff / 1000 * popularityWeight); // Normalize popularity
            decision = combinedScore > 0; // True if right wins, false if left wins
        }

        if (decision) { // Right wins
            comparisonResults.push(rightIndex);
            comparisonHeadRight++;
        } else { // Left wins
            comparisonResults.push(leftIndex);
            comparisonHeadLeft++;
        }
        finishSize++;

        if (comparisonHeadLeft >= sortedIndexes[currentComparisonLeft].length || comparisonHeadRight >= sortedIndexes[currentComparisonRight].length) {
            while (comparisonHeadLeft < sortedIndexes[currentComparisonLeft].length) {
                comparisonResults.push(sortedIndexes[currentComparisonLeft][comparisonHeadLeft]);
                comparisonHeadLeft++;
                finishSize++;
            }
            while (comparisonHeadRight < sortedIndexes[currentComparisonRight].length) {
                comparisonResults.push(sortedIndexes[currentComparisonRight][comparisonHeadRight]);
                comparisonHeadRight++;
                finishSize++;
            }

            const newSortedIndexes = sortedIndexes.slice(0, -2);
            newSortedIndexes[state.segmentParents[currentComparisonLeft]] = comparisonResults;
            const newLeft = currentComparisonLeft - 2;
            const newRight = currentComparisonRight - 2;

            if (newLeft < 0) {
                state.finishFlag = true;
                state.sortedEntries = comparisonResults.map(index => state.entries[index]);
            }

            state.sortedIndexes = newSortedIndexes;
            state.currentComparisonLeft = newLeft;
            state.currentComparisonRight = newRight;
            state.comparisonHeadLeft = 0;
            state.comparisonHeadRight = 0;
            state.comparisonResults = [];
            state.finishSize = finishSize;
        } else {
            state.comparisonHeadLeft = comparisonHeadLeft;
            state.comparisonHeadRight = comparisonHeadRight;
            state.comparisonResults = comparisonResults;
            state.finishSize = finishSize;
        }
        console.log("Estado tras voto:", state);
    }

    // Mostrar siguiente comparación
    function nextMatch() {
        if (state.finishFlag) {
            showRanking();
            return;
        }

        if (state.finishSize === 0) {
            initSorter();
        }

        const leftIndex = state.sortedIndexes[state.currentComparisonLeft][state.comparisonHeadLeft];
        const rightIndex = state.sortedIndexes[state.currentComparisonRight][state.comparisonHeadRight];
        updateDOM(leftIndex, rightIndex);
        addVoteListeners();
    }

    // Actualizar DOM con información de los países
    function updateDOM(leftIndex, rightIndex) {
        const percentage = state.totalSize > 0 ? Math.round((state.finishSize / state.totalSize) * 100) : 0;
        document.getElementById('progress').textContent = `${percentage}%`;
        const leftSong = state.entries[leftIndex];
        const rightSong = state.entries[rightIndex];

        document.getElementById('left-country').textContent = `${flagEmojis[leftSong.code]} ${leftSong.country.toUpperCase()} (${leftSong.year})`;
        document.getElementById('left-img').src = leftSong.image || 'default.jpg';
        document.getElementById('left-img').onerror = () => { console.log(`Imagen no cargada para ${leftSong.country}`); document.getElementById('left-img').src = 'default.jpg'; };
        document.getElementById('left-artist').textContent = leftSong.artist.toUpperCase();
        document.getElementById('left-song').textContent = leftSong.title.toUpperCase();
        document.getElementById('left-spotify').src = leftSong.spotifyId ? `https://open.spotify.com/embed/track/${leftSong.spotifyId}?utm_source=generator&theme=0` : '';
        document.getElementById('left-spotify').style.display = leftSong.spotifyId ? 'block' : 'none';

        document.getElementById('right-country').textContent = `${flagEmojis[rightSong.code]} ${rightSong.country.toUpperCase()} (${rightSong.year})`;
        document.getElementById('right-img').src = rightSong.image || 'default.jpg';
        document.getElementById('right-img').onerror = () => { console.log(`Imagen no cargada para ${rightSong.country}`); document.getElementById('right-img').src = 'default.jpg'; };
        document.getElementById('right-artist').textContent = rightSong.artist.toUpperCase();
        document.getElementById('right-song').textContent = rightSong.title.toUpperCase();
        document.getElementById('right-spotify').src = rightSong.spotifyId ? `https://open.spotify.com/embed/track/${rightSong.spotifyId}?utm_source=generator&theme=0` : '';
        document.getElementById('right-spotify').style.display = rightSong.spotifyId ? 'block' : 'none';
    }

    // Añadir listeners de voto
    function addVoteListeners() {
        const leftSection = document.getElementById('left-section');
        const rightSection = document.getElementById('right-section');

        const newLeftSection = leftSection.cloneNode(true);
        const newRightSection = rightSection.cloneNode(true);
        leftSection.parentNode.replaceChild(newLeftSection, leftSection);
        rightSection.parentNode.replaceChild(newRightSection, rightSection);

        newLeftSection.addEventListener('click', () => {
            console.log("Voto por izquierda");
            sortStep(false);
            nextMatch();
        });
        newRightSection.addEventListener('click', () => {
            console.log("Voto por derecha");
            sortStep(true);
            nextMatch();
        });
    }

    // Mostrar ranking final con ganador destacado y tabla de dos columnas
    function showRanking() {
        console.log("Mostrando ranking final...");
        const gameContainer = document.getElementById('game-container');
        const rankingContainer = document.getElementById('ranking-container');
        if (!gameContainer || !rankingContainer) return;

        gameContainer.style.display = 'none';
        rankingContainer.style.display = 'block';

        const sortedRanking = state.sortedEntries.map((entry, index) => ({
            ...entry,
            position: index + 1
        }));

        // Mostrar ganador destacado
        const winner = sortedRanking[0];
        const winnerDisplay = document.getElementById('winner-display');
        winnerDisplay.innerHTML = `
            <h2 style="font-size: 2em; margin-bottom: 10px; text-align: center;">Winner</h2>
            <img src="${winner.image || 'default.jpg'}" alt="${winner.title} - ${winner.artist}" style="width: 400px; height: auto; border-radius: 10px; display: block; margin: 10px auto;" onerror="this.src='default.jpg';">
            <p style="font-size: 1.5em; font-weight: bold; color: #ffd700; text-align: center;">
                ${flagEmojis[winner.code]} ${winner.country.toUpperCase()} (${winner.year}) - ${winner.title.toUpperCase()} - ${winner.artist.toUpperCase()}
            </p>
        `;
        winnerDisplay.style.display = 'block';

        // Mostrar ranking en cuadrícula de dos columnas
        const battleHistory = document.getElementById('battle-history');
        battleHistory.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; max-width: 800px; margin-top: 20px;">
                ${sortedRanking.map(entry => `
                    <div style="margin-bottom: 10px; font-size: 1.1em; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                        <span style="font-weight: bold;">${entry.position}.</span>
                        <span>${flagEmojis[entry.code]} ${entry.country.toUpperCase()} (${entry.year})</span>
                        <span style="display: block; margin-left: 20px;">${entry.title.toUpperCase()} - ${entry.artist.toUpperCase()}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Añadir botón de exportar
        const existingExportBtn = document.getElementById('export-btn');
        if (!existingExportBtn) {
            const exportBtn = document.createElement('button');
            exportBtn.id = 'export-btn';
            exportBtn.textContent = 'Export Ranking';
            exportBtn.style.margin = '10px';
            rankingContainer.appendChild(exportBtn);
            exportBtn.addEventListener('click', exportRanking);
        }
    }

    // Exportar ranking como imagen (solo la cuadrícula)
    function exportRanking() {
        const battleHistory = document.getElementById('battle-history');

        // Crear un contenedor temporal con solo la cuadrícula
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';
        tempContainer.innerHTML = battleHistory.innerHTML;

        document.body.appendChild(tempContainer);

        // Esperar a que las imágenes carguen (si las hubiera)
        const images = tempContainer.getElementsByTagName('img');
        const promises = Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = () => {
                    console.log(`Error cargando imagen: ${img.src}`);
                    resolve();
                };
            });
        });

        Promise.all(promises).then(() => {
            html2canvas(tempContainer, {
                backgroundColor: null,
                logging: true,
                scale: 2 // Mejorar calidad de la imagen
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'eurovision-winners-ranking-grid.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
                document.body.removeChild(tempContainer); // Limpiar
            }).catch(error => {
                console.error("Error en html2canvas:", error);
                alert("Error al generar la imagen. Consulta la consola para más detalles.");
                document.body.removeChild(tempContainer); // Limpiar incluso si falla
            });
        });
    }

    // Reiniciar torneo
    function restartTournament() {
        state.finishSize = 0;
        state.finishFlag = false;
        state.entries = shuffleArray(songsWithPopularity.map((song, index) => ({ ...song, index })));
        const gameContainer = document.getElementById('game-container');
        const rankingContainer = document.getElementById('ranking-container');
        rankingContainer.style.display = 'none';
        gameContainer.style.display = 'flex';
        const exportBtn = document.getElementById('export-btn');
        if (exportBtn) exportBtn.remove();
        nextMatch();
    }

    // Eventos
    const restartBtn = document.getElementById('restart-btn');
    const playAgainBtn = document.getElementById('play-again-btn');
    if (restartBtn) restartBtn.addEventListener('click', restartTournament);
    if (playAgainBtn) playAgainBtn.addEventListener('click', restartTournament);

    // Iniciar torneo
    nextMatch();
});