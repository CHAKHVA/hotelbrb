import { fetchData } from "@/app/utils/fetchData";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await fetchData("foods");
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Error fetching from Azure Blob Storage",
            error,
        });
    }
}
