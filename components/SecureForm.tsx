import React, { useState, useEffect } from 'react';
import { validateCSRFToken, logSecurityEvent } from '../utils/security';

interface SecureFormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  actionName: string;
}

/**
 * A wrapper component for forms that adds CSRF protection and logging.
 */
export const SecureForm: React.FC<SecureFormProps> = ({ onSubmit, children, actionName }) => {
  const [csrfToken, setCsrfToken] = useState<string>('');

  useEffect(() => {
    const token = sessionStorage.getItem('csrf_token');
    if (token) {
      setCsrfToken(token);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const submittedToken = formData.get('_csrf') as string;
    const storedToken = sessionStorage.getItem('csrf_token');

    if (!validateCSRFToken(submittedToken, storedToken)) {
      logSecurityEvent('CSRF_VALIDATION_FAILURE', { action: actionName });
      alert('Security validation failed. Please refresh the page.');
      return;
    }

    const data = Object.fromEntries(formData.entries());
    delete data._csrf; // Remove token from actual data
    
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_csrf" value={csrfToken} />
      {children}
    </form>
  );
};
