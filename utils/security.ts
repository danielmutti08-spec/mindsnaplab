import DOMPurify from 'dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks.
 * @param dirty The HTML string to sanitize.
 * @returns A sanitized HTML string.
 */
export function sanitizeHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['href', 'target', 'class', 'style'],
  });
}

/**
 * Sanitizes plain text input by removing dangerous characters and limiting length.
 * @param input The input string to sanitize.
 * @param maxLength Optional maximum length (default 500).
 * @returns A sanitized plain text string.
 */
export function sanitizeInput(input: string, maxLength: number = 500): string {
  return input
    .trim()
    .replace(/[<>'"]/g, '') // Remove dangerous characters
    .substring(0, maxLength); // Limit length
}

/**
 * Escapes HTML characters in a string.
 * @param str The string to escape.
 * @returns An escaped HTML string.
 */
export function escapeHTML(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Generates a random CSRF token.
 * @returns A random UUID string.
 */
export function generateCSRFToken(): string {
  return crypto.randomUUID();
}

/**
 * Validates a CSRF token against a stored token.
 * @param token The token to validate.
 * @param storedToken The token stored in the session.
 * @returns True if the tokens match.
 */
export function validateCSRFToken(token: string, storedToken: string | null): boolean {
  return !!token && token === storedToken;
}

/**
 * Checks if the current session has expired.
 * @param timeoutMs Session timeout in milliseconds (default 30 minutes).
 * @returns True if the session is still valid, false if expired.
 */
const DEFAULT_SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export function checkSessionExpiry(timeoutMs: number = DEFAULT_SESSION_TIMEOUT): boolean {
  const lastActivity = localStorage.getItem('last_activity');
  if (!lastActivity) return false;
  
  const now = Date.now();
  const elapsed = now - parseInt(lastActivity);
  
  if (elapsed > timeoutMs) {
    // Session expired
    localStorage.clear();
    sessionStorage.clear();
    return false;
  }
  
  // Update timestamp
  localStorage.setItem('last_activity', now.toString());
  return true;
}

/**
 * Performs a secure logout by clearing storage and cookies.
 */
export function secureLogout() {
  // Clear storage
  localStorage.clear();
  sessionStorage.clear();
  
  // Clear cookies
  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
  });
  
  // Redirect to home (or login if applicable)
  window.location.href = '/';
}

/**
 * Simple rate limiting logic for frontend actions.
 */
const attempts = new Map<string, number[]>();

export function checkRateLimit(identifier: string, maxAttempts = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const userAttempts = attempts.get(identifier) || [];
  
  // Remove old attempts
  const recentAttempts = userAttempts.filter(time => now - time < windowMs);
  
  if (recentAttempts.length >= maxAttempts) {
    return false; // Rate limit exceeded
  }
  
  recentAttempts.push(now);
  attempts.set(identifier, recentAttempts);
  return true;
}

/**
 * Logs a security event for monitoring.
 * @param event The name of the security event.
 * @param details Additional details about the event.
 */
export function logSecurityEvent(event: string, details: any) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href,
  };
  
  // In production, this would be sent to a logging service.
  console.warn('[SECURITY]', logEntry);
}
