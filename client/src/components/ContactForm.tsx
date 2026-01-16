import { useState } from "react";
import { useContact } from "@/hooks/use-contact";

export default function ContactForm() {
  const { submit, loading, success, error } = useContact();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submit(form);
  }

  return (
    <div className="bg-secondary/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
      <h3 className="text-2xl font-display font-bold mb-2">
        Let’s Build Your Community
      </h3>

      <p className="text-muted-foreground mb-6">
        Reach out and we’ll get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg bg-secondary/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg bg-secondary/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full rounded-lg bg-secondary/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-primary text-primary-foreground py-3 font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-400 text-sm">
            Message sent successfully!
          </p>
        )}

        {error && (
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
