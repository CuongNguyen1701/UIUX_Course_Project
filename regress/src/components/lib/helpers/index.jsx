export default function getOrderStatus(process) {
    let status;
    if (process <= 0) {
        status = "Chưa thực hiện";
    } else if (process < 30) {
        status = "Bắt đầu thực hiện";
    } else if (process <= 50) {
        status = "Thực hiện một chút";
    } else if (process < 80) {
        status = "Đang thực hiện";
    } else if (process < 100) {
        status = "Sắp hoàn thành";
    } else {
        status = "Hoàn thành";
    }

    switch (status) {
        case 'Chưa thực hiện':
            return (
                <span className="ml-4 py-1 px-2 rounded-md text-md text-teal-600 bg-teal-100">
                    {status}
                </span>
            )
        case 'Bắt đầu thực hiện':
            return (
                <span className="ml-4 py-1 px-2 rounded-md text-md text-orange-600 bg-orange-100">
                    {status}
                </span>
            )
        case 'Thực hiện một chút':
            return (
                <span className="ml-4 py-1 px-2 rounded-md text-md text-yellow-600 bg-yellow-100">
                    {status}
                </span>
            )
        case 'Đang thực hiện':
            return (
                <span className="ml-4 py-1 px-2 rounded-md text-md text-sky-600 bg-sky-100">
                    {status}
                </span>
            )
        case 'Sắp hoàn thành':
            return (
                <span className="ml-4 py-1 px-2 rounded-md text-md text-green-600 bg-green-100">
                    {status}
                </span>
            )
        default:
            return (
                <span className="ml-4 py-1 px-2 rounded-md text-md text-green-700 bg-green-300">
                    {status}
                </span>
            )
    }
}