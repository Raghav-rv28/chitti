// import { validateRequest } from "../middlewares/validateRequest.js";
// import {
//   findActiveChat,
//   addStreamer,
//   interval,
// } from "../helper/chat-polling.js";
// import { Router, Request, Response } from "express";
// import { testAlertSchema } from "../config/schema.js";
// import { AlertData, CustomRequest } from "../config/types.js";
// import { sendAlert } from "../config/websocket.js";
// import { wss } from "../app.js";
//
// const routerYoutube = Router();
//
// /**
//  * Start tracking a YouTube stream
//  * TODO: add authentication
//  */
// routerYoutube.get(
//   "/start-stream/:channelId",
//   async (req: Request, res: Response) => {
//     const { channelId } = req.params;
//     const broadcastId = await findActiveChat(channelId);
//     if (broadcastId !== null) {
//       await addStreamer(channelId, broadcastId);
//       interval.ref();
//     } else {
//       res.sendStatus(500);
//     }
//     res.sendStatus(200);
//   },
// );
//
// /**
//  * Trigger a test alert (TTS)
//  * TODO: add authentication
//  */
// routerYoutube.post(
//   "/test-alert",
//   validateRequest(testAlertSchema),
//   (req: CustomRequest, res: Response) => {
//     const { userId, alertData }: { userId: string; alertData: AlertData } =
//       req.body;
//     // triggerTTS(ttsText, { userId: userId });
//     sendAlert(userId, alertData, wss);
//     res.sendStatus(200);
//   },
// );
// export default routerYoutube;
