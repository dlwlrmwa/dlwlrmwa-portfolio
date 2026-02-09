import React, { useState } from 'react';
import { Mail, X, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [emailForm, setEmailForm] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Log the values (remove in production)
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey ? publicKey.substring(0, 5) + '...' : 'undefined');

    // Check if credentials are missing
    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured. Please contact Eliza directly at abing.eliza@gmail.com');
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: emailForm.senderName,
          from_email: emailForm.senderEmail,
          subject: emailForm.subject,
          message: emailForm.message,
          to_email: 'abing.eliza@gmail.com',
        },
        publicKey
      );

      setIsSent(true);
      setEmailForm({ senderName: '', senderEmail: '', subject: '', message: '' });

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsSent(false);
        onClose();
      }, 2000);

    } catch (err: any) {
      console.error('EmailJS Error:', err);
      
      // Show more specific error message
      if (err?.status === 412) {
        setError('Invalid EmailJS credentials. Please check your Service ID, Template ID, and Public Key.');
      } else if (err?.text) {
        setError(`Failed to send: ${err.text}`);
      } else {
        setError('Failed to send email. Please try again or contact Eliza directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setError('');
    setIsSent(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md mx-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-neutral-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Mail size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-[16px] font-bold">Send Email</h3>
              <p className="text-[12px] text-slate-500">to abing.eliza@gmail.com</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        {/* Success Message */}
        {isSent ? (
          <div className="p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <CheckCircle2 size={32} className="text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-[18px] font-bold mb-2">Email Sent!</h4>
            <p className="text-[14px] text-slate-500">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
        /* Form */
        <form onSubmit={handleEmailSubmit} className="p-5 space-y-4">
          {error && (
            <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-[13px]">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Your Name</label>
              <input
                type="text"
                required
                value={emailForm.senderName}
                onChange={(e) => setEmailForm({ ...emailForm, senderName: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-xl text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                placeholder="John Doe"
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Your Email</label>
              <input
                type="email"
                required
                value={emailForm.senderEmail}
                onChange={(e) => setEmailForm({ ...emailForm, senderEmail: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-xl text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                placeholder="john@example.com"
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Subject</label>
            <input
              type="text"
              required
              value={emailForm.subject}
              onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-xl text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
              placeholder="Project Inquiry"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Message</label>
            <textarea
              required
              rows={4}
              value={emailForm.message}
              onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-xl text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
              placeholder="Hi Eliza, I'd like to discuss..."
              disabled={isLoading}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-300 rounded-xl text-[13px] font-bold hover:bg-slate-200 dark:hover:bg-neutral-700 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-[13px] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Mail size={16} /> Send Email
                </>
              )}
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default EmailModal;