'use client';

import submitForm, { type SubmitResponse } from '@/app/audiobooks/login-handler';
import Link from 'next/link';
import { type Dispatch, type SetStateAction, useActionState, useEffect } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { toast, Toaster } from 'sonner';

interface Properties {
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    setHasValidPassword: Dispatch<SetStateAction<boolean>>;
}

export default function PasswordForm({ password, setPassword, setHasValidPassword }: Properties) {
    const [response, formAction, isPending] = useActionState<SubmitResponse | null, FormData>(submitForm, null);

    useEffect(() => {
        if (!response) return;

        if (response.success) {
            toast.success('Successfully logged in!');
            setHasValidPassword(true);
        } else toast.error('Incorrect password!');
    }, [response, setHasValidPassword]);

    return (
        <>
            <Toaster richColors />
            <Form action={formAction}>
                <Form.Label htmlFor="audiobooks-password">Password</Form.Label>
                <Row>
                    <Col>
                        <Form.Control
                            aria-describedby="audiobooks-password-details"
                            id="audiobooks-password"
                            name="audiobooks-password"
                            type="password"
                            value={password}
                            required
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </Col>
                    <Col>
                        <Button disabled={!password || isPending} type="submit">
                            Submit{' '}
                            <Spinner
                                animation="border"
                                aria-hidden={true}
                                as="span"
                                className={isPending ? '' : 'd-none'}
                                role="status"
                                size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Button>
                    </Col>
                </Row>
                <Form.Text id="audiobooks-password-details" muted>
                    This content is password-protected. To request access, please send Helen a message through{' '}
                    <Link href="/about-contact">About & Contact</Link>.
                </Form.Text>
            </Form>
        </>
    );
}
