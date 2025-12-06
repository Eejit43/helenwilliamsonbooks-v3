import { type BookId, idToTitleMap } from '@/app/books-data';

const audioTracks = (
    [
        {
            id: 'tales-from-balladhoon',
            tracks: [
                { name: 'Disk 1 Introduction', duration: '0:37' },
                { name: 'The Dream, the Wish and the Silver', duration: '13:30' },
                { name: 'Johnny McGlory and the Leprechaun', duration: '8:55' },
                { name: 'The Fairy Hawthorn Trees', duration: '12:31' },
                { name: 'A Touch of Magic', duration: '16:39' },
                { name: "The Rooster's Magic", duration: '14:13' },
                { name: 'Disk 2 Introduction', duration: '0:36' },
                { name: 'The Swans on Lough Darragh', duration: '31:19' },
                { name: 'Songs of the Sea', duration: '1:39' },
            ],
        },
        {
            id: 'a-pineapple-dream-and-other-nonsense',
            tracks: [
                { name: 'Introduction', duration: '0:48' },
                { name: 'My Name is Arabella', duration: '0:28' },
                { name: 'A Mouse Sat Spooning', duration: '0:49' },
                { name: 'A Jigsaw Mouse', duration: '0:56' },
                { name: 'Morning Gathers Light', duration: '0:40' },
                { name: 'A Mouse in the House', duration: '0:39' },
                { name: "Don't Kiss Me, Mom", duration: '0:32' },
                { name: 'Violets and Broomsticks', duration: '0:22' },
                { name: 'A Mouse House', duration: '0:16' },
                { name: 'A Pineapple Dream', duration: '0:33' },
                { name: 'The Fairies in My Garden', duration: '0:53' },
                { name: 'Is is True?', duration: '0:21' },
                { name: "It's Hard to Bring up Mother", duration: '0:23' },
                { name: 'School Days', duration: '0:41' },
                { name: 'Daydreams', duration: '1:07' },
                { name: 'A Cat Lullaby', duration: '0:28' },
                { name: 'Tabitha', duration: '0:29' },
                { name: 'A Green Goblin', duration: '0:40' },
                { name: 'This and That', duration: '0:27' },
                { name: 'Songs of the Sea', duration: '1:28' },
                { name: 'A One-Legged Seagull', duration: '0:18' },
                { name: 'Pelican Sam', duration: '0:18' },
                { name: 'A Mouse Dream', duration: '0:49' },
            ],
        },
    ] as { id: BookId; tracks: { name: string; duration: string }[] }[]
).map(({ id, tracks }) => {
    const title = idToTitleMap[id];

    return { id, title, tracks: tracks.map((track) => ({ ...track, key: `${track.name} - ${title}` })) };
}) satisfies { id: BookId; title: string; tracks: { name: string; duration: string; key: string }[] }[];

export default audioTracks;

export const allTrackKeys = audioTracks.flatMap((album) => album.tracks.map((track) => track.key));
