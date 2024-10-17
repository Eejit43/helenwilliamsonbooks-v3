'use client';

import submitForm, { type SubmitResponse } from '@/app/about-contact/submit-form';
import { FormEvent, useActionState, useEffect, useRef, useState } from 'react';
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

    const recaptchaRef = useRef(null as unknown as ReCAPTCHA);
    const recaptchaResultRef = useRef(null as unknown as HTMLInputElement);

    function handleReCAPTCHAChange(token: string | null) {
        recaptchaResultRef.current.value = token ?? '';
    }

    const [response, formAction, isPending] = useActionState<SubmitResponse, FormData>(submitForm, {
        message: '',
        data: { name: '', email: '', message: '', recaptchaResponse: '' },
    });

    useEffect(() => {
        switch (response.message) {
            case 'success': {
                toast.success('Message sent successfully!');
                setValidated(false);
                recaptchaRef.current.reset();
                break;
            }
            case 'captcha-failure': {
                toast.error('Failed to verify captcha!');
                recaptchaRef.current.reset();
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
            <Form className="row g-3" validated={validated} onSubmit={handleSubmit} action={formAction} noValidate>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        style={{ width: '50%' }}
                        autoComplete="name"
                        defaultValue={response.data.name}
                        disabled={isPending}
                        required
                    />
                    <Form.Control.Feedback type="invalid">Please include your name!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        style={{ width: '50%' }}
                        autoComplete="email"
                        defaultValue={response.data.email}
                        disabled={isPending}
                        required
                    />
                    <Form.Control.Feedback type="invalid">Invalid email!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        name="message"
                        as="textarea"
                        rows={6}
                        defaultValue={response.data.message}
                        disabled={isPending}
                        required
                    />
                    <Form.Control.Feedback type="invalid">Please add a message!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="recaptcha-response">
                    <ReCAPTCHA ref={recaptchaRef} sitekey="6LcEIsgdAAAAAKsmlmaoN1znHBjYrpKqPV5Wl01L" onChange={handleReCAPTCHAChange} />
                    <Form.Control
                        name="recaptcha-response"
                        ref={recaptchaResultRef}
                        className="d-none"
                        defaultValue={response.data.recaptchaResponse}
                        disabled={isPending}
                        required
                    />
                    <Form.Control.Feedback type="invalid">Please complete the reCAPTCHA!</Form.Control.Feedback>
                </Form.Group>
                <div>
                    <Button type="submit" disabled={isPending}>
                        Submit form{' '}
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden={true}
                            className={isPending ? '' : 'd-none'}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Button>
                </div>
            </Form>
        </div>
    );
}
