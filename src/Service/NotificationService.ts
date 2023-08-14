import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
class NotificationService{

    public success(msg:string) {
        toast.success(msg);
    }

    public error(msg: any) {
        toast.error(this.msgFormatter(msg));
    }

    public msgFormatter(msg: any): string {
        const str = msg as AxiosError;
        if (str?.response?.data) {
            return str?.response?.data as string;
        }

        return "Something went wrong!!!"
    }
}

const notifyService = new NotificationService();
export default notifyService;