'use client';

import { useState, type FormEvent } from 'react';

type SubmitStatus = 'idle' | 'success' | 'error';

export default function usePost() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<SubmitStatus>('idle');

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		setIsSubmitting(true);
		setStatus('idle');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: new FormData(form),
			});

			if (!response.ok) {
				throw new Error('Contact submission failed');
			}

			form.reset();
			setStatus('success');
		} catch {
			setStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	}

	return { handleSubmit, isSubmitting, status };
}
