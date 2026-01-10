import { allTrackKeys } from '@app/audio-tracks';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { notFound, redirect } from 'next/navigation';
import { type NextRequest, NextResponse } from 'next/server';

const client = new S3Client({
    endpoint: process.env.S3_ENDPOINT!,
    region: process.env.S3_REGION!,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
    forcePathStyle: true,
});

export async function GET(request: NextRequest) {
    const track = request.nextUrl.searchParams.get('track');
    const password = request.nextUrl.searchParams.get('password');

    if (!password) return NextResponse.json({ message: 'No password provided' }, { status: 400 });
    if (password !== process.env.AUDIOBOOKS_PASSWORD) return NextResponse.json({ message: 'Invalid password' }, { status: 403 });

    if (!track || !allTrackKeys.includes(track)) return notFound();

    const getObjectCommand = new GetObjectCommand({ Bucket: process.env.S3_BUCKET!, Key: `${track}.mp3` });

    const signedUrl = await getSignedUrl(client, getObjectCommand, { expiresIn: 3600 });

    redirect(signedUrl);
}
