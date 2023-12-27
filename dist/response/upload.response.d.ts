export default class UploadResponse {
    url: string;
    fileName: string;
    static fromUpload(file: any): UploadResponse;
}
