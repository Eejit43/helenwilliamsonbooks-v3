'use server';

export interface SubmitResponse {
    success: boolean;
}

// eslint-disable-next-line @typescript-eslint/require-await -- Server actions must be asynchronous
export default async function submitForm(previousResponse: SubmitResponse | null, formData: FormData): Promise<SubmitResponse> {
    const password = formData.get('audiobooks-password') as string;

    return { success: password === process.env.AUDIOBOOKS_PASSWORD };
}
