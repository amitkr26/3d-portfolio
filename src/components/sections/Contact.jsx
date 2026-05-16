import { useRef, useState } from "react";
import styled from "styled-components";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { profile } from "../../data/profile";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.7;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}44;
    background: ${({ theme }) => theme.colors.primaryDim};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textDim};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  resize: vertical;
  min-height: 120px;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const StatusMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.md};
  text-align: center;

  ${({ $type, theme }) =>
    $type === "success"
      ? `background: ${theme.colors.success}11; color: ${theme.colors.success}; border: 1px solid ${theme.colors.success}33;`
      : $type === "error"
        ? `background: ${theme.colors.danger}11; color: ${theme.colors.danger}; border: 1px solid ${theme.colors.danger}33;`
        : "display: none;"}
`;

const contacts = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedin,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    label: "GitHub",
    value: profile.github,
    href: profile.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  }
];

export function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.from_email || !data.message) {
      setStatus({ type: "error", text: "Email and message are required." });
      setSubmitting(false);
      return;
    }

    try {
      const { default: emailjs } = await import("@emailjs/browser");

      const result = await emailjs.sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        form,
        "SybVGsYS52j2TfLbi"
      );

      if (result.status === 200) {
        setStatus({ type: "success", text: "Message sent. I'll respond shortly." });
        form.reset();
      } else {
        throw new Error("Send failed");
      }
    } catch {
      setStatus({ type: "error", text: "Failed to send. You can email me directly at " + profile.email });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section id="contact" label="Connect" title="Get in Touch">
      <Grid>
        <InfoCol>
          <div>
            <InfoTitle>Let&apos;s talk</InfoTitle>
            <InfoText>
              I&apos;m always open to discussing research collaborations, engineering projects,
              or opportunities in semiconductor technology and embedded systems.
            </InfoText>
          </div>

          <ContactList>
            {contacts.map((c) => (
              <ContactItem
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={c.label}
              >
                {c.icon}
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>{c.label}</div>
                  <span>{c.value}</span>
                </div>
              </ContactItem>
            ))}
          </ContactList>
        </InfoCol>

        <Form ref={formRef} onSubmit={handleSubmit} noValidate>
          <Field>
            <Label htmlFor="from_name">Name</Label>
            <Input
              id="from_name"
              name="from_name"
              type="text"
              placeholder="Your name"
            />
          </Field>
          <Field>
            <Label htmlFor="from_email">Email *</Label>
            <Input
              id="from_email"
              name="from_email"
              type="email"
              required
              placeholder="your@email.com"
            />
          </Field>
          <Field>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
            />
          </Field>
          <Field>
            <Label htmlFor="message">Message *</Label>
            <TextArea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              rows={5}
            />
          </Field>

          <Button
            as="button"
            type="submit"
            variant="primary"
            disabled={submitting}
            style={{ alignSelf: "flex-start" }}
          >
            {submitting ? "Sending..." : "Send Message"}
          </Button>

          {status && (
            <StatusMessage $type={status.type} role="alert">
              {status.text}
            </StatusMessage>
          )}
        </Form>
      </Grid>
    </Section>
  );
}
