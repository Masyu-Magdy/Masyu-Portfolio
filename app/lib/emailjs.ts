import emailjs from "@emailjs/browser";

const SERVICE_ID = "masyu-magdy";
const TEMPLATE_ID = "masyu-magdy";
const PUBLIC_KEY = "5IrKFC75WXHRAS13T";

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "masyumagdy@gmail.com",
      },
      PUBLIC_KEY,
    );
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};
