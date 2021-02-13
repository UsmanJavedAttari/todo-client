export class ApiResponseModel<T> {
    public Data?: T;
    public Message: string | null = null;
    public Status = false;
}
