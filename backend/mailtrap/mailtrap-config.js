
import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();
const TOKEN = "286f8dbcced7bd0d79a9bdc71ec5b28f";

export const client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};




