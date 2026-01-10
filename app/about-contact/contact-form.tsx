'use client';

import submitForm, { type SubmitResponse } from '@app/about-contact/submit-form';
import { type FormEvent, useActionState, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import ReCAPTCHA from 'react-google-recaptcha';
import { Toaster, toast } from 'sonner';

export default function ContactForm() {
    const [validated, setValidated] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        setValidated(true);

        if (!event.currentTarget.checkValidity()) event.preventDefault();
    }

    const reCaptchaReference = useRef<ReCAPTCHA>(null);
    const reCaptchaResultReference = useRef<HTMLInputElement>(null);

    function handleReCaptchaChange(token: string | null) {
        reCaptchaResultReference.current!.value = token ?? '';
    }

    const [response, formAction, isPending] = useActionState<SubmitResponse, FormData>(submitForm, {
        message: '',
        data: { name: '', email: '', message: '', recaptchaResponse: '' },
    });

    useEffect(() => {
        switch (response.message) {
            case 'success': {
                toast.success('Message sent successfully!');
                setValidated(false); // eslint-disable-line react-hooks/set-state-in-effect
                reCaptchaReference.current!.reset();
                break;
            }
            case 'captcha-failure': {
                toast.error('Failed to verify captcha!');
                reCaptchaReference.current!.reset();
                break;
            }
            case 'error': {
                toast.error('Failed to send message!');
                break;
            }
        }
    }, [response]);

    return (
        <div id="form-container">
            <Toaster richColors />
            <noscript>
                <div id="noscript-overlay">
                    <p>This form requires JavaScript to function properly! Please enable it and reload!</p>
                </div>
            </noscript>
            <Form action={formAction} className="row g-3" validated={validated} noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoComplete="name"
                        defaultValue={response.data.name}
                        disabled={isPending}
                        name="name"
                        style={{ width: '50%' }}
                        type="text"
                        required
                    />
                    <Form.Control.Feedback type="invalid">Please include your name!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoComplete="email"
                        defaultValue={response.data.email}
                        disabled={isPending}
                        name="email"
                        style={{ width: '50%' }}
                        type="email"
                        required
                    />
                    <Form.Control.Feedback type="invalid">Invalid email!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        defaultValue={response.data.message}
                        disabled={isPending}
                        name="message"
                        rows={6}
                        required
                    />
                    <Form.Control.Feedback type="invalid">Please add a message!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="recaptcha-response">
                    <ReCAPTCHA
                        ref={reCaptchaReference}
                        sitekey="6LcEIsgdAAAAAKsmlmaoN1znHBjYrpKqPV5Wl01L"
                        onChange={handleReCaptchaChange}
                    />
                    <Form.Control
                        ref={reCaptchaResultReference}
                        className="d-none"
                        defaultValue={response.data.recaptchaResponse}
                        disabled={isPending}
                        name="recaptcha-response"
                        required
                    />
                    <Form.Control.Feedback type="invalid">Please complete the reCAPTCHA!</Form.Control.Feedback>
                </Form.Group>
                <div>
                    <Button disabled={isPending} type="submit">
                        Submit form{' '}
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
                </div>
            </Form>
        </div>
    );
}
