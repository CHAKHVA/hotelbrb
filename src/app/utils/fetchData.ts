import { BlobServiceClient } from "@azure/storage-blob";

const AZURE_STORAGE_CONNECTION_STRING = process.env.CONNECTION_STRING || "";

const streamToString = async (
    stream: NodeJS.ReadableStream
): Promise<string> => {
    const chunks: string[] = [];
    return new Promise((resolve, reject) => {
        stream.on("data", (chunk: Buffer) => chunks.push(chunk.toString()));
        stream.on("end", () => resolve(chunks.join("")));
        stream.on("error", reject);
    });
};

export const fetchData = async (containerName: string): Promise<string> => {
    if (!AZURE_STORAGE_CONNECTION_STRING) {
        return JSON.stringify({
            message: "Azure Storage connection string is not configured.",
        });
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(
        AZURE_STORAGE_CONNECTION_STRING
    );
    const containerClient = blobServiceClient.getContainerClient(containerName);

    let blobs: { name: string; content: string }[] = [];
    for await (const blob of containerClient.listBlobsFlat()) {
        const blobClient = containerClient.getBlobClient(blob.name);
        const downloadBlockBlobResponse = await blobClient.download(0);
        const content = await streamToString(
            downloadBlockBlobResponse.readableStreamBody as NodeJS.ReadableStream
        );
        blobs.push({ name: blob.name, content: content });
    }

    return JSON.stringify(blobs);
};
