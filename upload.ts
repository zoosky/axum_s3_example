interface UploadResponse {
    url: string;
}

async function uploadFile(file: Blob, filename?: string): Promise<UploadResponse | "error"> {
    const data = new FormData();
    data.append("upload", file, filename);
    const response = await fetch("/uploads", {
        method: "post",
        body: data
    });
    if (response.status >= 200 && response.status <= 299) {
        const responseBody = await response.json();
        console.log(responseBody);
        return responseBody;
    } else {
        return "error";
    }
}

async function main() {
    const filename = 'axum.png';
    const fileData = await Deno.readFile(filename);
    const fileBlob = new Blob([fileData]);

    uploadFile(fileBlob, filename);
}

main();

function calculateDaysBetweenDates(begin, end) {
    
}