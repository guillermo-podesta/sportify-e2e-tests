import { writeFile } from "fs/promises";

const writeEmptyStorageStage = (storageStagePath: string) =>
    writeFile(
      storageStagePath,
      JSON.stringify({
        cookies: [],
        origins: []
      })
    );