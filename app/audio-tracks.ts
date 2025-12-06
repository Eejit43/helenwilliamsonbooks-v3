import { type BookId, idToTitleMap } from '@/app/books-data';

const audioTracks = (
    [
        {
            id: 'tales-from-balladhoon',
            tracks: [
                'Disk 1 Introduction',
                'The Dream, the Wish and the Silver',
                'Johnny McGlory and the Leprechaun',
                'The Fairy Hawthorn Trees',
                'A Touch of Magic',
                "The Rooster's Magic",
                'Disk 2 Introduction',
                'The Swans on Lough Darragh',
                'Songs of the Sea',
            ],
        },
        {
            id: 'a-pineapple-dream-and-other-nonsense',
            tracks: [
                'Introduction',
                'My Name is Arabella',
                'A Mouse Sat Spooning',
                'A Jigsaw Mouse',
                'Morning Gathers Light',
                'A Mouse in the House',
                "Don't Kiss Me, Mom",
                'Violets and Broomsticks',
                'A Mouse House',
                'A Pineapple Dream',
                'The Fairies in My Garden',
                'Is is True?',
                "It's Hard to Bring up Mother",
                'School Days',
                'Daydreams',
                'A Cat Lullaby',
                'Tabitha',
                'A Green Goblin',
                'This and That',
                'Songs of the Sea',
                'A One-Legged Seagull',
                'Pelican Sam',
                'A Mouse Dream',
            ],
        },
    ] as { id: BookId; tracks: string[] }[]
).map(({ id, tracks }) => {
    const title = idToTitleMap[id];

    return { id, title, tracks: tracks.map((trackName) => ({ name: trackName, key: `${trackName} - ${title}` })) };
}) satisfies { id: BookId; title: string; tracks: { name: string; key: string }[] }[];

export default audioTracks;

export const allTrackKeys = audioTracks.flatMap((album) => album.tracks.map((track) => track.key));
