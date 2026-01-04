import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function sendTelegramMessage(message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  if (!token || !chatId) {
    console.error("Telegram credentials missing");
    return;
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });
    
    if (!response.ok) {
      const error = await response.text();
      console.error("Telegram API error:", error);
    }
  } catch (err) {
    console.error("Failed to send Telegram message:", err);
  }
}

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const result = await storage.createContactSubmission(input);
      
      // Send Telegram notification
      const telegramMessage = `
<b>New Contact Submission</b>
<b>Name:</b> ${input.name}
<b>Project:</b> ${input.projectName}
<b>Ecosystem:</b> ${input.ecosystem}
<b>Discord:</b> ${input.discordHandle || 'N/A'}
<b>Description:</b> ${input.description}
      `.trim();
      
      await sendTelegramMessage(telegramMessage);
      
      res.status(201).json(result);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return httpServer;
}
