import { connectToDataBase } from "@/libs/dbConfig";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    const client = await connectToDataBase();
    const {
      userId,
      fileName,
      lineNo,
      column,
      device,
      model,
      isPhysicalDevice,
      deviceType,
    } = data;

    if (data) {
      const db = client.db();

      const result = await db.collection("FirebaseCrashLogs").insertOne({
        userId: userId,
        fileName: fileName,
        lineNo: lineNo,
        column: column,
        device: device,
        model: model,
        isPhysicalDevice: isPhysicalDevice,
        deviceType: deviceType,
      });

      res.status(200).send({
        message: "Crash Logged",
        errorState: false,
        data: result,
      });

      client.close();
    }
  }
}

export default handler;
