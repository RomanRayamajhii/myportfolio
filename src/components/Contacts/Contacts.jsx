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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_US_TEMPLATE_ID;
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !contactTemplateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured properly.",
      });
      return;
    }

    try {
      setIsSending(true);
      setStatus({ type: "", message: "" });

      // 📩 EMAIL TO YOU (OWNER)
      const contactParams = {
        to_name: "Roman Rayamajhi",
        to_email: ownerEmail,

        from_name: formData.name,
        from_email: formData.email,

        subject: `New message from ${formData.name}`,
        message: formData.message,

        reply_to: formData.email,
      };

      await emailjs.send(serviceId, contactTemplateId, contactParams, {
        publicKey,
      });

      // 📩 AUTO REPLY TO USER
      if (autoReplyTemplateId) {
        const autoReplyParams = {
          to_name: formData.name,
          to_email: formData.email,

          from_name: "Roman Rayamajhi",
          message: formData.message,
        };

        emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, {
          publicKey,
        }).catch((err) => {
          console.error("Auto-reply failed:", err);
        });
      }

      // RESET FORM
      setFormData(initialFormData);

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });

    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT SIDE */}
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase text-teal-200">Contact</p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Let’s build something together
          </h2>

          <p className="mt-4 text-slate-300">
            Have a project or idea? Send a message and I’ll respond soon.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="mailto:romanraya4@gmail.com" className="icon-btn">
              <Mail size={20} />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="icon-btn"
            >
              <img src={LinkedinIcon} className="h-5 w-5" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="icon-btn"
            >
              <img src={GithubIcon} className="h-5 w-5" />
            </a>
          </div>
        </Motion.div>

        {/* RIGHT SIDE FORM */}
        <Motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-2xl p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-4 h-40 w-full resize-none input"
          />

          {status.message && (
            <p
              className={`mt-4 rounded-lg p-3 text-sm ${
                status.type === "success"
                  ? "bg-green-500/20 text-green-300"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-400 py-3 font-semibold text-black hover:bg-teal-300 disabled:opacity-50"
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