"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiShield,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { sendContactEmail } from "../lib/emailjs";

const contactSchema = z.object({
  name: z.string().min(2, "The name is required"),
  email: z.string().email("Invalid Email"),
  subject: z.string().min(5, "Subject is required "),
  message: z.string().min(10, "The message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "masyumagdy@gmail.com",
    href: "mailto:masyumagdy@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+20 127 212 4355",
    href: "tel:+201272124355",
  },
  { icon: FiMapPin, label: "Location", value: "Sohag, Egypt", href: "#" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await sendContactEmail(data);

      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("An error occurred while sending the message. Try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-orbitron font-bold">
            <span className="text-text-secondary">&lt;</span>
            Contact
            <span className="text-text-secondary">/&gt;</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full border border-primary/30 bg-gray-900 text-primary font-semibold text-md font-orbitron">
            ENCRYPTED COMMUNICATION
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold font-orbitron text-blue-700">
              Let's Connect
            </h2>

            <p className="text-text-secondary leading-relaxed pt-4">
              Have a project in mind or want to collaborate? I'm always open to
              discussing new opportunities, challenges, or just tech in general.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">
                        {info.label}
                      </div>
                      <a
                        href={info.href}
                        className="text-white hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="glass p-4 border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <FiShield size={16} className="text-primary" />
                <span className="text-xs font-orbitron text-primary">
                  SECURE CHANNEL
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                All communications are encrypted and confidential
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass p-6 md:p-8">
              {submitted && (
                <div className="flex items-center gap-2 p-4 mb-4 rounded-lg bg-primary/10 border border-primary/30 text-primary">
                  <FiCheckCircle size={20} />
                  <span>
                    ✓ The message has been sent! I will reply to you soon.
                  </span>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 p-4 mb-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                  <FiAlertCircle size={20} />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-text-secondary mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/20 text-white placeholder-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-text-secondary mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/20 text-white placeholder-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-text-secondary mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject "
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/20 text-white placeholder-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-text-secondary mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Your Message"
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/20 text-white placeholder-text-secondary/50 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-primary text-dark font-orbitron font-bold hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-secondary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={18} />
                        Send the message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
