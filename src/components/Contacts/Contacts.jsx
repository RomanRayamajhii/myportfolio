import emailjs from "@emailjs/browser";
import { motion as Motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import GithubIcon from "../../assets/github.png";
import LinkedinIcon from "../../assets/linkedin2.png";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const ownerEmail = "romanraya4@gmail.com";

const Contacts = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactUsTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_US_TEMPLATE_ID;
    const autoreplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !contactUsTemplateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured yet. Please add your EmailJS contact template.",
      });
      return;
    }

    try {
      setIsSending(true);
      setStatus({ type: "", message: "" });

      const contactParams = {
        to_email: ownerEmail,
        to_name: "Roman Rayamajhi",
        name: formData.name,
        email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: `Portfolio message from ${formData.name} (${formData.email})`,
        message: formData.message,
      };

      await emailjs.send(serviceId, contactUsTemplateId, contactParams, {
        publicKey,
      });

      if (autoreplyTemplateId) {
        const autoreplyParams = {
          ...contactParams,
          to_email: formData.email,
          to_name: formData.name,
        };

        emailjs.send(serviceId, autoreplyTemplateId, autoreplyParams, {
          publicKey,
        }).catch((error) => {
          console.error("EmailJS autoreply failed:", error);
        });
      }

      setFormData(initialFormData);
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus({
        type: "error",
        message: "Sorry, the message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-200">Contact</p>
          <h2 className="section-title mt-3 text-4xl md:text-6xl">Let us build something useful.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Have a project idea, collaboration, or role in mind? Send a message and I will get back to you.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="mailto:romanraya4@gmail.com"
              className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-teal-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/romanrayamajhi/"
              target="_blank"
              rel="noreferrer"
              className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-teal-200"
              aria-label="LinkedIn"
            >
              <img src={LinkedinIcon} alt="" className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/RomanRayamajhii"
              target="_blank"
              rel="noreferrer"
              className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-teal-200"
              aria-label="GitHub"
            >
              <img src={GithubIcon} alt="" className="h-5 w-5" />
            </a>
          </div>
        </Motion.div>

        <Motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-2xl p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-teal-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-teal-300"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="mt-4 h-36 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-teal-300"
          />
          {status.message ? (
            <p
              className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-teal-300/30 bg-teal-300/10 text-teal-100"
                  : "border-rose-300/30 bg-rose-300/10 text-rose-100"
              }`}
              role="status"
            >
              {status.message}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={isSending}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-300 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-200 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-200 disabled:shadow-none"
          >
            {isSending ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>
        </Motion.form>
      </div>
    </section>
  );
};

export default Contacts;
