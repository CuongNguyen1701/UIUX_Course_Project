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
                <span className="capitalize min-w-24 py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
                    {status}
                </span>
            )
        case 'Bắt đầu thực hiện':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
                    {status}
                </span>
            )
        case 'Thực hiện một chút':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
                    {status}
                </span>
            )
        case 'Đang thực hiện':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
                    {status}
                </span>
            )
        case 'Sắp hoàn thành':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
                    {status}
                </span>
            )
        default:
            return (
                <span className="min-w-32 capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
                    {status}
                </span>
            )
    }
}